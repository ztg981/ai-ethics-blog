import Link from "next/link";

const FOOTER_LINKS = {
  Topics: [
    { label: "Genomics", href: "/topics/genomics" },
    { label: "Neuroscience", href: "/topics/neuroscience" },
    { label: "Synthetic Bio", href: "/topics/synthetic-bio" },
    { label: "AI Research", href: "/topics/ai-research" },
    { label: "Ethics", href: "/topics/ethics" },
  ],
  Navigate: [
    { label: "Latest", href: "/" },
    { label: "Archives", href: "/archives" },
    { label: "Saved", href: "/saved" },
    { label: "About", href: "/about" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="font-serif text-sm font-bold tracking-[0.18em] uppercase text-ink hover:text-navy transition-colors"
            >
              AI Ethics Blog
            </Link>
            <p className="mt-3 font-sans text-body-sm text-muted max-w-[22ch]">
              Independent writing on AI, biology, and the ethics at their intersection.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h3 className="font-sans text-label-sm font-semibold uppercase tracking-widest text-subtle mb-4">
                {group}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-sans text-body-sm text-muted hover:text-ink transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-sans text-label-sm text-subtle">
            &copy; {year} AI Ethics Blog. All rights reserved.
          </p>
          <p className="font-sans text-label-sm text-subtle italic">
            &ldquo;The algorithm is as much a lens as it is a tool.&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
