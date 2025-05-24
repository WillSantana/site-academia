import React from 'react';
import { DIFFERENTIALS } from '../../lib/constants';
import Card from '../ui/card';

interface DifferentialsProps {
  title?: string;
  subtitle?: string;
}

const DifferentialsSection: React.FC<DifferentialsProps> = ({
  title = "NOSSOS DIFERENCIAIS",
  subtitle = "Conheça o que torna nossa academia única"
}) => {
  // Função para renderizar ícones (em um projeto real, usaríamos uma biblioteca como Lucide ou React-Icons)
  const renderIcon = (iconName: string) => {
    // Simulação de ícones - em um projeto real, importaríamos os ícones adequados
    return <div className="icon-placeholder">{iconName}</div>;
  };

  return (
    <section className="py-20 px-4 md:px-8" style={{ background: '#121212' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4 text-white">{title}</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DIFFERENTIALS.map((differential) => (
            <Card
              key={differential.id}
              title={differential.title}
              description={differential.description}
              icon={renderIcon(differential.icon)}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
