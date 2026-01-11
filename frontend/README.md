 # DailyDash

A modern, unified dashboard application that aggregates content from multiple sources (news, movies, and social posts) with a beautiful glassmorphic UI design.

## Features

### Core Functionality
- **Unified Feed**: Combines news articles, movies, and social posts into one personalized feed
- **Drag & Drop Reordering**: Reorder your feed items with Framer Motion
- **Trending Page**: View trending news and popular movies
- **Favorites**: Save and manage your favorite content
- **Smart Search**: Debounced search across all content types
- **Category Preferences**: Customize news and social content categories
- **Persistent State**: Feed order and favorites saved to localStorage

### UI/UX
- **Glass UI Design**: Beautiful glassmorphic components throughout
- **Responsive Layout**: Works on desktop and mobile
- **Type-Based Badges**: Visual indicators for content types (news/movie/social)
- **Interactive Cards**: Hover effects and smooth transitions
- **Background Image**: Stunning gradient background

### Technical Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Redux Toolkit** + RTK Query
- **Framer Motion** (drag & drop)
- **Glass UI Components** (shadcn-based)
- **Tailwind CSS**

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, pnpm, or yarn

### Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Set up environment variables**:
```bash
cp .env.local.example .env.local
```

Then edit `.env.local` and add your API keys:

```env
NEXT_PUBLIC_NEWS_API_KEY=your_newsdata_api_key
NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key
```

**Getting API Keys:**
- **NewsData.io**: Visit https://newsdata.io/ and sign up for a free API key
- **TMDB**: Visit https://www.themoviedb.org/settings/api and create an API key

3. **Run the development server**:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
