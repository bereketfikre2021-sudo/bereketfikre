import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Check } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

const LanguageToggle = ({ className = '', ...props }) => {
  const { language, changeLanguage, availableLanguages, isLoading } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languageNames = {
    en: 'English',
    am: 'አማርኛ'
  };

  const languageFlags = {
    en: '🇺🇸',
    am: '🇪🇹'
  };

  const currentLanguage = languageNames[language] || 'English';
  const currentFlag = languageFlags[language] || '🇺🇸';

  return (
    <div className={`relative ${className}`}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-3 rounded-full bg-primary/10 border border-accent/20 hover:border-accent/40 transition-all duration-300 group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        title={`Current language: ${currentLanguage}`}
        {...props}
      >
        {/* Background glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Icon with rotation animation */}
        <motion.div
          className="relative z-10 flex items-center gap-2"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <span className="text-lg">{currentFlag}</span>
          <Globe className="w-4 h-4 text-accent" />
        </motion.div>

        {/* Loading indicator */}
        {isLoading && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-accent/30 border-t-accent"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        )}
      </motion.button>

      {/* Language Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full right-0 mt-2 w-48 bg-primary/95 backdrop-blur-sm border border-accent/20 rounded-xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="p-2">
              <div className="text-xs text-accent/60 px-3 py-2 font-medium">
                Select Language
              </div>
              
              {availableLanguages.map((lang) => (
                <motion.button
                  key={lang}
                  onClick={() => {
                    changeLanguage(lang);
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-3 py-3 text-left hover:bg-accent/10 transition-colors duration-200 rounded-lg group"
                  whileHover={{ x: 4 }}
                  disabled={isLoading}
                >
                  <span className="text-lg">{languageFlags[lang]}</span>
                  <span className="flex-1 text-light font-medium">
                    {languageNames[lang]}
                  </span>
                  {language === lang && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500 }}
                    >
                      <Check className="w-4 h-4 text-accent" />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
            
            {/* Footer */}
            <div className="border-t border-accent/20 p-3">
              <div className="text-xs text-accent/60 text-center">
                More languages coming soon
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageToggle;
