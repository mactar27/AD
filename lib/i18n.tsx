'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Lang = 'fr' | 'en'

interface LanguageContextType {
  lang: Lang
  setLang: (l: Lang) => void
  t: typeof translations.fr
}

export const translations = {
  fr: {
    // Navbar
    nav: {
      home: 'Accueil',
      services: 'Services',
      whyUs: 'Pourquoi nous',
      portfolio: 'Réalisations',
      process: 'Processus',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Commencer un projet',
    },
    // Hero
    hero: {
      title1: 'Votre partenaire digital pour créer les',
      titleHighlight: 'solutions qui font grandir',
      title2: ' votre entreprise.',
      subtitle: "Chez AD PULSE, nous transformons vos idées en applications, plateformes web et stratégies digitales performantes.",
      cta1: 'Demander un devis',
      cta2: 'Découvrir nos services',
      social: '30+ clients nous font déjà confiance',
    },
    // Services
    services: {
      eyebrow: 'Nos Services',
      title1: 'Des solutions digitales complètes',
      titleHighlight: 'croissance',
      title2: 'pour accélérer votre ',
      description1: 'Nous concevons, développons et pilotons des solutions sur mesure',
      description2: 'qui répondent à vos objectifs business.',
      viewAll: 'Voir tous les services',
      collapse: 'Réduire',
      cards: {
        web: {
          title: 'Création de\nSites Web',
          desc: 'Des sites vitrines modernes, rapides et optimisés pour convertir vos visiteurs.',
          projects: 'Projets réalisés',
          satisfaction: 'Satisfaction',
        },
        apps: {
          title: 'Applications Web\nSur Mesure',
          desc: 'Des applications robustes, évolutives et sécurisées adaptées à vos besoins.',
          dashboard: 'Dashboard',
        },
        ecommerce: {
          title: 'E-commerce\nAvancé',
          desc: 'Des boutiques en ligne performantes, sécurisées et orientées résultats.',
        },
        mobile: {
          title: 'Applications\nMobiles',
          desc: 'Applications iOS et Android modernes, fluides et centrées utilisateur.',
        },
        seo: {
          title: 'SEO &\nRéférencement',
          traffic: 'Trafic organique',
        },
        ads: {
          title: 'Publicité\nDigitale',
        },
        design: {
          title: 'Design\nUI/UX',
        },
        cloud: {
          title: 'Cloud &\nInfrastructure',
        },
      },
      ctaBanner: {
        title: 'Un projet en tête ? Parlons-en.',
        desc: "Nous vous accompagnons de l'idée au lancement.",
        button: 'Discuter avec un expert',
        trust: '30+ entreprises\nnous font confiance',
      },
      fullList: {
        title: 'Toutes nos expertises',
        desc: 'Une gamme complète pour répondre à chaque besoin digital.',
        dev: 'Développement',
        design: 'Design & Image',
        marketing: 'Marketing Digital',
        infra: 'Infra & Data',
      },
      discover: 'Découvrir'
    },
    // Why us
    whyUs: {
      eyebrow: 'Pourquoi choisir AD PULSE ?',
      title: 'Votre succès est notre mission',
      description: 'Nous combinons expertise, créativité et technologie pour fournir des solutions qui font vraiment la différence.',
    },
    // Process
    process: {
      eyebrow: 'Notre processus',
      title: 'Une méthodologie claire et efficace',
      description: 'Sept étapes maîtrisées pour transformer votre idée en une solution prête à grandir.',
    },
    // Portfolio
    portfolio: {
      eyebrow: 'Réalisations',
      title: 'Découvrez quelques-uns de nos projets',
      description: 'Un aperçu des solutions que nous avons conçues pour nos clients à travers différents secteurs.',
      all: 'Tous',
    },
    // Testimonials
    testimonials: {
      eyebrow: 'Témoignages',
      title: 'Ils parlent de nous',
      description: 'La satisfaction de nos clients est la meilleure preuve de notre engagement.',
      prev: 'Témoignage précédent',
      next: 'Témoignage suivant',
      goTo: 'Aller au témoignage',
    },
    // FAQ
    faq: {
      eyebrow: 'FAQ',
      title: 'Questions fréquentes',
      description: 'Tout ce que vous devez savoir avant de démarrer votre projet avec AD PULSE.',
    },
    // CTA
    cta: {
      title: 'Prêt à transformer votre projet en succès ?',
      subtitle: 'Parlons de votre projet et construisons ensemble des solutions digitales performantes.',
      button: 'Contactez-nous',
    },
    // Contact
    contact: {
      eyebrow: 'Contact',
      title: 'Démarrez votre projet',
      description: 'Remplissez le formulaire ou contactez-nous directement. Notre équipe vous répond sous 24h.',
      namePlaceholder: 'Votre nom complet',
      emailPlaceholder: 'Votre adresse email',
      phonePlaceholder: 'Votre numéro de téléphone',
      form: {
        firstName: 'Prénom',
        lastName: 'Nom',
        company: 'Entreprise',
        phone: 'Téléphone',
        email: 'Email',
        subject: 'Sujet',
        message: 'Message',
        optional: 'optionnel',
        firstNamePh: 'Votre prénom',
        lastNamePh: 'Votre nom',
        companyPh: 'Votre société',
        phonePh: '+221 ...',
        emailPh: 'votre@email.com',
        subjectPh: 'Objet de votre demande',
        messagePh: 'Décrivez votre projet...',
      },
      projectType: 'Type de projet',
      projectTypes: ['Site web', 'Application mobile', 'Marketing digital', 'Design', 'Autre'],
      messagePlaceholder: 'Décrivez votre projet, vos objectifs et votre budget estimé…',
      submit: 'Envoyer le message',
      sending: 'Envoi en cours…',
      successTitle: 'Message envoyé !',
      successMsg: "Merci pour votre message. Notre équipe vous contactera dans les 24 heures.",
      newMessage: 'Envoyer un nouveau message',
      info: {
        address: 'Adresse',
        phone: 'Téléphone',
        email: 'Email',
        whatsapp: 'WhatsApp',
        whatsappBtn: 'Discuter sur WhatsApp',
      },
    },
    // Footer
    footer: {
      tagline: "Votre partenaire pour des solutions digitales performantes à Dakar et en Afrique.",
      quickLinks: 'Liens rapides',
      ourServices: 'Nos Services',
      newsletter: 'Newsletter',
      newsletterDesc: "Recevez nos actualités et conseils digitaux directement dans votre boîte mail.",
      emailPlaceholder: 'Votre email',
      subscribe: "S'abonner",
      subscribed: 'Merci ! Vous êtes bien inscrit.',
      rights: 'Tous droits réservés.',
      legal: 'Mentions légales',
      privacy: 'Politique de confidentialité',
      links: [
        { label: 'Accueil', href: '#accueil' },
        { label: 'Services', href: '#services' },
        { label: 'Réalisations', href: '#realisations' },
        { label: 'À propos', href: '#pourquoi-nous' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    // Chatbot
    chatbot: {
      welcome: "Bonjour ! 👋 Je suis **Addy**, l'assistante d'AD PULSE. Vous avez un projet d'application mobile, de site web ou de marketing à Dakar ?",
      suggestions: ['Quels sont vos services ?', 'Demander un devis', 'Voir les réalisations', 'Contactez-nous'],
      placeholder: 'Écrivez ou parlez…',
      listening: 'Écoute en cours…',
      online: 'En ligne',
      speaking: 'En train de parler…',
      error: 'Une erreur est survenue. Veuillez réessayer.',
      ariaLabel: 'Discuter avec Addy',
      muteLabel: 'Couper le son',
      unmuteLabel: 'Activer le son',
      micLabel: 'Parler à Addy',
      stopMicLabel: "Arrêter l'écoute",
      voiceNotSupported: 'Votre navigateur ne supporte pas la reconnaissance vocale.',
      lang: 'fr-FR',
    },
    // Onboarding / splash
    splash: {
      steps: [
        {
          badge: 'Développement Web',
          title: 'Des sites & apps qui convertissent',
          description: 'Nous créons des expériences web modernes, rapides et optimisées pour transformer vos visiteurs en clients.',
        },
        {
          badge: 'Marketing Digital',
          title: 'Visibilité & croissance sur mesure',
          description: 'SEO, SEA, réseaux sociaux et email marketing : nous pilotons votre acquisition digitale pour des résultats concrets.',
        },
        {
          badge: 'Design & Image',
          title: 'Une identité visuelle qui marque les esprits',
          description: 'UI/UX, graphisme, photographie et vidéo : nous construisons une image de marque forte et cohérente pour votre entreprise.',
        },
      ],
      checklist: ['Expertise locale Dakar', 'Livraison rapide', 'Support continu'],
      next: 'Suivant',
      discover: 'Découvrir AD PULSE',
      skip: "Passer l'introduction",
      tagline: 'Agence digitale — Dakar',
    },
    // Site data
    data: {
      navLinks: [
        { label: 'Accueil', href: '#accueil' },
        { label: 'Services', href: '#services' },
        { label: 'Pourquoi nous', href: '#pourquoi' },
        { label: 'Réalisations', href: '#realisations' },
        { label: 'Processus', href: '#processus' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contact', href: '#contact' },
      ],
      reasons: [
        { title: 'Expertise', description: "Une équipe d'experts passionnés et expérimentés." },
        { title: 'Innovation', description: 'Des solutions modernes, créatives et différenciantes.' },
        { title: 'Accompagnement', description: 'Un suivi personnalisé à chaque étape du projet.' },
        { title: 'Sécurité', description: 'Vos données sont entre de bonnes mains.' },
        { title: 'Performance', description: 'Des solutions rapides et optimisées.' },
        { title: 'Respect des délais', description: 'Des projets livrés dans les temps, sans surprise.' },
        { title: 'Technologies modernes', description: 'Nous utilisons les meilleures technologies du marché.' },
        { title: 'Solutions évolutives', description: 'Des solutions pensées pour grandir avec vous.' },
      ],
      processSteps: [
        { step: '01', title: 'Analyse', description: 'Nous étudions votre projet et vos objectifs.' },
        { step: '02', title: 'Conception', description: "Nous définissons l'architecture et la stratégie." },
        { step: '03', title: 'Design', description: 'Nous créons des interfaces modernes et intuitives.' },
        { step: '04', title: 'Développement', description: 'Nous développons avec les meilleures technologies.' },
        { step: '05', title: 'Tests', description: 'Nous testons pour garantir qualité et performance.' },
        { step: '06', title: 'Déploiement', description: 'Mise en production sécurisée et maîtrisée.' },
        { step: '07', title: 'Maintenance', description: "Nous assurons le suivi et l'amélioration continue." },
      ],
      projectCategories: ['Tous', 'Site E-commerce', 'ERP', 'CRM', 'Application Mobile', 'Dashboard', 'Site Institutionnel', 'Plateforme SaaS', 'Portfolio'],
      faqs: [
        { q: 'Pourquoi choisir AD PULSE ?', a: 'Nous combinons expertise technique, créativité et accompagnement personnalisé pour livrer des solutions sur mesure, performantes et évolutives qui font réellement la différence.' },
        { q: 'Combien coûte un projet ?', a: "Chaque projet est unique. Le budget dépend de la complexité, des fonctionnalités et des délais. Nous établissons un devis transparent et détaillé après une première analyse gratuite de vos besoins." },
        { q: 'Combien de temps prend un développement ?', a: 'Selon la portée, un projet peut durer de quelques semaines à plusieurs mois. Nous définissons ensemble un planning clair avec des jalons précis dès le démarrage.' },
        { q: 'Faites-vous aussi le design ?', a: "Oui. Notre équipe UI/UX conçoit des interfaces modernes, intuitives et alignées sur votre identité de marque, avant même la phase de développement." },
        { q: 'Proposez-vous un accompagnement ?', a: 'Absolument. Nous assurons la maintenance, les évolutions et un support continu après le lancement pour faire grandir votre solution dans la durée.' },
      ],
      testimonials: [
        { name: 'Marc D.', role: 'Directeur, TechNova', rating: 5, quote: "AD PULSE a transformé notre idée en une solution digitale performante. L'équipe est professionnelle et à l'écoute." },
        { name: 'Sophie L.', role: 'CEO, GreenShop', rating: 5, quote: 'Un accompagnement exceptionnel du début à la fin. Résultats au-delà de nos attentes !' },
        { name: 'Julien T.', role: 'Responsable Marketing', rating: 5, quote: "Leur expertise en SEO et SEA nous a permis d'augmenter notre visibilité de 200%." },
        { name: 'Amina K.', role: 'Fondatrice, Bloomly', rating: 5, quote: 'Une équipe créative et rigoureuse. Notre nouvelle plateforme est rapide et élégante.' },
        { name: 'David R.', role: 'CTO, FinPulse', rating: 5, quote: "Architecture solide et code propre. Exactement ce dont notre startup avait besoin." },
      ],
      services: [
        { title: 'Applications Web Full Stack', description: 'Des applications robustes et évolutives du front au back-end.' },
        { title: 'Progressive Web Apps (PWA)', description: 'Des expériences web installables, rapides et hors-ligne.' },
        { title: 'Création de Sites Web', description: 'Sites vitrines élégants et optimisés pour la conversion.' },
        { title: 'Développement Web', description: 'Code moderne, performant et maintenable sur mesure.' },
        { title: 'E-commerce Avancé', description: 'Boutiques en ligne performantes et orientées ventes.' },
        { title: 'Design UI/UX', description: "Interfaces intuitives centrées sur l'expérience utilisateur." },
        { title: 'Développement Mobile', description: 'Applications iOS et Android natives et hybrides.' },
        { title: 'ERP & CRM sur mesure', description: 'Outils de gestion adaptés à vos processus métier.' },
        { title: 'Architecture de Bases de Données', description: 'Modèles de données fiables, sécurisés et scalables.' },
        { title: 'SEO', description: 'Optimisation du référencement naturel pour plus de visibilité.' },
        { title: 'SEA', description: 'Campagnes publicitaires payantes rentables et ciblées.' },
        { title: 'Community Management', description: 'Animation et croissance de vos communautés sociales.' },
        { title: 'Architecture Cloud', description: 'Infrastructures cloud résilientes et automatisées.' },
        { title: "Développement d'API", description: 'APIs sécurisées et documentées pour vos intégrations.' },
        { title: 'Cybersécurité', description: 'Protection de vos données et de vos infrastructures.' },
        { title: 'Analyse de Données', description: 'Tableaux de bord et insights pour décider mieux.' },
        { title: 'Graphisme', description: 'Identités visuelles et supports créatifs impactants.' },
        { title: "Gestion d'Image", description: "Création et gestion d'une image de marque cohérente." },
        { title: 'Communication Strategy', description: 'Stratégies de communication claires et efficaces.' },
        { title: 'Email Marketing', description: 'Campagnes email automatisées et personnalisées.' },
        { title: 'Publicité Digitale', description: 'Acquisition multicanale pour booster votre croissance.' },
        { title: 'Photographie Professionnelle', description: 'Photos produits et corporate de haute qualité.' },
        { title: 'Montage Vidéo', description: 'Vidéos engageantes pour valoriser votre marque.' },
      ],
    },
  },

  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      whyUs: 'Why us',
      portfolio: 'Portfolio',
      process: 'Process',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Start a project',
    },
    hero: {
      title1: 'Your digital partner to build the',
      titleHighlight: 'solutions that grow',
      title2: ' your business.',
      subtitle: 'At AD PULSE, we turn your ideas into apps, web platforms and high-performance digital strategies.',
      cta1: 'Get a quote',
      cta2: 'Discover our services',
      social: '30+ clients already trust us',
    },
    services: {
      eyebrow: 'Our Services',
      title1: 'Comprehensive digital solutions',
      titleHighlight: 'growth',
      title2: 'to accelerate your ',
      description1: 'We design, develop and manage custom solutions',
      description2: 'that meet your business objectives.',
      viewAll: 'View all services',
      collapse: 'Collapse',
      cards: {
        web: {
          title: 'Website\nCreation',
          desc: 'Modern, fast and optimized showcase sites to convert your visitors.',
          projects: 'Projects delivered',
          satisfaction: 'Satisfaction',
        },
        apps: {
          title: 'Custom Web\nApplications',
          desc: 'Robust, scalable and secure applications tailored to your needs.',
          dashboard: 'Dashboard',
        },
        ecommerce: {
          title: 'Advanced\nE-commerce',
          desc: 'High-performance, secure and results-oriented online stores.',
        },
        mobile: {
          title: 'Mobile\nApplications',
          desc: 'Modern, fluid and user-centric iOS and Android apps.',
        },
        seo: {
          title: 'SEO &\nOptimization',
          traffic: 'Organic traffic',
        },
        ads: {
          title: 'Digital\nAdvertising',
        },
        design: {
          title: 'UI/UX\nDesign',
        },
        cloud: {
          title: 'Cloud &\nInfrastructure',
        },
      },
      ctaBanner: {
        title: 'Have a project in mind? Let\'s talk.',
        desc: "We support you from idea to launch.",
        button: 'Talk to an expert',
        trust: '30+ companies\ntrust us',
      },
      fullList: {
        title: 'All our expertise',
        desc: 'A complete range to meet every digital need.',
        dev: 'Development',
        design: 'Design & Brand',
        marketing: 'Digital Marketing',
        infra: 'Infra & Data',
      },
      discover: 'Discover'
    },
    whyUs: {
      eyebrow: 'Why choose AD PULSE?',
      title: 'Your success is our mission',
      description: 'We combine expertise, creativity and technology to deliver solutions that truly make a difference.',
    },
    process: {
      eyebrow: 'Our process',
      title: 'A clear and effective methodology',
      description: 'Seven mastered steps to turn your idea into a solution ready to grow.',
    },
    portfolio: {
      eyebrow: 'Portfolio',
      title: 'Explore some of our projects',
      description: 'A glimpse of the solutions we have designed for clients across different industries.',
      all: 'All',
    },
    testimonials: {
      eyebrow: 'Testimonials',
      title: 'What our clients say',
      description: 'Client satisfaction is the best proof of our commitment.',
      prev: 'Previous testimonial',
      next: 'Next testimonial',
      goTo: 'Go to testimonial',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently asked questions',
      description: 'Everything you need to know before starting your project with AD PULSE.',
    },
    cta: {
      title: 'Ready to turn your project into a success?',
      subtitle: "Let's talk about your project and build high-performance digital solutions together.",
      button: 'Contact us',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Start your project',
      description: 'Fill in the form or contact us directly. Our team responds within 24h.',
      namePlaceholder: 'Your full name',
      emailPlaceholder: 'Your email address',
      phonePlaceholder: 'Your phone number',
      form: {
        firstName: 'First name',
        lastName: 'Last name',
        company: 'Company',
        phone: 'Phone',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        optional: 'optional',
        firstNamePh: 'Your first name',
        lastNamePh: 'Your last name',
        companyPh: 'Your company',
        phonePh: '+221 ...',
        emailPh: 'your@email.com',
        subjectPh: 'Subject of your request',
        messagePh: 'Describe your project...',
      },
      projectType: 'Project type',
      projectTypes: ['Website', 'Mobile app', 'Digital marketing', 'Design', 'Other'],
      messagePlaceholder: 'Describe your project, goals and estimated budget…',
      submit: 'Send message',
      sending: 'Sending…',
      successTitle: 'Message sent!',
      successMsg: 'Thank you for your message. Our team will contact you within 24 hours.',
      newMessage: 'Send another message',
      info: {
        address: 'Address',
        phone: 'Phone',
        email: 'Email',
        whatsapp: 'WhatsApp',
        whatsappBtn: 'Chat on WhatsApp',
      },
    },
    footer: {
      tagline: 'Your partner for high-performance digital solutions in Dakar and Africa.',
      quickLinks: 'Quick links',
      ourServices: 'Our Services',
      newsletter: 'Newsletter',
      newsletterDesc: 'Get our news and digital tips straight to your inbox.',
      emailPlaceholder: 'Your email',
      subscribe: 'Subscribe',
      subscribed: 'Thank you! You are now subscribed.',
      rights: 'All rights reserved.',
      legal: 'Legal notice',
      privacy: 'Privacy policy',
      links: [
        { label: 'Home', href: '#accueil' },
        { label: 'Services', href: '#services' },
        { label: 'Portfolio', href: '#realisations' },
        { label: 'About', href: '#pourquoi-nous' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    chatbot: {
      welcome: "Hello! 👋 I'm **Addy**, AD PULSE's assistant. Do you have a mobile app, website or marketing project in Dakar?",
      suggestions: ['What are your services?', 'Get a quote', 'See our portfolio', 'Contact us'],
      placeholder: 'Write or speak…',
      listening: 'Listening…',
      online: 'Online',
      speaking: 'Speaking…',
      error: 'An error occurred. Please try again.',
      ariaLabel: 'Chat with Addy',
      muteLabel: 'Mute',
      unmuteLabel: 'Unmute',
      micLabel: 'Talk to Addy',
      stopMicLabel: 'Stop listening',
      voiceNotSupported: 'Your browser does not support voice recognition.',
      lang: 'en-US',
    },
    splash: {
      steps: [
        {
          badge: 'Web Development',
          title: 'Sites & apps that convert',
          description: 'We build modern, fast and optimized web experiences that turn visitors into clients.',
        },
        {
          badge: 'Digital Marketing',
          title: 'Visibility & tailored growth',
          description: 'SEO, SEA, social media and email marketing: we drive your digital acquisition for concrete results.',
        },
        {
          badge: 'Design & Brand',
          title: 'A visual identity that stands out',
          description: 'UI/UX, graphic design, photography and video: we build a strong and consistent brand image for your business.',
        },
      ],
      checklist: ['Local expertise Dakar', 'Fast delivery', 'Ongoing support'],
      next: 'Next',
      discover: 'Discover AD PULSE',
      skip: 'Skip intro',
      tagline: 'Digital agency — Dakar',
    },
    data: {
      navLinks: [
        { label: 'Home', href: '#accueil' },
        { label: 'Services', href: '#services' },
        { label: 'Why us', href: '#pourquoi' },
        { label: 'Portfolio', href: '#realisations' },
        { label: 'Process', href: '#processus' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contact', href: '#contact' },
      ],
      reasons: [
        { title: 'Expertise', description: 'A team of passionate and experienced experts.' },
        { title: 'Innovation', description: 'Modern, creative and differentiating solutions.' },
        { title: 'Support', description: 'Personalized follow-up at every stage of your project.' },
        { title: 'Security', description: 'Your data is in safe hands.' },
        { title: 'Performance', description: 'Fast and optimized solutions.' },
        { title: 'On-time delivery', description: 'Projects delivered on time, with no surprises.' },
        { title: 'Modern technologies', description: 'We use the best technologies on the market.' },
        { title: 'Scalable solutions', description: 'Solutions designed to grow with you.' },
      ],
      processSteps: [
        { step: '01', title: 'Analysis', description: 'We study your project and objectives.' },
        { step: '02', title: 'Design', description: 'We define the architecture and strategy.' },
        { step: '03', title: 'UI Design', description: 'We create modern and intuitive interfaces.' },
        { step: '04', title: 'Development', description: 'We build with the best technologies.' },
        { step: '05', title: 'Testing', description: 'We test to ensure quality and performance.' },
        { step: '06', title: 'Deployment', description: 'Secure and controlled production launch.' },
        { step: '07', title: 'Maintenance', description: 'We ensure ongoing monitoring and improvement.' },
      ],
      projectCategories: ['All', 'E-commerce', 'ERP', 'CRM', 'Mobile App', 'Dashboard', 'Institutional', 'SaaS Platform', 'Portfolio'],
      faqs: [
        { q: 'Why choose AD PULSE?', a: 'We combine technical expertise, creativity and personalized support to deliver custom, high-performance and scalable solutions that truly make a difference.' },
        { q: 'How much does a project cost?', a: 'Every project is unique. The budget depends on complexity, features and timelines. We provide a transparent, detailed quote after a free initial analysis of your needs.' },
        { q: 'How long does development take?', a: 'Depending on scope, a project can take from a few weeks to several months. We define a clear schedule with precise milestones from the start.' },
        { q: 'Do you also handle design?', a: 'Yes. Our UI/UX team designs modern, intuitive interfaces aligned with your brand identity, even before the development phase.' },
        { q: 'Do you offer ongoing support?', a: 'Absolutely. We provide maintenance, updates and continuous support after launch to help your solution grow over time.' },
      ],
      testimonials: [
        { name: 'Marc D.', role: 'Director, TechNova', rating: 5, quote: 'AD PULSE turned our idea into a high-performing digital solution. The team is professional and attentive.' },
        { name: 'Sophie L.', role: 'CEO, GreenShop', rating: 5, quote: 'Exceptional support from start to finish. Results beyond our expectations!' },
        { name: 'Julien T.', role: 'Marketing Manager', rating: 5, quote: 'Their SEO and SEA expertise helped us increase our visibility by 200%.' },
        { name: 'Amina K.', role: 'Founder, Bloomly', rating: 5, quote: 'A creative and rigorous team. Our new platform is fast and elegant.' },
        { name: 'David R.', role: 'CTO, FinPulse', rating: 5, quote: 'Solid architecture and clean code. Exactly what our startup needed.' },
      ],
      services: [
        { title: 'Full Stack Web Applications', description: 'Robust and scalable applications from front to back-end.' },
        { title: 'Progressive Web Apps (PWA)', description: 'Installable, fast and offline web experiences.' },
        { title: 'Website Creation', description: 'Elegant showcase sites optimized for conversion.' },
        { title: 'Web Development', description: 'Modern, performant and maintainable custom code.' },
        { title: 'Advanced E-commerce', description: 'High-performance online stores focused on sales.' },
        { title: 'UI/UX Design', description: 'Intuitive interfaces centered on user experience.' },
        { title: 'Mobile Development', description: 'Native and hybrid iOS and Android applications.' },
        { title: 'Custom ERP & CRM', description: 'Management tools tailored to your business processes.' },
        { title: 'Database Architecture', description: 'Reliable, secure and scalable data models.' },
        { title: 'SEO', description: 'Natural search engine optimization for more visibility.' },
        { title: 'SEA', description: 'Profitable and targeted paid advertising campaigns.' },
        { title: 'Community Management', description: 'Engagement and growth of your social communities.' },
        { title: 'Cloud Architecture', description: 'Resilient and automated cloud infrastructures.' },
        { title: 'API Development', description: 'Secure and documented APIs for your integrations.' },
        { title: 'Cybersecurity', description: 'Protection of your data and infrastructures.' },
        { title: 'Data Analytics', description: 'Dashboards and insights to make better decisions.' },
        { title: 'Graphic Design', description: 'Visual identities and impactful creative materials.' },
        { title: 'Brand Management', description: 'Creation and management of a consistent brand image.' },
        { title: 'Communication Strategy', description: 'Clear and effective communication strategies.' },
        { title: 'Email Marketing', description: 'Automated and personalized email campaigns.' },
        { title: 'Digital Advertising', description: 'Multichannel acquisition to boost your growth.' },
        { title: 'Professional Photography', description: 'High-quality product and corporate photos.' },
        { title: 'Video Editing', description: 'Engaging videos to showcase your brand.' },
      ],
    },
  },
} as const

export type Translations = typeof translations.fr

const LanguageContext = createContext<LanguageContextType>({
  lang: 'fr',
  setLang: () => {},
  t: translations.fr,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('fr')

  useEffect(() => {
    const saved = localStorage.getItem('adpulse_lang') as Lang | null
    if (saved === 'fr' || saved === 'en') setLangState(saved)
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('adpulse_lang', l)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
