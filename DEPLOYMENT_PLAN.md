# Deployment Plan - GitHub Update & Render Redeploy

## Task Summary
Update portfolio GitHub repository and redeploy to Render

## Changes to Commit
- `src/components/About.jsx`: Updated "Data Science" to "Cognitive System" in education description

## Deployment Steps

### Step 1: Git Operations
```bash
# Stage About.jsx changes (excluding .DS_Store)
git add src/components/About.jsx

# Commit changes
git commit -m "Update education: Data Science → Cognitive System"

# Push to GitHub
git push origin main
```

### Step 2: Render Redeploy
Since Render auto-deploys from GitHub:
1. Go to Render Dashboard: https://dashboard.render.com
2. Select your `portfolio` web service
3. Click "Manual Deploy" → "Deploy latest commit"
4. Wait for deployment to complete (~3-5 minutes)

### Step 3: Verify Deployment
- Check Render logs for successful build
- Visit live URL: https://portfolio-<random>.onrender.com
- Verify the "Cognitive System" change is live

## GitHub Remote
- Repository: https://github.com/antonyathibana/portfolio
- Branch: main

## Render Configuration
- Environment: Docker
- Auto-deploy: Enabled (on push to main)

