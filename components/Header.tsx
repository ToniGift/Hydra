"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-hydra-blue flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 text-white">
                <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
                <path d="M10 2C10 2 14 6 14 10C14 14 10 18 10 18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M10 2C10 2 6 6 6 10C6 14 10 18 10 18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M2 10H18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display font-bold text-base text-slate-900 leading-none">
                Hydra <span className="text-hydra-gold">Merge</span>
              </span>
              <span className="text-[10px] font-medium text-slate-400 tracking-wide leading-none mt-0.5">
                Connecting Industry Worldwide
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
                    active
                      ? "bg-hydra-blue/10 text-hydra-blue"
                      : "text-slate-600 hover:bg-hydra-blue/10 hover:text-hydra-blue"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <Link
              href="/quote"
              className="bg-hydra-blue hover:bg-hydra-blue-dark text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors whitespace-nowrap"
            >
              <span className="hidden sm:inline">Request Quote</span>
              <span className="sm:hidden">Quote</span>
            </Link>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="sm:hidden flex items-center justify-center w-9 h-9 rounded-md text-slate-600 hover:bg-hydra-blue/10 hover:text-hydra-blue transition-colors"
            >
              {mobileOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 sm:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed top-16 left-0 right-0 z-40 sm:hidden bg-white border-b border-slate-200 shadow-lg transition-all duration-300 ease-in-out ${
          mobileOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  active
                    ? "bg-hydra-blue/10 text-hydra-blue"
                    : "text-slate-700 hover:bg-hydra-blue/10 hover:text-hydra-blue"
                }`}
              >
                {active && <span className="w-1.5 h-1.5 rounded-full bg-hydra-blue flex-shrink-0" />}
                {link.label}
              </Link>
            );
          })}
          <div className="mt-3 pt-3 border-t border-slate-100">
            <Link
              href="/quote"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-hydra-blue hover:bg-hydra-blue-dark text-white text-sm font-semibold transition-colors"
            >
              Request a Quote
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
