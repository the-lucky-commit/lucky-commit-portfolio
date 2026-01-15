# Lucky.commit Portfolio

Modern portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm start
```

## 📦 Deploy to Vercel

### Method 1: Using Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Method 2: Using GitHub
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Click "Deploy"

## 📁 Project Structure

```
lucky-commit-portfolio/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── public/              # Static files
├── package.json         # Dependencies
├── next.config.js       # Next.js config
├── tailwind.config.js   # Tailwind config
└── tsconfig.json        # TypeScript config
```

## 🎨 Customization

### Update Content
Edit `app/page.tsx` to update:
- Personal information
- Projects
- Skills
- Experience
- Contact links

### Change Colors
Main colors in the project:
- Background: `#0a0e1a`, `#0f1420`
- Accent: `cyan-400`, `cyan-500`
- Text: `white`, `gray-400`

## 📝 To-Do Before Deploy

- [ ] Update email in contact section
- [ ] Update GitHub link
- [ ] Update LinkedIn link
- [ ] Add real project images/links
- [ ] Update meta tags in `app/layout.tsx`
- [ ] Add Google Analytics (optional)
- [ ] Add custom domain (optional)

## 🔧 Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel

## 📄 License

MIT License - feel free to use this template for your own portfolio!

---

Built with ❤️ by lucky.commit