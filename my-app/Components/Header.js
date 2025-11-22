"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { MessageCircle } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // "خدمات" یا null
  const headerRef = useRef(null);

  // بستن منو و دراپ‌داون با کلیک بیرون از هدر
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setIsMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    if (isMenuOpen || openDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen, openDropdown]);

  const navItems = [
    { label: "خانه", href: "/" },
    { label: "درباره ما", href: "/Aboutus" },
    {
      label: "خدمات",
      dropdown: [
        { label: "ورک‌شاپ و سمینار", href: "/services/workshops" },
        { label: "آموزش و مشاوره مدرسین", href: "/services/teacher-training" },
        { label: "آموزش", href: "/services/training" },
        { label: "جذب مدرس", href: "/services/recruitment" },
      ],
    },
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

  // کامپوننت دراپ‌داون مشترک
  const DropdownMenu = ({ items, onClose }) => (
    <div
      className="bg-[#0e121c]/95 backdrop-blur-3xl rounded-2xl border border-[#dbb91e]/30 shadow-2xl overflow-hidden z-50"
      onMouseLeave={onClose} // فقط وقتی ماوس از دراپ‌داون رفت بیرون بسته بشه
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClose}
          className="block px-6 py-4 text-gray-200 hover:bg-[#dbb91e]/20 hover:text-[#dbb91e] transition-all text-sm font-medium text-right border-b border-[#dbb91e]/10 last:border-0"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );

  return (
    <section dir="ltr" className="py-4 sm:py-6 px-4 flex justify-center">
      <header
        ref={headerRef}
        className="relative w-full max-w-7xl bg-[#0e121c]/90 backdrop-blur-3xl rounded-2xl overflow-hidden py-3 sm:py-4 border border-[#dbb91e]/50 shadow-2xl"
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#dbb91e]/5 via-transparent to-[#dbb91e]/5 opacity-30"
          aria-hidden="true"
        />

        <div className="relative container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* لوگو */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                onClick={() => {
                  setIsMenuOpen(false);
                  setOpenDropdown(null);
                }}
              >
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

            {/* همبرگر موبایل */}
            <button
              className="md:hidden flex flex-col justify-center items-center space-y-1 z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "بستن منو" : "باز کردن منو"}
            >
              <span
                className={`block w-6 h-0.5 bg-[#dbb91e] transition-all ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-[#dbb91e] transition-all ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-[#dbb91e] transition-all ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>

            {/* منوی دسکتاپ */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <div key={item.label} className="relative">
                  {/* آیتم‌های دارای دراپ‌داون (فقط خدمات) */}
                  {item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setOpenDropdown("خدمات")}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === "خدمات" ? null : "خدمات"
                          )
                        }
                        className="px-4 lg:px-5 py-2.5 text-sm lg:text-base font-medium rounded-xl hover:bg-[#dbb91e]/20 active:scale-95 flex items-center gap-2 text-gray-200 hover:text-[#dbb91e] transition-all"
                      >
                        {item.label}
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            openDropdown === "خدمات" ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* دراپ‌داون */}
                      {openDropdown === "خدمات" && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64">
                          <DropdownMenu
                            items={item.dropdown}
                            onClose={() => setOpenDropdown(null)}
                          />
                        </div>
                      )}
                    </div>
                  ) : (
                    /* آیتم‌های عادی */
                    <Link
                      href={item.href}
                      className={`relative px-4 lg:px-5 py-2.5 text-sm lg:text-base font-medium rounded-xl hover:bg-[#dbb91e]/20 active:scale-95 flex items-center gap-2 transition-all ${
                        item.label === "کاربران برتر" ||
                        item.label === "چت زنده"
                          ? "bg-clip-text text-transparent bg-gradient-to-r from-[#E8C56A] via-[#D4AF37] to-[#B8961E]"
                          : "text-gray-200 hover:text-[#dbb91e]"
                      }`}
                      onClick={() => setOpenDropdown(null)}
                    >
                      {item.icon && <item.icon className="w-5 h-5" />}
                      {item.label}

                      {item.badge && (
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      )}
                      {item.notification && (
                        <span className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-br from-red-500 to-pink-500 rounded-full animate-ping" />
                      )}

                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#dbb91e] scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-right" />
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* منوی موبایل */}
          {isMenuOpen && (
            <nav className="md:hidden mt-6 flex flex-col space-y-3 bg-black/90 backdrop-blur-xl p-5 rounded-xl border border-[#dbb91e]/30">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === "خدمات" ? null : "خدمات"
                          )
                        }
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg hover:bg-[#dbb91e]/20 text-gray-200 hover:text-[#dbb91e] font-medium transition"
                      >
                        {item.label}
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            openDropdown === "خدمات" ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {openDropdown === "خدمات" && (
                        <div className="mt-3">
                          <DropdownMenu
                            items={item.dropdown}
                            onClose={() => {
                              setOpenDropdown(null);
                              setIsMenuOpen(false);
                            }}
                          />
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block text-center px-4 py-3 rounded-lg hover:bg-[#dbb91e]/20 transition font-medium ${
                        item.label === "کاربران برتر" ||
                        item.label === "چت زنده"
                          ? "bg-clip-text text-transparent bg-gradient-to-r from-[#E8C56A] via-[#D4AF37] to-[#B8961E]"
                          : "text-gray-200 hover:text-[#dbb91e]"
                      }`}
                    >
                      {item.icon && (
                        <item.icon className="w-5 h-5 inline ml-2" />
                      )}
                      {item.label}
                      {item.badge && (
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse ml-2" />
                      )}
                      {item.notification && (
                        <span className="inline-block w-3 h-3 bg-gradient-to-br from-red-500 to-pink-500 rounded-full animate-ping ml-2" />
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          )}
        </div>
      </header>
    </section>
  );
}
