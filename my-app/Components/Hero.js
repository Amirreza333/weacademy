import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Users, Award, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-black pt-0 md:pt-0 md:justify-center">

      {/* بک‌گراند فقط دسکتاپ */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/images/Logomobile.webp"
          alt="WeAcademy"
          fill
          priority
          quality={80}
          sizes="100vw"
          className="object-cover object-center md:scale-105 lg:scale-110 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-black/60 lg:bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      {/* افکت طلایی فقط دسکتاپ */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div
          className="absolute top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2 
          w-[800px] h-[800px]
          bg-gradient-radial from-[#dbb91e]/20 via-[#dbb91e]/5 to-transparent 
          rounded-full blur-3xl animate-pulse"
        />
      </div>

      {/* محتوا */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full mt-0">

        {/* عنوان / عکس */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-tight">
          {/* فقط موبایل → عکس */}
          <div className="block md:hidden w-full max-w-xs mx-auto">
            <Image
              src="/images/Logomobile.webp"
              alt="WeAcademy"
              width={900}
              height={1125}
              priority
              quality={85}
              sizes="(max-width: 768px) 100vw, 900px"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />

            {/* ✅ فقط موبایل: امتیاز و تعداد هنرجو زیر عکس */}
            <div className="flex flex-wrap justify-center gap-2 mt-3 text-sm text-[#dbb91e]">
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full">
                <Star className="w-4 h-4 fill-current" /> ۵ از ۵
              </span>
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full">
                <Users className="w-4 h-4" /> بیش از ۵۰۰۰ هنرجو
              </span>
            </div>
          </div>

          {/* فقط دسکتاپ → متن */}
          <span
            className="hidden md:block text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] 
            bg-gradient-to-br from-[#E8C56A] via-[#D4AF37] to-[#B8961E] 
            bg-clip-text text-transparent drop-shadow-2xl"
          >
            WeAcademy
          </span>
        </h1>

        {/* دسکتاپ: امتیاز و تعداد هنرجو */}
        <div className="hidden md:flex flex-wrap justify-center gap-4 mb-6 text-sm text-[#dbb91e]">
          <span className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
            <Star className="w-5 h-5 fill-current" /> ۵ از ۵
          </span>
          <span className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
            <Users className="w-5 h-5" /> بیش از ۵۰۰۰ هنرجو
          </span>
        </div>

        <p className="text-2xl sm:text-4xl font-medium text-amber-300 mt-2 drop-shadow-lg">
          بزرگترین کوچ بانوان
        </p>

        <p className="text-lg sm:text-xl text-gray-200 mt-4 max-w-2xl mx-auto bg-black/40 md:bg-black/30 backdrop-blur-md px-8 py-5 rounded-3xl">
          تخصصی‌ترین مرکز مشاوره، کوچینگ و آموزش حرفه‌ای در صنعت زیبایی ایران
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8 w-full px-4 sm:px-0">
          <Link
            href="/auth/login"
            className="group bg-gradient-to-r from-[#dbb91e] to-amber-500 text-black font-bold
            text-base xs:text-lg sm:text-xl px-8 py-4 sm:py-5 rounded-full
            flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-amber-500/60
            transform hover:scale-105 transition-all duration-300 w-full sm:w-auto min-h-[56px]"
          >
            شروع تحول
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-3 transition-transform" />
          </Link>

          <Link
            href="/free-consult"
            className="border-2 border-[#dbb91e] text-[#dbb91e] px-8 py-4 sm:py-5 rounded-full
            text-base xs:text-lg sm:text-xl hover:bg-[#dbb91e] hover:text-black
            transition-all duration-300 font-medium flex items-center justify-center gap-3
            group w-full sm:w-auto min-h-[56px]"
          >
            مشاوره رایگان
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-10 text-gray-300">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full">
            <Award className="w-6 h-6 text-[#dbb91e]" />
            <span className="font-medium">گواهی معتبر بین‌المللی</span>
          </div>
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full">
            <Users className="w-6 h-6 text-[#dbb91e]" />
            <span className="font-medium">اساتید حرفه‌ای و باتجربه</span>
          </div>
        </div>
      </div>

      <div className="hidden md:block absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#dbb91e] to-transparent" />
    </section>
  );
}
