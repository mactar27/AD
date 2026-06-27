import {
  Layers,
  Smartphone,
  Globe,
  Code2,
  ShoppingCart,
  Palette,
  Database,
  Server,
  Search,
  Megaphone,
  Users,
  Cloud,
  Plug,
  ShieldCheck,
  BarChart3,
  Brush,
  ImageIcon,
  MessageSquare,
  Mail,
  Target,
  Camera,
  Video,
  Award,
  Lightbulb,
  HeartHandshake,
  Gauge,
  Clock,
  Cpu,
  Rocket,
  Search as SearchIcon,
  PencilRuler,
  MonitorSmartphone,
  TestTube2,
  CloudUpload,
  Wrench,
  type LucideIcon,
} from 'lucide-react'

export const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Services', href: '#services' },
  { label: 'Pourquoi nous', href: '#pourquoi' },
  { label: 'Réalisations', href: '#realisations' },
  { label: 'Processus', href: '#processus' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: 50, suffix: '+', label: 'Projets réalisés' },
  { value: 30, suffix: '+', label: 'Clients satisfaits' },
  { value: 15, suffix: '+', label: 'Expertises' },
  { value: 100, suffix: '%', label: 'Solutions sur mesure' },
]

export type Service = {
  icon: LucideIcon
  title: string
  description: string
}

export const services: Service[] = [
  { icon: Layers, title: 'Applications Web Full Stack', description: 'Des applications robustes et évolutives du front au back-end.' },
  { icon: Smartphone, title: 'Progressive Web Apps (PWA)', description: 'Des expériences web installables, rapides et hors-ligne.' },
  { icon: Globe, title: 'Création de Sites Web', description: 'Sites vitrines élégants et optimisés pour la conversion.' },
  { icon: Code2, title: 'Développement Web', description: 'Code moderne, performant et maintenable sur mesure.' },
  { icon: ShoppingCart, title: 'E-commerce Avancé', description: 'Boutiques en ligne performantes et orientées ventes.' },
  { icon: Palette, title: 'Design UI/UX', description: 'Interfaces intuitives centrées sur l’expérience utilisateur.' },
  { icon: MonitorSmartphone, title: 'Développement Mobile', description: 'Applications iOS et Android natives et hybrides.' },
  { icon: Server, title: 'ERP & CRM sur mesure', description: 'Outils de gestion adaptés à vos processus métier.' },
  { icon: Database, title: 'Architecture de Bases de Données', description: 'Modèles de données fiables, sécurisés et scalables.' },
  { icon: Search, title: 'SEO', description: 'Optimisation du référencement naturel pour plus de visibilité.' },
  { icon: Target, title: 'SEA', description: 'Campagnes publicitaires payantes rentables et ciblées.' },
  { icon: Users, title: 'Community Management', description: 'Animation et croissance de vos communautés sociales.' },
  { icon: Cloud, title: 'Architecture Cloud', description: 'Infrastructures cloud résilientes et automatisées.' },
  { icon: Plug, title: 'Développement d’API', description: 'APIs sécurisées et documentées pour vos intégrations.' },
  { icon: ShieldCheck, title: 'Cybersécurité', description: 'Protection de vos données et de vos infrastructures.' },
  { icon: BarChart3, title: 'Analyse de Données', description: 'Tableaux de bord et insights pour décider mieux.' },
  { icon: Brush, title: 'Graphisme', description: 'Identités visuelles et supports créatifs impactants.' },
  { icon: ImageIcon, title: 'Gestion d’Image', description: 'Création et gestion d’une image de marque cohérente.' },
  { icon: MessageSquare, title: 'Communication Strategy', description: 'Stratégies de communication claires et efficaces.' },
  { icon: Mail, title: 'Email Marketing', description: 'Campagnes email automatisées et personnalisées.' },
  { icon: Megaphone, title: 'Publicité Digitale', description: 'Acquisition multicanale pour booster votre croissance.' },
  { icon: Camera, title: 'Photographie Professionnelle', description: 'Photos produits et corporate de haute qualité.' },
  { icon: Video, title: 'Montage Vidéo', description: 'Vidéos engageantes pour valoriser votre marque.' },
]

export type Reason = {
  icon: LucideIcon
  title: string
  description: string
}

export const reasons: Reason[] = [
  { icon: Award, title: 'Expertise', description: 'Une équipe d’experts passionnés et expérimentés.' },
  { icon: Lightbulb, title: 'Innovation', description: 'Des solutions modernes, créatives et différenciantes.' },
  { icon: HeartHandshake, title: 'Accompagnement', description: 'Un suivi personnalisé à chaque étape du projet.' },
  { icon: ShieldCheck, title: 'Sécurité', description: 'Vos données sont entre de bonnes mains.' },
  { icon: Gauge, title: 'Performance', description: 'Des solutions rapides et optimisées.' },
  { icon: Clock, title: 'Respect des délais', description: 'Des projets livrés dans les temps, sans surprise.' },
  { icon: Cpu, title: 'Technologies modernes', description: 'Nous utilisons les meilleures technologies du marché.' },
  { icon: Rocket, title: 'Solutions évolutives', description: 'Des solutions pensées pour grandir avec vous.' },
]

export const techGroups = [
  { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Angular', 'Vue', 'Flutter'] },
  { title: 'Backend', items: ['Node.js', 'Express', 'Spring Boot', 'Laravel', 'PHP', 'Python'] },
  { title: 'Bases de données', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase'] },
  { title: 'Cloud & DevOps', items: ['AWS', 'Google Cloud', 'Docker', 'Vercel', 'GitHub'] },
]

export const processSteps: { icon: LucideIcon; step: string; title: string; description: string }[] = [
  { icon: SearchIcon, step: '01', title: 'Analyse', description: 'Nous étudions votre projet et vos objectifs.' },
  { icon: PencilRuler, step: '02', title: 'Conception', description: 'Nous définissons l’architecture et la stratégie.' },
  { icon: Palette, step: '03', title: 'Design', description: 'Nous créons des interfaces modernes et intuitives.' },
  { icon: Code2, step: '04', title: 'Développement', description: 'Nous développons avec les meilleures technologies.' },
  { icon: TestTube2, step: '05', title: 'Tests', description: 'Nous testons pour garantir qualité et performance.' },
  { icon: CloudUpload, step: '06', title: 'Déploiement', description: 'Mise en production sécurisée et maîtrisée.' },
  { icon: Wrench, step: '07', title: 'Maintenance', description: 'Nous assurons le suivi et l’amélioration continue.' },
]

export const projectCategories = [
  'Tous',
  'Site E-commerce',
  'ERP',
  'CRM',
  'Application Mobile',
  'Dashboard',
  'Site Institutionnel',
  'Plateforme SaaS',
  'Portfolio',
]

export type Project = {
  title: string
  category: string
  tag: string
  image: string
}

export const projects: Project[] = [
  { title: 'Fashion Store', category: 'Site E-commerce', tag: 'E-commerce', image: '/projects/fashion-store.png' },
  { title: 'Smart ERP', category: 'ERP', tag: 'ERP', image: '/projects/smart-erp.png' },
  { title: 'TaskFlow', category: 'Application Mobile', tag: 'Mobile', image: '/projects/taskflow.png' },
  { title: 'Analytics Pro', category: 'Dashboard', tag: 'Dashboard', image: '/projects/analytics-pro.png' },
  { title: 'CloudBox', category: 'Plateforme SaaS', tag: 'SaaS', image: '/projects/cloudbox.png' },
  { title: 'CityGov', category: 'Site Institutionnel', tag: 'Institutionnel', image: '/projects/citygov.png' },
  { title: 'RelateCRM', category: 'CRM', tag: 'CRM', image: '/projects/relatecrm.png' },
  { title: 'Studio Folio', category: 'Portfolio', tag: 'Portfolio', image: '/projects/studio-folio.png' },
]

export type Testimonial = {
  name: string
  role: string
  rating: number
  quote: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  { name: 'Marc D.', role: 'Directeur, TechNova', rating: 5, quote: 'AD PULSE a transformé notre idée en une solution digitale performante. L’équipe est professionnelle et à l’écoute.', avatar: '/avatars/marc.png' },
  { name: 'Sophie L.', role: 'CEO, GreenShop', rating: 5, quote: 'Un accompagnement exceptionnel du début à la fin. Résultats au-delà de nos attentes !', avatar: '/avatars/sophie.png' },
  { name: 'Julien T.', role: 'Responsable Marketing', rating: 5, quote: 'Leur expertise en SEO et SEA nous a permis d’augmenter notre visibilité de 200%.', avatar: '/avatars/julien.png' },
  { name: 'Amina K.', role: 'Fondatrice, Bloomly', rating: 5, quote: 'Une équipe créative et rigoureuse. Notre nouvelle plateforme est rapide et élégante.', avatar: '/avatars/amina.png' },
  { name: 'David R.', role: 'CTO, FinPulse', rating: 5, quote: 'Architecture solide et code propre. Exactement ce dont notre startup avait besoin.', avatar: '/avatars/david.png' },
]

export const faqs = [
  { q: 'Pourquoi choisir AD PULSE ?', a: 'Nous combinons expertise technique, créativité et accompagnement personnalisé pour livrer des solutions sur mesure, performantes et évolutives qui font réellement la différence.' },
  { q: 'Combien coûte un projet ?', a: 'Chaque projet est unique. Le budget dépend de la complexité, des fonctionnalités et des délais. Nous établissons un devis transparent et détaillé après une première analyse gratuite de vos besoins.' },
  { q: 'Combien de temps prend un développement ?', a: 'Selon la portée, un projet peut durer de quelques semaines à plusieurs mois. Nous définissons ensemble un planning clair avec des jalons précis dès le démarrage.' },
  { q: 'Faites-vous aussi le design ?', a: 'Oui. Notre équipe UI/UX conçoit des interfaces modernes, intuitives et alignées sur votre identité de marque, avant même la phase de développement.' },
  { q: 'Proposez-vous un accompagnement ?', a: 'Absolument. Nous assurons la maintenance, les évolutions et un support continu après le lancement pour faire grandir votre solution dans la durée.' },
]

export const contactInfo = {
  address: 'Rte des Maristes, Dakar, Sénégal',
  phone: '+221 77 351 91 28',
  email: 'contact@adpulse.com',
  whatsapp: '+221 77 351 91 28',
}

export const company = {
  name: 'AD PULSE',
  address: contactInfo.address,
  phone: contactInfo.phone,
  email: contactInfo.email,
}
