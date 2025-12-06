'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';

interface BigQuestionProps {
  onReveal: () => void;
}

export default function BigQuestion({ onReveal }: BigQuestionProps) {
  const [revealed, setRevealed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleReveal = () => {
    setRevealed(true);
    setTimeout(() => {
      setShowConfetti(true);
      setTimeout(() => onReveal(), 2500);
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 md:px-24 py-12 sm:py-20" style={{ backgroundColor: '#FAFAFA' }}>
      {showConfetti && <Confetti />}
      
      {!revealed ? (
        <motion.div
          className="text-center space-y-12 sm:space-y-16 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.p
            className="text-base sm:text-lg font-light tracking-wide"
            style={{ color: '#2C2C2C' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Now comes the real reason you&apos;re here...
          </motion.p>

          <motion.button
            onClick={handleReveal}
            className="px-8 sm:px-16 py-3 sm:py-4 font-sans font-light text-xs sm:text-sm tracking-ultra uppercase transition-all duration-300 inline-flex items-center gap-2 sm:gap-3 touch-manipulation"
            style={{ 
              color: '#2C2C2C',
              borderBottom: '1px solid #7B8F6E'
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Gift className="w-4 h-4 sm:w-5 sm:h-5" />
            Reveal the Question
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          className="max-w-3xl w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="bg-white p-16 md:p-20 text-center"
            style={{ borderLeft: '3px solid #7B8F6E' }}
            initial={{ rotateY: 90 }}
            animate={{ rotateY: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="text-7xl mb-12"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              💐
            </motion.div>

            <motion.h1
              className="font-script text-5xl md:text-6xl mb-6"
              style={{ color: '#7B8F6E' }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Will you be my
            </motion.h1>
            
            <motion.h1
              className="text-3xl md:text-4xl font-light tracking-ultra uppercase mb-8"
              style={{ color: '#2C2C2C' }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              Bridesmaid?
            </motion.h1>

            <motion.div
              className="mt-6 text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              ✨
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

function Confetti() {
  const confettiPieces = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 0.3,
    color: ['#7B8F6E', '#9CA986', '#B5C4A1'][Math.floor(Math.random() * 3)],
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {confettiPieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute w-2.5 h-2.5 rounded-full"
          style={{
            left: `${piece.left}%`,
            backgroundColor: piece.color,
          }}
          initial={{ y: -20, opacity: 1, rotate: 0 }}
          animate={{
            y: '100vh',
            opacity: 0,
            rotate: 360,
          }}
          transition={{
            duration: 2.5,
            delay: piece.delay,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
