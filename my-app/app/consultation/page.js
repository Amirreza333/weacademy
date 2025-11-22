"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, MessageCircle, Calendar, Clock, CheckCircle, Star, ArrowLeft } from "lucide-react";

export default function Consultation() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    field: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // اینجا می‌تونی به واتس‌اپ یا تلگرام یا فرم واقعی وصل کنی
    alert("درخواست مشاوره شما با موفقیت ثبت شد! به زودی با شما تماس می‌گیریم");
  };

  return (
    <section className="relative min-h-screen py-16 px-4 overflow-hidden">
      {/* بک‌گراند اصلی سایت کاملاً معلومه */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60" />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* عنوان اصلی */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            <span className="bg-gradient-to-r from-[#E8C56A] via-[#D4AF37] to-[#B8961E] bg-clip-text text-transparent drop-shadow-2xl">
              مشاوره رایگان
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto">
            با <span className="text-[#E8C56A] font-bold">مستر مربیان وی آکادمی</span> صحبت کن و مسیر موفقیتت رو پیدا کن
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* فرم مشاوره - شیشه‌ای و لوکس */}
          <div className="relative bg-black/40 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-[#D4AF37]/40 shadow-2xl shadow-[#D4AF37]/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              فرم رزرو مشاوره رایگان
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="نام و نام خانوادگی"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-[#D4AF37]/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-[#E8C56A] focus:ring-4 focus:ring-[#D4AF37]/20 transition-all"
              />

              <input
                type="tel"
                name="phone"
                placeholder="شماره تماس (همراه)"
                required
                dir="ltr"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-[#D4AF37]/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-[#E8C56A] focus:ring-4 focus:ring-[#D4AF37]/20 transition-all"
              />

              <select
                name="field"
                required
                value={formData.field}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-black backdrop-blur-md border border-[#D4AF37]/30 rounded-2xl text-white focus:outline-none focus:border-[#E8C56A] focus:ring-4 focus:ring-[#D4AF37]/20 transition-all"
              >
                <option value="" disabled>حوزه مورد علاقه خود را انتخاب کنید</option>
                <option value="رنگ و لایت">رنگ و لایت حرفه‌ای</option>
                <option value="کراتین و احیا">کراتین و احیا مو</option>
                <option value="میکاپ و گریم">میکاپ و گریم عروس</option>
                <option value="ناخن">ناخن و طراحی حرفه‌ای</option>
                <option value="مربی‌گری">شروع دوره مربی‌گری</option>
                <option value="سالن‌داری">راه‌اندازی سالن زیبایی</option>
              </select>

              <select
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-black backdrop-blur-md border border-[#D4AF37]/30 rounded-2xl text-white focus:outline-none focus:border-[#E8C56A] focus:ring-4 focus:ring-[#D4AF37]/20 transition-all"
              >
                <option value="" disabled>زمان مناسب تماس</option>
                <option value="صبح">صبح (۹ تا ۱۲)</option>
                <option value="ظهر">ظهر تا عصر (۱۲ تا ۱۷)</option>
                <option value="شب">شب (۱۷ تا ۲۱)</option>
              </select>

              {/* دکمه اصلی - مستقیم میره به ثبت‌نام */}
              <Link href="/auth/register-info" className="block">
                <button
                  type="button"
                  className="w-full py-5 bg-gradient-to-r from-[#D4AF37] to-[#B8961E] text-black font-bold text-xl rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-[#D4AF37]/60 transform hover:scale-105 transition-all duration-300 mt-8"
                >
                  همین حالا رزرو کن — رایگان!
                </button>
              </Link>

              <button
                type="submit"
                className="w-full py-4 border-2 border-[#D4AF37] text-[#E8C56A] font-bold text-lg rounded-2xl hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
              >
                ارسال درخواست مشاوره
              </button>
            </form>

            <p className="text-center text-gray-400 text-sm mt-6 flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              تضمین پاسخگویی کمتر از ۳۰ دقیقه
            </p>
          </div>

          {/* بخش راست - مزایا و اعتمادسازی */}
          <div className="space-y-8">
            <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 border border-[#D4AF37]/30">
              <h3 className="text-2xl font-bold text-[#E8C56A] mb-6 flex items-center gap-3">
                <Star className="w-8 h-8" />
                چرا مشاوره با وی آکادمی؟
              </h3>
              <ul className="space-y-4 text-gray-200 text-lg">
                {[
                  "صحبت مستقیم با مستر مربیان بین‌المللی",
                  "مشاوره ۱۰۰٪ رایگان و بدون تعهد",
                  "برنامه‌ریزی دقیق مسیر شغلی شما",
                  "معرفی بهترین دوره متناسب با استعدادت",
                  "پاسخ به تمام سوالات مالی و فنی",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* راه‌های ارتباطی سریع */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://wa.me/989123456789"
                target="_blank"
                className="flex flex-col items-center justify-center gap-3 py-5 bg-green-600/20 backdrop-blur-md border border-green-500/40 rounded-2xl hover:bg-green-600/30 transition-all"
              >
                <MessageCircle className="w-8 h-8 text-green-400" />
                <div className="text-lg font-bold text-white">واتس‌اپ</div>
              </a>

              <a
                href="tel:+989123456789"
                className="flex flex-col items-center justify-center gap-3 py-5 bg-blue-600/20 backdrop-blur-md border border-blue-500/40 rounded-2xl hover:bg-blue-600/30 transition-all"
              >
                <Phone className="w-8 h-8 text-blue-400" />
                <div className="text-lg font-bold text-white">تماس مستقیم</div>
              </a>
            </div>

            <div className="text-center bg-gradient-to-r from-[#D4AF37]/10 to-[#B8961E]/10 backdrop-blur-md rounded-3xl p-8 border border-[#D4AF37]/50">
              <p className="text-3xl font-black text-[#E8C56A] mb-2">بیش از ۱۲,۰۰۰ نفر</p>
              <p className="text-gray-300 text-lg">تا امروز از مشاوره رایگان ما استفاده کردن</p>
            </div>
          </div>
        </div>

        {/* پایین صفحه قبلی */}
        <Link
          href="/academy"
          className="fixed bottom-8 left-8 flex items-center gap-3 px-6 py-3 bg-black/50 backdrop-blur-xl border border-[#D4AF37]/50 rounded-full text-white hover:bg-[#D4AF37]/20 transition-all z-50"
        >
          <ArrowLeft className="w-5 h-5" />
          بازگشت به آموزشگاه
        </Link>
      </div>
    </section>
  );
}