import HeroSection from "@/components/home/HeroSection";
import Navbar from "@/components/home/Navbar";
import PropertyCard from "@/components/common/Card";
import FiltersBar, { SortValue } from "@/components/home/FiltersBar";

import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import type { PropertyProps } from "@/interfaces";

type ChipKey =
  | "all"
  | "top_villa"
  | "free_reschedule"
  | "book_now_pay_later"
  | "self_checkin"
  | "instant_book";

function hasCategory(property: PropertyProps, keyword: string) {
  return (property.category ?? []).some((c) =>
    (c?.name ?? "").toLowerCase().includes(keyword.toLowerCase())
  );
}

function matchChip(property: PropertyProps, chip: ChipKey) {
  if (chip === "all") return true;

  if (chip === "top_villa") return hasCategory(property, "top");
  if (chip === "free_reschedule") return hasCategory(property, "reschedule");
  if (chip === "book_now_pay_later") return hasCategory(property, "pay later");
  if (chip === "self_checkin") return hasCategory(property, "self");
  if (chip === "instant_book") return hasCategory(property, "instant");

  return true;
}

export default function Home() {
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [loading, setLoading] = useState(true);

  const [activeChip, setActiveChip] = useState<ChipKey>("all");
  const [sort, setSort] = useState<SortValue>("highest");

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get<PropertyProps[]>(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/properties`
        );
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const visibleProperties = useMemo(() => {
    const filtered = properties.filter((p) => matchChip(p, activeChip));

    const sorted = [...filtered].sort((a, b) => {
      const priceA = Number(a.price ?? 0);
      const priceB = Number(b.price ?? 0);
      const ratingA = Number(a.rating ?? 0);
      const ratingB = Number(b.rating ?? 0);

      if (sort === "highest") return priceB - priceA;
      if (sort === "lowest") return priceA - priceB;
      if (sort === "rating") return ratingB - ratingA;

      return 0;
    });

    return sorted;
  }, [properties, activeChip, sort]);

  if (loading) {
    return <p className="text-center py-10 text-stone-500">Loading...</p>;
  }

  if (!loading && visibleProperties.length === 0) {
    return (
      <p className="text-center py-10 text-stone-500">
        No properties match this filter.
      </p>
    );
  }

  return (
  <div className="min-h-screen bg-white">
    <Navbar />
    <HeroSection />

    <FiltersBar
      activeKey={activeChip}
      onChange={(key) => setActiveChip(key as ChipKey)}
      sort={sort}
      onSortChange={setSort}
    />

    <main className="px-6 md:px-10 mt-6">
      {loading ? (
        <p className="text-center py-10 text-stone-500">Loading...</p>
      ) : visibleProperties.length === 0 ? (
        <p className="text-center py-10 text-stone-500">
          No properties match this filter.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}

      <div className="flex justify-center py-10">
        <button className="px-10 py-3 rounded-full bg-stone-900 text-white font-medium hover:bg-stone-800 active:scale-95 transition">
          Show more
        </button>
      </div>
    </main>
  </div>
);

}
