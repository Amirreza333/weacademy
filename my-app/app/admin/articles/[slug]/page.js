// app/articles/[slug]/page.js
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default function ArticlePage({ params }) {
  // این خط خیلی مهمه! slug رو از URL دیکد کن
  const decodedSlug = decodeURIComponent(params.slug);

  let articles = [];
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('weacademy_articles');
    if (saved) {
      articles = JSON.parse(saved);
    }
  }

  // حالا با slug دیکد شده مقایسه کن
  const article = articles.find(a => a.slug === decodedSlug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero مقاله */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-8">
            <span className="bg-gradient-to-r from-[#E8C56A] to-[#D4AF37] bg-clip-text text-transparent">
              {article.title}
            </span>
          </h1>

          <div className="flex items-center justify-center gap-6 text-gray-300 text-sm md:text-lg">
            <span>{article.author}</span>
            <span>•</span>
            <span>{new Date(article.date).toLocaleDateString('fa-IR')}</span>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
          <div className="text-xl leading-relaxed text-gray-300 space-y-6">
            <p className="text-2xl font-bold text-[#E8C56A] mb-8">
              {article.excerpt}
            </p>

            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <p className="text-gray-400 italic">
                مقاله با موفقیت لود شد! حالا می‌تونی محتوا رو کامل کنی
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}