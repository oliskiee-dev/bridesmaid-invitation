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
    caption: 'The first time we laughed until we cried...',
    funFact: 'You spilled coffee on yourself and still kept laughing!',
  },
  {
    id: 2,
    image: '💪',
    caption: 'The time you saved me from stress...',
    funFact: 'Your pep talks are legendary!',
  },
  {
    id: 3,
    image: '👯‍♀️',
    caption: 'When we became sisters by heart...',
    funFact: 'Best decision of my life!',
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
    <div className="min-h-screen flex flex-col items-center justify-center px-12 md:px-24 py-20" style={{ backgroundColor: '#FAFAFA' }}>
      <motion.h2
        className="font-script text-6xl md:text-7xl mb-8 text-center"
        style={{ color: '#7B8F6E' }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Our Story
      </motion.h2>
      <div className="w-32 h-px mb-6" style={{ backgroundColor: '#9CA986' }} />
      <p className="text-sm font-light tracking-ultra uppercase mb-16 text-center" style={{ color: '#2C2C2C' }}>Tap each card to reveal</p>

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
                <div className="w-full h-full bg-white p-12 flex flex-col items-center justify-center" style={{ border: '1px solid #E5E5E5' }}>
                  <div className="text-7xl mb-8">{memories[currentIndex].image}</div>
                  <p className="text-lg text-center font-light leading-relaxed" style={{ color: '#2C2C2C' }}>
                    {memories[currentIndex].caption}
                  </p>
                  <p className="text-xs font-light tracking-ultra uppercase mt-6" style={{ color: '#9CA986' }}>Tap to reveal</p>
                </div>
              </div>

              {/* Back */}
              <div 
                className="absolute w-full h-full backface-hidden"
                style={{ transform: 'rotateY(180deg)' }}
              >
                <div className="w-full h-full bg-white p-12 flex flex-col items-center justify-center" style={{ borderLeft: '3px solid #7B8F6E' }}>
                  <Heart className="w-12 h-12 mb-8" style={{ color: '#7B8F6E' }} />
                  <p className="text-lg text-center font-light leading-relaxed" style={{ color: '#2C2C2C' }}>
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
        className="mt-12 px-12 py-3 font-sans font-light text-sm tracking-ultra uppercase transition-all duration-300"
        style={{ 
          color: '#2C2C2C',
          borderBottom: '1px solid #7B8F6E'
        }}
        whileHover={{ 
          borderBottomWidth: '2px',
          letterSpacing: '0.3em'
        }}
      >
        {currentIndex < memories.length - 1 ? 'Next' : 'Continue'}
      </motion.button>

      <div className="flex gap-3 mt-8">
        {memories.map((_, idx) => (
          <div
            key={idx}
            className="h-px transition-all"
            style={{
              backgroundColor: idx === currentIndex ? '#7B8F6E' : '#D1D5DB',
              width: idx === currentIndex ? '32px' : '8px'
            }}
          />
        ))}
      </div>
    </div>
  );
}
