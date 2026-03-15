import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";

const products = [
  {
    title: "Pre-insulated PEX Pipelines",
    description:
      "Single, double, triple & quadruple-pipe systems in one casing. For heating, DHW & water supply networks.",
    specs: ["16–125mm", "Up to 100m coils", "95°C / 6 bar"],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80",
    colorClass: "blue" as const,
  },
  {
    title: "Geothermal Pipes",
    description:
      "Designed for ground source heat pump installations. High thermal efficiency, flexible for horizontal and vertical loops.",
    specs: ["Geothermal", "Heat pumps", "Flexible"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    colorClass: "green" as const,
  },
  {
    title: "Brass Fittings",
    description:
      "High-quality brass fittings for PEX pipe connections. Corrosion resistant, compatible with all Synco pipe systems.",
    specs: ["Brass alloy", "Corrosion resistant", "All sizes"],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80",
    colorClass: "amber" as const,
  },
  {
    title: "Accessories",
    description:
      "Heat-shrink end caps, wall penetrations, elbow supports & complete installation accessory sets.",
    specs: ["End caps", "Wall penetrations", "Elbow supports"],
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    colorClass: "purple" as const,
  },
];

export default function ProductsPage() {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-8">
          <h1 className="font-display text-2xl sm:text-3xl font-medium text-slate-900 dark:text-white mb-2">
            Products
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            All products manufactured by Synco (Poland) — ISO certified, patented PEX technology. No prices listed — request a quote for your project.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>

        <div className="mt-8 p-5 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Prices available on request — tailored to your project size, pipe specification and destination country.
          </p>
          <Link
            href="/quote"
            className="shrink-0 bg-hydra-blue hover:bg-hydra-blue-dark text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
