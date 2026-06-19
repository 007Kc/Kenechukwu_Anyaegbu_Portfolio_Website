"use client";
import { useEffect, useState } from "react";
import { OWNER } from "@/data";

const proofChips = ["AI Internship", "4+ Projects Built", "UNIZIK Computer Science"];

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const phrases = OWNER.typingPhrases;

  useEffect(() => {
    const current = phrases[phraseIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (charIdx < current.length) {
        timeout = setTimeout(() => {
          setTyped(current.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        }, 70);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => {
          setTyped(current.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        }, 40);
      } else {
        timeout = setTimeout(() => {
          setDeleting(false);
          setPhraseIdx((p) => (p + 1) % phrases.length);
        }, 200);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, phraseIdx, phrases]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ padding: "6rem 2rem 4rem" }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Glow orb */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle, rgba(0,245,196,0.08) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          animation: "glow-pulse 4s ease-in-out infinite",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl">
        {/* Badge */}
        <div
          className="hover-glow inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs tracking-widest uppercase mb-6"
          style={{
            background: "rgba(0,245,196,0.08)",
            border: "1px solid rgba(0,245,196,0.2)",
            color: "var(--accent)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: "var(--accent)",
              animation: "blink 1.5s ease-in-out infinite",
            }}
          />
          Open to internships, collaborations & opportunities
        </div>

        <div
          className="mb-4 text-xs tracking-widest uppercase"
          style={{ color: "var(--accent2)" }}
        >
          Computer Science Student • AI Builder • Developer
        </div>

        {/* Headline */}
        <h1
          className="font-extrabold leading-none tracking-tight mb-5"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            letterSpacing: "-0.02em",
          }}
        >
          Building with{" "}
          <span className="grad-text">Software</span>,
          <br />
          Data &amp; AI
        </h1>

        {/* Sub */}
        <p
          className="mx-auto mb-5 text-sm leading-loose max-w-2xl"
          style={{ color: "var(--muted)" }}
        >
          I&apos;m <strong style={{ color: "var(--text)" }}>{OWNER.name}</strong>,
          a student developer building projects at the intersection of
          software, data, and AI while growing toward becoming an AI engineer.
        </p>

        <div className="mb-7 flex justify-center gap-2 flex-wrap">
          {proofChips.map((chip) => (
            <span
              key={chip}
              className="interactive-chip px-3 py-1.5 rounded-full text-xs tracking-wider"
              style={{
                background: "rgba(255,255,255,0.045)",
                border: "1px solid var(--border)",
                color: "var(--muted)",
              }}
            >
              {chip}
            </span>
          ))}
        </div>

        {/* Typing line */}
        <div
          className="mb-10 min-h-6 text-sm"
          style={{ color: "var(--accent)" }}
        >
          &gt; {typed}
          <span style={{ animation: "blink 1s step-end infinite" }}>_</span>
        </div>

        {/* CTAs */}
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#projects" className="btn-primary">
            Explore My Work
          </a>
          <a href="#contact" className="btn-outline">
            Let&apos;s Connect
          </a>
        </div>
      </div>

      <style jsx>{`
        .btn-primary {
          padding: 0.75rem 1.75rem;
          border-radius: 8px;
          font-family: 'Space Mono', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s;
          background: var(--accent);
          color: #080810;
          font-weight: 700;
          border: none;
        }
        .btn-primary:hover {
          background: #fff;
          transform: translateY(-2px);
        }
        .btn-outline {
          padding: 0.75rem 1.75rem;
          border-radius: 8px;
          font-family: 'Space Mono', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s;
          background: transparent;
          color: var(--accent);
          border: 1px solid rgba(0, 245, 196, 0.3);
        }
        .btn-outline:hover {
          background: rgba(0, 245, 196, 0.08);
          border-color: var(--accent);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
