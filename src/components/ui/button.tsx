import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const baseStyles = 'font-montserrat font-extrabold rounded-lg transition-all duration-300 flex items-center justify-center';
  
  const variantStyles = {
    primary: `bg-[#8A2BE2] hover:bg-opacity-90 text-white`,
    secondary: `bg-[#00FF7F] hover:bg-opacity-90 text-[#121212]`,
    tertiary: `bg-[#00BFFF] hover:bg-opacity-90 text-white`,
    outline: `border-2 border-[#8A2BE2] text-[#8A2BE2] hover:bg-[#8A2BE2] hover:bg-opacity-10`,
  };
  
  const sizeStyles = {
    small: 'text-sm py-2 px-4',
    medium: 'text-base py-3 px-6',
    large: 'text-lg py-4 px-8',
  };
  
  const widthStyle = fullWidth ? 'w-full' : '';
  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${disabledStyle} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
export const buttonVariants = {
  primary: 'bg-[#8A2BE2] hover:bg-opacity-90 text-white',
  secondary: 'bg-[#00FF7F] hover:bg-opacity-90 text-[#121212]',
  tertiary: 'bg-[#00BFFF] hover:bg-opacity-90 text-white',
  outline: 'border-2 border-[#8A2BE2] text-[#8A2BE2] hover:bg-[#8A2BE2] hover:bg-opacity-10',
};
