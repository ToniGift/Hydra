import Link from "next/link";
import Image from "next/image";
import { TrustSignals } from "@/components/TrustSignals";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&q=80"
            alt="Pre-insulated piping"
            fill
            className="object-cover opacity-20 dark:opacity-10"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <span className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-xs font-medium px-3 py-1 rounded-full mb-4">
            Authorised Synco Partner · ISO Certified Products
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 dark:text-white max-w-2xl leading-tight mb-4">
            Pre-insulated piping for Europe
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed mb-8">
            Hydra connects construction firms, contractors and developers with premium Synco PEX pre-insulated pipe systems. Fast quotes, expert advice, delivery across Europe.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-hydra-blue hover:bg-hydra-blue-dark text-white font-medium transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>

      <TrustSignals />

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { value: "40+", label: "Years of Synco production" },
            { value: "16–125mm", label: "Pipe diameter range" },
            { value: "10+", label: "Countries delivered to" },
            { value: "24h", label: "Quote turnaround" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 sm:p-5"
            >
              <div className="font-display text-xl sm:text-2xl font-medium text-slate-900 dark:text-white">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Markets / Map placeholder */}
      <section className="border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="font-display text-xl font-medium text-slate-900 dark:text-white mb-6">
            Our Markets
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl border-2 border-hydra-blue bg-blue-50/50 dark:bg-blue-900/20 dark:border-hydra-blue">
              <div className="text-2xl mb-2">🇵🇱</div>
              <h3 className="font-medium text-slate-900 dark:text-white mb-1">Poland</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Home base. Direct supply to contractors, developers & municipalities.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
              <div className="text-2xl mb-2">🇪🇺</div>
              <h3 className="font-medium text-slate-900 dark:text-white mb-1">Europe</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Czech Rep., Romania, Germany, Baltics, UK. Competitive pricing vs Uponor & Rehau.
              </p>
            </div>
          </div>
          {/* Map placeholder */}
          <div className="mt-10 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden bg-slate-100 dark:bg-slate-800/50 h-48 flex items-center justify-center">
            <p className="text-slate-500 dark:text-slate-500 text-sm">
              Map: Poland · Europe
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
