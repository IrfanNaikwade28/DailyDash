# 📰 DailyDash

<div align="center">

**Your personalized content hub for news, movies, and social updates**

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Redux](https://img.shields.io/badge/Redux-9.2-764ABC?style=for-the-badge&logo=redux)](https://redux.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

</div>

---

## 🎥 Demo

<!-- Add your demo video here -->
<!-- Example: -->
<!-- [![Demo Video](https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg)](https://www.youtube.com/watch?v=YOUR_VIDEO_ID) -->

**Video coming soon!** 🎬

---

## ✨ Features

### 🎯 Core Functionality
- **Personalized Feed** - Curated content from news, movies, and social media in one place
- **Drag & Drop Reordering** - Customize your feed order with intuitive drag-and-drop
- **Smart Search** - Real-time search across all content types with instant filtering
- **Favorites System** - Save and manage your favorite content with persistent storage
- **Trending Section** - Stay updated with what's hot in news and entertainment
- **Content Filtering** - Filter by content type (All, News, Movies, Social)

### 🎨 Design & UX
- **Glassmorphism UI** - Beautiful frosted glass design with backdrop blur effects
- **Fully Responsive** - Seamless experience across desktop, tablet, and mobile devices
- **Dark Theme** - Eye-friendly dark interface with vibrant accents
- **Smooth Animations** - Powered by Framer Motion for fluid transitions
- **Mobile-First Sidebar** - Collapsible navigation with overlay on mobile devices

### ⚙️ Technical Features
- **State Management** - Redux Toolkit with RTK Query for efficient data handling
- **TypeScript** - Full type safety throughout the application
- **API Integration** - Real-time data fetching from news and movies APIs
- **Local Storage Persistence** - Save preferences, favorites, and feed order locally
- **Server-Side Rendering** - Next.js App Router for optimal performance

---

## 🚀 Tech Stack

### Frontend Framework
- **Next.js 16.1** - React framework with App Router
- **React 19.2** - UI library with latest features
- **TypeScript 5** - Type-safe JavaScript

### State Management
- **Redux Toolkit** - State management with simplified setup
- **RTK Query** - Powerful data fetching and caching
- **React Redux** - React bindings for Redux

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Radix UI** - Unstyled, accessible UI components
- **CVA** - Class variance authority for component variants
- **Lucide React** - Beautiful icon library

### Build Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS transformation tool

---

## 📁 Project Structure

```
DailyDash/
├── frontend/
│   ├── app/                          # Next.js App Router
│   │   ├── (dashboard)/              # Dashboard layout group
│   │   │   ├── layout.tsx            # Dashboard layout wrapper
│   │   │   ├── feed/                 # Feed page
│   │   │   ├── trending/             # Trending page
│   │   │   ├── favorites/            # Favorites page
│   │   │   └── settings/             # Settings page
│   │   ├── globals.css               # Global styles
│   │   ├── layout.tsx                # Root layout
│   │   └── page.tsx                  # Home page
│   │
│   ├── components/
│   │   ├── content/
│   │   │   └── ContentCard.tsx       # Reusable content card
│   │   ├── layout/
│   │   │   ├── Header.tsx            # Top navigation header
│   │   │   └── Sidebar.tsx           # Side navigation menu
│   │   ├── providers/
│   │   │   └── ReduxProvider.tsx     # Redux store provider
│   │   └── ui/                       # UI components (buttons, cards)
│   │       └── glass/                # Glassmorphic components
│   │
│   ├── store/
│   │   ├── store.ts                  # Redux store configuration
│   │   ├── hooks.ts                  # Typed Redux hooks
│   │   ├── services/                 # RTK Query API services
│   │   │   ├── newsApi.ts            # News API integration
│   │   │   └── moviesApi.ts          # Movies API integration
│   │   └── slices/                   # Redux slices
│   │       ├── contentSlice.ts       # Content management
│   │       ├── favoritesSlice.ts     # Favorites management
│   │       ├── preferencesSlice.ts   # User preferences
│   │       └── uiSlice.ts            # UI state (search, filters)
│   │
│   ├── lib/
│   │   ├── types.ts                  # TypeScript type definitions
│   │   ├── utils.ts                  # Utility functions
│   │   ├── mockData.ts               # Mock social media data
│   │   ├── glass-utils.ts            # Glassmorphism utilities
│   │   └── hover-effects.ts          # Hover effect utilities
│   │
│   └── public/                       # Static assets
│
└── README.md
```

---

## 🛠️ Installation & Setup

### Prerequisites
- **Node.js** 18.17 or higher
- **npm** or **yarn** package manager

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/IrfanNaikwade28/DailyDash.git
cd DailyDash
```

### 2️⃣ Install Dependencies
```bash
cd frontend
npm install
# or
yarn install
```

### 3️⃣ Set Up Environment Variables
Create a `.env.local` file in the `frontend` directory:

```env
# News API (Get your key from https://newsapi.org/)
NEXT_PUBLIC_NEWS_API_KEY=your_news_api_key_here

# TMDB API (Get your key from https://www.themoviedb.org/)
NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key_here
```

### 4️⃣ Run Development Server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5️⃣ Build for Production
```bash
npm run build
npm start
# or
yarn build
yarn start
```

---

## 💡 Usage

### Navigation
- **Feed** - View your personalized content feed
- **Trending** - Discover what's trending in news and movies
- **Favorites** - Access your saved content
- **Settings** - Customize your content preferences

### Features Guide

#### 🔍 Search
Use the search bar in the header to filter content in real-time across all pages.

#### 🎯 Content Filtering
Click filter buttons in the header to show specific content types:
- **All** - Show everything
- **News** - News articles only
- **Movies** - Movie recommendations only
- **Social** - Social media posts only

#### ❤️ Favorites
Click the heart icon on any content card to add/remove from favorites.

#### 🔄 Feed Reordering
Drag and drop content cards in the Feed page to customize your layout. Changes are automatically saved to local storage.

#### ⚙️ Preferences
Visit the Settings page to:
- Select preferred news categories
- Choose social feed preferences
- Save changes (persisted to local storage)

#### 📱 Mobile Navigation
On mobile devices, tap the hamburger menu icon (☰) in the header to open the sidebar.

---

## 🎨 Design Philosophy

DailyDash embraces **glassmorphism** - a modern design trend featuring:
- Semi-transparent backgrounds with backdrop blur
- Subtle borders and shadows
- Layered depth for visual hierarchy
- Smooth animations and transitions

The design is **mobile-first** and **fully responsive**, ensuring a seamless experience across all device sizes.

---

## 🔧 Configuration

### Customizing Content Sources

#### News Categories
Edit `frontend/app/(dashboard)/settings/page.tsx`:
```typescript
const newsOptions = [
  "technology",
  "business",
  "entertainment",
  "sports",
  "health",
  "science",
];
```

#### Theme Colors
Modify Tailwind configuration in `frontend/tailwind.config.ts` or update the glass components in `frontend/components/ui/glass/`.

### Adding New API Services
Create new API services in `frontend/store/services/` using RTK Query:
```typescript
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myApi = createApi({
  reducerPath: "myApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.example.com" }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => "/data",
    }),
  }),
});
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Use existing component patterns
- Maintain responsive design principles
- Write clean, commented code
- Test on multiple devices/browsers

---

## 📝 API Requirements

### News API
- **Provider**: [NewsAPI.org](https://newsapi.org/)
- **Free Tier**: 100 requests/day
- **Used for**: News articles and headlines

### TMDB API
- **Provider**: [The Movie Database](https://www.themoviedb.org/)
- **Free Tier**: Generous rate limits
- **Used for**: Movie data, ratings, and posters

---

## 🐛 Known Issues & Roadmap

### Known Issues
- Mock social media data (not connected to real API)
- Limited to 100 news requests per day on free tier

### Future Enhancements
- [ ] Real social media integration (Twitter/X, Instagram APIs)
- [ ] User authentication and cloud sync
- [ ] Dark/Light theme toggle
- [ ] Push notifications for trending content
- [ ] Advanced filtering and sorting options
- [ ] Export/Import preferences
- [ ] Multi-language support
- [ ] PWA support for offline access

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Irfan Naikwade**

- GitHub: [@IrfanNaikwade28](https://github.com/IrfanNaikwade28)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - For amazing utility classes
- [Framer Motion](https://www.framer.com/motion/) - For smooth animations
- [Redux Toolkit](https://redux-toolkit.js.org/) - For state management
- [NewsAPI](https://newsapi.org/) - For news data
- [TMDB](https://www.themoviedb.org/) - For movie data
- All open-source contributors

---

<div align="center">

**⭐ Star this repo if you find it useful! ⭐**

Made with ❤️ by Irfan Naikwade

</div>
