#!/usr/bin/env node
/**
 * Local static server that mimics Vercel's file-system routing:
 *  - /             → dist/index.html
 *  - /leistungen   → dist/leistungen/index.html  (cleanUrls)
 *  - /assets/*.js  → direct file
 *  - /unknown      → dist/index.html (SPA fallback)
 *
 * Run AFTER `npm run build` to preview the prerendered output.
 */

import http from 'node:http';
import { createReadStream, statSync } from 'node:fs';
import { resolve, join, extname } from 'node:path';

const PORT = process.env.PORT || 5180;
const DIST = resolve('dist');

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

function tryFile(p) {
  try {
    const stat = statSync(p);
    return stat.isFile() ? { path: p, stat } : null;
  } catch {
    return null;
  }
}

function resolvePath(reqPath) {
  // Static asset with extension → direct lookup
  if (extname(reqPath)) {
    return tryFile(join(DIST, reqPath));
  }
  // Clean URL: try directory/index.html first, then path.html, then SPA fallback
  const direct = tryFile(join(DIST, reqPath, 'index.html'));
  if (direct) return direct;
  const html = tryFile(join(DIST, reqPath + '.html'));
  if (html) return html;
  // SPA fallback
  return tryFile(join(DIST, 'index.html'));
}

const server = http.createServer((req, res) => {
  const path = decodeURIComponent(req.url.split('?')[0]);
  const file = resolvePath(path);
  if (!file) {
    res.writeHead(404);
    res.end('Not found');
    return;
  }
  res.writeHead(200, {
    'Content-Type': MIME[extname(file.path)] || 'application/octet-stream',
    'Content-Length': file.stat.size,
  });
  createReadStream(file.path).pipe(res);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`> SSG Preview running at:`);
  console.log(`    http://localhost:${PORT}`);
  console.log(`    http://172.20.10.2:${PORT}  (für iPhone-Test im selben Netzwerk)`);
  console.log('');
  console.log('Drücke Ctrl+C zum Beenden.');
});
