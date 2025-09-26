import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Accessibility, 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  MousePointer, 
  Keyboard, 
  Settings, 
  Check, 
  X,
  Plus,
  Minus
} from 'lucide-react';

const AccessibilitySettings = ({ isOpen, onClose }) => {
  const [settings, setSettings] = useState({
    reducedMotion: false,
    highContrast: false,
    keyboardNavigation: true,
    fontSize: 'normal',
    screenReader: false,
    focusIndicator: true,
    skipLinks: true,
    ariaLabels: true
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // Load current settings
      loadSettings();
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  const loadSettings = () => {
    const savedSettings = localStorage.getItem('accessibilitySettings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  };

  const saveSettings = (newSettings) => {
    setSettings(newSettings);
    localStorage.setItem('accessibilitySettings', JSON.stringify(newSettings));
    applySettings(newSettings);
  };

  const applySettings = (newSettings) => {
    const root = document.documentElement;
    
    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
      root.style.setProperty('--animation-duration', '0.01ms');
    } else {
      root.classList.remove('reduced-motion');
      root.style.removeProperty('--animation-duration');
    }
    
    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Font size
    const fontSizes = {
      small: '0.875rem',
      normal: '1rem',
      large: '1.125rem',
      xlarge: '1.25rem'
    };
    root.style.setProperty('--base-font-size', fontSizes[newSettings.fontSize]);
    
    // Focus indicator
    if (newSettings.focusIndicator) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  };

  const toggleSetting = (key) => {
    const newSettings = { ...settings, [key]: !settings[key] };
    saveSettings(newSettings);
  };

  const changeFontSize = (size) => {
    const newSettings = { ...settings, fontSize: size };
    saveSettings(newSettings);
  };

  const resetSettings = () => {
    const defaultSettings = {
      reducedMotion: false,
      highContrast: false,
      keyboardNavigation: true,
      fontSize: 'normal',
      screenReader: false,
      focusIndicator: true,
      skipLinks: true,
      ariaLabels: true
    };
    saveSettings(defaultSettings);
  };

  const fontSizeOptions = [
    { value: 'small', label: 'Small', icon: Minus },
    { value: 'normal', label: 'Normal', icon: Type },
    { value: 'large', label: 'Large', icon: Plus },
    { value: 'xlarge', label: 'Extra Large', icon: Plus }
  ];

  const settingOptions = [
    {
      key: 'reducedMotion',
      label: 'Reduce Motion',
      description: 'Minimize animations and transitions',
      icon: EyeOff,
      category: 'Visual'
    },
    {
      key: 'highContrast',
      label: 'High Contrast',
      description: 'Increase color contrast for better visibility',
      icon: Eye,
      category: 'Visual'
    },
    {
      key: 'keyboardNavigation',
      label: 'Keyboard Navigation',
      description: 'Enable enhanced keyboard navigation',
      icon: Keyboard,
      category: 'Navigation'
    },
    {
      key: 'focusIndicator',
      label: 'Focus Indicator',
      description: 'Show clear focus indicators',
      icon: MousePointer,
      category: 'Navigation'
    },
    {
      key: 'skipLinks',
      label: 'Skip Links',
      description: 'Show skip navigation links',
      icon: Accessibility,
      category: 'Navigation'
    },
    {
      key: 'ariaLabels',
      label: 'ARIA Labels',
      description: 'Enhanced screen reader support',
      icon: Volume2,
      category: 'Screen Reader'
    }
  ];

  const groupedSettings = settingOptions.reduce((acc, setting) => {
    if (!acc[setting.category]) {
      acc[setting.category] = [];
    }
    acc[setting.category].push(setting);
    return acc;
  }, {});

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            exit={{ y: 20 }}
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-primary/95 backdrop-blur-sm border border-accent/20 rounded-xl shadow-lg"
          >
            {/* Header */}
            <div className="p-6 border-b border-accent/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                    <Accessibility className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-light">Accessibility Settings</h2>
                    <p className="text-sm text-accent/60">Customize your browsing experience</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-accent/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-accent" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Font Size */}
              <div>
                <h3 className="text-lg font-semibold text-light mb-3">Font Size</h3>
                <div className="grid grid-cols-2 gap-2">
                  {fontSizeOptions.map((option) => {
                    const Icon = option.icon;
                    return (
                      <button
                        key={option.value}
                        onClick={() => changeFontSize(option.value)}
                        className={`flex items-center gap-2 p-3 rounded-lg border transition-colors ${
                          settings.fontSize === option.value
                            ? 'bg-accent/20 border-accent/40 text-accent'
                            : 'bg-primary/30 border-accent/20 text-accent/80 hover:bg-accent/10'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{option.label}</span>
                        {settings.fontSize === option.value && (
                          <Check className="w-4 h-4 ml-auto" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Settings by Category */}
              {Object.entries(groupedSettings).map(([category, settings]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold text-light mb-3">{category}</h3>
                  <div className="space-y-2">
                    {settings.map((setting) => {
                      const Icon = setting.icon;
                      return (
                        <div
                          key={setting.key}
                          className="flex items-center justify-between p-3 bg-primary/30 rounded-lg border border-accent/20"
                        >
                          <div className="flex items-center gap-3">
                            <Icon className="w-5 h-5 text-accent" />
                            <div>
                              <h4 className="text-sm font-medium text-light">{setting.label}</h4>
                              <p className="text-xs text-accent/60">{setting.description}</p>
                            </div>
                          </div>
                          <button
                            onClick={() => toggleSetting(setting.key)}
                            className={`relative w-12 h-6 rounded-full transition-colors ${
                              settings[setting.key]
                                ? 'bg-accent'
                                : 'bg-accent/20'
                            }`}
                          >
                            <div
                              className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                                settings[setting.key] ? 'translate-x-7' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}

              {/* Reset Button */}
              <div className="pt-4 border-t border-accent/20">
                <button
                  onClick={resetSettings}
                  className="w-full p-3 bg-accent/20 text-accent rounded-lg border border-accent/30 hover:bg-accent/30 transition-colors"
                >
                  Reset to Defaults
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AccessibilitySettings;
