'use client';

import { motion } from 'framer-motion';
import { Camera, Gift, Heart, Music, Sparkles, Users } from 'lucide-react';

interface Perk {
  icon: React.ReactNode;
  text: string;
  delay: number;
}

const perks: Perk[] = [
  { icon: <Sparkles className="w-7 h-7" />, text: 'VIP access to wedding chika', delay: 0.1 },
  { icon: <Heart className="w-7 h-7" />, text: 'Unlimited hugs from the bride', delay: 0.15 },
  { icon: <Gift className="w-7 h-7" />, text: 'Early access to the dress inspo', delay: 0.2 },
  { icon: <Users className="w-7 h-7" />, text: 'Guaranteed seat beside the fun people', delay: 0.25 },
  { icon: <Camera className="w-7 h-7" />, text: 'Photo ops galore', delay: 0.3 },
  { icon: <Music className="w-7 h-7" />, text: 'Maid-of-Honor-level drinks and snacks', delay: 0.35 },
];

interface BridesmaidPerksProps {
  onContinue: () => void;
}

export default function BridesmaidPerks({ onContinue }: BridesmaidPerksProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-12 md:px-24 py-20" style={{ backgroundColor: '#FAFAFA' }}>
      <motion.h2
        className="font-script text-6xl md:text-7xl mb-6 text-center"
        style={{ color: '#7B8F6E' }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        The Perks
      </motion.h2>
      <div className="w-32 h-px mb-6" style={{ backgroundColor: '#9CA986' }} />

      <motion.p
        className="text-sm font-light tracking-ultra uppercase mb-16 text-center"
        style={{ color: '#2C2C2C' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Here&apos;s what you get 🎁
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full mb-16">
        {perks.map((perk, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 flex items-center gap-5 transition-all duration-300"
            style={{ borderLeft: '2px solid #E5E5E5' }}
            initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: perk.delay }}
            whileHover={{ borderLeftColor: '#7B8F6E', borderLeftWidth: '3px' }}
          >
            <div className="flex-shrink-0" style={{ color: '#7B8F6E' }}>
              {perk.icon}
            </div>
            <p className="text-sm font-light tracking-wide" style={{ color: '#2C2C2C' }}>
              {perk.text}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.button
        onClick={onContinue}
        className="px-16 py-4 font-sans font-light text-sm tracking-ultra uppercase transition-all duration-300"
        style={{ 
          color: '#2C2C2C',
          borderBottom: '1px solid #7B8F6E'
        }}
        whileHover={{ 
          borderBottomWidth: '2px',
          letterSpacing: '0.3em'
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Continue
      </motion.button>
    </div>
  );
}
