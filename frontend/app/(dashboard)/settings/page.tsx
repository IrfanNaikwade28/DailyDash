"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/glass/card";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setNewsCategories, setSocialCategories } from "@/store/slices/preferencesSlice";
import { setTheme } from "@/store/slices/uiSlice";
import type { ThemeVariant } from "@/lib/types";

const newsOptions = [
  "technology",
  "business",
  "entertainment",
  "sports",
  "health",
  "science",
];

const socialOptions = ["trending", "following", "recommended"];

const themeOptions: { value: ThemeVariant; label: string; description: string }[] = [
  { value: "bg1", label: "Ocean Breeze", description: "Cool blue tones with serene vibes" },
  { value: "bg2", label: "Sunset Glow", description: "Warm colors for a cozy feel" },
  { value: "bg3", label: "Night Sky", description: "Deep purples and dark elegance" },
  { value: "bg4", label: "Custom Theme", description: "Your personalized background" },
];

export default function SettingsPage() {
  const dispatch = useAppDispatch();
  const preferences = useAppSelector((state) => state.preferences);
  const currentTheme = useAppSelector((state) => state.ui.theme);

  const [selectedNews, setSelectedNews] = useState<string[]>(
    preferences.newsCategories
  );
  const [selectedSocial, setSelectedSocial] = useState<string[]>(
    preferences.socialCategories
  );
  const [saved, setSaved] = useState(false);

  const handleThemeChange = (theme: ThemeVariant) => {
    dispatch(setTheme(theme));
  };

  const toggleNewsCategory = (category: string) => {
    setSelectedNews((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleSocialCategory = (category: string) => {
    setSelectedSocial((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleSave = () => {
    dispatch(setNewsCategories(selectedNews));
    dispatch(setSocialCategories(selectedSocial));
    localStorage.setItem(
      "dailydash-preferences",
      JSON.stringify({ newsCategories: selectedNews, socialCategories: selectedSocial })
    );
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  useEffect(() => {
    const savedPrefs = localStorage.getItem("dailydash-preferences");
    if (savedPrefs) {
      const parsed = JSON.parse(savedPrefs);
      if (parsed.newsCategories) setSelectedNews(parsed.newsCategories);
      if (parsed.socialCategories) setSelectedSocial(parsed.socialCategories);
    }
  }, []);

  return (
    <div className="space-y-8 max-w-3xl">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Settings</h1>
        <p className="text-white/70 text-sm md:text-base">Customize your content preferences</p>
      </div>

      {/* Theme Selector */}
      <Card variant="glass">
        <CardHeader>
          <CardTitle className="text-white">Visual Theme</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-white/70 text-sm mb-4">
            Choose a background theme that suits your style
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

      <Card variant="glass">
        <CardHeader>
          <CardTitle className="text-white">News Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-white/70 text-sm mb-4">
            Select the news categories you're interested in
          </p>
          <div className="flex flex-wrap gap-3">
            {newsOptions.map((category) => (
              <button
                key={category}
                onClick={() => toggleNewsCategory(category)}
                className={`px-4 py-2 rounded-lg border transition-all ${
                  selectedNews.includes(category)
                    ? "bg-white/20 border-white/40 text-white"
                    : "bg-white/5 border-white/20 text-white/60 hover:bg-white/10"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card variant="glass">
        <CardHeader>
          <CardTitle className="text-white">Social Feed Preferences</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-white/70 text-sm mb-4">
            Choose what to see in your social feed
          </p>
          <div className="flex flex-wrap gap-3">
            {socialOptions.map((category) => (
              <button
                key={category}
                onClick={() => toggleSocialCategory(category)}
                className={`px-4 py-2 rounded-lg border transition-all ${
                  selectedSocial.includes(category)
                    ? "bg-white/20 border-white/40 text-white"
                    : "bg-white/5 border-white/20 text-white/60 hover:bg-white/10"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center gap-4">
        <button
          onClick={handleSave}
          className="px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white font-semibold hover:bg-white/30 transition-all"
        >
          Save Preferences
        </button>
        {saved && <span className="text-green-400">✓ Saved successfully!</span>}
      </div>
    </div>
  );
}
