"use client";

import { useState } from "react";
import Link from "next/link";

interface NewsletterSignupProps {
  variant?: "sidebar" | "inline";
}

export default function NewsletterSignup({ variant = "sidebar" }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    // Static success state — no real API call
    setSubmitted(true);
  }

  if (variant === "inline") {
    return (
      <section className="bg-surface border border-border p-8 text-center">
        <h2 className="font-serif text-heading-lg text-ink mb-2">The Weekly Abstract</h2>
        <p className="font-sans text-body-sm text-muted mb-6 max-w-sm mx-auto">
          Concise summaries of the week&apos;s most critical biological breakthroughs,
          delivered to your inbox.
        </p>
        {submitted ? (
          <SuccessMessage />
        ) : (
          <SignupForm
            email={email}
            setEmail={setEmail}
            onSubmit={handleSubmit}
            compact={false}
          />
        )}
      </section>
    );
  }

  // Sidebar variant
  return (
    <div className="border border-border p-5 mt-5">
      <h2 className="font-serif text-heading-sm text-ink mb-1.5 italic">
        The Weekly Abstract
      </h2>
      <p className="font-sans text-body-sm text-muted mb-4">
        Concise summaries of the week&apos;s most critical biological breakthroughs,
        delivered to your inbox.
      </p>
      {submitted ? (
        <SuccessMessage />
      ) : (
        <SignupForm
          email={email}
          setEmail={setEmail}
          onSubmit={handleSubmit}
          compact
        />
      )}
    </div>
  );
}

function SignupForm({
  email,
  setEmail,
  onSubmit,
  compact,
}: {
  email: string;
  setEmail: (v: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  compact: boolean;
}) {
  return (
    <form onSubmit={onSubmit} className={compact ? "flex gap-0" : "flex flex-col sm:flex-row gap-2 max-w-sm mx-auto"}>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address"
        required
        className={`font-sans text-body-sm text-ink bg-background border border-border focus:outline-none focus:border-navy px-3 py-2 placeholder:text-subtle flex-1 min-w-0 ${compact ? "text-[0.8125rem]" : ""}`}
      />
      <button
        type="submit"
        className={`bg-navy text-white font-sans font-semibold uppercase tracking-wider px-4 py-2 hover:bg-navy-dark transition-colors shrink-0 ${compact ? "text-[0.65rem]" : "text-xs"}`}
      >
        Subscribe
      </button>
    </form>
  );
}

function SuccessMessage() {
  return (
    <div className="text-center py-2">
      <p className="font-sans text-body-sm text-navy font-medium">
        You&apos;re subscribed. Welcome aboard.
      </p>
      <Link
        href="/newsletter/confirm"
        className="font-sans text-label-sm text-subtle hover:text-ink transition-colors underline mt-1 inline-block"
      >
        View confirmation
      </Link>
    </div>
  );
}
