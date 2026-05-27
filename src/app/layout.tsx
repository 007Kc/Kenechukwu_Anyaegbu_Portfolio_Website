import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kace — AI Developer & Builder",
  description:
    "Portfolio of Kace — AI Developer, Builder, and Tech Creator specializing in LLMs, automation, APIs, and web experiences.",
  keywords: ["AI Developer", "Python", "LangChain", "Automation", "Portfolio"],
  openGraph: {
    title: "Kace — AI Developer & Builder",
    description: "Building AI-powered products and digital experiences.",
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
