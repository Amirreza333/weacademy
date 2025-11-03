'use client'; // فقط اگر از App Router استفاده می‌کنید و state دارید

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';



function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // اختیاری: بستن منو هنگام کلیک خارج از آن
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { label: 'خانه', href: '/' },
    { label: 'درباره ما', href: '/about' },
    { label: 'تماس با ما', href: '/contact' },
  ];

  return (
    <section dir='ltr' className="py-6 px-4 flex justify-center">
      <header className="relative w-full  bg-[#dbb91e]/70 backdrop-blur-3xl rounded-2xl overflow-hidden py-4 border border-red-200">
        {/* پس‌زمینه تصویری (اختیاری) */}
        <div
          className="absolute inset-0 bg-[url('/img/mountains.jpg')] bg-cover bg-center opacity-10"
          aria-hidden="true"
        />

        <div className="relative container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* لوگو */}
            <div className="">
              <Link href="/" aria-label="صفحه اصلی وی اکادمی" onClick={() => setIsMenuOpen(false)}>
                <Image
                  src="/logo1.png"
                  width={120}
                  height={40}
                  alt="لوگوی وی اکادمی"
                  className="object-contain"
                />
              </Link>
            </div>

            {/* دکمه همبرگری - فقط در صفحات کوچک نمایش داده شود */}
            <button
              className="md:hidden flex flex-col justify-center items-center space-y-1 focus:outline-none "
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="منوی ناوبری"
            >
              <span className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </button>

            {/* منوی دسکتاپ - فقط در md به بالا نمایش داده شود */}
            <nav className="hidden md:flex space-x-4 space-x-reverse bg">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-5 py-2 text-blue-50 font-medium rounded-lg transition-all duration-200 hover:bg-[#dbb91e]/80 hover:text-black active:scale-95"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* منوی موبایل - فقط در صفحات کوچک نمایش داده شود */}
          {isMenuOpen && (
            <nav
              ref={menuRef}
              className="md:hidden mt-6 flex flex-col space-y-3 bg-black/80 backdrop-blur-sm p-4 rounded-xl"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 text-center text-blue-50 font-medium rounded-lg transition-all duration-200 hover:bg-[#dbb91e]/60 hover:text-black active:scale-95"
                  onClick={() => setIsMenuOpen(false)} // بستن منو پس از کلیک
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>
    </section>
  );
}

export default Header;