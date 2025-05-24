import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import DifferentialsSection from '../components/sections/DifferentialsSection';
import PlansSection from '../components/sections/PlansSection';
import QuizSection from '../components/sections/QuizSection';
import IMCCalculator from '../components/sections/IMCCalculator';
import Tour3D from '../components/sections/Tour3D';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection 
        title="TRANSFORME SEU CORPO, TRANSFORME SUA VIDA" 
        subtitle="A academia mais moderna e completa do Brasil, com tecnologia de ponta e profissionais altamente qualificados."
        ctaText="EXPERIMENTE GRÁTIS"
        backgroundImage="/images/hero-background.jpg"
      />
      
      <DifferentialsSection />
      
      <PlansSection />
      
      <QuizSection />
      
      <IMCCalculator />
      
      <Tour3D />
    </>
  );
};

export default HomePage;
