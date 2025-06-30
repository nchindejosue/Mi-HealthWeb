import React from 'react';
import { Button } from './ui/button';
import { useLanguage } from '../hooks/useLanguage';

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="ml-2 px-3 py-1 text-sm font-medium border border-slate-300 rounded-lg hover:bg-neutral-gray-100 transition-colors"
    >
      {language === 'en' ? 'FR' : 'EN'}
    </Button>
  );
};