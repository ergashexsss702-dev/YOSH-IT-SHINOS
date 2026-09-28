# Olimov Muhammadzoir — Coder & Developer Portfolio

> **"Learn. Build. Create."**  
> A premium, modern, responsive personal developer portfolio website for young Uzbek developer **Olimov Muhammadzoir** (13 years old, Ilmhub O'quv Markazi student, Namangan, Uzbekistan).

---

## 🌟 Highlights & Features

- **Multilingual Support (100% Comprehensive i18n)**:
  - 🇺🇿 **Uzbek Latin** (Default)
  - 🇷🇺 **Russian Cyrillic**
  - 🇬🇧 **English**
  - Instant toggle without page reload, saved in `localStorage`.
- **Dual Theme System**:
  - 🌙 **Dark Mode** (Deep navy/black, electric blue, purple accents & cyan glow)
  - ☀️ **Light Mode** (Clean slate white, crisp typography & subtle shadows)
  - Preserved in `localStorage` and respects system preferences.
- **Modern UI & Aesthetic**:
  - Glassmorphism panels & subtle background grid
  - Floating tech badges & rotating developer titles
  - Custom desktop cursor with trailing dot (disabled on touch devices)
  - Scroll progress indicator bar
  - Interactive Developer Terminal with executable bash-style commands (`whoami`, `skills`, `location`, `status`, etc.)
  - Interactive Technology Marquee ticker (pauses on hover)
  - Filterable Projects showcase with details modal and disabled state protection
  - Direct contacts with one-click copy to clipboard (Telegram, Phone, Instagram)
  - Accessible Easter Egg badge triggered by `<OM/>` monogram.
- **Mobile-First & Ultra Responsive**:
  - Optimized for 320px up to 4K displays (iPhone SE, Pro Max, Galaxy, iPad, laptops, 4K monitors)
  - Zero layout shift, no horizontal overflow.

---

## 🚀 Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS v4 + Design Tokens
- **Icons**: Lucide React
- **Typography**: Space Grotesk (Headings), Plus Jakarta Sans (Body), JetBrains Mono (Code/Terminal)
- **Deployment**: Vercel & GitHub Pages ready

---

## 💻 Local Development

Clone the repository and install dependencies:

```bash
# Clone repository
git clone https://github.com/YOUR_GITHUB_USERNAME/olimov-muhammadzoir-portfolio.git

# Enter project directory
cd olimov-muhammadzoir-portfolio

# Install packages
npm install

# Start local dev server
npm run dev
```

Open `http://localhost:3000` in your browser.

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 📦 GitHub Deployment Guide / GitHub'ga Joylash Qo'llanmasi

### 🇺🇿 O'zbekcha:

Loyihani GitHub hisobingizga yuklash uchun quyidagi buyruqlarni terminalda bajaring:

```bash
# 1. Git'ni ishga tushirish
git init

# 2. Barcha fayllarni tayyorlash
git add .

# 3. Dastlabki commit qilish
git commit -m "Initial portfolio release for Olimov Muhammadzoir"

# 4. Asosiy tarmoqni main deb belgilash
git branch -M main

# 5. O'zingiz yaratgan GitHub omboriga (repository) ulash
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/olimov-muhammadzoir-portfolio.git

# 6. GitHub'ga yuklash
git push -u origin main
```

---

### 🇬🇧 English:

To push this codebase to your own GitHub repository, execute the following commands in your terminal:

```bash
# 1. Initialize git
git init

# 2. Stage all project files
git add .

# 3. Create initial commit
git commit -m "Initial portfolio release for Olimov Muhammadzoir"

# 4. Rename default branch to main
git branch -M main

# 5. Link your GitHub remote repository
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/olimov-muhammadzoir-portfolio.git

# 6. Push to GitHub
git push -u origin main
```

---

## ⚡ Vercel Deployment Guide / Vercel'ga Joylash Qo'llanmasi

### 🇺🇿 O'zbekcha:

1. [Vercel](https://vercel.com) saytiga kiring va GitHub profilingiz orqali ro'yxatdan o'ting / kiring.
2. **"Add New..."** tugmasini bosing va **"Project"** bo'limini tanlang.
3. Yuqorida ochgan `olimov-muhammadzoir-portfolio` GitHub omboringizni topib, **"Import"** tugmasini bosing.
4. **Framework Preset** sifatida `Vite` avtomatik aniqlanadi.
5. **"Deploy"** tugmasini bosing.
6. 1-2 daqiqada saytingiz butun dunyoga bepul va xavfsiz (HTTPS) domen bilan ochiladi (masalan: `muhammadzoir.vercel.app`)!

---

### 🇬🇧 English:

1. Visit [Vercel](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New..."** and choose **"Project"**.
3. Import your `olimov-muhammadzoir-portfolio` repository.
4. Framework preset will automatically be detected as `Vite`.
5. Click **"Deploy"**.
6. Within a minute, your portfolio will be live with free global CDN and HTTPS!

---

## 🛠️ Project Customization / O'zgartirishlar Kiritish

- **Add New Projects**: Edit `src/data/projects.ts` and add translations in `src/i18n/uz.ts`, `src/i18n/ru.ts`, and `src/i18n/en.ts`.
- **Update Skills**: Edit `src/data/skills.ts`.
- **Change Socials / Phone**: Update the links in `src/components/Contact.tsx` and `src/components/Hero.tsx`.

---

## 📄 License & Attribution

Designed and engineered for **Olimov Muhammadzoir** — 13-year-old developer from Namangan, Uzbekistan studying at **Ilmhub O'quv Markazi**.
All rights reserved © 2026.
