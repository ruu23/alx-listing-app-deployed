import type { PropertyProps } from "@/interfaces/index";
import Image from "next/image";

type Props = {
  property: PropertyProps;
};

export default function PropertyCard({ property }: Props) {
  const tags = [
    property.category?.[0]?.name ?? "Top Villa",
    "Self Checkin",
    "Free Reschedule",
  ].filter(Boolean);

  return (
    <div className="group rounded-2xl border border-stone-200 bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="relative w-full h-[210px] overflow-hidden">
        <Image
          src={property.image}
          alt={property.name}
          fill
          className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
        />

        {/* Discount badge */}
        {property.discount && (
          <span className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            {property.discount}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 text-[11px] text-stone-600 font-medium mb-2">
          {tags.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full bg-stone-100 border border-stone-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title + rating */}
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-[15px] font-semibold text-stone-900 leading-snug line-clamp-1">
              {property.name}
            </h3>
            <p className="text-sm text-stone-500 line-clamp-1 mt-0.5">
              {property.address?.city ?? "Unknown city"},{" "}
              {property.address?.country ?? ""}
            </p>
          </div>

          {/* Rating */}
          {property.rating != null && (
            <div className="flex items-center gap-1 text-sm font-semibold text-stone-900">
              <span>⭐</span>
              <span>{property.rating}</span>
            </div>
          )}
        </div>

        {/* Offers row */}
        <div className="flex items-center gap-4 text-stone-600 text-xs mt-4">
          <span className="flex items-center gap-1">
            🛏️ {property.offers?.bed ?? "-"}
          </span>
          <span className="flex items-center gap-1">
            🚿 {property.offers?.shower ?? "-"}
          </span>
          <span className="flex items-center gap-1">
            👤 {property.offers?.occupants ?? "-"}
          </span>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-center justify-between">
          <p className="text-stone-900 font-semibold">
            ${property.price}
            <span className="text-stone-500 font-normal text-sm"> / night</span>
          </p>

          <button className="text-sm font-medium text-stone-900 hover:underline">
            View
          </button>
        </div>
      </div>
    </div>
  );
}
