"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ChevronLeft,
  Sparkles,
  Users,
  BookOpen,
  GraduationCap,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "ورک‌شاپ و سمینار",
      description: "دوره‌های فشرده و تخصصی با حضور بهترین اساتید بین‌المللی",
      icon: Sparkles,
      href: "/services/workshops",
      color: "from-yellow-600 to-amber-500",
    },
    {
      title: "آموزش و مشاوره مدرسین",
      description: "آموزش حرفه‌ای برای تبدیل شدن به مدرس حرفه‌ای آرایشگری",
      icon: GraduationCap,
      href: "/services/teacher-training",
      color: "from-amber-600 to-yellow-500",
    },
    {
      title: "آموزش تخصصی",
      description: "دوره‌های کامل آرایشگری از مبتدی تا پیشرفته با مدرک معتبر",
      icon: BookOpen,
      href: "/services/training",
      color: "from-orange-600 to-yellow-600",
    },
    {
      title: "جذب مدرس",
      description: "فرصت همکاری با آکادمی به عنوان مدرس حرفه‌ای",
      icon: Users,
      href: "/services/recruitment",
      color: "from-yellow-500 to-amber-700",
    },
  ];

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-gradient-to-b from-black via-[#0a0d16] to-[#0e121c] text-white"
    >
      {/* هدر طلایی بزرگ */}
      <div className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#dbb91e]/10 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#E8C56A] via-[#dbb91e] to-[#B8961E] mb-6">
              خدمات آکادمی وی
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              بهترین مسیر برای حرفه‌ای شدن در دنیای آرایشگری
            </p>
          </div>
        </div>
      </div>

      {/* کارت‌های خدمات */}
      <div className="container mx-auto px-6 pb-24 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group block transform transition-all duration-500 hover:scale-105"
            >
              <div className="relative bg-[#0e121c]/80 backdrop-blur-3xl rounded-3xl border border-[#dbb91e]/30 overflow-hidden shadow-2xl h-full">
                {/* گرادیانت طلایی بالا */}
                <div
                  className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${service.color}`}
                ></div>

                <div className="p-8 md:p-10 text-right">
                  <div className="flex items-center justify-end gap-4 mb-6">
                    <div className="p-4 bg-gradient-to-br from-[#dbb91e]/20 to-[#dbb91e]/10 rounded-2xl backdrop-blur-xl border border-[#dbb91e]/30">
                      <service.icon className="w-10 h-10 text-[#dbb91e]" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#dbb91e]">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 text-lg leading-8 mb-8">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-end gap-3 text-[#dbb91e] font-medium group-hover:gap-5 transition-all">
                    <span className="text-lg">مشاهده جزئیات</span>
                    <ChevronLeft className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>

                {/* افکت هاور طلایی */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#dbb91e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* بخش پایین — کال تو اکشن */}
      <div className="bg-[#0e121c] border-t border-[#dbb91e]/20 py-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-2xl md:text-3xl text-gray-300 mb-8">
            آماده‌اید حرفه‌ای شوید؟
          </p>
          <Link
            href="/Contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#dbb91e] to-[#b8961e] text-black font-bold text-xl rounded-full hover:shadow-2xl hover:shadow-[#dbb91e]/50 transition-all transform hover:scale-105"
          >
            همین حالا شروع کنید
            <Sparkles className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
}
