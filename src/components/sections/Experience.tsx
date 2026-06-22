"use client";
import { useRef } from "react";
import { useInView } from "@/lib/useInView";
import { TIMELINE } from "@/data";

const DOT_COLORS: Record<string, string> = {
  primary: "var(--accent)",
  secondary: "var(--accent2)",
  tertiary: "var(--accent3)",
};

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <section
      id="experience"
      className="section-pad"
      style={{
        background: "var(--bg2)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-5xl mx-auto" ref={ref}>
        <div
          className="text-xs tracking-widest uppercase mb-3"
          style={{ color: "var(--accent)" }}
        >
          {"// experience"}
        </div>
        <h2
          className="font-extrabold mb-12"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            letterSpacing: "-0.02em",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease",
          }}
        >
          The <span className="grad-text">Journey</span>
        </h2>

        {/* Timeline */}
        <div className="relative pl-5 sm:pl-8">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-0 bottom-0"
            style={{
              width: 1,
              background:
                "linear-gradient(180deg, var(--accent), var(--accent2), transparent)",
            }}
          />

          {TIMELINE.map((item, i) => {
            const dotColor = DOT_COLORS[item.accent ?? "primary"];
            return (
              <div
                key={i}
                className="hover-lift timeline-item relative pl-5 sm:pl-8 pb-9 sm:pb-10"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.6s ease ${i * 0.1}s`,
                }}
              >
                {/* Dot */}
                <div
                  className="timeline-dot absolute left-[-1.55rem] sm:left-[-2.4rem] rounded-full"
                  style={{
                    width: 10,
                    height: 10,
                    top: "0.25rem",
                    background: dotColor,
                    boxShadow: `0 0 12px ${dotColor}`,
                  }}
                />

                <div
                  className="text-xs tracking-widest uppercase mb-1"
                  style={{ color: "var(--accent)" }}
                >
                  {item.year}
                </div>
                <div
                  className="font-bold text-xl mb-1"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {item.role}
                </div>
                <div
                  className="text-xs mb-3"
                  style={{ color: "var(--muted)" }}
                >
                  {item.company}
                </div>
                <div
                  className="text-sm leading-loose"
                  style={{ color: "var(--muted)" }}
                >
                  {item.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
