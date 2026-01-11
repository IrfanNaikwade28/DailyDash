"use client";

import { useEffect, useState } from "react";
import { ContentCard } from "@/components/content/ContentCard";
import { useAppSelector } from "@/store/hooks";
import { useGetNewsQuery } from "@/store/services/newsApi";
import { useGetPopularMoviesQuery } from "@/store/services/moviesApi";
import { mockSocialPosts } from "@/lib/mockData";
import type { NormalizedContent } from "@/lib/types";

export default function FavoritesPage() {
  const favoriteIds = useAppSelector((state) => state.favorites.favoriteIds);
  const newsCategories = useAppSelector((state) => state.preferences.newsCategories);
  const searchQuery = useAppSelector((state) => state.ui.searchQuery);

  const { data: newsData } = useGetNewsQuery(newsCategories);
  const { data: moviesData } = useGetPopularMoviesQuery();

  const [favoriteContent, setFavoriteContent] = useState<NormalizedContent[]>([]);

  useEffect(() => {
    if (newsData || moviesData) {
      const allContent = [...(newsData || []), ...(moviesData || []), ...mockSocialPosts];
      const favorites = allContent.filter((item) => favoriteIds.includes(item.id));
      setFavoriteContent(favorites);
    }
  }, [newsData, moviesData, favoriteIds]);

  const filteredContent = favoriteContent.filter((item) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
  });

  return (
    <div className="space-y-8">
      <div className="max-w-2xl">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Favorites</h1>
        <p className="text-white/70 text-sm md:text-base">Your saved content</p>
      </div>

      {filteredContent.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-white/70 text-base">
            {favoriteIds.length === 0
              ? "No favorites yet. Start adding some!"
              : "No favorites match your search"}
          </p>
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
