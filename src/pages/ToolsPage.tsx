import React from 'react';
import PageHeader from '../components/common/PageHeader';
import { motion } from 'framer-motion';
import IMCCalculator from '../components/sections/IMCCalculator';

const ToolsPage: React.FC = () => {
  // Dados das ferramentas
  const tools = [
    {
      id: 1,
      name: 'App Exclusivo',
      description: 'Nosso aplicativo permite acompanhar seu progresso, agendar aulas, visualizar treinos personalizados e se conectar com outros membros da comunidade.',
      features: [
        'Acompanhamento de treinos',
        'Métricas de evolução',
        'Agendamento de aulas',
        'Chat com instrutores',
        'Comunidade de membros'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 2,
      name: 'Bioimpedância Avançada',
      description: 'Equipamento de última geração para análise completa da composição corporal, oferecendo dados precisos sobre massa muscular, gordura corporal e metabolismo.',
      features: [
        'Análise de composição corporal',
        'Medição de gordura visceral',
        'Taxa metabólica basal',
        'Idade metabólica',
        'Relatório completo com recomendações'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: 3,
      name: 'Plataforma de Nutrição',
      description: 'Sistema integrado que conecta você diretamente com nossos nutricionistas, permitindo ajustes no plano alimentar, registro de refeições e acompanhamento de progresso.',
      features: [
        'Plano alimentar personalizado',
        'Registro de refeições',
        'Análise de macronutrientes',
        'Sugestões de receitas saudáveis',
        'Consultas online com nutricionistas'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 4,
      name: 'Smartband Integrada',
      description: 'Pulseira inteligente que se conecta ao nosso sistema para monitorar seus treinos em tempo real, frequência cardíaca, calorias queimadas e qualidade do sono.',
      features: [
        'Monitoramento cardíaco',
        'Contagem de passos e calorias',
        'Análise de sono',
        'Notificações de hidratação',
        'Integração com app da academia'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  // Exemplos de atividades em imagens (simulado)
  const activityExamples = [
    {
      id: 1,
      title: 'Treino HIIT',
      description: 'Treino intervalado de alta intensidade para máxima queima calórica',
      image: '/images/hero-background.jpg'
    },
    {
      id: 2,
      title: 'Yoga Flow',
      description: 'Sequência de posturas para flexibilidade e equilíbrio',
      image: '/images/hero-background.jpg'
    },
    {
      id: 3,
      title: 'Treino de Força',
      description: 'Exercícios compostos para ganho de massa muscular',
      image: '/images/hero-background.jpg'
    },
    {
      id: 4,
      title: 'Pilates Reformer',
      description: 'Exercícios no equipamento para fortalecimento do core',
      image: '/images/hero-background.jpg'
    }
  ];

  return (
    <>
      <PageHeader 
        title="FERRAMENTAS" 
        subtitle="Recursos exclusivos para potencializar seus resultados"
        backgroundImage="/images/hero-background.jpg"
      />
      
      <section className="py-20 px-4 md:px-8" style={{ background: '#121212' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6 text-white">Tecnologia a Serviço do seu Progresso</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Disponibilizamos ferramentas avançadas para monitorar seu progresso, 
              otimizar seus treinos e garantir resultados superiores em menos tempo.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {tools.map((tool, index) => (
              <motion.div 
                key={tool.id}
                className="bg-[#1E1E1E] rounded-xl p-8 border border-[#8A2BE2]/30 h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-[#8A2BE2] mb-6">
                  {tool.icon}
                </div>
                <h3 className="text-2xl font-montserrat font-bold mb-4 text-white">{tool.name}</h3>
                <p className="text-gray-300 mb-6">{tool.description}</p>
                
                <h4 className="text-lg font-semibold text-[#00FF7F] mb-3">Funcionalidades:</h4>
                <ul className="space-y-2">
                  {tool.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <span className="text-[#00FF7F] mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6 text-white text-center">Exemplos de Atividades</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-10">
              Conheça algumas das atividades disponíveis em nossa academia, 
              todas com acompanhamento profissional e metodologia exclusiva.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {activityExamples.map((activity, index) => (
                <motion.div 
                  key={activity.id}
                  className="relative rounded-xl overflow-hidden h-80"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${activity.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{activity.title}</h3>
                    <p className="text-gray-300 text-sm">{activity.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Calculadora de IMC integrada */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6 text-white text-center">Calculadora de IMC</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-10">
              Utilize nossa calculadora para descobrir seu Índice de Massa Corporal 
              e entender o que ele significa para sua saúde.
            </p>
            
            <IMCCalculator 
              title="CALCULADORA DE IMC"
              subtitle="Uma ferramenta essencial para acompanhar sua saúde"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ToolsPage;
