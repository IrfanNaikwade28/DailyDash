# 🎨 Theme Switcher Implementation

## Overview
DailyDash now features a **background image theme switcher** that allows users to personalize their experience with three distinct visual themes. Unlike traditional dark/light mode, this implementation uses different background images while maintaining the glassmorphism UI.

## ✨ Features

### 1. **Three Visual Themes**
- **Ocean Breeze** (`bg1`) - Cool blue tones with serene vibes
- **Sunset Glow** (`bg2`) - Warm colors for a cozy feel  
- **Night Sky** (`bg3`) - Deep purples and dark elegance

### 2. **Smart Persistence**
- Theme selection saved to Redux store
- Persisted in localStorage for cross-session consistency
- Loads automatically on app startup

### 3. **Smooth Transitions**
- 700ms CSS transition between themes
- No performance-heavy animations
- Seamless background swapping

### 4. **Non-Invasive Design**
- Only background layer changes
- All glassmorphism effects remain intact
- No component style modifications
- No color variable changes

## 📁 Files Modified/Created

### New Files
```
frontend/
├── components/providers/ThemeProvider.tsx    # Theme wrapper component
├── lib/hooks/useDebounce.ts                  # Bonus: debounce hook
├── scripts/generate-backgrounds.js           # Background generator script
└── public/
    ├── BACKGROUNDS.md                        # Background image guide
    ├── bg1.svg                              # Ocean Breeze placeholder
    ├── bg2.svg                              # Sunset Glow placeholder
    └── bg3.svg                              # Night Sky placeholder
```

### Modified Files
```
frontend/
├── app/layout.tsx                           # Added ThemeProvider wrapper
├── app/globals.css                          # Added theme transition styles
├── app/(dashboard)/settings/page.tsx        # Added theme selector UI
├── lib/types.ts                            # Added ThemeVariant type
└── store/slices/uiSlice.ts                 # Added theme state & actions
```

## 🚀 Usage

### For Users
1. Navigate to **Settings** page
2. Scroll to the **Visual Theme** section
3. Click on any theme card to switch backgrounds
4. Theme is saved automatically and persists across sessions

### For Developers

#### Accessing Current Theme
```typescript
import { useAppSelector } from "@/store/hooks";

const currentTheme = useAppSelector((state) => state.ui.theme);
// Returns: "bg1" | "bg2" | "bg3"
```

#### Changing Theme Programmatically
```typescript
import { useAppDispatch } from "@/store/hooks";
import { setTheme } from "@/store/slices/uiSlice";

const dispatch = useAppDispatch();
dispatch(setTheme("bg2")); // Switch to Sunset Glow
```

#### Adding New Themes
1. Add new theme type to `ThemeVariant`:
   ```typescript
   // lib/types.ts
   export type ThemeVariant = "bg1" | "bg2" | "bg3" | "bg4";
   ```

2. Add image to public folder: `/public/bg4.svg` or `/public/bg4.jpg`

3. Update theme map in ThemeProvider:
   ```typescript
   const images = {
     bg1: "/bg1.svg",
     bg2: "/bg2.svg",
     bg3: "/bg3.svg",
     bg4: "/bg4.svg", // New theme
   };
   ```

4. Add to settings page options:
   ```typescript
   const themeOptions = [
     // ... existing themes
     { value: "bg4", label: "New Theme", description: "Description" },
   ];
   ```

## 🎨 Background Image Guidelines

### Requirements
- **Resolution**: 1920x1080 minimum (higher preferred)
- **Format**: JPG (recommended) or SVG (placeholders)
- **File Size**: < 500KB each for optimal performance
- **Style**: Works well with glassmorphism (good contrast, not too busy)

### Recommendations
- Use high-quality images from [Unsplash](https://unsplash.com/), [Pexels](https://pexels.com/), or [Pixabay](https://pixabay.com/)
- Optimize images using [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
- Test with glassmorphism UI to ensure good contrast
- Consider different lighting conditions and content types

### Current Placeholders
The project includes SVG gradient placeholders:
- **bg1.svg**: Purple to pink gradient (Ocean Breeze)
- **bg2.svg**: Pink to yellow to cyan gradient (Sunset Glow)
- **bg3.svg**: Dark blue to purple gradient (Night Sky)

**For production**: Replace SVG files with high-quality JPG images.

## 🔧 Technical Implementation

### State Management
```typescript
// Redux store state
interface UIState {
  // ... other properties
  theme: ThemeVariant; // "bg1" | "bg2" | "bg3"
}

// Actions
- setTheme(theme: ThemeVariant) // Change theme
```

### Component Architecture
```
RootLayout
  └── ReduxProvider
      └── ThemeProvider (manages background)
          └── App Content (glassmorphism UI)
```

### CSS Implementation
```css
/* Fixed background layer */
.fixed.inset-0.-z-10 {
  background-image: url('/bgX.svg');
  background-size: cover;
  background-position: center;
  transition: all 700ms ease-in-out;
}

/* Overlay for glass effect enhancement */
.fixed.inset-0.-z-10.bg-black\/20 {
  background: rgba(0, 0, 0, 0.2);
}
```

## 🎯 Design Decisions

### Why Background Images?
- Provides more visual variety than dark/light mode
- Maintains consistent glassmorphism design
- Allows personality without breaking UI patterns
- Easier for users to distinguish their preference

### Why Not Traditional Dark/Light Mode?
- Glassmorphism already provides good contrast
- Background images offer more customization
- Avoids complex color variable management
- Keeps implementation simple and focused

### Why Redux + localStorage?
- Consistent with existing state management
- Easy to access theme from any component
- Automatic persistence across sessions
- No additional dependencies needed

## 🐛 Troubleshooting

### Theme Not Loading
1. Check if background images exist in `/public` folder
2. Verify localStorage has `dailydash-theme` key
3. Check browser console for image loading errors

### Theme Not Persisting
1. Ensure localStorage is available (not in private mode)
2. Check Redux DevTools for theme state
3. Verify ThemeProvider is wrapping the app correctly

### Images Not Displaying
1. Confirm files are in `/public` folder (not `/public/images`)
2. Check file extensions match (`.svg` or `.jpg`)
3. Verify image paths in ThemeProvider and Settings

## 📊 Performance

### Metrics
- **Bundle Size Impact**: ~2KB (ThemeProvider + types)
- **Runtime Overhead**: Negligible (2 useEffect hooks)
- **Image Load Time**: Depends on image size (SVG instant, JPG varies)
- **Transition Duration**: 700ms (configurable)

### Optimization Tips
1. Use optimized JPG images (< 500KB each)
2. Consider lazy loading for non-active themes
3. Use Next.js Image component for automatic optimization
4. Preload initial theme in head for faster LCP

## 🚀 Future Enhancements

Possible improvements:
- [ ] Theme preview before applying
- [ ] Custom theme upload (user images)
- [ ] More theme variants (4-6 options)
- [ ] Animated background transitions
- [ ] Time-based automatic theme switching
- [ ] Theme categories (nature, abstract, minimal)
- [ ] Export/import theme settings

## 📚 Related Documentation
- [Glass UI Components](../components/ui/glass/)
- [Redux Store Setup](../store/)
- [State Management Guide](../lib/)

---

**Implementation Date**: January 11, 2026  
**Version**: 1.0.0  
**Maintainer**: DailyDash Team
