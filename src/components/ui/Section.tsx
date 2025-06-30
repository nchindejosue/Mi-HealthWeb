import React from 'react';
import { cn } from '../../lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'default' | 'secondary' | 'dark';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  id,
  background = 'default',
  padding = 'lg'
}) => {
  const backgroundClasses = {
    default: 'bg-white',
    secondary: 'bg-neutral-50',
    dark: 'bg-project-primary-dark'
  };

  const paddingClasses = {
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-20',
    xl: 'py-20 md:py-24'
  };

  return (
    <section
      id={id}
      className={cn(
        'w-full relative overflow-hidden',
        backgroundClasses[background],
        paddingClasses[padding],
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};