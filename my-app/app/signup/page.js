// app/signup/page.js  یا  app/signup/page.js

import Header from "@/components/Header";
import Link from "next/link";
import { ArrowLeft, Check, Phone, MessageCircle, User, Mail } from "lucide-react";

export const metadata = {
  title: "ثبت‌نام دوره آموزش مدرس آرایشگری | وی آکادمی",
  description: "همین حالا مشاوره رایگان بگیر و جای خودت رو در دوره جامع آموزش مدرس آرایشگری با درآمد ۲۰۰ میلیون در ماه رزرو کن!",
};

export default function SignupPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-br from-[#0a0d16] via-[#11151f] to-[#0e121c] text-white pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-5xl">

          {/* عنوان اصلی */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#dbb91e] via-[#E8C56A] to-[#f0d484] mb-4">
              ثبت‌نام دوره آموزش مدرس آرایشگری
            </h1>
            <p className="text-xl md:text-2xl text-amber-300">
              فقط ۱۰ نفر ظرفیت باقی مانده — همین الان جای خودت رو رزرو کن!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* فرم ثبت‌نام */}
            <div className="bg-white/5 backdrop-blur-xl border border-[#dbb91e]/30 rounded-3xl p-8 md:p-10 shadow-2xl">
              <h2 className="text-3xl font-bold text-[#E8C56A] mb-8 text-center">
                فرم مشاوره و ثبت‌نام
              </h2>

              <form className="space-y-6">
                <div>
                  <label className="flex items-center gap-2 text-lg mb-2">
                    <User className="w-5 h-5 text-[#dbb91e]" />
                    نام و نام خانوادگی
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 focus:border-[#dbb91e] focus:outline-none transition"
                    placeholder="مثال: سارا محمدی"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-lg mb-2">
                    <Phone className="w-5 h-5 text-[#dbb91e]" />
                    شماره تماس (واتساپ)
                  </label>
                  <input
                    type="tel"
                    required
                    dir="ltr"
                    className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 focus:border-[#dbb91e] focus:outline-none transition text-left"
                    placeholder="09121234567"
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

                <button
                  type="submit"
                  className="w-full py-6 text-black font-bold text-xl bg-gradient-to-r from-[#dbb91e] to-[#E8C56A] rounded-2xl hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/40 transform transition-all duration-300 flex items-center justify-center gap-3"
                >
                  ارسال درخواست + مشاوره رایگان
                  <MessageCircle className="w-7 h-7" />
                </button>

                <p className="text-center text-sm text-gray-400 mt-4">
                  کمتر از ۵ دقیقه با شما تماس می‌گیریم
                </p>
              </form>
            </div>

            {/* مزایای ثبت‌نام + قیمت ویژه */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[#dbb91e]/10 to-transparent border border-[#dbb91e]/40 rounded-3xl p-8 backdrop-blur-md">
                <h3 className="text-3xl font-bold text-[#E8C56A] mb-6">
                  با ثبت‌نام در این دوره شما دریافت می‌کنید:
                </h3>
                <ul className="space-y-4">
                  {[
                    "گواهینامه معتبر بین‌المللی",
                    "پشتیبانی ۶ ماهه برندسازی شخصی",
                    "دسترسی به ۵۰۰۰+ هنرجوی آماده",
                    "قابلیت تدریس در بهترین آموزشگاه‌ها",
                    "آموزش فروش دوره + اینستاگرام مارکتینگ",
                    "درآمد ماهانه ۸۰ تا ۲۰۰ میلیون تومان",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-4 text-lg">
                      <Check className="w-8 h-8 text-green-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-[#dbb91e]/50">
                <p className="text-2xl text-gray-300 mb-4">قیمت ویژه (فقط تا ۴۸ ساعت آینده):</p>
                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#dbb91e] to-[#E8C56A]">
                  ۳۸ میلیون تومان
                </div>
                <p className="text-xl text-amber-300 mt-3">پرداخت قسطی بدون ضامن</p>
              </div>

              <Link
                href="/teacher-training"
                className="flex items-center justify-center gap-2 text-[#dbb91e] hover:text-amber-300 transition"
              >
                <ArrowLeft className="w-5 h-5" />
                بازگشت به صفحه دوره
              </Link>
            </div>
          </div>

          {/* نوار اطمینان پایین */}
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-400">
              بیش از <span className="text-[#E8C56A] font-bold">۲۳۰ نفر</span> تا حالا مدرس موفق شدن
            </p>
          </div>
        </div>
      </main>
    </>
  );
}