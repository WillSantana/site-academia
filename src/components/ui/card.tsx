import React from 'react';

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  className = '',
  onClick,
  hoverEffect = true,
}) => {
  const baseStyles = 'bg-opacity-10 backdrop-blur-md rounded-xl p-6 transition-all duration-300';
  const hoverStyles = hoverEffect 
    ? `hover:transform hover:scale-105 hover:shadow-lg hover:shadow-[#8A2BE2]/20 cursor-pointer` 
    : '';
  
  return (
    <div 
      className={`${baseStyles} ${hoverStyles} ${className}`}
      onClick={onClick}
      style={{ 
        backgroundColor: `#121212`, 
        border: `1px solid #8A2BE230` 
      }}
    >
      {icon && (
        <div className="mb-4 text-[2rem] text-[#8A2BE2]">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-montserrat font-semibold mb-2 text-white">{title}</h3>
      <p className="text-[#E0E0E0] font-roboto">{description}</p>
    </div>
  );
};

export default Card;
