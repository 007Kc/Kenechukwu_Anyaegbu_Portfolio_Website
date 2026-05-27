"use client";
import { useRef, useState } from "react";
import { useInView } from "@/lib/useInView";
import { OWNER } from "@/data";

const skills = [
  "Python", "AI / LLMs", "SQL", "Automation",
  "APIs", "Prompt Eng.", "Web Dev", "Data Analysis",
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const [portraitLoaded, setPortraitLoaded] = useState(true);

  return (
    <section
      id="about"
      style={{
        background: "var(--bg2)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "6rem 2rem",
      }}
    >
      <div
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center"
        ref={ref}
      >
        {/* Text */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease",
          }}
        >
          <div
            className="text-xs tracking-widest uppercase mb-3"
            style={{ color: "var(--accent)" }}
          >
            {"// about me"}
          </div>
          <h2
            className="font-extrabold mb-6"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Obsessed with{" "}
            <span className="grad-text">building</span>
          </h2>

          {OWNER.bio.map((para, i) => (
            <p
              key={i}
              className="mb-4 text-sm leading-loose"
              style={{ color: "var(--muted)" }}
            >
              {para}
            </p>
          ))}

          {/* Skill chips */}
          <div className="grid grid-cols-4 gap-2 mt-6">
            {skills.map((s) => (
              <div
                key={s}
                className="px-3 py-2 text-center text-xs tracking-wider rounded-md cursor-default transition-all duration-300"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.color = "var(--accent)";
                  e.currentTarget.style.background = "rgba(0,245,196,0.05)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--text)";
                  e.currentTarget.style.background = "var(--card)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* Portrait */}
        <div
          className="flex justify-center"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease 0.2s",
          }}
        >
          <div
            className="relative flex items-center justify-center overflow-hidden"
            style={{
              width: "min(100%, 360px)",
              aspectRatio: "1 / 1",
              borderRadius: 8,
              background: "linear-gradient(135deg, var(--bg3), var(--bg2))",
              border: "1px solid var(--border)",
              boxShadow: "0 24px 80px rgba(0, 0, 0, 0.28)",
            }}
          >
            {portraitLoaded ? (
              // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/about-portrait.png"
              alt="Portrait of Kenechukwu Ronaldo"
              onError={() => setPortraitLoaded(false)}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            ) : (
              <div
                className="flex h-full w-full items-center justify-center px-8 text-center"
                style={{
                  color: "var(--muted)",
                  fontSize: "0.8rem",
                  lineHeight: 1.8,
                }}
              >
                Add your portrait as public/about-portrait.png
              </div>
            )}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,245,196,0.18), rgba(123,97,255,0.12))",
                mixBlendMode: "screen",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
