# Dhiraj Khachane — Data Analyst & IT Engineer Portfolio

[![Portfolio Status](https://img.shields.io/badge/Status-Active%20%26%20Seeking%20Opportunities-2563eb)](https://www.linkedin.com/in/dhiraj-khachane-945318338)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React 19](https://img.shields.io/badge/React_19-20232A?logo=react&logoColor=61DAFB)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, minimalist developer portfolio for **Dhiraj Khachane** — Junior Data Analyst and Information Technology graduate. Engineered with sleek typography, interactive animated circular skill orbits with authentic tool logos, verified digital credentials modal, and a digital ATS-optimized resume generator with active hyperlinks.

---

## 🌟 Highlights & Features

- **Minimalist Aesthetic**: Clean typography with *Plus Jakarta Sans* and *JetBrains Mono*, subtle ambient glows, and dark/light theme switching.
- **Skills in Motion (Orbital Wheel)**:
  - Interactive, concentric 1:1 circular orbits with upright counter-rotation.
  - Authentic vector tool logos: **SQL**, **Python**, **Power BI**, **Google Sheets**, **Microsoft Excel**, **Scikit-Learn**, **Pandas**, **PostgreSQL**, **Git**, and **VS Code**.
  - Hover tooltips and click-to-inspect proficiency cards.
- **Featured Data Analytics Projects**:
  - **Online Food Delivery Analysis** (SQL, Google Sheets): Analyzed order volume, city revenue trends, restaurant performance, and customer spending distributions using multi-table JOINs, GROUP BY, HAVING, and subqueries.
  - **Product Recommendation System** (Python, TF-IDF, Cosine Similarity): Built on the MovieLens 100K dataset, implementing collaborative filtering and content-based recommendation workflows with automated CSV exports.
- **Verified Credentials & Certificate Viewer**:
  - Modal viewer displaying completion verification, credential ID, issuer details, issue dates, and validated competencies.
  - Direct live links to official verification portals and LinkedIn licenses & certifications.
- **Digital ATS Resume System**:
  - **Document View**: High-fidelity, paper-style in-browser preview.
  - **Digital Hyperlinks**: Active, clickable links for Phone (`tel:`), Email (`mailto:`), LinkedIn, GitHub, project repositories, and certificate verification.
  - **One-Click Vector PDF Export**: Pure selectable vector text generated via `jsPDF` with embedded PDF hyperlink annotations (`doc.link(...)`) that remain 100% parseable by ATS systems (Workday, Greenhouse, Lever).
  - **ATS Word (.doc) Exporter**: Downloadable Word document with formatted anchor tags.

---

## 🛠️ Tech Stack

- **Framework**: React 19 SPA
- **Language**: TypeScript 5+ (Strict typing)
- **Styling**: Tailwind CSS v4 with custom dark mode variants
- **Icons**: Lucide React & Handcrafted SVG Brand Tool Logos
- **Animation**: Motion & CSS Keyframe Orchestration
- **PDF Generation**: jsPDF (pure vector text & interactive hyperlink annotations)
- **Build Tool**: Vite 6+

---

## 🚀 Getting Started Locally

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18+ or 20+ recommended)
- `npm` or `pnpm` / `yarn`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/dhirajkhachane99/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) (or the port specified in terminal) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The compiled static output will be generated in the `dist/` directory, ready to deploy.

---

## 📦 How to Push to Your GitHub

Follow these quick steps to push this code directly to your GitHub account:

### Step 1: Create a New GitHub Repository
1. Log in to [GitHub](https://github.com/).
2. Click **New** (or visit [https://github.com/new](https://github.com/new)).
3. Repository name: `portfolio` (or `dhiraj-portfolio`).
4. Set visibility to **Public**.
5. Leave "Add a README file" **unchecked** (we already have this complete README).
6. Click **Create repository**.

### Step 2: Initialize Git and Push from Terminal

In your project directory, run:

```bash
# 1. Initialize git (if not already initialized)
git init

# 2. Stage all project files
git add .

# 3. Create initial commit
git commit -m "feat: complete Dhiraj Khachane Data Analyst Portfolio"

# 4. Set branch to main
git branch -M main

# 5. Connect your GitHub remote (replace with your repo URL)
git remote add origin https://github.com/dhirajkhachane99/portfolio.git

# 6. Push to GitHub
git push -u origin main
```

*(Note: When prompted for your GitHub password in the terminal, provide a [GitHub Personal Access Token (classic)](https://github.com/settings/tokens) with `repo` permissions).*

---

## 🌐 Deploy to Free Hosting

### Deploy to Vercel (Recommended)
1. Go to [Vercel](https://vercel.com/) and sign in with GitHub.
2. Click **Add New Project** and select your `portfolio` repository.
3. Framework Preset: **Vite**.
4. Click **Deploy**. Vercel will build and provide a live URL (e.g. `dhiraj-khachane.vercel.app`).

### Deploy to GitHub Pages
1. Install `gh-pages`:
   ```bash
   npm install -D gh-pages
   ```
2. In `package.json`, add:
   ```json
   "homepage": "https://dhirajkhachane99.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run `npm run deploy`.

---

## 👤 Author

**Dhiraj Khachane**
- **Role**: Data Analyst & Information Technology Engineer
- **Email**: [dhirajkhachane999@gmail.com](mailto:dhirajkhachane999@gmail.com)
- **Phone**: [+91-7264972005](tel:+917264972005)
- **LinkedIn**: [linkedin.com/in/dhiraj-khachane-945318338](https://www.linkedin.com/in/dhiraj-khachane-945318338)
- **GitHub**: [github.com/dhirajkhachane99](https://github.com/dhirajkhachane99)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
