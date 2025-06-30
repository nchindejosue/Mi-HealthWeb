import React from 'react';
import { Button } from './ui/button';
import { useLanguage } from '../hooks/useLanguage';
import { Globe } from 'lucide-react';

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  // Debug logging
  console.log('LanguageToggle - Current language:', language);

  const handleToggle = () => {
    console.log('LanguageToggle - Toggle clicked, current language:', language);
    toggleLanguage();
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleToggle}
      className="flex items-center gap-2 px-3 py-2 text-sm font-medium border border-neutral-300 rounded-lg hover:bg-neutral-100 transition-colors focus-ring"
      aria-label="Toggle language"
    >
      <Globe className="w-4 h-4" />
      <span className="font-semibold">
        {language === 'en' ? 'FR' : 'EN'}
      </span>
    </Button>
  );
};