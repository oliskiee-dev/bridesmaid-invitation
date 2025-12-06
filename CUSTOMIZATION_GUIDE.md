# 🎨 Customization Guide

## Quick Customization Checklist

- [ ] Update wedding date
- [ ] Add personal memories and photos
- [ ] Customize heartfelt messages
- [ ] Update bridesmaid name/nickname
- [ ] Add background music (optional)
- [ ] Set up password protection (optional)

---

## 1. 📅 Update Wedding Date

**File:** `components/ConfirmationPage.tsx`

**Line 18-19:** Change the wedding date:
```typescript
// Replace with your actual wedding date
const weddingDate = new Date('2026-06-15T00:00:00');
```

Example formats:
```typescript
new Date('2026-06-15T00:00:00')  // June 15, 2026
new Date('2027-03-20T14:30:00')  // March 20, 2027 at 2:30 PM
```

---

## 2. 📸 Add Personal Memories

**File:** `components/MemoryLane.tsx`

**Lines 11-32:** Replace the default memories:

```typescript
const memories: Memory[] = [
  {
    id: 1,
    image: '🎉',  // Replace with emoji or photo path
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
  // Add more memories!
];
```

### To Use Real Photos:

1. Add your photos to the `public/photos` folder
2. Update the memory object:

```typescript
import Image from 'next/image';

// In the component, replace the emoji div with:
<Image 
  src="/photos/memory1.jpg"
  alt="Memory"
  width={200}
  height={200}
  className="rounded-xl mb-6"
/>
```

---

## 3. 💌 Customize Personal Messages

**File:** `components/PersonalMessage.tsx`

**Lines 29-37:** Update the heartfelt message:

```typescript
<p className="font-playfair text-3xl md:text-4xl text-gray-700 leading-relaxed mb-8">
  I couldn't imagine walking down the aisle without you.
</p>

<p className="text-2xl text-gray-600 mb-8">
  Thank you for being a part of my life.
</p>
```

Replace with your own words!

---

**File:** `components/ConfirmationPage.tsx`

**Lines 145-147:** Update the special message:

```typescript
<p className="text-lg text-gray-600 leading-relaxed mb-6">
  Your presence in my life has made every moment brighter. 
  I can't wait to share this incredible journey with you by my side. 
  Thank you for being you, and for being my bridesmaid! 💕
</p>
```

---

## 4. 🎵 Add Background Music (Optional)

**File:** `components/LandingSection.tsx`

Add this code after the imports:

```typescript
'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useEffect, useRef } from 'react';  // Add this

interface LandingSectionProps {
  onBegin: () => void;
}

export default function LandingSection({ onBegin }: LandingSectionProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/music/background.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const handleBegin = () => {
    audioRef.current?.play();
    onBegin();
  };

  // Update button onClick to use handleBegin instead of onBegin
```

**Steps:**
1. Add your music file to `public/music/background.mp3`
2. The music will start when user clicks "Begin the Journey"

---

## 5. 🔒 Add Password Protection (Optional)

Create a new file: `app/login/page.tsx`

```typescript
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Replace 'her-nickname' with actual password
    if (password.toLowerCase() === 'her-nickname') {
      localStorage.setItem('bridesmaid-access', 'granted');
      router.push('/');
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center px-6">
      <motion.div
        className="bg-white rounded-3xl shadow-2xl p-12 max-w-md w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-playfair text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-8">
          Enter Password
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Hint: Your nickname 😊
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-6 py-4 rounded-full border-2 border-purple-200 focus:border-purple-400 outline-none text-center text-lg mb-4"
            placeholder="Password"
          />
          {error && (
            <p className="text-red-500 text-center mb-4">
              Try again! 💕
            </p>
          )}
          <button
            type="submit"
            className="w-full px-8 py-4 bg-gradient-to-r from-pink-400 to-purple-400 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-pink-300/50 transition-all"
          >
            Enter
          </button>
        </form>
      </motion.div>
    </div>
  );
}
```

Update `app/page.tsx` to check for access:

```typescript
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
// ... other imports

export default function Home() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  
  useEffect(() => {
    const access = localStorage.getItem('bridesmaid-access');
    if (access !== 'granted') {
      router.push('/login');
    } else {
      setIsAuthorized(true);
    }
  }, [router]);

  if (!isAuthorized) return null;

  // ... rest of component
}
```

---

## 6. 🎨 Change Color Scheme

### Option 1: Use Different Pastels

Find and replace in all component files:

**Pink to Peach:**
- `from-pink-400` → `from-orange-300`
- `to-pink-500` → `to-orange-400`
- `bg-pink-50` → `bg-orange-50`

**Purple to Lavender:**
- `from-purple-400` → `from-indigo-300`
- `to-purple-500` → `to-indigo-400`
- `bg-purple-50` → `bg-indigo-50`

### Option 2: Custom Color Palette

Edit `tailwind.config.ts`:

```typescript
export default {
  theme: {
    extend: {
      colors: {
        bride: {
          50: '#fdf2f8',
          100: '#fce7f3',
          400: '#f472b6',
          500: '#ec4899',
        },
      },
    },
  },
};
```

Then use `from-bride-400`, `bg-bride-50`, etc.

---

## 7. 🎁 Add More Bridesmaid Perks

**File:** `components/BridesmaidPerks.tsx`

**Lines 5-12:** Add more perks to the array:

```typescript
const perks: Perk[] = [
  { icon: <Sparkles className="w-8 h-8" />, text: 'VIP access to wedding chika', delay: 0.1 },
  { icon: <Heart className="w-8 h-8" />, text: 'Unlimited hugs from the bride', delay: 0.2 },
  // ... existing perks
  
  // Add your own!
  { icon: <Star className="w-8 h-8" />, text: 'Front row seat at the ceremony', delay: 0.7 },
  { icon: <Crown className="w-8 h-8" />, text: 'Special bridesmaid tiara', delay: 0.8 },
];
```

Don't forget to import new icons at the top!

---

## 8. 📱 Test on Mobile

1. Start dev server: `npm run dev`
2. Find your local IP: Run `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
3. On mobile, visit: `http://YOUR-IP:3000`
4. Test all interactions!

---

## 9. 🌐 Custom Domain Setup

After deploying to Vercel:

1. Go to your project settings
2. Click "Domains"
3. Add custom domain (e.g., `beabridesmaid.com`)
4. Follow Vercel's DNS instructions
5. Wait for SSL certificate (automatic)

Popular domain registrars:
- Namecheap
- Google Domains
- GoDaddy

---

## 10. ✨ Final Touches

### Update Page Title
**File:** `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: "Sarah, will you be my bridesmaid? ✨",  // Personalize!
  description: "A journey to the aisle awaits...",
};
```

### Add Favicon
1. Create or download a wedding-themed icon
2. Save as `public/favicon.ico`
3. It will automatically appear in browser tabs!

---

## Need Help?

- Check the main README.md for tech details
- All components are in the `components/` folder
- Styling uses Tailwind CSS classes
- Animations use Framer Motion

Happy customizing! 💕
