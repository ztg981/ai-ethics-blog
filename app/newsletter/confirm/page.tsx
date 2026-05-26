import type { Metadata } from "next";
import Link from "next/link";
import PageWrapper from "@/components/layout/PageWrapper";

export const metadata: Metadata = {
  title: "You're subscribed",
  description: "Thanks for subscribing.",
};

export default function NewsletterConfirmPage() {
  return (
    <PageWrapper maxWidth="narrow" className="py-24 text-center">
      <p className="font-sans text-label-sm text-subtle uppercase tracking-widest mb-4">
        Newsletter
      </p>
      <h1 className="font-serif text-display-sm text-ink mb-4">
        You&apos;re subscribed.
      </h1>
      <p className="font-sans text-body-lg text-muted mb-10 max-w-sm mx-auto">
        Thanks for signing up.
      </p>
      <Link
        href="/"
        className="inline-flex items-center font-sans text-sm font-medium text-navy border border-navy px-5 py-2.5 hover:bg-navy hover:text-white transition-colors"
      >
        Back to homepage
      </Link>
    </PageWrapper>
  );
}
