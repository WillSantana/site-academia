import React from 'react';
import PageHeader from '../components/common/PageHeader';
import { motion } from 'framer-motion';

const BlogPage: React.FC = () => {
  // Dados dos artigos do blog
  const blogPosts = [
    {
      id: 1,
      title: 'Como a atividade física regular transforma seu corpo',
      excerpt: 'Descubra as mudanças fisiológicas que acontecem quando você se exercita regularmente e como isso impacta sua saúde a longo prazo.',
      date: '18 Mai 2025',
      author: 'Dra. Camila Oliveira',
      authorRole: 'Fisiologista do Exercício',
      image: '/images/hero-background.jpg',
      category: 'Saúde',
      readTime: '8 min'
    },
    {
      id: 2,
      title: 'Nutrição e treino: a combinação perfeita para resultados',
      excerpt: 'Entenda como a alimentação adequada potencializa seus resultados na academia e quais nutrientes são essenciais para cada objetivo.',
      date: '12 Mai 2025',
      author: 'Rafael Mendes',
      authorRole: 'Nutricionista Esportivo',
      image: '/images/hero-background.jpg',
      category: 'Nutrição',
      readTime: '6 min'
    },
    {
      id: 3,
      title: 'Treino de força para mulheres: desmistificando mitos',
      excerpt: 'Por que o treinamento de força é fundamental para mulheres e como ele não causa o "efeito masculinizante" que muitas temem.',
      date: '05 Mai 2025',
      author: 'Juliana Costa',
      authorRole: 'Personal Trainer',
      image: '/images/hero-background.jpg',
      category: 'Treinamento',
      readTime: '7 min'
    },
    {
      id: 4,
      title: 'Recuperação muscular: tão importante quanto o treino',
      excerpt: 'A ciência por trás da recuperação muscular e estratégias eficientes para otimizar seu descanso e potencializar resultados.',
      date: '28 Abr 2025',
      author: 'Dr. Marcos Silva',
      authorRole: 'Fisioterapeuta Esportivo',
      image: '/images/hero-background.jpg',
      category: 'Recuperação',
      readTime: '5 min'
    },
    {
      id: 5,
      title: 'Exercícios funcionais e sua aplicação no dia a dia',
      excerpt: 'Como o treinamento funcional melhora sua capacidade de realizar atividades cotidianas e previne lesões comuns.',
      date: '20 Abr 2025',
      author: 'Fernanda Lima',
      authorRole: 'Especialista em Treinamento Funcional',
      image: '/images/hero-background.jpg',
      category: 'Funcional',
      readTime: '6 min'
    },
    {
      id: 6,
      title: 'O impacto do exercício na saúde mental',
      excerpt: 'Estudos recentes sobre como a atividade física regular pode reduzir ansiedade, estresse e sintomas depressivos.',
      date: '15 Abr 2025',
      author: 'Dra. Patrícia Campos',
      authorRole: 'Psicóloga Esportiva',
      image: '/images/hero-background.jpg',
      category: 'Bem-estar',
      readTime: '9 min'
    }
  ];

  // Categorias para filtro
  const categories = [
    'Todos', 'Saúde', 'Nutrição', 'Treinamento', 'Recuperação', 'Funcional', 'Bem-estar'
  ];

  return (
    <>
      <PageHeader 
        title="BLOG" 
        subtitle="Artigos e dicas sobre fitness, saúde e bem-estar"
        backgroundImage="/images/hero-background.jpg"
      />
      
      <section className="py-20 px-4 md:px-8" style={{ background: '#121212' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {categories.map((category, index) => (
                <button 
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    index === 0 
                      ? 'bg-gradient-to-r from-[#8A2BE2] to-[#00FF7F] text-white' 
                      : 'bg-[#1E1E1E] text-gray-300 hover:bg-[#2A2A2A]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="relative">
              <input 
                type="text" 
                placeholder="Buscar artigos..." 
                className="w-full md:w-96 mx-auto block px-4 py-3 rounded-lg bg-[#1E1E1E] border border-[#8A2BE2]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#8A2BE2]"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article 
                key={post.id}
                className="bg-[#1E1E1E] rounded-xl overflow-hidden border border-[#8A2BE2]/30 h-full flex flex-col"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="relative h-48">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#8A2BE2] text-white">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime} de leitura</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 flex-grow">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center mt-auto">
                    <div className="w-10 h-10 rounded-full bg-[#8A2BE2] flex items-center justify-center text-white font-bold">
                      {post.author.split(' ').map(name => name[0]).join('')}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-white">{post.author}</p>
                      <p className="text-xs text-gray-400">{post.authorRole}</p>
                    </div>
                  </div>
                </div>
                
                <div className="px-6 pb-6">
                  <button className="w-full py-2 rounded-lg border border-[#8A2BE2] text-[#8A2BE2] font-medium hover:bg-[#8A2BE2] hover:bg-opacity-10 transition-all">
                    Ler artigo completo
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
          
          <motion.div 
            className="mt-16 flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <button className="px-8 py-3 rounded-lg font-montserrat font-medium text-white bg-[#1E1E1E] border border-[#8A2BE2]/30 hover:bg-[#2A2A2A] transition-all">
              Carregar mais artigos
            </button>
          </motion.div>
          
          <motion.div 
            className="mt-20 bg-[#1E1E1E] rounded-xl p-8 border border-[#8A2BE2]/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-montserrat font-bold mb-4 text-white">Inscreva-se na nossa newsletter</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Receba artigos exclusivos, dicas de treino e nutrição diretamente no seu e-mail. 
                Prometemos não enviar spam!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail" 
                  className="flex-grow px-4 py-3 rounded-lg bg-[#2A2A2A] border border-[#8A2BE2]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#8A2BE2]"
                />
                <button 
                  className="px-6 py-3 rounded-lg font-montserrat font-bold text-white transition-all duration-300 hover:scale-105"
                  style={{ 
                    background: 'linear-gradient(45deg, #8A2BE2, #00FF7F)',
                    boxShadow: '0 4px 15px rgba(138, 43, 226, 0.3)'
                  }}
                >
                  INSCREVER
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
