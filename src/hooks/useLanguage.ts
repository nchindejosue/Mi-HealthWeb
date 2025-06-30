import { useState, useEffect } from 'react';

export type Language = 'en' | 'fr';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    console.log('useLanguage - Loaded from localStorage:', savedLanguage);
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fr')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'fr' : 'en';
    console.log('useLanguage - Toggling from', language, 'to', newLanguage);
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  return { language, toggleLanguage };
};