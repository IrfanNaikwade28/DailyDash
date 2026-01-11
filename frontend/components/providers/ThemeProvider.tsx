"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setTheme } from "@/store/slices/uiSlice";
import type { ThemeVariant } from "@/lib/types";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state) => state.ui.theme);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("dailydash-theme") as ThemeVariant;
    if (savedTheme && ["bg1", "bg2", "bg3", "bg4"].includes(savedTheme)) {
      dispatch(setTheme(savedTheme));
    }
  }, [dispatch]);

  // Save theme to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("dailydash-theme", currentTheme);
  }, [currentTheme]);

  // Map theme to background image (supports both .jpg and .svg)
  const getBackgroundImage = (theme: ThemeVariant) => {
    const images = {
      bg1: "/bg1.jpg",
      bg2: "/bg2.jpg",
      bg3: "/bg3.jpg",
      bg4: "/bg4.jpg",
    };
    return images[theme];
  };

  return (
    <>
      {/* Background layer with smooth transitions */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: `url('${getBackgroundImage(currentTheme)}')`,
        }}
      />
      {/* Optional overlay for better glass effect visibility */}
      <div className="fixed inset-0 -z-10 bg-black/20" />
      {children}
    </>
  );
}
