# Portfolio Deployment to Render with Docker

Your portfolio has been successfully configured for Docker deployment on Render!

## ✅ What's Been Done:
- Created Dockerfile for containerized deployment
- Created nginx configuration for proper routing
- All code pushed to GitHub: https://github.com/antonyathibana/portfolio

## 🚀 Deploy on Render

### Step 1: Create Render Web Service
1. Go to https://render.com
2. Sign up/Login with GitHub
3. Click **"New +"** → **"Web Service"**
4. Select repository: **"antonyathibana/portfolio"**

### Step 2: Configure Service
Fill in these settings:
- **Name**: `portfolio`
- **Environment**: `Docker`
- **Region**: (Default - e.g., Oregon)
- **Branch**: `main`

### Step 3: Deploy
1. Click **"Create Web Service"**
2. Render will automatically build the Docker image
3. Wait for deployment (~3-5 minutes)

### Step 4: Access Your Site
Your live URL: `https://portfolio-<random>.onrender.com`

## 📁 Files Created:
- **Dockerfile** - Multi-stage build for production
- **nginx.conf** - Nginx configuration for SPA routing

## 🔧 Dockerfile Features:
- Node.js 18 Alpine for build stage
- Nginx Alpine for production
- Gzip compression
- Proper caching headers
- SPA routing support
- Security headers

## 🧪 Test Locally (Optional):
```bash
# Build Docker image
docker build -t portfolio .

# Run container
docker run -p 3000:3000 portfolio
```
Visit: http://localhost:3000

## 📝 Render Settings Summary:
```
Build Command: (leave empty for Docker)
Start Command: (leave empty for Docker)
Port: 3000
```

## 🔒 Troubleshooting:
- Build fails? Check Docker logs in Render dashboard
- 404 errors? nginx.conf handles SPA routing
- Port issues? Dockerfile exposes port 3000

## 🌐 Tech Stack:
- React 18
- Vite 5
- Tailwind CSS 3
- Framer Motion
- Docker
- Nginx

## ✨ Portfolio Features:
- Dark theme design
- Responsive layout
- Smooth animations
- Interactive components
- Skills showcase
- Project gallery
- Contact form

---

**Your portfolio is ready for production! 🎉**

