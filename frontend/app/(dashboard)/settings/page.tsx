"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/glass/card";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setNewsCategories, setSocialCategories } from "@/store/slices/preferencesSlice";

const newsOptions = [
  "technology",
  "business",
  "entertainment",
  "sports",
  "health",
  "science",
];

const socialOptions = ["trending", "following", "recommended"];

export default function SettingsPage() {
  const dispatch = useAppDispatch();
  const preferences = useAppSelector((state) => state.preferences);

  const [selectedNews, setSelectedNews] = useState<string[]>(
    preferences.newsCategories
  );
  const [selectedSocial, setSelectedSocial] = useState<string[]>(
    preferences.socialCategories
  );
  const [saved, setSaved] = useState(false);

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
