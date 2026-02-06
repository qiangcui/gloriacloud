import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { translations, type Lang } from '../constants/translations';

type TranslationsType = typeof translations.en;

const LanguageContext = createContext<{
  language: Lang;
  setLanguage: (lang: Lang) => void;
  t: TranslationsType;
} | null>(null);

const STORAGE_KEY = 'gloriacloud-lang';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'en';
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored && (stored === 'en' || stored === 'ko' || stored === 'zh')) return stored;
    return 'en';
  });

  const setLanguage = useCallback((lang: Lang) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language === 'zh' ? 'zh-Hans' : language === 'ko' ? 'ko' : 'en';
  }, [language]);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
