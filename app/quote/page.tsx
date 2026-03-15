import { QuoteForm } from "@/components/QuoteForm";

export const metadata = {
  title: "Request a Quote — Hydra",
  description: "Request a quote for pre-insulated PEX pipes, geothermal pipes, brass fittings and accessories. Hydra responds within 24 hours.",
};

export default function QuotePage() {
  return (
    <div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-8">
          <h1 className="font-display text-2xl sm:text-3xl font-medium text-slate-900 dark:text-white mb-2">
            Request a Quote
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Fill in your project details. Hydra will respond within 24–48 hours with pricing and availability.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8">
          <QuoteForm />
        </div>
      </div>
    </div>
  );
}
