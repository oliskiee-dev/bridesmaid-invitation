'use client';

import { motion } from 'framer-motion';
import { Camera, Gift, Heart, Music, Sparkles, Users } from 'lucide-react';

interface Perk {
  icon: React.ReactNode;
  text: string;
  delay: number;
}

const perks: Perk[] = [
  { icon: <Sparkles className="w-7 h-7" />, text: 'VIP access sa lahat ng wedding chika! 💬', delay: 0.1 },
  { icon: <Heart className="w-7 h-7" />, text: 'Unlimited yakap from the bride 🤗', delay: 0.15 },
  { icon: <Gift className="w-7 h-7" />, text: 'Una makakita ng dress inspo 👗', delay: 0.2 },
  { icon: <Users className="w-7 h-7" />, text: 'Guaranteed magkakasama yung mga ka-vibes 🥳', delay: 0.25 },
  { icon: <Camera className="w-7 h-7" />, text: 'Photo ops na walang katapusan 📸', delay: 0.3 },
  { icon: <Music className="w-7 h-7" />, text: 'Prio sa mga drinks at food! 🥂🍰', delay: 0.35 },
];

interface BridesmaidPerksProps {
  onContinue: () => void;
}

export default function BridesmaidPerks({ onContinue }: BridesmaidPerksProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-12 md:px-24 py-20 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5EFE7] via-[#E8DCC4] to-[#F5EFE7]"></div>
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235D4037' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="absolute top-8 text-5xl z-0" style={{ color: '#D4AF37', opacity: 0.3 }}>🌺</div>
      
      <motion.h2
        className="font-script text-5xl sm:text-6xl md:text-7xl mb-6 text-center relative z-10"
        style={{ color: '#5D4037' }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Mga Perks Mo! 🎁
      </motion.h2>
      <div className="flex gap-2 items-center mb-6 relative z-10 justify-center">
        <div className="w-12 h-px" style={{ backgroundColor: '#D4AF37' }} />
        <div className="text-xl" style={{ color: '#D4AF37' }}>✦</div>
        <div className="w-12 h-px" style={{ backgroundColor: '#D4AF37' }} />
      </div>

      <motion.p
        className="text-base sm:text-lg font-serif font-bold mb-16 text-center relative z-10"
        style={{ color: '#3E2723' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Eto makukuha mo bilang bridesmaid ko! 😎
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full mb-16 relative z-10">
        {perks.map((perk, index) => (
          <motion.div
            key={index}
            className="textured-bg p-6 flex items-center gap-5 transition-all duration-300 rounded-xl shadow-md"
            style={{ backgroundColor: '#FFFFFF', borderLeft: '4px solid #E8DCC4' }}
            initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: perk.delay }}
            whileHover={{ borderLeftColor: '#D4AF37', scale: 1.02 }}
          >
            <div className="flex-shrink-0" style={{ color: '#5D4037' }}>
              {perk.icon}
            </div>
            <p className="text-sm sm:text-base font-serif font-medium" style={{ color: '#3E2723' }}>
              {perk.text}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.button
        onClick={onContinue}
        className="px-10 sm:px-16 py-3 sm:py-4 font-serif font-bold text-sm sm:text-base transition-all duration-300 relative z-10 rounded-xl shadow-lg touch-manipulation"
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Ayos! Sige Next! 🚀
      </motion.button>
    </div>
  );
}
