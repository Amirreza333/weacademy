// app/course-register/page.js

import Header from "@/components/Header";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Users, Award, Phone, User, Mail, CheckCircle } from "lucide-react";

export const metadata = {
  title: "ثبت‌نام دوره آموزشی | وی آکادمی",
  description: "همین الان در یکی از بهترین دوره‌های آرایشگری ایران ثبت‌نام کن و مسیر درآمد بالای ۱۵۰ میلیون در ماه رو شروع کن!",
};

export default function CourseRegisterPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-br from-[#0a0d16] via-[#11151f] to-[#0e121c] text-white pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-5xl">

          {/* عنوان اصلی */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#dbb91e] via-[#E8C56A] to-[#f0d484] mb-6">
              ثبت‌نام در دوره آموزشی
            </h1>
            <p className="text-2xl md:text-3xl text-amber-300 font-bold">
              فقط ۵ ظرفیت باقی مانده این ترم!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* فرم ثبت‌نام */}
            <div className="bg-white/5 backdrop-blur-xl border border-[#dbb91e]/30 rounded-3xl p-8 md:p-10 shadow-2xl">
              <h2 className="text-3xl font-bold text-[#E8C56A] mb-8 text-center">
                فرم مشاوره و ثبت‌نام فوری
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
                    placeholder="مثال: فاطمه رضایی"
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

                <div>
                  <label className="flex items-center gap-2 text-lg mb-2">
                    <Calendar className="w-5 h-5 text-[#dbb91e]" />
                    دوره مورد نظر
                  </label>
                  <select
                    required
                    className="w-full px-6 py-4 rounded-xl bg-black border border-white/20 focus:border-[#dbb91e] focus:outline-none transition"
                  >
                    <option value="">انتخاب کنید...</option>
                    <option>میکاپ عروس حرفه‌ای — ۲۸ میلیون (۴ ماه)</option>
                    <option>کوتاهی و رنگ مو — ۴۲ میلیون (۶ ماه)</option>
                    <option>میکروبلیدینگ + نانو — ۳۲ میلیون (۳ ماه)</option>
                    <option>پکیج کامل آرایشگری — ۸۵ میلیون (۱۲ ماه)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-6 text-black font-bold text-xl bg-gradient-to-r from-[#dbb91e] to-[#E8C56A] rounded-2xl hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50 transform transition-all duration-300 flex items-center justify-center gap-4"
                >
                  <CheckCircle className="w-7 h-7" />
                  ثبت‌نام فوری + مشاوره رایگان
                </button>

                <div className="text-center text-sm text-gray-400 space-y-1 mt-4">
                  <p>اولویت ثبت‌نام با کسانی که زودتر اقدام کنند</p>
                  <p>کمتر از ۵ دقیقه با شما تماس می‌گیریم</p>
                </div>
              </form>
            </div>

            {/* مزایای دوره‌ها */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[#dbb91e]/10 to-transparent border border-[#dbb91e]/40 rounded-3xl p-8 backdrop-blur-md">
                <h3 className="text-3xl font-bold text-[#E8C56A] mb-6 text-center">
                  با ثبت‌نام در دوره‌های ما شما دریافت می‌کنید:
                </h3>
                <ul className="space-y-4 text-lg">
                  {[
                    "گواهینامه معتبر فنی حرفه‌ای + بین‌المللی",
                    "پشتیبانی ۱۲ ماهه پس از دوره",
                    "آموزش برندسازی و اینستاگرام مارکتینگ",
                    "معرفی به آموزشگاه‌های برتر ایران",
                    "قسطی بدون ضامن تا ۱۲ ماه",
                    "تضمین درآمد بالای ۱۰۰ میلیون در سال اول",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-4">
                      <Award className="w-7 h-7 text-yellow-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-[#dbb91e]/30">
                  <Users className="w-12 h-12 text-[#dbb91e] mx-auto mb-3" />
                  <p className="text-4xl font-bold text-[#E8C56A]">+۵۰۰۰</p>
                  <p className="text-lg text-gray-300">هنرجوی موفق</p>
                </div>
                <div className="text-center bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-[#dbb91e]/30">
                  <Calendar className="w-12 h-12 text-[#dbb91e] mx-auto mb-3" />
                  <p className="text-4xl font-bold text-[#E8C56A]">۱۲ سال</p>
                  <p className="text-lg text-gray-300">تجربه آموزشی</p>
                </div>
              </div>

              <Link
                href="/courses"
                className="flex items-center justify-center gap-2 text-[#dbb91e] hover:text-amber-300 transition"
              >
                <ArrowLeft className="w-5 h-5" />
                بازگشت به لیست دوره‌ها
              </Link>
            </div>
          </div>

          {/* نوار اعتماد پایین */}
          <div className="mt-16 text-center bg-black/30 backdrop-blur-md rounded-3xl py-10 px-8 border border-[#dbb91e]/30">
            <p className="text-2xl md:text-3xl">
              بیش از <span className="text-[#E8C56A] font-bold">۵۲۰۰ هنرجو</span> تا حالا از دوره‌های ما فارغ‌التحصیل شدن
            </p>
            <p className="text-xl text-amber-300 mt-4">
              و الان ماهانه بالای <span className="font-bold">۱۰۰ میلیون</span> درآمد دارن
            </p>
          </div>
        </div>
      </main>
    </>
  );
}