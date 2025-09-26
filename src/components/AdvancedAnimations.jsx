import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useTransform, useMotionValue, useAnimation } from 'framer-motion';

// Magnetic hover effect component
export const MagneticHover = ({ children, strength = 0.3, ...props }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = (e.clientX - centerX) * strength;
    const distanceY = (e.clientY - centerY) * strength;
    
    x.set(distanceX);
    y.set(distanceY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Floating animation component
export const FloatingAnimation = ({ 
  children, 
  intensity = 10,
  speed = 2,
  ...props 
}) => {
  return (
    <motion.div
      animate={{
        y: [0, -intensity, 0],
        rotate: [0, 1, -1, 0]
      }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Glitch effect component
export const GlitchEffect = ({ 
  children, 
  intensity = 0.1,
  frequency = 0.1,
  ...props 
}) => {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < frequency) {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 100);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [frequency]);

  return (
    <motion.div
      style={{
        filter: glitch ? `hue-rotate(${Math.random() * 360}deg) contrast(${1 + intensity})` : 'none',
        transform: glitch ? `translateX(${(Math.random() - 0.5) * intensity * 10}px)` : 'none'
      }}
      transition={{ duration: 0.1 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Typewriter effect component
export const TypewriterEffect = ({ 
  text, 
  speed = 50,
  delay = 0,
  onComplete,
  ...props 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      {...props}
    >
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="inline-block w-0.5 h-5 bg-accent ml-1"
      />
    </motion.span>
  );
};

// Counter animation component
export const CounterAnimation = ({ 
  from = 0, 
  to, 
  duration = 2,
  delay = 0,
  format = (value) => value,
  ...props 
}) => {
  const [count, setCount] = useState(from);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: [1, 1.1, 1],
      transition: { duration: 0.3 }
    });
  }, [count, controls]);

  useEffect(() => {
    const startTime = Date.now();
    const startValue = from;
    const endValue = to;
    const totalDuration = duration * 1000;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / totalDuration, 1);
      
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentValue = startValue + (endValue - startValue) * easeOutCubic;
      
      setCount(Math.round(currentValue));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const timeout = setTimeout(animate, delay * 1000);
    return () => clearTimeout(timeout);
  }, [from, to, duration, delay]);

  return (
    <motion.span
      animate={controls}
      {...props}
    >
      {format(count)}
    </motion.span>
  );
};

// Morphing text component
export const MorphingText = ({ 
  texts = [], 
  duration = 2000,
  ...props 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (texts.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % texts.length);
    }, duration);

    return () => clearInterval(interval);
  }, [texts, duration]);

  return (
    <motion.span
      key={currentIndex}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {texts[currentIndex]}
    </motion.span>
  );
};

// Liquid button component
export const LiquidButton = ({ 
  children, 
  onClick,
  className = '',
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple = {
      id: Date.now(),
      x,
      y,
      size
    };

    setRipples(prev => [...prev, newRipple]);

    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);

    if (onClick) onClick(e);
  };

  return (
    <motion.button
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
      
      {/* Ripple effect */}
      {ripples.map(ripple => (
        <motion.div
          key={ripple.id}
          className="absolute bg-white/30 rounded-full"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 1, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      ))}
      
      {/* Hover effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent/20 to-secondary/20"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

// Particle trail component
export const ParticleTrail = ({ 
  children, 
  particleCount = 20,
  particleColor = '#8AEA92',
  ...props 
}) => {
  const [particles, setParticles] = useState([]);
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newParticle = {
      id: Date.now() + Math.random(),
      x,
      y,
      life: 1
    };

    setParticles(prev => [...prev.slice(-particleCount), newParticle]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => 
        prev.map(particle => ({
          ...particle,
          life: particle.life - 0.02
        })).filter(particle => particle.life > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative"
      {...props}
    >
      {children}
      
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute pointer-events-none"
          style={{
            left: particle.x,
            top: particle.y,
            width: 4,
            height: 4,
            backgroundColor: particleColor,
            borderRadius: '50%'
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ 
            scale: particle.life,
            opacity: particle.life
          }}
          transition={{ duration: 0.1 }}
        />
      ))}
    </div>
  );
};

// 3D tilt effect component
export const Tilt3D = ({ 
  children, 
  intensity = 20,
  ...props 
}) => {
  const ref = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateXValue = ((e.clientY - centerY) / rect.height) * intensity;
    const rotateYValue = ((e.clientX - centerX) / rect.width) * intensity;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        rotateX,
        rotateY
      }}
      transition={{ duration: 0.1 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default {
  MagneticHover,
  FloatingAnimation,
  GlitchEffect,
  TypewriterEffect,
  CounterAnimation,
  MorphingText,
  LiquidButton,
  ParticleTrail,
  Tilt3D
};
