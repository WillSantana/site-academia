import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NavbarProps {
  transparent?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ transparent = false }) => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();
  
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || !transparent 
          ? 'bg-[#0A0A0A] shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center h-24 py-2">
          <div className="flex items-center justify-center w-full">
            <Link to="/" className="text-white font-montserrat font-bold text-2xl mr-10">
              ACADEMIA<span className="text-[#8A2BE2]">PRO</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`text-white hover:text-[#8A2BE2] transition-colors ${
                  location.pathname === '/' ? 'text-[#8A2BE2]' : ''
                }`}
              >
                Home
              </Link>
              <Link 
                to="/sobre" 
                className={`text-white hover:text-[#8A2BE2] transition-colors ${
                  location.pathname === '/sobre' ? 'text-[#8A2BE2]' : ''
                }`}
              >
                Sobre
              </Link>
              <Link 
                to="/planos" 
                className={`text-white hover:text-[#8A2BE2] transition-colors ${
                  location.pathname === '/planos' ? 'text-[#8A2BE2]' : ''
                }`}
              >
                Planos
              </Link>
              <Link 
                to="/modalidades" 
                className={`text-white hover:text-[#8A2BE2] transition-colors ${
                  location.pathname === '/modalidades' ? 'text-[#8A2BE2]' : ''
                }`}
              >
                Modalidades
              </Link>
              <Link 
                to="/ferramentas" 
                className={`text-white hover:text-[#8A2BE2] transition-colors ${
                  location.pathname === '/ferramentas' ? 'text-[#8A2BE2]' : ''
                }`}
              >
                Ferramentas
              </Link>
              <Link 
                to="/blog" 
                className={`text-white hover:text-[#8A2BE2] transition-colors ${
                  location.pathname === '/blog' ? 'text-[#8A2BE2]' : ''
                }`}
              >
                Blog
              </Link>
              <Link 
                to="/contato" 
                className={`text-white hover:text-[#8A2BE2] transition-colors ${
                  location.pathname === '/contato' ? 'text-[#8A2BE2]' : ''
                }`}
              >
                Contato
              </Link>
            </div>
            
            <div className="hidden md:block ml-8">
              <Link 
                to="/experimente" 
                className="px-6 py-2 rounded-lg font-montserrat font-bold text-white transition-all duration-300 hover:scale-105"
                style={{ 
                  background: 'linear-gradient(45deg, #8A2BE2, #00FF7F)',
                  boxShadow: '0 4px 15px rgba(138, 43, 226, 0.3)'
                }}
              >
                EXPERIMENTE GRÁTIS
              </Link>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-[#121212] border-t border-gray-800"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`text-white hover:text-[#8A2BE2] transition-colors ${
                  location.pathname === '/' ? 'text-[#8A2BE2]' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/sobre" 
                className={`text-white hover:text-[#8A2BE2] transition-colors ${
                  location.pathname === '/sobre' ? 'text-[#8A2BE2]' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link 
                to="/planos" 
                className={`text-white hover:text-[#8A2BE2] transition-colors ${
                  location.pathname === '/planos' ? 'text-[#8A2BE2]' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Planos
              </Link>
              <Link 
                to="/modalidades" 
                className={`text-white hover:text-[#8A2BE2] transition-colors ${
                  location.pathname === '/modalidades' ? 'text-[#8A2BE2]' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Modalidades
              </Link>
              <Link 
                to="/ferramentas" 
                className={`text-white hover:text-[#8A2BE2] transition-colors ${
                  location.pathname === '/ferramentas' ? 'text-[#8A2BE2]' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Ferramentas
              </Link>
              <Link 
                to="/blog" 
                className={`text-white hover:text-[#8A2BE2] transition-colors ${
                  location.pathname === '/blog' ? 'text-[#8A2BE2]' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/contato" 
                className={`text-white hover:text-[#8A2BE2] transition-colors ${
                  location.pathname === '/contato' ? 'text-[#8A2BE2]' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contato
              </Link>
              
              <Link 
                to="/experimente" 
                className="px-6 py-2 rounded-lg font-montserrat font-bold text-white text-center transition-all duration-300 hover:scale-105"
                style={{ 
                  background: 'linear-gradient(45deg, #8A2BE2, #00FF7F)',
                  boxShadow: '0 4px 15px rgba(138, 43, 226, 0.3)'
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                EXPERIMENTE GRÁTIS
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
