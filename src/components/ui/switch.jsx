import React from 'react';
import { motion } from 'framer-motion';

const Switch = React.forwardRef(({ className, checked, onCheckedChange, ...props }, ref) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      data-state={checked ? "checked" : "unchecked"}
      className={`peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 ${
        checked ? 'bg-accent' : 'bg-primary-dark'
      } ${className}`}
      onClick={() => onCheckedChange?.(!checked)}
      ref={ref}
      {...props}
    >
      <motion.span
        className="pointer-events-none block h-5 w-5 rounded-full bg-primary shadow-lg ring-0 transition-transform"
        animate={{
          x: checked ? 20 : 0
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      />
    </button>
  );
});

Switch.displayName = "Switch";

export { Switch };
