import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us — Hydra",
  description: "Hydra has been existing in Nigeria, connecting clients with manufacturers. We bring quality piping solutions to the market.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-64 sm:h-80">
        <Image
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&q=80"
          alt="Industrial piping systems"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-slate-900/50 flex items-center justify-center">
          <h1 className="font-display text-3xl sm:text-4xl font-medium text-white">
            About Hydra
          </h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-12">
          <h2 className="font-display text-xl font-medium text-slate-900 dark:text-white mb-4">
            Our Story
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            Hydra has been existing in Nigeria, connecting clients with manufacturers. We bring quality piping solutions to the market while maintaining the responsiveness and personal service that larger distributors cannot offer.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            We specialise in pre-insulated pipe systems for district heating, residential developments, commercial buildings and geothermal installations. Every product we supply meets international standards and is backed by trusted manufacturer partnerships.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-xl font-medium text-slate-900 dark:text-white mb-6">
            Our Team
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-xl overflow-hidden shrink-0 bg-slate-200 dark:bg-slate-700">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
                  alt="Founder"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 128px, 160px"
                />
              </div>
              <div>
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">Founder</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Deep expertise in pre-insulated pipe systems and connecting clients with manufacturers.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-xl overflow-hidden shrink-0 bg-slate-200 dark:bg-slate-700">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
                  alt="Co-founder"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 128px, 160px"
                />
              </div>
              <div>
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">Co-founder</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Factory and supply chain expertise. Ensures quality and timely delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-xl font-medium text-slate-900 dark:text-white mb-4">
            Company Details
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Hydra<br />
            [Address placeholder]<br />
            Nigeria
          </p>
        </section>

        <section>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-hydra-blue hover:bg-hydra-blue-dark text-white font-medium transition-colors"
          >
            Get in Touch
          </Link>
        </section>
      </div>
    </div>
  );
}
