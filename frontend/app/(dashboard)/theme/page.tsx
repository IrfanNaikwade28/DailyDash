"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/glass/card";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setTheme } from "@/store/slices/uiSlice";
import type { ThemeVariant } from "@/lib/types";

const themeOptions: { value: ThemeVariant; label: string; description: string }[] = [
  { value: "bg1", label: "Ocean Breeze", description: "Cool blue tones with serene vibes" },
  { value: "bg2", label: "Sunset Glow", description: "Warm colors for a cozy feel" },
  { value: "bg3", label: "Night Sky", description: "Deep purples and dark elegance" },
  { value: "bg4", label: "Custom Theme", description: "Your personalized background" },
];

export default function ThemePage() {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state) => state.ui.theme);

  const handleThemeChange = (theme: ThemeVariant) => {
    dispatch(setTheme(theme));
  };

  return (
    <div className="space-y-8 max-w-3xl">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Visual Theme</h1>
        <p className="text-white/70 text-sm md:text-base">Choose a background theme that suits your style</p>
      </div>

      {/* Theme Selector */}
      <Card variant="glass">
        <CardHeader>
          <CardTitle className="text-white">Background Themes</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-white/70 text-sm mb-4">
            Select your preferred background to customize your dashboard experience
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {themeOptions.map((theme) => (
              <button
                key={theme.value}
                onClick={() => handleThemeChange(theme.value)}
                className={`relative p-4 rounded-xl border-2 transition-all text-left overflow-hidden group ${
                  currentTheme === theme.value
                    ? "border-white/60 bg-white/20"
                    : "border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40"
                }`}
              >
                {/* Theme preview image */}
                <div className="w-full h-24 rounded-lg overflow-hidden mb-3">
                  <img
                    src={`/${theme.value}.jpg`}
                    alt={theme.label}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Selected indicator */}
                {currentTheme === theme.value && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-white/90 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                )}
                
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">
                    {theme.label}
                  </h3>
                  <p className="text-white/60 text-xs">
                    {theme.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="text-white/50 text-sm">
        <p>💡 Tip: Your theme preference is saved automatically and will persist across sessions.</p>
      </div>
    </div>
  );
}
