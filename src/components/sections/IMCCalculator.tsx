import React, { useState } from 'react';

interface IMCCalculatorProps {
  title?: string;
  subtitle?: string;
}

const IMCCalculator: React.FC<IMCCalculatorProps> = ({
  title = "CALCULADORA DE IMC",
  subtitle = "Descubra seu Índice de Massa Corporal e entenda o que ele significa para sua saúde"
}) => {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [imc, setImc] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('');
  const [categoryColor, setCategoryColor] = useState<string>('');

  const calculateIMC = () => {
    if (!height || !weight) return;
    
    const heightInMeters = parseInt(height) / 100;
    const weightInKg = parseInt(weight);
    
    if (heightInMeters <= 0 || weightInKg <= 0) return;
    
    const calculatedIMC = weightInKg / (heightInMeters * heightInMeters);
    setImc(calculatedIMC);
    
    // Definir categoria
    if (calculatedIMC < 18.5) {
      setCategory('Abaixo do peso');
      setCategoryColor('#00BFFF'); // Azul
    } else if (calculatedIMC < 25) {
      setCategory('Peso normal');
      setCategoryColor('#00FF7F'); // Verde
    } else if (calculatedIMC < 30) {
      setCategory('Sobrepeso');
      setCategoryColor('#FFD700'); // Amarelo
    } else if (calculatedIMC < 35) {
      setCategory('Obesidade Grau I');
      setCategoryColor('#FFA500'); // Laranja
    } else if (calculatedIMC < 40) {
      setCategory('Obesidade Grau II');
      setCategoryColor('#FF4500'); // Laranja escuro
    } else {
      setCategory('Obesidade Grau III');
      setCategoryColor('#FF0000'); // Vermelho
    }
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setHeight(value);
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setWeight(value);
  };

  return (
    <section className="py-20 px-4 md:px-8" style={{ background: '#121212' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4 text-white">{title}</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="bg-[#1E1E1E] rounded-xl p-8 shadow-lg border border-[#8A2BE2]/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="mb-6">
                <label htmlFor="height" className="block text-gray-300 mb-2">Altura (cm)</label>
                <input
                  type="text"
                  id="height"
                  value={height}
                  onChange={handleHeightChange}
                  placeholder="Ex: 170"
                  className="w-full px-4 py-3 rounded-lg bg-[#2A2A2A] text-white border border-gray-700 focus:border-[#8A2BE2] focus:outline-none focus:ring-2 focus:ring-[#8A2BE2]/50 transition-all"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="weight" className="block text-gray-300 mb-2">Peso (kg)</label>
                <input
                  type="text"
                  id="weight"
                  value={weight}
                  onChange={handleWeightChange}
                  placeholder="Ex: 70"
                  className="w-full px-4 py-3 rounded-lg bg-[#2A2A2A] text-white border border-gray-700 focus:border-[#8A2BE2] focus:outline-none focus:ring-2 focus:ring-[#8A2BE2]/50 transition-all"
                />
              </div>
              
              <button
                onClick={calculateIMC}
                className="w-full py-3 rounded-lg font-montserrat font-bold text-white transition-all duration-300 hover:scale-105"
                style={{ 
                  background: 'linear-gradient(45deg, #8A2BE2, #00FF7F)',
                  boxShadow: '0 4px 15px rgba(138, 43, 226, 0.3)'
                }}
              >
                CALCULAR
              </button>
            </div>
            
            <div className="flex flex-col justify-center items-center">
              {imc !== null ? (
                <>
                  <div className="text-center mb-6">
                    <p className="text-gray-400 mb-2">Seu IMC é:</p>
                    <div className="text-5xl font-montserrat font-bold mb-2" style={{ color: categoryColor }}>
                      {imc.toFixed(1)}
                    </div>
                    <p className="text-xl font-semibold" style={{ color: categoryColor }}>{category}</p>
                  </div>
                  
                  <div className="w-full bg-[#2A2A2A] h-6 rounded-full overflow-hidden">
                    <div
                      className="h-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${Math.min(100, (imc / 40) * 100)}%`,
                        background: `linear-gradient(90deg, #00BFFF, #00FF7F, #FFD700, #FFA500, #FF4500, #FF0000)`,
                      }}
                    />
                  </div>
                  
                  <div className="w-full flex justify-between mt-2 text-xs text-gray-400">
                    <span>16</span>
                    <span>18.5</span>
                    <span>25</span>
                    <span>30</span>
                    <span>35</span>
                    <span>40</span>
                  </div>
                </>
              ) : (
                <div className="text-center text-gray-400">
                  <p>Preencha os campos e clique em calcular para ver seu IMC</p>
                </div>
              )}
            </div>
          </div>
          
          {imc !== null && (
            <div className="mt-8 p-4 rounded-lg bg-[#2A2A2A] text-gray-300">
              <h4 className="font-semibold mb-2">Recomendações:</h4>
              <p>
                {category === 'Abaixo do peso' && 'Considere consultar um nutricionista para desenvolver um plano alimentar que ajude a ganhar peso de forma saudável.'}
                {category === 'Peso normal' && 'Continue mantendo hábitos saudáveis com alimentação balanceada e exercícios regulares.'}
                {category === 'Sobrepeso' && 'Pequenos ajustes na alimentação e aumento da atividade física podem ajudar a alcançar um peso mais saudável.'}
                {category === 'Obesidade Grau I' && 'Recomendamos consultar um profissional de saúde para desenvolver um plano personalizado de emagrecimento.'}
                {category === 'Obesidade Grau II' && 'É importante buscar orientação médica para um acompanhamento adequado do seu peso e saúde geral.'}
                {category === 'Obesidade Grau III' && 'Procure assistência médica para avaliação completa e desenvolvimento de um plano de tratamento adequado.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default IMCCalculator;
