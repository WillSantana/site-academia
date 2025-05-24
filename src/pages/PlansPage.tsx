import React from 'react';
import PageHeader from '../components/common/PageHeader';
import { motion } from 'framer-motion';
import { PLANS } from '../lib/constants';

const PlansPage: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="NOSSOS PLANOS" 
        subtitle="Escolha o plano ideal para seus objetivos"
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
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6 text-white">Planos Detalhados</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Oferecemos planos flexíveis que se adaptam às suas necessidades e objetivos. 
              Todos incluem acesso ao aplicativo exclusivo e suporte da nossa equipe especializada.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PLANS.map((plan, index) => (
              <motion.div 
                key={plan.id} 
                className={`rounded-xl p-8 transition-all duration-500 transform ${
                  plan.recommended ? 'scale-105 md:-translate-y-4' : ''
                }`}
                style={{ 
                  backgroundColor: '#1E1E1E',
                  border: '1px solid rgba(138, 43, 226, 0.3)'
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {plan.recommended && (
                  <div 
                    className="py-1 px-4 rounded-full text-sm font-bold mb-4 inline-block"
                    style={{ 
                      background: 'linear-gradient(45deg, #8A2BE2, #00FF7F)',
                      color: 'white'
                    }}
                  >
                    RECOMENDADO
                  </div>
                )}
                
                <h3 className="text-2xl font-montserrat font-bold mb-2 text-white">{plan.name}</h3>
                
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-montserrat font-bold text-white">
                    R$ {plan.price.toFixed(2).replace('.', ',')}
                  </span>
                  <span className="text-gray-400 ml-2 mb-1">/mês</span>
                </div>
                
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#00FF7F] mr-2">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 rounded-lg font-montserrat font-bold transition-all duration-300 hover:scale-105 ${
                    plan.recommended 
                      ? 'bg-gradient-to-r from-[#8A2BE2] to-[#00FF7F] text-white' 
                      : 'border-2 border-[#8A2BE2] text-[#8A2BE2] hover:bg-[#8A2BE2] hover:bg-opacity-10'
                  }`}
                >
                  ASSINAR AGORA
                </button>
                
                {/* Detalhes adicionais específicos para a página de planos */}
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <h4 className="text-lg font-semibold text-white mb-3">Detalhes adicionais:</h4>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>• Sem taxa de matrícula</li>
                    <li>• Acesso a todas as unidades</li>
                    <li>• Cancelamento flexível</li>
                    <li>• Congelamento disponível</li>
                    <li>• Avaliação física inclusa</li>
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-20 bg-[#1E1E1E] rounded-xl p-8 border border-[#8A2BE2]/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-montserrat font-bold mb-4 text-white">Perguntas Frequentes</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Existe período mínimo de permanência?</h4>
                <p className="text-gray-300">
                  Não exigimos permanência mínima em nenhum dos nossos planos. Você pode cancelar quando quiser, 
                  respeitando apenas o período de aviso prévio de 30 dias.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Posso congelar meu plano?</h4>
                <p className="text-gray-300">
                  Sim, todos os planos permitem congelamento por até 30 dias por ano, sem custo adicional. 
                  Ideal para períodos de viagem ou impossibilidade temporária de frequentar.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Como funciona o acesso a todas as unidades?</h4>
                <p className="text-gray-300">
                  Nos planos Premium e Black, você tem acesso ilimitado a todas as nossas unidades, 
                  podendo treinar em qualquer uma delas sem custo adicional ou necessidade de aviso prévio.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">O que inclui a consultoria nutricional?</h4>
                <p className="text-gray-300">
                  A consultoria nutricional inclui avaliação inicial, plano alimentar personalizado e 
                  acompanhamento mensal com nossos nutricionistas especializados em nutrição esportiva.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 mb-4">Não tem certeza de qual plano escolher?</p>
            <button 
              className="px-8 py-3 rounded-lg font-montserrat font-bold text-white transition-all duration-300 hover:scale-105"
              style={{ 
                background: 'linear-gradient(45deg, #00FF7F, #8A2BE2)',
                boxShadow: '0 4px 15px rgba(138, 43, 226, 0.3)'
              }}
            >
              EXPERIMENTE 7 DIAS GRÁTIS
            </button>
            <p className="text-gray-500 mt-4 text-sm">
              Ou entre em contato com nossa equipe para uma consultoria personalizada
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PlansPage;
