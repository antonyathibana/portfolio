# Deployment Plan: Push Portfolio to GitHub & Host on Render

## Overview
This plan outlines the steps to push your React portfolio website to GitHub and deploy it on Render's free tier.

---

## Phase 1: GitHub Setup & Push

### Step 1.1: Initialize Git Repository
```bash
cd "/Users/antonyadith/Desktop/portfolio website"
git init
git add -A
git commit -m "Initial commit: Portfolio website with React, Vite, Tailwind CSS"
```

### Step 1.2: Create GitHub Repository
Using GitHub CLI:
```bash
gh repo create portfolio --public --description "My portfolio website built with React, Vite, and Tailwind CSS"
```

### Step 1.3: Set Main Branch & Push
```bash
git branch -M main
git remote add origin https://github.com/antonyathibana/portfolio.git
git push -u origin main
```

---

## Phase 2: Render Deployment Setup

### Step 2.1: Create Build Command
Your `package.json` already has a build script: `"build": "vite build"`

### Step 2.2: Create Start Command
For static site hosting on Render, no start command is needed. The build output will be served automatically.

### Step 2.3: Configure Vite for Production
Update `vite.config.js` to use correct base path for production:
```javascript
export default defineConfig({
  plugins: [react()],
  base: './',  // Add this for relative paths
  server: {
    port: 3000,
    open: true
  }
})
```

---

## Phase 3: Deploy on Render

### Step 3.1: Create Render Account & Connect GitHub
1. Go to https://render.com and sign up with GitHub
2. Click "New +" → "Web Service"
3. Connect your GitHub repository

### Step 3.2: Configure Build Settings
- **Build Command**: `npm install`
- **Start Command**: (leave empty for static site)
- **Root Directory**: (leave as default)

### Step 3.3: Deploy
- Click "Create Web Service"
- Render will build and deploy automatically
- Your site will be live at: `https://portfolio-<random>.onrender.com`

---

## Phase 4: Custom Domain (Optional)

### Step 4.1: Add Custom Domain in Render
1. Go to your web service dashboard
2. Click "Custom Domain"
3. Add your domain (e.g., antonyathibana.com)

### Step 4.2: Update DNS
Add the CNAME record provided by Render to your DNS provider.

---

## Quick Reference Commands

```bash
# Navigate to project
cd "/Users/antonyadith/Desktop/portfolio website"

# Initialize git
git init
git add -A
git commit -m "Initial commit: Portfolio website"

# Create GitHub repo and push
gh repo create portfolio --public --description "My portfolio website"
git branch -M main
git remote add origin https://github.com/antonyathibana/portfolio.git
git push -u origin main
```

---

## Estimated Time
- GitHub setup & push: 2-3 minutes
- Render deployment: 3-5 minutes (build time)
- Total: ~5-8 minutes

---

## Verification Checklist
- [ ] Git repository initialized
- [ ] All files committed
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Render account connected
- [ ] Web service created and configured
- [ ] Site successfully deployed and accessible

