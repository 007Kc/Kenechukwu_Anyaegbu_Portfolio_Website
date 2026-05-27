"use client";
import { useRef, useState } from "react";
import { useInView } from "@/lib/useInView";
import { SOCIAL_LINKS, OWNER } from "@/data";

type SubmitStatus = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error ?? "Message could not be sent.");
      }

      setStatus("sent");
      form.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Message could not be sent. Please try again."
      );
    }
  }

  const inputStyle: React.CSSProperties = {
    background: "var(--card)",
    border: "1px solid var(--border)",
    borderRadius: 8,
    padding: "0.75rem 1rem",
    color: "var(--text)",
    fontFamily: "'Space Mono', monospace",
    fontSize: "0.8rem",
    outline: "none",
    width: "100%",
    resize: "none" as const,
    transition: "border-color 0.3s",
  };

  return (
    <section
      id="contact"
      style={{
        background: "var(--bg2)",
        borderTop: "1px solid var(--border)",
        padding: "6rem 2rem",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div
          className="text-xs tracking-widest uppercase mb-3"
          style={{ color: "var(--accent)" }}
        >
          {"// contact"}
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-16 items-start">
          {/* Info */}
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
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
              }}
            >
              Let&apos;s build something{" "}
              <span className="grad-text">great.</span>
            </h2>
            <p
              className="text-sm leading-loose mb-8"
              style={{ color: "var(--muted)" }}
            >
              Open to collaborations, freelance projects, startup roles, and
              interesting conversations. If you have an idea, let&apos;s talk.
            </p>

            <div className="flex gap-3 flex-wrap">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs tracking-wider transition-all duration-300"
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    color: "var(--muted)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.color = "var(--accent)";
                    e.currentTarget.style.background =
                      "rgba(0,245,196,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--muted)";
                    e.currentTarget.style.background = "var(--card)";
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.7s ease 0.15s",
            }}
          >
            <div className="flex flex-col gap-1.5">
              <label
                className="text-xs tracking-widest uppercase"
                style={{ color: "var(--muted)" }}
              >
                Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="Your name"
                required
                style={inputStyle}
                onFocus={(e) =>
                  (e.target.style.borderColor = "rgba(0,245,196,0.4)")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "var(--border)")
                }
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                className="text-xs tracking-widest uppercase"
                style={{ color: "var(--muted)" }}
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder={OWNER.email}
                required
                style={inputStyle}
                onFocus={(e) =>
                  (e.target.style.borderColor = "rgba(0,245,196,0.4)")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "var(--border)")
                }
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                className="text-xs tracking-widest uppercase"
                style={{ color: "var(--muted)" }}
              >
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="What are you building?"
                required
                style={inputStyle}
                onFocus={(e) =>
                  (e.target.style.borderColor = "rgba(0,245,196,0.4)")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "var(--border)")
                }
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-4 rounded-lg text-xs tracking-widest uppercase font-bold transition-all duration-300"
              style={{
                background: "var(--accent)",
                color: "#080810",
                border: "none",
                cursor: status === "sending" ? "wait" : "pointer",
                fontFamily: "'Space Mono', monospace",
                opacity: status === "sending" ? 0.75 : 1,
              }}
              onMouseEnter={(e) => {
                if (status === "sending") return;
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--accent)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {status === "sending" ? "Sending..." : "Send Message ->"}
            </button>

            {status === "sent" && (
              <p
                className="text-center text-sm"
                style={{ color: "var(--accent)" }}
              >
                Message sent. I&apos;ll be in touch soon.
              </p>
            )}

            {status === "error" && (
              <p
                className="text-center text-sm"
                style={{ color: "var(--accent3)" }}
              >
                {errorMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
