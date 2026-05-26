"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useEffect } from "react";

interface NavLink {
  label: string;
  href: string;
}

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
  currentPath: string;
}

export default function MobileDrawer({
  isOpen,
  onClose,
  navLinks,
  currentPath,
}: MobileDrawerProps) {
  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-ink/40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-background flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 h-14 border-b border-border">
          <span className="font-serif text-sm font-bold tracking-[0.18em] uppercase text-ink">
            AI Ethics Blog
          </span>
          <button
            onClick={onClose}
            className="p-1 text-muted hover:text-ink transition-colors"
            aria-label="Close menu"
          >
            <X size={20} strokeWidth={1.75} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-5 pt-6 gap-1" aria-label="Mobile navigation">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? currentPath === "/" : currentPath.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-base py-2.5 border-b border-border transition-colors ${
                  isActive ? "text-ink font-semibold" : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer of drawer */}
        <div className="mt-auto px-5 pb-8 pt-6 border-t border-border">
          <p className="font-sans text-label-sm text-subtle uppercase tracking-widest">
            AI &amp; Bioethics
          </p>
        </div>
      </div>
    </>
  );
}
