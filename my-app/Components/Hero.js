import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Users, Award, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* پس‌زمینه */}
      <div className="absolute inset-0">
        <Image
          src="/images/Logomobile.webp"
          alt="WeAcademy"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover block md:hidden object-bottom"
        />
        <Image
          src="/images/Logo.webp"
          alt="WeAcademy"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center hidden md:block scale-105 lg:scale-110"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent bg-black/5 md:bg-black/50 lg:bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent md:from-black/60" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        w-[500px] h-[500px] md:w-[900px] md:h-[900px]
                        bg-gradient-radial from-[#dbb91e]/25 via-[#dbb91e]/5 to-transparent 
                        rounded-full blur-3xl animate-pulse" />
      </div>

      {/* محتوا — تو موبایل همه چیز میاد پایین و فشرده‌تر میشه */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full 
                      pt-20 pb-10 md:pt-0 md:pb-0">

        <h1 className="text-6xl xs:text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] 
                       font-black leading-tight
                       bg-gradient-to-br from-[#E8C56A] via-[#D4AF37] to-[#B8961E] 
                       bg-clip-text text-transparent drop-shadow-2xl">
          WeAcademy
        </h1>

        <div className="flex flex-wrap justify-center gap-3 mt-6 text-sm text-[#dbb91e]">
          <span className="flex items-center gap-2 bg-white/10 backdrop-blur-xl px-4 py-2 rounded-full border border-white/20">
            <Star className="w-4 h-4 fill-current" /> ۵ از ۵
          </span>
          <span className="flex items-center gap-2 bg-white/10 backdrop-blur-xl px-4 py-2 rounded-full border border-white/20">
            <Users className="w-4 h-4" /> +۵۰۰۰ هنرجو
          </span>
        </div>

        {/* متن‌ها خیلی پایین میان — تقریباً می‌چسبن به دکمه‌ها */}
        <p className="text-2xl sm:text-3xl font-semibold text-amber-200 mt-20 md:mt-4 drop-shadow-lg">
          بزرگترین کوچ بانوان
        </p>

        <p className="text-sm sm:text-base text-gray-200 mt-3 md:mt-5 max-w-lg mx-auto px-4
                      md:bg-black/40 md:backdrop-blur-md md:px-8 md:py-5 md:rounded-3xl">
          تخصصی‌ترین مرکز مشاوره، کوچینگ و آموزش حرفه‌ای در صنعت زیبایی ایران
        </p>

        {/* دکمه‌ها — خیلی کوچیک و ظریف تو موبایل */}
        <div className="flex flex-col gap-3.5 justify-center mt-5 md:mt-8 max-w-xs mx-auto">
          <Link 
            href="/auth/login" 
            className="group bg-gradient-to-r from-[#dbb91e] to-amber-500 text-black 
                       font-bold text-sm px-6 py-3 rounded-full 
                       flex items-center justify-center gap-2.5 hover:scale-105 transition-all
                       md:text-lg md:px-10 md:py-5">
            شروع تحول
            <ArrowRight className="w-4.5 h-4.5 md:w-6 md:h-6 group-hover:translate-x-1.5 transition" />
          </Link>

          <Link 
            href="/free-consult" 
            className="border-2 border-[#dbb91e] text-[#dbb91e] 
                       text-sm px-6 py-3 rounded-full font-medium
                       hover:bg-[#dbb91e] hover:text-black transition-all
                       flex items-center justify-center gap-2.5
                       md:text-xl md:px-10 md:py-5">
            مشاوره رایگان
            <MessageCircle className="w-4.5 h-4.5 md:w-6 md:h-6" />
          </Link>
        </div>

        {/* باکس‌های پایین — خیلی کوچیک و نزدیک به دکمه‌ها */}
        <div className="flex flex-wrap justify-center gap-3 mt-8 text-gray-400 text-xs">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xl px-4 py-2 rounded-full border border-white/20">
            <Award className="w-4 h-4 text-[#dbb91e]" />
            <span>گواهی معتبر</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xl px-4 py-2 rounded-full border border-white/20">
            <Users className="w-4 h-4 text-[#dbb91e]" />
            <span>اساتید حرفه‌ای</span>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#dbb91e] to-transparent" />
    </section>
  );
}