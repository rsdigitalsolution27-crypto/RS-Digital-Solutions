#!/usr/bin/env node
/**
 * Prerender script — runs after `vite build`.
 * Spins up a local HTTP server on dist/, then crawls each route with
 * Puppeteer to capture the fully-rendered HTML (with Helmet meta-tags,
 * structured data, content all populated). Saves output as
 * dist/<route>/index.html so Vercel file-system routing serves it.
 */

import http from 'node:http';
import { createReadStream, statSync, mkdirSync, writeFileSync } from 'node:fs';
import { resolve, join, extname, dirname } from 'node:path';
import puppeteer from 'puppeteer';

const PORT = 5174;
const DIST = resolve('dist');
const ROUTES = ['/', '/leistungen', '/referenzen', '/about', '/48h', '/ki'];
const SETTLE_MS = 1200;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.json': 'application/json',
  '.xml': 'application/xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
};

/**
 * react-helmet-async sometimes emits multiple <title> and stacked meta-tag
 * blocks (one per Helmet render lifecycle). Browsers handle this by reading
 * the first <title> and last meta, but Google bots vary. So we post-process
 * the captured HTML to keep:
 *   - first <title> (page-specific, placed first by Helmet)
 *   - last occurrence of each meta[name=…] / meta[property=…] / link[rel=canonical]
 *     (Helmet appends current state at the bottom)
 */
function dedupeHead(html) {
  // 1) Keep only the first <title>...</title>
  let titleSeen = false;
  html = html.replace(/<title>[^<]*<\/title>/g, (m) => {
    if (titleSeen) return '';
    titleSeen = true;
    return m;
  });

  // 2) For meta[name|property]=X and link[rel=canonical], keep only the last
  //    occurrence (Helmet's most recently emitted = current page).
  const tagRe = /<(?:meta|link)\b[^>]*>/g;
  const tags = [];
  let m;
  while ((m = tagRe.exec(html)) !== null) {
    const tag = m[0];
    let key = null;
    const nameMatch = tag.match(/\sname\s*=\s*"([^"]+)"/);
    const propMatch = tag.match(/\sproperty\s*=\s*"([^"]+)"/);
    const relMatch = tag.match(/<link\b[^>]*\srel\s*=\s*"canonical"/);
    if (nameMatch) key = `meta:name:${nameMatch[1]}`;
    else if (propMatch) key = `meta:property:${propMatch[1]}`;
    else if (relMatch) key = `link:canonical`;
    tags.push({ index: m.index, length: tag.length, key });
  }
  // Group by key, mark all but the LAST occurrence for removal
  const lastByKey = new Map();
  for (const t of tags) {
    if (t.key) lastByKey.set(t.key, t.index);
  }
  // Remove duplicates from end to preserve indices
  for (let i = tags.length - 1; i >= 0; i--) {
    const t = tags[i];
    if (!t.key) continue;
    if (lastByKey.get(t.key) !== t.index) {
      html = html.slice(0, t.index) + html.slice(t.index + t.length);
    }
  }

  return html;
}

function makeServer() {
  return http.createServer((req, res) => {
    let path = decodeURIComponent(req.url.split('?')[0]);
    let filePath = join(DIST, path);
    let stat;
    try {
      stat = statSync(filePath);
      if (stat.isDirectory()) {
        filePath = join(filePath, 'index.html');
        stat = statSync(filePath);
      }
    } catch {
      // SPA fallback for client-side routes during prerender
      filePath = join(DIST, 'index.html');
      try { stat = statSync(filePath); } catch {
        res.writeHead(404); res.end('Not found'); return;
      }
    }
    res.writeHead(200, {
      'Content-Type': MIME[extname(filePath)] || 'application/octet-stream',
      'Content-Length': stat.size,
    });
    createReadStream(filePath).pipe(res);
  });
}

const server = makeServer();
await new Promise((r, reject) => {
  server.once('error', reject);
  server.listen(PORT, r);
});
console.log(`> Prerender server listening on http://localhost:${PORT}`);

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

let succeeded = 0;
let failed = 0;

for (const route of ROUTES) {
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(`http://localhost:${PORT}${route}`, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });
    // Give Helmet + Motion + scroll-animations time to settle
    await new Promise((r) => setTimeout(r, SETTLE_MS));

    const html = dedupeHead(await page.content());
    const outPath = route === '/'
      ? join(DIST, 'index.html')
      : join(DIST, route.slice(1), 'index.html');

    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, html, 'utf-8');
    await page.close();

    const rel = outPath.replace(DIST + '/', '');
    console.log(`  ✓ ${route.padEnd(14)} → dist/${rel}  (${(html.length / 1024).toFixed(1)} KB)`);
    succeeded++;
  } catch (err) {
    console.error(`  ✗ ${route} — ${err.message}`);
    failed++;
  }
}

await browser.close();
server.close();

console.log(`> Prerendered ${succeeded}/${ROUTES.length} routes${failed ? ` (${failed} failed)` : ''}`);
if (failed) process.exit(1);
