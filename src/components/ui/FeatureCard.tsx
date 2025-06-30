import React from 'react';
import { Card, CardContent } from './card';
import { cn } from '../../lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  variant?: 'default' | 'dark' | 'gradient';
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  variant = 'default',
  className
}) => {
  const variantClasses = {
    default: 'bg-white border-neutral-200 text-neutral-900',
    dark: 'bg-project-primary-dark border-neutral-700 text-white',
    gradient: 'bg-gradient-to-br from-project-blue to-project-green border-none text-white'
  };

  return (
    <Card className={cn(
      'group transition-all duration-300 hover:scale-105 hover:shadow-xl',
      variantClasses[variant],
      className
    )}>
      <CardContent className="p-6 md:p-8 space-y-4">
        <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-project-blue/10 to-project-green/10 group-hover:scale-110 transition-transform duration-300">
          <div className="text-2xl md:text-3xl">
            {icon}
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className={cn(
            'text-h5 md:text-h4 font-semibold',
            variant === 'default' ? 'text-project-blue' : 'text-current'
          )}>
            {title}
          </h3>
          
          <p className={cn(
            'text-body leading-relaxed',
            variant === 'default' ? 'text-neutral-600' : 'text-current opacity-90'
          )}>
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};