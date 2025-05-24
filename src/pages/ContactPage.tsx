import React from 'react';
import PageHeader from '../components/common/PageHeader';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="CONTATO" 
        subtitle="Estamos aqui para ajudar você"
        backgroundImage="/images/hero-background.jpg"
      />
      
      <section className="py-20 px-4 md:px-8" style={{ background: '#121212' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6 text-white">Entre em Contato</h2>
              <p className="text-gray-300 mb-8">
                Estamos sempre disponíveis para ajudar com suas dúvidas, sugestões ou para agendar uma visita. 
                Preencha o formulário ao lado ou utilize um dos canais de contato abaixo.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="text-[#8A2BE2] mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Endereço</h3>
                    <p className="text-gray-300">Av. Paulista, 1000 - Bela Vista</p>
                    <p className="text-gray-300">São Paulo - SP, 01310-100</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#8A2BE2] mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Telefone</h3>
                    <p className="text-gray-300">(11) 3456-7890</p>
                    <p className="text-gray-300">(11) 98765-4321 (WhatsApp)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#8A2BE2] mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">E-mail</h3>
                    <p className="text-gray-300">contato@academiapro.com.br</p>
                    <p className="text-gray-300">suporte@academiapro.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#8A2BE2] mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Horário de Funcionamento</h3>
                    <p className="text-gray-300">Segunda a Sexta: 6h às 23h</p>
                    <p className="text-gray-300">Sábados: 8h às 20h</p>
                    <p className="text-gray-300">Domingos e Feriados: 8h às 14h</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Siga-nos nas redes sociais</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-[#1E1E1E] flex items-center justify-center text-[#8A2BE2] hover:bg-[#8A2BE2] hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#1E1E1E] flex items-center justify-center text-[#8A2BE2] hover:bg-[#8A2BE2] hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#1E1E1E] flex items-center justify-center text-[#8A2BE2] hover:bg-[#8A2BE2] hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#1E1E1E] flex items-center justify-center text-[#8A2BE2] hover:bg-[#8A2BE2] hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#1E1E1E] rounded-xl p-8 border border-[#8A2BE2]/30">
                <h3 className="text-2xl font-montserrat font-bold mb-6 text-white">Envie sua mensagem</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nome completo</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-3 rounded-lg bg-[#2A2A2A] border border-[#8A2BE2]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#8A2BE2]"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">E-mail</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-3 rounded-lg bg-[#2A2A2A] border border-[#8A2BE2]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#8A2BE2]"
                        placeholder="seu.email@exemplo.com"
                      />
                    </div>
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
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Assunto</label>
                    <select 
                      id="subject" 
                      className="w-full px-4 py-3 rounded-lg bg-[#2A2A2A] border border-[#8A2BE2]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#8A2BE2]"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="info">Informações sobre planos</option>
                      <option value="trial">Aula experimental</option>
                      <option value="support">Suporte ao cliente</option>
                      <option value="partnership">Parcerias</option>
                      <option value="other">Outro assunto</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Mensagem</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="w-full px-4 py-3 rounded-lg bg-[#2A2A2A] border border-[#8A2BE2]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#8A2BE2]"
                      placeholder="Digite sua mensagem aqui..."
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="privacy" 
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-[#8A2BE2] focus:ring-[#8A2BE2]" 
                    />
                    <label htmlFor="privacy" className="ml-2 block text-sm text-gray-300">
                      Concordo com a <a href="#" className="text-[#8A2BE2] hover:underline">Política de Privacidade</a> e autorizo o uso dos meus dados para contato.
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
                    ENVIAR MENSAGEM
                  </button>
                </form>
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
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6 text-white text-center">Nossa Localização</h2>
            <p className="text-gray-300 mb-8 text-center max-w-3xl mx-auto">
              Estamos localizados em uma região central, com fácil acesso por transporte público e estacionamento próprio.
            </p>
            
            <div className="rounded-xl overflow-hidden h-96 border border-[#8A2BE2]/30">
              {/* Aqui seria inserido um iframe com o Google Maps */}
              <div className="w-full h-full bg-[#1E1E1E] flex items-center justify-center">
                <p className="text-gray-400 text-center px-4">
                  [Mapa da localização da academia seria exibido aqui]<br />
                  Av. Paulista, 1000 - Bela Vista, São Paulo - SP
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
