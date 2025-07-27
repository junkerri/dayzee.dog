"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "🏠 Home", emoji: "🏠" },
    { href: "/about", label: "🐾 About", emoji: "🐾" },
    { href: "/photos", label: "📸 Photos", emoji: "📸" },
    { href: "/guestbook", label: "📝 Guestbook", emoji: "📝" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b-2 border-pink-300 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-pink-600 neon-text">
            🐕 Dayzee.dog 🐕
          </div>

          <div className="flex space-x-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <div
                  className={`relative px-4 py-2 rounded-lg font-medium transition-colors ${
                    pathname === item.href
                      ? "bg-gradient-to-r from-pink-400 to-purple-500 text-white shadow-lg"
                      : "text-gray-700 hover:text-pink-600 hover:bg-pink-50"
                  }`}
                >
                  <span className="text-lg mr-2">{item.emoji}</span>
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
