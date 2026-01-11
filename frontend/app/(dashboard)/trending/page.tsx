"use client";

import { useEffect, useState } from "react";
import { ContentCard } from "@/components/content/ContentCard";
import { useGetNewsQuery } from "@/store/services/newsApi";
import { useGetTrendingMoviesQuery } from "@/store/services/moviesApi";
import { useAppSelector } from "@/store/hooks";
import type { NormalizedContent } from "@/lib/types";

export default function TrendingPage() {
  const newsCategories = useAppSelector((state) => state.preferences.newsCategories);
  const searchQuery = useAppSelector((state) => state.ui.searchQuery);

  const { data: newsData, isLoading: isNewsLoading } = useGetNewsQuery(newsCategories);
  const { data: moviesData, isLoading: isMoviesLoading } =
    useGetTrendingMoviesQuery();

  const [trendingContent, setTrendingContent] = useState<NormalizedContent[]>([]);

  useEffect(() => {
    if (newsData && moviesData) {
      const combined = [...newsData.slice(0, 6), ...moviesData.slice(0, 6)];
      setTrendingContent(combined);
    }
  }, [newsData, moviesData]);

  const filteredContent = trendingContent.filter((item) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
  });

  if (isNewsLoading || isMoviesLoading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-8rem)]">
        <div className="text-white text-xl">Loading trending content...</div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold text-white mb-2">Trending</h1>
        <p className="text-white/70 text-base">
          What's hot in news and entertainment
        </p>
      </div>

      {filteredContent.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-white/70 text-base">No trending content found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 auto-rows-auto">
          {filteredContent.map((item) => (
            <ContentCard key={item.id} content={item} />
          ))}
        </div>
      )}
    </div>
  );
}
