# 🌌 Harsha Shetty | Premium Space-Themed Developer Portfolio

An ultra-premium, interactive developer portfolio built using **Next.js 16 (React 19)**, **TypeScript 6**, **Tailwind CSS**, and **Three.js**. Inspired by deep space aesthetics, this landing page delivers an engaging, immersive user experience utilizing rich animations, custom 3D rendering, and responsive visual design.

---

## 🚀 Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Framework** | ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) ![React 19](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) |
| **Languages** | ![TypeScript 6](https://img.shields.io/badge/TypeScript_6-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) |
| **Styling & Motion** | ![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Framer Motion 12](https://img.shields.io/badge/Framer_Motion_12-00F0FF?style=for-the-badge&logo=framer&logoColor=white) |
| **3D & Vector Graphics** | ![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white) ![Lottie](https://img.shields.io/badge/Lottie-00FF87?style=for-the-badge) |
| **Monitoring & Deploy** | ![Sentry](https://img.shields.io/badge/Sentry-362D59?style=for-the-badge&logo=sentry&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) |

---

## ✨ Primary Features

### 🌌 Drifting Spotlights & Aurora Backdrop
The entire portfolio utilizes a custom-designed space backdrop that shifts dynamically behind content panels:
- Loop animations simulating drifting colorful nebulae (Purple, Blue, Pink, Cyan, and White).
- A scanning light-sweep vertical beam passing over an SVG radial star grid.
- Full glassmorphism panel overlay with high backdrop-blur saturation.

### ⏱️ Custom-Simulated Core Preloader
A bespoke full-screen splash screen managing layout initialization:
- A premium, non-linear progression counter mimicking complex software systems loading.
- Animated system diagnostic logs displaying boot stages (e.g. *Awakening creative consciousness*, *Fetching dynamic experiences*).
- Complete body scroll locking that releases smoothly upon transition completion.

### 🪐 3D Planet Globe Rendering
- Features an interactive, auto-rotating 3D earth globe constructed using `@react-three/fiber` and `three-globe`.
- Includes customized hover pins, dynamic texture loading, and performance controls.

### 🔗 Integrated Teammate/Developer Hub
- Rebranded client testimonials to focus on shared professional networks.
- Neon glow card profiles referencing developer platforms including **GitHub**, **LinkedIn**, **LeetCode**, and **Codeforces**.

---

## 🛠️ Local Development & Quick Start

Follow these steps to run the portfolio locally on your machine:

### 1. Prerequisites
Ensure you have **Node.js 18+** installed.

### 2. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build Production Bundle
To create a optimized static production output:
```bash
npm run build
```

---

## ⚙️ Project File Map

```
├── app/                  # Next.js 16 App Router pages and configurations
│   ├── not-found.tsx     # Customized space-themed 404 page
│   ├── layout.tsx        # Standard document layout with optimized SEO metadata
│   └── page.tsx          # Homepage with structural drift grids
├── components/           # Core layout components (Hero, Skills, Projects, Footer)
│   ├── ui/               # Reusable decorative UI structures (3D Pin, Globe, Navbar)
│   └── Loader.tsx        # Framer-Motion driven interactive preloader
├── public/               # Static assets (Resume PDF, project graphics, SVG icons)
└── tailwind.config.ts    # Tailwind styling tokens and animations
```

---
*Created with 💙 by [Harsha Shetty](https://github.com/notharshagithub).*
