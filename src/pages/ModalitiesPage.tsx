import React from 'react';
import PageHeader from '../components/common/PageHeader';
import { motion } from 'framer-motion';

const ModalitiesPage: React.FC = () => {
  // Dados das modalidades
  const modalities = [
    {
      id: 1,
      name: 'Musculação',
      description: 'Treinamento com pesos livres e máquinas para desenvolvimento muscular, força e resistência. Nosso espaço conta com equipamentos de última geração e instrutores especializados para orientação personalizada.',
      image: '/images/hero-background.jpg',
      benefits: [
        'Aumento de massa muscular',
        'Fortalecimento ósseo',
        'Melhora da postura',
        'Prevenção de lesões',
        'Aceleração do metabolismo'
      ],
      schedule: 'Segunda a Domingo, 6h às 23h'
    },
    {
      id: 2,
      name: 'CrossFit',
      description: 'Treinamento funcional de alta intensidade que combina elementos de levantamento de peso olímpico, ginástica e condicionamento metabólico. Ideal para quem busca desafios e resultados rápidos.',
      image: '/images/hero-background.jpg',
      benefits: [
        'Condicionamento físico completo',
        'Ganho de força e resistência',
        'Melhora da capacidade cardiovascular',
        'Desenvolvimento de habilidades atléticas',
        'Comunidade motivadora'
      ],
      schedule: 'Segunda a Sexta, aulas de 1h (6h, 7h, 8h, 12h, 18h, 19h, 20h)'
    },
    {
      id: 3,
      name: 'Pilates',
      description: 'Método de exercício físico que utiliza o peso do próprio corpo e equipamentos específicos para trabalhar força, flexibilidade e consciência corporal. Excelente para reabilitação e condicionamento.',
      image: '/images/hero-background.jpg',
      benefits: [
        'Fortalecimento do core',
        'Melhora da flexibilidade',
        'Alívio de dores crônicas',
        'Correção postural',
        'Redução do estresse'
      ],
      schedule: 'Segunda a Sexta, aulas de 1h com agendamento prévio'
    },
    {
      id: 4,
      name: 'Spinning',
      description: 'Aulas de ciclismo indoor com música energética e instrutor que guia diferentes intensidades e técnicas. Perfeito para queima calórica e condicionamento cardiovascular.',
      image: '/images/hero-background.jpg',
      benefits: [
        'Alta queima calórica',
        'Fortalecimento de pernas e glúteos',
        'Melhora da resistência cardiovascular',
        'Baixo impacto nas articulações',
        'Ambiente motivador com música'
      ],
      schedule: 'Segunda, Quarta e Sexta, aulas de 45min (7h, 12h, 19h)'
    },
    {
      id: 5,
      name: 'Yoga',
      description: 'Prática que integra posições físicas, técnicas de respiração e meditação para promover equilíbrio entre corpo e mente. Ideal para complementar treinos intensos e gerenciar o estresse.',
      image: '/images/hero-background.jpg',
      benefits: [
        'Aumento da flexibilidade',
        'Redução do estresse e ansiedade',
        'Melhora do equilíbrio e concentração',
        'Fortalecimento muscular suave',
        'Promoção do bem-estar geral'
      ],
      schedule: 'Terça e Quinta, aulas de 1h (7h, 12h, 19h)'
    },
    {
      id: 6,
      name: 'Funcional',
      description: 'Treinamento que utiliza movimentos naturais do corpo para melhorar capacidades físicas como força, agilidade, equilíbrio e coordenação. Adaptável a diferentes níveis de condicionamento.',
      image: '/images/hero-background.jpg',
      benefits: [
        'Melhora da capacidade funcional diária',
        'Trabalho de múltiplos grupos musculares',
        'Prevenção de lesões',
        'Aumento da coordenação motora',
        'Treinos dinâmicos e variados'
      ],
      schedule: 'Segunda a Sexta, aulas de 45min (8h, 12h, 18h, 19h)'
    }
  ];

  return (
    <>
      <PageHeader 
        title="MODALIDADES" 
        subtitle="Conheça as atividades disponíveis em nossa academia"
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
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6 text-white">Nossas Modalidades</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Oferecemos uma variedade de atividades para todos os objetivos e níveis de condicionamento.
              Nossos profissionais altamente qualificados garantem a melhor experiência em cada modalidade.
            </p>
          </motion.div>
          
          <div className="space-y-16">
            {modalities.map((modality, index) => (
              <motion.div 
                key={modality.id}
                className="bg-[#1E1E1E] rounded-xl overflow-hidden border border-[#8A2BE2]/30"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div 
                    className="h-64 md:h-auto bg-cover bg-center"
                    style={{ backgroundImage: `url(${modality.image})` }}
                  ></div>
                  <div className="p-8">
                    <h3 className="text-2xl font-montserrat font-bold mb-4 text-white">{modality.name}</h3>
                    <p className="text-gray-300 mb-6">{modality.description}</p>
                    
                    <h4 className="text-lg font-semibold text-[#8A2BE2] mb-3">Benefícios:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {modality.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-gray-300">
                          <span className="text-[#00FF7F] mr-2">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{modality.schedule}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-montserrat font-bold mb-4 text-white">Quer experimentar nossas modalidades?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Oferecemos aula experimental gratuita em qualquer modalidade. 
              Venha conhecer nossa estrutura e metodologia sem compromisso.
            </p>
            <button 
              className="px-8 py-3 rounded-lg font-montserrat font-bold text-white transition-all duration-300 hover:scale-105"
              style={{ 
                background: 'linear-gradient(45deg, #8A2BE2, #00FF7F)',
                boxShadow: '0 4px 15px rgba(138, 43, 226, 0.3)'
              }}
            >
              AGENDAR AULA EXPERIMENTAL
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ModalitiesPage;
