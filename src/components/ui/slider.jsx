import React from 'react';
import { motion } from 'framer-motion';

const Slider = React.forwardRef(({ className, value, onValueChange, min = 0, max = 100, step = 1, ...props }, ref) => {
  const handleChange = (e) => {
    const newValue = parseFloat(e.target.value);
    onValueChange?.([newValue]);
  };

  const percentage = ((value[0] - min) / (max - min)) * 100;

  return (
    <div className="relative w-full">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value[0]}
        onChange={handleChange}
        className="sr-only"
        ref={ref}
        {...props}
      />
      <div className="relative h-2 w-full rounded-full bg-primary-dark">
        <motion.div
          className="absolute h-2 rounded-full bg-accent"
          style={{ width: `${percentage}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.2 }}
        />
        <motion.div
          className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-accent shadow-md cursor-pointer"
          style={{ left: `calc(${percentage}% - 8px)` }}
          initial={{ left: 0 }}
          animate={{ left: `calc(${percentage}% - 8px)` }}
          transition={{ duration: 0.2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        />
      </div>
    </div>
  );
});

Slider.displayName = "Slider";

export { Slider };
