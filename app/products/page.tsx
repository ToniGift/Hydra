import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Products — Hydra Agency",
  description:
    "ISO-certified pre-insulated PEX pipelines, geothermal pipes, brass fittings and accessories. Sourced directly from certified manufacturers. No prices listed — request a quote.",
};

const products = [
  {
    title: "Pre-insulated PEX Pipelines",
    category: "Core Product",
    description:
      "Single, double, triple and quadruple-pipe systems in one casing. Designed for district heating, domestic hot water and water supply networks in residential and commercial builds.",
    specs: [
      { label: "Diameter Range", value: "16–125mm" },
      { label: "Coil Length", value: "Up to 100m" },
      { label: "Max Temperature", value: "95°C" },
      { label: "Max Pressure", value: "6 bar" },
    ],
    image: "/product-pex.png",
    imageBg: "bg-white",
    imageStyle: "object-contain p-4",
    accent: "border-t-hydra-blue",
    specsBg: "bg-blue-50",
    specsText: "text-hydra-blue",
    tag: "Most Popular",
    tagColor: "bg-hydra-blue/10 text-hydra-blue border-hydra-blue/20",
    applications: ["District Heating", "DHW Networks", "Residential", "Commercial"],
    appBg: "bg-blue-100 text-blue-700",
  },
  {
    title: "Geothermal Pipes",
    category: "Specialist System",
    description:
      "High-thermal-efficiency pipes engineered for ground source heat pump installations. Flexible twin-pipe configurations for horizontal and vertical borehole loops.",
    specs: [
      { label: "System Type", value: "Ground Source" },
      { label: "Configuration", value: "Twin-pipe" },
      { label: "Flexibility", value: "High — coil supply" },
      { label: "Certification", value: "ISO 15875" },
    ],
    image: "/product-geothermal.png",
    imageBg: "bg-white",
    imageStyle: "object-contain p-4",
    accent: "border-t-hydra-blue",
    specsBg: "bg-blue-50",
    specsText: "text-hydra-blue",
    tag: "Geothermal",
    tagColor: "bg-hydra-blue/10 text-hydra-blue border-hydra-blue/20",
    applications: ["Ground Source Heat Pumps", "Borehole Loops", "Geothermal Energy"],
    appBg: "bg-blue-100 text-blue-700",
  },
  {
    title: "Brass Fittings",
    category: "Connection Components",
    description:
      "Premium brass alloy fittings for secure, leak-proof PEX pipe connections. Corrosion resistant and compatible with all pre-insulated pipe systems.",
    specs: [
      { label: "Material", value: "Brass alloy" },
      { label: "Compatibility", value: "All PEX systems" },
      { label: "Corrosion", value: "Fully resistant" },
      { label: "Sizes", value: "16–125mm" },
    ],
    image: "/product-connector.png",
    imageBg: "bg-white",
    imageStyle: "object-contain p-4",
    accent: "border-t-hydra-blue",
    specsBg: "bg-blue-50",
    specsText: "text-hydra-blue",
    tag: "Accessories",
    tagColor: "bg-hydra-blue/10 text-hydra-blue border-hydra-blue/20",
    applications: ["PEX Connections", "System Joints", "Manifolds"],
    appBg: "bg-blue-100 text-blue-700",
  },
  {
    title: "Installation Accessories",
    category: "Installation Sets",
    description:
      "Complete accessory sets for professional pre-insulated pipe installation — including heat-shrink end caps, wall penetration sleeves, elbow supports and full kits.",
    specs: [
      { label: "Includes", value: "End caps, sleeves" },
      { label: "Supports", value: "Elbow & pipe" },
      { label: "Application", value: "All systems" },
      { label: "Compliance", value: "ISO compatible" },
    ],
    image: "/product-accessories.png",
    imageBg: "bg-white",
    imageStyle: "object-contain p-6",
    accent: "border-t-hydra-blue",
    specsBg: "bg-blue-50",
    specsText: "text-hydra-blue",
    tag: "Full Kits",
    tagColor: "bg-hydra-blue/10 text-hydra-blue border-hydra-blue/20",
    applications: ["Wall Penetrations", "End Sealing", "Pipe Support"],
    appBg: "bg-blue-100 text-blue-700",
  },
];

export default function ProductsPage() {
  return (
    <div className="page-fade">
      {/* ── Page Header ─────────────────────────────────────────────────── */}
      <div className="bg-hydra-navy py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-navy opacity-50" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-hydra-gold border border-hydra-gold/30 bg-hydra-gold/10 px-4 py-1.5 rounded-full mb-4">
            Product Catalogue
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            ISO-Certified Products
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            All products are sourced directly from our certified manufacturer network.
            Every item carries ISO certification and full technical documentation.
            No prices listed — request a tailored quote for your project.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            {["ISO Certified", "Factory-Direct", "Full Documentation", "24h Quote"].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 border border-slate-600 bg-slate-800/60 px-3 py-1.5 rounded-full"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-hydra-gold" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Products Grid ───────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 gap-7">
          {products.map((product) => (
            <div
              key={product.title}
              className={`group bg-white rounded-2xl border-t-4 border border-slate-200 ${product.accent} overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300`}
            >
              {/* Image */}
              <div className={`relative h-52 sm:h-60 overflow-hidden ${product.imageBg}`}>
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className={`${product.imageStyle} ${"imageFilter" in product ? (product as {imageFilter: string}).imageFilter : ""} group-hover:scale-105 transition-transform duration-500`}
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                {product.imageStyle === "object-cover" && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                )}
                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                  <span className={`text-xs font-semibold uppercase tracking-wide ${product.imageStyle === "object-cover" ? "text-white/90" : "text-slate-600 bg-white/80 px-2 py-0.5 rounded-md"}`}>
                    {product.category}
                  </span>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${product.tagColor}`}>
                    {product.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="font-display font-bold text-slate-900 text-lg mb-2 group-hover:text-hydra-blue transition-colors">
                  {product.title}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {product.description}
                </p>

                {/* Specs grid */}
                <div className="grid grid-cols-2 gap-2.5 mb-5">
                  {product.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className={`${product.specsBg} rounded-xl px-3 py-2.5`}
                    >
                      <div className="text-xs text-slate-500 mb-0.5">{spec.label}</div>
                      <div className={`text-sm font-bold ${product.specsText}`}>{spec.value}</div>
                    </div>
                  ))}
                </div>

                {/* Applications */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {product.applications.map((app) => (
                    <span
                      key={app}
                      className={`text-xs font-medium px-2.5 py-1 rounded-full ${product.appBg}`}
                    >
                      {app}
                    </span>
                  ))}
                </div>

                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center w-full gap-2 py-3 rounded-xl bg-hydra-blue hover:bg-hydra-blue-dark text-white text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  Request a Quote
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-hydra-navy to-slate-900 p-8 sm:p-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-navy opacity-40" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-hydra-blue/10 rounded-full blur-3xl" />
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-bold text-white text-xl mb-2">
                Not sure which product you need?
              </h3>
              <p className="text-slate-400 text-sm max-w-lg">
                Describe your project and our technical team will specify the right pipe system,
                diameter and configuration — at factory-direct pricing.
              </p>
            </div>
            <Link
              href="/quote"
              className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-hydra-gold hover:bg-hydra-gold-light text-hydra-navy font-bold text-sm transition-all duration-200 shadow-md hover:-translate-y-0.5"
            >
              Get a Free Quote
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
