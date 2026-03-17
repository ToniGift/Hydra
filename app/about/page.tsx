import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us — Hydra Merge",
  description:
    "Hydra Merge is Nigeria's authorised Client-to-Manufacturer bridge for pre-insulated pipe systems. Learn how we connect contractors and developers directly to ISO-certified manufacturers across West Africa and Europe.",
};

export default function AboutPage() {
  return (
    <div className="page-fade">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-hydra-navy py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-navy opacity-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-hydra-blue/10 rounded-full blur-3xl" />
        <div className="relative flex flex-col items-center justify-center text-center px-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-hydra-gold border border-hydra-gold/40 bg-hydra-gold/15 px-4 py-1.5 rounded-full mb-4">
            Our Story
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">
            About Hydra <span className="text-hydra-gold">Merge</span>
          </h1>
          <p className="text-slate-300 mt-3 text-base max-w-md">
            Nigeria&apos;s bridge between clients and manufacturers — since day one.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* ── Our Mission ───────────────────────────────────────────────── */}
        <section className="mb-16 grid lg:grid-cols-2 gap-8 items-center">
          <div className="p-8 sm:p-10 rounded-2xl section-blue">
            <span className="text-xs font-semibold uppercase tracking-widest text-hydra-blue mb-3 block">
              Our Mission
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-5">
              Eliminating the Middlemen in Industrial Supply
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Hydra Merge was established to solve a fundamental problem: construction firms,
              contractors and developers in Nigeria and across Africa were paying unnecessary
              premiums through layers of distribution — without access to the manufacturer&apos;s
              direct pricing, technical documentation, or quality guarantees.
            </p>
            <p className="text-slate-700 leading-relaxed">
              We built Hydra Merge as an authorised agency bridge — connecting our clients directly
              to our certified manufacturer network. Every product we source is ISO
              certified, backed by full technical documentation, and delivered with
              manufacturer-certified support. Our value is not just in supply — it is in the
              long-term relationships we build between clients and the factories that serve them.
            </p>
          </div>
          <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/img-3.jpeg"
              alt="Hydra Agency factory operations — workers handling pre-insulated pipes"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </section>

        {/* ── Photo Gallery ─────────────────────────────────────────────── */}
        <section className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-hydra-blue mb-3 block">
            Our Products
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            Direct from the Factory Floor
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { src: "/img-6.jpeg", alt: "Pre-insulated pipes with red protective caps ready for dispatch" },
              { src: "/img-2.jpeg", alt: "Multi-pipe PEX bundle with blue inner pipes — factory detail" },
              { src: "/img-9.jpeg", alt: "Fan arrangement of pre-insulated pipes — product showcase" },
              { src: "/img-5.jpeg", alt: "Cross-section detail of pre-insulated pipe end cap" },
            ].map((img, i) => (
              <div key={i} className="relative h-44 sm:h-52 rounded-xl overflow-hidden shadow-md group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ── Why Hydra ──────────────────────────────────────────────────── */}
        <section className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-hydra-blue mb-3 block">
            Our Advantages
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
            Why Choose Hydra Merge?
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                icon: "🏭",
                title: "Factory-Direct Access",
                description: "We connect you directly to ISO-certified manufacturers — cutting out layers of distribution and mark-up.",
                bg: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200",
                iconBg: "bg-blue-500",
              },
              {
                icon: "✅",
                title: "ISO-Certified Products",
                description: "Every product we source carries ISO certification and full technical documentation for compliance and peace of mind.",
                bg: "bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200",
                iconBg: "bg-emerald-500",
              },
              {
                icon: "⚡",
                title: "24h Quote Turnaround",
                description: "Submit your project details and receive a tailored, factory-direct quote within 24 to 48 hours.",
                bg: "bg-gradient-to-br from-amber-50 to-orange-100 border-amber-200",
                iconBg: "bg-amber-500",
              },
            ].map((item) => (
              <div key={item.title} className={`rounded-2xl border p-6 ${item.bg}`}>
                <div className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center text-xl mb-4 shadow-sm`}>
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base mb-2">{item.title}</h3>
                <p className="text-sm text-slate-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Success Stories ───────────────────────────────────────────── */}
        <section className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-hydra-blue mb-3 block">
            Client Success
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
            Case Studies
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                type: "Residential Construction",
                client: "BuildRight Nigeria Ltd",
                location: "Lagos Island, Nigeria",
                story:
                  "BuildRight required pre-insulated PEX pipes for a 240-unit housing development in Lagos. Hydra Merge connected them directly to the manufacturing facility, bypassing three distribution layers — delivering ISO-certified product at factory-direct cost and on a 6-week lead time.",
                image: "/img-4.jpeg",
                metrics: [
                  { label: "Units Served", value: "240+" },
                  { label: "Cost Saving", value: "30%" },
                  { label: "Lead Time", value: "6 wks" },
                ],
                accentColor: "border-t-hydra-blue",
                metricColor: "text-hydra-blue",
                metricBg: "bg-blue-50",
              },
              {
                type: "Commercial & Industrial",
                client: "Apex Infrastructure Ltd",
                location: "Abuja, Nigeria",
                story:
                  "Apex Infrastructure required geothermal and district heating pipe systems for a commercial campus in Abuja FCT. Hydra Merge coordinated a factory-direct arrangement, provided full ISO documentation and manufacturer-certified installation guidance throughout the project.",
                image: "/img-8.jpeg",
                metrics: [
                  { label: "Pipe Diameter", value: "63mm" },
                  { label: "Total Run", value: "2.4km" },
                  { label: "Certification", value: "ISO 15875" },
                ],
                accentColor: "border-t-emerald-500",
                metricColor: "text-emerald-600",
                metricBg: "bg-emerald-50",
              },
            ].map((case_) => (
              <div
                key={case_.client}
                className={`rounded-2xl border border-slate-200 border-t-4 ${case_.accentColor} bg-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden`}
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={case_.image}
                    alt={case_.client}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hydra-navy/80 via-hydra-navy/20 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <div className="text-xs font-bold uppercase tracking-widest text-hydra-gold mb-0.5">
                      {case_.type}
                    </div>
                    <div className="flex items-center gap-1.5 text-white/70 text-xs">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      {case_.location}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-slate-900 text-lg mb-3">
                    {case_.client}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {case_.story}
                  </p>
                  <div className={`flex gap-5 rounded-xl ${case_.metricBg} p-3`}>
                    {case_.metrics.map((m) => (
                      <div key={m.label}>
                        <div className={`font-display font-bold ${case_.metricColor} text-base`}>{m.value}</div>
                        <div className="text-xs text-slate-500">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Company Info ──────────────────────────────────────────────── */}
        <section className="mb-12 p-7 rounded-2xl section-gold">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-3 block">
            Registration
          </span>
          <h2 className="font-display text-lg font-bold text-slate-900 mb-4">
            Company Details
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-700">
            <div>
              <div className="font-semibold text-slate-900 mb-1">Hydra Merge Ltd.</div>
              <div>123 Adeola Odeku Street</div>
              <div>Victoria Island, Lagos</div>
              <div>Nigeria</div>
            </div>
            <div>
              <div className="flex gap-2 mb-1">
                <span className="font-semibold text-slate-900">RC Number:</span>
                <span>1234567</span>
              </div>
              <div className="flex gap-2 mb-1">
                <span className="font-semibold text-slate-900">Languages:</span>
                <span>English, Yoruba, Igbo, French</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold text-slate-900">Status:</span>
                <span className="text-hydra-blue font-semibold">Authorised Manufacturer Partner</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section className="text-center p-10 rounded-2xl bg-gradient-to-br from-hydra-blue via-blue-700 to-indigo-800 text-white shadow-xl shadow-blue-900/20">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-blue-200 bg-white/10 border border-white/20 px-3 py-1 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-hydra-gold" />
            Let&apos;s Work Together
          </div>
          <h3 className="font-display text-2xl font-bold mb-3">
            Ready to start your project?
          </h3>
          <p className="text-blue-100 mb-7 text-sm max-w-sm mx-auto leading-relaxed">
            Tell us about your project and we&apos;ll put you in direct contact with the right manufacturer at factory-direct pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-hydra-gold hover:bg-hydra-gold-light text-hydra-navy font-bold text-sm transition-all duration-200 shadow-md hover:-translate-y-0.5"
            >
              Get in Touch
            </Link>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl border border-white/30 text-white hover:bg-white/10 font-semibold text-sm transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
