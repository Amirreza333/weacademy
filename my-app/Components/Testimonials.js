// Components/Testimonials.tsx
"use client";

import { useRouter } from 'next/navigation'; // اضافه شد
import { MdFormatQuote, MdStar } from "react-icons/md";

export default function Testimonials() {
  const router = useRouter(); // تعریف شد

  // دکمه: برو به صفحه لاگین (نه خروج!)
  const handleBookNow = () => {
    router.push('/auth/login');
  };

  const testimonials = [
    {
      name: "سارا محمدی",
      role: "مشتری وفادار",
      comment:
        "اولین بار بود که قبل از رنگ مو، پیش‌نمایش روی صورتم دیدم! نتیجه دقیقاً همون چیزی بود که می‌خواستم. عاشق WeAcademy شدم!",
      rating: 5,
      beforeAfter: true,
    },
    {
      name: "نازنین احمدی",
      role: "عروس خوشحال",
      comment:
        "آرایش عروسی من رو با دقت و عشق انجام دادن. همه گفتن بهترین عروس سال بودم! ممنون از تیم حرفه‌ای شما.",
      rating: 5,
      beforeAfter: false,
    },
    {
      name: "مریم رضایی",
      role: "مشتری جدید",
      comment:
        "رزرو در ۱۰ ثانیه؟ واقعیه! دیگه هیچوقت جایی دیگه نمی‌رم. بهداشت، سرعت، زیبایی — همه چیز عالی.",
      rating: 5,
      beforeAfter: false,
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#dbb91e] mb-4">
            به خانواده بزرگ{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-[#aa8558]">
              WeAcademy
            </span>{" "}
            بپیوندید
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            هزاران مشتری راضی که هر روز با لبخند سالن ما رو ترک می‌کنن. نوبت توئه!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex text-yellow-500 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <MdStar key={i} className="text-2xl" />
                ))}
              </div>

              <div className="relative">
                <MdFormatQuote className="absolute -top-6 -left-4 text-6xl text-purple-200 opacity-50" />
                <p className="text-gray-700 italic text-lg leading-relaxed pl-8 pr-4">
                  {item.comment}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#dbb91e] to-[#aa8558] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {item.name[0]}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={handleBookNow} // درست شد
            className="bg-gradient-to-r cursor-pointer from-[#dbb91e] to-[#aa8558] text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            همین حالا نوبت بگیر و بپیوند!
          </button>
        </div>
      </div>
      <div className="mt-12 h-1 bg-gradient-to-r from-transparent via-[#dbb91e] to-transparent w-full"></div>
    </section>
  );
}