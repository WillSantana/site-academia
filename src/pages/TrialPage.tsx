import React from 'react';
import PageHeader from '../components/common/PageHeader';
import { motion } from 'framer-motion';

const TrialPage: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="EXPERIMENTE GRÁTIS" 
        subtitle="Comece sua jornada fitness com 7 dias gratuitos"
        backgroundImage="/images/hero-background.jpg"
      />
      
      <section className="py-20 px-4 md:px-8" style={{ background: '#121212' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6 text-white">
                7 Dias de Experiência Completa
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Experimente tudo o que a AcademiaPRO tem a oferecer sem compromisso. 
                Acesso total às instalações, aulas e serviços por 7 dias.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="text-[#00FF7F] mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Acesso Completo</h3>
                    <p className="text-gray-300">Utilize todas as áreas da academia, incluindo musculação, cardio, piscina e salas de aulas coletivas.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#00FF7F] mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Avaliação Física</h3>
                    <p className="text-gray-300">Inclui avaliação física completa com um de nossos profissionais para definir seus objetivos.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#00FF7F] mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Aulas Coletivas</h3>
                    <p className="text-gray-300">Participe de qualquer aula coletiva disponível no cronograma durante seu período de teste.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#00FF7F] mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Treino Personalizado</h3>
                    <p className="text-gray-300">Receba um treino personalizado baseado em seus objetivos e nível de condicionamento.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#00FF7F] mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Sem Compromisso</h3>
                    <p className="text-gray-300">Sem obrigação de matrícula após o período de teste. Você decide se quer continuar.</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-[#1E1E1E] rounded-xl border border-[#8A2BE2]/30">
                <div className="flex items-center mb-4">
                  <div className="text-[#8A2BE2] mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Importante</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Para iniciar seu período de teste gratuito, é necessário apresentar documento com foto e comprovante de residência. 
                  Recomendamos agendar sua primeira visita para garantir atendimento personalizado.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#1E1E1E] rounded-xl p-8 border border-[#8A2BE2]/30">
                <h3 className="text-2xl font-montserrat font-bold mb-6 text-white text-center">Cadastre-se para o período gratuito</h3>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="fullname" className="block text-sm font-medium text-gray-300 mb-2">Nome completo</label>
                    <input 
                      type="text" 
                      id="fullname" 
                      className="w-full px-4 py-3 rounded-lg bg-[#2A2A2A] border border-[#8A2BE2]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#8A2BE2]"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">E-mail</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-3 rounded-lg bg-[#2A2A2A] border border-[#8A2BE2]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#8A2BE2]"
                        placeholder="seu.email@exemplo.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Telefone</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-3 rounded-lg bg-[#2A2A2A] border border-[#8A2BE2]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#8A2BE2]"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="birthdate" className="block text-sm font-medium text-gray-300 mb-2">Data de nascimento</label>
                    <input 
                      type="date" 
                      id="birthdate" 
                      className="w-full px-4 py-3 rounded-lg bg-[#2A2A2A] border border-[#8A2BE2]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#8A2BE2]"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="goal" className="block text-sm font-medium text-gray-300 mb-2">Objetivo principal</label>
                    <select 
                      id="goal" 
                      className="w-full px-4 py-3 rounded-lg bg-[#2A2A2A] border border-[#8A2BE2]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#8A2BE2]"
                    >
                      <option value="">Selecione seu objetivo</option>
                      <option value="weight-loss">Perda de peso</option>
                      <option value="muscle-gain">Ganho de massa muscular</option>
                      <option value="health">Saúde e bem-estar</option>
                      <option value="performance">Melhora de performance</option>
                      <option value="rehabilitation">Reabilitação</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="unit" className="block text-sm font-medium text-gray-300 mb-2">Unidade de preferência</label>
                    <select 
                      id="unit" 
                      className="w-full px-4 py-3 rounded-lg bg-[#2A2A2A] border border-[#8A2BE2]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#8A2BE2]"
                    >
                      <option value="">Selecione uma unidade</option>
                      <option value="paulista">Unidade Paulista</option>
                      <option value="pinheiros">Unidade Pinheiros</option>
                      <option value="moema">Unidade Moema</option>
                    </select>
                  </div>
                  
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="terms" 
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-[#8A2BE2] focus:ring-[#8A2BE2]" 
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-300">
                      Concordo com os <a href="#" className="text-[#8A2BE2] hover:underline">Termos de Uso</a> e <a href="#" className="text-[#8A2BE2] hover:underline">Política de Privacidade</a>.
                    </label>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full py-3 rounded-lg font-montserrat font-bold text-white transition-all duration-300 hover:scale-105"
                    style={{ 
                      background: 'linear-gradient(45deg, #8A2BE2, #00FF7F)',
                      boxShadow: '0 4px 15px rgba(138, 43, 226, 0.3)'
                    }}
                  >
                    COMEÇAR AGORA
                  </button>
                </form>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-400 text-sm">
                  Já é membro? <a href="#" className="text-[#8A2BE2] hover:underline">Faça login aqui</a>
                </p>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6 text-white text-center">Depoimentos</h2>
            <p className="text-gray-300 mb-12 text-center max-w-3xl mx-auto">
              Veja o que nossos membros dizem sobre sua experiência na AcademiaPRO
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <motion.div 
                  key={item}
                  className="bg-[#1E1E1E] rounded-xl p-6 border border-[#8A2BE2]/30"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: item * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="text-[#FFD700]">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="inline-block">★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 text-center mb-6">
                    "Experimentei os 7 dias grátis e me apaixonei pela estrutura e atendimento. Os professores são muito atenciosos e o ambiente é incrível. Já estou no meu terceiro mês como membro."
                  </p>
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#8A2BE2] flex items-center justify-center text-white font-bold">
                      {item === 1 ? 'RM' : item === 2 ? 'JC' : 'FS'}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-white">
                        {item === 1 ? 'Roberto Mendes' : item === 2 ? 'Juliana Costa' : 'Felipe Santos'}
                      </p>
                      <p className="text-xs text-gray-400">Membro desde {item === 1 ? 'Janeiro' : item === 2 ? 'Março' : 'Fevereiro'} 2025</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 mb-6">
              Ainda tem dúvidas? Entre em contato com nossa equipe
            </p>
            <a 
              href="/contato" 
              className="px-8 py-3 rounded-lg font-montserrat font-medium inline-block text-[#8A2BE2] border border-[#8A2BE2] hover:bg-[#8A2BE2] hover:bg-opacity-10 transition-all"
            >
              FALE CONOSCO
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TrialPage;
