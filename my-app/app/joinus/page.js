// app/recruit/page.js

import Header from "@/components/Header";
import Link from "next/link";
import { ArrowLeft, Upload, FileText, Camera, Phone, Mail, User, CheckCircle } from "lucide-react";

export const metadata = {
  title: "ارسال رزومه و نمونه کار | جذب مدرس وی آکادمی",
  description: "مدرس حرفه‌ای هستید؟ رزومه و نمونه کارتون رو بفرستید، ما شما رو رایگان به بهترین آموزشگاه‌های ایران معرفی می‌کنیم!",
};

export default function RecruitPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-br from-[#0a0d16] via-[#11151f] to-[#0e121c] text-white pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-5xl">

          {/* عنوان اصلی */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#dbb91e] via-[#E8C56A] to-[#f0d484] mb-6">
              ارسال رزومه و نمونه کار
            </h1>
            <p className="text-2xl text-amber-300 max-w-3xl mx-auto">
              مدرس حرفه‌ای هستید؟ همین الان به شبکه مدرسین برتر وی آکادمی بپیوندید — <span className="font-bold">کاملاً رایگان!</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* فرم ارسال رزومه */}
            <div className="bg-white/5 backdrop-blur-xl border border-[#dbb91e]/30 rounded-3xl p-8 md:p-10 shadow-2xl">
              <h2 className="text-3xl font-bold text-[#E8C56A] mb-8 text-center flex items-center justify-center gap-3">
                <Upload className="w-9 h-9" />
                فرم ارسال اطلاعات
              </h2>

              <form className="space-y-7">
                <div>
                  <label className="flex items-center gap-2 text-lg mb-2">
                    <User className="w-5 h-5 text-[#dbb91e]" />
                    نام و نام خانوادگی
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 focus:border-[#dbb91e] focus:outline-none transition"
                    placeholder="مثال: ندا احمدی"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-lg mb-2">
                    <Phone className="w-5 h-5 text-[#dbb91e]" />
                    شماره تماس (واتساپ ترجیحاً)
                  </label>
                  <input
                    type="tel"
                    required
                    dir="ltr"
                    className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 focus:border-[#dbb91e] focus:outline-none transition text-left"
                    placeholder="09123456789"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-lg mb-2">
                    <Mail className="w-5 h-5 text-[#dbb91e]" />
                    ایمیل (اختیاری)
                  </label>
                  <input
                    type="email"
                    className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 focus:border-[#dbb91e] focus:outline-none transition"
                    placeholder="example@gmail.com"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-lg mb-2">
                    <FileText className="w-5 h-5 text-[#dbb91e]" />
                    لینک رزومه یا اینستاگرام (اجباری)
                  </label>
                  <input
                    type="url"
                    required
                    className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 focus:border-[#dbb91e] focus:outline-none transition"
                    placeholder="https://instagram.com/yourname"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-lg mb-2">
                    <Camera className="w-5 h-5 text-[#dbb91e]" />
                    لینک نمونه کارها (گالری، ویدیو، ریلز و ...)
                  </label>
                  <input
                    type="url"
                    className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 focus:border-[#dbb91e] focus:outline-none transition"
                    placeholder="لینک درایو، گوگل درایو، اینستا هایلایت و ..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-6 text-black font-bold text-xl bg-gradient-to-r from-[#dbb91e] to-[#E8C56A] rounded-2xl hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50 transform transition-all duration-300 flex items-center justify-center gap-4"
                >
                  <Upload className="w-7 h-7" />
                  ارسال رزومه و نمونه کار
                </button>

                <p className="text-center text-sm text-gray-400 mt-4">
                  حداکثر تا ۲۴ ساعت آینده با شما تماس می‌گیریم
                </p>
              </form>
            </div>

            {/* مزایای همکاری */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[#dbb91e]/10 to-transparent border border-[#dbb91e]/40 rounded-3xl p-8 backdrop-blur-md">
                <h3 className="text-3xl font-bold text-[#E8C56A] mb-6 text-center">
                  چرا با وی آکادمی همکاری کنید؟
                </h3>
                <ul className="space-y-5 text-lg">
                  {[
                    "معرفی رایگان به بهترین آموزشگاه‌های ایران",
                    "درآمد ماهانه ۸۰ تا ۲۰۰ میلیون تومان",
                    "بدون نیاز به تبلیغات و جذب شاگرد",
                    "پشتیبانی کامل در قرارداد و حقوق",
                    "شبکه‌سازی با مدرسین برتر کشور",
                    "اولویت در دوره‌های ویژه وی آکادمی",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <CheckCircle className="w-7 h-7 text-green-400 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-[#dbb91e]/50">
                <p className="text-xl text-gray-300 mb-3">مدرس فعال فعلی ما:</p>
                <p className="text-5xl font-bold text-[#E8C56A]">+۳۲۰ نفر</p>
                <p className="text-xl text-amber-300 mt-4">در ۲۶ استان ایران</p>
              </div>

              <Link
                href="/recruitment"
                className="flex items-center justify-center gap-2 text-[#dbb91e] hover:text-amber-300 transition mt-8"
              >
                <ArrowLeft className="w-5 h-5" />
                بازگشت به صفحه جذب مدرس
              </Link>
            </div>
          </div>

          {/* نوار اعتماد پایین */}
          <div className="mt-16 text-center bg-black/30 backdrop-blur-md rounded-3xl py-8 px-10 border border-[#dbb91e]/20">
            <p className="text-2xl">
              بیش از <span className="text-[#E8C56A] font-bold">۳۲۰ مدرس</span> تا الان از طریق وی آکادمی مشغول به کار شدن
            </p>
          </div>
        </div>
      </main>
    </>
  );
}