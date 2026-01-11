"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/glass/card";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSearchQuery, setContentTypeFilter } from "@/store/slices/uiSlice";

const filterOptions = [
  { value: "all" as const, label: "All" },
  { value: "news" as const, label: "News" },
  { value: "movie" as const, label: "Movies" },
  { value: "social" as const, label: "Social" },
];

export function Header() {
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector((state) => state.ui.searchQuery);
  const activeFilter = useAppSelector((state) => state.ui.contentTypeFilter);
  const [localSearch, setLocalSearch] = useState(searchQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setSearchQuery(localSearch));
    }, 300);

    return () => clearTimeout(timer);
  }, [localSearch, dispatch]);

  const handleFilterClick = (filterValue: "all" | "news" | "movie" | "social") => {
    dispatch(setContentTypeFilter(filterValue));
  };

  return (
    <header className="h-14 px-4 fixed top-5 left-64 right-0 z-10">
      <div className="max-w-7xl mx-auto h-full px-2">
        <Card variant="frosted" className="h-full flex items-center px-6 py-2">
          <div className="w-full flex items-center justify-between gap-8">
            {/* Center - Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 text-sm">
                  🔍
                </div>
                <input
                  type="text"
                  value={localSearch}
                  onChange={(e) => setLocalSearch(e.target.value)}
                  placeholder="Search content…"
                  className="w-full pl-9 pr-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/30 transition-all"
                />
              </div>
            </div>

            {/* Right - Filters */}
            <div className="flex items-center gap-1 min-w-fit">
              {filterOptions.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => handleFilterClick(filter.value)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                    activeFilter === filter.value
                      ? "bg-white/25 text-white backdrop-blur-sm"
                      : "text-white/60 hover:text-white/90 hover:bg-white/10"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </header>
  );
}
