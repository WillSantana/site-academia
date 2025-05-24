import React from 'react';
import { COLORS } from '../../lib/constants';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  onCtaClick?: () => void;
  backgroundVideo?: string;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText,
  onCtaClick,
  backgroundVideo,
  backgroundImage,
}) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video or Image */}
      <div className="absolute inset-0 w-full h-full">
        {backgroundVideo ? (
          <video
            autoPlay
            muted
            loop
            className="object-cover w-full h-full"
          >
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : backgroundImage ? (
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        ) : (
          <div 
            className="w-full h-full"
            style={{ background: COLORS.gradients.primary }}
          />
        )}
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8 max-w-6xl mx-auto">
        <h1 
          className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold mb-4 text-white"
          style={{ 
            textShadow: `0 0 20px ${COLORS.primary}`,
            animation: 'fadeInUp 1s ease-out'
          }}
        >
          {title}
        </h1>
        <p 
          className="text-xl md:text-2xl font-roboto mb-8 text-gray-200 max-w-3xl"
          style={{ animation: 'fadeInUp 1s ease-out 0.3s both' }}
        >
          {subtitle}
        </p>
        <button
          onClick={onCtaClick}
          className="px-8 py-4 text-lg font-montserrat font-extrabold rounded-lg transition-all duration-300 transform hover:scale-105"
          style={{ 
            background: COLORS.gradients.secondary,
            color: 'white',
            boxShadow: `0 0 20px ${COLORS.primary}50`,
            animation: 'fadeInUp 1s ease-out 0.6s both'
          }}
        >
          {ctaText}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
