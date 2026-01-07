# HomeworkAI - Deployment Guide

## 📁 File Structure

Create this exact folder structure on your computer:

```
homework-ai/
├── api/
│   └── solve.js
├── public/
│   └── index.html
└── vercel.json
```

## 📋 Setup Instructions

### Step 1: Create the Folder Structure

1. Create a new folder called `homework-ai` on your computer
2. Inside it, create two folders: `api` and `public`
3. Create the files as shown in the artifacts above

### Step 2: Copy the Files

Copy each artifact into its corresponding file:

- **Artifact 1** → `api/solve.js`
- **Artifact 2** → `vercel.json` 
- **Artifact 3** → `public/index.html`

### Step 3: Get FREE Gemini API Key

1. Go to: https://makersuite.google.com/app/apikey
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the key (starts with `AIza...`)
5. Save it somewhere safe - you'll need it in Step 5

### Step 4: Deploy to Vercel

**Method A: Using Vercel Website (No Command Line)**

1. Go to https://vercel.com
2. Sign up (free) - use GitHub/Google/Email
3. Click "Add New..." → "Project"
4. Click "Browse" and select your `homework-ai` folder
5. Vercel will auto-detect the project
6. Continue to Step 5 before deploying

**Method B: Using Vercel CLI**

1. Install Node.js from https://nodejs.org
2. Open Terminal/Command Prompt
3. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
4. Navigate to your folder:
   ```bash
   cd path/to/homework-ai
   ```
5. Deploy:
   ```bash
   vercel
   ```
6. Continue to Step 5

### Step 5: Add Environment Variable

**CRITICAL: This keeps your API key secure!**

1. In Vercel dashboard, click on your project
2. Go to "Settings" → "Environment Variables"
3. Click "Add New"
4. Enter:
   - **Name:** `GEMINI_API_KEY`
   - **Value:** Your Gemini API key from Step 3
   - **Environments:** Select all (Production, Preview, Development)
5. Click "Save"
6. Go to "Deployments" tab → Click "..." → "Redeploy"

### Step 6: Test Your Site

Your site will be live at: `https://homework-ai-[your-username].vercel.app`

Test it:
1. Upload a homework image
2. Enter your grade level
3. Click "Generate Handwritten Answer"
4. Download the result!

## ✅ Features

- ✨ AI-powered homework solver using Google Gemini (FREE!)
- 📝 Handwritten-style answers on notebook paper
- 🎯 Grade-level appropriate responses
- 💾 Download answers as images
- 🚀 Fast, secure, and always online
- 🆓 Completely FREE to use (1,500 requests/day)

## 🔒 Security

- API key is stored securely in Vercel environment variables
- Never exposed to users or in frontend code
- CORS enabled for secure cross-origin requests

## 🆘 Troubleshooting

**Upload button not working?**
- Make sure you copied the complete `index.html` file
- Check browser console for errors (F12)

**"API key not configured" error?**
- Make sure you added `GEMINI_API_KEY` in Vercel environment variables
- Redeploy after adding the key

**No answer generated?**
- Check that your Gemini API key is valid
- Make sure the image is clear and readable
- Try a different image format (JPEG works best)

## 📞 Support

If you need help:
1. Check the browser console (F12) for errors
2. Check Vercel deployment logs
3. Verify your API key is working at https://makersuite.google.com

## 🎉 Success!

Once deployed, share your site with students! It's:
- Free forever
- Always online
- Fast and reliable
- Secure and professional

---

**Made with ❤️ using Google Gemini AI**
