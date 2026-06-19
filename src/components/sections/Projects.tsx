"use client";
import { useState, useRef } from "react";
import { PROJECTS } from "@/data";
import type { Project, ProjectTag } from "@/types";
import { useInView } from "@/lib/useInView";

type Filter = "all" | ProjectTag;

const TAG_LABELS: Record<ProjectTag, string> = {
  ai: "AI",
  web: "Web",
  data: "Data",
  automation: "Auto",
};

const TAG_STYLES: Record<ProjectTag, React.CSSProperties> = {
  ai: { background: "rgba(0,245,196,0.1)", color: "var(--accent)" },
  web: { background: "rgba(123,97,255,0.1)", color: "var(--accent2)" },
  data: { background: "rgba(255,107,107,0.1)", color: "var(--accent3)" },
  automation: { background: "rgba(255,200,80,0.1)", color: "#ffc850" },
};

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const [modal, setModal] = useState<Project | null>(null);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  const filtered =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.tags.includes(filter));

  return (
    <section
      id="projects"
      className="max-w-5xl mx-auto"
      style={{ padding: "6rem 2rem" }}
      ref={ref}
    >
      <div
        className="text-xs tracking-widest uppercase mb-3"
        style={{ color: "var(--accent)" }}
      >
        {"// projects"}
      </div>
      <h2
        className="font-extrabold mb-10"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          letterSpacing: "-0.02em",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.7s ease",
        }}
      >
        Things I&apos;ve <span className="grad-text">Built</span>
      </h2>

      {PROJECTS.length > 0 && (
        <div className="flex gap-2 flex-wrap mb-10">
          {(["all", "ai", "web", "automation", "data"] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="interactive-chip px-4 py-1.5 rounded-full text-xs tracking-widest uppercase transition-all duration-300"
              style={{
                background: "transparent",
                border: `1px solid ${filter === f ? "var(--accent)" : "var(--border)"}`,
                color: filter === f ? "var(--accent)" : "var(--muted)",
                cursor: "pointer",
                fontFamily: "'Space Mono', monospace",
                ...(filter === f
                  ? { background: "rgba(0,245,196,0.06)" }
                  : {}),
              }}
            >
              {f === "all" ? "All" : TAG_LABELS[f as ProjectTag]}
            </button>
          ))}
        </div>
      )}

      {filtered.length > 0 ? (
        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          }}
        >
          {filtered.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              delay={i * 0.05}
              inView={inView}
              tagLabels={TAG_LABELS}
              tagStyles={TAG_STYLES}
              onClick={() => setModal(p)}
            />
          ))}
        </div>
      ) : (
        <div
          className="hover-glow p-8 text-center"
          style={{
            borderRadius: 8,
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.055), rgba(255,255,255,0.025))",
            border: "1px solid var(--border)",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease 0.1s",
          }}
        >
          <div
            className="text-xs tracking-widest uppercase mb-3"
            style={{ color: "var(--accent)" }}
          >
            Projects loading
          </div>
          <p className="text-sm leading-loose" style={{ color: "var(--muted)" }}>
            Real project case studies are being prepared and will be added here
            soon.
          </p>
        </div>
      )}

      {/* Modal */}
      {modal && (
        <ProjectModal
          project={modal}
          tagLabels={TAG_LABELS}
          tagStyles={TAG_STYLES}
          onClose={() => setModal(null)}
        />
      )}
    </section>
  );
}

function ProjectCard({
  project: p,
  delay,
  inView,
  tagLabels,
  tagStyles,
  onClick,
}: {
  project: Project;
  delay: number;
  inView: boolean;
  tagLabels: Record<ProjectTag, string>;
  tagStyles: Record<ProjectTag, React.CSSProperties>;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="hover-lift hover-glow project-card rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 relative"
      style={{
        background: "var(--card)",
        border: `1px solid ${p.featured ? "rgba(123,97,255,0.25)" : "var(--border)"}`,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.6s ease ${delay}s`,
        gridColumn: p.featured ? "span 2" : "span 1",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.background = "rgba(255,255,255,0.06)";
        e.currentTarget.style.borderColor = p.featured
          ? "rgba(123,97,255,0.5)"
          : "rgba(0,245,196,0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.background = "var(--card)";
        e.currentTarget.style.borderColor = p.featured
          ? "rgba(123,97,255,0.25)"
          : "var(--border)";
      }}
    >
      {p.featured && (
        <div
          className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs tracking-widest uppercase z-10"
          style={{
            background: "rgba(123,97,255,0.15)",
            border: "1px solid rgba(123,97,255,0.3)",
            color: "var(--accent2)",
          }}
        >
          ★ Featured
        </div>
      )}

      {/* Image area */}
      <div
        className="relative flex items-center justify-center text-5xl overflow-hidden"
        style={{
          height: 200,
          background: "linear-gradient(135deg, var(--bg3), #1a1a3a)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,245,196,0.05), rgba(123,97,255,0.05))",
          }}
        />
        <span className="project-emoji relative z-10">{p.emoji}</span>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="flex gap-2 flex-wrap mb-3">
          {p.tags.map((t) => (
            <span
              key={t}
              className="interactive-chip px-2 py-0.5 rounded-full text-xs tracking-wider uppercase"
              style={tagStyles[t]}
            >
              {tagLabels[t]}
            </span>
          ))}
          <span
            className="px-2 py-0.5 rounded-full text-xs tracking-wider"
            style={{
              background: "rgba(255,255,255,0.06)",
              color: "var(--muted)",
            }}
          >
            {p.status}
          </span>
        </div>

        <h3
          className="font-bold text-xl mb-2"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {p.title}
        </h3>
        <p className="text-xs leading-loose mb-4" style={{ color: "var(--muted)" }}>
          {p.desc}
        </p>

        <div className="flex gap-2 flex-wrap mb-4">
          {p.stack.map((s) => (
            <span
              key={s}
              className="interactive-chip px-2 py-0.5 rounded text-xs"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid var(--border)",
                color: "var(--muted)",
              }}
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {p.demo && (
            <a
              href={p.demo}
              className="interactive-link text-xs tracking-wider transition-opacity duration-200"
              style={{ color: "var(--accent)", textDecoration: "none" }}
              onClick={(e) => e.stopPropagation()}
            >
              Live Demo →
            </a>
          )}
          {p.github && (
            <a
              href={p.github}
              className="interactive-link text-xs tracking-wider transition-opacity duration-200"
              style={{ color: "var(--accent)", textDecoration: "none" }}
              onClick={(e) => e.stopPropagation()}
            >
              GitHub →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectModal({
  project: p,
  tagLabels,
  tagStyles,
  onClose,
}: {
  project: Project;
  tagLabels: Record<ProjectTag, string>;
  tagStyles: Record<ProjectTag, React.CSSProperties>;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-8"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="relative max-w-2xl w-full rounded-3xl p-10 overflow-y-auto"
        style={{
          background: "var(--bg2)",
          border: "1px solid var(--border)",
          maxHeight: "85vh",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-2xl transition-colors duration-300"
          style={{
            background: "none",
            border: "none",
            color: "var(--muted)",
            cursor: "pointer",
            fontFamily: "monospace",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
        >
          ✕
        </button>

        <div className="text-5xl mb-4">{p.emoji}</div>

        <div className="flex gap-2 flex-wrap mb-4">
          {p.tags.map((t) => (
            <span
              key={t}
              className="interactive-chip px-2 py-0.5 rounded-full text-xs tracking-wider uppercase"
              style={tagStyles[t]}
            >
              {tagLabels[t]}
            </span>
          ))}
        </div>

        <h2
          className="font-extrabold text-3xl mb-4"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {p.title}
        </h2>

        <p
          className="text-sm leading-loose mb-6"
          style={{ color: "var(--muted)" }}
        >
          {p.fullDesc}
        </p>

        <div className="mb-6">
          <div
            className="text-xs tracking-widest uppercase mb-3"
            style={{ color: "var(--muted)" }}
          >
            Tech Stack
          </div>
          <div className="flex gap-2 flex-wrap">
            {p.stack.map((s) => (
              <span
                key={s}
                className="interactive-chip px-3 py-1 rounded text-xs"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid var(--border)",
                  color: "var(--muted)",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          {p.demo && (
            <a
              href={p.demo}
              className="interactive-button px-6 py-3 rounded-lg text-xs tracking-widest uppercase font-bold transition-all duration-300"
              style={{
                background: "var(--accent)",
                color: "#080810",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--accent)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Live Demo →
            </a>
          )}
          {p.github && (
            <a
              href={p.github}
              className="interactive-button px-6 py-3 rounded-lg text-xs tracking-widest uppercase transition-all duration-300"
              style={{
                background: "transparent",
                border: "1px solid rgba(0,245,196,0.3)",
                color: "var(--accent)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0,245,196,0.08)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
