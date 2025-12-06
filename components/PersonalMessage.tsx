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
    <div className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 md:px-24 py-12 sm:py-20 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5EFE7] via-[#E8DCC4] to-[#F5EFE7]"></div>
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235D4037' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {!showResponse ? (
        <motion.div
          className="max-w-3xl text-center space-y-10 sm:space-y-16 px-4 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="textured-bg filipiniana-border p-8 sm:p-16 md:p-20 relative rounded-2xl shadow-2xl"
            style={{ backgroundColor: '#FFFFFF' }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <div className="absolute top-4 left-4 text-2xl" style={{ color: '#D4AF37' }}>✦</div>
            <div className="absolute top-4 right-4 text-2xl" style={{ color: '#D4AF37' }}>✦</div>
            
            <Heart className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-6 sm:mb-8" style={{ color: '#5D4037' }} />
            
            <div className="flex gap-2 items-center justify-center mb-6 sm:mb-8">
              <div className="w-12 h-px" style={{ backgroundColor: '#D4AF37' }} />
              <div className="text-xl" style={{ color: '#D4AF37' }}>✦</div>
              <div className="w-12 h-px" style={{ backgroundColor: '#D4AF37' }} />
            </div>
            
            <p className="text-lg sm:text-xl md:text-2xl font-serif font-semibold leading-relaxed mb-6 sm:mb-10 text-center" style={{ color: '#3E2723' }}>
              Hindi ko kaya na mag-isa lang ako sa special day ko. Kailangan kita dun! 🥺
            </p>
            
            <p className="text-sm sm:text-base font-serif font-medium leading-relaxed mb-6 sm:mb-10" style={{ color: '#5D4037' }}>
              Sobrang thankful ako sayo at nandito ka sa buhay ko. 💕
            </p>
            
            <p className="font-script text-4xl sm:text-5xl" style={{ color: '#A0522D' }}>
              Sige na please? 🙏
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center">
            <motion.button
              onClick={() => handleResponse('yes')}
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
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              OMSIM BHIEEEE ! 💕✨
            </motion.button>
            
            <motion.button
              onClick={() => handleResponse('maybe')}
              className="px-12 py-3 sm:py-4 font-serif font-semibold text-sm sm:text-base transition-all duration-300 border-2 rounded-xl touch-manipulation"
              style={{ 
                color: '#5D4037',
                borderColor: '#A0522D',
                backgroundColor: 'transparent'
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Pagisipan ko muna beshiecakes... (but probably yes!) 😊
            </motion.button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          className="text-center relative z-10"
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
              <h2 className="font-script text-6xl md:text-7xl" style={{ color: '#5D4037' }}>
                Yay!
              </h2>
              <div className="flex gap-2 items-center justify-center">
                <div className="w-12 h-px" style={{ backgroundColor: '#D4AF37' }} />
                <div className="text-xl" style={{ color: '#D4AF37' }}>✦</div>
                <div className="w-12 h-px" style={{ backgroundColor: '#D4AF37' }} />
              </div>
              <p className="text-base font-serif font-medium" style={{ color: '#3E2723' }}>
                Get ready for the best wedding ever! 💖
              </p>
            </div>
          ) : (
            <div className="space-y-10">
              <div className="text-8xl">😄</div>
              <h2 className="font-script text-6xl" style={{ color: '#5D4037' }}>
                SIGE BHIE PAG ISIPAN MO MUNA!
              </h2>
              <div className="flex gap-2 items-center justify-center">
                <div className="w-12 h-px" style={{ backgroundColor: '#D4AF37' }} />
                <div className="text-xl" style={{ color: '#D4AF37' }}>✦</div>
                <div className="w-12 h-px" style={{ backgroundColor: '#D4AF37' }} />
              </div>
              <p className="text-base font-serif font-medium" style={{ color: '#3E2723' }}>
                I know you&apos;ll say yes eventually! 😊
              </p>
              <motion.button
                onClick={() => setShowResponse(false)}
                className="px-10 sm:px-12 py-3 sm:py-4 font-serif font-bold text-sm sm:text-base transition-all duration-300 border-2 rounded-xl touch-manipulation"
                style={{ 
                  backgroundColor: '#5D4037',
                  color: '#F5EFE7',
                  borderColor: '#D4AF37'
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
