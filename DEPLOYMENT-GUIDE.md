# Shlomo Holdings Premium Website - Deployment Guide

## 📦 Package Contents

This archive contains the complete premium website for Shlomo Holdings LLC including:

- ✅ Full React + Vite source code
- ✅ All custom AI-generated images (5 premium images)
- ✅ Tailwind CSS configuration with premium design tokens
- ✅ All premium components (Navigation, Hero, Stats, Services, Testimonials, About, Contact, Footer)
- ✅ Production-ready configuration files

## 🎨 Features Included

### Premium Design Elements
- **Glassmorphism UI** - Modern glass-like effects with backdrop blur
- **Parallax Scrolling** - Smooth parallax effects on hero and contact sections
- **Animated Counters** - Scroll-triggered stat counters
- **Gradient Overlays** - Professional gradient backgrounds
- **Smooth Transitions** - 200-600ms animation timing
- **Responsive Design** - Mobile-first, fully responsive layout

### Custom Images
1. `hero-background.png` - Professional office workspace
2. `seo-service.png` - SEO marketing illustration
3. `ai-marketing-service.png` - AI technology illustration
4. `team-about.png` - Professional team photo
5. `contact-background.png` - Modern contact section background

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or Bun
- pnpm (recommended) or npm

### Installation & Development

```bash
# Extract the archive
unzip shlomo-holdings-premium-website.zip
cd shlomo-holdings-website

# Install dependencies
pnpm install
# OR
npm install

# Start development server
pnpm dev
# OR
npm run dev

# Open browser to http://localhost:5173
```

### Build for Production

```bash
# Create production build
pnpm build
# OR
npm run build

# Preview production build locally
pnpm preview
# OR
npm run preview
```

The production files will be in the `dist/` directory.

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow prompts to link your domain

### Option 2: Netlify

1. Install Netlify CLI:
   ```bash
   npm i -g netlify-cli
   ```

2. Deploy:
   ```bash
   netlify deploy --prod
   ```

3. Drag & drop the `dist/` folder or link to GitHub

### Option 3: GitHub Pages

1. Add to `vite.config.ts`:
   ```typescript
   export default defineConfig({
     base: '/repository-name/',
     // ... rest of config
   })
   ```

2. Build and deploy:
   ```bash
   pnpm build
   npx gh-pages -d dist
   ```

### Option 4: Custom Server (cPanel, VPS, etc.)

1. Build the project:
   ```bash
   pnpm build
   ```

2. Upload contents of `dist/` folder to your web server

3. Point your domain to the uploaded directory

## 📝 Customization Guide

### Update Company Information

Edit `src/components/Footer.tsx` and `src/components/Contact.tsx`:

```typescript
// Contact information
email: 'contact@shlomoholdingsservicesllc.com'
phone: '954-743-7632'
address: '609 North 46th Avenue, Hollywood, FL 33021'
```

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: colors.blue,    // Change brand colors here
  accent: colors.purple,
  // ...
}
```

### Update Images

Replace images in `public/imgs/` directory:
- Maintain same filenames OR
- Update image paths in components

### Modify Services

Edit `src/components/Services.tsx` to add/remove/modify service offerings.

### Update Testimonials

Edit `src/components/Testimonials.tsx` to change client testimonials.

## 🔧 Technical Stack

- **Framework:** React 18
- **Build Tool:** Vite 6
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Animations:** Framer Motion

## 📁 Project Structure

```
shlomo-holdings-website/
├── public/
│   └── imgs/              # All images
├── src/
│   ├── components/        # React components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   ├── Services.tsx
│   │   ├── Testimonials.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
├── tailwind.config.js    # Tailwind configuration
└── package.json          # Dependencies
```

## 🆘 Troubleshooting

### Issue: Port 5173 already in use
**Solution:** Change port in `vite.config.ts` or stop other Vite processes

### Issue: Images not loading
**Solution:** Verify images exist in `public/imgs/` and paths are correct

### Issue: Build errors
**Solution:** 
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

### Issue: Styles not applying
**Solution:** Clear cache and rebuild:
```bash
rm -rf dist .vite
pnpm build
```

## 📞 Support

- **Repository:** https://github.com/shlomoholdingsllc-ai/shlomoholdings
- **Live Demo:** https://hyxj6s5mlo44.space.minimax.io

## 📄 License

© 2025 Shlomo Holdings LLC. All rights reserved.

---

**Created by:** MiniMax Agent
**Date:** October 22, 2025
**Version:** Premium 2.0 with updated email
