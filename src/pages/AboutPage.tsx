import React from 'react';
import PageHeader from '../components/common/PageHeader';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="SOBRE NÓS" 
        subtitle="Conheça nossa história e missão"
        backgroundImage="/images/hero-background.jpg"
      />
      
      <section className="py-20 px-4 md:px-8" style={{ background: '#121212' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6 text-white">Nossa História</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Fundada em 2015, a AcademiaPRO nasceu da visão de transformar o conceito tradicional de academias no Brasil. 
                  Nossos fundadores, atletas e especialistas em educação física, perceberam a necessidade de um espaço que 
                  combinasse tecnologia de ponta, metodologias científicas e atendimento personalizado.
                </p>
                <p>
                  O que começou como uma pequena academia na zona sul de São Paulo rapidamente se transformou em referência 
                  no mercado fitness. Nosso compromisso com a inovação e resultados nos permitiu expandir para três unidades 
                  em apenas cinco anos.
                </p>
                <p>
                  Em 2020, mesmo diante dos desafios globais, revolucionamos nosso modelo de negócio, integrando tecnologia 
                  e experiência presencial, criando um ecossistema fitness completo que atende nossos alunos onde quer que estejam.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="relative h-[400px] rounded-xl overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: "url('/images/hero-background.jpg')",
                  filter: "brightness(0.7)"
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-sm text-[#8A2BE2] font-semibold">DESDE 2015</span>
                <h3 className="text-2xl font-bold text-white mt-2">Transformando vidas através do fitness</h3>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6 text-white text-center">Nossa Missão</h2>
            <div className="bg-[#1E1E1E] rounded-xl p-8 border border-[#8A2BE2]/30">
              <p className="text-xl text-center text-gray-300">
                Transformar vidas através da atividade física, oferecendo um ambiente inovador, 
                acolhedor e tecnológico onde cada pessoa possa alcançar sua melhor versão.
              </p>
            </div>
          </motion.div>
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-[#1E1E1E] rounded-xl p-8 border border-[#8A2BE2]/30"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-[#00FF7F] text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Valores</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Inovação constante</li>
                <li>• Excelência no atendimento</li>
                <li>• Compromisso com resultados</li>
                <li>• Respeito à individualidade</li>
                <li>• Comunidade e pertencimento</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-[#1E1E1E] rounded-xl p-8 border border-[#8A2BE2]/30"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-[#8A2BE2] text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Diferenciais</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Tecnologia de ponta</li>
                <li>• Profissionais certificados</li>
                <li>• Metodologia exclusiva</li>
                <li>• Acompanhamento digital</li>
                <li>• Ambiente premium</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-[#1E1E1E] rounded-xl p-8 border border-[#8A2BE2]/30"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-[#00BFFF] text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Nossa Equipe</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Educadores físicos especializados</li>
                <li>• Nutricionistas esportivos</li>
                <li>• Fisioterapeutas</li>
                <li>• Especialistas em performance</li>
                <li>• Consultores de bem-estar</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
