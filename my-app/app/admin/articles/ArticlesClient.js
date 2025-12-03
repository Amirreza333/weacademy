// app/articles/ArticlesClient.js
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ArticlesClient({ defaultArticles }) {
  const [articles, setArticles] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    author: '',
    image: '/images/blog-default.jpg',
  });

  // لود مقالات از localStorage یا دیتای پیش‌فرض
  useEffect(() => {
    const saved = localStorage.getItem('weacademy_articles');
    if (saved) {
      setArticles(JSON.parse(saved));
    } else {
      setArticles(defaultArticles);
    }
  }, [defaultArticles]);

  // ذخیره خودکار
  useEffect(() => {
    if (articles.length > 0) {
      localStorage.setItem('weacademy_articles', JSON.stringify(articles));
    }
  }, [articles]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = {
      id: Date.now().toString(),
      slug: formData.title
        .toLowerCase()
        .replace(/[^ا-یa-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, ''),
      title: formData.title,
      excerpt: formData.excerpt || formData.title.slice(0, 120) + '...',
      author: formData.author || 'ادمین WeAcademy',
      date: new Date().toISOString().split('T')[0],
      image: formData.image || '/images/blog-default.jpg',
    };

    setArticles(prev => [newArticle, ...prev]);
    setFormData({ title: '', excerpt: '', author: '', image: '' });
    setShowForm(false);
  };

  const sortedArticles = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));
  const featured = sortedArticles[0];
  const rest = sortedArticles.slice(1);

  return (
    <>
      {/* Hero */}
      {featured && (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <Image src={featured.image} alt={featured.title} fill priority className="object-cover brightness-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <span className="inline-block px-5 py-2 bg-yellow-500/20 backdrop-blur-md border border-yellow-500/40 rounded-full text-yellow-400 text-xs font-bold tracking-wider mb-6">
              مقاله ویژه
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
              <span className="bg-gradient-to-r from-[#E8C56A] to-[#D4AF37] bg-clip-text text-transparent">
                {featured.title}
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
              {featured.excerpt}
            </p>

            <div className="mt-8 text-sm text-gray-400 flex items-center justify-center gap-5">
              <span>{featured.author}</span>
              <span>•</span>
              <span>{new Date(featured.date).toLocaleDateString('fa-IR')}</span>
            </div>

            <Link href={`/articles/${featured.slug}`}>
              <button className="mt-10 px-10 py-4 bg-gradient-to-r from-[#E8C56A] to-[#D4AF37] text-black font-bold rounded-full text-lg hover:scale-105 transition-all duration-300 shadow-xl">
                مطالعه مقاله
              </button>
            </Link>
          </div>
        </section>
      )}

      {/* فرم + لیست مقالات */}
      {showForm && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-6">
          <form onSubmit={handleSubmit} className="bg-gray-900 border border-[#E8C56A]/40 rounded-3xl p-8 max-w-2xl w-full shadow-2xl">
            <h2 className="text-3xl font-black text-[#E8C56A] mb-8 text-center">نوشتن مقاله جدید</h2>

            <input
              type="text"
              placeholder="عنوان مقاله"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full mb-5 px-6 py-4 bg-white/10 border border-[#E8C56A]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#E8C56A]"
            />

            <textarea
              placeholder="خلاصه مقاله (اختیاری)"
              rows="4"
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              className="w-full mb-5 px-6 py-4 bg-white/10 border border-[#E8C56A]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#E8C56A]"
            />

            <input
              type="text"
              placeholder="نام نویسنده (اختیاری)"
              value={formData.author}
              onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              className="w-full mb-5 px-6 py-4 bg-white/10 border border-[#E8C56A]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#E8C56A]"
            />

            <div className="flex gap-4 justify-end mt-8">
              <button type="button" onClick={() => setShowForm(false)} className="px-8 py-4 border border-gray-600 text-gray-400 rounded-full hover:bg-gray-800 transition">
                لغو
              </button>
              <button type="submit" className="px-10 py-4 bg-gradient-to-r from-[#E8C56A] to-[#D4AF37] text-black font-bold rounded-full hover:scale-105 transition shadow-xl">
                انتشار مقاله
              </button>
            </div>
          </form>
        </div>
      )}

      <section className="py-20 px-6 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black">
              <span className="bg-gradient-to-r from-[#E8C56A] to-[#D4AF37] bg-clip-text text-transparent">
                همه مقالات
              </span>
            </h2>

            <button
              onClick={() => setShowForm(true)}
              className="px-8 py-4 bg-gradient-to-r from-[#E8C56A] to-[#D4AF37] text-black font-bold rounded-full text-lg hover:scale-110 transition-all duration-300 shadow-xl flex items-center gap-3"
            >
              مقاله جدید
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((article) => (
              <Link key={article.id} href={`/articles/${article.slug}`}>
                <article className="group bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-[#E8C56A]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#E8C56A]/20 hover:-translate-y-2">
                  <div className="relative h-56 overflow-hidden">
                    <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#E8C56A] line-clamp-2 group-hover:text-yellow-400 transition">
                      {article.title}
                    </h3>
                    <p className="mt-4 text-gray-400 text-sm line-clamp-2 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="mt-5 flex items-center justify-between text-xs text-gray-500">
                      <span>{article.author}</span>
                      <span className="text-[#E8C56A] group-hover:translate-x-1 transition">بیشتر</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}