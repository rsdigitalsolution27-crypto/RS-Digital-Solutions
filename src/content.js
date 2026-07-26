/**
 * ┌──────────────────────────────────────────────────────────┐
 * │  RS Digital Solutions – Zentraler Content                │
 * │  Alle Texte, Daten und Konfigurationen an einem Ort.     │
 * │  Nichts hardcoded – alles änderbar.                      │
 * └──────────────────────────────────────────────────────────┘
 */

/* ─── Firmen-Daten ─── */
export const company = {
  name: 'RS Digital Solutions',
  nameShort: 'RS',
  nameSuffix: 'Digital Solutions',
  legalName: 'RS DigitalSolutions',
  owner: 'Daniel Raja-Nigl',
  address: {
    street: 'Rosmarinweg 69',
    zip: '70374',
    city: 'Stuttgart',
    country: 'Deutschland',
  },
  email: 'info@rs-digitalsolutions.de',
  calendly: 'https://calendly.com/info-rs-digitalsolutions',
  location: 'Stuttgart, Deutschland',
  copyright: `© ${new Date().getFullYear()} RS Digital Solutions. Alle Rechte vorbehalten.`,
  social: {
    instagram: '#',
    linkedin: '#',
    facebook: '#',
  },
};

/* ─── Navigation ─── */
export const navigation = [
  { label: 'Home', path: '/' },
  { label: 'Leistungen', path: '/leistungen' },
  { label: 'KI', path: '/ki' },
  { label: '48h-Website', path: '/48h' },
  { label: 'Referenzen', path: '/referenzen' },
  { label: 'Über uns', path: '/about' },
  { label: 'Kontakt', path: '#kontakt', isAnchor: true },
];

/* ─── SEO Meta-Daten pro Seite ─── */
export const seo = {
  siteUrl: 'https://rs-digitalsolutions.de',
  defaults: {
    title: 'Webagentur Stuttgart – Webdesign, KI & 48h-Websites | RS',
    description:
      'RS Digital Solutions: Webagentur in Stuttgart für Websites, Online-Shops, KI-Chatbots & Terminbuchung. In 48 Stunden online – Websites ab 1.500 €.',
    ogImage: '/og-image.jpg',
    locale: 'de_DE',
    type: 'website',
  },
  pages: {
    home: {
      name: 'Home',
      title: 'Webagentur Stuttgart – Webdesign, KI & 48h-Websites | RS',
      description:
        'RS Digital Solutions: Webagentur in Stuttgart für Websites, Online-Shops, KI-Chatbots & Terminbuchung. In 48 Stunden online – Websites ab 1.500 €.',
      path: '/',
    },
    leistungen: {
      name: 'Leistungen',
      title: 'Leistungen: Webdesign, Shops, KI & SEO | RS Stuttgart',
      description:
        'Webdesign ab 1.500 €, Online-Shops ab 2.500 €, KI-Chatbots, SEO & Terminbuchung – alles aus einer Hand von Ihrer Webagentur in Stuttgart.',
      path: '/leistungen',
    },
    referenzen: {
      name: 'Referenzen',
      title: 'Referenzen – Projekte aus Stuttgart | RS Digital Solutions',
      description:
        'Erfolgreiche Projekte aus Stuttgart und Umgebung: Unternehmenswebsites, Restaurant mit Online-Bestellung, E-Commerce für Juweliere.',
      path: '/referenzen',
    },
    about: {
      name: 'Über uns',
      title: 'Über uns – Webagentur in Stuttgart | RS Digital Solutions',
      description:
        'Lernen Sie RS Digital Solutions kennen: Ihre Webagentur in Stuttgart für Webdesign, KI-Automatisierung und digitale Sichtbarkeit.',
      path: '/about',
    },
    ki: {
      name: 'KI-Chatbots',
      title: 'KI-Chatbots für Ihre Website | RS Digital Solutions',
      description:
        'KI-Chatbots, die Kundenfragen beantworten, Termine buchen und Leads qualifizieren – 24/7, mehrsprachig. Von Ihrer Webagentur in Stuttgart.',
      path: '/ki',
    },
    fortyEightHours: {
      name: '48h-Website',
      title: 'Website in 48 Stunden – zum Festpreis | RS Stuttgart',
      description:
        'Vom Briefing zur fertigen Website in 2 Tagen: Das 48-Stunden-Versprechen von RS Digital Solutions aus Stuttgart. Festpreis, 30 Tage Support.',
      path: '/48h',
    },
    notFound: {
      name: '404',
      title: '404 – Seite nicht gefunden | RS Digital Solutions',
      description: 'Die angeforderte Seite wurde nicht gefunden.',
      path: '/404',
    },
    impressum: {
      name: 'Impressum',
      title: 'Impressum | RS Digital Solutions',
      description: 'Impressum und Anbieterkennzeichnung gemäß § 5 TMG.',
      path: '/impressum',
    },
    datenschutz: {
      name: 'Datenschutz',
      title: 'Datenschutzerklärung | RS Digital Solutions',
      description: 'Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.',
      path: '/datenschutz',
    },
  },
};

/* ─── Home Page ─── */
export const homePage = {
  hero: {
    titleLine1: 'Website, Shop & KI —',
    titleGradient: 'alles aus einer Hand',
    titleLine3: 'aus Stuttgart.',
    subtitle:
      'Ihr persönlicher Ansprechpartner für Webdesign, Online-Shops und KI-Automatisierung. Websites ab 1.500 € — auf Wunsch in 48 Stunden online.',
    primaryButton: 'Beratungstermin buchen',
    secondaryButton: 'Projekte ansehen',
    trust: ['Kostenlose Erstberatung', 'Festpreis vor Projektstart', 'Antwort innerhalb von 24 h'],
  },
  servicesOverview: {
    tag: 'Leistungen',
    title: 'Was wir für Sie <span class="highlight">tun</span>',
    description: 'Sechs Leistungen, ein Ziel: Ihr Business digital nach vorne bringen — mit smarter Automatisierung.',
    ctaLabel: 'Alle Leistungen im Detail',
    items: [
      {
        id: 'ki',
        icon: 'fas fa-robot',
        label: 'KI & Automatisierung',
        title: 'KI-Automatisierung & Zeitersparnis',
        desc: 'Intelligente Chatbots, Terminbuchung und Lead-Qualifizierung — 24/7 automatisch. Bis zu 15 Stunden Zeitersparnis pro Woche.',
        image: '/images/ki-automation.webp',
      },
      {
        id: 'webdesign',
        icon: 'fas fa-laptop-code',
        label: 'Webdesign',
        title: 'Professionelles Webdesign',
        desc: 'Moderne, performante Websites, die konvertieren — responsiv, SEO-optimiert und auf Ihre Marke zugeschnitten.',
        image: '/images/webdesign.webp',
      },
      {
        id: 'ecommerce',
        icon: 'fas fa-store',
        label: 'E-Commerce',
        title: 'E-Commerce & Shops',
        desc: 'Voll funktionsfähige Online-Shops mit Produktkatalog, Warenkorb und sicherer Zahlungsabwicklung — startklar in Rekordzeit.',
        image: '/images/ecommerce.webp',
      },
      {
        id: 'relaunch',
        icon: 'fas fa-bolt',
        label: '48h Relaunch',
        title: '48h Website-Relaunch',
        desc: 'Vom Briefing zur fertigen Website in nur zwei Tagen — ohne Qualitätskompromisse und zum Festpreis.',
        image: '/images/relaunch-48h.webp',
      },
      {
        id: 'seo',
        icon: 'fas fa-search',
        label: 'SEO & Marketing',
        title: 'SEO & Online-Marketing',
        desc: 'Sichtbar werden, wo Ihre Kunden suchen. Wir sorgen für bessere Rankings und mehr qualifizierten Traffic.',
        image: '/images/seo.webp',
      },
      {
        id: 'termine',
        icon: 'fas fa-calendar-check',
        label: 'Terminbuchung',
        title: 'Terminbuchungssoftware',
        desc: 'Professionelle Buchungssysteme direkt in Ihre Website integriert — mit Google-Calendar-Sync und automatischen Bestätigungen.',
        image: '/images/terminbuchung.webp',
      },
    ],
  },
  challenges: {
    tag: 'Kennen Sie das?',
    title: 'Typische Herausforderungen – und <span class="highlight">unsere Lösungen</span>',
    description:
      'Die häufigsten Probleme, mit denen Unternehmen aus Stuttgart und Umgebung zu uns kommen — und wie wir sie lösen.',
    items: [
      {
        icon: 'fas fa-phone-volume',
        problem: '„Das Telefon klingelt ständig wegen Terminanfragen."',
        solution:
          'Eine Online-Terminbuchung direkt auf Ihrer Website: Kunden buchen selbst in 30 Sekunden, mit Kalender-Sync und automatischen Erinnerungen. Weniger Anrufe, weniger No-Shows.',
        linkLabel: 'Terminbuchung ansehen',
        link: '/leistungen',
      },
      {
        icon: 'fas fa-hourglass-half',
        problem: '„Unsere Website ist veraltet, aber uns fehlt die Zeit für einen Relaunch."',
        solution:
          'Unser 48-Stunden-Relaunch: Tag 1 Konzept & Design, Tag 2 Entwicklung & Go-Live. Zum Festpreis, ohne monatelange Projektschleifen.',
        linkLabel: 'Zum 48h-Relaunch',
        link: '/48h',
      },
      {
        icon: 'fas fa-search',
        problem: '„Bei Google findet uns niemand — Neukunden kommen nur über Empfehlungen."',
        solution:
          'Lokale Suchmaschinenoptimierung für Stuttgart: technisches SEO, Google-Business-Profil und Inhalte, die Ihre Kunden wirklich suchen.',
        linkLabel: 'SEO-Leistungen ansehen',
        link: '/leistungen',
      },
      {
        icon: 'fas fa-utensils',
        problem: '„Unsere Gäste rufen an, statt online zu bestellen oder zu reservieren."',
        solution:
          'Websites für Gastronomie mit Online-Bestellung und Reservierung — wie beim Stuttgarter Restaurant Antephaus, dessen Kunden heute bequem online bestellen.',
        linkLabel: 'Referenzen ansehen',
        link: '/referenzen',
      },
    ],
  },
  process: {
    tag: 'So läuft\'s ab',
    title: 'In <span class="highlight">4 Schritten</span> zur fertigen Website',
    description: 'Transparent, strukturiert und planbar — vom ersten Gespräch bis zum Go-Live an Ihrer Seite.',
    steps: [
      {
        number: '01',
        name: 'Briefing',
        title: 'Briefing & Analyse',
        desc: 'Wir hören zu, analysieren Ihre Branche und Wettbewerb und definieren gemeinsam klare Ziele für Ihren digitalen Auftritt.',
        image: '/images/process-briefing.webp',
      },
      {
        number: '02',
        name: 'Konzept & Design',
        title: 'Konzept & Design',
        desc: 'Wir erstellen ein maßgeschneidertes Konzept inklusive Wireframes und finalem Design — perfekt auf Ihre Marke abgestimmt.',
        image: '/images/process-design.webp',
      },
      {
        number: '03',
        name: 'Entwicklung',
        title: 'Entwicklung & KI-Integration',
        desc: 'Technische Umsetzung mit modernsten Technologien: responsiv, schnell, SEO-optimiert und mit KI-Automatisierung ausgestattet.',
        image: '/images/process-entwicklung.webp',
      },
      {
        number: '04',
        name: 'Go Live',
        title: 'Go Live & Full-Service',
        desc: 'Nach finalem Testing geht Ihre Website live. Domain, Hosting, Wartung und Support übernehmen wir — Sie kümmern sich ums Business.',
        image: '/images/process-golive.webp',
      },
    ],
  },
  testimonials: {
    tag: 'Kundenstimmen',
    title: 'Was unsere <span class="highlight">Kunden</span> sagen',
    description: 'Echte Stimmen aus echten Projekten — Unternehmen, die mit uns den Sprung gemacht haben.',
  },
  allInOne: {
    tag: 'Alles aus einer Hand',
    title: 'Sie kümmern sich ums <span class="highlight">Business</span> — wir um alles andere.',
    description:
      'Von Domain bis KI-Support, von Hosting bis Wartung: Sie bekommen alles aus einer Hand. Keine versteckten Kosten, keine Technik-Sorgen, kein Anbieter-Chaos.',
    cards: [
      {
        icon: 'fas fa-globe',
        title: 'Domain & Hosting',
        desc: 'Wir registrieren Ihre Wunsch-Domain und hosten Ihre Website auf Premium-Servern — inkl. SSL, Backups und 99,9% Uptime.',
        video: '/videos/card-domain',
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Wartung & Updates',
        desc: 'Sicherheit, Speed und Content-Änderungen übernehmen wir. Ihre Website bleibt immer aktuell, sicher und performant.',
        video: '/videos/card-wartung',
      },
      {
        icon: 'fas fa-robot',
        title: 'KI & Automatisierung',
        desc: 'Intelligente Chatbots, automatische Terminbuchung und Lead-Qualifizierung — 24/7 im Einsatz für Ihr Business.',
        video: '/videos/card-ki',
      },
      {
        icon: 'fas fa-headset',
        title: '24/7 Support',
        desc: 'Ein persönlicher Ansprechpartner, volle Verantwortung. Schnelle Reaktionszeiten und persönlicher Service.',
        video: '/videos/tile-c3-1',
      },
    ],
  },
  cta: {
    heading: 'Bereit, Ihre digitale Präsenz auf das nächste Level zu bringen?',
    subtitle:
      'Lassen Sie uns in einem unverbindlichen Gespräch herausfinden, wie wir Ihr Unternehmen online nach vorne bringen können.',
    primaryButton: 'Beratungsgespräch',
  },
  contact: {
    tag: 'Kontakt',
    title: 'Lassen Sie uns sprechen',
    intro:
      'Haben Sie ein Projekt im Kopf? Erzählen Sie uns davon. Wir freuen uns auf Ihre Nachricht und melden uns innerhalb von 24 Stunden bei Ihnen.',
    labels: {
      booking: 'Beratungstermin',
      bookingLink: 'Beratungstermin buchen',
      email: 'E-Mail',
      location: 'Standort',
    },
    form: {
      name: { label: 'Name *', placeholder: 'Ihr vollständiger Name' },
      email: { label: 'E-Mail *', placeholder: 'ihre@email.de' },
      phone: { label: 'Telefon (für Rückruf)', placeholder: 'Ihre Nummer für einen Rückruf (optional)' },
      service: {
        label: 'Gewünschte Leistung',
        placeholder: 'Bitte wählen...',
        options: [
          'KI-Automatisierung & Zeitersparnis',
          'Professionelles Webdesign',
          'E-Commerce / Online-Shop',
          '48h Website-Relaunch',
          'SEO & Online-Marketing',
          'Terminbuchungssoftware',
          'Sonstiges',
        ],
      },
      message: { label: 'Ihre Nachricht *', placeholder: 'Erzählen Sie uns von Ihrem Projekt...' },
      privacy: {
        labelStart: 'Ich habe die ',
        linkLabel: 'Datenschutzerklärung',
        labelEnd: ' gelesen und stimme der Verarbeitung meiner Angaben zur Bearbeitung meiner Anfrage zu. *',
      },
      submit: { default: 'Nachricht senden', loading: 'Wird gesendet…', success: 'Gesendet!' },
      reassurance: 'Kostenlos & unverbindlich — wir antworten innerhalb von 24 Stunden.',
      successTitle: 'Vielen Dank für Ihre Anfrage!',
      successText:
        'Ihre Nachricht ist bei uns angekommen. Wir melden uns innerhalb von 24 Stunden bei Ihnen — meist deutlich schneller.',
      error: 'Das hat leider nicht geklappt. Bitte schreiben Sie uns direkt an',
    },
  },
};

/* ─── Leistungen Page ─── */
export const leistungenPage = {
  hero: {
    tag: 'Leistungen',
    title: 'Was wir für Sie <span class="highlight">leisten</span>',
    subtitle: 'Von der ersten Idee bis zum fertigen Produkt – alles aus einer Hand.',
  },
  section: {
    tag: 'Alles inklusive',
    title: 'Wir bieten alles, was Ihr <span class="highlight">Unternehmen</span> braucht',
    description:
      'Von der ersten Idee bis zum fertigen Produkt – wir bieten alles, was Ihr Unternehmen für eine beeindruckende Internetpräsenz braucht.',
    button: 'Projekt starten',
  },
  services: [
    {
      label: 'KI-Automa\u00ADtisierung & Zeitersparnis',
      image: '/images/ki-automation.webp',
      icon: 'fas fa-robot',
      headline: 'Ihr digitaler Mitarbeiter — 24/7.',
      intro:
        'Ihre Website beantwortet Fragen, bucht Termine und qualifiziert Leads — automatisch.',
      features: [
        'KI-Chatbot, trainiert auf Ihr Unternehmen',
        'Automatische Terminbuchung & Lead-Qualifizierung',
        'Mehrsprachig & CRM-Anbindung',
        'Analytics zu Kundenfragen',
      ],
      forWhom: 'Alle, denen Anfragen Zeit fressen.',
      result: 'Bis zu 15 Stunden Zeitersparnis pro Woche.',
    },
    {
      label: 'Profes\u00ADsionelles Webdesign',
      image: '/images/webdesign.webp',
      icon: 'fas fa-laptop-code',
      headline: 'Websites, die verkaufen.',
      intro: 'Individuelles Design, schnell und auf allen Geräten perfekt.',
      features: [
        'Individuelles Design für Ihre Marke',
        'Responsive & Mobile-optimiert',
        'Ladezeit unter 2 Sekunden',
        'SEO-optimiert ab Tag 1',
      ],
      forWhom: 'Unternehmer, die sich abheben wollen.',
      result: 'Mehr Anfragen, höhere Conversion.',
    },
    {
      label: 'E-Commerce & Shops',
      image: '/images/ecommerce.webp',
      icon: 'fas fa-store',
      headline: 'Verkaufen, auch wenn Sie schlafen.',
      intro:
        'Online-Shops, die conversion-optimiert sind und sofort funktionieren.',
      features: [
        'Shop mit Katalog, Filter & Warenkorb',
        'Stripe, PayPal, Klarna & Apple Pay',
        'Automatische Rechnung & Versand',
        'DSGVO-konformer Checkout',
      ],
      forWhom: 'Jedes Unternehmen, das online verkaufen will.',
      result: 'Verkaufskanal, der 24/7 läuft.',
    },
    {
      label: '48h Website-Relaunch',
      image: '/images/relaunch-48h.webp',
      icon: 'fas fa-bolt',
      headline: 'In 2 Tagen online. Versprochen.',
      intro: 'Vom Briefing zur fertigen Website in 48 Stunden — zum Festpreis.',
      features: [
        'Tag 1: Konzept & Design',
        'Tag 2: Entwicklung & Go-Live',
        'Fix-Preis, keine Überraschungen',
        '30 Tage Support nach Launch',
      ],
      forWhom: 'Unternehmer mit akutem Bedarf.',
      result: 'Von „müsste mal" zu „ist fertig".',
    },
    {
      label: 'SEO & Online-Marketing',
      image: '/images/seo.webp',
      icon: 'fas fa-search',
      headline: 'Sichtbar, wo Ihre Kunden suchen.',
      intro: 'Ihre Website bei Google ganz oben — ohne teure Anzeigen.',
      features: [
        'Keyword-Analyse & On-Page-SEO',
        'Technisches SEO (Speed, Mobile)',
        'Lokale SEO (Google Business)',
        'Monatliches Reporting',
      ],
      forWhom: 'Unternehmen, die mehr organische Kunden wollen.',
      result: 'Mehr Traffic von Menschen, die Sie aktiv suchen.',
    },
    {
      label: 'Termin\u00ADbuchungs\u00ADsoftware',
      image: '/images/terminbuchung.webp',
      icon: 'fas fa-calendar-check',
      headline: 'Schluss mit Telefon-Pingpong.',
      intro:
        'Kunden buchen online in 30 Sekunden — inklusive Kalender-Sync.',
      features: [
        'Buchungssystem in Ihre Website integriert',
        'Sync mit Google, Outlook & Apple Calendar',
        'Automatische Bestätigungen & Erinnerungen',
        'Multi-Staff & Urlaubsverwaltung',
      ],
      forWhom: 'Friseure, Ärzte, Berater, Restaurants.',
      result: 'Weniger Anrufe, weniger No-Shows, mehr Termine.',
    },
  ],
  detailLabels: {
    intro: 'Kurz gesagt',
    features: 'Was Sie bekommen',
    forWhom: 'Für wen?',
    result: 'Ergebnis',
    more: 'Details & Praxisbeispiel',
  },
  useCaseLabels: {
    real: 'Echtes Projekt',
    typical: 'Typisches Szenario',
    situation: 'Ausgangslage',
    solution: 'Unsere Lösung',
    result: 'Das Ergebnis',
    process: 'So läuft es bei Ihnen ab',
    priceLabel: 'Investition',
    cta: 'Beratungstermin buchen',
  },
  details: [
    {
      id: 'ki',
      tag: 'KI & Automatisierung',
      title: 'KI-Automatisierung: Ihr Unternehmen antwortet, auch wenn Sie es nicht tun',
      description:
        'Die meisten Anfragen kommen dann, wenn niemand Zeit hat: abends, am Wochenende, mitten im Tagesgeschäft. Wir integrieren einen KI-Assistenten in Ihre Website, der auf Ihr Unternehmen trainiert ist — er kennt Ihre Leistungen, Preise und Abläufe, beantwortet Fragen in mehreren Sprachen, bucht Termine und sammelt qualifizierte Anfragen mit Namen und Kontaktdaten.',
      useCase: {
        type: 'typical',
        intro: 'Ein typisches Beispiel aus unserer Zielgruppe:',
        situation:
          'Ein Beratungsunternehmen bekommt die meisten Anfragen abends nach Feierabend. Bis jemand am nächsten Tag antwortet, haben Interessenten längst beim Wettbewerber angefragt — ein Großteil der Anfragen verpufft.',
        solution:
          'Ein KI-Chatbot auf der Website, trainiert auf Leistungen und Preise des Unternehmens. Er beantwortet die häufigsten Fragen sofort, schlägt freie Beratungstermine vor und übergibt komplexe Anliegen mit allen Kontaktdaten ans Postfach.',
        result:
          'Interessenten bekommen sofort eine Antwort statt einer Warteschleife bis zum nächsten Werktag. Das Unternehmen startet morgens mit vorqualifizierten Anfragen inklusive Terminwunsch — statt mit einem vollen Anrufbeantworter.',
      },
      process: [
        'Wir sammeln gemeinsam Ihre häufigsten Kundenfragen, Leistungen und Preise',
        'Wir trainieren und gestalten den Assistenten passend zu Ihrer Marke und binden ihn in Ihre Website ein',
        'Nach einer Testphase geht er live — wir überwachen die Antworten und schärfen laufend nach',
      ],
      price: 'Individuell je nach Funktionsumfang — Angebot im kostenlosen Beratungsgespräch',
    },
    {
      id: 'webdesign',
      tag: 'Webdesign',
      title: 'Webdesign: Websites, die Vertrauen aufbauen und verkaufen',
      description:
        'Ihre Website ist oft der erste Kontakt mit Ihrem Unternehmen — und entscheidet in Sekunden, ob jemand bleibt oder geht. Wir gestalten individuelle, schnelle Websites, die Ihre Marke transportieren: responsiv auf allen Geräten, mit Ladezeiten unter 2 Sekunden und SEO-Grundlagen ab dem ersten Tag.',
      useCase: {
        type: 'real',
        intro: 'Aus der Praxis: Akkilinc Buchhaltungsservice, Stuttgart',
        situation:
          'Der Buchhaltungsservice betreut Mandanten aus vielen Kulturen und Sprachräumen — hatte aber keinen Webauftritt, der diese Vielfalt abbildete. Interessenten konnten sich vorab kein Bild von den Leistungen machen.',
        solution:
          'Eine moderne Unternehmenswebsite in sechs Sprachen: klare Leistungsdarstellung, Vertrauenselemente und direkte Kontaktmöglichkeiten — jede Sprachversion vollwertig gepflegt statt automatisch übersetzt.',
        result:
          'Mandanten finden alle Informationen in ihrer Sprache und kommen besser vorbereitet ins Erstgespräch. Der Auftritt ist so hochwertig wie die Beratung selbst — „modern, mehrsprachig und perfekt auf unsere Mandanten zugeschnitten“, so der Inhaber.',
        link: { label: 'Projekt ansehen', href: '/referenzen' },
      },
      process: [
        'Briefing: Wir analysieren Ihre Marke, Zielgruppe und Wettbewerber',
        'Design & Umsetzung: Individuelles Konzept, dann Entwicklung — responsiv, schnell, SEO-optimiert',
        'Go-Live & Betreuung: Domain, Hosting, Wartung und Änderungen aus einer Hand',
      ],
      price: 'Ab 1.500 € — Festpreis-Angebot vor Projektstart',
    },
    {
      id: 'ecommerce',
      tag: 'E-Commerce',
      title: 'E-Commerce: Ihr Geschäft verkauft — auch nachts und sonntags',
      description:
        'Ob Produkte, Gutscheine oder Bestellungen: Ein eigener Online-Shop macht Sie unabhängig von Ladenöffnungszeiten und Plattform-Gebühren. Wir bauen Shops mit Produktkatalog, Warenkorb und sicherer Zahlung über Stripe, PayPal, Klarna und Apple Pay — inklusive automatischer Rechnungen und DSGVO-konformem Checkout.',
      useCase: {
        type: 'real',
        intro: 'Aus der Praxis: Bera Gold & Diamond, Juwelier',
        situation:
          'Hochwertiger Schmuck, der bislang nur im Laden zu sehen war. Online fanden Kunden weder Sortiment noch Preise — Kaufinteresse entstand ausschließlich vor Ort.',
        solution:
          'Ein E-Commerce-Auftritt mit hochwertiger Produktpräsentation, die dem Schmuck gerecht wird: professionelle Darstellung, Katalog und direkte Kaufmöglichkeit.',
        result:
          'Die Online-Präsentation ist heute „genauso hochwertig wie unser Schmuck“ (so der Inhaber) — Kunden stöbern von zu Hause und kommen gezielt zum Kauf. Auch für Gastronomie funktioniert das Prinzip: Für das Stuttgarter Restaurant Antephaus haben wir ein komplettes Online-Bestellsystem umgesetzt.',
        link: { label: 'Beide Projekte ansehen', href: '/referenzen' },
      },
      process: [
        'Sortiment & Zahlwege klären: Was wird verkauft, wie wird bezahlt, wie wird geliefert?',
        'Shop-Aufbau: Katalog, Warenkorb, Checkout und Rechnungsautomatik — auf Ihre Marke zugeschnitten',
        'Launch & Wachstum: Livegang, Einweisung und auf Wunsch laufende Optimierung',
      ],
      price: 'Ab 2.500 € — Festpreis-Angebot vor Projektstart',
    },
    {
      id: 'relaunch',
      tag: '48h-Relaunch',
      title: '48h-Relaunch: Von der veralteten Website zur neuen — in einem Wochenende',
      description:
        'Viele Unternehmer wissen seit Jahren, dass ihre Website nicht mehr zeitgemäß ist — aber ein „Website-Projekt“ klingt nach Monaten Abstimmung. Unser 48-Stunden-Format löst das: Tag 1 gehören Briefing, Konzept und Design, Tag 2 der Entwicklung und dem Go-Live. Zum Festpreis, mit 30 Tagen Support danach.',
      useCase: {
        type: 'typical',
        intro: 'Ein typisches Beispiel aus unserer Zielgruppe:',
        situation:
          'Ein Handwerksbetrieb mit voller Auftragslage und einer Website von 2015: nicht mobiltauglich, veraltete Referenzen, Kontakt nur über eine Faxnummer im Impressum. Für ein monatelanges Website-Projekt fehlt schlicht die Zeit.',
        solution:
          'Der 48h-Relaunch: Ein einziges Briefing-Gespräch am Morgen von Tag 1, danach übernehmen wir — neues Design, aktuelle Referenzfotos, klare Leistungsübersicht, Kontaktformular und Rückruf-Option. Am Abend von Tag 2 ist die Seite live.',
        result:
          'Der Betrieb hat ohne eigenen Zeitaufwand einen Auftritt, der zur Qualität seiner Arbeit passt — mobiltauglich, auffindbar und mit direktem Anfragekanal statt Faxnummer. Aus „müssten wir mal machen“ wurde „ist erledigt“.',
      },
      process: [
        'Tag 0: Kurzes Vorgespräch, Festpreis-Angebot, Terminfixierung',
        'Tag 1: Briefing am Morgen, dann Konzept und Design',
        'Tag 2: Entwicklung, Testing, Go-Live am Abend — danach 30 Tage Support',
      ],
      price: 'Festpreis ab 1.500 € — verbindlich vor Projektstart',
    },
    {
      id: 'seo',
      tag: 'SEO & Marketing',
      title: 'SEO: Gefunden werden, wenn Kunden in Stuttgart suchen',
      description:
        'Wer bei Google nicht auf der ersten Seite steht, existiert für viele Kunden nicht. Wir optimieren Ihre Website technisch (Ladezeit, Mobiltauglichkeit, Struktur), inhaltlich (Keywords, Texte, FAQ) und lokal (Google-Business-Profil, Stuttgart-Bezug) — und berichten monatlich, was sich verändert hat.',
      useCase: {
        type: 'typical',
        intro: 'Ein typisches Beispiel aus unserer Zielgruppe:',
        situation:
          'Ein lokaler Dienstleister wird bei Google nur über Branchenportale gefunden — die eigenen Seiten tauchen erst auf Seite 3 auf. Neukunden landen bei Portalen, die Provision kosten, oder direkt beim Wettbewerber.',
        solution:
          'Technisches SEO (Ladezeit, saubere Struktur, strukturierte Daten), lokal optimierte Inhalte mit den Suchbegriffen der Kunden, ein gepflegtes Google-Business-Profil und ein FAQ-Bereich, der echte Kundenfragen beantwortet.',
        result:
          'Die eigene Website verdrängt Schritt für Schritt die Portale bei den relevanten lokalen Suchanfragen. Anfragen kommen direkt und provisionsfrei — und das monatliche Reporting zeigt schwarz auf weiß, welche Suchbegriffe Kunden bringen.',
      },
      process: [
        'SEO-Audit: Wo stehen Sie heute, wonach suchen Ihre Kunden wirklich?',
        'Umsetzung: Technik, Inhalte und Google-Business-Profil werden optimiert',
        'Laufende Betreuung: Monatliches Reporting und kontinuierliche Verbesserung',
      ],
      price: 'Einmalige Optimierung oder monatliche Betreuung — Angebot nach kostenlosem Audit',
    },
    {
      id: 'termine',
      tag: 'Terminbuchung',
      title: 'Online-Terminbuchung: Schluss mit Telefon-Pingpong',
      description:
        'Jeder Anruf für eine Terminvereinbarung unterbricht Ihre Arbeit — und wer nicht durchkommt, bucht woanders. Wir integrieren ein Buchungssystem direkt in Ihre Website: Kunden wählen Leistung und Wunschtermin selbst, das System synchronisiert mit Google, Outlook und Apple Calendar und versendet Bestätigungen und Erinnerungen automatisch.',
      useCase: {
        type: 'typical',
        intro: 'Ein typisches Beispiel aus unserer Zielgruppe:',
        situation:
          'Ein Friseursalon, in dem das Team mitten im Schnitt ans Telefon muss. In Stoßzeiten kommen Anrufer nicht durch, Termine werden auf Zetteln notiert, und wer abends buchen will, erreicht niemanden. Dazu kommen Kunden, die Termine schlicht vergessen.',
        solution:
          'Online-Buchung direkt auf der Website: Kunden wählen Leistung, Mitarbeiter und freie Zeit in unter einer Minute — rund um die Uhr. Automatische Bestätigungen und Erinnerungs-Nachrichten inklusive, der Kalender jedes Mitarbeiters bleibt synchron.',
        result:
          'Das Telefon klingelt spürbar seltener, das Team bleibt bei der Arbeit, und Terminausfälle gehen durch die Erinnerungen zurück. Gebucht wird auch dann, wenn der Salon längst geschlossen hat.',
      },
      process: [
        'Setup: Leistungen, Zeiten, Mitarbeiter und Regeln (Puffer, Urlaube) werden hinterlegt',
        'Integration: Das Buchungssystem wird nahtlos in Ihre Website und Kalender eingebunden',
        'Feinschliff: Bestätigungs- und Erinnerungstexte in Ihrer Tonalität, dann Go-Live',
      ],
      price: 'Individuell je nach Team-Größe und Funktionen — Angebot im kostenlosen Beratungsgespräch',
    },
  ],
  faq: {
    tag: 'FAQ',
    title: 'Häufige Fragen zu unseren <span class="highlight">Leistungen</span>',
    items: [
      {
        q: 'Was kostet eine professionelle Website in Stuttgart?',
        a: 'Bei RS Digital Solutions beginnt eine professionelle Website ab 1.500 €. Der genaue Preis hängt vom Umfang ab: Anzahl der Seiten, Funktionen wie Terminbuchung oder KI-Chatbot und individuelle Design-Anforderungen. Sie erhalten vorab ein transparentes Festpreis-Angebot.',
      },
      {
        q: 'Was kostet ein Online-Shop?',
        a: 'Ein voll funktionsfähiger Online-Shop mit Produktkatalog, Warenkorb und sicherer Zahlungsabwicklung (Stripe, PayPal, Klarna, Apple Pay) beginnt bei 2.500 €. Automatische Rechnungsstellung und DSGVO-konformer Checkout sind inklusive.',
      },
      {
        q: 'Wie lange dauert die Erstellung einer Website?',
        a: 'Mit unserem 48-Stunden-Paket ist Ihre Website in 2 Tagen live. Umfangreichere Projekte mit Shop oder individuellen Funktionen dauern je nach Umfang 2–4 Wochen. Den Zeitplan legen wir vor Projektstart verbindlich fest.',
      },
      {
        q: 'Was kostet ein KI-Chatbot für meine Website?',
        a: 'Die KI-Integration wird individuell kalkuliert und hängt vom Funktionsumfang ab: reine Fragenbeantwortung, Terminbuchung oder Lead-Qualifizierung mit CRM-Anbindung. In einem kostenlosen Beratungsgespräch erhalten Sie ein konkretes Angebot.',
      },
      {
        q: 'Übernehmt ihr auch Hosting, Domain und Wartung?',
        a: 'Ja, alles aus einer Hand: Domain-Registrierung, Premium-Hosting mit SSL und täglichen Backups, Sicherheits-Updates und Content-Änderungen. Sie kümmern sich um Ihr Geschäft, wir um die Technik.',
      },
      {
        q: 'Für welche Branchen arbeitet ihr?',
        a: 'Wir arbeiten vor allem mit kleinen und mittleren Unternehmen aus Stuttgart und Umgebung: Gastronomie mit Online-Bestellung, terminbasierte Betriebe wie Friseure, Praxen und Beratungen mit Online-Terminbuchung sowie Einzelhändler, die online verkaufen möchten.',
      },
      {
        q: 'Hilft eine neue Website auch bei Google-Rankings?',
        a: 'Jede Website von uns ist ab Tag 1 SEO-optimiert: schnelle Ladezeiten, saubere Struktur, lokale Optimierung für Stuttgart. Zusätzlich bieten wir laufende SEO-Betreuung mit Keyword-Analyse, Google-Business-Optimierung und monatlichem Reporting.',
      },
      {
        q: 'Kann ich meine Website später selbst bearbeiten?',
        a: 'Ja. Auf Wunsch bauen wir Ihre Website auf einem benutzerfreundlichen CMS auf, sodass Sie Texte, Bilder und Inhalte jederzeit selbst ändern können — ohne Programmierkenntnisse.',
      },
      {
        q: 'Wie funktioniert die Online-Terminbuchung für mein Unternehmen?',
        a: 'Wir integrieren ein Buchungssystem direkt in Ihre Website: Kunden wählen Leistung und Wunschtermin, das System synchronisiert mit Google, Outlook oder Apple Calendar und versendet automatische Bestätigungen und Erinnerungen. Auch Multi-Mitarbeiter-Verwaltung ist möglich.',
      },
      {
        q: 'Was passiert nach dem Go-Live meiner Website?',
        a: 'Sie erhalten 30 Tage kostenlosen Support nach dem Launch. Danach können Sie ein Wartungspaket wählen: Updates, Sicherheit, Performance-Monitoring und Inhaltsänderungen — damit Ihre Website dauerhaft aktuell und sicher bleibt.',
      },
    ],
  },
};

/* ─── Referenzen Page ─── */
export const referenzenPage = {
  hero: {
    tag: 'Referenzen',
    title: 'Beispiele unserer <span class="highlight">Arbeit</span>',
    subtitle: 'Was wir gestalten, soll nicht nur gut aussehen – es soll wirken.',
  },
  projectsSection: {
    tag: 'Live Projekte',
    title: 'Unsere Projekte <span class="highlight">im Überblick</span>',
  },
  testimonialsSection: {
    tag: 'Kundenstimmen',
    title: 'Was unsere <span class="highlight">Kunden</span> sagen',
  },
  projects: [
    {
      title: 'Akkilinc Buchhaltung',
      desc: 'Unternehmenswebsite · 6 Sprachen',
      image: '/screenshots/akkilinc.webp',
      url: 'https://akkilinc-fq2f.vercel.app',
    },
    {
      title: 'Antephaus Stuttgart',
      desc: 'Restaurant · Online-Bestellung',
      image: '/screenshots/antephaus.png',
      url: 'http://76.13.0.11',
    },
    {
      title: 'Bera Gold & Diamond',
      desc: 'Juwelier · E-Commerce',
      image: '/screenshots/bera-gold.webp',
      url: 'https://bera-gold-diamond.vercel.app',
    },
  ],
  testimonials: [
    {
      stars: 5,
      text: '„Unsere neue Website ist genau so geworden, wie wir es uns vorgestellt haben – modern, mehrsprachig und perfekt auf unsere Mandanten zugeschnitten. Die Zusammenarbeit war hervorragend!"',
      avatar: 'AA',
      name: 'Akkilinc Buchhaltungsservice',
      role: 'Buchhaltung, Stuttgart',
    },
    {
      stars: 5,
      text: '„Die Website mit Online-Bestellsystem hat unseren Betrieb auf ein neues Level gebracht. Unsere Kunden können jetzt bequem online bestellen und abholen. Absolute Empfehlung!"',
      avatar: 'AH',
      name: 'Antephaus',
      role: 'Restaurant, Stuttgart Nord',
    },
    {
      stars: 5,
      text: '„Professionelles Webdesign, schnelle Umsetzung und ein Team, das wirklich zuhört. Unsere Produktpräsentation online ist jetzt genauso hochwertig wie unser Schmuck."',
      avatar: 'BG',
      name: 'Bera Gold & Diamond',
      role: 'Juwelier',
    },
  ],
};

/* ─── KI Page ─── */
export const kiPage = {
  hero: {
    tag: 'Intelligente Websites',
    title: 'Ihre Website <span class="highlight">spricht</span> mit Ihren Kunden',
    subtitle: 'KI-gestützte Chatbots, die Ihre Kunden beraten, Termine vereinbaren und Umsatz steigern – 24/7.',
  },
  benefits: [
    'Automatische Kundenberatung in Echtzeit',
    'Intelligente Terminvereinbarung',
    'Personalisierte Produktempfehlungen',
    'Mehrsprachiger Support',
    'Nahtlose CRM-Integration',
    'Lernfähig & kontinuierlich besser',
  ],
  chat: {
    name: 'RS Digital Assistent',
    status: 'Online',
    messages: [
      { role: 'bot', text: 'Hallo! 👋 Willkommen bei RS Digital Solutions. Wie kann ich Ihnen helfen?' },
      { role: 'user', text: 'Ich brauche eine neue Website für mein Restaurant.' },
      {
        role: 'bot',
        text: 'Perfekt! Für Restaurants empfehle ich unser 48h-Paket mit integrierter Speisekarte, Online-Reservierung und Google Maps Integration. Soll ich einen Beratungstermin vereinbaren? 📅',
      },
      { role: 'user', text: 'Ja bitte, am liebsten morgen Vormittag.' },
    ],
  },
  section: {
    tag: 'Warum KI?',
    title: 'Mehr als nur ein <span class="highlight">Chatbot</span>',
    description:
      'Unsere KI-Lösung lernt kontinuierlich dazu, kennt Ihr Unternehmen in- und auswendig und bietet Ihren Kunden ein Erlebnis, das begeistert – rund um die Uhr, in jeder Sprache.',
    button: 'KI-Demo anfragen',
  },
  faq: {
    tag: 'FAQ',
    title: 'Häufige Fragen zu <span class="highlight">KI-Chatbots</span>',
    items: [
      {
        q: 'Was macht ein KI-Chatbot auf meiner Website?',
        a: 'Er beantwortet Kundenfragen in Echtzeit, vereinbart Termine, empfiehlt Produkte und sammelt qualifizierte Anfragen — rund um die Uhr und in mehreren Sprachen. Er wird auf Ihr Unternehmen trainiert und kennt Ihre Leistungen, Preise und Abläufe.',
      },
      {
        q: 'Brauche ich technisches Wissen für einen KI-Chatbot?',
        a: 'Nein. Wir übernehmen Einrichtung, Training und laufende Pflege komplett. Sie liefern nur die Informationen über Ihr Unternehmen — den Rest erledigen wir.',
      },
      {
        q: 'Wie viel Zeit spart ein KI-Chatbot wirklich?',
        a: 'Unsere Kunden sparen bis zu 15 Stunden pro Woche, weil wiederkehrende Anfragen zu Öffnungszeiten, Preisen und Terminen automatisch beantwortet werden. Ihr Team konzentriert sich auf die Anfragen, die wirklich persönliche Betreuung brauchen.',
      },
      {
        q: 'Ist ein KI-Chatbot DSGVO-konform?',
        a: 'Ja. Wir achten bei der Integration auf DSGVO-konforme Datenverarbeitung: transparente Hinweise für Nutzer, Datensparsamkeit und Verarbeitung nach europäischen Standards.',
      },
      {
        q: 'Funktioniert der Chatbot auch mit meinem Kalender und CRM?',
        a: 'Ja. Der Chatbot lässt sich mit Google, Outlook und Apple Calendar sowie gängigen CRM-Systemen verbinden — gebuchte Termine und qualifizierte Leads landen direkt in Ihren Systemen.',
      },
    ],
  },
};

/* ─── About Page ─── */
export const aboutPage = {
  hero: {
    tag: 'Über uns',
    title: 'Uns liegt Ihr <span class="highlight">Erfolg</span> am Herzen',
    subtitle: 'Mehr als nur Webdesign – wir sind Ihr Partner für digitale Exzellenz.',
  },
  intro: {
    tag: 'Wer wir sind',
    title: 'Nicht nur eine Agentur – Ihr <span class="highlight">digitaler Partner</span>',
    paragraphs: [
      'Bei RS Digital Solutions geht es um mehr als nur Webdesign. Wir sind eine Full-Service-Digitalagentur, die Unternehmen dabei unterstützt, im digitalen Zeitalter nicht nur präsent zu sein, sondern zu dominieren.',
      'Wir verbinden kreatives Design mit technischer Exzellenz. Von der ersten Beratung über das Konzept bis hin zur Umsetzung und darüber hinaus – wir sind an Ihrer Seite.',
    ],
  },
  values: [
    { icon: 'fas fa-heart', title: 'Leidenschaft', desc: 'Jedes Projekt ist eine Herzensangelegenheit' },
    { icon: 'fas fa-handshake', title: 'Partnerschaft', desc: 'Ihr Erfolg ist unser Antrieb' },
    { icon: 'fas fa-gem', title: 'Qualität', desc: 'Keine Kompromisse, nur Exzellenz' },
  ],
  faq: {
    tag: 'FAQ',
    title: 'Häufig gestellte <span class="highlight">Fragen</span>',
    items: [
      {
        q: 'Was kostet eine Website bei RS Digital Solutions?',
        a: 'Unsere Preise richten sich nach dem Umfang des Projekts. Eine professionelle Website beginnt ab 1.500 €. Kontaktieren Sie uns für ein individuelles Angebot.',
      },
      {
        q: 'Schafft ihr wirklich eine Website in 48 Stunden?',
        a: 'Ja! Mit unserem optimierten Workflow und erprobten Abläufen setzen wir Ihr Projekt in nur 48 Stunden um – ohne Kompromisse bei der Qualität.',
      },
      {
        q: 'Was ist ein KI-Chatbot und brauche ich das?',
        a: 'Ein KI-Chatbot ist ein intelligenter Assistent auf Ihrer Website, der Kundenanfragen beantwortet, Termine bucht und Produkte empfiehlt – 24/7, automatisch.',
      },
      {
        q: 'Bietet ihr auch Wartung und Support nach dem Launch?',
        a: 'Selbstverständlich! Nach der Liveschaltung bieten wir verschiedene Wartungspakete an, damit Ihre Website immer aktuell, sicher und performant bleibt.',
      },
      {
        q: 'Kann ich meine Website selbst bearbeiten?',
        a: 'Ja! Wir bauen Ihre Website auf einem benutzerfreundlichen CMS auf, sodass Sie Texte, Bilder und Inhalte jederzeit selbst anpassen können.',
      },
      {
        q: 'Wie läuft die Terminbuchungsintegration ab?',
        a: 'Wir integrieren ein professionelles Buchungssystem direkt in Ihre Website – mit Kalenderansicht, automatischen Bestätigungen und Google Calendar Sync.',
      },
    ],
  },
};

/* ─── 48h Page ─── */
export const fortyEightHoursPage = {
  hero: {
    tag: 'Unser Versprechen',
    title: 'Die <span class="highlight">48-Stunden</span>-Präsenz',
    subtitle: 'Vom Briefing zur fertigen Website – in nur zwei Tagen.',
  },
  usp: {
    title: 'Ihre neue Website in <span class="highlight">48 Stunden</span>',
    description:
      'Zeit ist Geld – und wir verschwenden weder das eine noch das andere. In nur <strong>zwei Tagen</strong> wird Ihre Website entweder komplett modernisiert oder von Grund auf neu erstellt. Hochprofessionell, inklusive aller Funktionen, die Ihr Unternehmen braucht.',
  },
  features: [
    {
      icon: 'fas fa-rocket',
      title: 'Blitzschnelle Umsetzung',
      desc: 'Vom Briefing bis zur Liveschaltung in nur 48 Stunden – dank optimierter Prozesse und erprobter Abläufe.',
    },
    {
      icon: 'fas fa-shopping-cart',
      title: 'Kompletter Online-Shop',
      desc: 'Voll funktionsfähiger E-Commerce mit Produktkatalog, Warenkorb und sicherer Zahlung – in Rekordzeit.',
    },
    {
      icon: 'fas fa-brain',
      title: 'Intelligente KI-Integration',
      desc: 'Chatbots, die mit Ihren Kunden sprechen, Termine buchen und Fragen beantworten – automatisch und rund um die Uhr.',
    },
    {
      icon: 'fas fa-calendar-check',
      title: 'Terminbuchungssystem',
      desc: 'Professionelle Buchungssoftware direkt in Ihre Website integriert – mit automatischen Bestätigungen.',
    },
  ],
  steps: [
    { number: '01', title: 'Briefing & Analyse', desc: 'Wir hören zu, analysieren Ihre Branche und definieren Ziele für Ihren digitalen Auftritt.' },
    { number: '02', title: 'Konzept & Design', desc: 'Wir erstellen ein maßgeschneidertes Konzept, das Ihre Marke perfekt repräsentiert.' },
    { number: '03', title: 'Entwicklung & Integration', desc: 'Technische Umsetzung mit modernsten Technologien – responsive, schnell und SEO-optimiert.' },
    { number: '04', title: 'Go Live & Support', desc: 'Nach finalem Testing geht Ihre Website live. Wir bleiben an Ihrer Seite für Updates und Support.' },
  ],
  timer: {
    digits: ['4', '8'],
    label: 'STUNDEN',
    subtitle: 'Vom Konzept zur fertigen Website',
    milestones: ['Briefing & Konzept', 'Design & Entwicklung', 'Testing & Optimierung', 'Go Live!'],
  },
  processSection: {
    tag: 'Unser Prozess',
    title: 'In <span class="highlight">4 Schritten</span> zu Ihrer Traumwebsite',
  },
  customCta: 'Jetzt in 48h online gehen',
  customCtaTitle: 'Ihre neue Website –<br><span class="highlight">in 48 Stunden live</span>. Versprochen.',
  faq: {
    tag: 'FAQ',
    title: 'Häufige Fragen zum <span class="highlight">48h-Versprechen</span>',
    items: [
      {
        q: 'Wie kann eine professionelle Website in nur 48 Stunden entstehen?',
        a: 'Durch einen optimierten Workflow: Tag 1 gehören Briefing, Konzept und Design, Tag 2 der Entwicklung und dem Go-Live. Wir arbeiten mit erprobten technischen Grundlagen und konzentrieren uns auf das, was Ihr Unternehmen wirklich braucht — ohne Qualitätskompromisse.',
      },
      {
        q: 'Was kostet der 48-Stunden-Website-Service?',
        a: 'Der 48h-Relaunch läuft zum Festpreis ab 1.500 € — ohne versteckte Kosten. Den genauen Preis erfahren Sie vorab im kostenlosen Beratungsgespräch, abhängig von Umfang und gewünschten Funktionen.',
      },
      {
        q: 'Was passiert, wenn die 48 Stunden nicht eingehalten werden?',
        a: 'Die 48 Stunden sind unser Versprechen und beziehen sich auf den vereinbarten Projektumfang. Verzögert sich etwas aus Gründen, die bei uns liegen, arbeiten wir ohne Aufpreis weiter, bis Ihre Website live ist.',
      },
      {
        q: 'Was muss ich für den 48h-Start vorbereiten?',
        a: 'Nur Ihr Logo, Ihre Texte bzw. Stichpunkte zu Ihren Leistungen und vorhandenes Bildmaterial. Fehlt etwas, unterstützen wir bei Texten und nutzen professionelles Bildmaterial. Nach dem Briefing übernehmen wir alles Weitere.',
      },
      {
        q: 'Ist eine 48-Stunden-Website auch SEO-optimiert?',
        a: 'Ja. Auch im 48h-Paket sind schnelle Ladezeiten, mobile Optimierung, saubere Seitenstruktur und lokale SEO-Grundlagen für Stuttgart enthalten — plus 30 Tage Support nach dem Launch.',
      },
    ],
  },
};

/* ─── CTA Section (Defaults + Seitenspezifisch) ─── */
export const ctaDefaults = {
  tag: 'Nächster Schritt',
  title: 'Bereit für eine Website,<br><span class="highlight">die Kunden bringt</span> – nicht nur gut aussieht?',
  subtitle:
    'Ein kurzes Gespräch, null Verpflichtung – und Sie wissen genau, was möglich ist.',
  primaryButton: 'Beratungstermin buchen',
  secondaryButton: 'Nachricht schreiben',
  trust: ['Kostenlos & unverbindlich', 'Antwort innerhalb von 24 h', 'Festpreis vor Projektstart'],
};

export const ctaPerPage = {
  leistungen: {
    title: 'Lassen Sie uns Ihr <span class="highlight">Projekt besprechen</span>',
    subtitle: 'Von der Idee zur fertigen Website – erzählen Sie uns, was Sie brauchen.',
  },
  referenzen: {
    title: 'Ihr Projekt könnte<br><span class="highlight">das nächste</span> sein',
    subtitle: 'Lassen Sie uns gemeinsam etwas Großartiges schaffen.',
  },
  about: {
    title: 'Lernen Sie uns kennen –<br><span class="highlight">unverbindlich</span>',
    subtitle: 'Ein Gespräch, kein Verkaufspitch. Wir hören zu und beraten ehrlich.',
  },
  ki: {
    title: 'KI-Demo für <span class="highlight">Ihre Website</span> anfragen',
    subtitle: 'Erleben Sie live, wie ein KI-Chatbot Ihr Business unterstützen kann.',
  },
};

/* ─── Trusted-By / Logo Marquee ─── */
export const trustedBy = {
  label: 'Vertrauen schenken uns unter anderem',
  clients: [
    { name: 'Akkilinc Buchhaltung', logo: '/logos/akkilinc.webp', showName: true },
    { name: 'Antephaus Stuttgart', logo: '/logos/antephaus.svg', showName: true },
    { name: 'Bera Gold & Diamond', logo: null, showName: true },
  ],
};

/* ─── Footer ─── */
export const footer = {
  description:
    'Hochprofessionelle Websites, Online-Shops & intelligente KI-Lösungen – maßgeschneidert und in nur 48 Stunden live.',
  columns: [],
  contactHeading: 'Kontakt',
  legalLinks: [
    { label: 'Datenschutz', href: '/datenschutz' },
    { label: 'Impressum', href: '/impressum' },
  ],
};

/* ─── Chatbot (Scripted Demo) ─── */
export const chatbot = {
  triggerAriaLabel: 'KI-Assistent öffnen',
  closeAriaLabel: 'KI-Assistent schließen',
  panelTitle: 'RS Digital Assistent',
  status: 'Automatischer Assistent · Antwortet sofort',
  avatar: 'RS',
  badge: 'KI',
  greeting: [
    'Hallo! 👋 Ich bin der virtuelle Assistent von RS Digital Solutions.',
    'Stellen Sie mir gerne eine Frage – oder wählen Sie unten eine Option.',
  ],
  quickReplies: [
    'Was kostet eine Website?',
    'Wie läuft ein Projekt ab?',
    'Was macht die KI-Integration?',
    'Brauche ich eine eigene Domain?',
  ],
  placeholder: 'Ihre Nachricht…',
  sendLabel: 'Senden',
  typingLabel: 'schreibt',
  fallback:
    'Gute Frage! Das beantworte ich Ihnen lieber persönlich. Möchten Sie direkt Kontakt aufnehmen?',
  fallbackFollowUps: ['Zum Kontaktformular'],
  ctaTarget: { type: 'contact', label: 'Zum Kontaktformular', anchor: '#kontakt' },
  intents: [
    {
      keywords: ['preis', 'kosten', 'teuer', 'wie viel', 'was kostet', 'budget'],
      reply:
        'Unsere Preise sind transparent und projektabhängig. Eine professionelle Website starten wir ab 1.500 €, Online-Shops ab 2.500 €. Möchten Sie ein individuelles Angebot?',
      followUps: ['Angebot anfragen', 'Wie läuft ein Projekt ab?'],
    },
    {
      keywords: ['48', 'schnell', 'dauer', 'wie lange'],
      reply:
        'Mit unserem optimierten 48h-Workflow ist Ihre Website in nur 2 Tagen live — ohne Qualitätskompromisse. Komplexere Projekte kalkulieren wir individuell.',
      followUps: ['Wie läuft ein Projekt ab?', 'Jetzt anfragen'],
    },
    {
      keywords: ['ki', 'chatbot', 'automat', 'bot', 'künstlich', 'a.i.', 'ai'],
      reply:
        'Unsere KI-Integration übernimmt Kundenanfragen rund um die Uhr, bucht Termine und qualifiziert Leads — automatisch. Kunden sparen damit bis zu 15 Stunden pro Woche.',
      followUps: ['Beispiel sehen', 'Termin vereinbaren'],
    },
    {
      keywords: ['domain', 'hosting', 'server', 'ssl'],
      reply:
        'Wir übernehmen alles: Domain-Registrierung, Premium-Hosting, SSL-Zertifikate, tägliche Backups und Updates. Sie müssen sich um nichts kümmern.',
      followUps: ['Mehr erfahren', 'Kontakt aufnehmen'],
    },
    {
      keywords: ['ablauf', 'prozess', 'läuft', 'schritte', 'vorgehen'],
      reply:
        'Wir arbeiten in 4 Schritten: 1) Briefing & Analyse, 2) Konzept & Design, 3) Entwicklung & KI-Integration, 4) Go Live & Full-Service. Transparent und planbar.',
      followUps: ['Projekt starten', 'Was kostet das?'],
    },
    {
      keywords: ['kontakt', 'anruf', 'anrufen', 'telefon', 'email', 'mail', 'termin', 'beratung', 'gespräch'],
      reply:
        'Gerne! Buchen Sie direkt online einen Beratungstermin — oder schreiben Sie uns über das Kontaktformular, auf Wunsch rufen wir Sie zurück.',
      followUps: ['Termin vereinbaren', 'Zum Kontaktformular'],
    },
    {
      keywords: ['shop', 'e-commerce', 'ecommerce', 'verkauf', 'bestell'],
      reply:
        'Wir bauen voll funktionsfähige Online-Shops mit Produktkatalog, Warenkorb und sicherer Zahlung — perfekt auf Ihre Branche zugeschnitten.',
      followUps: ['Beispiele sehen', 'Angebot anfragen'],
    },
    {
      keywords: ['seo', 'google', 'ranking', 'sichtbar', 'gefunden'],
      reply:
        'Jede Website von uns ist SEO-optimiert. Zusätzlich bieten wir laufende SEO-Betreuung, damit Sie bei Google sichtbar werden und bleiben.',
      followUps: ['Angebot anfragen', 'Termin vereinbaren'],
    },
    {
      keywords: ['wartung', 'support', 'update', 'sicherheit'],
      reply:
        'Nach dem Launch kümmern wir uns um alles: Sicherheits-Updates, Content-Änderungen, Performance-Monitoring und 24/7-Support. Rundum-Sorglos.',
      followUps: ['Was kostet das?', 'Kontakt aufnehmen'],
    },
    {
      keywords: ['referenz', 'projekt', 'beispiel', 'kunden'],
      reply:
        'Gerne! Unsere Referenzen finden Sie auf der Seite /referenzen — von Buchhaltung über Restaurant bis Juwelier. Ich kann Sie auch dorthin leiten.',
      followUps: ['Referenzen ansehen', 'Termin vereinbaren'],
    },
    {
      keywords: ['hallo', 'hi', 'servus', 'guten tag', 'moin', 'hey', 'hallo!'],
      reply:
        'Hallo! 👋 Schön, dass Sie hier sind. Wobei kann ich Ihnen heute helfen?',
      followUps: ['Was kostet eine Website?', 'Was macht die KI-Integration?'],
    },
    {
      keywords: ['danke', 'merci', 'vielen dank', 'dankeschön'],
      reply:
        'Sehr gerne! Wenn Sie noch Fragen haben, bin ich hier. Oder möchten Sie direkt Kontakt aufnehmen?',
      followUps: ['Zum Kontaktformular'],
    },
  ],
};

/* ─── UI Strings ─── */
export const ui = {
  themeToggle: {
    light: 'Light Mode',
    dark: 'Dark Mode',
    ariaLight: 'Light Mode aktivieren',
    ariaDark: 'Dark Mode aktivieren',
  },
  theme: {
    darkColor: '#ffffff',
    lightColor: '#1a1a2e',
  },
  shimmerButton: {
    dark: {
      bgBase: '#ffffff',
      bgHighlight: '#f1f1f1',
      textColor: 'rgba(30, 41, 59, 0.9)',
      textHover: '#0f172a',
      borderColor: 'rgba(226, 232, 240, 0.6)',
      borderHover: 'rgba(203, 213, 225, 0.8)',
      shadowHover: 'rgba(0, 0, 0, 0.08)',
    },
    light: {
      bgBase: '#1a1a2e',
      bgHighlight: '#2d3a4f',
      textColor: 'rgba(255, 255, 255, 0.9)',
      textHover: '#ffffff',
      borderColor: 'rgba(26, 26, 46, 0.15)',
      borderHover: 'rgba(26, 26, 46, 0.3)',
      shadowHover: 'rgba(26, 26, 46, 0.15)',
    },
  },
  notFound: {
    title: '404',
    heading: 'Seite nicht gefunden',
    text: 'Die angeforderte Seite existiert nicht oder wurde verschoben.',
    button: 'Zur Startseite',
  },
  errorBoundary: { heading: 'Etwas ist schiefgelaufen.', message: 'Bitte laden Sie die Seite neu.' },
  scanner: { loading: 'Screenshot wird geladen…', viewProject: 'Ansehen' },
  backToTop: { ariaLabel: 'Nach oben scrollen' },
};

/* ─── Impressum (§ 5 TMG) ─── */
export const impressumPage = {
  hero: {
    tag: 'Rechtliches',
    title: 'Impressum',
    subtitle: 'Anbieterkennzeichnung gemäß § 5 TMG.',
  },
  sections: [
    {
      heading: 'Angaben gemäß § 5 TMG',
      lines: [
        'RS DigitalSolutions',
        'Inh. Daniel Raja-Nigl',
        'Rosmarinweg 69',
        '70374 Stuttgart',
        'Deutschland',
      ],
    },
    {
      heading: 'Kontakt',
      lines: [
        'E-Mail: info@rs-digitalsolutions.de',
      ],
    },
    {
      heading: 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV',
      lines: [
        'Daniel Raja-Nigl',
        'Rosmarinweg 69',
        '70374 Stuttgart',
      ],
    },
    {
      heading: 'EU-Streitschlichtung',
      paragraphs: [
        'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/. Unsere E-Mail-Adresse finden Sie oben im Impressum.',
        'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
      ],
    },
    {
      heading: 'Haftung für Inhalte',
      paragraphs: [
        'Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.',
        'Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.',
      ],
    },
    {
      heading: 'Haftung für Links',
      paragraphs: [
        'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.',
        'Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.',
      ],
    },
    {
      heading: 'Urheberrecht',
      paragraphs: [
        'Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.',
        'Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.',
      ],
    },
  ],
};

/* ─── Datenschutzerklärung (DSGVO) ─── */
export const datenschutzPage = {
  hero: {
    tag: 'Rechtliches',
    title: 'Datenschutzerklärung',
    subtitle: 'Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.',
  },
  sections: [
    {
      heading: '1. Verantwortlicher',
      paragraphs: [
        'Verantwortlich für die Datenverarbeitung auf dieser Website ist:',
      ],
      lines: [
        'RS DigitalSolutions',
        'Inh. Daniel Raja-Nigl',
        'Rosmarinweg 69',
        '70374 Stuttgart',
        'Deutschland',
        'E-Mail: info@rs-digitalsolutions.de',
      ],
    },
    {
      heading: '2. Allgemeines zur Datenverarbeitung',
      paragraphs: [
        'Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung erfolgt regelmäßig nur nach Einwilligung des Nutzers (Art. 6 Abs. 1 lit. a DSGVO) oder wenn die Verarbeitung durch gesetzliche Vorschriften gestattet ist (Art. 6 Abs. 1 lit. b, c, f DSGVO).',
      ],
    },
    {
      heading: '3. Erhebung von Zugriffsdaten (Server-Logfiles)',
      paragraphs: [
        'Beim Aufruf unserer Website werden durch den Hosting-Provider automatisch Informationen erhoben und in sogenannten Server-Logfiles gespeichert. Dies sind: Browsertyp und -version, verwendetes Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse.',
        'Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden zur Gewährleistung eines reibungslosen Verbindungsaufbaus, einer komfortablen Nutzung sowie zur Auswertung der Systemsicherheit und -stabilität verarbeitet. Eine Zusammenführung dieser Daten mit anderen Datenquellen erfolgt nicht.',
      ],
    },
    {
      heading: '4. Kontaktaufnahme',
      paragraphs: [
        'Bei der Kontaktaufnahme über das Kontaktformular oder per E-Mail werden die von Ihnen mitgeteilten Daten (Name, E-Mail-Adresse, Nachricht) zum Zweck der Bearbeitung Ihrer Anfrage gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bzw. Art. 6 Abs. 1 lit. f DSGVO.',
        'Wir geben Ihre Daten nicht ohne Ihre Einwilligung weiter. Die Daten werden gelöscht, sobald sie für die Erreichung des Zwecks ihrer Erhebung nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.',
      ],
    },
    {
      heading: '5. Cookies',
      paragraphs: [
        'Unsere Website verwendet ausschließlich technisch notwendige Cookies, die für den Betrieb der Seite erforderlich sind (z. B. zur Speicherung des gewählten Themes). Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Eine Verarbeitung zu Marketing- oder Analysezwecken findet derzeit nicht statt.',
      ],
    },
    {
      heading: '6. SSL-/TLS-Verschlüsselung',
      paragraphs: [
        'Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und am Schloss-Symbol in Ihrer Browserzeile.',
      ],
    },
    {
      heading: '7. Ihre Rechte',
      paragraphs: [
        'Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft, Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung, Einschränkung der Verarbeitung, Datenübertragbarkeit oder Löschung dieser Daten (Art. 15–21 DSGVO).',
        'Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Ferner steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu (Art. 77 DSGVO). Zuständig ist der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg.',
      ],
    },
    {
      heading: '8. Widerruf Ihrer Einwilligung',
      paragraphs: [
        'Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Eine formlose Mitteilung per E-Mail an uns genügt. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.',
      ],
    },
    {
      heading: '9. Änderung dieser Datenschutzerklärung',
      paragraphs: [
        'Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen umzusetzen. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.',
      ],
    },
  ],
};
