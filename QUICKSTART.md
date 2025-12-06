# 🚀 Quick Start Guide

## You're 5 minutes away from your magical bridesmaid invitation! ✨

### Step 1: View the Website 👀
Your development server is already running!

Open your browser and go to:
**http://localhost:3000**

### Step 2: Customize (Essential) 📝

#### Change the Wedding Date (2 minutes)
1. Open `components/ConfirmationPage.tsx`
2. Find line 18: `const weddingDate = new Date('2026-06-15T00:00:00');`
3. Replace with your actual wedding date
4. Save the file - the page will auto-refresh!

#### Add Personal Memories (5 minutes)
1. Open `components/MemoryLane.tsx`
2. Find the `memories` array (around line 11)
3. Replace captions and fun facts with your real memories
4. Save and watch the magic happen!

#### Update Messages (3 minutes)
1. Open `components/PersonalMessage.tsx`
2. Scroll to line 29
3. Replace with your heartfelt message
4. Save!

### Step 3: Test Everything 🧪

Click through all sections:
1. ✅ Landing page → Click "Begin the Journey"
2. ✅ Memory Lane → Flip cards, click through memories
3. ✅ Role Quest → Play all mini-games
4. ✅ Big Question → Reveal the question
5. ✅ Personal Message → Click "Yes, of course!"
6. ✅ Bridesmaid Perks → Review all perks
7. ✅ Confirmation → Check countdown, download badge

### Step 4: Deploy 🌐

#### Option A: Vercel (Recommended - Free!)
1. Push code to GitHub:
   ```bash
   git add .
   git commit -m "My bridesmaid invitation"
   git push
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"
6. Done! You'll get a URL like: `your-project.vercel.app`

#### Option B: Share Locally (Quick Test)
1. Find your computer's IP address:
   - Windows: Run `ipconfig` in terminal
   - Mac: Run `ifconfig` in terminal
2. Share URL: `http://YOUR-IP:3000`
3. Anyone on same WiFi can access it!

### Step 5: Send the Invitation 💌

**Copy your URL and send it!**

Sample message:
```
Hey! I have something special to ask you... 
Click here: [your-url]
💕
```

---

## 🎨 Want to Customize More?

Check out `CUSTOMIZATION_GUIDE.md` for:
- Adding real photos
- Background music
- Password protection
- Changing colors
- Custom domains
- And more!

---

## ⚡ Common Issues

### Port 3000 already in use?
```bash
# Kill the process and restart
npm run dev -- -p 3001
# Then visit http://localhost:3001
```

### Changes not showing?
1. Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
2. Clear browser cache
3. Restart dev server

### Build errors?
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
npm run dev
```

---

## 📱 Mobile Preview

**Best way to preview on phone:**
1. Both devices on same WiFi
2. Find computer IP (see Step 4, Option B)
3. On phone, visit: `http://YOUR-IP:3000`
4. Test all interactions!

---

## 🎉 You're All Set!

Your beautiful bridesmaid invitation is ready to go!

**Next Steps:**
- [ ] Customize messages
- [ ] Update wedding date
- [ ] Test on mobile
- [ ] Deploy to Vercel
- [ ] Send to your future bridesmaid!

Good luck! She's going to love it! 💖

---

**Need help?** Check the main `README.md` or `CUSTOMIZATION_GUIDE.md`
