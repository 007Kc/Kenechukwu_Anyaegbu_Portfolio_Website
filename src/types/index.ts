export interface Project {
  id: number;
  featured: boolean;
  emoji: string;
  title: string;
  desc: string;
  fullDesc: string;
  stack: string[];
  tags: ProjectTag[];
  status: "Live" | "In Progress" | "Archived";
  demo?: string;
  github?: string;
  image?: string;
}

export type ProjectTag = "ai" | "web" | "automation" | "data";

export interface TimelineItem {
  year: string;
  role: string;
  company: string;
  desc: string;
  accent?: "primary" | "secondary" | "tertiary";
}

export interface SkillCategory {
  cat: string;
  color: string;
  items: { name: string; pct: number }[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}
