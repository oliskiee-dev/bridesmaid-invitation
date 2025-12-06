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
    <div className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 md:px-24 py-12 sm:py-20 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5EFE7] via-[#E8DCC4] to-[#F5EFE7]"></div>
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235D4037' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {showConfetti && <Confetti />}
      
      {!revealed ? (
        <motion.div
          className="text-center space-y-12 sm:space-y-16 px-4 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.p
            className="text-lg sm:text-xl font-serif font-semibold"
            style={{ color: '#3E2723' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Okay, eto na yung totoo... 😏
          </motion.p>

          <motion.button
            onClick={handleReveal}
            className="px-8 sm:px-16 py-3 sm:py-4 font-serif font-bold text-sm sm:text-base transition-all duration-300 inline-flex items-center gap-2 sm:gap-3 touch-manipulation"
            style={{ 
              backgroundColor: '#5D4037',
              color: '#F5EFE7',
              border: '2px solid #D4AF37'
            }}
            whileHover={{ scale: 1.05, backgroundColor: '#6F4E37' }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Gift className="w-4 h-4 sm:w-5 sm:h-5" />
            Buksan Mo Na! 🎁
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          className="max-w-3xl w-full relative z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="textured-bg filipiniana-border p-12 sm:p-16 md:p-20 text-center relative rounded-2xl shadow-2xl"
            style={{ backgroundColor: '#FFFFFF' }}
            initial={{ rotateY: 90 }}
            animate={{ rotateY: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute top-4 right-4 text-3xl" style={{ color: '#D4AF37' }}>✦</div>
            <div className="absolute bottom-4 left-4 text-3xl" style={{ color: '#D4AF37' }}>✦</div>
            
            <motion.div
              className="text-7xl mb-12"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              💐
            </motion.div>

            <motion.h1
              className="font-script text-4xl sm:text-5xl md:text-6xl mb-6"
              style={{ color: '#5D4037' }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Gusto kita maging
            </motion.h1>
            
            <div className="flex gap-2 items-center justify-center mb-6">
              <div className="w-12 h-px" style={{ backgroundColor: '#D4AF37' }} />
              <div className="text-xl" style={{ color: '#D4AF37' }}>✦</div>
              <div className="w-12 h-px" style={{ backgroundColor: '#D4AF37' }} />
            </div>
            
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-8"
              style={{ color: '#A0522D' }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              BRIDESMAID KOOOO! 💕
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
    color: ['#D4AF37', '#A0522D', '#E8DCC4'][Math.floor(Math.random() * 3)],
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
