const signals = [
  "Authorised Synco partner",
  "ISO certified",
  "Patents P-189276 & P-191992",
  "Response within 24hrs",
  "Factory-direct expertise",
];

export function TrustSignals() {
  return (
    <div className="flex flex-wrap gap-6 py-4 px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-slate-800">
      {signals.map((signal) => (
        <div key={signal} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          {signal}
        </div>
      ))}
    </div>
  );
}
