# Kace Portfolio — Next.js

A futuristic, dark-mode AI developer portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open in browser
http://localhost:3000
```

---

## Project Structure

```
kace-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css       ← Global styles & CSS variables
│   │   ├── layout.tsx        ← Root layout + SEO metadata
│   │   └── page.tsx          ← Main page (assembles all sections)
│   │
│   ├── components/
│   │   └── sections/
│   │       ├── Navbar.tsx
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Projects.tsx  ← Project cards, filter, modal
│   │       ├── Experience.tsx
│   │       ├── Skills.tsx
│   │       ├── Contact.tsx
│   │       └── Footer.tsx
│   │
│   ├── data/
│   │   └── index.ts          ← ⭐ EDIT THIS FILE to update content
│   │
│   ├── lib/
│   │   └── useInView.ts      ← Scroll animation hook
│   │
│   └── types/
│       └── index.ts          ← TypeScript types
│
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

---

## ⭐ How to Add a New Project

Open `src/data/index.ts` and add an object to the `PROJECTS` array:

```ts
{
  id: 7,                    // increment from last id
  featured: false,          // true = larger card
  emoji: "🔥",
  title: "My New Project",
  desc: "Short description shown on the card.",
  fullDesc: "Longer description shown in the modal popup.",
  stack: ["Python", "FastAPI", "React"],
  tags: ["ai", "web"],      // "ai" | "web" | "automation" | "data"
  status: "Live",           // "Live" | "In Progress" | "Archived"
  demo: "https://your-demo.com",
  github: "https://github.com/your/repo",
},
```

That's it. No other files to touch.

---

## Updating Other Content

Everything is in `src/data/index.ts`:

| What to change | Where |
|---|---|
| Projects | `PROJECTS` array |
| Timeline / experience | `TIMELINE` array |
| Skill categories & levels | `SKILLS` array |
| Social links | `SOCIAL_LINKS` array |
| Name, bio, email, typing phrases | `OWNER` object |

---

## Deploying to Vercel (Free)

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Click Deploy — Vercel auto-detects Next.js

Your portfolio will be live at `your-project.vercel.app` in ~2 minutes.

---

## Design System

Colors are defined as CSS variables in `src/app/globals.css`:

```css
--accent:  #00f5c4   /* teal green — primary accent */
--accent2: #7b61ff   /* purple     — secondary accent */
--accent3: #ff6b6b   /* coral red  — tertiary accent */
--bg:      #080810   /* main dark background */
--muted:   #7070a0   /* muted text */
```

Change these to completely retheme the site.

---

## Tech Stack

- **Next.js 14** — App Router, SSR, SEO
- **TypeScript** — type-safe everything
- **Tailwind CSS** — utility-first styling
- **Space Mono** — monospace body font (Google Fonts)
- **Syne** — display/heading font (Google Fonts)
- **Custom `useInView` hook** — scroll-triggered animations (no extra libraries)
