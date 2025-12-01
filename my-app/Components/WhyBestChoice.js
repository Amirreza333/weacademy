"use client";
import {
  MdSecurity,
  MdSupportAgent,
  MdBuild,
  MdSpeed,
  MdUpdate,
  MdFavorite,
  MdSentimentVerySatisfied,
} from "react-icons/md";

export default function WhyBestChoice() {
  const features = [
    {
      icon: MdSecurity,
      title: "بهداشت تضمین‌شده",
      description: "هر ابزار ضدعفونی شده، هر صندلی تمیز — خیالت راحت باشه، سلامتیت اولویت ماست.",
    },
    {
      icon: MdSupportAgent,
      title: "پشتیبانی ۲۴/۷",
      description: "تیم پشتیبانی ما در تمام ساعات شبانه‌روز آماده پاسخگویی به سوالات و مشکلات شماست.",
    },
    {
      icon: MdBuild,
      title: "طراحی با پیش‌نمایش زنده",
      description: "قبل از شروع، مدل نهایی رو روی صورت خودت ببین! با تکنولوژی AR، نتیجه رو تضمین می‌کنیم.",
    },
    {
      icon: MdFavorite,
      title: "زیبایی فقط برای تو",
      description: "هر مدل مو، رنگ و آرایش بر اساس فرم صورت، رنگ پوست و سلیقه تو طراحی می‌شه — نه کپی، بلکه شاهکار!",
    },
    {
      icon: MdUpdate,
      title: "به‌روزرسانی مداوم",
      description: "ما همیشه در حال به‌روزرسانی فناوری‌های خود هستیم تا بهترین و با کیفیت‌ترین محصول را به شما تحویل بدهیم.",
    },
    {
      icon: MdSentimentVerySatisfied,
      title: "رضایت ۱۰۰%",
      description: "هزاران مشتری راضی گواه کیفیت کار ما هستند. رضایت شما اولویت اول ماست.",
    },
  ];

  return (
    <section
      className="py-24 md:py-32 px-4 relative overflow-hidden"
      // ← این خط رو کامل حذف کردم! حالا کاملاً شفافه
    >
      {/* پس‌زمینه طلایی درخشان — بیشتر کردم که بهتر دیده بشه */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-radial from-[#E8C56A]/30 via-[#D4AF37]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-10 w-[600px] h-[600px] bg-gradient-radial from-[#B8961E]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-gradient-radial from-[#E8C56A]/15 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* عنوان */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-[#E8C56A] via-[#D4AF37] to-[#B8961E] bg-clip-text text-transparent drop-shadow-lg">
              چرا WeAcademy بهترین انتخاب شماست؟
            </span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            با سال‌ها تجربه در صنعت زیبایی، ما تیمی از متخصصان حرفه‌ای هستیم که به شما کمک می‌کنیم تا کسب‌وکارتان را به سطح جهانی برسانید.
          </p>
        </div>

        {/* کارت‌های ویژگی — شفاف‌تر و درخشان‌تر */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-[#E8C56A]/30 shadow-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-[#E8C56A]/30 hover:border-[#E8C56A] hover:-translate-y-3"
            >
              {/* حلقه طلایی دور کارت */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#E8C56A] via-[#D4AF37] to-[#B8961E] opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-700"></div>

              {/* آیکون */}
              <div className="relative z-10 w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#E8C56A] to-[#D4AF37] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <feature.icon className="text-black text-3xl" />
              </div>

              {/* عنوان */}
              <h3 className="relative z-10 text-xl md:text-2xl font-bold text-white mb-4 text-center group-hover:text-[#E8C56A] transition-colors">
                {feature.title}
              </h3>

              {/* توضیحات */}
              <p className="relative z-10 text-gray-200 text-base md:text-lg leading-relaxed text-center font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* خط طلایی پایین */}
        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-[#E8C56A]/70 to-transparent"></div>
      </div>
    </section>
  );
}