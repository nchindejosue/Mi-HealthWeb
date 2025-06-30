import React from 'react';
import { Badge } from './badge';
import { cn } from '../../lib/utils';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  centered = true,
  className
}) => {
  return (
    <div className={cn(
      'flex flex-col gap-4 md:gap-6',
      centered ? 'items-center text-center' : 'items-start text-left',
      className
    )}>
      {badge && (
        <div className="relative">
          <Badge className="gap-3 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200 rounded-full">
            <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-blue-200">
              <div className="w-2 h-2 bg-project-blue rounded-full animate-pulse" />
              <span className="text-xs font-medium text-project-blue">MI-HEALTH</span>
            </div>
            <span className="text-sm text-neutral-600">{badge}</span>
          </Badge>
          
          {/* Decorative gradient overlay */}
          <div className="absolute -top-2 -left-8 w-8 h-12 bg-gradient-to-r from-white via-transparent to-transparent rotate-12 blur-sm opacity-60" />
        </div>
      )}
      
      <div className="space-y-3 md:space-y-4">
        <h2 className={cn(
          'text-h2 md:text-h1 text-project-blue font-bold tracking-tight',
          centered ? 'max-w-4xl' : 'max-w-3xl'
        )}>
          {title}
        </h2>
        
        {subtitle && (
          <p className={cn(
            'text-body-lg md:text-xl text-neutral-700 leading-relaxed',
            centered ? 'max-w-3xl' : 'max-w-2xl'
          )}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};