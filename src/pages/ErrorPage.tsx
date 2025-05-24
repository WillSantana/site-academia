import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  const error = useRouteError();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#121212] px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-[#8A2BE2] mb-6">Página não encontrada</h2>
        <p className="text-gray-300 mb-8 max-w-md mx-auto">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <Link 
          to="/" 
          className="px-6 py-3 rounded-lg font-montserrat font-bold text-white transition-all duration-300 hover:scale-105 inline-block"
          style={{ 
            background: 'linear-gradient(45deg, #8A2BE2, #00FF7F)',
            boxShadow: '0 4px 15px rgba(138, 43, 226, 0.3)'
          }}
        >
          VOLTAR PARA HOME
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
