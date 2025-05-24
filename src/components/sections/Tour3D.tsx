import React, { useState, useRef, useEffect } from 'react';

interface Tour3DProps {
  title?: string;
  subtitle?: string;
}

const Tour3D: React.FC<Tour3DProps> = ({
  title = "TOUR VIRTUAL",
  subtitle = "Conheça nossa academia sem sair de casa"
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentHotspot, setCurrentHotspot] = useState<string | null>(null);
  
  // Simulação de carregamento do tour 3D
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // Hotspots da academia
  const hotspots = [
    { id: 'reception', name: 'Recepção', description: 'Nossa recepção moderna e acolhedora' },
    { id: 'weights', name: 'Área de Musculação', description: 'Equipamentos de última geração para seu treino de força' },
    { id: 'cardio', name: 'Área de Cardio', description: 'Esteiras, elípticos e bikes com tecnologia avançada' },
    { id: 'functional', name: 'Área Funcional', description: 'Espaço dedicado para treinos funcionais e HIIT' },
    { id: 'classes', name: 'Salas de Aulas', description: 'Ambientes preparados para diversas modalidades de aulas coletivas' },
  ];

  const handleHotspotClick = (id: string) => {
    setCurrentHotspot(id);
  };

  return (
    <section className="py-20 px-4 md:px-8" style={{ background: '#121212' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4 text-white">{title}</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="relative bg-[#1E1E1E] rounded-xl overflow-hidden shadow-xl border border-[#8A2BE2]/30">
          {/* Canvas para Three.js (simulado) */}
          <div className="relative aspect-video w-full">
            {isLoading ? (
              <div className="absolute inset-0 flex items-center justify-center bg-[#1E1E1E]">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#8A2BE2]"></div>
              </div>
            ) : (
              <>
                <canvas 
                  ref={canvasRef} 
                  className="w-full h-full"
                  style={{ background: 'linear-gradient(135deg, #1E1E1E 0%, #2A2A2A 100%)' }}
                />
                
                {/* Simulação de hotspots */}
                <div className="absolute inset-0">
                  <div 
                    className="absolute top-[20%] left-[30%] w-6 h-6 rounded-full bg-[#8A2BE2] cursor-pointer animate-pulse"
                    onClick={() => handleHotspotClick('reception')}
                  />
                  <div 
                    className="absolute top-[40%] left-[60%] w-6 h-6 rounded-full bg-[#8A2BE2] cursor-pointer animate-pulse"
                    onClick={() => handleHotspotClick('weights')}
                  />
                  <div 
                    className="absolute top-[60%] left-[20%] w-6 h-6 rounded-full bg-[#8A2BE2] cursor-pointer animate-pulse"
                    onClick={() => handleHotspotClick('cardio')}
                  />
                  <div 
                    className="absolute top-[30%] left-[80%] w-6 h-6 rounded-full bg-[#8A2BE2] cursor-pointer animate-pulse"
                    onClick={() => handleHotspotClick('functional')}
                  />
                  <div 
                    className="absolute top-[70%] left-[50%] w-6 h-6 rounded-full bg-[#8A2BE2] cursor-pointer animate-pulse"
                    onClick={() => handleHotspotClick('classes')}
                  />
                </div>
                
                {/* Informação do hotspot selecionado */}
                {currentHotspot && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-70 backdrop-blur-sm">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {hotspots.find(h => h.id === currentHotspot)?.name}
                    </h3>
                    <p className="text-gray-300">
                      {hotspots.find(h => h.id === currentHotspot)?.description}
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
          
          {/* Controles */}
          <div className="p-4 bg-[#1A1A1A] border-t border-[#8A2BE2]/30 flex flex-wrap justify-center gap-4">
            {hotspots.map((hotspot) => (
              <button
                key={hotspot.id}
                onClick={() => handleHotspotClick(hotspot.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  currentHotspot === hotspot.id
                    ? 'bg-[#8A2BE2] text-white'
                    : 'bg-[#2A2A2A] text-gray-300 hover:bg-[#3A3A3A]'
                }`}
              >
                {hotspot.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-400 mb-4">Quer conhecer nossa academia pessoalmente?</p>
          <button
            className="px-6 py-3 rounded-lg font-montserrat font-bold text-white transition-all duration-300 hover:scale-105"
            style={{ 
              background: 'linear-gradient(45deg, #8A2BE2, #00FF7F)',
              boxShadow: '0 4px 15px rgba(138, 43, 226, 0.3)'
            }}
          >
            AGENDAR VISITA
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tour3D;
