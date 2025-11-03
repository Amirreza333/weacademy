import Image from "next/image";
import { ArrowRight, Star, Users, Award } from "lucide-react"; 

export default function Hero() {
  return (
    <section className="relative  text-[#dbb91e] overflow-hidden">
     
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          
          <div className="text-center md:text-right space-y-6">
            <div className="flex justify-center md:justify-end gap-2 mb-4">
              <span className="flex items-center gap-1 text-sm">
                <Star className="w-4 h-4 fill-current" />
                5 از 5
              </span>
              <span className="text-gray-400">|</span>
              <span className="flex items-center gap-1 text-sm">
                <Users className="w-4 h-4" />
                بیش از ۵۰۰۰ هنرجو
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              WeAcademy
              <span className="block text-3xl md:text-5xl text-white mt-2">
                مرکز تخصصی زیبایی
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto md:mx-0">
              تخصصی‌ترین مرکز مشاوره، کوچینگ و آموزش حرفه‌ای در صنعت زیبایی ایران
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="group cursor-pointer bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:shadow-xl transform hover:scale-105 transition-all">
                شروع یادگیری
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>
              <button className="border border-[#dbb91e] text-[#dbb91e] px-8 py-4 cursor-pointer rounded-full hover:bg-[#dbb91e] hover:text-black transition font-medium">
                مشاوره رایگان
              </button>
            </div>

            <div className="flex justify-center md:justify-start gap-6 pt-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#dbb91e]" />
                <span>گواهی معتبر</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#dbb91e]" />
                <span>اساتید حرفه‌ای</span>
              </div>
            </div>
          </div>

          
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/logo.JPG" 
                alt="اساتید WeAcademy"
                width={600}
                height={800}
                className="rounded-2xl shadow-2xl border-4 border-[#dbb91e]/20 mx-auto"
                priority
              />
            </div>

           
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-full opacity-20 blur-xl"></div>

            
            <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-sm border border-[#dbb91e] text-[#dbb91e] px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              دوره جدید شروع شد!
            </div>
          </div>

        </div>
      </div>

      
      <div className="h-1 bg-gradient-to-r from-transparent via-[#dbb91e] to-transparent"></div>
    </section>
  );
}