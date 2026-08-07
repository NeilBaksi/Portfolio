<h2 align="center">
  Portfolio Website - v3<br/>
  <a href="https://snbaksi.com/" target="_blank">snbaksi.com</a>
</h2>

## TL;DR

Neil Baksi's personal portfolio — work experience, projects, resume, and technical skills. Migrated from a Vite SPA to Next.js (App Router, static export) for SEO/AEO crawlability while keeping the exact same look, feel, and Firebase deployment flow.

## Built With

-   Next.js (App Router, static export)
-   React
-   TypeScript
-   Three.js / React Three Fiber (raw WebGL character + physics-driven tech stack scene)
-   GSAP (ScrollSmoother, ScrollTrigger, SplitText)
-   Firebase Hosting

## Features

**🔍 SEO + AEO** — page content prerenders to static HTML at build time (crawlable by search engines and LLM answer engines), with Open Graph/Twitter metadata, canonical URL, JSON-LD (`Person`/`WebSite`), `sitemap.xml`, `robots.txt`, and `llms.txt`.

**♿ WCAG-conscious** — semantic landmarks, accessible names on icon-only links, `prefers-reduced-motion` support, normalized heading hierarchy, skip-to-content link.

**🎨 3D + motion** — an interactive WebGL character and a physics-based tech-stack scene, both client-rendered on top of the prerendered page shell.

**📱 Fully Responsive**

## Getting Started

Clone down this repository. You will need `node.js` and `git` installed globally on your machine.

## 🛠 Installation and Setup Instructions

1. Installation: `npm install`

2. In the project directory, run: `npm run dev`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Build & Deploy

`npm run deploy` builds a static export (`next build` → `out/`) and deploys it to Firebase Hosting.

## Usage Instructions

Open the project folder and navigate to `/src/components/`. <br/>
You will find all the components used and you can edit your information accordingly. Page composition and metadata live in `/app`.
