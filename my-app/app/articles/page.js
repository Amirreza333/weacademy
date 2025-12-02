// app/admin/articles/page.js
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import AdminSidebar from "@/components/AdminSidebar";
import { 
  Search, 
  Bell, 
  Menu, 
  Plus, 
  Edit, 
  Trash2, 
  ExternalLink 
} from "lucide-react";
import Image from "next/image";

export default function ArticlesList() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("blogArticles");
    if (saved) {
      setArticles(JSON.parse(saved));
    } else {
      const initial = [
        {
          id: 1,
          title: "چطور در ۶ ماه آرایشگر حرفه‌ای شدم؟",
          excerpt: "داستان واقعی یکی از شاگردای من که با متد اختصاصی کوچینگ من از صفر به درآمد بالای ۱۰۰ میلیون رسید...",
          author: "نرگس احمدی",
          date: "۱۴۰۴/۰۹/۱۰",
          readTime: "۷ دقیقه",
          image: "/images/articles/makeup1.webp",
          slug: "how-i-became-professional-makeup-artist-in-6-months",
        },
        {
          id: 2,
          title: "۵ اشتباه مرگبار آرایشگرا که مشتری رو فراری می‌کنه",
          excerpt: "اگر این اشتباهات رو انجام بدی، حتی با بهترین تکنیک هم مشتریات دیگه برنمی‌گردن!",
          author: "شیما رضایی",
          date: "۱۴۰۴/۰۹/۰۷",
          readTime: "۶ دقیقه",
          image: "/images/articles/makeup2.webp",
          slug: "5-deadly-mistakes-makeup-artists",
        },
        {
          id: 3,
          title: "چرا سالن‌های معمولی دیگه جواب نمی‌دن؟",
          excerpt: "تجربه ۱۲۰۰ آرایشگر نشون می‌ده چرا روش قدیمی کار نمی‌کنه و راه موفقیت چیه...",
          author: "مهسا کرمی",
          date: "۱۴۰۴/۰۹/۰۳",
          readTime: "۸ دقیقه",
          image: "/images/articles/makeup3.webp",
          slug: "why-traditional-salons-fail",
        },
        {
          id: 4,
          title: "از صفر تا درآمد ۱۵۰ میلیون با آرایش دائم",
          excerpt: "چطور با یادگیری میکروبلیدینگ و شیدینگ، فقط در ۴ ماه به درآمد رویایی رسیدم...",
          author: "فاطمه حسینی",
          date: "۱۴۰۴/۰۸/۲۹",
          readTime: "۹ دقیقه",
          image: "/images/articles/makeup4.webp",
          slug: "from-zero-to-150m-with-permanent-makeup",
        },
        {
          id: 5,
          title: "راز جذب مشتری VIP در آرایشگاه زنانه",
          excerpt: "این ۳ تکنیک کوچینگ باعث شد ۸۰٪ مشتری‌هام VIP بشن و نوبت‌هام تا ۳ ماه جلوتر پر بشه!",
          author: "نرگس احمدی",
          date: "۱۴۰۴/۰۸/۲۵",
          readTime: "۵ دقیقه",
          image: "/images/articles/makeup5.webp",
          slug: "how-to-attract-vip-clients",
        },
      ];
      setArticles(initial);
      localStorage.setItem("blogArticles", JSON.stringify(initial));
    }
  }, []);

  const deleteArticle = (id) => {
    if (confirm("مطمئنی می‌خوای این مقاله رو حذف کنی؟")) {
      const updated = articles.filter((a) => a.id !== id);
      setArticles(updated);
      localStorage.setItem("blogArticles", JSON.stringify(updated));
    }
  };

  return (
    <div className="flex h-screen bg-black/50">
      <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-black/40 backdrop-blur-xl border-b border-white/10 px-4 py-3">
          <div className="flex items-center justify-between">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-lg hover:bg-white/10 hidden lg:block text-white">
              <Menu className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 flex-1 max-w-md mx-4">
              <Search className="w-5 h-5 text-white/50 absolute mr-3 pointer-events-none" />
              <input
                type="text"
                placeholder="جستجو در مقالات آرایشگری..."
                className="w-full bg-white/10 backdrop-blur-md rounded-xl pl-11 pr-9 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-500/50  transition-all"
              />
            </div>

            <div className="flex items-center gap-3">
              <button className="p-2 rounded-lg hover:bg-white/10 relative text-white">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </button>
              <div className="w-9 h-9 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                ن
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-10">
              <div>
                <h1 className="text-4xl font-bold text-white">
                  مقالات آرایشگری و کوچینگ بانوان
                </h1>
                <p className="text-white/60 mt-2 text-lg">
                  تجربه‌های واقعی، نکات طلایی و راه موفقیت در آرایشگری حرفه‌ای
                </p>
              </div>

              <div className="flex gap-4 w-full sm:w-auto">
                <Link
                  href="/blog"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold rounded-2xl hover:scale-105 transition-all shadow-xl hover:shadow-pink-500/40"
                >
                  مشاهده در سایت
                  <ExternalLink className="w-5 h-5" />
                </Link>

                <Link
                  href="/admin/articles/new"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#E8C56A] to-[#D4AF37] text-black font-bold rounded-2xl hover:scale-105 transition-all shadow-xl"
                >
                  مقاله جدید
                  <Plus className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-pink-500/40 transition-all duration-300 group shadow-2xl"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
                      {article.readTime}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-5 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-white/50">
                        <span>{article.author}</span>
                        <span className="mx-2">•</span>
                        <span>{article.date}</span>
                      </div>

                      <div className="flex gap-3">
                        <button className="p-2.5 bg-pink-500/20 rounded-xl hover:bg-pink-500/40 transition-all">
                          <Edit className="w-4 h-4 text-pink-400" />
                        </button>
                        <button
                          onClick={() => deleteArticle(article.id)}
                          className="p-2.5 bg-red-500/20 rounded-xl hover:bg-red-500/40 transition-all"
                        >
                          <Trash2 className="w-4 h-4 text-red-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {articles.length === 0 && (
              <div className="text-center py-24">
                <div className="text-8xl mb-6">No articles yet</div>
                <p className="text-white/60 text-xl mb-10">هنوز هیچ مقاله‌ای منتشر نشده</p>
                <Link
                  href="/admin/articles/new"
                  className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold text-xl rounded-3xl hover:scale-110 transition-all shadow-2xl"
                >
                  اولین مقاله آرایشگری رو بنویس
                  <Plus className="w-7 h-7" />
                </Link>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}