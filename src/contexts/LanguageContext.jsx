import { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  
  // List of supported languages with flags
  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'tl', name: 'Tagalog', flag: '🇵🇭' },
    { code: 'ceb', name: 'Cebuano', flag: '🇵🇭' },
  ];

  // Change language handler
  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setCurrentLanguage(code);
  };

  // Sync state with i18n instance language
  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language]);

  // Context value
  const value = {
    currentLanguage,
    languages,
    changeLanguage,
    getCurrentLanguageInfo: () => languages.find(lang => lang.code === currentLanguage) || languages[0]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
