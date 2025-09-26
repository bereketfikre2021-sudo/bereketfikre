import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const ThemeToggle = ({ className = '', ...props }) => {
  const { theme, resolvedTheme, toggleTheme } = useTheme();

  const getIcon = () => {
    if (theme === 'system') return Monitor;
    return resolvedTheme === 'dark' ? Sun : Moon;
  };

  const getTooltip = () => {
    if (theme === 'system') return 'System theme';
    return resolvedTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
  };

  const Icon = getIcon();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative p-3 rounded-full bg-primary/10 border border-accent/20 hover:border-accent/40 transition-all duration-300 group ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={getTooltip()}
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
        className="relative z-10"
        animate={{ rotate: theme === 'system' ? 0 : resolvedTheme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Icon className="w-5 h-5 text-accent" />
      </motion.div>

      {/* Theme indicator dots */}
      <div className="absolute -bottom-1 -right-1 flex gap-1">
        {['light', 'dark', 'system'].map((mode, index) => (
          <motion.div
            key={mode}
            className={`w-1.5 h-1.5 rounded-full ${
              (theme === 'system' && mode === 'system') || 
              (theme !== 'system' && mode === resolvedTheme)
                ? 'bg-accent' 
                : 'bg-accent/30'
            }`}
            animate={{
              scale: (theme === 'system' && mode === 'system') || 
                     (theme !== 'system' && mode === resolvedTheme) ? 1.2 : 1,
            }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </div>

      {/* Tooltip */}
      <motion.div
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-primary/90 text-accent text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap"
        initial={{ opacity: 0, y: 5 }}
        whileHover={{ opacity: 1, y: 0 }}
      >
        {getTooltip()}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary/90"></div>
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
