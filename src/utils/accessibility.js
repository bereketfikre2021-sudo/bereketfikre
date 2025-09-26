// Accessibility utilities for improved user experience
class AccessibilityManager {
  constructor() {
    this.focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    this.skipLinks = [];
    this.ariaLiveRegions = new Map();
    this.keyboardNavigation = true;
    this.reducedMotion = false;
    this.highContrast = false;
    this.fontSize = 'normal';
  }

  // Initialize accessibility features
  init() {
    this.detectUserPreferences();
    this.setupSkipLinks();
    this.setupAriaLiveRegions();
    this.setupKeyboardNavigation();
    this.setupFocusManagement();
    this.setupScreenReaderOptimizations();
    this.setupColorContrast();
    this.setupFontScaling();
    this.setupMotionPreferences();
  }

  // Detect user preferences from system and browser
  detectUserPreferences() {
    // Reduced motion preference
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // High contrast preference
    this.highContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    // Color scheme preference
    const colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    
    // Font size preference (from localStorage or system)
    this.fontSize = localStorage.getItem('fontSize') || 'normal';
    
    // Apply preferences
    this.applyPreferences();
  }

  // Apply accessibility preferences
  applyPreferences() {
    const root = document.documentElement;
    
    // Reduced motion
    if (this.reducedMotion) {
      root.style.setProperty('--animation-duration', '0.01ms');
      root.style.setProperty('--animation-iteration-count', '1');
      root.classList.add('reduced-motion');
    }
    
    // High contrast
    if (this.highContrast) {
      root.classList.add('high-contrast');
    }
    
    // Font size
    this.setFontSize(this.fontSize);
  }

  // Setup skip links for keyboard navigation
  setupSkipLinks() {
    const skipLinks = [
      { href: '#main', text: 'Skip to main content' },
      { href: '#navigation', text: 'Skip to navigation' },
      { href: '#footer', text: 'Skip to footer' }
    ];

    skipLinks.forEach(link => {
      const skipLink = document.createElement('a');
      skipLink.href = link.href;
      skipLink.textContent = link.text;
      skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-primary px-4 py-2 rounded-md z-50';
      skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.href);
        if (target) {
          target.focus();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
      document.body.insertBefore(skipLink, document.body.firstChild);
    });
  }

  // Setup ARIA live regions for dynamic content
  setupAriaLiveRegions() {
    const regions = [
      { id: 'status', polite: true },
      { id: 'alert', polite: false },
      { id: 'log', polite: true }
    ];

    regions.forEach(region => {
      const liveRegion = document.createElement('div');
      liveRegion.id = region.id;
      liveRegion.setAttribute('aria-live', region.polite ? 'polite' : 'assertive');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      document.body.appendChild(liveRegion);
      this.ariaLiveRegions.set(region.id, liveRegion);
    });
  }

  // Announce content to screen readers
  announce(message, region = 'status', priority = 'polite') {
    const liveRegion = this.ariaLiveRegions.get(region);
    if (liveRegion) {
      liveRegion.textContent = message;
      // Clear after announcement
      setTimeout(() => {
        liveRegion.textContent = '';
      }, 1000);
    }
  }

  // Setup keyboard navigation
  setupKeyboardNavigation() {
    // Trap focus in modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        this.handleTabNavigation(e);
      }
      
      if (e.key === 'Escape') {
        this.handleEscapeKey(e);
      }
      
      if (e.key === 'Enter' || e.key === ' ') {
        this.handleActivation(e);
      }
    });

    // Arrow key navigation for custom components
    document.addEventListener('keydown', (e) => {
      if (e.key.startsWith('Arrow')) {
        this.handleArrowNavigation(e);
      }
    });
  }

  // Handle tab navigation
  handleTabNavigation(e) {
    const activeElement = document.activeElement;
    const modal = activeElement.closest('[role="dialog"]');
    
    if (modal) {
      const focusableElements = modal.querySelectorAll(this.focusableElements);
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      
      if (e.shiftKey) {
        if (activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  }

  // Handle escape key
  handleEscapeKey(e) {
    const modal = document.querySelector('[role="dialog"][aria-modal="true"]');
    if (modal) {
      const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]');
      if (closeButton) {
        closeButton.click();
      }
    }
  }

  // Handle activation keys
  handleActivation(e) {
    const target = e.target;
    
    // Handle custom buttons
    if (target.getAttribute('role') === 'button' && !target.disabled) {
      e.preventDefault();
      target.click();
    }
    
    // Handle custom links
    if (target.getAttribute('role') === 'link') {
      e.preventDefault();
      const href = target.getAttribute('data-href');
      if (href) {
        window.location.href = href;
      }
    }
  }

  // Handle arrow key navigation
  handleArrowNavigation(e) {
    const target = e.target;
    const container = target.closest('[role="menu"], [role="tablist"], [role="listbox"]');
    
    if (container) {
      const items = Array.from(container.querySelectorAll('[role="menuitem"], [role="tab"], [role="option"]'));
      const currentIndex = items.indexOf(target);
      
      if (currentIndex !== -1) {
        let nextIndex;
        
        switch (e.key) {
          case 'ArrowDown':
            nextIndex = (currentIndex + 1) % items.length;
            break;
          case 'ArrowUp':
            nextIndex = (currentIndex - 1 + items.length) % items.length;
            break;
          case 'ArrowRight':
            nextIndex = (currentIndex + 1) % items.length;
            break;
          case 'ArrowLeft':
            nextIndex = (currentIndex - 1 + items.length) % items.length;
            break;
        }
        
        if (nextIndex !== undefined) {
          e.preventDefault();
          items[nextIndex].focus();
        }
      }
    }
  }

  // Setup focus management
  setupFocusManagement() {
    // Focus visible indicator
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });

    // Focus management for dynamic content
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            this.enhanceFocusableElements(node);
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  // Enhance focusable elements
  enhanceFocusableElements(element) {
    const focusableElements = element.querySelectorAll(this.focusableElements);
    
    focusableElements.forEach(el => {
      // Add focus indicators
      if (!el.hasAttribute('tabindex')) {
        el.setAttribute('tabindex', '0');
      }
      
      // Add ARIA labels if missing
      if (!el.getAttribute('aria-label') && !el.getAttribute('aria-labelledby')) {
        const text = el.textContent?.trim() || el.getAttribute('title');
        if (text) {
          el.setAttribute('aria-label', text);
        }
      }
      
      // Add role for custom elements
      if (el.tagName === 'DIV' && el.onclick) {
        el.setAttribute('role', 'button');
      }
    });
  }

  // Setup screen reader optimizations
  setupScreenReaderOptimizations() {
    // Add landmark roles
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
    }

    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('role')) {
      nav.setAttribute('role', 'navigation');
    }

    const header = document.querySelector('header');
    if (header && !header.getAttribute('role')) {
      header.setAttribute('role', 'banner');
    }

    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
    }

    // Add heading hierarchy
    this.fixHeadingHierarchy();
    
    // Add alt text to images
    this.enhanceImages();
    
    // Add form labels
    this.enhanceForms();
  }

  // Fix heading hierarchy
  fixHeadingHierarchy() {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let currentLevel = 0;
    
    headings.forEach(heading => {
      const level = parseInt(heading.tagName.charAt(1));
      
      if (level > currentLevel + 1) {
        heading.setAttribute('aria-level', currentLevel + 1);
      }
      
      currentLevel = level;
    });
  }

  // Enhance images
  enhanceImages() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
      if (!img.getAttribute('alt')) {
        const src = img.getAttribute('src');
        const filename = src ? src.split('/').pop().split('.')[0] : 'image';
        img.setAttribute('alt', `Image: ${filename}`);
      }
      
      if (img.getAttribute('role') === 'presentation') {
        img.setAttribute('alt', '');
      }
    });
  }

  // Enhance forms
  enhanceForms() {
    const inputs = document.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
      if (!input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
        const label = document.querySelector(`label[for="${input.id}"]`);
        if (label) {
          input.setAttribute('aria-labelledby', label.id || `label-${input.id}`);
        }
      }
      
      // Add error handling
      if (input.hasAttribute('required')) {
        input.setAttribute('aria-required', 'true');
      }
    });
  }

  // Setup color contrast
  setupColorContrast() {
    if (this.highContrast) {
      document.documentElement.classList.add('high-contrast');
    }
  }

  // Setup font scaling
  setupFontScaling() {
    this.setFontSize(this.fontSize);
  }

  // Set font size
  setFontSize(size) {
    const root = document.documentElement;
    const sizes = {
      'small': '0.875rem',
      'normal': '1rem',
      'large': '1.125rem',
      'xlarge': '1.25rem'
    };
    
    root.style.setProperty('--base-font-size', sizes[size] || sizes.normal);
    this.fontSize = size;
    localStorage.setItem('fontSize', size);
  }

  // Setup motion preferences
  setupMotionPreferences() {
    if (this.reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    }
  }

  // Toggle accessibility features
  toggleFeature(feature) {
    switch (feature) {
      case 'reducedMotion':
        this.reducedMotion = !this.reducedMotion;
        this.applyPreferences();
        break;
      case 'highContrast':
        this.highContrast = !this.highContrast;
        this.applyPreferences();
        break;
      case 'keyboardNavigation':
        this.keyboardNavigation = !this.keyboardNavigation;
        break;
    }
  }

  // Get accessibility status
  getStatus() {
    return {
      reducedMotion: this.reducedMotion,
      highContrast: this.highContrast,
      keyboardNavigation: this.keyboardNavigation,
      fontSize: this.fontSize,
      ariaLiveRegions: this.ariaLiveRegions.size
    };
  }
}

// Create global instance
const accessibilityManager = new AccessibilityManager();

// Auto-initialize
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    accessibilityManager.init();
  });
}

export default accessibilityManager;
export { AccessibilityManager };
