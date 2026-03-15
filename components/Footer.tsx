import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-display font-medium text-slate-900 dark:text-white">
            <div className="w-6 h-6 rounded bg-hydra-blue" />
            Hydra
          </div>
          <nav className="flex items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              About
            </Link>
            <Link href="/products" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Products
            </Link>
            <Link href="/contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="/quote" className="hover:text-hydra-blue font-medium transition-colors">
              Request Quote
            </Link>
          </nav>
        </div>
        <p className="mt-6 text-center sm:text-left text-xs text-slate-500 dark:text-slate-500" suppressHydrationWarning>
          © {new Date().getFullYear()} Hydra. Pre-insulated piping solutions for Europe.
        </p>
      </div>
    </footer>
  );
}
