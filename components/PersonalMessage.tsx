'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface PersonalMessageProps {
  onAccept: () => void;
}

export default function PersonalMessage({ onAccept }: PersonalMessageProps) {
  const [showResponse, setShowResponse] = useState(false);
  const [response, setResponse] = useState('');

  const handleResponse = (answer: string) => {
    setResponse(answer);
    setShowResponse(true);
    if (answer === 'yes') {
      setTimeout(() => onAccept(), 1800);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 md:px-24 py-12 sm:py-20" style={{ backgroundColor: '#FAFAFA' }}>
      {!showResponse ? (
        <motion.div
          className="max-w-3xl text-center space-y-10 sm:space-y-16 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-white p-8 sm:p-16 md:p-20"
            style={{ borderLeft: '3px solid #7B8F6E' }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Heart className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-6 sm:mb-10" style={{ color: '#7B8F6E' }} />
            
            <p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed mb-6 sm:mb-10 text-center" style={{ color: '#2C2C2C' }}>
              I couldn&apos;t imagine walking down the aisle without you.
            </p>
            
            <p className="text-sm sm:text-base font-light leading-relaxed mb-6 sm:mb-10" style={{ color: '#2C2C2C' }}>
              Thank you for being a part of my life.
            </p>
            
            <p className="font-script text-4xl sm:text-5xl" style={{ color: '#7B8F6E' }}>
              Say yes?
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center">
            <motion.button
              onClick={() => handleResponse('yes')}
              className="px-12 py-3 font-sans font-light text-sm tracking-ultra uppercase transition-all duration-300"
              style={{ 
                color: '#2C2C2C',
                borderBottom: '2px solid #7B8F6E'
              }}
              whileHover={{ 
                borderBottomWidth: '3px',
                letterSpacing: '0.3em'
              }}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Yes, of course! 💕
            </motion.button>
            
            <motion.button
              onClick={() => handleResponse('maybe')}
              className="px-12 py-3 font-sans font-light text-sm tracking-ultra uppercase transition-all duration-300"
              style={{ 
                color: '#2C2C2C',
                borderBottom: '1px solid #9CA986'
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Let me think... (but probably yes!) 😊
            </motion.button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          className="text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          {response === 'yes' ? (
            <div className="space-y-10">
              <motion.div
                className="text-8xl"
                animate={{ rotate: [0, -5, 5, -5, 5, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 0.8 }}
              >
                🎉
              </motion.div>
              <h2 className="font-script text-6xl md:text-7xl" style={{ color: '#7B8F6E' }}>
                Yay!
              </h2>
              <p className="text-base font-light tracking-wide" style={{ color: '#2C2C2C' }}>
                Get ready for the best wedding ever! 💖
              </p>
            </div>
          ) : (
            <div className="space-y-10">
              <div className="text-8xl">😄</div>
              <h2 className="font-script text-6xl" style={{ color: '#7B8F6E' }}>
                Take your time!
              </h2>
              <p className="text-base font-light tracking-wide" style={{ color: '#2C2C2C' }}>
                I know you&apos;ll say yes eventually! 😊
              </p>
              <motion.button
                onClick={() => setShowResponse(false)}
                className="px-12 py-3 font-sans font-light text-sm tracking-ultra uppercase transition-all duration-300"
                style={{ 
                  color: '#2C2C2C',
                  borderBottom: '1px solid #7B8F6E'
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Actually, YES! 💕
              </motion.button>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}
