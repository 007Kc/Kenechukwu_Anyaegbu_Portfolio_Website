import { NextResponse } from "next/server";
import { OWNER } from "@/data";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidText(value: unknown, maxLength: number): value is string {
  return (
    typeof value === "string" &&
    value.trim().length > 0 &&
    value.length <= maxLength
  );
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? OWNER.email;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ?? "Kace Portfolio <onboarding@resend.dev>";

  if (!apiKey || !toEmail) {
    return NextResponse.json(
      { error: "Contact form is not configured yet." },
      { status: 500 }
    );
  }

  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (
    !isValidText(payload.name, 120) ||
    !isValidText(payload.email, 180) ||
    !isValidText(payload.message, 3000) ||
    !emailPattern.test(payload.email.trim())
  ) {
    return NextResponse.json(
      { error: "Please enter a valid name, email, and message." },
      { status: 400 }
    );
  }

  const name = payload.name.trim();
  const email = payload.email.trim();
  const message = payload.message.trim();

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <h2>New portfolio message</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
      `,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Message could not be sent. Please try again later." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
