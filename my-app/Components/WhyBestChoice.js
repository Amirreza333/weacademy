"use client";
import { MdSentimentVerySatisfied } from 'react-icons/md';
import {
  MdSecurity,
  MdSupportAgent,
  MdBuild,
  MdSpeed,
  MdUpdate,
  MdFavorite,
} from "react-icons/md";

export default function WhyBestChoice() {
  const features = [
    {
      icon: MdSecurity,
      title: "بهداشت تضمین‌شده",

      description:
        "هر ابزار ضدعفونی شده، هر صندلی تمیز — خیالت راحت باشه، سلامتیت اولویت ماست.",
    },
    {
      icon: MdSupportAgent,
      title: "پشتیبانی ۲۴/۷",
      description:
        "تیم پشتیبانی ما در تمام ساعات شبانه‌روز آماده پاسخگویی به سوالات و مشکلات شماست.",
    },
    {
      icon: MdBuild,
    title: 'طراحی با پیش‌نمایش زنده',

      description:
        "قبل از شروع، مدل نهایی رو روی صورت خودت ببین! با تکنولوژی AR، نتیجه رو تضمین می‌کنیم.",
    },
    {
      icon: MdFavorite,
      title: "زیبایی فقط برای تو",
      description:
        "هر مدل مو، رنگ و آرایش بر اساس فرم صورت، رنگ پوست و سلیقه تو طراحی می‌شه — نه کپی، بلکه شاهکار!",
    },
    {
      icon: MdUpdate,
      title: "به‌روزرسانی مداوم",
      description:
        "ما همیشه در حال به‌روزرسانی فناوری‌های خود هستیم تا بهترین و با کیفیت ترین محصول را به شما تحویل بدهیم.",
    },
    {
      icon: MdSentimentVerySatisfied,
      title: "رضایت ۱۰۰%",
      description:
        "هزاران مشتری راضی گواه کیفیت کار ما هستند. رضایت شما اولویت اول ماست.",
    },
  ];

  return (
    <section className="py-20 px-4 ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#dbb91e] mb-4">
            چرا ما بهترین انتخاب شما هستیم؟
          </h2>
          <p className="text-xl  text-gray-300 max-w-2xl mx-auto">
            با سال‌ها تجربه در صنعت، ما تیمی از متخصصان حرفه‌ای هستیم که به شما
            کمک می‌کنیم تا کسب‌وکارتان را به سطح بعدی برسانید.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#dbb91e] to-[#aa8558] rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="text-black text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>  
              <div className="mt-45 h-1 bg-gradient-to-r from-transparent via-[#dbb91e] to-transparent w-full"></div>

    </section>
    
  );
}
