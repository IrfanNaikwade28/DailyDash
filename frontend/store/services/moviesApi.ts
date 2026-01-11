import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { NormalizedContent } from "@/lib/types";

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path?: string;
  vote_average: number;
  release_date: string;
}

interface MoviesResponse {
  results: Movie[];
}

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
  }),
  endpoints: (builder) => ({
    getTrendingMovies: builder.query<NormalizedContent[], void>({
      query: () => {
        const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY || "";
        return `/trending/movie/day?api_key=${apiKey}`;
      },
      transformResponse: (response: MoviesResponse) => {
        return response.results.slice(0, 10).map((movie) => ({
          id: `movie-${movie.id}`,
          type: "movie" as const,
          title: movie.title,
          description: movie.overview,
          image: movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : undefined,
          meta: {
            rating: movie.vote_average,
            date: movie.release_date,
          },
          url: `https://www.themoviedb.org/movie/${movie.id}`,
        }));
      },
    }),
    getPopularMovies: builder.query<NormalizedContent[], void>({
      query: () => {
        const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY || "";
        return `/movie/popular?api_key=${apiKey}`;
      },
      transformResponse: (response: MoviesResponse) => {
        return response.results.slice(0, 10).map((movie) => ({
          id: `movie-${movie.id}`,
          type: "movie" as const,
          title: movie.title,
          description: movie.overview,
          image: movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : undefined,
          meta: {
            rating: movie.vote_average,
          },
          url: `https://www.themoviedb.org/movie/${movie.id}`,
        }));
      },
    }),
  }),
});

export const { useGetTrendingMoviesQuery, useGetPopularMoviesQuery } = moviesApi;
