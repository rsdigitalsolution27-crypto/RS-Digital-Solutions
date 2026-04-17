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
  email: 'info@rs-digitalsolutions.de',
  phone: '+49 176 1234 5678',
  phoneTel: 'tel:+4917612345678',
  whatsapp: 'https://wa.me/4917612345678',
  location: 'Deutschland',
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
  { label: 'Referenzen', path: '/referenzen' },
  { label: 'Über uns', path: '/about' },
  { label: 'Kontakt', path: '#kontakt', isAnchor: true },
];

/* ─── SEO Meta-Daten pro Seite ─── */
export const seo = {
  siteUrl: 'https://rs-digitalsolutions.de',
  defaults: {
    title: 'RS Digital Solutions – Ihre Webagentur | Professionelles Webdesign in 48 Stunden',
    description:
      'RS Digital Solutions – Hochprofessionelle Websites, Online-Shops, KI-Chatbots & Terminbuchung. Die 48-Stunden-Präsenz: In 2 Tagen online. Jetzt Kontakt aufnehmen!',
    ogImage: '/og-image.jpg',
    locale: 'de_DE',
    type: 'website',
  },
  pages: {
    home: {
      title: 'RS Digital Solutions – Webdesign, KI-Chatbots & 48h Websites',
      description:
        'Hochprofessionelle Websites, Online-Shops & intelligente KI-Lösungen – maßgeschneidert und in nur 48 Stunden live.',
      path: '/',
    },
    leistungen: {
      title: 'Leistungen – Webdesign, E-Commerce, KI & mehr | RS Digital Solutions',
      description:
        'Von der ersten Idee bis zum fertigen Produkt – alles aus einer Hand. Webdesign, Online-Shops, KI-Chatbots, SEO & Terminbuchung.',
      path: '/leistungen',
    },
    referenzen: {
      title: 'Referenzen – Unsere Projekte | RS Digital Solutions',
      description:
        'Sehen Sie unsere erfolgreich umgesetzten Projekte: Unternehmenswebsites, Restaurants, E-Commerce – alles mit Leidenschaft gebaut.',
      path: '/referenzen',
    },
    about: {
      title: 'Über uns – Ihr Partner für digitale Exzellenz | RS Digital Solutions',
      description:
        'Mehr als nur Webdesign – wir sind Ihr Partner für digitale Exzellenz. Erfahren Sie, wer wir sind und was uns antreibt.',
      path: '/about',
    },
    ki: {
      title: 'KI-Chatbots & Intelligente Websites | RS Digital Solutions',
      description:
        'Ihre Website spricht mit Ihren Kunden – KI-Chatbots für automatische Beratung, Terminvereinbarung & personalisierte Empfehlungen.',
      path: '/ki',
    },
    fortyEightHours: {
      title: 'In 48 Stunden online – Website-Relaunch | RS Digital Solutions',
      description:
        'Vom Briefing zur fertigen Website in nur zwei Tagen. Unser 48-Stunden-Versprechen für Ihren digitalen Erfolg.',
      path: '/48h',
    },
    notFound: {
      title: '404 – Seite nicht gefunden | RS Digital Solutions',
      description: 'Die angeforderte Seite wurde nicht gefunden.',
      path: '/404',
    },
  },
};

/* ─── Home Page ─── */
export const homePage = {
  hero: {
    titleLine1: 'Ihre Website arbeitet.',
    titleGradient: 'Auch wenn Sie schlafen.',
    titleLine3: '',
    subtitle:
      'KI-gestützte Websites, die Kundenanfragen automatisch beantworten, Termine buchen und Leads qualifizieren — 24/7.',
    primaryButton: 'Kostenlos beraten lassen',
    secondaryButton: 'Unsere Arbeit ansehen',
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
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
      },
      {
        id: 'webdesign',
        icon: 'fas fa-laptop-code',
        label: 'Webdesign',
        title: 'Professionelles Webdesign',
        desc: 'Moderne, performante Websites, die konvertieren — responsiv, SEO-optimiert und auf Ihre Marke zugeschnitten.',
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200&auto=format&fit=crop',
      },
      {
        id: 'ecommerce',
        icon: 'fas fa-store',
        label: 'E-Commerce',
        title: 'E-Commerce & Shops',
        desc: 'Voll funktionsfähige Online-Shops mit Produktkatalog, Warenkorb und sicherer Zahlungsabwicklung — startklar in Rekordzeit.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop',
      },
      {
        id: 'relaunch',
        icon: 'fas fa-bolt',
        label: '48h Relaunch',
        title: '48h Website-Relaunch',
        desc: 'Vom Briefing zur fertigen Website in nur zwei Tagen — ohne Qualitätskompromisse und zum Festpreis.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
      },
      {
        id: 'seo',
        icon: 'fas fa-search',
        label: 'SEO & Marketing',
        title: 'SEO & Online-Marketing',
        desc: 'Sichtbar werden, wo Ihre Kunden suchen. Wir sorgen für bessere Rankings und mehr qualifizierten Traffic.',
        image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1200&auto=format&fit=crop',
      },
      {
        id: 'termine',
        icon: 'fas fa-calendar-check',
        label: 'Terminbuchung',
        title: 'Terminbuchungssoftware',
        desc: 'Professionelle Buchungssysteme direkt in Ihre Website integriert — mit Google-Calendar-Sync und automatischen Bestätigungen.',
        image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1200&auto=format&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop',
      },
      {
        number: '02',
        name: 'Konzept & Design',
        title: 'Konzept & Design',
        desc: 'Unser Team erstellt ein maßgeschneidertes Konzept inklusive Wireframes und finalem Design — perfekt auf Ihre Marke abgestimmt.',
        image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1600&auto=format&fit=crop',
      },
      {
        number: '03',
        name: 'Entwicklung',
        title: 'Entwicklung & KI-Integration',
        desc: 'Technische Umsetzung mit modernsten Technologien: responsiv, schnell, SEO-optimiert und mit KI-Automatisierung ausgestattet.',
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1600&auto=format&fit=crop',
      },
      {
        number: '04',
        name: 'Go Live',
        title: 'Go Live & Full-Service',
        desc: 'Nach finalem Testing geht Ihre Website live. Domain, Hosting, Wartung und Support übernehmen wir — Sie kümmern sich ums Business.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
      },
    ],
  },
  stats: [
    { value: 15, suffix: '+', label: 'Projekte realisiert' },
    { value: 5, suffix: '+', label: 'Jahre Erfahrung' },
    { value: 100, suffix: '%', label: 'Weiterempfehlung' },
    { value: 48, suffix: 'h', label: 'Time-to-Launch' },
  ],
  testimonials: {
    tag: 'Kundenstimmen',
    title: 'Was unsere <span class="highlight">Kunden</span> sagen',
    description: 'Echte Stimmen aus echten Projekten — Unternehmen, die mit uns den Sprung gemacht haben.',
  },
  pricing: {
    tag: 'Preise & Pakete',
    title: 'Transparente <span class="highlight">Preise</span>, keine Überraschungen',
    description: 'Wählen Sie das Paket, das zu Ihrem Business passt — alles aus einer Hand, ohne versteckte Kosten.',
    packages: [
      {
        name: 'Starter Website',
        priceLabel: 'ab',
        price: '399',
        currency: '€',
        period: 'einmalig',
        desc: 'Perfekt für Selbstständige und kleine Unternehmen, die eine professionelle Online-Präsenz brauchen.',
        features: [
          'Professionelles Webdesign',
          'Responsive & Mobile-optimiert',
          'SEO-Grundoptimierung',
          'Kontaktformular',
          '1 Jahr Support inklusive',
        ],
        cta: 'Jetzt anfragen',
        highlighted: false,
      },
      {
        name: 'Rundum-Sorglos',
        priceLabel: 'ab',
        price: '19,90',
        currency: '€',
        period: 'pro Monat',
        desc: 'Website, Domain, Hosting und Wartung — alles aus einer Hand. Sie kümmern sich ums Business.',
        features: [
          'Alles aus Starter Website',
          'Domain-Registrierung inklusive',
          'Premium-Hosting (99,9% Uptime)',
          'SSL-Zertifikat & tägliche Backups',
          'Wartung, Updates & Sicherheit',
          '24/7 Support',
        ],
        cta: 'Paket auswählen',
        highlighted: true,
        badge: 'Empfohlen',
      },
      {
        name: 'Individuell',
        priceLabel: '',
        price: 'Custom',
        currency: '',
        period: 'auf Anfrage',
        desc: 'Für E-Commerce, KI-Automatisierung, Mehrsprachigkeit oder individuelle Anforderungen.',
        features: [
          'Alles aus Rundum-Sorglos',
          'KI-Chatbot & Automatisierung',
          'E-Commerce / Online-Shop',
          'Mehrsprachigkeit (bis zu 6 Sprachen)',
          'Terminbuchung & CRM-Integration',
          'Dedicated Account Manager',
        ],
        cta: 'Beratungstermin',
        highlighted: false,
      },
    ],
    footnote: 'Alle Preise netto zzgl. MwSt. Keine Einrichtungsgebühren, keine versteckten Kosten.',
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
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Wartung & Updates',
        desc: 'Sicherheit, Speed und Content-Änderungen übernehmen wir. Ihre Website bleibt immer aktuell, sicher und performant.',
      },
      {
        icon: 'fas fa-robot',
        title: 'KI & Automatisierung',
        desc: 'Intelligente Chatbots, automatische Terminbuchung und Lead-Qualifizierung — 24/7 im Einsatz für Ihr Business.',
      },
      {
        icon: 'fas fa-headset',
        title: '24/7 Support',
        desc: 'Ein Ansprechpartner, ein Team, volle Verantwortung. Schnelle Reaktionszeiten und persönlicher Service.',
      },
    ],
  },
  cta: {
    heading: 'Bereit, Ihre digitale Präsenz auf das nächste Level zu bringen?',
    subtitle:
      'Lassen Sie uns in einem unverbindlichen Gespräch herausfinden, wie wir Ihr Unternehmen online nach vorne bringen können.',
    primaryButton: 'Beratungsgespräch',
    secondaryButton: 'Jetzt anrufen',
  },
  contact: {
    tag: 'Kontakt',
    title: 'Lassen Sie uns sprechen',
    intro:
      'Haben Sie ein Projekt im Kopf? Erzählen Sie uns davon. Wir freuen uns auf Ihre Nachricht und melden uns innerhalb von 24 Stunden bei Ihnen.',
    labels: {
      email: 'E-Mail',
      phone: 'Telefon',
      location: 'Standort',
    },
    form: {
      name: { label: 'Name *', placeholder: 'Ihr vollständiger Name' },
      email: { label: 'E-Mail *', placeholder: 'ihre@email.de' },
      phone: { label: 'Telefon', placeholder: '+49 ...' },
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
      submit: { default: 'Senden', loading: 'Sendet...', success: 'Gesendet!' },
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
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800&auto=format&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=800&auto=format&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800&auto=format&fit=crop',
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
      'Unser Team verbindet kreatives Design mit technischer Exzellenz. Von der ersten Beratung über das Konzept bis hin zur Umsetzung und darüber hinaus – wir sind an Ihrer Seite.',
    ],
  },
  values: [
    { icon: 'fas fa-heart', title: 'Leidenschaft', desc: 'Jedes Projekt ist eine Herzensangelegenheit' },
    { icon: 'fas fa-handshake', title: 'Partnerschaft', desc: 'Ihr Erfolg ist unser Antrieb' },
    { icon: 'fas fa-gem', title: 'Qualität', desc: 'Keine Kompromisse, nur Exzellenz' },
  ],
  stats: [
    { value: 5, suffix: '+', label: 'Jahre Erfahrung' },
    { value: 15, suffix: '+', label: 'Projekte realisiert' },
    { value: 100, suffix: '%', label: 'Weiterempfehlungsrate' },
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
        a: 'Ja! Mit unserem optimierten Workflow und einem eingespielten Team setzen wir Ihr Projekt in nur 48 Stunden um – ohne Kompromisse bei der Qualität.',
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
      desc: 'Vom Briefing bis zur Liveschaltung in nur 48 Stunden – dank optimierter Prozesse und einem eingespielten Team.',
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
    { number: '02', title: 'Konzept & Design', desc: 'Unser Designteam erstellt ein maßgeschneidertes Konzept, das Ihre Marke perfekt repräsentiert.' },
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
};

/* ─── CTA Section (Defaults + Seitenspezifisch) ─── */
export const ctaDefaults = {
  title: 'Bereit für eine Website,<br><span class="highlight">die Kunden bringt</span> – nicht nur gut aussieht?',
  subtitle:
    'Ein kurzes Gespräch, null Verpflichtung – und Sie wissen genau, was möglich ist.',
  primaryButton: 'Beratungsgespräch',
  secondaryButton: 'Jetzt anrufen',
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
    { label: 'AGB', href: '/agb' },
  ],
};

/* ─── Chatbot (Scripted Demo) ─── */
export const chatbot = {
  triggerAriaLabel: 'KI-Assistent öffnen',
  closeAriaLabel: 'KI-Assistent schließen',
  panelTitle: 'RS Digital Assistent',
  status: 'Online · Antwortet in Sekunden',
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
  fallbackFollowUps: ['Zum Kontaktformular', 'Anrufen'],
  ctaTarget: { type: 'contact', label: 'Zum Kontaktformular', anchor: '#kontakt' },
  phoneTarget: { type: 'phone', label: 'Anrufen' },
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
        'Gerne! Sie erreichen uns telefonisch oder per E-Mail — oder Sie nutzen direkt das Kontaktformular. Soll ich Sie dorthin weiterleiten?',
      followUps: ['Zum Kontaktformular', 'Anrufen'],
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
      followUps: ['Zum Kontaktformular', 'Anrufen'],
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
  whatsapp: { ariaLabel: 'WhatsApp Chat' },
};
