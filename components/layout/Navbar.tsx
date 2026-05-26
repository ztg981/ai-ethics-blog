"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Search, Menu } from "lucide-react";
import MobileDrawer from "./MobileDrawer";

const NAV_LINKS = [
  { label: "Latest", href: "/" },
  { label: "Archives", href: "/archives" },
  { label: "Topics", href: "/topics" },
  { label: "Saved", href: "/saved" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full bg-background transition-shadow duration-200 ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        {/* Top rule */}
        <div className="h-px bg-ink" />

        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Left: hamburger (mobile) */}
            <div className="flex items-center w-8">
              <button
                onClick={() => setDrawerOpen(true)}
                className="md:hidden p-1 -ml-1 text-ink hover:text-navy transition-colors"
                aria-label="Open menu"
              >
                <Menu size={20} strokeWidth={1.75} />
              </button>
            </div>

            {/* Center: logo + nav links */}
            <div className="flex items-center gap-8">
              <Link
                href="/"
                className="font-serif text-sm font-bold tracking-[0.18em] uppercase text-ink hover:text-navy transition-colors"
              >
                AI Ethics Blog
              </Link>
              <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
                {NAV_LINKS.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`font-sans text-[0.8125rem] font-medium transition-colors pb-px ${
                        isActive
                          ? "text-ink border-b border-ink"
                          : "text-muted hover:text-ink"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Right: search */}
            <div className="flex items-center w-8 justify-end">
              <Link
                href="/search"
                className="p-1 text-muted hover:text-ink transition-colors"
                aria-label="Search"
              >
                <Search size={18} strokeWidth={1.75} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="h-px bg-border" />
      </header>

      <MobileDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        navLinks={NAV_LINKS}
        currentPath={pathname}
      />
    </>
  );
}
