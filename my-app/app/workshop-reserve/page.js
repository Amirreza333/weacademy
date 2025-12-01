// app/workshop-reserve/page.js

import Header from "@/components/Header";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Phone, Mail, MapPin, Clock, CheckCircle, Star } from "lucide-react";

export const metadata = {
  title: "رزرو ورک‌شاپ تخصصی | وی آکادمی",
  description: "صندلی خودت رو در بهترین ورک‌شاپ‌های آرایشگری ایران با اساتید بین‌المللی رزرو کن — ظرفیت محدود!",
};

export default function WorkshopReservePage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-br from-[#0a0d16] via-[#11151f] to-[#0e121c] text-white pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-5xl">

          {/* عنوان اصلی */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#dbb91e] via-[#E8C56A] to-[#dbb91e] mb-6">
              رزرو ورک‌شاپ تخصصی
            </h1>
            <p className="text-2xl text-amber-300 max-w-3xl mx-auto">
              فقط <span className="text-red-500 font-bold">۸ صندلی</span> باقی مانده — همین الان جای خودت رو رزرو کن!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* فرم رزرو */}
            <div className="bg-white/5 backdrop-blur-xl border border-[#dbb91e]/30 rounded-3xl p-8 md:p-10 shadow-2xl">
              <h2 className="text-3xl font-bold text-[#E8C56A] mb-8 text-center">
                فرم رزرو صندلی
              </h2>

              <form className="space-y-6">
                <div>
                  <label className="flex items-center gap-2 text-lg mb-2">
                    <User className="w-5 h-5 text-[#dbb91e]" />
                    نام و نام خانوادگی
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 focus:border-[#dbb91e] focus:outline-none transition"
                    placeholder="مثال: مریم احمدی"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-lg mb-2">
                    <Phone className="w-5 h-5 text-[#dbb91e]" />
                    شماره تماس (واتساپ)
                  </label>
                  <input
                    type="tel"
                    required
                    dir="ltr"
                    className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 focus:border-[#dbb91e] focus:outline-none transition text-left"
                    placeholder="09121234567"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-lg mb-2">
                    <Mail className="w-5 h-5 text-[#dbb91e]" />
                    ایمیل (اختیاری)
                  </label>
                  <input
                    type="email"
                    className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 focus:border-[#dbb91e] focus:outline-none transition"
                    placeholder="example@gmail.com"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-lg mb-2">
                    <Calendar className="w-5 h-5 text-[#dbb91e]" />
                    ورک‌شاپ مورد نظر
                  </label>
                  <select
                    required
                    className="w-full px-6 py-4 rounded-xl bg-black border border-white/20 focus:border-[#dbb91e] focus:outline-none transition"
                  >
                    <option value="">انتخاب کنید...</option>
                    <option>ورک‌شاپ رنگ مو ۲۰۲۶ + بالیاژ روسی - ۱۵ آذر</option>
                    <option>میکروبلیدینگ + شیدینگ لب - ۱۰ دی</option>
                    <option>کات و استایل موی زنانه هالیوودی - ۵ بهمن</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-6 text-black font-bold text-xl bg-gradient-to-r from-[#dbb91e] to-[#E8C56A] rounded-2xl hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50 transform transition-all duration-300 flex items-center justify-center gap-4"
                >
                  <CheckCircle className="w-7 h-7" />
                  رزرو قطعی صندلی + مشاوره رایگان
                </button>

                <div className="text-center text-sm text-gray-400 space-y-1 mt-4">
                  <p>ظرفیت محدود — اولویت با کسانی که زودتر رزرو کنند</p>
                  <p>کمتر از ۱۰ دقیقه با شما تماس می‌گیریم</p>
                </div>
              </form>
            </div>

            {/* مزایای شرکت در ورک‌شاپ */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[#dbb91e]/10 to-transparent border border-[#dbb91e]/40 rounded-3xl p-8 backdrop-blur-md">
                <h3 className="text-3xl font-bold text-[#E8C56A] mb-6 text-center">
                  با شرکت در ورک‌شاپ شما دریافت می‌کنید:
                </h3>
                <ul className="space-y-4 text-lg">
                  {[
                    "گواهینامه معتبر بین‌المللی (در صورت قبولی)",
                    "فایل آموزشی + فیلم ضبط شده کامل",
                    "پشتیبانی ۳ ماهه پس از ورک‌شاپ",
                    "شبکه‌سازی با اساتید و هم‌کلاسی‌ها",
                    "تخفیف ویژه دوره‌های جامع بعدی",
                    "جزوه و کیت آموزشی حرفه‌ای",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-4">
                      <Star className="w-7 h-7 text-yellow-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-[#dbb91e]/30">
                  <Clock className="w-10 h-10 text-[#dbb91e] mx-auto mb-3" />
                  <p className="text-lg">مدت زمان</p>
                  <p className="text-2xl font-bold text-[#E8C56A]">۱ تا ۳ روز</p>
                </div>
                <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-[#dbb91e]/30">
                  <MapPin className="w-10 h-10 text-[#dbb91e] mx-auto mb-3" />
                  <p className="text-lg">محل برگزاری</p>
                  <p className="text-2xl font-bold text-[#E8C56A]">تهران</p>
                </div>
              </div>

              <Link
                href="/workshops"
                className="flex items-center justify-center gap-2 text-[#dbb91e] hover:text-amber-300 transition"
              >
                <ArrowLeft className="w-5 h-5" />
                بازگشت به لیست ورک‌شاپ‌ها
              </Link>
            </div>
          </div>

          {/* نوار اعتماد پایین */}
          <div className="mt-16 text-center bg-black/30 backdrop-blur-md rounded-3xl py-10 px-8 border border-[#dbb91e]/30">
            <p className="text-2xl md:text-3xl">
              بیش از <span className="text-[#E8C56A] font-bold">۴۸۰۰ هنرجو</span> تا حالا در ورک‌شاپ‌های ما شرکت کردن
            </p>
            <div className="flex justify-center gap-2 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}