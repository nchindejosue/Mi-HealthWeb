import React from 'react';

interface ScrollToSectionProps {
  targetId: string;
  children: React.ReactNode;
  className?: string;
}

export const ScrollToSection: React.FC<ScrollToSectionProps> = ({ 
  targetId, 
  children, 
  className = "" 
}) => {
  const scrollToSection = () => {
    const element = document.getElementById(targetId);
    if (element) {
      const headerHeight = 120; // Account for fixed header
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <button 
      onClick={scrollToSection}
      className={`cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};