import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact — Hydra",
  description: "Get in touch with Hydra. Pre-insulated piping solutions for Europe.",
};

export default function ContactPage() {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h1 className="font-display text-2xl sm:text-3xl font-medium text-slate-900 dark:text-white mb-8">
          Contact
        </h1>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12">
          <div className="space-y-6">
            <section>
              <h2 className="font-display text-lg font-medium text-slate-900 dark:text-white mb-3">
                Company Details
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Hydra Sp. z o.o.<br />
                [Address placeholder]<br />
                NIP: [NIP placeholder]
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-medium text-slate-900 dark:text-white mb-3">
                Languages
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                English, Polish.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-medium text-slate-900 dark:text-white mb-3">
                Connect
              </h2>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/48123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium text-sm transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
                <a
                  href="https://linkedin.com/company/hydra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-800 text-white font-medium text-sm transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </section>
          </div>

          <div>
            <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/30">
              <h2 className="font-display text-lg font-medium text-slate-900 dark:text-white mb-4">
                Contact Form
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                For general inquiries, use the form below. For quotes, please use{" "}
                <Link href="/quote" className="text-hydra-blue hover:underline font-medium">
                  Request a Quote
                </Link>
                .
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
