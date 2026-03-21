import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface TooltipProps {
  text: string;
  explanation: string;
}

export default function Tooltip({ text, explanation }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <span 
      className="relative inline-block cursor-help border-b border-dashed border-current transition-colors hover:text-blue-600"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {text}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 w-64 p-3 mt-2 -ml-32 left-1/2 text-sm font-normal text-white bg-slate-800 rounded-lg shadow-xl pointer-events-none text-left leading-relaxed"
            role="tooltip"
          >
            {explanation}
            <div className="absolute top-0 left-1/2 -mt-2 -ml-2 border-4 border-transparent border-b-slate-800"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
