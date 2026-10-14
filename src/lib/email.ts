import { Resend } from "resend";
import type { ContactInput } from "@/lib/validation";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export class EmailNotConfiguredError extends Error {
  constructor() {
    super("Email is not configured.");
    this.name = "EmailNotConfiguredError";
  }
}

export async function sendContactEmail(data: ContactInput) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) throw new EmailNotConfiguredError();

  const from =
    process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";
  const resend = new Resend(apiKey);

  const subjectName = data.name.replace(/[\r\n]+/g, " ");
  const phone = data.phone || "Not provided";
  const pkg = data.package || "Not specified";

  const text = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${phone}`,
    `Package: ${pkg}`,
    "",
    data.message,
  ].join("\n");

  const html = `
    <div style="font-family:system-ui,sans-serif;line-height:1.6;color:#111">
      <h2 style="margin:0 0 16px">New website enquiry</h2>
      <p style="margin:0"><strong>Name:</strong> ${escapeHtml(data.name)}</p>
      <p style="margin:0"><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      <p style="margin:0"><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p style="margin:0"><strong>Package:</strong> ${escapeHtml(pkg)}</p>
      <hr style="margin:16px 0;border:none;border-top:1px solid #ddd" />
      <p style="white-space:pre-wrap;margin:0">${escapeHtml(data.message)}</p>
    </div>`;

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: data.email,
    subject: `New enquiry from ${subjectName}`,
    text,
    html,
  });

  if (error) throw new Error(error.message);
}
