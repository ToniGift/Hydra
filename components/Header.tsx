"use client";

import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
  { href: "/quote", label: "Get a Quote" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-display font-medium text-lg text-slate-900 dark:text-white">
          <div className="w-7 h-7 rounded-md bg-hydra-blue flex items-center justify-center">
            <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 text-white">
              <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
              <path d="M10 2C10 2 14 6 14 10C14 14 10 18 10 18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M10 2C10 2 6 6 6 10C6 14 10 18 10 18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M2 10H18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
          Hydra
        </Link>

        <nav className="hidden sm:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 rounded-md text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/quote"
          className="bg-hydra-blue hover:bg-hydra-blue-dark text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
        >
          Request Quote
        </Link>
      </div>
    </header>
  );
}
