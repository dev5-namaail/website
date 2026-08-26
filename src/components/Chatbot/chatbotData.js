const KB = {
  en: {
    greeting:
      "Hi! I'm the Namaa virtual assistant. I can answer questions about our services, DocuArena, the ROI calculator, pricing, our company, and more. Type 'help' to see everything I can do, or just ask me anything.",
    quick: ["Help", "Services", "DocuArena", "ROI Calculator", "Pricing", "Contact"],
    fallback:
      "Sorry, I didn't quite catch that. Try asking 'help' to see what I can do, or ask about Services, DocuArena, Digitization, Pricing, or Company info. You can also reach our team directly: [[Contact us|/contact]].",
    intents: [
      {
        id: "help",
        keywords: [
          "help", "can you help", "what can you do", "options", "menu", "navigation", "navigate",
          "how do i", "what can i ask", "guide", "assist me", "more info", "more information", "faq", "questions",
        ],
        response:
          "Of course! Here's what I can help with — just click any link:\n[[Home|/]]\n[[Our Portfolio|/portfolio]]\n[[About Namaa|/about]]\n[[Contact Us|/contact]]\n[[Document Retrieval ROI Calculator|/DocumentRetrieval]]\n[[News|/news]]\n[[Blog & Insights|/blogs]]\n\nI can also answer about Services, DocuArena, Pricing, Careers, and more. What would you like to explore?",
      },
      {
        id: "greeting",
        keywords: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening", "greetings", "salam", "howdy"],
        response:
          "Hello! Welcome to Namaa InfoLogistics. How can I help you today? Ask about our services, DocuArena, the ROI calculator, or contact details — or type 'help' to see all options.",
      },
      {
        id: "services",
        keywords: [
          "service", "services", "what do you do", "what you do", "solutions", "offer", "offerings",
          "products", "capabilities", "what we offer", "your work", "company activity", "business activity",
          "line of business", "core business", "what is your business", "field of work", "specialize",
          "specialty", "area of expertise", "deals with", "deal with",
        ],
        response:
          "Namaa InfoLogistics delivers end-to-end information and document management solutions:\n- Kodak Alaris scanning & imaging\n- Digitization of paper archives\n- PRM: paper Records Management (DocuArena)\n- FAM: Fixed Asset Management\n- ECM & Mail Management (Tarasol)\n\nSee all of them here: [[Our Portfolio|/portfolio]]. Ask me about any one for details.",
      },
      {
        id: "kodak",
        keywords: ["kodak", "alaris", "scanner", "scanning", "imaging", "capture", "hardware", "scan"],
        response:
          "We are an official partner of Kodak Alaris. We deliver world-class capture and imaging solutions — scanners, software, and services — that digitize documents quickly and integrate with your ECM platform. See more: [[Kodak Alaris|/portfolio]].",
      },
      {
        id: "digitization",
        keywords: ["digitization", "digitisation", "scan", "scanning", "digitalization", "convert", "paper to digital", "electronic archive", "digital archive"],
        response:
          "Our digitization services convert paper archives into indexed, searchable digital assets using advanced capture and QC workflows. That saves paper storage space while improving access and compliance.",
      },
      {
        id: "prm",
        keywords: ["prm", "paper records", "docuarena", "records management", "record management", "archive management", "box", "boxes", "warehouse", "records"],
        response:
          "DocuArena is our flagship paper Records Management platform. It enforces correct retrieval, tracks every document movement via barcode, and eliminates misfiling with verified re-filing. Each retrieval is governed by a work order, and each re-file is checked.",
      },
      {
        id: "fam",
        keywords: ["fam", "fixed asset", "fixed assets", "asset management", "assets", "maintenance", "tracking assets", "asset lifecycle"],
        response:
          "Our Fixed Asset Management (FAM) solutions give real-time visibility into your assets' location, condition, and lifecycle — helping you optimize maintenance, reduce costs, and stay compliant with accounting and regulatory requirements.",
      },
      {
        id: "ecm",
        keywords: ["ecm", "enterprise content", "content management", "arcmate", "arcmate9", "nvssoft", "document management system", "dms"],
        response:
          "ArcMate9 (NvsSoft ECM) provides a framework to capture, store, manage, and deliver content across your organization's lifecycle. It supports compliance, search, and records lifecycle management — boosting productivity and cutting costs.",
      },
      {
        id: "cms",
        keywords: ["cms", "mail management", "mail system", "tarasol", "correspondence", "workflow", "inbox", "ticketing"],
        response:
          "Our Mail Management System (Tarasol) creates a paperless environment with customizable forms, workflows, task management, meeting scheduling, and advanced analytics — streamlining internal and external correspondence.",
      },
      {
        id: "roi",
        keywords: ["roi", "calculator", "calculate", "cost calculator", "retrieval cost", "document retrieval", "roi tool", "how much do we lose", "lost time"],
        response:
          "Our Document Retrieval ROI Calculator shows what your organization loses each year searching for documents. Five questions, two minutes. Try it now: [[Open ROI Calculator|/DocumentRetrieval]].",
      },
      {
        id: "pricing",
        keywords: ["price", "pricing", "cost", "how much", "quote", "quotation", "fee", "fees", "rate", "rates", "budget", "expensive", "charge"],
        response:
          "Pricing depends on your organization's size, document volume, and scope of services. For an accurate quote, our team will assess your environment. Send us your details: [[Contact page|/contact]] and we'll follow up with tailored pricing.",
      },
      {
        id: "about",
        keywords: ["about", "who are you", "who are we", "company", "namaa", "infologistics", "history", "profile", "experience", "partners", "background"],
        response:
          "Namaa InfoLogistics is a professional software company helping organizations plan, build, and run their digital transformation journey. We partner with leaders like Kodak Alaris, NVSSoft, and Transtek, serving telecoms, healthcare, banking, energy, education, and more. 17+ projects delivered, 30+ years of combined experience. Learn more: [[About us|/about]].",
      },
      {
        id: "contact",
        keywords: ["contact", "email", "phone", "telephone", "call", "reach", "address", "location", "where are you", "talk", "speak to", "human", "agent", "support", "complaint", "message you"],
        response:
          "You can reach us at:\nEmail: info@namaa-il.com\nPhone: +20 101 957 8070\nAddress: 76 El Tayaran St., Nasr City, Cairo, Egypt.\nOr send a message directly: [[Contact page|/contact]].",
      },
      {
        id: "portfolio",
        keywords: ["portfolio", "projects", "case studies", "clients", "customers", "solutions page", "showcase", "examples"],
        response:
          "Our Portfolio page showcases our full range of solutions: ECM, Fixed Asset Management, paper Records Management, Digitization, Kodak Alaris, and Mail Management. Open it here: [[Portfolio|/portfolio]].",
      },
      {
        id: "blog",
        keywords: ["blog", "blogs", "articles", "news", "media", "insights", "publications", "updates", "awards", "partnership news"],
        response:
          "Find our articles, news, partnerships, and awards in the Media menu:\n[[News|/news]]\n[[Blog & Insights|/blogs]]\nTopics cover ECM, data governance, and document management best practices.",
      },
      {
        id: "industries",
        keywords: ["industry", "industries", "sectors", "who do you serve", "your clients", "customers", "telecom", "bank", "healthcare", "education", "energy", "government", "retail", "who works with"],
        response:
          "We serve telecoms, healthcare, banking and finance, energy, education, government, and cross-industry organizations across the Middle East and Africa. Our clients include banks, publishers, and public institutions. See more: [[About Namaa|/about]].",
      },
      {
        id: "demo",
        keywords: ["demo", "trial", "free assessment", "evaluation", "pilot", "test your platform", "free consultation", "assessment"],
        response:
          "We'd be happy to arrange a demo or a free assessment. Start with the ROI calculator to see your potential savings: [[Open ROI Calculator|/DocumentRetrieval]], then request a free evaluation from the results page, or contact us: [[Contact us|/contact]].",
      },
      {
        id: "download",
        keywords: ["download", "brochure", "profile", "pdf", "company profile", "document", "material", "catalog"],
        response:
          "You can download our company profile and DocuArena brochure from the Home and About pages — look for the 'Download' buttons. You can also contact us to request materials: [[Contact us|/contact]].",
      },
      {
        id: "careers",
        keywords: ["career", "careers", "job", "jobs", "vacancy", "vacancies", "join", "work with us", "hiring", "apply", "employment", "internship"],
        response:
          "We're always interested in talented people. There's no public careers page yet, so send your CV to info@namaa-il.com with the role you're interested in, or contact us: [[Contact us|/contact]].",
      },
      {
        id: "partnership",
        keywords: ["partnership", "partner", "reseller", "distribution", "become a partner", "channel", "collaborate", "alliance"],
        response:
          "We collaborate with technology leaders and are open to new partnerships. Send us your proposal via the contact page: [[Contact us|/contact]] and our team will get back to you.",
      },
      {
        id: "security",
        keywords: ["security", "gdpr", "compliance", "data protection", "privacy", "audit", "auditable", "regulation", "legal"],
        response:
          "Security and compliance are core to our solutions. DocuArena provides audited trails for every document movement, access controls, and verified re-filing to meet regulatory requirements. Ask us more via the contact page: [[Contact us|/contact]].",
      },
      {
        id: "appointment",
        keywords: ["appointment", "book a call", "meeting", "schedule", "talk to sales", "sales", "callback", "call me", "consultation"],
        response:
          "We'd love to talk! Use the Contact page to request a call and suggest a time: [[Contact page|/contact]] — our team will confirm your appointment.",
      },
      {
        id: "timeline",
        keywords: ["how long", "timeline", "implementation time", "implementation", "how fast can we", "when can we start", "duration", "rollout", "deploy", "go live", "how long does it take"],
        response:
          "Implementation timelines depend on scope, but most projects go live within 4–8 weeks. We start with an assessment, then configure, migrate, train, and support you at every step. Contact us for a tailored timeline: [[Contact page|/contact]].",
      },
      {
        id: "integration",
        keywords: ["integration", "integrate", "erp", "existing system", "existing systems", "sap", "oracle", "compatible", "api", "connect to", "work with our system"],
        response:
          "Yes — our solutions integrate with your existing ECM, ERP, and business systems. DocuArena supports standard APIs and import/export workflows, so it fits your stack instead of replacing it. Tell us about your systems: [[Contact us|/contact]].",
      },
      {
        id: "training",
        keywords: ["training", "train", "onboarding", "handover", "workshop", "courses", "learn to use", "after sales", "documentation"],
        response:
          "Every project includes staff training and handover, plus ongoing support. We train your team in-person or remotely and provide documentation and workflows so adoption is smooth.",
      },
      {
        id: "differentiator",
        keywords: ["different", "difference", "better than", "why docuarena", "advantages", "benefits", "unique", "vs", "compare", "competitor", "how is it better"],
        response:
          "What makes DocuArena different: unlike ECM platforms that only record where a document *should* be, DocuArena enforces where it actually is. Every movement is tracked by barcode scan, every retrieval is governed by a work order, and every re-file is verified — eliminating misfiling and cutting retrieval time dramatically.",
      },
      {
        id: "scalability",
        keywords: ["small business", "small company", "big company", "large", "scalable", "scale", "capacity", "millions", "how many", "grow"],
        response:
          "DocuArena scales from a single office to enterprise and government archives with millions of records. Whether you start with a few hundred boxes or a national archive, the platform grows with you.",
      },
      {
        id: "coverage",
        keywords: ["country", "countries", "where do you work", "outside egypt", "international", "abroad", "gulf", "saudi", "uae", "africa", "middle east", "egypt"],
        response:
          "We are based in Cairo, Egypt, and serve clients across the Middle East and Africa — including the Gulf, North Africa, and beyond. Our team can support remote and international deployments.",
      },
      {
        id: "hosting",
        keywords: ["cloud", "on premise", "on-premise", "hosting", "hosted", "where is my data", "server", "saas", "self hosted", "data stored"],
        response:
          "We support both options: on-premise deployment inside your environment, or private cloud hosting. Either way, your data stays under your control and our security model follows strict access control and audit standards.",
      },
      {
        id: "get-started",
        keywords: ["how to start", "get started", "start working", "first step", "steps", "process", "how do we begin", "what happens next", "onboard"],
        response:
          "Getting started is simple:\n1. Request a free assessment: [[Contact us|/contact]]\n2. Run the ROI calculator to see your potential savings: [[Open ROI Calculator|/DocumentRetrieval]]\n3. Our team will scope, propose, and guide you through implementation.",
      },
      {
        id: "payment",
        keywords: ["payment", "pay", "currency", "currencies", "egp", "usd", "euro", "dollar", "invoice", "billing", "installment", "how do we pay"],
        response:
          "We issue formal invoices and accept payment in EGP, USD, and EUR depending on the contract. Payment terms are agreed per project. For details, reach us at: [[Contact page|/contact]].",
      },
      {
        id: "hours",
        keywords: ["open", "hours", "working hours", "time", "when", "weekend", "schedule", "available"],
        response:
          "Our team operates during standard business hours (Sunday–Thursday in Egypt). For anything urgent, email info@namaa-il.com or call +20 101 957 8070.",
      },
      {
        id: "thanks",
        keywords: ["thank", "thanks", "thx", "merci", "shukran"],
        response: "You're very welcome! If you need anything else, I'm here to help — just ask.",
      },
      {
        id: "bye",
        keywords: ["bye", "goodbye", "see you", "see ya", "good night", "farewell"],
        response: "Goodbye! Thank you for visiting Namaa InfoLogistics. Come back anytime.",
      },
    ],
  },

  fr: {
    greeting:
      "Bonjour ! Je suis l'assistant virtuel de Namaa. Je peux répondre à vos questions sur nos services, DocuArena, le calculateur de ROI, les tarifs, notre entreprise, et plus encore. Tapez 'aide' pour voir tout ce que je peux faire.",
    quick: ["Aide", "Services", "DocuArena", "Calculateur ROI", "Tarifs", "Contact"],
    fallback:
      "Désolé, je n'ai pas bien compris. Tapez 'aide' pour voir ce que je peux faire, ou demandez-moi des infos sur les Services, DocuArena, la Numérisation, les Tarifs ou l'Entreprise. Vous pouvez aussi contacter notre équipe : [[Contactez-nous|/contact]].",
    intents: [
      {
        id: "help",
        keywords: [
          "aide", "aidez moi", "pouvez vous m aider", "que pouvez vous faire", "options", "menu", "navigation",
          "comment faire", "comment puis je", "guide", "faq", "questions", "plus d infos", "a propos du site",
        ],
        response:
          "Bien sûr ! Voici ce sur quoi je peux vous aider — cliquez sur un lien :\n[[Accueil|/]]\n[[Notre Portfolio|/portfolio]]\n[[À propos de Namaa|/about]]\n[[Contactez-nous|/contact]]\n[[Calculateur de ROI de Récupération|/DocumentRetrieval]]\n[[Actualités|/news]]\n[[Blog & Analyses|/blogs]]\n\nJe peux aussi répondre sur les Services, DocuArena, les Tarifs, les Carrières, et plus. Que voulez-vous explorer ?",
      },
      {
        id: "greeting",
        keywords: ["bonjour", "salut", "bonsoir", "hello", "hi", "coucou", "salam", "bonne journee", "bonne soiree"],
        response:
          "Bonjour ! Bienvenue chez Namaa InfoLogistics. Comment puis-je vous aider aujourd'hui ? Demandez-moi des infos sur nos services, DocuArena, le calculateur de ROI ou nos coordonnées — ou tapez 'aide' pour voir toutes les options.",
      },
      {
        id: "services",
        keywords: [
          "service", "services", "que faites", "qu est ce que vous faites", "solutions", "offres", "produits",
          "activites", "prestations", "que proposez vous", "votre activite", "activite de l entreprise",
          "activite de la societe", "domaine d activite", "secteur d activite", "domaine", "en quoi consiste",
          "que vendez vous", "specialites", "que fabriquez vous",
        ],
        response:
          "Namaa InfoLogistics fournit des solutions complètes de gestion des documents et de l'information :\n- Solutions de numérisation et d'imagerie Kodak Alaris\n- Numérisation des archives papier\n- PRM : Gestion des documents papier (DocuArena)\n- FAM : Gestion des actifs fixes\n- ECM et Gestion du courrier (Tarasol)\n\nDécouvrez-les ici : [[Notre Portfolio|/portfolio]]. Demandez-moi des détails sur l'un d'entre eux.",
      },
      {
        id: "kodak",
        keywords: ["kodak", "alaris", "scanner", "scanneur", "imagerie", "capture", "materiel", "numerisation", "numérisation"],
        response:
          "Nous sommes un partenaire officiel de Kodak Alaris. Nous livrons des solutions de capture et d'imagerie de classe mondiale — scanners, logiciels et services — qui numérisent rapidement vos documents et s'intègrent à votre plateforme ECM. Voir plus : [[Kodak Alaris|/portfolio]].",
      },
      {
        id: "digitization",
        keywords: ["numerisation", "numérisation", "scan", "scanner", "digitalisation", "convertir", "archive electronique", "archive numérique", "papier", "archives numeriques"],
        response:
          "Nos services de numérisation convertissent vos archives papier en actifs numériques indexés et consultables grâce à des workflows de capture et de contrôle qualité de pointe. Vous économisez de l'espace de stockage tout en améliorant l'accès et la conformité.",
      },
      {
        id: "prm",
        keywords: ["prm", "gestion des documents papier", "docuarena", "records", "gestion des archives", "classement", "reclassement", "boites", "dossiers", "entrepot", "archives"],
        response:
          "DocuArena est notre plateforme phare de gestion des documents papier. Elle impose la récupération correcte, suit chaque mouvement de document par code-barres et élimine le mauvais classement grâce à un re-classement vérifié. Chaque récupération est régie par un bon de travail et chaque re-classement est contrôlé.",
      },
      {
        id: "fam",
        keywords: ["fam", "actif fixe", "actifs fixes", "gestion des actifs", "actifs", "maintenance", "suivi des actifs", "cycle de vie des actifs"],
        response:
          "Nos solutions de gestion des actifs fixes (FAM) offrent une visibilité en temps réel sur la localisation, l'état et le cycle de vie de vos actifs — pour optimiser la maintenance, réduire les coûts et rester conforme aux exigences comptables et réglementaires.",
      },
      {
        id: "ecm",
        keywords: ["ecm", "gestion de contenu", "arcmate", "arcmate9", "nvssoft", "contenu d entreprise", "gestion documentaire", "ged"],
        response:
          "ArcMate9 (ECM NvsSoft) fournit un cadre pour capturer, stocker, gérer et livrer le contenu sur tout le cycle de vie de votre organisation. Il prend en charge la conformité, la recherche et la gestion du cycle de vie — améliorant la productivité et réduisant les coûts.",
      },
      {
        id: "cms",
        keywords: ["cms", "gestion du courrier", "systeme de gestion du courrier", "tarasol", "correspondance", "workflow", "flux", "messagerie"],
        response:
          "Notre système de gestion du courrier (Tarasol) crée un environnement sans papier avec des formulaires personnalisables, des flux de travail, la gestion des tâches, la planification des réunions et des rapports analytiques avancés — rationalisant la correspondance interne et externe.",
      },
      {
        id: "roi",
        keywords: ["roi", "calculateur", "calculer", "calcul cout", "cout de recuperation", "recuperation de documents", "outil roi", "combien on perd", "temps perdu"],
        response:
          "Notre calculateur de ROI de la récupération de documents montre ce que votre organisation perd chaque année à chercher des documents. Cinq questions, deux minutes. Essayez-le : [[Ouvrir le Calculateur de ROI|/DocumentRetrieval]].",
      },
      {
        id: "pricing",
        keywords: ["prix", "tarifs", "tarif", "combien", "devis", "cout", "coût", "budget", "tarification", "cher", "facturation"],
        response:
          "Le tarif dépend de la taille de votre organisation, du volume de documents et du périmètre des services. Pour un devis précis, notre équipe évaluera votre environnement. Envoyez-nous vos informations : [[Page Contact|/contact]] et nous vous répondrons avec une offre adaptée.",
      },
      {
        id: "about",
        keywords: ["a propos", "qui etes vous", "qui etes", "entreprise", "namaa", "infologistics", "histoire", "profil", "experience", "partenaires", "historique"],
        response:
          "Namaa InfoLogistics est une société de logiciels professionnelle qui aide les organisations à planifier, construire et mettre en œuvre leur parcours de transformation numérique. Nous sommes partenaires de leaders comme Kodak Alaris, NVSSoft et Transtek, au service des télécoms, de la santé, de la banque, de l'énergie, de l'éducation et plus encore. Plus de 17 projets livrés, plus de 30 ans d'expérience combinée. En savoir plus : [[À propos|/about]].",
      },
      {
        id: "contact",
        keywords: ["contact", "email", "e mail", "telephone", "appeler", "joindre", "adresse", "localisation", "ou etes vous", "parler a", "humain", "agent", "assistance", "reclamation", "vous ecrire"],
        response:
          "Vous pouvez nous joindre :\nEmail : info@namaa-il.com\nTéléphone : +20 101 957 8070\nAdresse : 76, rue El Tayaran, Nasr City, Le Caire, Égypte.\nOu envoyez un message : [[Page Contact|/contact]].",
      },
      {
        id: "portfolio",
        keywords: ["portfolio", "projets", "etudes de cas", "clients", "page solutions", "realisations", "exemples"],
        response:
          "Notre page Portfolio présente toute notre gamme de solutions : ECM, Gestion des actifs fixes, Gestion des documents papier, Numérisation, Kodak Alaris et Gestion du courrier. Ouvrez-la ici : [[Portfolio|/portfolio]].",
      },
      {
        id: "blog",
        keywords: ["blog", "blogs", "articles", "actualites", "actualité", "medias", "médias", "publications", "nouvelles", "recompenses", "prix"],
        response:
          "Retrouvez nos articles, actualités, partenariats et récompenses dans le menu Médias :\n[[Actualités|/news]]\n[[Blog & Analyses|/blogs]]\nLes sujets couvrent l'ECM, la gouvernance des données et les meilleures pratiques de gestion documentaire.",
      },
      {
        id: "industries",
        keywords: ["secteurs", "secteur", "qui servez vous", "vos clients", "telecom", "banque", "sante", "education", "energie", "gouvernement", "distribution", "industrie"],
        response:
          "Nous servons les télécoms, la santé, la banque et la finance, l'énergie, l'éducation, le gouvernement et des organisations transversales au Moyen-Orient et en Afrique. Nos clients incluent des banques, des éditeurs et des institutions publiques. Voir plus : [[À propos de Namaa|/about]].",
      },
      {
        id: "demo",
        keywords: ["demo", "essai", "evaluation gratuite", "evaluation", "pilote", "test", "consultation gratuite", "presentation"],
        response:
          "Nous serons ravis d'organiser une démo ou une évaluation gratuite. Commencez par le calculateur de ROI pour voir vos économies potentielles : [[Ouvrir le Calculateur de ROI|/DocumentRetrieval]], puis demandez une évaluation gratuite depuis la page de résultats, ou contactez-nous : [[Contactez-nous|/contact]].",
      },
      {
        id: "download",
        keywords: ["telecharger", "télécharger", "brochure", "profil", "pdf", "profil d entreprise", "document", "catalogue", "documentation"],
        response:
          "Vous pouvez télécharger notre profil d'entreprise et la brochure DocuArena depuis les pages Accueil et À propos — cherchez les boutons 'Télécharger'. Vous pouvez aussi nous contacter pour demander des documents : [[Contactez-nous|/contact]].",
      },
      {
        id: "careers",
        keywords: ["carriere", "carrière", "emploi", "poste", "recrutement", "rejoindre", "travailler avec nous", "embauche", "candidature", "stage"],
        response:
          "Nous sommes toujours intéressés par les talents. Il n'y a pas encore de page carrières publique : envoyez votre CV à info@namaa-il.com avec le poste visé, ou contactez-nous : [[Contactez-nous|/contact]].",
      },
      {
        id: "partnership",
        keywords: ["partenariat", "partenaire", "revendeur", "distribution", "devenir partenaire", "collaborer", "alliance"],
        response:
          "Nous collaborons avec les leaders technologiques et sommes ouverts à de nouveaux partenariats. Envoyez-nous votre proposition via la page contact : [[Contactez-nous|/contact]] et notre équipe vous répondra.",
      },
      {
        id: "security",
        keywords: ["securite", "sécurité", "rgpd", "conformite", "protection des donnees", "confidentialite", "audit", "auditable", "reglementation", "juridique"],
        response:
          "La sécurité et la conformité sont au cœur de nos solutions. DocuArena fournit des pistes d'audit pour chaque mouvement de document, des contrôles d'accès et un re-classement vérifié pour répondre aux exigences réglementaires. Demandez-nous plus d'infos : [[Contactez-nous|/contact]].",
      },
      {
        id: "appointment",
        keywords: ["rendez vous", "appel", "reunion", "planifier", "parler aux ventes", "ventes", "rappel", "appelez moi", "consultation"],
        response:
          "Nous serions ravis d'échanger ! Utilisez la page Contact pour demander un appel et suggérer un créneau : [[Page Contact|/contact]] — notre équipe confirmera votre rendez-vous.",
      },
      {
        id: "timeline",
        keywords: ["combien de temps", "delai", "duree", "mise en oeuvre", "deploiement", "quand", "lancement", "en combien de temps"],
        response:
          "Les délais dépendent du périmètre, mais la plupart des projets démarrent en 4 à 8 semaines. Nous commençons par une évaluation, puis configurons, migrons, formons et accompagnons votre équipe à chaque étape. Contactez-nous pour un calendrier adapté : [[Page Contact|/contact]].",
      },
      {
        id: "integration",
        keywords: ["integration", "intégration", "erp", "systeme existant", "systèmes existants", "sap", "oracle", "compatible", "api", "se connecter", "avec notre systeme"],
        response:
          "Oui — nos solutions s'intègrent à vos systèmes ECM, ERP et métier existants. DocuArena prend en charge les API standard et les flux d'import/export, pour s'adapter à votre infrastructure sans la remplacer. Parlez-nous de vos systèmes : [[Contactez-nous|/contact]].",
      },
      {
        id: "training",
        keywords: ["formation", "former", "atelier", "cours", "apprendre", "accompagnement", "prise en main", "apres vente", "documentation"],
        response:
          "Chaque projet inclut la formation de votre équipe et l'accompagnement au démarrage, plus un support continu. Nous formons votre personnel en présentiel ou à distance et fournissons documentation et processus pour une adoption fluide.",
      },
      {
        id: "differentiator",
        keywords: ["different", "difference", "mieux que", "pourquoi docuarena", "avantages", "benefices", "unique", "comparer", "concurrent", "en quoi c est mieux"],
        response:
          "Ce qui rend DocuArena différent : contrairement aux plateformes ECM qui enregistrent où un document devrait se trouver, DocuArena impose où il se trouve réellement. Chaque mouvement est suivi par scan de code-barres, chaque récupération est régie par un bon de travail et chaque re-classement est vérifié — éliminant le mauvais classement et réduisant fortement le temps de récupération.",
      },
      {
        id: "scalability",
        keywords: ["petite entreprise", "petite societe", "grande entreprise", "evolutif", "capacite", "millions", "dossiers", "combien", "croitre"],
        response:
          "DocuArena s'adapte d'un petit bureau aux archives d'entreprise et gouvernementales comptant des millions de dossiers. Que vous commenciez avec quelques centaines de boîtes ou une archive nationale, la plateforme évolue avec vous.",
      },
      {
        id: "coverage",
        keywords: ["pays", "ou travaillez", "hors egypte", "international", "etranger", "golfe", "arabie", "emirats", "afrique", "moyen orient", "egypte"],
        response:
          "Basés au Caire, en Égypte, nous servons des clients au Moyen-Orient et en Afrique — notamment le Golfe, l'Afrique du Nord et au-delà. Notre équipe accompagne les déploiements internationaux et à distance.",
      },
      {
        id: "hosting",
        keywords: ["cloud", "sur site", "on premise", "hebergement", "hebergé", "ou sont mes donnees", "serveur", "saas", "donnees stockees", "dans le cloud"],
        response:
          "Nous prenons en charge les deux options : déploiement sur site dans votre environnement, ou hébergement cloud privé. Dans les deux cas, vos données restent sous votre contrôle, avec des contrôles d'accès stricts et des normes d'audit.",
      },
      {
        id: "get-started",
        keywords: ["comment commencer", "commencer", "premiere etape", "etapes", "processus", "par ou commencer", "et apres", "demarrer"],
        response:
          "Commencer est simple :\n1. Demandez une évaluation gratuite : [[Contactez-nous|/contact]]\n2. Lancez le calculateur de ROI pour voir vos économies : [[Ouvrir le Calculateur de ROI|/DocumentRetrieval]]\n3. Notre équipe cadre, propose et vous accompagne jusqu'à l'implémentation.",
      },
      {
        id: "payment",
        keywords: ["paiement", "payer", "devise", "devises", "egp", "usd", "euro", "dollar", "facture", "facturation", "echeances", "comment payer"],
        response:
          "Nous émettons des factures formelles et acceptons les paiements en EGP, USD et EUR selon le contrat. Les conditions de paiement sont convenues par projet. Pour plus de détails : [[Page Contact|/contact]].",
      },
      {
        id: "hours",
        keywords: ["horaires", "heures", "ouverture", "quand", "disponible", "week end", "semaine", "disponibilite"],
        response:
          "Notre équipe travaille pendant les heures ouvrables standards (dimanche à jeudi en Égypte). Pour toute urgence, écrivez à info@namaa-il.com ou appelez le +20 101 957 8070.",
      },
      {
        id: "thanks",
        keywords: ["merci", "thank", "thanks", "shukran"],
        response: "Avec grand plaisir ! N'hésitez pas si vous avez besoin d'autre chose — demandez simplement.",
      },
      {
        id: "bye",
        keywords: ["au revoir", "bonne nuit", "a bientot", "bye", "adieu", "a la prochaine"],
        response: "Au revoir ! Merci de votre visite chez Namaa InfoLogistics. Revenez quand vous voulez.",
      },
    ],
  },

  ar: {
    greeting:
      "مرحباً! أنا المساعد الافتراضي لـ نماء . أستطيع الإجابة على أسئلتك حول خدماتنا، DocuArena، حاسبة العائد، الأسعار، شركتنا، والمزيد. اكتب 'مساعدة' لترى كل ما أستطيع فعله.",
    quick: ["مساعدة", "الخدمات", "DocuArena", "حاسبة العائد", "الأسعار", "تواصل معنا"],
    fallback:
      "عذراً، لم أفهم جيداً. اكتب 'مساعدة' لترى ما أستطيع فعله، أو اسأل عن الخدمات، DocuArena، الرقمنة، الأسعار، أو معلومات الشركة. يمكنك أيضاً التواصل مع فريقنا مباشرة: [[تواصل معنا|/contact]].",
    intents: [
      {
        id: "help",
        keywords: [
          "مساعدة", "ساعدني", "ماذا تستطيع", "ماذا يمكنك", "الخيارات", "القائمة", "التنقل", "كيف", "كيفية",
          "دليل", "أسئلة", "اسئلة", "معلومات اكثر", "ماذا اسأل",
        ],
        response:
          "بالطبع! هذه أقسام الموقع الرئيسية — اضغط على أي رابط:\n[[الرئيسية|/]]\n[[معرض الأعمال|/portfolio]]\n[[عن نماء|/about]]\n[[تواصل معنا|/contact]]\n[[حاسبة استرجاع المستندات|/DocumentRetrieval]]\n[[الأخبار|/news]]\n[[المدونة|/blogs]]\n\nأستطيع أيضاً الإجابة عن الخدمات، DocuArena، الأسعار، الوظائف، والمزيد. ماذا تريد أن تستكشف؟",
      },
      {
        id: "greeting",
        keywords: ["مرحبا", "اهلا", "أهلا", "السلام عليكم", "صباح الخير", "مساء الخير", "هاي", "هلا", "hello", "hi"],
        response: "أهلاً بك! مرحباً بك في نماء لتقنية المعلومات واللوجستيات. كيف يمكنني مساعدتك اليوم؟ اسأل عن خدماتنا، DocuArena، حاسبة العائد، أو بيانات التواصل — أو اكتب 'مساعدة' لترى كل الخيارات.",
      },
      {
        id: "services",
        keywords: ["خدمات", "خدمة", "ماذا تقدم", "ما هي خدماتكم", "حلول", "منتجات", "ماذا تفعلون", "اعمالكم", "الانشطة", "الأنشطة", "ماذا تعرضون", "نشاط", "نشاطكم", "نشاط الشركة", "نشاط الشركه", "نشاط شركتكم", "مجال العمل", "مجال عمل", "مجال عملكم", "شغلكم", "بتشتغلوا", "بتعملوا", "بتتعاملوا", "مجال تخصصكم", "في ايه"],
        response: "تقدم نماء لتقنية المعلومات حلولاً متكاملة لإدارة المستندات والمعلومات:\n- حلول المسح الضوئي والتصوير من Kodak Alaris\n- رقمنة الأرشيفات الورقية\n- PRM: إدارة المستندات الورقية (DocuArena)\n- FAM: إدارة الأصول الثابتة\n- ECM وإدارة المراسلات (Tarasol)\n\nشاهدها كلها هنا: [[معرض الأعمال|/portfolio]]. اسألني عن أي منها للتفاصيل.",
      },
      {
        id: "kodak",
        keywords: ["كوداك", "kodak", "alaris", "الماسح", "الماسحات", "المسح", "التصوير", "أجهزة", "الأجهزة"],
        response: "نحن شريك رسمي لـ Kodak Alaris. نقدم حلول المسح الضوئي وتصوير من الطراز العالمي — ماسحات ضوئية وبرمجيات وخدمات — تسرّع رقمنة مستنداتك وتتكامل مع منصة ECM الخاصة بك. شاهد المزيد: [[Kodak Alaris|/portfolio]].",
      },
      {
        id: "digitization",
        keywords: ["رقمنة", "رقمنه", "الرقمنة", "المسح الضوئي", "مسح", "تحويل", "الأرشيف الإلكتروني", "أرشيف رقمي", "ورق", "أرشفة"],
        response: "تحول خدمات الرقمنة لدينا أرشيفك الورقي إلى أصول رقمية مفهرسة وقابلة للبحث عبر سير عمل متقدم للمسح الضوئي ومراقبة الجودة. توفر مساحات التخزين الورقية مع تحسين الوصول والامتثال.",
      },
      {
        id: "prm",
        keywords: ["prm", "إدارة المستندات الورقية", "docuarena", "إدارة السجلات", "إدارة الأرشيف", "التصنيف", "إعادة التصنيف", "صناديق", "ملفات", "المستودع", "الأرشيف"],
        response: "DocuArena هي منصتنا الرئيسية لإدارة المستندات الورقية. تفرض الاسترجاع الصحيح، تتبع كل حركة مستند عبر الباركود، وتقضي على سوء التصنيف عبر إعادة تصنيف مُتحقق منها. كل استرجاع يخضع لأمر عمل وكل إعادة تصنيف تُفحص.",
      },
      {
        id: "fam",
        keywords: ["fam", "الأصول الثابتة", "إدارة الأصول", "أصول", "الصيانة", "تتبع الأصول", "دورة حياة الأصول"],
        response: "توفر حلول إدارة الأصول الثابتة (FAM) لدينا رؤية فورية لموقع أصولك وحالتها ودورة حياتها — لتحسين الصيانة وخفض التكاليف والامتثال للمتطلبات المحاسبية والتنظيمية.",
      },
      {
        id: "ecm",
        keywords: ["ecm", "إدارة المحتوى", "أركميت", "arcmate", "arcmate9", "nvssoft", "إدارة المحتوى المؤسسي", "نظام إدارة المستندات", "نظام إدارة الوثائق"],
        response: "يوفر ArcMate9 (ECM من NvsSoft) إطاراً المسح الضوئي المحتوى وتخزينه وإدارته وتسليمه على مدار دورة حياة مؤسستك. يدعم الامتثال والبحث وإدارة دورة الحياة — رفع الإنتاجية وخفض التكاليف.",
      },
      {
        id: "cms",
        keywords: ["cms", "إدارة المراسلات", "تراسل", "tarasol", "المراسلات", "سير العمل", "المهام", "البريد الداخلي", "الوارد"],
        response: "يخلق نظام إدارة المراسلات (Tarasol) بيئة بلا ورق بنماذج قابلة للتخصيص وسير عمل وإدارة مهام وجدولة اجتماعات وتقارير تحليلية متقدمة — تبسيطاً للمراسلات الداخلية والخارجية.",
      },
      {
        id: "roi",
        keywords: ["العائد", "حاسبة", "احسب", "تكلفة", "تكلفه", "استرجاع المستندات", "حساب", "كم نخسر", "خسائر", "الوقت الضائع"],
        response: "تعرض حاسبة العائد على الاستثمار لاسترجاع المستندات ما تخسره مؤسستك سنوياً بسبب البحث عن المستندات. خمسة أسئلة، دقيقتان. جربها الآن: [[افتح حاسبة العائد|/DocumentRetrieval]].",
      },
      {
        id: "pricing",
        keywords: ["سعر", "أسعار", "اسعار", "التكلفة", "بكم", "عرض سعر", "ميزانية", "التسعير", "رسوم", "غالي", "الدفع"],
        response: "يعتمد السعر على حجم مؤسستك وحجم المستندات ونطاق الخدمات. للحصول على عرض سعر دقيق، سيقيم فريقنا بيئتك. أرسل بياناتك عبر: [[صفحة التواصل|/contact]] وسنرد عليك بعرض مناسب.",
      },
      {
        id: "about",
        keywords: ["من نحن", "عن الشركة", "عن نماء", "شركة", "نماء", "infologistics", "تاريخ", "ملف", "خبرة", "شركاء", "نبذة"],
        response: "نماء لتقنية المعلومات هي شركة برمجيات متخصصة تساعد المؤسسات على تخطيط وبناء وتنفيذ رحلة التحول الرقمي. نحن شركاء لرواد مثل Kodak Alaris وNVSSoft وTranstek، ونخدم قطاعات الاتصالات والرعاية الصحية والبنوك والطاقة والتعليم وغيرها. أكثر من 17 مشروعاً وأكثر من 30 عاماً من الخبرة. تعرف علينا أكثر: [[عن نماء|/about]].",
      },
      {
        id: "contact",
        keywords: ["تواصل", "اتصل", "ايميل", "بريد", "هاتف", "رقم", "عنوان", "مكانكم", "مقر", "مقركم", "أين", "اين", "التحدث", "بشري", "موظف", "دعم", "شكوى", "مراسلتكم"],
        response: "يمكنك التواصل معنا عبر:\nالبريد: info@namaa-il.com\nالهاتف: ‎+20 101 957 8070\nالعنوان: 76 شارع الطيران، مدينة نصر، القاهرة، مصر.\nأو أرسل رسالة مباشرة: [[صفحة التواصل|/contact]].",
      },
      {
        id: "portfolio",
        keywords: ["معرض", "مشاريع", "دراسات", "عملاء", "صفحة الحلول", "أمثلة", "أعمالنا"],
        response: "تعرض صفحة معرض الأعمال جميع حلولنا: ECM، إدارة الأصول الثابتة، إدارة المستندات الورقية الرقمنة، Kodak Alaris، وإدارة المراسلات. افتحها هنا: [[معرض الأعمال|/portfolio]].",
      },
      {
        id: "blog",
        keywords: ["مدونة", "مقالات", "أخبار", "إعلام", "وسائل", "منشورات", "جوائز", "شراكات", "تحديثات"],
        response: "ستجد المقالات والأخبار والشراكات والجوائز ضمن قائمة الإعلام:\n[[الأخبار|/news]]\n[[المدونة|/blogs]]\nتغطي الموضوعات ECM وحوكمة البيانات وأفضل ممارسات إدارة المستندات.",
      },
      {
        id: "industries",
        keywords: ["قطاعات", "قطاع", "لمن تقدمون", "عملاؤكم", "الاتصالات", "البنوك", "الصحة", "التعليم", "الطاقة", "الحكومة", "التجزئة", "من تعملون مع"],
        response: "نخدم قطاعات الاتصالات والرعاية الصحية والبنوك والمالية والطاقة والتعليم والحكومة وغيرها في الشرق الأوسط وأفريقيا. عملاؤنا يشملون بنوكاً ودور نشر ومؤسسات حكومية. شاهد المزيد: [[عن نماء|/about]].",
      },
      {
        id: "demo",
        keywords: ["تجربة", "عرض", "تقييم مجاني", "تقييم", "نسخة تجريبية", "اختبار", "استشارة مجانية", "عرض توضيحي"],
        response: "يسعدنا ترتيب عرض توضيحي أو تقييم مجاني. ابدأ بحاسبة العائد لترى وفوراتك المحتملة: [[افتح حاسبة العائد|/DocumentRetrieval]]، ثم اطلب تقييماً مجانياً من صفحة النتائج، أو تواصل معنا: [[تواصل معنا|/contact]].",
      },
      {
        id: "download",
        keywords: ["تحميل", "كتيب", "ملف تعريفي", "بروفايل", "pdf", "مستند", "كتالوج", "مواد تعارفية"],
        response: "يمكنك تحميل ملفنا التعريفي وكتيب DocuArena من الصفحتين الرئيسية وعن الشركة — ابحث عن أزرار 'تحميل'. كما يمكنك التواصل معنا لطلب مواد: [[تواصل معنا|/contact]].",
      },
      {
        id: "careers",
        keywords: ["وظائف", "وظيفة", "شاغر", "شواغر", "انضم", "اعمل معنا", "توظيف", "التقديم", "تدريب", "مهنة"],
        response: "نحن مهتمون دائماً بالمواهب. لا توجد صفحة وظائف عامة بعد: أرسل سيرتك الذاتية إلى info@namaa-il.com مع الدور المطلوب، أو تواصل معنا: [[تواصل معنا|/contact]].",
      },
      {
        id: "partnership",
        keywords: ["شراكة", "شريك", "موزع", "توزيع", "أن أصبح شريكاً", "تعاون", "تحالف"],
        response: "نتعاون مع رواد التقنية ونرحب بالشراكات الجديدة. أرسل مقترحك عبر صفحة التواصل: [[تواصل معنا|/contact]] وسيرد عليك فريقنا.",
      },
      {
        id: "security",
        keywords: ["الأمان", "أمان", "الامتثال", "حماية البيانات", "الخصوصية", "تدقيق", "قابل للتدقيق", "لوائح", "قانوني", "gdpr"],
        response: "الأمان والامتثال في صميم حلولنا. يوفر DocuArena سجلات تدقيق لكل حركة مستند، وضوابط وصول، وإعادة تصنيف مُتحقق منها لتلبية المتطلبات التنظيمية. اسألنا للمزيد: [[تواصل معنا|/contact]].",
      },
      {
        id: "appointment",
        keywords: ["موعد", "حجز مكالمة", "اجتماع", "جدولة", "التحدث مع المبيعات", "المبيعات", "معاودة الاتصال", "اتصل بي", "استشارة"],
        response: "يسعدنا التحدث معك! استخدم صفحة التواصل لطلب مكالمة واقتراح وقت مناسب: [[صفحة التواصل|/contact]] — سيقوم فريقنا بتأكيد موعدك.",
      },
      {
        id: "timeline",
        keywords: ["كم المدة", "مدة التنفيذ", "المدة", "تنفيذ", "التنفيذ", "كام شهر", "متى نبدأ", "إمتى", "التركيب", "تستغرق"],
        response: "المدة تعتمد على حجم المشروع، لكن معظم المشاريع تبدأ خلال 4 إلى 8 أسابيع. نبدأ بتقييم، ثم الإعداد والنقل والتدريب والدعم في كل خطوة. تواصل معنا لمعرفة الجدول الزمني المناسب: [[صفحة التواصل|/contact]].",
      },
      {
        id: "integration",
        keywords: ["تكامل", "ربط", "أنظمتنا", "الأنظمة الحالية", "الأنظمة الموجودة", "erp", "sap", "oracle", "متوافق", "api", "الاتصال بنظام", "مع نظامنا"],
        response: "نعم — حلولنا تتكامل مع أنظمة ECM وERP والأنظمة التشغيلية الموجودة لديكم. يدعم DocuArena واجهات API القياسية وسير عمل الاستيراد والتصدير، ليتوافق مع بنيتكم الحالية دون استبدالها. أخبرنا بأنظمتكم: [[تواصل معنا|/contact]].",
      },
      {
        id: "training",
        keywords: ["تدريب", "نقدر نتعلم", "ورش عمل", "دورات", "كيف نستخدم", "الدعم بعد", "بعد التسليم", "ما بعد البيع", "شروحات"],
        response: "كل مشروع يشمل تدريب فريقكم والتسليم مع دعم مستمر. ندرّب موظفيكم حضورياً أو عن بُعد ونوفر الوثائق وسير العمل لضمان تبنٍّ سلس.",
      },
      {
        id: "differentiator",
        keywords: ["الفرق", "مختلف", "أفضل من", "ليه docuarena", "مزايا", "مميزات", "فريد", "مقارنة", "المنافسين", "بيختلف عن", "ايه اللي يميزكم"],
        response: "ما يميز DocuArena: على عكس منصات ECM التي تسجل أين *يفترض* أن يكون المستند، يفرض DocuArena أين يوجد فعلاً. كل حركة تُتبع بمسح الباركود، وكل استرجاع يخضع لأمر عمل، وكل إعادة تصنيف مُتحقق منها — يقضي على سوء التصنيف ويخفض وقت الاسترجاع بشكل كبير.",
      },
      {
        id: "scalability",
        keywords: ["شركة صغيرة", "شركه صغيره", "شركة كبيرة", "شركه كبيره", "قابل للتوسع", "التوسع", "سعة", "ملايين", "سجلات", "كام صندوق", "تكبر معانا"],
        response: "DocuArena يتوسع من مكتب واحد إلى أرشيفات مؤسسية وحكومية بملايين السجلات. سواء بدأتم بمئات الصناديق أو أرشيف وطني، المنصة تكبر معكم.",
      },
      {
        id: "coverage",
        keywords: ["بلاد", "دول", "بره مصر", "خارج مصر", "دولي", "الخليج", "السعودية", "الإمارات", "أفريقيا", "الشرق الأوسط", "مصر", "شغل في"],
        response: "مقرنا في القاهرة، مصر، ونخدم عملاء في الشرق الأوسط وأفريقيا — بما في ذلك الخليج وشمال أفريقيا وخارجها. فريقنا يدعم النشر الدولي وعن بُعد.",
      },
      {
        id: "hosting",
        keywords: ["سحاب", "cloud", "على خوادمنا", "استضافة", "الاستضافة", "فين بياناتي", "سيرفر", "server", "برمجيات كخدمة", "saas", "بياناتنا فين"],
        response: "ندعم الخيارين: النشر على خوادمكم داخل بيئتكم، أو الاستضافة السحابية الخاصة. في الحالتين تبقى بياناتكم تحت تحكم مع ضوابط وصول صارمة ومعايير تدقيق.",
      },
      {
        id: "get-started",
        keywords: ["ازاي نبدأ", "كيف نبدأ", "نبدأ ازاي", "الخطوة الأولى", "الخطوات", "مراحل العمل", "عملية", "إيه الخطوة الجاية", "التقديم"],
        response: "البداية بسيطة:\n1. اطلب تقييماً مجانياً: [[تواصل معنا|/contact]]\n2. شغّل حاسبة العائد لترى الوفورات المحتملة: [[افتح حاسبة العائد|/DocumentRetrieval]]\n3. فريقنا يحدد النطاق ويقدم العرض ويرافقك حتى التنفيذ.",
      },
      {
        id: "payment",
        keywords: ["الدفع", "دفع", "عملة", "العملة", "جنيه", "دولار", "يورو", "فاتورة", "الفوترة", "أقساط", "ندفع ازاي", "طرق الدفع"],
        response: "نصدر فواتير رسمية ونتقبل الدفع بالجنيه المصري والدولار واليورو حسب العقد. شروط الدفع تُتفق لكل مشروع. للتفاصيل: [[صفحة التواصل|/contact]].",
      },
      {
        id: "hours",
        keywords: ["مواعيد", "أوقات", "دوام", "ساعات", "متى", "عطلة", "الأحد", "الخميس", "متاحون"],
        response: "يعمل فريقنا خلال ساعات العمل المعتادة (الأحد إلى الخميس في مصر). لأي أمر عاجل، راسلنا على info@namaa-il.com أو اتصل على ‎+20 101 957 8070.",
      },
      {
        id: "thanks",
        keywords: ["شكرا", "شكرا لك", "مشكور", "thx", "thanks"],
        response: "على الرحب والسعة! إن احتجت أي شيء آخر، أنا هنا لمساعدتك — فقط اسأل.",
      },
      {
        id: "bye",
        keywords: ["مع السلامة", "وداعا", "وداعاً", "الى اللقاء", "تصبح على خير", "bye"],
        response: "مع السلامة! شكراً لزيارتك نماء لتقنية المعلومات. عد في أي وقت.",
      },
    ],
  },
};

const FALLBACK_LANG = "en";

function normalize(text) {
  return String(text)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\u0600-\u06ff\u00c0-\u024f\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function pick(response) {
  if (Array.isArray(response)) {
    return response[Math.floor(Math.random() * response.length)];
  }
  return response;
}

export function getReply(lang, input) {
  const kb = KB[lang] || KB[FALLBACK_LANG];
  if (input === "__greeting__") return kb.greeting;
  const text = normalize(input);
  if (!text) return kb.fallback;
  let best = null;
  let bestScore = 0;
  for (const intent of kb.intents) {
    let score = 0;
    for (const kw of intent.keywords) {
      if (text.includes(normalize(kw))) {
        score += kw.split(" ").length;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      best = intent;
    }
  }
  if (best) return pick(best.response);
  return kb.fallback;
}

export function getQuickReplies(lang) {
  const kb = KB[lang] || KB[FALLBACK_LANG];
  return kb.quick;
}
