# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Inhaber und Entscheider kleiner und mittlerer Unternehmen in Stuttgart und Umgebung, die digital sichtbar werden oder Abläufe automatisieren wollen, ohne selbst Technik-Know-how zu haben. Vier bestätigte Kernsegmente:

- Gastronomie (Online-Bestellung, Reservierung)
- Terminbasierte Betriebe: Friseure, Praxen, Beratungen (Online-Terminbuchung)
- Einzelhandel, der online verkaufen will (E-Commerce)
- Lokale KMU und Dienstleister allgemein (Website, SEO, KI)

Typische Situation: volles Tagesgeschäft, keine Zeit für monatelange Website-Projekte, Frust über unbeantwortete Anfragen und Telefon-Unterbrechungen.

## Product Purpose

Die Website ist der Vertriebskanal der Agentur RS Digital Solutions: Sie soll potentielle Kunden über deren typische Herausforderungen abholen, Lösungen und Vorgehen zeigen und zu qualifizierten Anfragen führen. **Erfolg = jede qualifizierte Kontaktaufnahme** — Calendly-Termin, Kontaktformular und E-Mail sind gleichwertig.

## Positioning

**Führendes Verkaufsargument: „Alles aus einer Hand, lokal."** Ein persönlicher Ansprechpartner in Stuttgart, der von Domain über Design, Shop, KI-Integration und Hosting bis Wartung alles übernimmt. 48h-Festpreis-Relaunch und KI-Automatisierung sind unterstützende Angebote, nicht die Führungsbotschaft.

## Operating Context

- Besucher kommen über lokale Google-Suchen („Webagentur Stuttgart"), KI-Suchmaschinen (GEO-Strategie mit FAQ/llms.txt) und Empfehlungen.
- Konversionspfade: Calendly (`https://calendly.com/info-rs-digitalsolutions`), Kontaktformular (FormSubmit-AJAX an info@rs-digitalsolutions.de, DSGVO-Checkbox, Rückruf-Feld), E-Mail.
- Betrieb: statisches SSG (React/Vite, Puppeteer-Prerender) auf eigenem Hostinger-VPS (Docker-Nginx), Auto-Deploy via GitHub Action bei Push auf `main`. Vercel (`rs-digitalsolutions.vercel.app`) dient als Staging.

## Capabilities and Constraints

- Sechs Leistungen: Webdesign (ab 1.500 €), E-Commerce (ab 2.500 €), 48h-Relaunch (Festpreis ab 1.500 €), KI-Chatbots, SEO, Terminbuchungssoftware. Preise sind öffentlich und verbindlich kommuniziert.
- Inhaber ist Einzelunternehmer (Daniel Raja-Nigl); Texte sprechen als „wir", behaupten aber kein Team („unser Team" wurde bewusst entfernt).
- **Keine öffentliche Telefonnummer** (private Nummer darf nicht erscheinen); stattdessen Rückruf-Option im Formular. Ändert sich, sobald eine Geschäftsnummer existiert (siehe unten).
- Claims „in 48 Stunden online" und „bis zu 15 Std. Zeitersparnis/Woche" sind vom Inhaber bestätigt und dürfen verwendet werden.
- Alle Texte deutsch, Sie-Form. Content zentral in `src/content.js`.
- Namenskollision beachten: Es existiert eine fremde Firma „RS Digital Solutions" (Chennai, Indien) auf `rs-digital-solutions.vercel.app` — nie mit Bindestrichen zwischen den Wörtern verlinken.

## Brand Commitments

- Name: RS Digital Solutions, Domain `rs-digitalsolutions.de`, E-Mail `info@rs-digitalsolutions.de`.
- Bestehende visuelle Identität: dunkles Blau-Metallic-Design mit Light-Mode (Details sind Sache von DESIGN.md, nicht dieser Datei).
- Chatbot wird ehrlich als „Automatischer Assistent" gelabelt — keine Vortäuschung menschlicher Mitarbeiter.

## Evidence on Hand

Drei echte Referenzen (dürfen namentlich mit Zitaten verwendet werden):

- **Akkilinc Buchhaltungsservice, Stuttgart** — Unternehmenswebsite in 6 Sprachen (`/screenshots/akkilinc.webp`)
- **Antephaus Stuttgart** — Restaurant mit Online-Bestellsystem (läuft auf demselben VPS; öffentlicher Link derzeit nur nackte IP — nicht prominent verlinken, bis Domain existiert)
- **Bera Gold & Diamond** — Juwelier-E-Commerce (`/screenshots/bera-gold.webp`)

**Nicht vorhanden (nie erfinden):** quantitative Projekt-Kennzahlen (Conversion-Raten, Umsatzzahlen), weitere Testimonials, Zertifikate/Auszeichnungen, Social-Media-Präsenzen. Ergebnisse werden qualitativ beschrieben.

## Product Principles

1. **Jede Seite führt zu einer Anfrage** — Termin, Formular oder E-Mail sind nie mehr als einen Klick entfernt.
2. **Probleme der Kunden zuerst** — Inhalte argumentieren aus der Herausforderung des KMU, nicht aus der Technik.
3. **Nur belegbare Aussagen** — echte Projekte namentlich, typische Szenarien klar gekennzeichnet, keine erfundenen Zahlen.
4. **Selbst der Beweis sein** — die Website demonstriert, was verkauft wird (Terminbuchung, Chatbot, Performance, SEO).
5. **Ehrlich über die Größe** — persönlicher Einzelunternehmer-Service als Stärke, keine Konzern-Fassade.

## Open Roadmap Facts

Vom Inhaber angekündigt, bei Eintreten einarbeiten:

- Weitere Kundenreferenzen kommen → Referenzen-Seite erweitern.
- Social-Media-Profile (Instagram/LinkedIn) werden aufgebaut → `company.social` füllen, Footer-Icons und `sameAs`-Schema reaktivieren.
- Geschäftstelefonnummer kommt → Telefon in Kontakt-Sektion, Footer und Schema ergänzen; „Jetzt anrufen"-CTAs wieder möglich.
