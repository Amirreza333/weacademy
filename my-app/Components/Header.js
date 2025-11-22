"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { MessageCircle } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // بستن منو با کلیک بیرون
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { label: "خانه", href: "/" },
    { label: "درباره ما", href: "/Aboutus" },
    { label: "کاربران برتر", href: "/top-users", badge: true },
    {
      label: "چت زنده",
      href: "/chat",
      icon: MessageCircle,
      badge: true,
      notification: true,
    },
    { label: "مقالات", href: "/blog" },
    { label: "تماس با ما", href: "/Contact" },
    { label: "همکاری با ما", href: "/collaboration" },
  ];

  return (
    <section dir="ltr" className="py-4 sm:py-6 px-4 flex justify-center">
      <header className="relative w-full max-w-7xl bg-[#0e121c]/90 backdrop-blur-3xl rounded-2xl overflow-hidden py-3 sm:py-4 border border-[#dbb91e]/50 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-[#dbb91e]/5 via-transparent to-[#dbb91e]/5 opacity-30" aria-hidden="true" />

        <div className="relative container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* لوگو */}
            <div className="flex-shrink-0">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <Image
                  src="/logo1.png"
                  width={140}
                  height={48}
                  alt="WeAcademy - آکادمی تخصصی آرایشگری"
                  className="object-contain w-28 sm:w-32 lg:w-36"
                  priority
                />
              </Link>
            </div>

            {/* دکمه همبرگر - حالا هم باز می‌کنه هم می‌بنده! */}
            <button
              className="md:hidden flex flex-col justify-center items-center space-y-1 focus:outline-none z-50"
              onClick={() => setIsMenuOpen(prev => !prev)}
              aria-label={isMenuOpen ? "بستن منو" : "باز کردن منو"}
            >
              <span
                className={`block w-6 h-0.5 bg-[#dbb91e] transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-[#dbb91e] transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-[#dbb91e] transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </button>

            {/* منوی دسکتاپ */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 lg:px-5 py-2.5 text-sm lg:text-base font-medium rounded-xl transition-all duration-300 hover:bg-[#dbb91e]/20 active:scale-95 group flex items-center gap-2 ${
                    item.label === "کاربران برتر" || item.label === "چت زنده"
                      ? "bg-clip-text text-transparent bg-gradient-to-r from-[#E8C56A] via-[#D4AF37] to-[#B8961E] hover:text-transparent"
                      : "text-gray-200 hover:text-[#dbb91e]"
                  }`}
                >
                  {item.icon && <item.icon className="w-5 h-5" />}
                  {item.label}

                  {item.badge && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  )}
                  {item.notification && (
                    <span className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-br from-red-500 to-pink-500 rounded-full animate-ping"></span>
                  )}

                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#dbb91e] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></span>
                </Link>
              ))}
            </nav>
          </div>

          {/* منوی موبایل */}
          {isMenuOpen && (
            <nav
              ref={menuRef}
              className="md:hidden mt-4 flex flex-col space-y-2 bg-black/90 backdrop-blur-xl p-4 rounded-xl border border-[#dbb91e]/30 transition-all duration-300"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-3 text-center font-medium rounded-lg transition-all duration-200 hover:bg-[#dbb91e]/20 active:scale-95 flex items-center justify-center gap-2 ${
                    item.label === "کاربران برتر" || item.label === "چت زنده"
                      ? "bg-clip-text text-transparent bg-gradient-to-r from-[#E8C56A] via-[#D4AF37] to-[#B8961E]"
                      : "text-gray-200 hover:text-[#dbb91e]"
                  }`}
                  onClick={() => requestAnimationFrame(() => setIsMenuOpen(false))}
                >
                  {item.icon && <item.icon className="w-5 h-5" />}
                  {item.label}
                  {item.badge && <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>}
                  {item.notification && (
                    <span className="w-3 h-3 bg-gradient-to-br from-red-500 to-pink-500 rounded-full animate-ping"></span>
                  )}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>
    </section>
  );
}