import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { NormalizedContent } from "@/lib/types";

interface NewsArticle {
  article_id: string;
  title: string;
  description: string;
  link: string;
  image_url?: string;
  source_name: string;
  pubDate: string;
}

interface NewsResponse {
  results: NewsArticle[];
}

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://newsdata.io/api/1",
  }),
  endpoints: (builder) => ({
    getNews: builder.query<NormalizedContent[], string[]>({
      query: (categories) => {
        const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY || "";
        const category = categories.join(",");
        return `/news?apikey=${apiKey}&category=${category}&language=en`;
      },
      transformResponse: (response: NewsResponse) => {
        return response.results.map((article) => ({
          id: article.article_id,
          type: "news" as const,
          title: article.title,
          description: article.description || "",
          image: article.image_url,
          meta: {
            source: article.source_name,
            date: article.pubDate,
          },
          url: article.link,
        }));
      },
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
