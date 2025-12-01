// app/consultation/page.js  یا  app/free-consult/page.js

import Header from "@/components/Header";
import Image from "next/image";
import { Phone, User, Check, Clock, Star } from "lucide-react";

export const metadata = {
  title: "مشاوره رایگان | وی آکادمی",
  description: "۳۰ دقیقه مشاوره تخصصی رایگان با مشاور ارشد وی آکادمی",
};

export default function FreeConsultation() {
  return (
    <>
      <Header />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* بک‌گراند */}
        <Image
          src="/images/Logo.webp"
          alt="وی آکادمی - مشاوره رایگان"
          fill
          priority
          quality={95}
          className="object-cover object-center md:scale-110 max-md:scale-150 max-md:object-top"
        />

        {/* لایه‌های تیره */}
        <div className="absolute inset-0 bg-black/75 md:bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        {/* افکت طلایی */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-[#dbb91e]/30 via-[#dbb91e]/10 to-transparent rounded-full blur-3xl animate-pulse" />
        </div>

        {/* محتوا */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* نوار زنده */}
          

          {/* عنوان */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6">
            <span className="block bg-gradient-to-br from-[#E8C56A] via-[#D4AF37] to-[#B8961E] bg-clip-text text-transparent drop-shadow-2xl">
              مشاوره رایگان
            </span>
          </h1>

          <p className="text-3xl sm:text-5xl font-bold text-amber-300 mb-8">
            با مشاور ارشد وی آکادمی
          </p>

          {/* مزایا */}
          <div className="grid sm:grid-cols-2 text-white gap-6 max-w-4xl mx-auto mb-12">
            {[
              "کدام رشته آرایشگری الان پولسازتره؟",
              "چطور در ۶ ماه اول بالای ۱۰۰ میلیون دربیاریم؟",
              "بهترین دوره متناسب با بودجه و زمان شما",
              "معرفی به آموزشگاه‌های برتر پس از فارغ‌التحصیلی",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-[#dbb91e]/20"
              >
                <Check className="w-8 h-8 text-green-400 flex-shrink-0" />
                <span className="text-lg text-left">{item}</span>
              </div>
            ))}
          </div>

          {/* فرم */}
          <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 md:p-12 max-w-2xl mx-auto border border-[#dbb91e]/50 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#E8C56A] mb-10">
              همین الان وقت مشاوره بگیر
            </h2>

            <form className="space-y-7">
              <input
                type="text"
                placeholder="نام و نام خانوادگی"
                required
                className="w-full px-6 py-5 rounded-2xl bg-white/10 border border-white/20 focus:border-[#dbb91e] focus:outline-none text-lg transition text-white placeholder-gray-400"
              />
              <input
                type="tel"
                placeholder="شماره تماس"
                required
                dir="ltr"
                className="w-full px-6 py-5 rounded-2xl bg-white/10 border border-white/20 focus:border-[#dbb91e] focus:outline-none text-lg text-right text-white transition placeholder-gray-400"
              />

              <button
                type="submit"
                className="w-full py-6 text-black font-bold text-2xl bg-gradient-to-r from-[#dbb91e] to-[#E8C56A] rounded-2xl hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/60 transform transition-all duration-300 flex items-center justify-center gap-4 group"
              >
                <Phone className="w-8 h-8 group-hover:rotate-12 transition" />
                درخواست مشاوره فوری (رایگان)
              </button>
            </form>

            {/* اطلاعات پایین فرم */}
            <div className="mt-10 space-y-6 text-center">
              <p className="flex items-center justify-center gap-3 text-green-400 font-bold text-lg">
                <Clock className="w-6 h-6" />
                حداکثر تا ۵ دقیقه با شما تماس می‌گیریم
              </p>

              <p className="text-gray-300">
                بیش از <span className="text-[#E8C56A] font-bold">۴۸۰ نفر</span> فقط این ماه مشاوره گرفتن
              </p>

              {/* ستاره‌ها — کاملاً درست */}
              <div>
                <p className="text-5xl font-bold text-[#E8C56A] mb-3">۴.۹</p>
                <div className="flex justify-center gap-1">
                  {Array(5)
                    .fill(null)
                    .map((_, i) => (
                      <Star key={i} className="w-7 h-7 text-yellow-400 fill-current" />
                    ))}
                </div>
                <p className="text-gray-400 mt-2">از ۱۲۰۰ نظر واقعی</p>
              </div>
            </div>
          </div>
        </div>

        {/* خط طلایی پایین — بدون خط خالی و بدون کامنت اشتباه */}
        <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-transparent via-[#dbb91e] to-transparent" />
      </section>
    </>
  );
}