# 🌸 Romantic Botanical Elegance - Design Documentation

## Design Language: Sparkling Wisteria - Purple & Gold

Your bridesmaid invitation website now features a **Romantic Botanical Elegance** design inspired by cascading wisteria flowers.

---

## 🎨 Color Palette

### Primary Colors
- **Crisp White** (`#FFFFFF`) - Clean, modern canvas with extensive negative space
- **Deep Purple** (`#5B21B6`) - Royal, sophisticated primary color
- **Wisteria Purple** (`#7C3AED`) - Main brand color, vibrant and romantic

### Secondary Colors
- **Lavender** (`#C4B5FD`) - Soft, dreamy watercolor effect
- **Light Purple** (`#A78BFA`) - Delicate accent blooms
- **Pale Lavender** (`#DDD6FE`) - Subtle highlights

### Accent Colors
- **Sage Green** (`#9CA3AF`, `#6B7280`) - Natural, grounding element for leaves
- **Metallic Gold** (`#F59E0B`, `#FCD34D`, `#D97706`) - Premium sparkle and warmth

---

## ✍️ Typography

### Headline Font: Playfair Display
- **Usage:** Main titles, names, headers
- **Style:** Classic serif, all-caps with wide letter spacing (0.1em - 0.2em)
- **Weights:** 400 (regular), 500, 600, 700 (bold)
- **Communicates:** Tradition, formality, timeless elegance

### Body Font: Cormorant
- **Usage:** Supporting text, descriptions, body copy
- **Style:** Elegant serif with lighter weight, often italic
- **Weights:** 300 (light), 400, 500, 600, 700
- **Communicates:** Sophistication, readability, romance

---

## 🌺 Visual Elements

### Watercolor Wisteria
**Location:** Top of every page (cascading from "ceiling")

**Features:**
- 3 cascading flower clusters (left, center, right)
- SVG-based with watercolor blur filter
- Varying purple shades from deep to light
- Sage green leaves interspersed
- Gold sparkles overlay (15 animated sparkles)
- Draping effect creates intimacy

**Animation:**
- Fade in from top
- Spring-type entrance
- Staggered reveal (left → center → right)
- Sparkles pulse infinitely

### Floating Wisteria Petals
**Background animation throughout site**

**Characteristics:**
- 15 falling petals
- Elliptical petal shape (not circular)
- Purple color variations
- Slow, graceful descent
- Rotating motion
- 40% opacity with blur

---

## 📐 Layout & Composition

### Center Alignment
- All text strictly center-aligned
- Creates formal, traditional invitation feel
- Balance and stability

### Visual Hierarchy
1. **Wisteria border** (draws eye first)
2. **Headlines** (Playfair Display, large, all-caps)
3. **Decorative dividers** (gold sparkles ✦, purple lines)
4. **Body text** (Cormorant, italic)
5. **Call-to-action buttons** (purple gradient with gold shimmer)

### Spacing
- Generous white space
- Consistent padding (8-16 units)
- Clear section separation
- Breathing room for elegance

---

## 🎭 Component Styling

### Buttons
**Primary Style:**
```
- Gradient: purple-600 → purple-700
- Text: White, uppercase, wide tracking
- Font: Cormorant
- Shape: Rounded-full
- Effect: Gold shimmer animation
- Hover: Scale 1.05, purple shadow
```

**Secondary Style:**
```
- Background: White
- Border: 2px purple-300
- Text: Purple-700
- Hover: Light purple background
```

### Cards
**Standard Card:**
```
- Background: White
- Border: 1px purple-100
- Border-radius: 24px (rounded-3xl)
- Shadow: 2xl
- Padding: 12 units
- Gold sparkles (✦) in corners
```

**Gradient Card:**
```
- Background: Purple gradient (purple-50 → lavender-50)
- Border: 1px purple-100
- Used for: Countdown timer
```

### Decorative Dividers
**Pattern:**
```
[horizontal line] — ✦ — [horizontal line]
```
- Line: 1px, purple-300 gradient (transparent → solid → transparent)
- Sparkle: Gold (amber-500), text-xl
- Spacing: 12-16px gaps

---

## ✨ Animations

### Entry Animations
- **Fade in:** Opacity 0 → 1, translateY 20px → 0
- **Scale in:** Scale 0.8 → 1 with spring physics
- **Stagger:** 0.1-0.3s delays between elements

### Hover Effects
- **Scale:** 1.0 → 1.05
- **Shadow:** Expand with purple glow
- **Border:** Change to lighter purple

### Special Effects

**Gold Shimmer:**
```
Gradient overlay moving left to right
- Background: Gold gradient with 20% opacity
- Animation: translateX -100% → 100%
- Duration: 3s infinite
```

**Sparkle Pulse:**
```
Opacity and scale animation
- Pattern: 0 → 1 → 0
- Scale: 0 → 1 → 0
- Duration: 2s
- Repeat: Infinite with 3s delay
```

**Confetti:**
```
50 pieces in purple & gold palette
- Colors: #7C3AED, #C4B5FD, #5B21B6, #A78BFA, #F59E0B
- Animation: Fall with rotation
- Duration: 3s
```

---

## 🌟 Mood & Atmosphere

### The Vibe
- **Ethereal** - Watercolor effects, soft edges
- **Organic** - Natural wisteria growth pattern
- **Joyful** - Gold sparkles, gentle animations
- **Upscale** - Gold accents, serif typography
- **Romantic** - Purple palette, flowing petals
- **Formal** - Center alignment, classic fonts

### Target Feeling
Balance of:
- Garden wedding (organic, natural)
- Black tie event (gold, formal typography)
- Spring/summer freshness (light purples, white space)
- Timeless elegance (classic design principles)

---

## 📱 Responsive Design

### Desktop
- Wisteria cascades span full width
- Text sizes: 5xl - 7xl for headlines
- Generous spacing
- Side-by-side layouts where appropriate

### Mobile
- Wisteria adjusts to viewport
- Text sizes: 4xl - 5xl for headlines
- Stacked layouts
- Touch-friendly buttons (min 44px height)
- Maintains center alignment

---

## 🎁 Special Features

### Interactive Elements
1. **Memory cards** - Flip to reveal with purple gradient back
2. **Mini-games** - Dress, flower, balloon selection
3. **Download badge** - Generated with purple gradient
4. **Live countdown** - To wedding date

### Micro-interactions
- Button hover with gold shimmer
- Card border color change on hover
- Icon drop shadows
- Spring physics on entrances

---

## 📋 Design Consistency Checklist

✅ All headings use Playfair Display, all-caps, wide tracking  
✅ All body text uses Cormorant, often italic  
✅ Purple palette (#5B21B6, #7C3AED, #C4B5FD) consistent  
✅ Gold accents (#F59E0B) for sparkles and shimmer  
✅ White background with generous negative space  
✅ Wisteria component on every section  
✅ Gold sparkle (✦) decorative elements  
✅ Purple borders (1px, purple-100) on cards  
✅ Center-aligned layouts throughout  
✅ Rounded-full buttons with uppercase text  
✅ Shadow-2xl for depth on cards  
✅ Consistent spacing (8, 12, 16 unit increments)  

---

## 🎨 Usage Examples

### Section Header Pattern
```tsx
<h2 className="font-playfair text-5xl font-bold tracking-widest uppercase" 
    style={{ color: '#5B21B6', letterSpacing: '0.15em' }}>
  SECTION TITLE
</h2>

<div className="flex items-center justify-center gap-3">
  <div className="h-px w-16 bg-gradient-to-r from-transparent via-purple-300 to-transparent" />
  <span className="text-amber-500 text-xl">✦</span>
  <div className="h-px w-16 bg-gradient-to-r from-transparent via-purple-300 to-transparent" />
</div>
```

### Primary Button Pattern
```tsx
<button className="px-16 py-5 bg-gradient-to-r from-purple-600 to-purple-700 
                   text-white font-cormorant tracking-wider uppercase 
                   rounded-full shadow-2xl relative overflow-hidden">
  <span className="relative z-10">BUTTON TEXT</span>
  <motion.div 
    className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20"
    animate={{ x: ['-100%', '100%'] }}
    transition={{ duration: 3, repeat: Infinity }}
  />
</button>
```

### Card Pattern
```tsx
<div className="bg-white rounded-3xl shadow-2xl p-12 border border-purple-100 relative">
  <div className="absolute top-4 right-4 text-amber-500 text-2xl opacity-50">✦</div>
  <div className="absolute bottom-4 left-4 text-amber-500 text-2xl opacity-50">✦</div>
  {/* Content */}
</div>
```

---

## 🌸 Customization Tips

### To Change Main Color
Replace purple values:
- `#5B21B6` → Your deep color
- `#7C3AED` → Your medium color  
- `#C4B5FD` → Your light color

### To Adjust Formality
- **More formal:** Increase letter-spacing, use all-caps more
- **Less formal:** Reduce spacing, mix uppercase/lowercase

### To Change Season
- **Fall:** Orange/burgundy wisteria, gold sparkles
- **Winter:** Silver/white flowers, blue accents
- **Summer:** Brighter purples, more green

---

**Design System Complete!** ✨

Your website now embodies Romantic Botanical Elegance with watercolor wisteria, sophisticated purple & gold palette, and timeless serif typography.
