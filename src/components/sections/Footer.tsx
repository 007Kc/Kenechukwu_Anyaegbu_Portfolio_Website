"use client";

import { SOCIAL_LINKS } from "@/data";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      className="text-center py-8 px-4"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      {/* Logo */}
      <div
        className="text-xl font-extrabold mb-4"
        style={{
          fontFamily: "'Syne', sans-serif",
          background: "linear-gradient(135deg, var(--accent), var(--accent2))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        KC.
      </div>

      {/* Mini nav */}
      <nav className="flex justify-center gap-6 flex-wrap mb-6">
        {navLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="interactive-link text-xs tracking-widest uppercase transition-colors duration-300"
            style={{ color: "var(--muted)", textDecoration: "none" }}
          >
            {l.label}
          </a>
        ))}
      </nav>

      {/* Social icons */}
      <div className="flex justify-center gap-4 mb-6">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="interactive-link text-xs tracking-wider transition-colors duration-300"
            style={{ color: "var(--muted)", textDecoration: "none" }}
          >
            {link.label}
          </a>
        ))}
      </div>

      <p className="text-xs" style={{ color: "var(--muted)" }}>
        © 2026 · KC — Developer &amp; AI Builder · Built
        with ☕ &amp; curiosity
      </p>
    </footer>
  );
}
