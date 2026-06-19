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
  // Placeholder projects removed from the live portfolio for now.
  // Add real projects here later using the same object shape:
  //
  // {
  //   id: 1,
  //   featured: true,
  //   emoji: "🤖",
  //   title: "Recommendation System",
  //   desc: "Short project summary.",
  //   fullDesc: "Longer project description for the modal.",
  //   stack: ["Python", "Pandas", "Scikit-learn"],
  //   tags: ["ai", "data"],
  //   status: "Live",
  //   demo: "#",
  //   github: "#",
  // },
];

// ============================================================
//  TIMELINE — edit your experience/milestones here
// ============================================================

export const TIMELINE: TimelineItem[] = [
{
year: "Jul 2026 — Present",
role: "Backend AI Engineering Intern",
company: "FlyRank AI",
desc: "Selected for FlyRank's AI Internship Program to gain hands-on experience building and understanding real-world AI systems under industry mentorship.",
accent: "primary",
},
{
year: "May 2026",
role: "AI Intern",
company: "DecodeLabs",
desc: "Worked on AI-focused projects and software engineering workflows while gaining practical exposure to recommendation systems and machine learning concepts.",
accent: "secondary",
},
{
year: "Apr – Jun 2026",
role: "Project Builder",
company: "Personal Projects",
desc: "Built an OCR system for extracting WAEC questions, a portfolio website, and a recommendation system while strengthening Python and software development skills.",
accent: "tertiary",
},
{
year: "2025",
role: "Data Analysis Foundations",
company: "Self-Learning",
desc: "Learned SQL and data analysis, culminating in a data-cleaning project using real-world layoff data.",
accent: "primary",
},
{
year: "Nov 2024",
role: "Started Programming",
company: "Computer Science Journey",
desc: "Began learning Python shortly after starting university and developed an interest in software development and AI.",
accent: "secondary",
},
];


// ============================================================
//  SKILLS — edit skill categories and technologies here
// ============================================================

export const SKILLS: SkillCategory[] = [
  {
    cat: "AI & Machine Learning",
    color: "#00f5c4",
    desc: "Areas I am actively building around through projects, internship work, and applied learning.",
    items: [
      "Machine Learning",
      "Recommendation Systems",
      "OCR & Document Processing",
      "AI Applications",
    ],
  },
  {
    cat: "Programming",
    color: "#7b61ff",
    desc: "Core languages and tools I use to solve problems, structure logic, and build reliable projects.",
    items: ["Python", "Java","Git"],
  },
  {
    cat: "Data Analytics",
    color: "#ffc850",
    desc: "Techniques and libraries I use to clean, explore, and understand data before turning it into insight.",
    items: ["Data Analysis", "Data Cleaning","Excel", "Sql"],
  },
  {
    cat: "Software Development",
    color: "#ff6b6b",
    desc: "Frontend and web technologies I use to turn ideas into responsive, usable digital products.",
    items: [
      "Web Development",
      "HTML & CSS",
      "React / Next.js",
      "TypeScript",
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
  { label: "WhatsApp", href: "https://wa.me/2347047431540", icon: "whatsapp" },
  { label: "Email", href: "kenechukwuanyaegbukc@gmail.com", icon: "mail" },
];

// ============================================================
//  OWNER INFO — update your personal details here
// ============================================================

export const OWNER = {
  name: "Kenechukwu Ronaldo Anyaegbu ",
  role:  "Developer • AI Builder • Computer Science Student",
  email: "kenechukwuanyaegbukc@gmail.com",
  bio: [
"Hi, I'm Kenechukwu Ronaldo Anyaegbu (Kc), a Computer Science student, developer, and aspiring AI engineer passionate about building technology that solves real problems.",

"My journey spans software development, data analysis, machine learning, and intelligent automation. I enjoy turning ideas into practical solutions, whether it's developing applications, analyzing data, creating recommendation systems, or experimenting with AI-powered tools.",

"Through personal projects, coursework, and internship experiences, I've worked on recommendation systems, machine learning models, OCR-based document extraction tools, and data-cleaning projects. Each project helps me deepen my understanding of how software, data, and AI can work together to create meaningful impact.",

"Beyond technical skills, I'm passionate about continuous learning, sharing my journey, and collaborating with people who are building ambitious ideas. I believe the future belongs to those who can combine creativity, problem-solving, and technology.",

"I'm currently focused on growing as a developer and AI builder while exploring opportunities for internships, collaborations, and impactful projects."


  ],
  typingPhrases: [
"Building with software, data & AI...",
"Learning. Building. Improving...",
"Turning ideas into real projects...",
"Exploring the future of AI...",
"Creating solutions through code..."
],

};
