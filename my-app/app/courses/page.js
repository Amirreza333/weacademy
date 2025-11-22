import Link from "next/link";
import { PlayCircle, Lock, CheckCircle } from "lucide-react";

export const metadata = {
  title: "دوره آموزش رنگ و لایت حرفه‌ای | WeAcademy",
  description: "بهترین دوره آموزش رنگ مو، لایت، آمبره و بالیاژ با مدرک معتبر بین‌المللی",
};

export default function CoursesPage() {
  const isPurchased = false; // بعداً از لاگین و دیتابیس می‌گیریم

  return (
    <div className="min-h-screen bg-[#0a0d16] py-16 px-4" dir="rtl">
      <div className="max-w-6xl mx-auto">
        {/* هدر دوره */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#dbb91e] to-[#b8961e]">
            دوره جامع رنگ و لایت حرفه‌ای
          </h1>
          <p className="text-2xl text-gray-300">با تکنیک‌های ۲۰۲۵ - مدرک معتبر بین‌المللی</p>
          <div className="flex justify-center gap-4 mt-6">
            <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-bold">۳۵۰+ دانشجو</span>
            <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-bold">مدرک CIDESCO</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* ویدیو اصلی */}
          <div className="lg:col-span-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {isPurchased ? (
                <iframe
                  className="w-full aspect-video"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  allowFullScreen
                  title="دوره رنگ و لایت"
                ></iframe>
              ) : (
                <div className="relative aspect-video bg-black/80 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <PlayCircle className="w-24 h-24 text-[#dbb91e] opacity-80" />
                  <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur px-6 py-3 rounded-xl border border-[#dbb91e]/50">
                    <p className="text-gray-300 text-sm">برای مشاهده ویدیو، دوره را خریداری کنید</p>
                  </div>
                </div>
              )}
            </div>

            {/* توضیحات دوره */}
            <div className="mt-10 bg-[#0e121c]/80 backdrop-blur-xl rounded-3xl border border-[#dbb91e]/30 p-8">
              <h2 className="text-3xl font-bold text-[#dbb91e] mb-6">آنچه یاد می‌گیرید:</h2>
              <ul className="space-y-4 text-gray-300">
                {[
                  "تکنیک‌های جدید آمبره، سامبره، بالیاژ ۲۰۲۵",
                  "ترکیب رنگ حرفه‌ای با برندهای لورآل و ولا",
                  "اصلاح ریشه و تناژگیری دقیق",
                  "کار با فویل، شابلون و تکنیک‌های دستی",
                  "رفع مشکلات رنگ (سبز شدن، نارنجی شدن و...)",
                  "دریافت مدرک معتبر بین‌المللی",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#dbb91e] mt-0.5 flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* کارت خرید */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 bg-gradient-to-b from-[#dbb91e]/10 to-[#b8961e]/5 rounded-3xl border border-[#dbb91e]/50 p-8 shadow-2xl">
              <div className="text-center">
                {isPurchased ? (
                  <div className="space-y-6">
                    <CheckCircle className="w-20 h-20 mx-auto text-green-500" />
                    <h3 className="text-2xl font-bold text-[#dbb91e]">شما این دوره را خریداری کرده‌اید!</h3>
                    <p className="text-gray-400">هر زمان می‌تونی ویدیوها رو ببینی</p>
                  </div>
                ) : (
                  <>
                    <p className="text-5xl font-bold text-[#dbb91e]">۱۲,۹۰۰,۰۰۰ تومان</p>
                    <p className="text-gray-400 line-through mt-2">۱۶,۵۰۰,۰۰۰ تومان</p>
                    <p className="text-green-400 font-bold mt-4">تخفیف ویژه محدود!</p>

                    <Link
                      href="/checkout"
                      className="mt-8 block w-full py-5 bg-gradient-to-r from-[#dbb91e] to-[#b8961e] text-black font-bold text-xl rounded-xl hover:shadow-2xl hover:shadow-[#dbb91e]/50 transform hover:scale-105 transition-all duration-300"
                    >
                      خرید دوره
                    </Link>

                    <div className="mt-6 space-y-3 text-sm text-gray-400">
                      <p>پرداخت امن با درگاه زرین‌پال</p>
                      <p>دسترسی مادام‌العمر</p>
                      <p>پشتیبانی ۲۴ ساعته</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}