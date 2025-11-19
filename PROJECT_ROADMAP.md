# Portfolio Project Roadmap

## 📋 Project Overview
This is a **React + TypeScript + Vite** portfolio website for Harshali Kadam. It's a **static Single Page Application (SPA)** with no backend requirements, making it ideal for static hosting platforms.

---

## 🏗️ Project Architecture

### **Build System & Configuration**
- **Vite** (v5.4.19) - Modern build tool and dev server
- **TypeScript** - Type-safe development
- **React 18** - UI framework
- **Tailwind CSS** - Utility-first CSS framework
- **SWC** - Fast React compiler (via @vitejs/plugin-react-swc)

---

## 📁 File Structure & Purpose

### **Root Level Files**

#### `package.json`
- **Purpose**: Project dependencies and scripts
- **Key Scripts**:
  - `npm run dev` - Start development server (port 8080)
  - `npm run build` - Production build (outputs to `dist/`)
  - `npm run preview` - Preview production build locally
- **Deployment Note**: After `npm run build`, deploy the `dist/` folder

#### `vite.config.ts`
- **Purpose**: Vite configuration
- **Key Settings**:
  - Dev server: `localhost:8080`
  - Path alias: `@/` → `./src/`
  - React SWC plugin for fast compilation
- **Deployment Note**: No special config needed for static hosting

#### `index.html`
- **Purpose**: HTML entry point
- **Contains**: 
  - Meta tags (SEO, Open Graph, Twitter)
  - Google Fonts (Playfair Display, Inter)
  - Root div for React mounting
- **Deployment Note**: Vite processes this during build

#### `tailwind.config.ts`
- **Purpose**: Tailwind CSS configuration
- **Features**:
  - Custom color scheme (dark mode support)
  - Custom fonts (Playfair Display, Inter)
  - Custom animations (fade-in-up, glow-pulse, float)
  - Shadcn UI theme integration

#### `tsconfig.json` / `tsconfig.app.json` / `tsconfig.node.json`
- **Purpose**: TypeScript configuration
- **Deployment Note**: Only needed for development/build, not runtime

#### `postcss.config.js`
- **Purpose**: PostCSS configuration for Tailwind
- **Deployment Note**: Used during build process only

#### `eslint.config.js`
- **Purpose**: ESLint linting rules
- **Deployment Note**: Development tool only

#### `components.json`
- **Purpose**: Shadcn UI component configuration
- **Deployment Note**: Used for component generation, not runtime

---

### **`/src` - Source Code Directory**

#### `main.tsx`
- **Purpose**: React application entry point
- **Function**: Renders `<App />` into `#root` div
- **Imports**: `index.css` for global styles

#### `App.tsx`
- **Purpose**: Main application component
- **Contains**:
  - React Router setup (BrowserRouter)
  - React Query provider
  - Toast notifications (Toaster, Sonner)
  - Tooltip provider
  - Route definitions:
    - `/` → Index page
    - `*` → 404 Not Found page

#### `index.css`
- **Purpose**: Global CSS styles
- **Contains**: 
  - CSS variables for theming
  - Tailwind directives
  - Custom animations

#### `App.css`
- **Purpose**: Additional app-specific styles (if any)

---

### **`/src/pages` - Page Components**

#### `index.tsx`
- **Purpose**: Main portfolio landing page
- **Contains**:
  - HeroSection component
  - SkillsSection component
  - ProjectsSection component
  - Footer with contact info

#### `NotFound.tsx`
- **Purpose**: 404 error page for unmatched routes

---

### **`/src/components` - Reusable Components**

#### **Main Sections:**
- `HeroSection.tsx` - Hero/header section with introduction
- `SkillsSection.tsx` - Skills showcase section
- `ProjectsSection.tsx` - Projects portfolio grid with video modals

#### **`/src/components/ui` - Shadcn UI Component Library**
- **Purpose**: Pre-built, accessible UI components
- **Components**: 50+ components including:
  - Buttons, Cards, Dialogs, Forms
  - Navigation, Menus, Tooltips
  - Tables, Tabs, Accordions
  - And many more...
- **Note**: These are Radix UI primitives styled with Tailwind

---

### **`/src/hooks` - Custom React Hooks**

- `use-mobile.tsx` - Hook to detect mobile devices
- `use-toast.ts` - Toast notification hook

---

### **`/src/lib` - Utility Functions**

- `utils.ts` - Utility functions (likely includes `cn()` for className merging)

---

### **`/src/assets` - Static Assets**

- `react.svg` - React logo asset

---

### **`/public` - Public Assets**

- `resume.pdf` - Resume file (accessible at `/resume.pdf`)
- `vite.svg` - Vite logo

**Note**: Files in `/public` are copied to root of `dist/` during build

---

## 🚀 Deployment Considerations

### **What This Project Is:**
✅ **Static Site** - No server-side code  
✅ **Client-Side Rendered** - React SPA  
✅ **No Backend Required** - Pure frontend  
✅ **No Database** - All data is hardcoded in components  
✅ **No API Calls** - No external data fetching (except YouTube embeds)  

### **Build Output:**
- Running `npm run build` creates a `dist/` folder
- Contains: HTML, CSS, JS bundles, and public assets
- Ready to deploy to any static hosting service

---

## 🌐 Recommended Deployment Platforms

### **Best Options (Free Tier Available):**

1. **Vercel** ⭐ (Recommended)
   - Zero-config deployment
   - Automatic HTTPS
   - Global CDN
   - Perfect for React/Vite apps
   - Connect GitHub repo for auto-deploy

2. **Netlify**
   - Similar to Vercel
   - Drag-and-drop or Git integration
   - Form handling (not needed here)
   - Good for static sites

3. **GitHub Pages**
   - Free with GitHub account
   - Simple setup
   - Custom domain support
   - Note: Requires `base` config in `vite.config.ts` for subdirectory

4. **Cloudflare Pages**
   - Fast global CDN
   - Free tier
   - Git integration
   - Good performance

5. **AWS S3 + CloudFront**
   - More setup required
   - Pay-as-you-go (very cheap for low traffic)
   - Full control

### **Build Command for Deployment:**
```bash
npm run build
```

### **Output Directory:**
```
dist/
```

### **No Environment Variables Needed:**
- No `.env` files required
- No API keys to configure
- No database connections

---

## 📝 Deployment Checklist

- [ ] Run `npm install` to install dependencies
- [ ] Run `npm run build` to create production build
- [ ] Test locally with `npm run preview`
- [ ] Upload `dist/` folder to hosting platform
- [ ] Configure custom domain (optional)
- [ ] Set up HTTPS (usually automatic)
- [ ] Test all routes and components

---

## 🔧 Potential Deployment Issues & Solutions

### **Issue: 404 on Refresh (SPA Routing)**
- **Problem**: React Router uses client-side routing
- **Solution**: Configure hosting to redirect all routes to `index.html`
  - Vercel/Netlify: Automatic
  - GitHub Pages: Add `_redirects` file
  - Nginx: Add `try_files $uri /index.html;`

### **Issue: Base Path for Subdirectory**
- **Problem**: If deploying to `/portfolio/` subdirectory
- **Solution**: Add `base: '/portfolio/'` to `vite.config.ts`

### **Issue: Font Loading**
- **Solution**: Google Fonts are loaded from CDN, should work automatically

---

## 📊 Project Dependencies Summary

- **Runtime**: React, React DOM, React Router
- **UI**: Radix UI primitives, Tailwind CSS, Shadcn components
- **Utilities**: Framer Motion (animations), Lucide React (icons)
- **Build**: Vite, TypeScript, PostCSS, Autoprefixer

**Total Bundle Size**: Moderate (check with `npm run build` to see actual size)

---

## 🎯 Quick Start for Deployment

1. **Build the project:**
   ```bash
   npm install
   npm run build
   ```

2. **Deploy `dist/` folder** to your chosen platform

3. **That's it!** No server configuration needed.

---

## 💡 Recommendation

**Deploy to Vercel** - It's the easiest and most optimized for React/Vite applications. Just connect your GitHub repo and it handles everything automatically.

