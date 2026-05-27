"use client";
import { useRef } from "react";
import { useInView } from "@/lib/useInView";
import { SKILLS } from "@/data";

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, 0.2);

  return (
    <section id="skills" style={{ padding: "6rem 2rem" }}>
      <div className="max-w-5xl mx-auto">
        <div
          className="text-xs tracking-widest uppercase mb-3"
          style={{ color: "var(--accent)" }}
        >
          {"// skills"}
        </div>
        <h2
          className="font-extrabold mb-10"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            letterSpacing: "-0.02em",
          }}
        >
          Tech <span className="grad-text">Arsenal</span>
        </h2>

        <div
          ref={ref}
          className="grid gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          }}
        >
          {SKILLS.map((cat, i) => (
            <div
              key={cat.cat}
              className="rounded-2xl p-6"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.6s ease ${i * 0.1}s`,
              }}
            >
              <h4
                className="font-bold text-sm mb-4"
                style={{ color: cat.color, fontFamily: "'Syne', sans-serif" }}
              >
                {cat.cat}
              </h4>

              {cat.items.map((item) => (
                <div key={item.name} className="mb-3">
                  <div
                    className="flex justify-between text-xs mb-1"
                    style={{ color: "var(--muted)" }}
                  >
                    <span>{item.name}</span>
                    <span>{item.pct}%</span>
                  </div>
                  <div
                    className="rounded-full overflow-hidden"
                    style={{
                      height: 3,
                      background: "var(--border)",
                    }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: inView ? `${item.pct}%` : "0%",
                        background: `linear-gradient(90deg, ${cat.color}, var(--accent2))`,
                        transition: "width 1.5s ease",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
