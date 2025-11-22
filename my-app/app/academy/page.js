"use client";

import Image from "next/image";
import Link from "next/link";
import { Award, Globe, ArrowRight } from "lucide-react";

export default function Academy() {
  const مربیان = [
    {
      نام: "مهسا رضایی",
      عنوان: "مستر مربی بین‌المللی رنگ و لایت",
      سابقه: "۱۲ سال تجربه | بیش از ۳۵۰۰ هنرجو",
      کشورهای_فعالیت: "ایران • دبی • ترکیه",
      ویدیو: "https://www.youtube.com/embed/Xx12345", // ← اینجا لینک یوتیوب خودت رو بذار
      عکس: "/instructors/mahsarezaei.jpg",
      افتخارات: ["مدرس رسمی ISO", "برنده ۵ جایزه جهانی", "همکاری با لورآل پاریس"],
    },
    {
      نام: "نیما کریمی",
      عنوان: "مستر کراتین و احیا مو",
      سابقه: "۱۰ سال تجربه | بیش از ۴۲۰۰ هنرجو",
      کشورهای_فعالیت: "ایران • آلمان",
      ویدیو: "https://www.youtube.com/embed/Yy67890",
      عکس: "/instructors/nimakarimi.jpg",
      افتخارات: ["مدرس رسمی برند گلوریا", "گواهینامه آلمان", "بهترین مربی سال ۱۴۰۳"],
    },
    {
      نام: "ساره احمدی",
      عنوان: "مستر میکاپ و گریم حرفه‌ای",
      سابقه: "۹ سال تجربه | بیش از ۳۸۰۰ هنرجو",
      کشورهای_فعالیت: "ایران • استانبول",
      ویدیو: "https://www.youtube.com/embed/Zz54321",
      عکس: "/instructors/sareahmad.jpg",
      افتخارات: ["مدرس مک آکادمی", "گریم تخصصی عروس", "همکاری با برندهای جهانی"],
    },
  ];

  return (
    <section className="relative min-h-screen py-20 px-4 overflow-hidden">
      {/* بک‌گراند اصلی سایت کاملاً شفاف و درخشان باقی می‌مونه */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* عنوان اصلی صفحه */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#E8C56A] via-[#D4AF37] to-[#B8961E] bg-clip-text text-transparent drop-shadow-2xl">
              آموزشگاه وی آکادمی
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed">
            تنها آکادمی ایران با مدارک بین‌المللی معتبر و مربیان دارای گواهینامه ISO
          </p>
        </div>

        {/* کارت‌های مربیان */}
        <div className="grid lg:grid-cols-3 gap-10">
          {مربیان.map((مربی, شاخص) => (
            <div
              key={شاخص}
              className="group relative bg-black/40 backdrop-blur-2xl rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl hover:shadow-[#D4AF37]/60 transition-all duration-700 hover:scale-[1.03]"
            >
              {/* ویدیو معرفی مربی */}
              <div className="relative aspect-video bg-black/60">
                <iframe
                  src={مربی.ویدیو}
                  title={`ویدیو معرفی ${مربی.نام}`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-70" />

                {/* عکس و اسم مربی روی ویدیو */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-end gap-5">
                    <div className="relative">
                      <Image
                        src={مربی.عکس || "/placeholder.jpg"}
                        alt={مربی.نام}
                        width={120}
                        height={120}
                        className="rounded-full border-4 border-[#E8C56A] shadow-2xl shadow-[#D4AF37]/60"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-[#D4AF37] to-[#B8961E] text-black text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                        زنده
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black text-white drop-shadow-2xl">
                        {مربی.نام}
                      </h3>
                      <p className="text-[#E8C56A] font-bold text-lg drop-shadow-lg">
                        {مربی.عنوان}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* اطلاعات تکمیلی مربی */}
              <div className="p-8 space-y-6">
                <div className="flex items-center gap-3 text-gray-200">
                  <Award className="w-6 h-6 text-[#D4AF37]" />
                  <span className="font-semibold">{مربی.سابقه}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-200">
                  <Globe className="w-6 h-6 text-[#D4AF37]" />
                  <span>{مربی.کشورهای_فعالیت}</span>
                </div>

                {/* افتخارات و بج‌ها */}
                <div className="flex flex-wrap gap-3">
                  {مربی.افتخارات.map((افتخار, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gradient-to-r from-[#D4AF37]/20 to-[#B8961E]/20 border border-[#D4AF37]/60 rounded-full text-sm font-bold text-[#E8C56A]"
                    >
                      {افتخار}
                    </span>
                  ))}
                </div>

                {/* دکمه ثبت‌نام — مستقیم میره به فرم ثبت اطلاعات */}
                <Link href="/auth/register-info" className="block mt-6">
                  <button className="w-full py-5 bg-gradient-to-r from-[#D4AF37] to-[#B8961E] text-black font-black text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-[#D4AF37]/70 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group">
                    ثبت‌نام در دوره مربی‌گری
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                </Link>
              </div>

              {/* افکت طلایی هنگام هاور */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* بخش نهایی — کال تو اکشن */}
        <div className="mt-24 text-center">
          <div className="inline-block bg-black/50 backdrop-blur-3xl border-2 border-[#D4AF37]/50 rounded-3xl p-12 max-w-5xl shadow-2xl shadow-[#D4AF37]/30">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              آماده‌ای <span className="text-[#E8C56A]">مستر مربی بعدی</span> باشی؟
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light">
              فقط ۳۰ نفر در هر دوره — ظرفیت بسیار محدود | مدرک معتبر بین‌المللی | پشتیبانی مادام‌العمر
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/auth/register-info">
                <button className="px-14 py-6 bg-gradient-to-r from-[#D4AF37] to-[#B8961E] text-black font-black text-xl md:text-2xl rounded-full shadow-2xl hover:shadow-3xl hover:shadow-[#D4AF37]/70 transform hover:scale-110 transition-all duration-300">
                  همین حالا رزرو کن
                </button>
              </Link>
              <Link href="/consultation">
                <button className="px-14 py-6 border-3 border-[#D4AF37] text-[#E8C56A] font-black text-xl md:text-2xl rounded-full hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
                  مشاوره رایگان
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}