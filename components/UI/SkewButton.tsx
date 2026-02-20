import React from 'react';

interface SkewButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const SkewButton: React.FC<SkewButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  type = 'button',
  disabled = false
}) => {
  let bgClass = '';
  let textClass = 'text-white';

  switch (variant) {
    case 'primary':
      bgClass = 'bg-gpb-orange hover:bg-orange-600';
      break;
    case 'secondary':
      bgClass = 'bg-gpb-blue hover:bg-blue-700';
      break;
    case 'outline':
      bgClass = 'bg-transparent border-2 border-gpb-blue hover:bg-gpb-blue/20';
      break;
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group relative inline-block px-8 py-3 transform -skew-x-12 transition-all duration-300 ${bgClass} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <span className={`block transform skew-x-12 font-teko uppercase text-xl tracking-wider font-bold ${textClass}`}>
        {children}
      </span>
      {/* Decorative speed line on hover */}
      {!disabled && (
        <span className="absolute left-0 top-0 h-full w-2 bg-white/20 transform -translate-x-full group-hover:translate-x-[200%] transition-transform duration-500 ease-in-out"></span>
      )}
    </button>
  );
};