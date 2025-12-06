'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flower2, Shirt, PartyPopper } from 'lucide-react';

interface RoleQuestProps {
  onComplete: () => void;
}

export default function RoleQuest({ onComplete }: RoleQuestProps) {
  const [stage, setStage] = useState(0);
  const [selectedDress, setSelectedDress] = useState<number | null>(null);
  const [selectedFlower, setSelectedFlower] = useState<number | null>(null);
  const [poppedBalloons, setPoppedBalloons] = useState<number[]>([]);
  
  const dresses = ['👗', '💃', '👰'];
  const flowers = ['🌸', '🌹', '💐'];
  const balloons = [
    { id: 1, word: 'Pag-ibig', color: '#5D4037' },
    { id: 2, word: 'Tawanan', color: '#6F4E37' },
    { id: 3, word: 'Suporta', color: '#A0522D' },
  ];

  const handleDressSelect = (index: number) => {
    setSelectedDress(index);
    setTimeout(() => setStage(1), 400);
  };

  const handleFlowerSelect = (index: number) => {
    setSelectedFlower(index);
    setTimeout(() => setStage(2), 400);
  };

  const handleBalloonPop = (id: number) => {
    if (!poppedBalloons.includes(id)) {
      setPoppedBalloons([...poppedBalloons, id]);
      if (poppedBalloons.length + 1 === balloons.length) {
        setTimeout(() => setStage(3), 800);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-12 md:px-24 py-20 relative" style={{ backgroundColor: '#F5EFE7' }}>
      <div className="absolute top-8 text-5xl" style={{ color: '#D4AF37', opacity: 0.3 }}>✦</div>
      
      <motion.h2
        className="font-script text-5xl sm:text-6xl md:text-7xl mb-6 text-center"
        style={{ color: '#5D4037' }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Mini Games! 🎮
      </motion.h2>
      <div className="flex gap-2 items-center mb-6">
        <div className="w-12 h-px" style={{ backgroundColor: '#D4AF37' }} />
        <div className="text-xl" style={{ color: '#D4AF37' }}>✦</div>
        <div className="w-12 h-px" style={{ backgroundColor: '#D4AF37' }} />
      </div>
      <p className="text-sm sm:text-base font-serif font-semibold mb-12 text-center" style={{ color: '#3E2723' }}>Tulungan mo ako pumili! 😊</p>

      <AnimatePresence mode="wait">
        {/* Stage 0: Dress Selection */}
        {stage === 0 && (
          <motion.div
            key="dress"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center"
          >
            <Shirt className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-8" style={{ color: '#5D4037' }} />
            <h3 className="text-base sm:text-lg font-serif font-bold mb-12" style={{ color: '#3E2723' }}>Anong dress style bet mo? 👗</h3>
            <div className="flex gap-8 justify-center">
              {dresses.map((dress, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => handleDressSelect(idx)}
                  className="text-7xl p-10 textured-bg transition-all"
                  style={{ backgroundColor: '#FFFFFF', border: '2px solid #E8DCC4' }}
                  whileHover={{ borderColor: '#D4AF37', borderWidth: '3px' }}
                  whileTap={{ scale: 0.95 }}
                >
                  {dress}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Stage 1: Flower Matching */}
        {stage === 1 && (
          <motion.div
            key="flower"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center"
          >
            <Flower2 className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-8" style={{ color: '#5D4037' }} />
            <h3 className="text-base sm:text-lg font-serif font-bold mb-12" style={{ color: '#3E2723' }}>Anong bulaklak ang paborito mo? 🌺</h3>
            <div className="flex gap-8 justify-center">
              {flowers.map((flower, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => handleFlowerSelect(idx)}
                  className="text-7xl p-10 bg-white transition-all"
                  style={{ border: '1px solid #E5E5E5' }}
                  whileHover={{ borderColor: '#7B8F6E', borderWidth: '2px' }}
                  whileTap={{ scale: 0.95 }}
                >
                  {flower}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Stage 2: Balloon Popping */}
        {stage === 2 && (
          <motion.div
            key="balloon"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center"
          >
            <PartyPopper className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-8" style={{ color: '#5D4037' }} />
            <h3 className="text-base sm:text-lg font-serif font-bold mb-12" style={{ color: '#3E2723' }}>Pasabugin ang mga lobo! 🎈</h3>
            <div className="flex gap-6 justify-center flex-wrap max-w-md">
              {balloons.map((balloon) => (
                <motion.button
                  key={balloon.id}
                  onClick={() => handleBalloonPop(balloon.id)}
                  className="w-28 h-36 rounded-full flex items-center justify-center text-white text-base font-light"
                  style={{ backgroundColor: balloon.color }}
                  whileHover={{ scale: poppedBalloons.includes(balloon.id) ? 1 : 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  animate={
                    poppedBalloons.includes(balloon.id)
                      ? { scale: 0, opacity: 0 }
                      : { scale: 1, opacity: 1 }
                  }
                >
                  {!poppedBalloons.includes(balloon.id) ? '🎈' : balloon.word}
                </motion.button>
              ))}
            </div>
            {poppedBalloons.length > 0 && (
              <div className="mt-10 flex gap-4 justify-center flex-wrap">
                {poppedBalloons.map((id) => {
                  const balloon = balloons.find((b) => b.id === id);
                  return (
                    <motion.span
                      key={id}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-lg font-light tracking-wide"
                      style={{ color: '#7B8F6E' }}
                    >
                      {balloon?.word}
                    </motion.span>
                  );
                })}
              </div>
            )}
          </motion.div>
        )}

        {/* Stage 3: Role Unlocked */}
        {stage === 3 && (
          <motion.div
            key="unlocked"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
              className="text-8xl mb-10"
            >
              🔓
            </motion.div>
            <h3 className="text-base sm:text-lg font-serif font-bold mb-6" style={{ color: '#3E2723' }}>
              Na-unlock mo:
            </h3>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-script text-5xl sm:text-6xl mb-12"
              style={{ color: '#5D4037' }}
            >
              Bridesmaid Role! 💕
            </motion.div>
            <motion.button
              onClick={onComplete}
              className="px-10 sm:px-12 py-3 sm:py-4 font-serif font-bold text-sm sm:text-base transition-all duration-300"
              style={{ 
                backgroundColor: '#5D4037',
                color: '#F5EFE7',
                border: '2px solid #D4AF37'
              }}
              whileHover={{ 
                backgroundColor: '#6F4E37',
                scale: 1.05
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Tara Na! 🚀
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
