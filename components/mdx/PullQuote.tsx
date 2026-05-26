interface PullQuoteProps {
  children: React.ReactNode;
  attribution?: string;
}

export default function PullQuote({ children, attribution }: PullQuoteProps) {
  return (
    <blockquote className="my-10 not-prose border-l-4 border-navy pl-6">
      <p className="font-serif text-[1.35rem] leading-relaxed text-ink italic">
        {children}
      </p>
      {attribution && (
        <footer className="mt-3 font-sans text-label-sm text-subtle">
          — {attribution}
        </footer>
      )}
    </blockquote>
  );
}
