// src/components/ArticlesSection.js
import Link from "next/link";
import Image from "next/image";
import { MdArrowForward, MdAccessTime } from "react-icons/md";

const articles = [
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

export default function ArticlesSection() {
  return (
    <section className="py-24 md:py-32 px-4 relative overflow-hidden">
      {/* پس‌زمینه طلایی درخشان مثل Testimonials */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-radial from-[#E8C56A]/20 via-[#D4AF37]/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* عنوان طلایی لوکس */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-[#E8C56A] via-[#D4AF37] to-[#B8961E] bg-clip-text text-transparent drop-shadow-2xl">
              مقالات 
            </span>
          </h2>
         
        </div>

        {/* کارت‌های مقالات — شیشه‌ای + طلایی */}
        <div className="grid lg:grid-cols-3 gap-10">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.slug}`}
              className="group relative bg-white/5 backdrop-blur-2xl rounded-3xl overflow-hidden border border-[#E8C56A]/20 shadow-2xl transition-all duration-700 hover:shadow-2xl hover:shadow-[#E8C56A]/40 hover:border-[#E8C56A] hover:-translate-y-6"
              style={{
                background: "rgba(30, 30, 30, 0.4)",
                boxShadow: "0 20px 40px rgba(216, 185, 30, 0.1)",
              }}
            >
              {/* حلقه طلایی دور کارت هنگام هاور */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#E8C56A] via-[#D4AF37] to-[#B8961E] opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-700 -z-10"></div>

              {/* تصویر مقاله */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* برچسب جدید */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#E8C56A] to-[#D4AF37] text-black text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                  جدید
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#E8C56A] transition-colors duration-500">
                  {article.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed line-clamp-3 mb-6">
                  {article.excerpt}
                </p>

                {/* اطلاعات پایین */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4 text-gray-400">
                    <div className="flex items-center gap-1">
                      <MdAccessTime className="text-[#E8C56A]" />
                      <span>{article.readTime}</span>
                    </div>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                  <MdArrowForward className="text-[#E8C56A] text-2xl group-hover:translate-x-3 transition-transform duration-500" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* دکمه جدید: مشاهده تمامی مقالات — همونی که خواستی */}
        <div className="text-center mt-20">
          <Link
            href="#" // خودت بعداً عوض کن → مثلاً "/blog" یا "/articles"
            className="group relative inline-flex items-center gap-4 px-12 py-5 bg-gradient-to-r from-[#E8C56A] to-[#D4AF37] text-black font-bold text-xl rounded-full overflow-hidden shadow-2xl hover:shadow-2xl hover:shadow-[#E8C56A]/60 transform hover:scale-105 transition-all duration-400"
          >
            <span className="relative z-10 flex items-center gap-3">
              مشاهده تمامی مقالات
              <MdArrowForward className="text-2xl group-hover:translate-x-2 transition-transform duration-500" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-40 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
          </Link>
        </div>

        {/* خط طلایی پایین */}
        <div className="mt-20 h-1 bg-gradient-to-r from-transparent via-[#E8C56A]/80 to-transparent"></div>
      </div>
    </section>
  );
}