"use client";
import Image from "next/image";
import Link from "next/link"; // فقط اینو اضافه کن
import { FaStar, FaAward, FaUsers, FaPlay, FaTrophy, FaGlobe, FaCertificate, FaHandshake } from "react-icons/fa";

export default function About() {
  return (
    <section
      className="relative min-h-screen py-32 px-4 overflow-hidden"
      id="about"
    >
      {/* پس‌زمینه طلایی درخشان */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1600px] h-[1600px] bg-gradient-conic from-[#E8C56A]/40 via-[#D4AF37]/20 to-transparent rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute top-10 right-10 w-[800px] h-[800px] bg-gradient-radial from-[#B8961E]/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-[700px] h-[700px] bg-gradient-radial from-[#E8C56A]/25 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* عنوان */}
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter">
            <span className="inline-block bg-gradient-to-r from-[#E8C56A] via-[#D4AF37] to-[#B8961E] bg-clip-text text-transparent drop-shadow-2xl animate-gradient">
              WeAcademy
            </span>
          </h2>
          <p className="mt-4 text-xl md:text-2xl text-gray-300 font-light tracking-wide">
            بزرگترین آکادمی تخصصی صنعت زیبایی ایران —{" "}
            <span className="text-[#E8C56A] font-medium">از ۱۳۹۸ تا امروز</span>
          </p>
        </div>

        {/* کارت مرکزی */}
        <div className="relative max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-3xl rounded-3xl p-12 md:p-16 border border-[#E8C56A]/40 shadow-2xl shadow-[#E8C56A]/20">
            
            {/* محتوا دقیقاً همون قبلیه — دست نزدم */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative group">
                <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-[#E8C56A]/50 to-transparent rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10"></div>
                
                <Image
                  src="/images/Couplepic.webp"
                  alt="بنیانگذاران WeAcademy"
                  width={800}
                  height={600}
                  className="w-full rounded-3xl shadow-2xl border-4 border-[#E8C56A]/50 transition-all duration-700 group-hover:border-[#E8C56A] group-hover:shadow-2xl group-hover:shadow-[#E8C56A]/50"
                  priority
                  quality={95}
                />

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-md shadow-2xl opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 cursor-pointer">
                    <FaPlay className="text-black text-2xl ml-1" />
                  </div>
                </div>
              </div>

              <div className="space-y-8 text-right">
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  <span className="bg-gradient-to-r from-[#E8C56A] to-[#D4AF37] bg-clip-text text-transparent">
                    بنیانگذاران WeAcademy
                  </span>
                </h3>

                <p className="text-gray-200 text-lg leading-9 font-light">
                  ما بیش از یک آکادمی هستیم — ما یک <span className="text-[#E8C56A] font-bold">انقلاب</span> در صنعت زیبایی هستیم. 
                  با بیش از <span className="text-[#E8C56A]">۵۵۰,۰۰۰ هنرجو</span>، 
                  <span className="text-[#E8C56A]">۱۰۰۰ سمینار تخصصی</span>، 
                  <span className="text-[#E8C56A]">۱۵ شعبه فعال</span> و 
                  <span className="text-[#E8C56A]">مدارک بین‌المللی</span>، 
                  آینده را برای آرایشگران حرفه‌ای می‌سازیم.
                </p>

                <div className="grid grid-cols-3 gap-6 mt-10">
                  {[
                    { icon: FaUsers, value: "۵۵۰K+", label: "هنرجو" },
                    { icon: FaAward, value: "۱۰۰۰+", label: "سمینار" },
                    { icon: FaTrophy, value: "۱۵", label: "شعبه" },
                    { icon: FaStar, value: "۴.۹", label: "امتیاز" },
                    { icon: FaGlobe, value: "۳", label: "کشور" },
                    { icon: FaCertificate, value: "ISO", label: "گواهی" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center group">
                      <stat.icon className="mx-auto text-4xl text-[#E8C56A] mb-3 group-hover:scale-110 transition-transform" />
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* بقیه محتوا بدون تغییر */}
            <div className="mt-16 grid md:grid-cols-2 gap-10">
              <div>
                <h4 className="text-2xl font-bold text-[#E8C56A] mb-6 flex items-center gap-3">
                  <FaHandshake className="text-3xl" />
                  دستاوردهای کلیدی
                </h4>
                <ul className="space-y-4 text-gray-200 text-lg font-light">
                  {[
                    "تنها آکادمی دارای مجوز رسمی از وزارت کار و سازمان فنی حرفه‌ای",
                    "برگزیده جشنواره کارآفرینی بانوان ۱۴۰۳",
                    "همکاری با ۵ برند بین‌المللی لوازم آرایشی",
                    "تأمین نیروی ۲۰۰ سالن برتر تهران",
                    "برگزاری ۳ دوره بین‌المللی در دبی، استانبول و باکو",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      ◆ <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative group">
                <Image
                  src="/images/Grouppic5.webp"
                  alt="تیم WeAcademy"
                  width={600}
                  height={400}
                  className="w-full rounded-2xl shadow-2xl border-4 border-[#E8C56A]/40 transition-all duration-500 group-hover:border-[#E8C56A] group-hover:shadow-[#E8C56A]/40"
                  quality={90}
                />
              </div>
            </div>

            {/* فقط این قسمت دکمه‌ها درست شد */}
            <div className="mt-16 flex flex-col sm:flex-row gap-6 justify-center">
              {/* دکمه ثبت‌نام — حالا واقعاً میره به صفحه ثبت‌نام */}
              <Link
                href="/courses"  // ← عوضش کن به هر صفحه‌ای که می‌خوای (مثلاً /auth/register یا /courses)
                className="group relative px-12 py-6 bg-gradient-to-r from-[#E8C56A] to-[#D4AF37] text-black font-bold rounded-full text-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#E8C56A]/60 inline-block text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-4">
                  ثبت‌نام در دوره جدید
                  <FaPlay className="text-lg group-hover:translate-x-2 transition-transform" />
                </span>
              </Link>

              {/* دکمه مشاوره رایگان — حالا واقعاً میره به صفحه مشاوره */}
              <Link
                href="/free-consult"  // یا هر صفحه‌ای که داری
                className="group px-12 py-6 border-2 border-[#E8C56A] text-[#E8C56A] font-bold rounded-full text-xl transition-all duration-500 hover:bg-[#E8C56A] hover:text-black hover:shadow-2xl hover:shadow-[#E8C56A]/50 inline-block text-center"
              >
                مشاوره رایگان
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* انیمیشن‌ها */}
      <style jsx>{`
        @keyframes spin-slow { 
          from { transform: translate(-50%, -50%) rotate(0deg); } 
          to { transform: translate(-50%, -50%) rotate(360deg); } 
        }
        @keyframes gradient { 
          0%, 100% { background-position: 0% 50%; } 
          50% { background-position: 100% 50%; } 
        }
        .animate-spin-slow { animation: spin-slow 40s linear infinite; }
        .animate-gradient { background-size: 200% 200%; animation: gradient 6s ease infinite; }
      `}</style>
    </section>
  );
}