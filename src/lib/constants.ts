// Constantes para o site da academia

// Cores do tema
export const COLORS = {
  primary: '#8A2BE2', // Roxo Neon
  secondary: '#00FF7F', // Verde Vibrante
  tertiary: '#00BFFF', // Azul Elétrico
  background: '#121212', // Dark Mode
  text: {
    primary: '#FFFFFF', // Branco
    secondary: '#E0E0E0', // Cinza Claro
  },
  gradients: {
    primary: 'linear-gradient(45deg, #8A2BE2, #00FF7F)',
    secondary: 'linear-gradient(45deg, #00BFFF, #8A2BE2)',
    tertiary: 'linear-gradient(45deg, #00FF7F, #00BFFF)',
  }
};

// Rotas do site
export const ROUTES = {
  home: '/',
  about: '/sobre',
  plans: '/planos',
  modalities: '/modalidades',
  tools: '/ferramentas',
  blog: '/blog',
  contact: '/contato',
  dashboard: '/aluno',
};

// Diferenciais da academia
export const DIFFERENTIALS = [
  {
    id: 1,
    title: 'Nutricionista Online',
    description: 'Acompanhamento nutricional personalizado direto pelo nosso app.',
    icon: 'Salad',
  },
  {
    id: 2,
    title: 'App Exclusivo',
    description: 'Acompanhe seu progresso e agende aulas pelo nosso aplicativo.',
    icon: 'Smartphone',
  },
  {
    id: 3,
    title: 'Tecnologia Fitness',
    description: 'Equipamentos com tecnologia de ponta para maximizar seus resultados.',
    icon: 'Dumbbell',
  },
];

// Planos da academia
export const PLANS = [
  {
    id: 1,
    name: 'Básico',
    price: 99.90,
    features: [
      'Acesso à academia',
      'Aulas coletivas',
      'Avaliação física mensal',
    ],
    recommended: false,
  },
  {
    id: 2,
    name: 'Premium',
    price: 149.90,
    features: [
      'Acesso à academia',
      'Aulas coletivas',
      'Avaliação física mensal',
      'Nutricionista online',
      'App exclusivo',
    ],
    recommended: true,
  },
  {
    id: 3,
    name: 'VIP',
    price: 199.90,
    features: [
      'Acesso à academia',
      'Aulas coletivas',
      'Avaliação física semanal',
      'Nutricionista online',
      'App exclusivo',
      'Personal trainer',
      'Acesso a todas as unidades',
    ],
    recommended: false,
  },
];

// Perguntas do quiz
export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: 'Qual seu principal objetivo?',
    options: [
      'Perder peso',
      'Ganhar massa muscular',
      'Melhorar condicionamento',
      'Reduzir estresse',
    ],
  },
  {
    id: 2,
    question: 'Quantas vezes por semana você pretende treinar?',
    options: [
      '1-2 vezes',
      '3-4 vezes',
      '5-6 vezes',
      'Todos os dias',
    ],
  },
  {
    id: 3,
    question: 'Qual sua experiência com exercícios físicos?',
    options: [
      'Iniciante',
      'Intermediário',
      'Avançado',
      'Atleta',
    ],
  },
  {
    id: 4,
    question: 'Qual tipo de treino você prefere?',
    options: [
      'Treinos rápidos e intensos',
      'Treinos longos e moderados',
      'Treinos em grupo',
      'Treinos com personal',
    ],
  },
  {
    id: 5,
    question: 'Quais áreas você gostaria de focar?',
    options: [
      'Corpo inteiro',
      'Parte superior',
      'Parte inferior',
      'Core/abdômen',
    ],
  },
];
