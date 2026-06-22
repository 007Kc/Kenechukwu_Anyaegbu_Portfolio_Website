"use client";
import { useRef } from "react";
import { useInView } from "@/lib/useInView";
import { SOCIAL_LINKS } from "@/data";

const CONTACT_COPY: Record<
  string,
  { title: string; desc: string; action: string }
> = {
  mail: {
    title: "Email",
    desc: "Best for internship opportunities, project work, and direct conversations.",
    action: "Send Email",
  },
  linkedin: {
    title: "LinkedIn",
    desc: "Connect professionally, follow my journey, or reach out about roles.",
    action: "Connect",
  },
  github: {
    title: "GitHub",
    desc: "Explore my code, projects, experiments, and learning progress.",
    action: "View GitHub",
  },
  twitter: {
    title: "X / Twitter",
    desc: "Follow updates, ideas, and what I am currently building.",
    action: "Follow",
  },
  whatsapp: {
    title: "WhatsApp",
    desc: "Send a quick message for project conversations or direct outreach.",
    action: "Message",
  },
};

function normalizeHref(href: string) {
  if (href.startsWith("mailto:") || href.startsWith("http")) return href;
  return `https://${href}`;
}

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <section
      id="contact"
      className="section-pad"
      style={{
        background: "var(--bg2)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div
          className="text-xs tracking-widest uppercase mb-3"
          style={{ color: "var(--accent)" }}
        >
          {"// contact"}
        </div>

        <div
          ref={ref}
          className="grid gap-8 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start"
        >
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.7s ease",
            }}
          >
            <h2
              className="font-extrabold mb-4"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Let&apos;s <span className="grad-text">Connect</span>
            </h2>
            <p
              className="text-sm leading-loose mb-6"
              style={{ color: "var(--muted)" }}
            >
              I&apos;m always open to discussing projects, internships,
              collaborations, and opportunities. Feel free to reach out through
              any of the platforms below.
            </p>
            <div
              className="safe-wrap inline-flex max-w-full items-center justify-center gap-2 rounded-full px-3 sm:px-4 py-2 text-center text-xs leading-relaxed tracking-widest uppercase"
              style={{
                background: "rgba(0,245,196,0.08)",
                border: "1px solid rgba(0,245,196,0.2)",
                color: "var(--accent)",
              }}
            >
              Open to internships & collaborations
            </div>
          </div>

          <div
            className="grid gap-4 sm:grid-cols-2"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.7s ease 0.15s",
            }}
          >
            {SOCIAL_LINKS.map((link) => {
              const meta = CONTACT_COPY[link.icon] ?? {
                title: link.label,
                desc: "Reach out through this platform.",
                action: "Open",
              };
              const href = normalizeHref(link.href);
              const isEmail = href.startsWith("mailto:");

              return (
                <a
                  key={link.label}
                  href={href}
                  target={isEmail ? undefined : "_blank"}
                  rel={isEmail ? undefined : "noreferrer"}
                  className="hover-lift hover-glow group safe-wrap block p-4 sm:p-5"
                  style={{
                    minHeight: 168,
                    borderRadius: 8,
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.055), rgba(255,255,255,0.025))",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                    textDecoration: "none",
                  }}
                >
                  <div
                    className="mb-5 flex h-10 w-10 items-center justify-center rounded-md text-sm font-bold uppercase"
                    style={{
                      background: "rgba(0,245,196,0.08)",
                      border: "1px solid rgba(0,245,196,0.2)",
                      color: "var(--accent)",
                    }}
                  >
                    {meta.title.slice(0, 1)}
                  </div>

                  <h3
                    className="mb-2 font-bold text-lg"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {meta.title}
                  </h3>
                  <p
                    className="mb-5 text-xs leading-loose"
                    style={{ color: "var(--muted)" }}
                  >
                    {meta.desc}
                  </p>
                  <span
                    className="interactive-link text-xs tracking-widest uppercase"
                    style={{ color: "var(--accent)" }}
                  >
                    {meta.action}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
