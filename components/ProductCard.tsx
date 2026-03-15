import Link from "next/link";
import Image from "next/image";

export interface ProductCardProps {
  title: string;
  description: string;
  specs: string[];
  image?: string;
  icon?: string;
  colorClass: "blue" | "green" | "amber" | "purple";
}

const colorMap = {
  blue: "bg-blue-50 dark:bg-blue-900/20",
  green: "bg-emerald-50 dark:bg-emerald-900/20",
  amber: "bg-amber-50 dark:bg-amber-900/20",
  purple: "bg-violet-50 dark:bg-violet-900/20",
};

export function ProductCard({ title, description, specs, image, icon, colorClass }: ProductCardProps) {
  return (
    <Link
      href="/quote"
      className="block border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden hover:border-hydra-blue transition-colors group"
    >
      <div className={`relative h-40 sm:h-48 ${!image ? colorMap[colorClass] + " flex items-center justify-center text-4xl" : ""}`}>
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        ) : (
          <span>{icon || "📦"}</span>
        )}
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="font-medium text-slate-900 dark:text-white mb-2 group-hover:text-hydra-blue transition-colors">
          {title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {specs.map((spec) => (
            <span
              key={spec}
              className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-1 rounded-full"
            >
              {spec}
            </span>
          ))}
        </div>
        <span className="inline-block mt-3 text-sm font-medium text-hydra-blue group-hover:underline">
          Get a Quote →
        </span>
      </div>
    </Link>
  );
}
