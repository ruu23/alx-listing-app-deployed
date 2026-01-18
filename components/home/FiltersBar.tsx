import { SlidersHorizontal, ChevronDown } from "lucide-react";

type Chip = { key: string; label: string };

export const CHIPS: Chip[] = [
  { key: "all", label: "All" },
  { key: "top_villa", label: "Top Villa" },
  { key: "free_reschedule", label: "Free Reschedule" },
  { key: "book_now_pay_later", label: "Book Now, Pay later" },
  { key: "self_checkin", label: "Self CheckIn" },
  { key: "instant_book", label: "Instant Book" },
];

export type SortValue = "highest" | "lowest" | "rating";

type Props = {
  activeKey: string;
  onChange: (key: string) => void;

  sort: SortValue;
  onSortChange: (value: SortValue) => void;

  onOpenFilter?: () => void;
};

export default function FiltersBar({
  activeKey,
  onChange,
  sort,
  onSortChange,
  onOpenFilter,
}: Props) {
  return (
    <div className="px-6 md:px-10 mt-6">
      <div className="flex items-center justify-between gap-4">
        {/* Left: chips */}
        <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide py-1">
          {CHIPS.map((chip) => {
            const isActive = chip.key === activeKey;
            return (
              <button
                key={chip.key}
                type="button"
                onClick={() => onChange(chip.key)}
                className={[
                  "shrink-0 rounded-full px-5 py-2 text-sm font-medium transition",
                  "border",
                  isActive
                    ? "border-emerald-500 text-emerald-600 bg-emerald-50"
                    : "border-stone-200 text-stone-700 bg-white hover:bg-stone-50",
                ].join(" ")}
              >
                {chip.label}
              </button>
            );
          })}
        </div>

        {/* Right: Filter + Sort */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenFilter}
            className="flex items-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50 transition"
          >
            Filter
            <SlidersHorizontal className="w-4 h-4" />
          </button>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => onSortChange(e.target.value as SortValue)}
              className="appearance-none rounded-full border border-stone-200 bg-white px-5 py-2 pr-10 text-sm font-medium text-stone-700 hover:bg-stone-50 transition focus:outline-none"
            >
              <option value="highest">Sort by: Highest Price</option>
              <option value="lowest">Sort by: Lowest Price</option>
              <option value="rating">Sort by: Rating</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
