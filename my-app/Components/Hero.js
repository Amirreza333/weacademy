import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Users, Award, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">

      {/* بک‌گراند + عکس لوگو (کاملاً اصلاح‌شده) */}
      <div className="absolute inset-0">
        <Image
          src="/images/Logo.webp"
          alt="WeAcademy - بزرگترین آکادمی زیبایی ایران"
          fill
          priority
          quality={95}
          className="object-cover object-center 
                     md:object-center 
                     max-md:object-[center_65%]   /* مهم: صورت‌ها دقیقاً وسط باشن */
                     md:scale-105 
                     max-md:scale-125 
                     px-4 sm:px-8 
                     pt-16 max-md:pt-24 
                     pb-20 sm:pb-0"
          sizes="100vw"
        />

        {/* لایه تیره */}
        <div className="absolute inset-0 bg-black/70 md:bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      {/* افکت طلایی درخشان */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#dbb91e]/20 via-[#dbb91e]/5 to-transparent rounded-full blur-3xl animate-pulse" />
      </div>

      {/* محتوا */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-[#dbb91e]">
          <span className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
            <Star className="w-5 h-5 fill-current" /> ۵ از ۵
          </span>
          <span className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
            <Users className="w-5 h-5" /> بیش از ۵۰۰۰ هنرجو
          </span>
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-tight">
          <span className="block text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] bg-gradient-to-br from-[#E8C56A] via-[#D4AF37] to-[#B8961E] bg-clip-text text-transparent drop-shadow-2xl">
            WeAcademy
          </span>
        </h1>

        <p className="text-2xl sm:text-4xl font-medium text-amber-300 mt-4 drop-shadow-lg">
          بزرگترین کوچ بانوان
        </p>

        <p className="text-lg sm:text-xl text-gray-200 mt-6 max-w-2xl mx-auto bg-black/40 backdrop-blur-md px-8 py-5 rounded-3xl">
          تخصصی‌ترین مرکز مشاوره، کوچینگ و آموزش حرفه‌ای در صنعت زیبایی ایران
        </p>

        {/* دکمه‌ها */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Link
            href="/auth/login"
            className="group bg-gradient-to-r from-[#dbb91e] to-amber-500 text-black font-bold text-lg sm:text-xl px-10 py-5 rounded-full flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-amber-500/60 transform hover:scale-105 transition-all duration-300"
          >
            شروع تحول
            <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition" />
          </Link>

          <Link
            href="/free-consult"
            className="border-2 border-[#dbb91e] text-[#dbb91e] px-10 py-5 rounded-full text-lg sm:text-xl hover:bg-[#dbb91e] hover:text-black transition-all duration-300 font-medium flex items-center justify-center gap-3 group"
          >
            مشاوره رایگان
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition" />
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-12 text-gray-300">
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

      {/* خط طلایی پایین */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#dbb91e] to-transparent" />
    </section>
  );
}