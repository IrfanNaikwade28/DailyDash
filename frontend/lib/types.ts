export type ContentType = "news" | "movie" | "social";

export interface NormalizedContent {
  id: string;
  type: ContentType;
  title: string;
  description: string;
  image?: string;
  meta: {
    source?: string;
    rating?: number;
    author?: string;
    date?: string;
  };
  url?: string;
}

export interface UserPreferences {
  newsCategories: string[];
  socialCategories: string[];
}

export interface UIState {
  searchQuery: string;
  contentTypeFilter: "all" | "news" | "movie" | "social";
  isLoading: boolean;
  error: string | null;
}
