import EcommerceImage from "../assets/portfolio/ecommerce.png";
import AppDelivery from "../assets/portfolio/app-delivery.png";
import Dashboard from "../assets/portfolio/dashboard.png";
import SistemaERP from "../assets/portfolio/sistema-erp.png";
import AppFitness from "../assets/portfolio/app-fitness.png";
import Imobiliaria from "../assets/portfolio/imobiliaria.png";

export const portfolio = [
  {
    id: 1,
    title: "E-commerce Moderno",
    category: "web",
    text: "Plataforma completa de e-commerce com painel administrativo e sistema de pagamentos integrado.",
    image: EcommerceImage,
    techs: ["React", "Node.js", "PostgreSQL", "Stripe"],
    alt: "E-commerce Moderno",
  },
  {
    id: 2,
    title: "App de Delivery",
    category: "mobile",
    text: "Aplicativo mobile para delivery de comida com tracking em tempo real e sistema de avaliações.",
    image: AppDelivery,
    techs: ["React Native", "Firebase", "Maps API"],
    alt: "App de Delivery",
  },
  {
    id: 3,
    title: "Dashboard Analytics",
    category: "web",
    text: "Dashboard interativo para análise de dados com gráficos dinâmicos e relatórios personalizados.",
    image: Dashboard,
    techs: ["React", "D3.js", "Python", "FastAPI"],
    alt: "Dashboard Analytics",
  },
  {
    id: 4,
    title: "Sistema ERP",
    category: "system",
    text: "Sistema completo de gestão empresarial com módulos de vendas, estoque e financeiro.",
    image: SistemaERP,
    techs: ["Vue.js", "Laravel", "MySQL", "Docker"],
    alt: "Sistema ERP",
  },
  {
    id: 5,
    title: "App Fitness Tracker",
    category: "mobile",
    text: "Aplicativo para acompanhamento de exercícios com IA para recomendações personalizadas.",
    image: AppFitness,
    techs: ["Flutter", "TensorFlow", "Cloud Functions"],
    alt: "App Fitness Tracker",
  },
  {
    id: 6,
    title: "Landing Page Imobiliária",
    category: "web",
    text: "Site institucional moderno para imobiliária com tour virtual 360° e sistema de leads.",
    image: Imobiliaria,
    techs: ["Next.js", "Three.js", "Sanity CMS"],
    alt: "Landing Page Imobiliária",
  },
];
