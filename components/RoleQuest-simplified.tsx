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
    { id: 1, word: 'Love', color: 'bg-violet-500' },
    { id: 2, word: 'Laughter', color: 'bg-purple-500' },
    { id: 3, word: 'Support', color: 'bg-indigo-500' },
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
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gray-50">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Wedding Day Prep
      </motion.h2>
      <p className="text-gray-600 mb-10 text-center">Help me choose the perfect details</p>

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
            <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shirt className="w-8 h-8 text-violet-600" />
            </div>
            <h3 className="text-xl font-semibold mb-8 text-gray-700">Pick a dress style!</h3>
            <div className="flex gap-4 justify-center">
              {dresses.map((dress, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => handleDressSelect(idx)}
                  className="text-7xl p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  whileHover={{ scale: 1.05 }}
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
            <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Flower2 className="w-8 h-8 text-violet-600" />
            </div>
            <h3 className="text-xl font-semibold mb-8 text-gray-700">Choose your favorite flower!</h3>
            <div className="flex gap-4 justify-center">
              {flowers.map((flower, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => handleFlowerSelect(idx)}
                  className="text-7xl p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  whileHover={{ scale: 1.05 }}
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
            <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <PartyPopper className="w-8 h-8 text-violet-600" />
            </div>
            <h3 className="text-xl font-semibold mb-8 text-gray-700">Pop the balloons!</h3>
            <div className="flex gap-4 justify-center flex-wrap max-w-md">
              {balloons.map((balloon) => (
                <motion.button
                  key={balloon.id}
                  onClick={() => handleBalloonPop(balloon.id)}
                  className={`w-28 h-36 rounded-full ${balloon.color} flex items-center justify-center text-white text-lg font-semibold shadow-md`}
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
              <div className="mt-8 flex gap-3 justify-center flex-wrap">
                {poppedBalloons.map((id) => {
                  const balloon = balloons.find((b) => b.id === id);
                  return (
                    <motion.span
                      key={id}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-xl font-semibold text-violet-600"
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
              className="text-8xl mb-6"
            >
              🔓
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              You Unlocked:
            </h3>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-bold mb-8 text-violet-600"
            >
              The Bridesmaid Role 💖
            </motion.div>
            <motion.button
              onClick={onComplete}
              className="px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg shadow-sm transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Continue
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
