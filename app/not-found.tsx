import Link from "next/link";
import PageWrapper from "@/components/layout/PageWrapper";

export default function NotFound() {
  return (
    <PageWrapper className="py-24 text-center">
      <p className="font-sans text-label-sm text-subtle uppercase tracking-widest mb-4">
        404
      </p>
      <h1 className="font-serif text-display-sm text-ink mb-4">Page not found</h1>
      <p className="font-sans text-body-md text-muted mb-8 max-w-md mx-auto">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
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
