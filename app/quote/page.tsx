import { QuoteForm } from "@/components/QuoteForm";

export const metadata = {
  title: "Request a Quote — Hydra Agency",
  description:
    "Request a factory-direct quote for pre-insulated PEX pipes, geothermal pipes, brass fittings and accessories. Hydra Agency responds within 24 hours with tailored pricing.",
};

export default function QuotePage() {
  return (
    <div className="page-fade">
      {/* ── Page Header ─────────────────────────────────────────────────── */}
      <div className="bg-hydra-navy py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-navy opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-hydra-gold/5 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-hydra-gold border border-hydra-gold/30 bg-hydra-gold/10 px-4 py-1.5 rounded-full mb-4">
            Factory-Direct Pricing
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Request a Quote
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
            Fill in your project details in 3 simple steps. Hydra will respond within 24–48
            hours with factory-direct pricing and product availability.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {[
              { icon: "⚡", label: "24h Response" },
              { icon: "🏭", label: "Factory-Direct" },
              { icon: "✅", label: "ISO Certified" },
              { icon: "🌍", label: "NG & EU Delivery" },
            ].map((badge) => (
              <span
                key={badge.label}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 border border-slate-600 bg-slate-800/60 px-3 py-1.5 rounded-full"
              >
                {badge.icon} {badge.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Form ────────────────────────────────────────────────────────── */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-white rounded-2xl border border-slate-200 p-7 sm:p-10 shadow-sm">
          <QuoteForm />
        </div>

        {/* Trust note */}
        <div className="mt-6 flex items-start gap-3 p-4 rounded-xl section-gold">
          <div className="w-8 h-8 rounded-lg bg-hydra-gold flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">
            <strong className="text-slate-900">Your information is secure.</strong>{" "}
            Quote requests are handled exclusively by the Hydra Agency team. We never share
            your details with third parties. Expect a personal response within 24–48 hours.
          </p>
        </div>
      </div>
    </div>
  );
}
