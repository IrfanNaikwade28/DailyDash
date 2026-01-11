"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Card } from "@/components/ui/glass/card";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSidebarOpen } from "@/store/slices/uiSlice";
import { useEffect } from "react";

const navItems = [
  { href: "/feed", label: "Feed", icon: "📰" },
  { href: "/trending", label: "Trending", icon: "🔥" },
  { href: "/favorites", label: "Favorites", icon: "❤️" },
  { href: "/theme", label: "Theme", icon: "🎨" },
  { href: "/settings", label: "Settings", icon: "⚙️" },
];

export function Sidebar() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector((state) => state.ui.isSidebarOpen);

  // Close sidebar on route change (mobile)
  useEffect(() => {
    if (window.innerWidth < 768) {
      dispatch(setSidebarOpen(false));
    }
  }, [pathname, dispatch]);

  // Handle click outside on mobile
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (window.innerWidth < 768 && isSidebarOpen) {
        const sidebar = document.getElementById('sidebar');
        if (sidebar && !sidebar.contains(e.target as Node)) {
          dispatch(setSidebarOpen(false));
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSidebarOpen, dispatch]);

  return (
    <>
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => dispatch(setSidebarOpen(false))}
        />
      )}
      
      <aside 
        id="sidebar"
        className={`w-64 min-h-screen p-4 fixed left-0 top-0 z-40 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
      <Card variant="frosted" className="p-6 flex flex-col h-[90vh]">
        {/* Logo Section */}
        <div className="mb-8 pb-6 border-b border-white/20">
          <Link href="/feed" className="flex items-center gap-3 group">
            <div className="w-full h-auto relative">
              <Image
                src="/logo.png"
                alt="DailyDash Logo"
                width={160}
                height={160}
                className="object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="space-y-1 flex-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (pathname === "/" && item.href === "/feed");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all group ${
                  isActive
                    ? "bg-white/25 backdrop-blur-sm text-white font-semibold shadow-lg"
                    : "text-white/70 hover:bg-white/15 hover:text-white"
                }`}
              >
                <span className={`text-xl transition-transform ${
                  isActive ? "scale-110" : "group-hover:scale-110"
                }`}>
                  {item.icon}
                </span>
                <span className="text-base">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="mt-auto pt-6 border-t border-white/20">
          <div className="text-white/40 text-xs text-center">
            <p>© 2026 DailyDash</p>
          </div>
        </div>
      </Card>
      </aside>
    </>
  );
}
