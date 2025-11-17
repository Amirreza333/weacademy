import Image from "next/image";
import { ArrowRight, Star, Users, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      
      {/* پس‌زمینه تمام‌صفحه - اصلاح شده برای موبایل */}
      <div className="absolute inset-0">
        <Image
          src="/images/Logo.webp"
          alt="مربی WeAcademy - تحول در صنعت زیبایی"
          fill
          className="object-cover object-center xs:object-contain xs:object-top sm:object-cover"
          quality={75}
          sizes="100vw"
          priority
        />
        {/* لایه تیره - یکنواخت در تمام دستگاه‌ها */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* افکت‌های نورانی طلایی (ریسپانسیو) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(100vw,1000px)] h-[min(100vw,1000px)] bg-gradient-radial from-[#dbb91e]/20 via-[#dbb91e]/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-16 right-8 w-[min(60vw,600px)] h-[min(60vw,600px)] bg-gradient-to-bl from-amber-600/20 to-transparent rounded-full blur-3xl xs:top-12 xs:right-4 sm:top-20 sm:right-20 md:top-24 md:right-24"></div>
        <div className="absolute bottom-16 left-8 w-[min(50vw,500px)] h-[min(50vw,500px)] bg-gradient-to-tr from-yellow-600/20 to-transparent rounded-full blur-3xl xs:bottom-12 xs:left-4 sm:bottom-20 sm:left-20 md:bottom-24 md:left-24"></div>
      </div>

      {/* محتوا */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center md:text-right z-10">
        <div className="w-full max-w-4xl mx-auto md:ml-auto">

          {/* رتبه و آمار */}
          <div className="flex flex-wrap justify-center md:justify-end gap-2 xs:gap-3 sm:gap-4 mb-5 xs:mb-6 text-xs xs:text-sm text-[#dbb91e]">
            <span className="flex items-center gap-1 backdrop-blur-sm bg-white/5 px-2 xs:px-2.5 sm:px-3 py-1 xs:py-1.5 rounded-full text-[10px] xs:text-xs sm:text-sm">
              <Star className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 fill-current" />
              ۵ از ۵
            </span>
            <span className="text-gray-400 hidden xs:inline">|</span>
            <span className="flex items-center gap-1 backdrop-blur-sm bg-white/5 px-2 xs:px-2.5 sm:px-3 py-1 xs:py-1.5 rounded-full text-[10px] xs:text-xs sm:text-sm">
              <Users className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4" />
              بیش از ۵۰۰۰ هنرجو
            </span>
          </div>

          {/* عنوان اصلی */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
            <span className="block text-white drop-shadow-2xl"></span>
            <span className="block text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl bg-gradient-to-br from-[#E8C56A] via-[#D4AF37] to-[#B8961E] bg-clip-text text-transparent drop-shadow-2xl">
              WeAcademy
            </span>
          </h1>

          <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-amber-300 mt-2 xs:mt-3 sm:mt-4 drop-shadow-lg">
            بزرگترین کوچ بانوان
          </p>

          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto md:mx-0 mt-3 xs:mt-4 sm:mt-6 backdrop-blur-sm bg-black/30 px-3 xs:px-4 sm:px-6 py-2.5 xs:py-3 sm:py-4 rounded-2xl text-[13px] xs:text-sm sm:text-base">
            تخصصی‌ترین مرکز مشاوره، کوچینگ و آموزش حرفه‌ای در صنعت زیبایی ایران
          </p>

          {/* دکمه‌ها */}
          <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 justify-center md:justify-start mt-6 xs:mt-8 sm:mt-10">
            <button className="group bg-gradient-to-r from-[#dbb91e] to-amber-500 text-black font-bold px-5 xs:px-6 sm:px-8 md:px-10 py-3 xs:py-4 sm:py-5 rounded-full text-sm xs:text-base sm:text-lg flex items-center justify-center gap-2 xs:gap-2.5 hover:shadow-2xl hover:shadow-amber-500/60 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              شروع تحول
              <ArrowRight className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition" />
            </button>
            <button className="border-2 border-[#dbb91e] text-[#dbb91e] px-5 xs:px-6 sm:px-8 md:px-10 py-3 xs:py-4 sm:py-5 rounded-full text-sm xs:text-base sm:text-lg hover:bg-[#dbb91e] hover:text-black transition-all duration-300 font-medium backdrop-blur-sm">
              مشاوره رایگان
            </button>
          </div>

          {/* ویژگی‌ها */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 xs:gap-4 sm:gap-6 lg:gap-8 pt-6 xs:pt-8 sm:pt-10 text-gray-300 text-xs xs:text-sm sm:text-base">
            <div className="flex items-center gap-1.5 xs:gap-2 backdrop-blur-sm bg-white/5 px-2.5 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-full text-[11px] xs:text-xs sm:text-sm">
              <Award className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-[#dbb91e]" />
              <span>گواهی معتبر</span>
            </div>
            <div className="flex items-center gap-1.5 xs:gap-2 backdrop-blur-sm bg-white/5 px-2.5 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-full text-[11px] xs:text-xs sm:text-sm">
              <Users className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-[#dbb91e]" />
              <span>اساتید حرفه‌ای</span>
            </div>
          </div>

          {/* برچسب دوره جدید */}
          <div className="absolute top-3 xs:top-4 left-1/2 -translate-x-1/2 md:top-6 md:left-auto md:right-4 lg:right-8 md:translate-x-0 bg-black/90 backdrop-blur-md border border-[#dbb91e] text-[#dbb91e] px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-full text-[10px] xs:text-xs sm:text-sm font-bold flex items-center gap-1.5 xs:gap-2 shadow-2xl animate-pulse">
            <div className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
            دوره جدید شروع شد!
          </div>
        </div>
      </div>

      {/* خط طلایی پایین */}
      <div className="absolute bottom-0 left-0 right-0 h-px xs:h-1 bg-gradient-to-r from-transparent via-[#dbb91e] to-transparent"></div>
    </section>
  );
}