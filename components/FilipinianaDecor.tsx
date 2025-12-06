'use client';

import { motion } from 'framer-motion';

interface FilipinianaDecorProps {
  position?: 'top' | 'bottom' | 'both';
}

export default function FilipinianaDecor({ position = 'both' }: FilipinianaDecorProps) {
  return (
    <>
      {(position === 'top' || position === 'both') && (
        <motion.div
          className="absolute top-0 left-0 right-0 flex justify-center pointer-events-none z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-6xl sm:text-7xl md:text-8xl" style={{ color: '#6F4E37' }}>
            🌺
          </div>
        </motion.div>
      )}
      
      {(position === 'bottom' || position === 'both') && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 flex justify-center pointer-events-none z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex gap-4 text-4xl sm:text-5xl md:text-6xl" style={{ color: '#6F4E37', opacity: 0.3 }}>
            <span>🍃</span>
            <span>🌸</span>
            <span>🍃</span>
          </div>
        </motion.div>
      )}
      
      {/* Corner decorations */}
      <div className="absolute top-4 left-4 text-3xl sm:text-4xl pointer-events-none" style={{ color: '#D4AF37', opacity: 0.4 }}>
        ✦
      </div>
      <div className="absolute top-4 right-4 text-3xl sm:text-4xl pointer-events-none" style={{ color: '#D4AF37', opacity: 0.4 }}>
        ✦
      </div>
      <div className="absolute bottom-4 left-4 text-3xl sm:text-4xl pointer-events-none" style={{ color: '#D4AF37', opacity: 0.4 }}>
        ✦
      </div>
      <div className="absolute bottom-4 right-4 text-3xl sm:text-4xl pointer-events-none" style={{ color: '#D4AF37', opacity: 0.4 }}>
        ✦
      </div>
    </>
  );
}
