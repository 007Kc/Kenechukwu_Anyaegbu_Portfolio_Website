import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KC | Developer & AI Builder",
  description:
    "Portfolio of Kenechukwu Anyaegbu (KC), a Computer Science student, developer, and aspiring AI engineer building projects across software development, data analysis, machine learning, and intelligent systems.",

  keywords: [
    "Kenechukwu Anyaegbu",
    "KC",
    "Developer",
    "AI Builder",
    "Machine Learning",
    "Python",
    "Data Analysis",
    "Software Development",
    "Computer Science",
    "Portfolio",
  ],

  openGraph: {
    title: "KC | Developer & AI Builder",
    description:
      "Exploring software, data, and AI through projects while building toward a career in AI engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
