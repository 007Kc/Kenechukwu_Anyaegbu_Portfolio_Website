"use client";
import { useRef } from "react";
import { useInView } from "@/lib/useInView";
import { SKILLS } from "@/data";

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, 0.2);

  return (
    <section id="skills" className="section-pad">
      <div className="max-w-5xl mx-auto">
        <div
          className="text-xs tracking-widest uppercase mb-3"
          style={{ color: "var(--accent)" }}
        >
          {"// skills"}
        </div>

        <div className="mb-10 max-w-3xl">
          <h2
            className="font-extrabold mb-4"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Tools for <span className="grad-text">building</span>
          </h2>
          <p
            className="text-sm leading-loose"
            style={{ color: "var(--muted)" }}
          >
            A focused snapshot of the technologies and areas I am using while
            growing as a Computer Science student, developer, and aspiring AI
            engineer.
          </p>
        </div>

        <div
          ref={ref}
          className="grid gap-4 sm:gap-5 md:grid-cols-2"
          style={{
          }}
        >
          {SKILLS.map((cat, i) => (
            <article
              key={cat.cat}
              className="hover-lift hover-glow group safe-wrap p-4 sm:p-5"
              style={{
                minHeight: 250,
                borderRadius: 8,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.055), rgba(255,255,255,0.025))",
                border: "1px solid var(--border)",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s, border-color 0.25s ease, background 0.25s ease`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = cat.color;
                e.currentTarget.style.background =
                  "linear-gradient(180deg, rgba(255,255,255,0.075), rgba(255,255,255,0.035))";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.background =
                  "linear-gradient(180deg, rgba(255,255,255,0.055), rgba(255,255,255,0.025))";
                e.currentTarget.style.transform = inView
                  ? "translateY(0)"
                  : "translateY(20px)";
              }}
            >
              <div
                className="mb-4"
                style={{
                  width: 36,
                  height: 3,
                  borderRadius: 999,
                  background: cat.color,
                  boxShadow: `0 0 18px ${cat.color}55`,
                }}
              />

              <h3
                className="font-bold text-lg mb-3"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  color: "var(--text)",
                }}
              >
                {cat.cat}
              </h3>

              <p
                className="text-xs leading-loose mb-5"
                style={{ color: "var(--muted)" }}
              >
                {cat.desc}
              </p>

              <div className="skill-chip-grid">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="interactive-chip safe-wrap flex min-h-10 items-center text-xs leading-relaxed"
                    style={{
                      borderRadius: 8,
                      padding: "0.45rem 0.65rem",
                      background: "rgba(255,255,255,0.045)",
                      border: "1px solid var(--border)",
                      color: "var(--text)",
                      transition:
                        "border-color 0.25s ease, color 0.25s ease, background 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = cat.color;
                      e.currentTarget.style.color = cat.color;
                      e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.color = "var(--text)";
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.045)";
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
