'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Sparkles } from 'lucide-react';

export default function Blog() {
  const [hoveredId, setHoveredId] = useState(null);

  // 8 مقاله / سمینار با عکس
  const articles = [
    {
      id: 1,
      title: "سمینار میکاپ عروس ۱۴۰۴",
      date: "۱۵ مهر ۱۴۰۴",
      location: "تهران، سالن همایش‌های برج میلاد",
      attendees: "۳۲۰ هنرجو",
      image: "/images/grouppic9.jpg",
      description: "آموزش تکنیک‌های جدید میکاپ عروس با حضور اساتید بین‌المللی"
    },
    {
      id: 2,
      title: "کارگاه کاشت ناخن حرفه‌ای",
      date: "۱۰ آبان ۱۴۰۴",
      location: "اصفهان، آکادمی WeAcademy",
      attendees: "۱۸۰ هنرجو",
      image: "/images/grouppic7.jpg",
      description: "تکنیک‌های ژلیش، آکریلیک و دیزاین‌های جدید ۲۰۲۵"
    },
    {
      id: 3,
      title: "دوره رنگ و لایت مو",
      date: "۵ آذر ۱۴۰۴",
      location: "شیراز، هتل چمران",
      attendees: "۲۵۰ هنرجو",
      image: "/images/grouppic3.webp",
      description: "آموزش بالیاژ، آمبره و رنگ‌های فانتزی با مواد اورجینال"
    },
    {
      id: 4,
      title: "اکستنشن مژه و ابرو",
      date: "۲۰ دی ۱۴۰۴",
      location: "مشهد، مرکز همایش‌های آستان قدس",
      attendees: "۲۸۰ هنرجو",
      image: "/images/grouppicc.jpg",
      description: "تکنیک‌های والیوم، مگا والیوم و لیفت ابرو"
    },
    {
      id: 5,
      title: "میکاپ دائم و تتو",
      date: "۸ بهمن ۱۴۰۴",
      location: "تبریز، سالن همایش‌های شهریار",
      attendees: "۲۱۰ هنرجو",
      image: "/images/grouppic5.jpg",
      description: "آموزش میکروبلیدینگ، شیدینگ و تتو خط لب"
    },
    {
      id: 6,
      title: "طراحی ابرو و فیبروز",
      date: "۲۵ اسفند ۱۴۰۴",
      location: "کرج، سالن همایش‌های جهان‌نما",
      attendees: "۱۹۰ هنرجو",
      image: "/images/grouppiccc.jpg",
      description: "تکنیک‌های جدید فیبروز و میکروشیدینگ"
    },
    {
      id: 7,
      title: "سمینار بین‌المللی زیبایی",
      date: "۱۰ فروردین ۱۴۰۵",
      location: "تهران، هتل اسپیناس پالاس",
      attendees: "۴۵۰ هنرجو",
      image: "/images/grouppic2.webp",
      description: "حضور ۵ استاد از آلمان، ترکیه و امارات"
    },
    {
      id: 8,
      title: "دوره لیفت مژه و لمینت",
      date: "۳۰ اردیبهشت ۱۴۰۵",
      location: "رشت، سالن همایش‌های سپیدرود",
      attendees: "۱۶۰ هنرجو",
      image: "/images/grouppic4.jpg",
      description: "آموزش لیفت مژه، لمینت و رنگ مژه"
    },
  ];

  return (
    <>
      <section className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
        {/* پس‌زمینه طلایی نرم */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-b from-[#dbb91e]/10 to-transparent blur-3xl"></div>
          <div className="absolute bottom-0 w-full h-48 bg-gradient-to-t from-[#dbb91e]/5 to-transparent blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* عنوان خفن */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r from-[#E8C56A] via-[#D4AF37] to-[#B8961E] bg-clip-text text-transparent drop-shadow-2xl">
              گالری سمینارها
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-amber-300 font-medium">
              لحظات طلایی WeAcademy در سراسر ایران
            </p>
          </motion.div>

          {/* شبکه ۸ تایی عکس */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl"
                onMouseEnter={() => setHoveredId(article.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* عکس */}
                <div className="relative aspect-square">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* لایه تیره هنگام هاور */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* توضیحات هنگام هاور */}
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ 
                    y: hoveredId === article.id ? 0 : 100, 
                    opacity: hoveredId === article.id ? 1 : 0 
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="absolute inset-x-0 bottom-0 p-5 text-white"
                >
                  <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-[#E8C56A] to-[#B8961E] bg-clip-text text-transparent">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-300 mb-3 leading-relaxed">
                    {article.description}
                  </p>

                  <div className="flex flex-wrap gap-3 text-xs">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#dbb91e]" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#dbb91e]" />
                      <span>{article.location.split("،")[0]}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3 text-[#dbb91e]" />
                      <span>{article.attendees}</span>
                    </div>
                  </div>
                </motion.div>

                {/* آیکن درخشش */}
                <Sparkles className="absolute top-3 right-3 w-5 h-5 text-[#dbb91e] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>

          {/* دکمه بیشتر */}
          <div className="text-center mt-16">
            <button className="group bg-gradient-to-r from-[#dbb91e] to-amber-500 text-black font-bold px-10 py-4 rounded-full text-lg flex items-center justify-center gap-3 mx-auto hover:shadow-2xl hover:shadow-amber-500/60 transform hover:scale-105 transition-all duration-300">
              مشاهده همه سمینارها
              <Sparkles className="w-5 h-5 group-hover:animate-pulse" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}