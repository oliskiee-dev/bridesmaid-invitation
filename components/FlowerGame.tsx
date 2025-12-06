'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FlowerGameProps {
  onComplete: () => void;
}

interface Flower {
  id: number;
  x: number;
  y: number;
  type: string;
  speed: number;
}

export default function FlowerGame({ onComplete }: FlowerGameProps) {
  const [basketX, setBasketX] = useState(50); // percentage
  const [flowers, setFlowers] = useState<Flower[]>([]);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [nextFlowerId, setNextFlowerId] = useState(0);
  
  const flowerTypes = ['🌸', '🌹', '💐', '🌺', '🌻', '🌷'];
  const targetScore = 15;

  // Move basket with mouse
  useEffect(() => {
    if (!gameStarted) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      setBasketX(Math.max(5, Math.min(95, x)));
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const x = (e.touches[0].clientX / window.innerWidth) * 100;
        setBasketX(Math.max(5, Math.min(95, x)));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [gameStarted]);

  // Spawn flowers
  useEffect(() => {
    if (!gameStarted) return;

    const spawnInterval = setInterval(() => {
      const newFlower: Flower = {
        id: nextFlowerId,
        x: Math.random() * 90 + 5,
        y: -10,
        type: flowerTypes[Math.floor(Math.random() * flowerTypes.length)],
        speed: Math.random() * 2 + 3,
      };
      setFlowers(prev => [...prev, newFlower]);
      setNextFlowerId(prev => prev + 1);
    }, 800);

    return () => clearInterval(spawnInterval);
  }, [gameStarted, nextFlowerId]);

  // Update flower positions and check collisions
  useEffect(() => {
    if (!gameStarted) return;

    const gameLoop = setInterval(() => {
      setFlowers(prev => {
        const updated = prev.map(flower => ({
          ...flower,
          y: flower.y + flower.speed,
        }));

        // Check collisions
        updated.forEach(flower => {
          if (flower.y > 75 && flower.y < 85) {
            const flowerCenterX = flower.x;
            const basketLeft = basketX - 8;
            const basketRight = basketX + 8;
            
            if (flowerCenterX >= basketLeft && flowerCenterX <= basketRight) {
              setScore(s => s + 1);
              setFlowers(prev => prev.filter(f => f.id !== flower.id));
            }
          }
        });

        // Remove flowers that fell off screen
        return updated.filter(flower => flower.y < 100);
      });
    }, 50);

    return () => clearInterval(gameLoop);
  }, [gameStarted, basketX]);

  // Check win condition
  useEffect(() => {
    if (score >= targetScore) {
      setTimeout(() => {
        onComplete();
      }, 1500);
    }
  }, [score, onComplete]);

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-12 relative overflow-hidden touch-none"
      style={{ backgroundColor: '#FAFAFA' }}
    >
      {!gameStarted ? (
        <motion.div
          className="text-center z-10 max-w-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <motion.h2
            className="font-script text-5xl sm:text-6xl md:text-7xl mb-6"
            style={{ color: '#7B8F6E' }}
          >
            Flower Catcher
          </motion.h2>
          <div className="w-24 sm:w-32 h-px mx-auto mb-6 sm:mb-8" style={{ backgroundColor: '#9CA986' }} />
          <p className="text-sm sm:text-base font-light mb-3 sm:mb-4 px-4" style={{ color: '#2C2C2C' }}>
            Move your finger or mouse to catch falling flowers!
          </p>
          <p className="text-xs sm:text-sm font-light mb-8 sm:mb-12" style={{ color: '#7B8F6E' }}>
            Collect {targetScore} flowers to continue
          </p>
          <motion.button
            onClick={() => setGameStarted(true)}
            className="px-8 sm:px-12 py-3 sm:py-4 font-sans font-light text-xs sm:text-sm tracking-ultra uppercase bg-white transition-all duration-300 touch-manipulation"
            style={{ 
              border: '1px solid #7B8F6E',
              color: '#2C2C2C'
            }}
            whileHover={{ 
              backgroundColor: '#7B8F6E',
              color: '#FFFFFF',
              scale: 1.05
            }}
            whileTap={{ scale: 0.95 }}
          >
            Start Game
          </motion.button>
        </motion.div>
      ) : (
        <>
          {/* Score Display */}
          <motion.div
            className="absolute top-4 sm:top-8 left-1/2 transform -translate-x-1/2 z-20"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <div className="text-center">
              <p className="text-xs sm:text-sm font-light tracking-ultra uppercase mb-1 sm:mb-2" style={{ color: '#2C2C2C' }}>
                Flowers Collected
              </p>
              <p className="font-script text-4xl sm:text-5xl" style={{ color: '#7B8F6E' }}>
                {score} / {targetScore}
              </p>
            </div>
          </motion.div>

          {/* Falling Flowers */}
          <AnimatePresence>
            {flowers.map(flower => (
              <motion.div
                key={flower.id}
                className="absolute text-5xl pointer-events-none"
                style={{
                  left: `${flower.x}%`,
                  top: `${flower.y}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: Math.random() * 360 }}
                exit={{ opacity: 0, scale: 0 }}
              >
                {flower.type}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Basket */}
          <motion.div
            className="absolute bottom-16 sm:bottom-20 text-6xl sm:text-7xl pointer-events-none z-10"
            style={{
              left: `${basketX}%`,
              transform: 'translateX(-50%)',
            }}
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            🧺
          </motion.div>

          {/* Win Message */}
          {score >= targetScore && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center z-30"
              style={{ backgroundColor: 'rgba(250, 250, 250, 0.95)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", duration: 0.8 }}
                  className="text-8xl mb-6"
                >
                  🎉
                </motion.div>
                <h3 className="font-script text-6xl mb-4" style={{ color: '#7B8F6E' }}>
                  Perfect Catch!
                </h3>
                <p className="text-sm font-light tracking-ultra uppercase" style={{ color: '#2C2C2C' }}>
                  You collected all the flowers!
                </p>
              </div>
            </motion.div>
          )}
        </>
      )}
    </div>
  );
}
