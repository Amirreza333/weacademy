"use client";
import Image from "next/image";
import { FaStar, FaAward, FaUsers, FaPlay, FaTrophy, FaGlobe, FaCertificate, FaHandshake } from "react-icons/fa";

export default function About() {
  return (
    <section
      className="relative min-h-screen py-32 px-4 overflow-hidden"
      id="about"
      style={{ background: "radial-gradient(circle at center, #0f0f0f 0%, #000000 100%)" }}
    >
      {/* پس‌زمینه طلایی درخشان با انیمیشن */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] bg-gradient-conic from-[#D4AF37]/30 via-[#E8C56A]/10 to-transparent rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-gradient-radial from-[#B8961E]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-gradient-radial from-[#E8C56A]/15 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* عنوان لوکس */}
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter">
            <span className="inline-block bg-gradient-to-r from-[#E8C56A] via-[#D4AF37] to-[#B8961E] bg-clip-text text-transparent drop-shadow-2xl animate-gradient">
              WeAcademy
            </span>
          </h2>
          <p className="mt-4 text-xl md:text-2xl text-gray-400 font-light tracking-wide">
            بزرگترین آکادمی تخصصی صنعت زیبایی ایران — <span className="text-[#D4AF37]">از ۱۳۹۸ تا امروز</span>
          </p>
        </div>

        {/* کارت مرکزی — فقط بک‌گراند شفاف شد، همه چیز همون شکلی موند */}
        <div className="relative max-w-6xl mx-auto">
          <div className="bg-black/20 backdrop-blur-3xl rounded-3xl p-12 md:p-16 border border-[#D4AF37]/30 shadow-2xl shadow-[#D4AF37]/20">
            
            {/* همه محتوای قبلی بدون تغییر */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/40 to-transparent rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                <Image
                  src="/images/Couplepic.webp"
                  alt="بنیانگذاران WeAcademy"
                  width={800}
                  height={600}
                  className="w-full rounded-3xl shadow-xl border-2 border-[#D4AF37]/30 transition-all duration-700 group-hover:border-[#E8C56A] group-hover:shadow-2xl group-hover:shadow-[#D4AF37]/40"
                  priority
                  quality={95}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-20 h-20 bg-[#D4AF37]/90 rounded-full flex items-center justify-center backdrop-blur-sm">
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

                <p className="text-gray-300 text-lg leading-8 font-light">
                  ما بیش از یک آکادمی هستیم — ما یک <span className="text-[#D4AF37] font-medium">انقلاب</span> در صنعت زیبایی هستیم. 
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
                      <stat.icon className="mx-auto text-3xl text-[#D4AF37] mb-2 group-hover:text-[#E8C56A] transition-colors" />
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
                <ul className="space-y-4 text-gray-300 text-lg font-light">
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
                  className="w-full rounded-2xl shadow-xl border border-[#D4AF37]/20 transition-all duration-500 group-hover:border-[#E8C56A] group-hover:shadow-[#D4AF37]/30"
                  quality={90}
                />
              </div>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group relative px-10 py-5 bg-gradient-to-r from-[#D4AF37] to-[#B8961E] text-black font-bold rounded-full text-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4AF37]/50">
                <span className="relative z-10 flex items-center gap-3">
                  ثبت‌نام در دوره جدید
                  <FaPlay className="text-sm group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#E8C56A] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>

              <button className="group px-10 py-5 border-2 border-[#D4AF37] text-[#D4AF37] font-bold rounded-full text-lg transition-all duration-500 hover:bg-[#D4AF37] hover:text-black hover:shadow-xl hover:shadow-[#D4AF37]/40">
                مشاوره رایگان
              </button>
            </div>
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(360deg); } }
        @keyframes gradient { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        .animate-spin-slow { animation: spin-slow 35s linear infinite; }
        .animate-gradient { background-size: 200% 200%; animation: gradient 5s ease infinite; }
      `}</style>
    </section>
  );
}