// Advanced page transitions and physics-based animations
import { motion, AnimatePresence, useSpring, useTransform } from 'framer-motion';

class PageTransitions {
  constructor() {
    this.transitionHistory = [];
    this.currentTransition = null;
    this.transitionQueue = [];
    this.isTransitioning = false;
  }

  // Initialize page transitions
  init() {
    this.setupPageTransitions();
    this.setupPhysicsAnimations();
    this.setupMorphingAnimations();
    this.setupParticleEffects();
  }

  // Setup page transitions
  setupPageTransitions() {
    // Create transition container
    const transitionContainer = document.createElement('div');
    transitionContainer.id = 'page-transition-container';
    transitionContainer.className = 'fixed inset-0 z-50 pointer-events-none';
    document.body.appendChild(transitionContainer);

    // Listen for navigation events
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (link) {
        e.preventDefault();
        this.handlePageTransition(link.getAttribute('href'));
      }
    });
  }

  // Handle page transition
  async handlePageTransition(targetId) {
    if (this.isTransitioning) return;

    this.isTransitioning = true;
    const target = document.querySelector(targetId);
    if (!target) return;

    // Create transition overlay
    const overlay = this.createTransitionOverlay();
    document.body.appendChild(overlay);

    // Animate out
    await this.animateOut(overlay);

    // Scroll to target
    target.scrollIntoView({ behavior: 'smooth' });

    // Animate in
    await this.animateIn(overlay);

    // Cleanup
    overlay.remove();
    this.isTransitioning = false;
  }

  // Create transition overlay
  createTransitionOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 z-50 bg-primary';
    overlay.style.clipPath = 'circle(0% at 50% 50%)';
    return overlay;
  }

  // Animate out
  async animateOut(overlay) {
    return new Promise((resolve) => {
      overlay.style.transition = 'clip-path 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
      overlay.style.clipPath = 'circle(100% at 50% 50%)';
      setTimeout(resolve, 600);
    });
  }

  // Animate in
  async animateIn(overlay) {
    return new Promise((resolve) => {
      overlay.style.clipPath = 'circle(0% at 50% 50%)';
      setTimeout(resolve, 600);
    });
  }

  // Setup physics-based animations
  setupPhysicsAnimations() {
    // Create physics animation utility
    window.physicsAnimation = {
      spring: (from, to, options = {}) => {
        const {
          stiffness = 100,
          damping = 30,
          mass = 1
        } = options;

        return {
          type: 'spring',
          stiffness,
          damping,
          mass
        };
      },
      
      bounce: (from, to, options = {}) => {
        const {
          stiffness = 300,
          damping = 20,
          mass = 1
        } = options;

        return {
          type: 'spring',
          stiffness,
          damping,
          mass
        };
      },
      
      elastic: (from, to, options = {}) => {
        const {
          stiffness = 200,
          damping = 15,
          mass = 1
        } = options;

        return {
          type: 'spring',
          stiffness,
          damping,
          mass
        };
      }
    };
  }

  // Setup morphing animations
  setupMorphingAnimations() {
    // Create morphing utility
    window.morphingAnimation = {
      createMorphingElement: (element, shapes, duration = 1000) => {
        let currentShape = 0;
        
        const morph = () => {
          element.style.clipPath = shapes[currentShape];
          currentShape = (currentShape + 1) % shapes.length;
        };
        
        setInterval(morph, duration);
      },
      
      createLiquidMorph: (element, options = {}) => {
        const {
          intensity = 0.1,
          speed = 1,
          frequency = 0.02
        } = options;

        let time = 0;
        
        const animate = () => {
          time += speed;
          const wave = Math.sin(time * frequency) * intensity;
          const shape = `polygon(${50 + wave}% 0%, ${100 - wave}% 0%, ${100 - wave}% 100%, ${50 + wave}% 100%)`;
          element.style.clipPath = shape;
          requestAnimationFrame(animate);
        };
        
        animate();
      }
    };
  }

  // Setup particle effects
  setupParticleEffects() {
    // Create particle system
    window.particleSystem = {
      createParticles: (container, options = {}) => {
        const {
          count = 50,
          color = '#8AEA92',
          size = 2,
          speed = 1,
          life = 3000
        } = options;

        for (let i = 0; i < count; i++) {
          const particle = document.createElement('div');
          particle.className = 'particle';
          particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: 50%;
            pointer-events: none;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particleFloat ${life}ms linear forwards;
          `;
          
          container.appendChild(particle);
          
          // Remove particle after animation
          setTimeout(() => {
            particle.remove();
          }, life);
        }
      }
    };

    // Add particle animation CSS
    const style = document.createElement('style');
    style.textContent = `
      @keyframes particleFloat {
        0% {
          transform: translateY(0) rotate(0deg);
          opacity: 1;
        }
        100% {
          transform: translateY(-100vh) rotate(360deg);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }
}

// Page transition utility functions
export const getTransitionConfig = (type = 'fade') => {
  const transitions = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.3 }
    },
    slide: {
      initial: { x: '100%' },
      animate: { x: 0 },
      exit: { x: '-100%' },
      transition: { duration: 0.5, ease: 'easeInOut' }
    },
    scale: {
      initial: { scale: 0.8, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: 1.2, opacity: 0 },
      transition: { duration: 0.4 }
    },
    flip: {
      initial: { rotateY: 90, opacity: 0 },
      animate: { rotateY: 0, opacity: 1 },
      exit: { rotateY: -90, opacity: 0 },
      transition: { duration: 0.6 }
    },
    morph: {
      initial: { clipPath: 'circle(0% at 50% 50%)' },
      animate: { clipPath: 'circle(100% at 50% 50%)' },
      exit: { clipPath: 'circle(0% at 50% 50%)' },
      transition: { duration: 0.8 }
    }
  };

  return transitions[type];
};

// Physics-based animation configuration
export const getPhysicsConfig = (type = 'spring', stiffness = 100, damping = 30, mass = 1) => {
  return {
    type: 'spring',
    stiffness,
    damping,
    mass
  };
};

// Morphing animation configuration
export const getMorphingShapes = () => {
  return [
    'circle(20% at 50% 50%)',
    'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
    'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
    'circle(50% at 50% 50%)'
  ];
};

// Particle effect configuration
export const getParticleConfig = (count = 50, color = '#8AEA92', size = 2, speed = 1, life = 3000) => {
  return {
    count,
    color,
    size,
    speed,
    life
  };
};

// Create global instance
const pageTransitions = new PageTransitions();

// Auto-initialize
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    pageTransitions.init();
  });
}

export default pageTransitions;
export { PageTransitions };
