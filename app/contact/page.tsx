import Link from "next/link";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact — Hydra Forge",
  description:
    "Get in touch with Hydra Forge. Nigeria-based Client-to-Manufacturer agency for pre-insulated piping. We respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <div className="page-fade">
      {/* ── Page Header ─────────────────────────────────────────────────── */}
      <div className="bg-hydra-navy py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-navy opacity-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-hydra-blue/10 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-hydra-gold border border-hydra-gold/30 bg-hydra-gold/10 px-4 py-1.5 rounded-full mb-4">
            Get in Touch
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Contact Hydra <span className="text-hydra-gold">Forge</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-xl">
            General inquiries, partnership discussions, or just exploring options — we
            respond to every message within 24 hours.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-14">
          {/* ── Left: Company Info ─────────────────────────────────────── */}
          <div className="lg:col-span-2 space-y-6">
            {/* Lagos / operations image */}
            <div className="relative h-44 rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/img-3.jpeg"
                alt="Hydra Agency factory operations — pre-insulated pipe systems"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-hydra-navy/85 via-hydra-navy/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center px-6">
                <div className="text-hydra-gold text-xs font-bold uppercase tracking-widest mb-1">Headquartered in</div>
                <div className="font-display font-bold text-white text-xl">Lagos, Nigeria</div>
                <div className="text-slate-300 text-xs mt-1">Operating across West Africa &amp; Europe</div>
              </div>
            </div>

            {/* Company Details */}
            <div className="p-6 rounded-2xl section-blue">
              <h2 className="font-display font-bold text-slate-900 mb-5 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-hydra-blue flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                Company Details
              </h2>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-0.5">Registered Name</dt>
                  <dd className="font-semibold text-slate-900">Hydra Forge Ltd</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-0.5">Address</dt>
                  <dd className="text-slate-700">
                    123 Adeola Odeku Street<br />
                    Victoria Island, Lagos<br />
                    Nigeria
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-0.5">RC Number (CAC)</dt>
                  <dd className="text-slate-700">RC 1234567</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-0.5">Partner Status</dt>
                  <dd>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-hydra-gold bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-hydra-gold" />
                      Authorised Manufacturer Partner
                    </span>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Languages */}
            <div className="p-6 rounded-2xl section-purple">
              <h2 className="font-display font-bold text-slate-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-violet-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                Languages
              </h2>
              <div className="flex flex-wrap gap-2">
                {["English", "Yoruba", "Igbo", "French", "Hausa"].map((lang) => (
                  <span
                    key={lang}
                    className="text-xs font-medium text-violet-700 bg-violet-100 border border-violet-200 px-3 py-1.5 rounded-full"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div className="p-6 rounded-2xl section-emerald">
              <h2 className="font-display font-bold text-slate-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                Connect
              </h2>
              <div className="space-y-3">
                <a
                  href="https://instagram.com/hydra_agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 text-white font-semibold text-sm transition-all shadow-sm"
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  <div>
                    <div>Instagram</div>
                    <div className="text-xs font-normal opacity-80">@hydra_agency</div>
                  </div>
                </a>
                <a
                  href="https://linkedin.com/company/hydra-agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors shadow-sm"
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <div>
                    <div>LinkedIn</div>
                    <div className="text-xs font-normal opacity-80">Hydra Forge</div>
                  </div>
                </a>
                <a
                  href="mailto:info@hydra-agency.com"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-700 hover:bg-slate-800 text-white font-semibold text-sm transition-colors shadow-sm"
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <div>Email</div>
                    <div className="text-xs font-normal opacity-80">info@hydra-agency.com</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* ── Right: Contact Form ────────────────────────────────────── */}
          <div className="lg:col-span-3">
            <div className="p-7 sm:p-8 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <h2 className="font-display text-xl font-bold text-slate-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-slate-600 text-sm mb-6">
                For general inquiries. For formal project quotes, please use{" "}
                <Link href="/quote" className="text-hydra-blue hover:underline font-semibold">
                  Request a Quote
                </Link>{" "}
                — it captures the project details we need to price accurately.
              </p>
              <ContactForm />
            </div>

            {/* Quick note */}
            <div className="mt-5 flex items-start gap-3 p-4 rounded-xl bg-blue-50 border border-blue-200">
              <svg className="w-5 h-5 text-hydra-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-slate-700">
                <strong className="text-slate-900">Planning a procurement project?</strong>{" "}
                Use our{" "}
                <Link href="/quote" className="text-hydra-blue font-semibold hover:underline">
                  Quote Request form
                </Link>{" "}
                — it includes fields for pipe spec, diameter, quantity and delivery country so we can respond with accurate factory-direct pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
