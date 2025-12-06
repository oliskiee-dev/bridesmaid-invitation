'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

interface Memory {
  id: number;
  image: string;
  caption: string;
  funFact: string;
}

const memories: Memory[] = [
  {
    id: 1,
    image: '🎉',
    caption: 'Yung first time na tumawa tayo dahil sa benta mong joke...',
    funFact: 'Nakalimutan ko na yung joke pero ang saya pa rin ng feeling! 😂',
  },
  {
    id: 2,
    image: '💪',
    caption: 'Nung nag-breakdown ako at nandyan ka...',
    funFact: 'Ang solid mo talaga! Walang katulad! 🫶',
  },
  {
    id: 3,
    image: '👯‍♀️',
    caption: 'Nung naging tayo na yung ultimate duo...',
    funFact: 'Best decision ko na maging close tayo! 💕',
  },
];

interface MemoryLaneProps {
  onComplete: () => void;
}

export default function MemoryLane({ onComplete }: MemoryLaneProps) {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCardClick = (id: number) => {
    setFlippedCards((prev) => 
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleNext = () => {
    if (currentIndex < memories.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-12 md:px-24 py-20 relative" style={{ backgroundColor: '#F5EFE7' }}>
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-5xl" style={{ color: '#D4AF37', opacity: 0.3 }}>🌺</div>
      
      <motion.h2
        className="font-script text-6xl md:text-7xl mb-4 text-center"
        style={{ color: '#5D4037' }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Throwback Muna!
      </motion.h2>
      <div className="flex gap-2 items-center mb-6">
        <div className="w-12 h-px" style={{ backgroundColor: '#D4AF37' }} />
        <div className="text-xl" style={{ color: '#D4AF37' }}>✦</div>
        <div className="w-12 h-px" style={{ backgroundColor: '#D4AF37' }} />
      </div>
      <p className="text-base font-serif font-medium mb-16 text-center" style={{ color: '#3E2723' }}>I-tap mo para makita yung memory! 🎴</p>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="w-full max-w-md"
        >
          <motion.div
            className="relative w-full h-96 cursor-pointer perspective-1000"
            onClick={() => handleCardClick(memories[currentIndex].id)}
          >
            <motion.div
              className="w-full h-full relative preserve-3d"
              animate={{ rotateY: flippedCards.includes(memories[currentIndex].id) ? 180 : 0 }}
              transition={{ duration: 0.5 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Front */}
              <div className="absolute w-full h-full backface-hidden">
                <div className="w-full h-full textured-bg p-12 flex flex-col items-center justify-center" style={{ backgroundColor: '#FFFFFF', border: '3px solid #D4AF37' }}>
                  <div className="text-7xl mb-8">{memories[currentIndex].image}</div>
                  <p className="text-lg text-center font-serif font-medium leading-relaxed" style={{ color: '#3E2723' }}>
                    {memories[currentIndex].caption}
                  </p>
                  <p className="text-sm font-serif mt-6" style={{ color: '#A0522D' }}>👆 I-tap mo!</p>
                </div>
              </div>

              {/* Back */}
              <div 
                className="absolute w-full h-full backface-hidden"
                style={{ transform: 'rotateY(180deg)' }}
              >
                <div className="w-full h-full textured-bg p-12 flex flex-col items-center justify-center" style={{ backgroundColor: '#5D4037', borderLeft: '4px solid #D4AF37' }}>
                  <Heart className="w-12 h-12 mb-8" style={{ color: '#D4AF37' }} />
                  <p className="text-lg text-center font-serif font-medium leading-relaxed" style={{ color: '#F5EFE7' }}>
                    {memories[currentIndex].funFact}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <motion.button
        onClick={handleNext}
        className="mt-12 px-10 sm:px-12 py-3 font-serif font-semibold text-sm transition-all duration-300"
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
      >
        {currentIndex < memories.length - 1 ? 'Next ➜' : 'Continue ➜'}
      </motion.button>

      <div className="flex gap-3 mt-8">
        {memories.map((_, idx) => (
          <div
            key={idx}
            className="h-1 transition-all rounded-full"
            style={{
              backgroundColor: idx === currentIndex ? '#D4AF37' : '#A0522D',
              width: idx === currentIndex ? '32px' : '8px',
              opacity: idx === currentIndex ? 1 : 0.3
            }}
          />
        ))}
      </div>
    </div>
  );
}
