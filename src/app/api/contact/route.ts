import { NextResponse } from "next/server";
import { z } from "zod";
import { EmailNotConfiguredError, sendContactEmail } from "@/lib/email";
import { contactSchema } from "@/lib/validation";

// Basic in-memory rate limit: 5 requests per IP per 10 minutes.
// Good enough to stop casual spam. For heavy traffic, use a shared store.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_REQUESTS;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { message: "Too many messages. Please try again in a few minutes." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        message: "Please check the form and try again.",
        errors: z.flattenError(parsed.error).fieldErrors,
      },
      { status: 400 },
    );
  }

  // Honeypot filled: pretend success so bots learn nothing.
  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  try {
    await sendContactEmail(parsed.data);
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof EmailNotConfiguredError) {
      console.error("Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL missing.");
      return NextResponse.json(
        {
          message:
            "The contact form isn't set up yet. Please message me on WhatsApp or email instead.",
        },
        { status: 503 },
      );
    }
    console.error("Contact form: failed to send email", error);
    return NextResponse.json(
      { message: "Couldn't send your message. Please try again." },
      { status: 500 },
    );
  }
}
