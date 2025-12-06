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

  // Set your wedding date here (example: June 15, 2026)
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
    // Create a simple badge download (you can customize this)
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 600;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, 800, 600);
      gradient.addColorStop(0, '#8B5CF6');
      gradient.addColorStop(1, '#7C3AED');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 800, 600);
      
      // Text
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 48px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Official Bridesmaid', 400, 250);
      ctx.font = 'bold 72px Arial';
      ctx.fillText('💐', 400, 350);
      ctx.font = '36px Arial';
      ctx.fillText('Thank you for being part of our special day!', 400, 450);
      
      // Download
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = 'bridesmaid-badge.png';
          link.click();
          URL.revokeObjectURL(url);
        }
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-12 md:px-24 py-20" style={{ backgroundColor: '#FAFAFA' }}>
      <motion.div
        className="max-w-4xl w-full text-center space-y-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Thank You Section */}
        <motion.div
          className="bg-white p-16 md:p-20"
          style={{ borderLeft: '3px solid #7B8F6E' }}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            className="text-7xl mb-8"
            animate={{ rotate: [0, 3, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            👰‍♀️
          </motion.div>
          
          <h1 className="font-script text-6xl md:text-7xl mb-6" style={{ color: '#7B8F6E' }}>
            Thank You
          </h1>
          <div className="w-32 h-px mx-auto mb-8" style={{ backgroundColor: '#9CA986' }} />
          
          <p className="text-base font-light tracking-wide mb-10" style={{ color: '#2C2C2C' }}>
            You&apos;ve made me the happiest bride-to-be! 💕
          </p>

          {/* Download Badge */}
          <motion.button
            onClick={handleDownloadBadge}
            className="inline-flex items-center gap-3 px-12 py-3 font-sans font-light text-sm tracking-ultra uppercase transition-all duration-300"
            style={{ 
              color: '#2C2C2C',
              borderBottom: '1px solid #7B8F6E'
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download className="w-5 h-5" />
            Download Your Bridesmaid Badge
          </motion.button>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          className="bg-white p-12 md:p-16"
          style={{ border: '1px solid #E5E5E5' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-center gap-3 mb-10">
            <Calendar className="w-6 h-6" style={{ color: '#7B8F6E' }} />
            <h2 className="text-sm font-light tracking-ultra uppercase" style={{ color: '#2C2C2C' }}>
              Countdown to the Big Day
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
                className="bg-white p-6"
                style={{ borderBottom: '2px solid #7B8F6E' }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-light mb-2" style={{ color: '#2C2C2C' }}>
                  {item.value}
                </div>
                <div className="text-xs font-light tracking-ultra uppercase" style={{ color: '#9CA986' }}>
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Special Message */}
        <motion.div
          className="bg-white p-12 md:p-16"
          style={{ borderLeft: '3px solid #7B8F6E' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Heart className="w-10 h-10 mx-auto mb-8" style={{ color: '#7B8F6E' }} />
          <h3 className="font-script text-4xl mb-6" style={{ color: '#7B8F6E' }}>
            A Note for You
          </h3>
          <div className="w-24 h-px mx-auto mb-8" style={{ backgroundColor: '#9CA986' }} />
          <p className="text-base font-light leading-relaxed mb-6" style={{ color: '#2C2C2C' }}>
            Your presence in my life has made every moment brighter. I can&apos;t wait to share this incredible journey with you by my side. Thank you for being you, and for being my bridesmaid! 💕
          </p>
          <div className="text-3xl">🌸✨💐</div>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          className="text-xs font-light tracking-ultra uppercase"
          style={{ color: '#9CA986' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          More details coming soon 💌
        </motion.p>
      </motion.div>
    </div>
  );
}
