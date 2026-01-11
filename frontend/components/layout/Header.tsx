"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/glass/card";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setSearchQuery,
  setContentTypeFilter,
  toggleSidebar,
} from "@/store/slices/uiSlice";

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

  const handleFilterClick = (
    filterValue: "all" | "news" | "movie" | "social"
  ) => {
    dispatch(setContentTypeFilter(filterValue));
  };

  return (
    <header className="h-14 px-4 fixed top-5 left-0 md:left-64 right-0 z-10">
      <div className="max-w-7xl mx-auto h-full px-2">
        <Card
          variant="frosted"
          className="h-full flex items-center px-3 md:px-6 py-2"
        >
          <div className="w-full flex items-center justify-between gap-2 md:gap-8">
            {/* Left - Hamburger Menu (Mobile only) */}
            <button
              onClick={() => dispatch(toggleSidebar())}
              className="md:hidden p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all"
              aria-label="Toggle menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            <div className="md:hidden w-30 h-full flex items-center">
              <Image
                src="/logo.png"
                alt="DailyDash Logo"
                width={130}
                height={60}
                className="object-contain h-auto"
              />
            </div>
            {/* Center - Search */}
            <div className="hidden md:block flex-1 max-w-md">
              <div className="relative">
                <div className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 text-white/50 text-sm">
                  🔍
                </div>
                <input
                  type="text"
                  value={localSearch}
                  onChange={(e) => setLocalSearch(e.target.value)}
                  placeholder="Search…"
                  className="w-full pl-8 md:pl-9 pr-2 md:pr-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/30 transition-all"
                />
              </div>
            </div>

            {/* Right - Filters */}
            <div className="hidden md:flex items-center gap-1 min-w-fit">
              {filterOptions.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => handleFilterClick(filter.value)}
                  className={`px-2 md:px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                    activeFilter === filter.value
                      ? "bg-white/25 text-white backdrop-blur-sm"
                      : "text-white/60 hover:text-white/90 hover:bg-white/10"
                  }`}
                >
                  <span className="hidden sm:inline">{filter.label}</span>
                  <span className="sm:hidden">{filter.label.charAt(0)}</span>
                </button>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </header>
  );
}
