// components/Testimonials.tsx
"use client";

import { useRouter } from 'next/navigation';
import { MdFormatQuote, MdStar } from "react-icons/md";

export default function Testimonials() {
  const router = useRouter();

  const handleBookNow = () => {
    router.push('/auth/login');
  };

  const testimonials = [
    {
      name: "سارا محمدی",
      role: "مشتری وفادار",
      comment: "اولین بار بود که قبل از رنگ مو، پیش‌نمایش روی صورتم دیدم! نتیجه دقیقاً همون چیزی بود که می‌خواستم. عاشق WeAcademy شدم!",
      rating: 5,
    },
    {
      name: "نازنین احمدی",
      role: "عروس خوشحال",
      comment: "آرایش عروسی من رو با دقت و عشق انجام دادن. همه گفتن بهترین عروس سال بودم! ممنون از تیم حرفه‌ای شما.",
      rating: 5,
    },
    {
      name: "مریم رضایی",
      role: "مشتری جدید",
      comment: "رزرو در ۱۰ ثانیه؟ واقعیه! دیگه هیچوقت جایی دیگه نمی‌رم. بهداشت، سرعت، زیبایی — همه چیز عالی.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 md:py-32 px-4 relative overflow-hidden">
      {/* پس‌زمینه طلایی درخشان */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] bg-gradient-radial from-[#E8C56A]/30 via-[#D4AF37]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* عنوان طلایی و لوکس */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-[#E8C56A] via-[#D4AF37] to-[#B8961E] bg-clip-text text-transparent drop-shadow-2xl">
              نظرات مشتریان ما
            </span>
          </h2>
          <p className="mt-6 text-xl md:text-2xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed">
            بیش از <span className="text-[#E8C56A] font-bold">۵۵۰,۰۰۰ نفر</span> با اطمینان به ما اعتماد کردن
          </p>
        </div>

        {/* کارت‌های نظرات — شیشه‌ای طلایی و درخشان */}
        <div className="grid lg:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-[#E8C56A]/30 shadow-2xl transition-all duration-700 hover:shadow-2xl hover:shadow-[#E8C56A]/30 hover:border-[#E8C56A] hover:-translate-y-4"
              style={{
                background: "rgba(30, 30, 30, 0.4)",
                boxShadow: "0 20px 40px rgba(216, 185, 30, 0.1)",
              }}
            >
              {/* حلقه طلایی دور کارت */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#E8C56A] via-[#D4AF37] to-[#B8961E] opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-700 -z-10"></div>

              {/* ستاره‌ها */}
              <div className="flex justify-center mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <MdStar key={i} className="text-3xl text-yellow-400 fill-current drop-shadow-md" />
                ))}
              </div>

              {/* نقل قول */}
              <div className="relative">
                <MdFormatQuote className="absolute -top-8 left-0 text-8xl text-[#E8C56A]/20 -z-10" />
                <p className="text-gray-200 text-lg leading-9 italic text-center px-6 relative z-10">
                  "{item.comment}"
                </p>
              </div>

              {/* پروفایل */}
              <div className="mt-10 flex items-center justify-center gap-5">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E8C56A] to-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold text-2xl shadow-xl ring-4 ring-[#E8C56A]/30">
                  {item.name[0]}
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-white text-lg">{item.name}</h4>
                  <p className="text-[#E8C56A] text-sm font-medium">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* دکمه CTA طلایی و درخشان */}
        <div className="text-center mt-20">
          <button
            onClick={handleBookNow}
            className="group relative px-12 py-6 bg-gradient-to-r from-[#E8C56A] to-[#D4AF37] text-black font-bold text-xl rounded-full overflow-hidden shadow-2xl hover:shadow-2xl hover:shadow-[#E8C56A]/70 transform hover:scale-110 transition-all duration-500"
          >
            <span className="relative z-10 flex items-center gap-4">
              همین حالا نوبت بگیر و بپیوند به خانواده WeAcademy
              <MdStar className="text-2xl group-hover:rotate-180 transition-transform duration-700" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#E8C56A] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>

        {/* خط طلایی پایین */}
        <div className="mt-20 h-1 bg-gradient-to-r from-transparent via-[#E8C56A]/80 to-transparent"></div>
      </div>
    </section>
  );
}