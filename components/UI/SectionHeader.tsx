import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, align = 'left' }) => {
  const alignClass = align === 'center' ? 'text-center items-center' : align === 'right' ? 'text-right items-end' : 'text-left items-start';
  
  return (
    <div className={`flex flex-col mb-12 ${alignClass}`}>
      {subtitle && (
        <span className="text-gpb-orange font-satoshi font-bold tracking-widest uppercase text-sm mb-2">
          {subtitle}
        </span>
      )}
      <h2 className="text-5xl md:text-7xl font-teko font-bold uppercase tracking-tight leading-none text-black dark:text-white relative inline-block transition-colors duration-300">
        {title}
        <div className={`absolute -bottom-2 ${align === 'center' ? 'left-1/2 -translate-x-1/2' : align === 'right' ? 'right-0' : 'left-0'} w-24 h-1 bg-gpb-blue transform -skew-x-12`}></div>
      </h2>
    </div>
  );
};