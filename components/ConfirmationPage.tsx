'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Calendar, Heart } from 'lucide-react';

interface ConfirmationPageProps {}

export default function ConfirmationPage({}: ConfirmationPageProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [bridesmaidName, setBridesmaidName] = useState('');

  const weddingDate = new Date('2026-05-21T15:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleDownloadBadge = () => {
    if (!bridesmaidName.trim()) {
      alert('Paki-lagay muna ang BUONG pangalan mo! 😊');
      return;
    }
    
    const canvas = document.createElement('canvas');
    canvas.width = 1000;
    canvas.height = 1000;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      // Brown Filipiniana gradient background
      const gradient = ctx.createLinearGradient(0, 0, 1000, 1000);
      gradient.addColorStop(0, '#F5EFE7');
      gradient.addColorStop(0.5, '#E8DCC4');
      gradient.addColorStop(1, '#F5EFE7');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 1000, 1000);
      
      // Decorative pattern overlay
      ctx.fillStyle = '#5D4037';
      ctx.globalAlpha = 0.05;
      for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
          if ((i + j) % 2 === 0) {
            ctx.fillRect(i * 50, j * 50, 25, 25);
          }
        }
      }
      ctx.globalAlpha = 1;
      
      // Outer decorative border
      ctx.strokeStyle = '#D4AF37';
      ctx.lineWidth = 8;
      ctx.strokeRect(40, 40, 920, 920);
      
      // Inner border
      ctx.strokeStyle = '#5D4037';
      ctx.lineWidth = 4;
      ctx.strokeRect(60, 60, 880, 880);
      
      // Top decorative stars
      ctx.fillStyle = '#D4AF37';
      ctx.font = '48px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('✦', 500, 140);
      ctx.fillText('✦', 300, 140);
      ctx.fillText('✦', 700, 140);
      
      // Main title
      ctx.fillStyle = '#5D4037';
      ctx.font = 'bold 64px Georgia, serif';
      ctx.textAlign = 'center';
      ctx.fillText('Official Bridesmaid', 500, 280);
      
      // Bridesmaid name
      ctx.fillStyle = '#A0522D';
      ctx.font = 'italic 48px Georgia, serif';
      ctx.fillText(bridesmaidName, 500, 350);
      
      // Gold divider
      ctx.strokeStyle = '#D4AF37';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(250, 390);
      ctx.lineTo(750, 390);
      ctx.stroke();
      
      // Center star
      ctx.fillStyle = '#D4AF37';
      ctx.font = '40px Arial';
      ctx.fillText('✦', 500, 405);
      
      // Flower emoji
      ctx.font = 'bold 120px Arial';
      ctx.fillText('🌺', 500, 550);
      
      // Tagalog message
      ctx.fillStyle = '#3E2723';
      ctx.font = 'italic 36px Georgia, serif';
      ctx.fillText('Salamat sa pagiging parte', 500, 670);
      ctx.fillText('ng aming special day!', 500, 720);
      
      // Wedding date
      ctx.fillStyle = '#A0522D';
      ctx.font = 'bold 32px Georgia, serif';
      ctx.fillText('Mayo 21, 2026', 500, 810);
      
      // Bottom decorative stars
      ctx.fillStyle = '#D4AF37';
      ctx.font = '36px Arial';
      ctx.fillText('✦ ✦ ✦', 500, 860);
      
      // Download
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          // Extract last name (last word) from full name
          const lastName = bridesmaidName.trim().split(' ').pop() || 'bridesmaid';
          link.download = `${lastName}_bridesmaidbadge.png`;
          link.click();
          URL.revokeObjectURL(url);
        }
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-12 md:px-24 py-20 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5EFE7] via-[#E8DCC4] to-[#F5EFE7]"></div>
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235D4037' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <motion.div
        className="max-w-4xl w-full text-center space-y-12 sm:space-y-16 px-4 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Thank You Section */}
        <motion.div
          className="textured-bg filipiniana-border p-12 sm:p-16 md:p-20 relative rounded-2xl shadow-2xl"
          style={{ backgroundColor: '#FFFFFF' }}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="absolute top-6 left-6 text-3xl" style={{ color: '#D4AF37' }}>✦</div>
          <div className="absolute top-6 right-6 text-3xl" style={{ color: '#D4AF37' }}>✦</div>
          
          <motion.div
            className="text-7xl mb-8"
            animate={{ rotate: [0, 3, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            👰‍♀️
          </motion.div>
          
          <h1 className="font-script text-5xl sm:text-6xl md:text-7xl mb-6" style={{ color: '#5D4037' }}>
            Salamat Talaga! 💕
          </h1>
          <div className="flex gap-2 items-center justify-center mb-8">
            <div className="w-12 h-px" style={{ backgroundColor: '#D4AF37' }} />
            <div className="text-xl" style={{ color: '#D4AF37' }}>✦</div>
            <div className="w-12 h-px" style={{ backgroundColor: '#D4AF37' }} />
          </div>
          
          <p className="text-base sm:text-lg font-serif font-semibold mb-10" style={{ color: '#3E2723' }}>
            Sobrang saya ko na nag OO ka! SOAFERRR SAYAAA! 🤩✨
          </p>

          {/* Name Input */}
          <div className="mb-8">
            <label className="block text-sm sm:text-base font-serif font-semibold mb-3" style={{ color: '#5D4037' }}>
              Lagay mo pangalan mo para sa badge: 💕
            </label>
            <input
              type="text"
              value={bridesmaidName}
              onChange={(e) => setBridesmaidName(e.target.value)}
              placeholder="Buong pangalan mo..."
              className="w-full max-w-md mx-auto px-6 py-3 text-center font-serif text-base sm:text-lg rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all"
              style={{ 
                backgroundColor: '#F5EFE7',
                color: '#3E2723',
                border: '2px solid #E8DCC4'
              }}
            />
          </div>

          {/* Download Badge */}
          <motion.button
            onClick={handleDownloadBadge}
            className="inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-12 py-3 sm:py-4 font-serif font-bold text-sm sm:text-base transition-all duration-300"
            style={{ 
              backgroundColor: '#5D4037',
              color: '#F5EFE7',
              border: '2px solid #D4AF37'
            }}
            whileHover={{ scale: 1.05, backgroundColor: '#6F4E37' }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5" />
            I-download ang Badge Mo! 🏆
          </motion.button>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          className="textured-bg p-12 md:p-16 rounded-2xl shadow-xl"
          style={{ backgroundColor: '#FFFFFF', border: '2px solid #E8DCC4' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#5D4037' }} />
            <h2 className="text-sm sm:text-base font-serif font-bold" style={{ color: '#3E2723' }}>
              Countdown sa Big Day! 📅
            </h2>
          </div>
          
          <div className="grid grid-cols-4 gap-6">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="textured-bg p-6 rounded-xl shadow-md"
                style={{ backgroundColor: '#F5EFE7', borderBottom: '3px solid #5D4037' }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-serif font-semibold mb-2" style={{ color: '#5D4037' }}>
                  {item.value}
                </div>
                <div className="text-xs font-serif font-medium uppercase" style={{ color: '#A0522D' }}>
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Special Message */}
        <motion.div
          className="textured-bg p-12 md:p-16 relative rounded-2xl shadow-2xl"
          style={{ backgroundColor: '#5D4037', border: '3px solid #D4AF37' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="absolute top-4 right-4 text-2xl" style={{ color: '#D4AF37' }}>✦</div>
          
          <Heart className="w-10 h-10 mx-auto mb-8" style={{ color: '#D4AF37' }} />
          <h3 className="font-script text-3xl sm:text-4xl mb-6" style={{ color: '#F5EFE7' }}>
            Para Sayo To! 💌
          </h3>
          <div className="flex gap-2 items-center justify-center mb-8">
            <div className="w-8 h-px" style={{ backgroundColor: '#D4AF37' }} />
            <div className="text-lg" style={{ color: '#D4AF37' }}>✦</div>
            <div className="w-8 h-px" style={{ backgroundColor: '#D4AF37' }} />
          </div>
          <p className="text-sm sm:text-base font-serif font-medium leading-relaxed mb-6 px-4" style={{ color: '#F5EFE7' }}>
            Sobrang grateful ako na andito ka sa buhay ko! Di ko maimagine yung wedding ko kung wala ka. Salamat sa lahat-lahat, at sa pagiging bridesmaid ko! Love you! 💕🥺
          </p>
          <div className="text-3xl">🌸✨💐</div>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          className="text-xs sm:text-sm font-serif font-medium"
          style={{ color: '#A0522D' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Susunod pa yung iba pang detalye ha! 📧✨
        </motion.p>
      </motion.div>
    </div>
  );
}
