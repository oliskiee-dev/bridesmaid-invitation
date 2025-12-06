'use client';

import { motion } from 'framer-motion';

interface LandingSectionProps {
  onBegin: () => void;
}

export default function LandingSection({ onBegin }: LandingSectionProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 sm:px-12 md:px-24 py-12 sm:py-16 relative overflow-hidden" style={{ backgroundColor: '#F5EFE7' }}>
      <motion.div
        className="max-w-4xl w-full text-center space-y-12 sm:space-y-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="space-y-8 sm:space-y-12">
          <motion.div
            className="text-6xl sm:text-7xl mb-6"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🌺
          </motion.div>
          
          <motion.h1 
            className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wide px-4"
            style={{ color: '#5D4037' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            May Tanong Ako Sayo...
          </motion.h1>
          
          <div className="space-y-4 sm:space-y-6">
            <motion.h2 
              className="text-base sm:text-xl md:text-2xl font-serif font-light px-4"
              style={{ color: '#3E2723' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Pero may challenge muna tayo! 😉
            </motion.h2>
            
            <motion.div 
              className="flex gap-2 justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <div className="w-8 h-px" style={{ backgroundColor: '#D4AF37' }} />
              <div className="text-2xl" style={{ color: '#D4AF37' }}>✦</div>
              <div className="w-8 h-px" style={{ backgroundColor: '#D4AF37' }} />
            </motion.div>
          </div>
        </div>
        
        <motion.button
          onClick={onBegin}
          className="mt-12 sm:mt-16 px-10 sm:px-16 py-3 sm:py-4 font-serif font-semibold text-sm sm:text-base transition-all duration-300 touch-manipulation relative overflow-hidden"
          style={{ 
            backgroundColor: '#5D4037',
            color: '#F5EFE7',
            border: '2px solid #D4AF37'
          }}
          whileHover={{ 
            scale: 1.05,
            backgroundColor: '#6F4E37'
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          Game! Let's Go! 🚀
        </motion.button>
      </motion.div>
    </div>
  );
}
