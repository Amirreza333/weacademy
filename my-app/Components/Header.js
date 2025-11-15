'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { label: 'خانه', href: '/' },
    { label: 'درباره ما', href: '/Aboutus' },
    { label: 'کاربران برتر', href: '/top-users', badge: true },
    { label: 'مقالات', href: '/blog' },
    { label: 'تماس با ما', href: '/Contact' },
  ];

  return (
    <section dir="ltr" className="py-4 sm:py-6 px-4 flex justify-center">
      <header className="relative w-full max-w-7xl bg-[#0e121c]/90 backdrop-blur-3xl rounded-2xl overflow-hidden py-3 sm:py-4 border border-[#dbb91e]/50 shadow-2xl">
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#dbb91e]/5 via-transparent to-[#dbb91e]/5 opacity-30" aria-hidden="true" />
        
        <div className="relative container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            
            <div className="flex-shrink-0">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <Image
                  src="/logo1.png"
                  width={140}
                  height={48}
                  alt="لوگوی WeAcademy"
                  className="object-contain w-28 sm:w-32 lg:w-36"
                  priority
                />
              </Link>
            </div>

            <button
              className="md:hidden flex flex-col justify-center items-center space-y-1 focus:outline-none z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="منوی ناوبری"
            >
              <span className={`block w-6 h-0.5 bg-[#dbb91e] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-[#dbb91e] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-6 h-0.5 bg-[#dbb91e] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>

            {/* منوی دسکتاپ — با گرادیان طلایی برای "کاربران برتر" */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 lg:px-5 py-2.5 text-sm lg:text-base font-medium rounded-xl transition-all duration-300 hover:bg-[#dbb91e]/20 active:scale-95 group ${
                    item.label === 'کاربران برتر'
                      ? 'bg-gradient-to-r from-[#E8C56A] via-[#D4AF37] to-[#B8961E] bg-clip-text text-transparent hover:text-transparent'
                      : 'text-gray-200 hover:text-[#dbb91e]'
                  }`}
                >
                  {item.label}
                  {item.badge && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  )}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#dbb91e] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
              ))}
            </nav>
          </div>

          {/* منوی موبایل — هم گرادیان طلایی */}
          {isMenuOpen && (
            <nav
              ref={menuRef}
              className="md:hidden mt-4 flex flex-col space-y-2 bg-black/90 backdrop-blur-xl p-4 rounded-xl border border-[#dbb91e]/30"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-3 text-center font-font-medium rounded-lg transition-all duration-200 hover:bg-[#dbb91e]/20 active:scale-95 flex items-center justify-center gap-2 ${
                    item.label === 'کاربران برتر'
                      ? 'bg-gradient-to-r from-[#E8C56A] via-[#D4AF37] to-[#B8961E] bg-clip-text text-transparent'
                      : 'text-gray-200 hover:text-[#dbb91e]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                  {item.badge && (
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
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

export default Header;