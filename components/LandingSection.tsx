'use client';

import { motion } from 'framer-motion';

interface LandingSectionProps {
  onBegin: () => void;
}

export default function LandingSection({ onBegin }: LandingSectionProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 sm:px-12 md:px-24 py-12 sm:py-16" style={{ backgroundColor: '#FAFAFA' }}>
      <motion.div
        className="max-w-4xl w-full text-center space-y-12 sm:space-y-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="space-y-8 sm:space-y-12">
          <motion.h1 
            className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wide px-4"
            style={{ color: '#7B8F6E' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            A Special Invitation
          </motion.h1>
          
          <div className="space-y-4 sm:space-y-6">
            <motion.h2 
              className="text-base sm:text-xl md:text-2xl font-sans font-light tracking-ultra uppercase px-4"
              style={{ color: '#2C2C2C' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Just for You
            </motion.h2>
            
            <motion.div 
              className="w-24 h-px mx-auto"
              style={{ backgroundColor: '#9CA986' }}
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            />
          </div>
        </div>
        
        <motion.button
          onClick={onBegin}
          className="mt-12 sm:mt-16 px-10 sm:px-16 py-3 sm:py-4 font-sans font-light text-xs sm:text-sm tracking-ultra uppercase transition-all duration-300 touch-manipulation"
          style={{ 
            color: '#2C2C2C',
            borderBottom: '1px solid #7B8F6E'
          }}
          whileHover={{ 
            borderBottomWidth: '2px',
            letterSpacing: '0.3em'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          Begin
        </motion.button>
      </motion.div>
    </div>
  );
}
