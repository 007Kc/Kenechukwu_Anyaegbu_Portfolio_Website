import type { Project, TimelineItem, SkillCategory, SocialLink } from "@/types";

// ============================================================
//  ADD / EDIT PROJECTS HERE
//  Just add a new object to the array below.
//  Fields:
//    id          - unique number (increment from last)
//    featured    - true = appears larger in the grid
//    emoji       - visual icon for the card
//    title       - project name
//    desc        - short card description
//    fullDesc    - longer text shown in the modal
//    stack       - array of tech used
//    tags        - one or more of: "ai" | "web" | "automation" | "data"
//    status      - "Live" | "In Progress" | "Archived"
//    demo        - URL to live demo (optional)
//    github      - URL to GitHub repo (optional)
// ============================================================

export const PROJECTS: Project[] = [
  {
    id: 1,
    featured: true,
    emoji: "🤖",
    title: "AI Assistant Platform",
    desc: "A multi-modal AI assistant with persistent memory, tool use, and customizable personas. Built for power users who want more than a chatbox.",
    fullDesc:
      "Full-stack AI assistant with RAG architecture, streaming responses, conversation memory, and plugin support. Supports GPT-4, Claude, and open-source models via a unified API layer. Users can define custom personas, attach documents, and trigger automation workflows directly from chat.",
    stack: ["Python", "LangChain", "FastAPI", "PostgreSQL", "React"],
    tags: ["ai"],
    status: "Live",
    demo: "#",
    github: "#",
  },
  {
    id: 2,
    featured: true,
    emoji: "⚡",
    title: "Automation Engine",
    desc: "No-code automation builder connecting 50+ APIs. Drag-and-drop workflows with AI-powered step suggestions.",
    fullDesc:
      "Visual workflow builder for automating repetitive tasks. Connect Slack, Gmail, Notion, Airtable, and more. AI suggests next steps based on workflow context. Supports parallel branches, conditional logic, and scheduled triggers. Built on a Celery + Redis task queue for reliability at scale.",
    stack: ["Python", "FastAPI", "React", "Redis", "Celery"],
    tags: ["automation", "ai"],
    status: "In Progress",
    demo: "#",
    github: "#",
  },
  {
    id: 3,
    featured: false,
    emoji: "📊",
    title: "Data Pipeline Dashboard",
    desc: "Real-time data ingestion, cleaning, and visualization pipeline with anomaly detection powered by ML.",
    fullDesc:
      "ETL pipeline with visual monitoring, automatic data quality checks, and ML-based anomaly alerts. Processes millions of rows daily across multiple sources. Includes a drag-and-drop dashboard builder for non-technical stakeholders.",
    stack: ["Python", "Pandas", "SQL", "Plotly", "Airflow"],
    tags: ["data", "ai"],
    status: "Live",
    demo: "#",
    github: "#",
  },
  {
    id: 4,
    featured: false,
    emoji: "🌐",
    title: "AI-Powered Web Scraper",
    desc: "Intelligent scraper that understands page structure using LLMs — no selectors needed. Just describe what you want.",
    fullDesc:
      "Natural language-driven web scraper. Describe the data you need, and the AI figures out the selectors and structure automatically. Handles JavaScript-heavy pages via Playwright. Exports to JSON, CSV, or directly to a database.",
    stack: ["Python", "Playwright", "OpenAI", "SQLite"],
    tags: ["ai", "automation"],
    status: "Live",
    demo: "#",
    github: "#",
  },
  {
    id: 5,
    featured: false,
    emoji: "🔍",
    title: "Prompt Engineering Toolkit",
    desc: "A comprehensive library of prompt templates, evaluation tools, and a playground for testing prompts across multiple models.",
    fullDesc:
      "Production-grade prompt management system with A/B testing, version control, cost tracking, and performance benchmarks across models. Supports OpenAI, Anthropic, and local LLMs. Team collaboration features included.",
    stack: ["Python", "Streamlit", "OpenAI", "Anthropic", "SQLite"],
    tags: ["ai"],
    status: "Live",
    demo: "#",
    github: "#",
  },
  {
    id: 6,
    featured: false,
    emoji: "📱",
    title: "SaaS Landing Page Builder",
    desc: "AI-generates full landing page copy and layout from a single product description. Export to React or plain HTML.",
    fullDesc:
      "Describe your product, and AI generates compelling copy, section order, and responsive layout. Export-ready code in seconds. Supports custom brand colors, fonts, and tone of voice settings.",
    stack: ["Next.js", "TypeScript", "OpenAI", "Tailwind"],
    tags: ["web", "ai"],
    status: "In Progress",
    demo: "#",
    github: "#",
  },
];

// ============================================================
//  TIMELINE — edit your experience/milestones here
// ============================================================

export const TIMELINE: TimelineItem[] = [
  {
    year: "2024 — Present",
    role: "AI Developer & Builder",
    company: "Independent / Freelance",
    desc: "Building AI-powered products, automation pipelines, and integrations for clients and personal projects. ",
    accent: "primary",
  },
  {
    year: "2023",
    role: "AI & Automation Projects",
    company: "Self-directed",
    desc: "Deep dive into prompt engineering, AI integrations, and building automation tools.",
    accent: "secondary",
  },
  {
    year: "2022",
    role: "Web Development & Data",
    company: "Foundational Phase",
    desc: "Mastered Python, SQL, web fundamentals, and data analysis. Built first real projects and discovered a passion for where software meets intelligence.",
    accent: "tertiary",
  },
  {
    year: "2021",
    role: "Started Coding",
    company: "The Beginning",
    desc: "First lines of code. First bugs. First breakthroughs. Fell in love with building things from nothing — and never looked back.",
    accent: "primary",
  },
];

// ============================================================
//  SKILLS — edit categories and percentages here
// ============================================================

export const SKILLS: SkillCategory[] = [
  {
    cat: "AI & LLMs",
    color: "#00f5c4",
    items: [
      { name: "Web Development", pct: 95 },
      { name: "Data Analysis", pct: 85 },
      { name: "Game Development", pct: 92 },
      { name: "Prompt Engineering", pct: 80 },
    ],
  },
  {
    cat: "Backend",
    color: "#7b61ff",
    items: [
      { name: "Python", pct: 95 },
      
      { name: "SQL / PostgreSQL", pct: 85 },
     
    ],
  },
  {
    cat: "Frontend",
    color: "#ff6b6b",
    items: [
      { name: "React / Next.js", pct: 75 },
      { name: "HTML / CSS", pct: 85 },
      { name: "Tailwind CSS", pct: 80 },
      { name: "TypeScript", pct: 70 },
    ],
  },
  {
    cat: "Data & Automation",
    color: "#ffc850",
    items: [
      { name: "Pandas / NumPy", pct: 88 },
      { name: "Data Cleaning", pct: 90 },
      { name: "Automation Scripts", pct: 92 },
      
    ],
  },
];

// ============================================================
//  SOCIAL LINKS — update with your real URLs
// ============================================================

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/007Kc", icon: "github" },
  { label: "LinkedIn", href: "www.linkedin.com/in/kenechuwku-anyaegbu-84129a36a", icon: "linkedin" },
  { label: "Twitter / X", href: "https://x.com/KC_007_", icon: "twitter" },
  { label: "Email", href: "mailto:kenechukwuanyaegbukc@gmail.com", icon: "mail" },
];

// ============================================================
//  OWNER INFO — update your personal details here
// ============================================================

export const OWNER = {
  name: "Kc",
  role: "AI Developer / Builder / Tech Creator",
  email: "kenechukwuanyaegbukc@gmail.com",
  bio: [
    "I’m Kenechukwu Ronaldo, a developer and creative tech builder focused on combining modern web development, automation, AI, and data-driven solutions to help businesses grow smarter online.",
    "I create responsive websites, AI-powered chatbots, automated workflows, dashboards, and business analysis tools designed to improve efficiency and user experience. My goal isn’t just to build something that looks good, it’s to create digital solutions that genuinely help businesses save time, communicate better, and make smarter decisions.",
    "What makes my approach different is my mindset toward AI and technology. I embrace AI as a tool that enhances creativity, speeds up development, reduces unnecessary costs, and allows me to deliver better solutions more efficiently. Instead of resisting innovation, I use it strategically to create faster workflows and smarter experiences for clients.",
    "Beyond development, I’m constantly learning and expanding into areas like data analysis, AI systems, and intelligent automation because I believe the future belongs to people who can combine creativity with technology.",
    "Whether you’re a startup, business owner, recruiter, or someone with a vision to build, I’m always interested in creating modern, impactful, and future-focused projects.",
  ],
  typingPhrases: [
    
    "Automating the boring stuff...",
    "Shipping intelligent products...",
    "Engineering the future...",
  ],
};
