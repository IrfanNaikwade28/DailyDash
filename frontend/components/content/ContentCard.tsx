"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/glass/card";
import type { NormalizedContent } from "@/lib/types";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleFavorite } from "@/store/slices/favoritesSlice";

interface ContentCardProps {
  content: NormalizedContent;
}

export function ContentCard({ content }: ContentCardProps) {
  const dispatch = useAppDispatch();
  const favoriteIds = useAppSelector((state) => state.favorites.favoriteIds);
  const isFavorite = favoriteIds.includes(content.id);

  const getBadgeColor = (type: string) => {
    switch (type) {
      case "news":
        return "bg-blue-500/80";
      case "movie":
        return "bg-purple-500/80";
      case "social":
        return "bg-pink-500/80";
      default:
        return "bg-gray-500/80";
    }
  };

  const getCTAText = (type: string) => {
    switch (type) {
      case "news":
        return "Read";
      case "movie":
        return "View";
      case "social":
        return "Open";
      default:
        return "View";
    }
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(toggleFavorite(content.id));
  };

  const handleCTAClick = () => {
    if (content.url) {
      window.open(content.url, "_blank");
    }
  };

  const isSocialPost = content.type === "social";

  return (
    <Card variant="glass" className={isSocialPost ? "" : "h-full"}>
      <CardHeader className={isSocialPost ? "pb-3" : ""}>
        <div className="flex items-start justify-between gap-2">
          <span
            className={`${getBadgeColor(
              content.type
            )} text-white text-[10px] px-2 py-0.5 rounded-full backdrop-blur-sm`}
          >
            {content.type.charAt(0).toUpperCase() + content.type.slice(1)}
          </span>
          <button
            onClick={handleFavoriteClick}
            className="text-xl transition-transform hover:scale-110"
          >
            {isFavorite ? "❤️" : "🤍"}
          </button>
        </div>
        <CardTitle className={`text-white mt-2 ${isSocialPost ? 'text-base line-clamp-2' : 'text-lg line-clamp-2'}`}>
          {content.title}
        </CardTitle>
      </CardHeader>
      <CardContent className={isSocialPost ? "space-y-2" : "space-y-4"}>
        {content.image && (
          <div className="w-full h-44 rounded-lg overflow-hidden">
            <img
              src={content.image}
              alt={content.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <p className={`text-white/80 ${isSocialPost ? 'text-xs line-clamp-2' : 'text-sm line-clamp-3'}`}>
          {content.description}
        </p>

        <div className={`flex items-center justify-between ${isSocialPost ? 'pt-2' : 'pt-4'} border-t border-white/20`}>
          <div className="text-white/60 text-[10px] space-y-0.5">
            {content.meta.source && <div>Source: {content.meta.source}</div>}
            {content.meta.rating && (
              <div>Rating: ⭐ {content.meta.rating.toFixed(1)}</div>
            )}
            {content.meta.author && <div>By: {content.meta.author}</div>}
            {content.meta.date && (
              <div>{new Date(content.meta.date).toLocaleDateString()}</div>
            )}
          </div>

          <button
            onClick={handleCTAClick}
            className={`${isSocialPost ? 'px-3 py-1 text-xs' : 'px-4 py-2 text-sm'} bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all`}
          >
            {getCTAText(content.type)}
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
