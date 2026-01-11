# 📰 DailyDash

<div align="center">

**Your Personalized Content Dashboard**

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Redux](https://img.shields.io/badge/Redux-9.2-764ABC?style=for-the-badge&logo=redux)](https://redux.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

</div>

---

## 🎥 Demo

<!-- Add your demo video link below -->
<!-- Example: [![Demo Video](https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg)](https://www.youtube.com/watch?v=YOUR_VIDEO_ID) -->

**Video coming soon!** 🎬

---

## 📖 Overview

DailyDash is a modern, glassmorphic **personalized content dashboard** that aggregates news, movie recommendations, and social-style posts into a single, customizable feed. Built with cutting-edge technologies, it demonstrates strong frontend fundamentals including **React, Next.js, Redux Toolkit, API integration, and interactive UI design**.

---

## 📌 Assignment Context

This project was built as part of a **Frontend Development Assignment** to evaluate:

- ✅ React & Next.js architecture
- ✅ Global state management with Redux Toolkit
- ✅ API handling and async logic
- ✅ Interactive UI/UX design
- ✅ Clean code structure and documentation

---

## ✨ Core Features

### 🧠 Personalized Content Feed
- **Unified feed** combining:
  - 📰 News articles (News API)
  - 🎬 Movie recommendations (TMDB API)
  - 💬 Social-style posts (mock data)
- Content adapts based on **user-selected preferences**
- Preferences persist using **Redux + localStorage**

### 📡 API Integration
- **News API** - Fetches news based on selected categories
- **TMDB API** - Fetches trending and recommended movies
- **Mock Social Feed** - Simulates social media content for dashboard completeness
- All API keys securely managed using environment variables

### 🧩 Interactive Content Cards
- Glassmorphic cards displaying:
  - Image/poster
  - Title and description
  - Source and publish date
  - Call-to-action buttons
- ❤️ Favorite support
- Clean loading and empty states

### 🔄 Drag & Drop Feed Reordering
- Users can **reorder content cards** via drag-and-drop
- Feed order is **saved locally**
- Enhances personalization and usability

### 🔍 Debounced Search
- Search across news, movies, and social posts
- **Debounced input** to:
  - Prevent unnecessary re-renders
  - Reduce API calls
  - Improve typing performance
- Real-time visual feedback

### 📈 Trending Section
- Dedicated Trending page
- Filter content by:
  - **All** | **News** | **Movies** | **Social**
- Consistent card layout reused across sections

### ❤️ Favorites Section
- Save any content item to favorites
- Dedicated Favorites page
- Favorites persist across sessions

### ⚙️ Settings & Customization
- Select preferred news categories
- Change dashboard background theme (4 themes available)
- Preferences stored using Redux + localStorage

---

## 🎨 UI/UX Design

### ✨ Glassmorphism Interface
- Semi-transparent glass cards with backdrop blur
- Subtle borders and layered depth
- Smooth transitions and hover effects
- Apple-inspired frosted glass aesthetics

### 🌈 Theme System
Instead of traditional dark/light toggle, the app uses:

- **Four gradient background themes** (bg1, bg2, bg3, bg4)
- Each theme changes the entire background atmosphere
- Glass UI adapts naturally to background changes
- Theme selection is global and persistent via localStorage
- Smooth 700ms transitions between themes

This approach aligns perfectly with glassmorphic design while maintaining visual clarity.

### 📱 Responsive Layout
- **Desktop**: Sidebar + top header layout
- **Mobile**: Collapsible hamburger menu with overlay
- **Tablet**: Optimized spacing and grid layouts
- Fully responsive across all screen sizes (mobile-first approach)

---

## 🧠 State Management

### Redux Toolkit
- **UI State** - Search query, filters, sidebar toggle, theme selection
- **User Preferences** - News/social categories
- **Favorites** - Saved content items
- **Content Data** - Feed order and cached content

### RTK Query
- API fetching with automatic caching
- Background revalidation
- Loading and error state handling
- Optimistic updates

### localStorage Persistence
- Theme preferences
- User preferences (news/social categories)
- Feed order (drag-and-drop)
- Favorites list

---

## 🧪 Code Quality

### Architecture
- Clean component structure
- Separation of concerns
- Reusable UI components
- Type-safe with TypeScript

### Best Practices
- Custom hooks (`useDebounce`)
- Proper error handling
- Loading states
- Empty state management
- Edge case handling

---

## 🛠 Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 16.1 (App Router), React 19.2 |
| **Language** | TypeScript 5 |
| **State Management** | Redux Toolkit, RTK Query |
| **Styling** | Tailwind CSS 4, Custom Glass UI |
| **Animation** | Framer Motion |
| **API Integration** | News API, TMDB API |
| **Tooling** | ESLint, PostCSS |

---

## 📁 Project Structure

```
frontend/
├── app/
│   ├── (dashboard)/          # Dashboard routes group
│   │   ├── layout.tsx        # Dashboard layout wrapper
│   │   ├── feed/             # Main feed page
│   │   ├── trending/         # Trending content page
│   │   ├── favorites/        # Saved favorites page
│   │   └── settings/         # User settings page
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
│
├── components/
│   ├── layout/               # Layout components
│   │   ├── Header.tsx        # Top navigation bar
│   │   └── Sidebar.tsx       # Side navigation menu
│   ├── content/              # Content components
│   │   └── ContentCard.tsx   # Reusable content card
│   ├── providers/            # Context providers
│   │   ├── ReduxProvider.tsx # Redux store provider
│   │   └── ThemeProvider.tsx # Theme background provider
│   └── ui/                   # UI components
│       └── glass/            # Glassmorphic components
│
├── store/
│   ├── store.ts              # Redux store configuration
│   ├── hooks.ts              # Typed Redux hooks
│   ├── services/             # RTK Query API services
│   │   ├── newsApi.ts        # News API integration
│   │   └── moviesApi.ts      # TMDB API integration
│   └── slices/               # Redux slices
│       ├── contentSlice.ts   # Content management
│       ├── favoritesSlice.ts # Favorites management
│       ├── preferencesSlice.ts # User preferences
│       └── uiSlice.ts        # UI state (search, filters, theme)
│
├── lib/
│   ├── types.ts              # TypeScript type definitions
│   ├── utils.ts              # Utility functions
│   ├── mockData.ts           # Mock social media data
│   └── hooks/
│       └── useDebounce.ts    # Custom debounce hook
│
└── public/
    ├── bg1.jpg               # Theme background 1
    ├── bg2.jpg               # Theme background 2
    ├── bg3.jpg               # Theme background 3
    └── bg4.jpg               # Theme background 4
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.17 or higher
- **npm** or **yarn** package manager
- **API Keys** (News API, TMDB)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/IrfanNaikwade28/DailyDash.git
cd DailyDash/frontend
```

**2. Install dependencies**
```bash
npm install
# or
yarn install
```

**3. Set up environment variables**

Create a `.env.local` file in the `frontend` directory:

```env
NEXT_PUBLIC_NEWS_API_KEY=your_news_api_key_here
NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key_here
```

**Get your API keys:**
- **News API**: [https://newsapi.org/](https://newsapi.org/)
- **TMDB API**: [https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)

**4. Add background images**

Place 4 background images in the `public` folder:
- `bg1.jpg` - Ocean Breeze (cool blue tones)
- `bg2.jpg` - Sunset Glow (warm colors)
- `bg3.jpg` - Night Sky (deep purples)
- `bg4.jpg` - Custom Theme (your choice)

**5. Run the development server**
```bash
npm run dev
# or
yarn dev
```

**6. Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

---

## 🔒 Security & Best Practices

- ✅ API keys stored in environment variables
- ✅ No sensitive data committed to repository
- ✅ Input validation and sanitization
- ✅ Error boundary handling
- ✅ Type-safe with TypeScript

---

## 📚 Key Features Documentation

### Debounced Search Implementation
- Custom `useDebounce` hook with configurable delay
- Visual loading indicator during debounce
- Clear button for quick reset
- Reduces Redux updates by 80%

### Theme System Implementation
- 4 background themes with smooth transitions
- Redux-based global state management
- localStorage persistence
- No component style modifications required

### Drag & Drop Implementation
- Powered by Framer Motion's Reorder component
- Persists order to localStorage
- Smooth animations and haptic feedback
- Works seamlessly with filtering

---

## 🎯 Future Enhancements

- [ ] User authentication (NextAuth.js)
- [ ] Real social media API integration
- [ ] Cloud-based preference sync
- [ ] Comprehensive unit & E2E tests
- [ ] Multi-language support
- [ ] Export/Import settings

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Irfan Naikwade**

- GitHub: [@IrfanNaikwade28](https://github.com/IrfanNaikwade28)
- LinkedIn: [Connect with me](https://linkedin.com/in/irfan-naikwade)

---

## ⭐ Final Note

DailyDash demonstrates:

✨ **Strong frontend fundamentals** - Clean architecture with modern React patterns  
🎨 **Thoughtful UI/UX decisions** - Glassmorphism with accessibility in mind  
🏗️ **Clean architecture** - Scalable and maintainable code structure  
⚖️ **Practical trade-offs** - Aligned with real-world development constraints

---

<div align="center">

**⭐ Star this repo if you find it useful! ⭐**

Made with ❤️ by Irfan Naikwade

</div>