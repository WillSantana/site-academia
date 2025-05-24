import React, { useState } from 'react';
import { PLANS } from '../../lib/constants';
import Button from '../ui/button';

interface PlansProps {
  title?: string;
  subtitle?: string;
}

const PlansSection: React.FC<PlansProps> = ({
  title = "PLANOS E PREÇOS",
  subtitle = "Escolha o plano ideal para seus objetivos"
}) => {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  
  const handleSelectPlan = (planId: number) => {
    setSelectedPlan(planId);
  };

  return (
    <section className="py-20 px-4 md:px-8" style={{ background: '#121212' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4 text-white">{title}</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLANS.map((plan) => (
            <div 
              key={plan.id} 
              className={`rounded-xl p-8 transition-all duration-500 transform ${
                plan.recommended ? 'scale-105 md:-translate-y-4' : ''
              } ${
                selectedPlan === plan.id ? 'ring-4 ring-[#8A2BE2]' : ''
              }`}
              style={{ 
                backgroundColor: '#1E1E1E',
                border: '1px solid rgba(138, 43, 226, 0.3)'
              }}
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
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#00FF7F] mr-2">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.recommended ? "primary" : "outline"}
                fullWidth
                onClick={() => handleSelectPlan(plan.id)}
              >
                {selectedPlan === plan.id ? 'PLANO SELECIONADO' : 'ASSINAR AGORA'}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">Não tem certeza de qual plano escolher?</p>
          <Button variant="secondary">EXPERIMENTE 7 DIAS GRÁTIS</Button>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
