# 💐 A Journey to the Aisle - Bridesmaid Invitation Website

A beautiful, interactive Next.js website to ask someone special to be your bridesmaid!

## ✨ Features

### 🌸 **Landing Page**
- Romantic pastel gradient background
- Floating petal animations
- "Begin the Journey" button with smooth transitions

### 📸 **Memory Lane**
- Interactive timeline showcasing your relationship
- Flip card animations revealing special moments and fun facts
- Beautiful photo placeholders (customize with real photos!)

### 🎮 **Role Quest Mini-Game**
- **Dress Selection** - Choose a dress style
- **Flower Matching** - Pick favorite flowers
- **Balloon Popping** - Pop balloons to reveal words like "Love," "Laughter," "Support"
- Unlocks the "Bridesmaid Role" achievement

### 💌 **The Big Question**
- Dramatic reveal with confetti animation
- Beautiful card asking "Will you be my Bridesmaid?"
- Smooth transitions and celebrations

### 💖 **Personal Message**
- Heartfelt message from the bride
- Two response options with playful interactions

### 🎁 **Bridesmaid Perks**
- VIP access to wedding details
- Unlimited hugs from the bride
- Early access to dress inspiration
- Photo opportunities & more!

### 🎉 **Confirmation Page**
- Thank you message
- Downloadable bridesmaid badge
- Live countdown to wedding day
- Special heartfelt message

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## 🎨 Customization Guide

### Update Wedding Date
Edit `components/ConfirmationPage.tsx`:
```typescript
const weddingDate = new Date('2026-06-15T00:00:00'); // Change this!
```

### Customize Memories
Edit `components/MemoryLane.tsx` to add your own memories and photos.

### Change Colors
The site uses Tailwind CSS. Edit color classes in components:
- Pink: `from-pink-400`, `bg-pink-50`
- Purple: `from-purple-400`, `bg-purple-50`
- Blue: `to-blue-50`

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page with section routing
│   └── globals.css         # Global styles
├── components/
│   ├── LandingSection.tsx
│   ├── MemoryLane.tsx
│   ├── RoleQuest.tsx
│   ├── BigQuestion.tsx
│   ├── PersonalMessage.tsx
│   ├── BridesmaidPerks.tsx
│   ├── ConfirmationPage.tsx
│   └── FloatingPetals.tsx
└── public/                 # Add your photos here
```

## 🌐 Deploy to Vercel

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import repository
4. Deploy!

You can add a custom domain like `beabridesmaid.com` in Vercel settings.

## 🛠️ Built With

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 💝 Tips

1. Test on mobile devices
2. Add personal photos to replace emojis
3. Customize all messages
4. Set the correct wedding date
5. Share the link as a surprise!

---

Made with 💖 for an unforgettable bridesmaid proposal
