// app/admin/articles/new/page.js
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AdminSidebar from "@/components/AdminSidebar";
import { Search, Bell, Home, Menu, Image as ImageIcon, ArrowLeft } from "lucide-react";

export default function NewArticle() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    author: "امیرحسین رضایی",
    readTime: "۵ دقیقه",
    image: "/images/articles/default.webp",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const saved = JSON.parse(localStorage.getItem("blogArticles") || "[]");

    const newArticle = {
      id: Date.now(),
      ...formData,
      date: new Date().toLocaleDateString("fa-IR"),
      slug: formData.title
        .toLowerCase()
        .replace(/[^a-z0-9آ-ی]+/g, "-")
        .replace(/(^-|-$)/g, ""),
    };

    const updated = [newArticle, ...saved];
    localStorage.setItem("blogArticles", JSON.stringify(updated));

    setTimeout(() => {
      setLoading(false);
      router.push("/admin/articles");
    }, 800);
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
              Search
              <input type="text" placeholder="جستجو..." className="w-full bg-white/10 rounded-xl pl-11 pr-4 py-2.5 text-white placeholder-white/40 focus:outline-none" />
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-lg hover:bg-white/10 relative text-white">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </button>
              <div className="w-9 h-9 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-black font-bold text-sm">ع</div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Link href="/admin/articles" className="p-2 bg-white/10 rounded-xl hover:bg-white/20 transition-all">
                <ArrowLeft className="w-5 h-5 text-white" />
              </Link>
              <h1 className="text-3xl font-bold text-white">نوشتن مقاله جدید</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <label className="block text-white/80 mb-3 font-medium">عنوان مقاله</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 transition-all"
                  placeholder="یه عنوان جذاب بنویس..."
                />
              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <label className="block text-white/80 mb-3 font-medium">خلاصه مقاله (برای نمایش در کارت)</label>
                <textarea
                  rows="4"
                  required
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 resize-none"
                  placeholder="چند خط توضیح جذاب..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                  <label className="block text-white/80 mb-3">نویسنده</label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white"
                  />
                </div>

                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                  <label className="block text-white/80 mb-3">زمان مطالعه</label>
                  <input
                    type="text"
                    value={formData.readTime}
                    onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white"
                    placeholder="مثال: ۷ دقیقه"
                  />
                </div>

                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                  <label className="block text-white/80 mb-3">تصویر مقاله (لینک یا آپلود بعداً)</label>
                  <input
                    type="text"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white"
                    placeholder="/images/articles/new.jpg"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <Link href="/admin/articles" className="px-8 py-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all">
                  لغو
                </Link>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-10 py-4 bg-gradient-to-r from-[#E8C56A] to-[#D4AF37] text-black font-bold rounded-xl hover:scale-105 transition-all shadow-xl disabled:opacity-70"
                >
                  {loading ? "در حال انتشار..." : "انتشار مقاله"}
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}