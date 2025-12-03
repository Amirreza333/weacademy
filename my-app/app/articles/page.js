// app/blog/page.js
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, ArrowLeft, Calendar, User } from 'lucide-react';

export default function BlogPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const loadArticles = () => {
      // اینجا عوض شد → از همون کلید اصلی استفاده می‌کنیم
      const saved = localStorage.getItem('weacademy_articles');
      if (saved) {
        setArticles(JSON.parse(saved));
      }
    };

    loadArticles();

    const handleChange = (e) => {
      if (e.key === 'weacademy_articles') {
        loadArticles();
      }
    };

    window.addEventListener('storage', handleChange);
    return () => window.removeEventListener('storage', handleChange);
  }, []);

  // جدیدترین اول
  const sortedArticles = [...articles].sort((a, b) => b.id - a.id);

  return (
    <>
      {/* Hero طلایی لوکس */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 ">
          <div className="absolute inset-0 bg-gradient-to-br  opacity-90" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-radial from-[#E8C56A]/30 via-transparent to-transparent rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6">
            <span className="bg-gradient-to-r from-[#E8C56A] via-[#D4AF37] to-[#B8961E] bg-clip-text text-transparent drop-shadow-2xl">
              مقالات طلایی آرایشگری
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            تجربه‌های واقعی، رازهای موفقیت و راهنمای حرفه‌ای شدن در دنیای زیبایی
          </p>

          <div className="mt-12 flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#E8C56A] to-[#D4AF37] text-black font-bold text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#E8C56A]/60"
            >
              بازگشت به صفحه اصلی
            </Link>
          </div>
        </div>
      </section>

      {/* لیست مقالات */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] bg-gradient-radial from-[#E8C56A]/20 via-transparent to-transparent rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-[#E8C56A] via-[#D4AF37] to-[#B8961E] bg-clip-text text-transparent drop-shadow-2xl">
                همه مقالات
              </span>
            </h2>
            <p className="mt-6 text-xl text-gray-400 font-light">
              {articles.length} مقاله حرفه‌ای برای رشد و موفقیت شما در آرایشگری
            </p>
          </div>

          {articles.length === 0 ? (
            <div className="text-center py-32">
              <p className="text-3xl text-gray-500 mb-8">هنوز مقاله‌ای منتشر نشده</p>
              <div className="text-8xl animate-pulse">در حال بارگذاری...</div>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
              {sortedArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/articles/${encodeURIComponent(article.slug)}`}
                  className="group relative bg-white/5 backdrop-blur-2xl rounded-3xl overflow-hidden border border-[#E8C56A]/20 shadow-2xl transition-all duration-700 hover:shadow-2xl hover:shadow-[#E8C56A]/40 hover:border-[#E8C56A] hover:-translate-y-6"
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#E8C56A] via-[#D4AF37] to-[#B8961E] opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-700 -z-10" />

                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-[#E8C56A] to-[#D4AF37] text-black text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {article.readTime || '۷ دقیقه'}
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#E8C56A] transition-colors duration-500 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed line-clamp-3 mb-6">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-[#E8C56A]" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-[#E8C56A]" />
                          <span>{article.date}</span>
                        </div>
                      </div>
                      <span className="text-[#E8C56A] font-bold group-hover:translate-x-3 transition-transform duration-500">
                        مطالعه
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-20 h-1 bg-gradient-to-r from-transparent via-[#E8C56A]/80 to-transparent" />
        </div>
      </section>
    </>
  );
}