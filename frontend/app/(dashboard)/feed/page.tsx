"use client";

import { useEffect, useState } from "react";
import { Reorder } from "framer-motion";
import { ContentCard } from "@/components/content/ContentCard";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setContent, reorderFeed, loadFeedOrder } from "@/store/slices/contentSlice";
import { loadFavorites } from "@/store/slices/favoritesSlice";
import { useGetNewsQuery } from "@/store/services/newsApi";
import { useGetPopularMoviesQuery } from "@/store/services/moviesApi";
import { mockSocialPosts } from "@/lib/mockData";
import type { NormalizedContent } from "@/lib/types";

export default function FeedPage() {
  const dispatch = useAppDispatch();
  const newsCategories = useAppSelector((state) => state.preferences.newsCategories);
  const feedOrder = useAppSelector((state) => state.content.feedOrder);
  const allContent = useAppSelector((state) => state.content.allContent);
  const searchQuery = useAppSelector((state) => state.ui.searchQuery);
  const contentTypeFilter = useAppSelector((state) => state.ui.contentTypeFilter);

  const { data: newsData, isLoading: isNewsLoading } = useGetNewsQuery(newsCategories);
  const { data: moviesData, isLoading: isMoviesLoading } = useGetPopularMoviesQuery();

  const [orderedContent, setOrderedContent] = useState<NormalizedContent[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Load persisted data from localStorage
  useEffect(() => {
    const savedFavorites = localStorage.getItem("dailydash-favorites");
    if (savedFavorites) {
      dispatch(loadFavorites(JSON.parse(savedFavorites)));
    }

    const savedOrder = localStorage.getItem("dailydash-feed-order");
    if (savedOrder) {
      dispatch(loadFeedOrder(JSON.parse(savedOrder)));
    }
  }, [dispatch]);

  // Merge all content sources
  useEffect(() => {
    if (newsData || moviesData) {
      const allSources: NormalizedContent[] = [
        ...(newsData || []),
        ...(moviesData || []),
        ...mockSocialPosts,
      ];
      dispatch(setContent(allSources));
    }
  }, [newsData, moviesData, dispatch]);

  // Build ordered content array
  useEffect(() => {
    if (feedOrder.length > 0) {
      const ordered = feedOrder
        .map((id) => allContent[id])
        .filter(Boolean) as NormalizedContent[];
      setOrderedContent(ordered);
    }
  }, [feedOrder, allContent]);

  // Filter by search query and content type
  const filteredContent = orderedContent.filter((item) => {
    // Content type filter
    if (contentTypeFilter !== "all" && item.type !== contentTypeFilter) {
      return false;
    }

    // Search query filter
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
  });

  const handleReorder = (newOrder: NormalizedContent[]) => {
    const newOrderIds = newOrder.map((item) => item.id);
    setOrderedContent(newOrder);
    dispatch(reorderFeed(newOrderIds));
    localStorage.setItem("dailydash-feed-order", JSON.stringify(newOrderIds));
  };

  // Persist favorites
  const favorites = useAppSelector((state) => state.favorites.favoriteIds);
  useEffect(() => {
    if (favorites.length > 0) {
      localStorage.setItem("dailydash-favorites", JSON.stringify(favorites));
    }
  }, [favorites]);

  if (isNewsLoading || isMoviesLoading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-8rem)]">
        <div className="text-white text-xl">Loading your feed...</div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="max-w-2xl">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Your Feed</h1>
        <p className="text-white/70 text-sm md:text-base">Latest content personalized for you</p>
        {!isMobile && (
          <p className="text-white/50 text-xs mt-1">Drag cards to reorder your feed</p>
        )}
      </div>

      {filteredContent.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-white/70 text-base">No content found</p>
        </div>
      ) : isMobile ? (
        // Mobile: Regular grid without drag-and-drop
        <div className="grid grid-cols-1 gap-5 auto-rows-auto">
          {filteredContent.map((item) => (
            <ContentCard key={item.id} content={item} />
          ))}
        </div>
      ) : (
        // Desktop: Reorderable grid with drag-and-drop
        <Reorder.Group
          axis="y"
          values={filteredContent}
          onReorder={handleReorder}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 auto-rows-auto"
        >
          {filteredContent.map((item) => (
            <Reorder.Item
              key={item.id}
              value={item}
              className="cursor-grab active:cursor-grabbing"
              drag
              dragElastic={0.2}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }}
              whileDrag={{
                scale: 1.05,
                zIndex: 1000,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                transition: { duration: 0.2 }
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30
              }}
            >
              <ContentCard content={item} />
            </Reorder.Item>
          ))}
        </Reorder.Group>
      )}
    </div>
  );
}
