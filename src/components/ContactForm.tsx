"use client";

import { useState } from "react";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { contactSchema } from "@/lib/validation";
import { whatsappLink } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Input, Select, Textarea } from "@/components/ui/Input";

type Field = "name" | "email" | "phone" | "package" | "message";
type FieldErrors = Partial<Record<Field, string>>;
type Status = "idle" | "loading" | "success" | "error";

function firstErrors(fieldErrors: Record<string, string[] | undefined>) {
  const result: FieldErrors = {};
  for (const [key, messages] of Object.entries(fieldErrors)) {
    if (messages?.[0]) result[key as Field] = messages[0];
  }
  return result;
}

export function ContactForm({
  packages,
  defaultPackage = "",
}: {
  packages: string[];
  defaultPackage?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const read = (key: string) => String(form.get(key) ?? "").trim();

    const parsed = contactSchema.safeParse({
      name: read("name"),
      email: read("email"),
      phone: read("phone"),
      package: read("package"),
      message: read("message"),
      website: read("website"),
    });

    if (!parsed.success) {
      setErrors(firstErrors(z.flattenError(parsed.error).fieldErrors));
      return;
    }

    setErrors({});
    setServerError("");
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setStatus("success");
        return;
      }

      if (data.errors) setErrors(firstErrors(data.errors));
      setServerError(
        data.message ??
          "Something went wrong. Please try again or message me on WhatsApp.",
      );
      setStatus("error");
    } catch {
      setServerError(
        "Couldn't reach the server. Check your connection or message me on WhatsApp.",
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-accent/40 bg-surface p-8 text-center">
        <CheckCircle2
          size={40}
          className="mx-auto text-accent"
          aria-hidden="true"
        />
        <h2 className="mt-4 text-2xl font-semibold tracking-tight">
          Message sent
        </h2>
        <p className="mt-2 text-muted">
          Thanks for reaching out. I usually reply within a day.
        </p>
        <Button
          href={whatsappLink("Hi Daniel, I just sent a message through your website.")}
          variant="secondary"
          className="mt-6"
        >
          Chat on WhatsApp too
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="space-y-5 rounded-2xl border border-border bg-surface p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          id="name"
          name="name"
          label="Your name"
          autoComplete="name"
          error={errors.name}
        />
        <Input
          id="email"
          name="email"
          type="email"
          label="Email"
          autoComplete="email"
          error={errors.email}
        />
        <Input
          id="phone"
          name="phone"
          type="tel"
          label="Phone / WhatsApp (optional)"
          autoComplete="tel"
          error={errors.phone}
        />
        <Select
          id="package"
          name="package"
          label="What do you need?"
          defaultValue={defaultPackage}
          error={errors.package}
        >
          <option value="">Not sure yet</option>
          {packages.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </Select>
      </div>

      <Textarea
        id="message"
        name="message"
        label="Tell me about your project"
        placeholder="What does your business do, and what should the website help you achieve?"
        error={errors.message}
      />

      {/* Honeypot: hidden from real visitors, bots tend to fill it. */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {serverError && (
        <p role="alert" className="text-sm text-red-400">
          {serverError}
        </p>
      )}

      <Button type="submit" size="lg" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}
