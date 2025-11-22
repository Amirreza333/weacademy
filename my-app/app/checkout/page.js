// app/checkout/page.js
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CheckCircle, CreditCard, Shield, Lock, PlayCircle } from "lucide-react";

export default function CheckoutPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setPaymentSuccess(true);

      setTimeout(() => {
        router.push("/Dashboard-client");
      }, 4000);
    }, 2500);
  };

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a0d16] via-[#0e121c] to-[#0a0d16] flex items-center justify-center p-4" dir="rtl">
        <div className="max-w-md w-full text-center">
          <div className="mb-10 animate-bounce">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-20 h-20 text-green-400" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#dbb91e] to-[#b8961e]">
            پرداخت با موفقیت انجام شد!
          </h1>

          <p className="text-xl text-gray-300 mb-4">دوره جامع رنگ و لایت حرفه‌ای با موفقیت خریداری شد</p>
          <p className="text-gray-400 mb-10">در حال انتقال به داشبورد شما...</p>

          <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#dbb91e] to-[#b8961e] rounded-full animate-pulse w-3/4"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0d16] via-[#0e121c] to-[#0a0d16] py-16 px-4" dir="rtl">
      <div className="max-w-5xl mx-auto">
        {/* هدر */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#dbb91e] to-[#b8961e]">
            نهایی کردن خرید
          </h1>
          <p className="text-xl text-gray-300">در یک قدمی تبدیل به یک آرایشگر حرفه‌ای شو</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* سمت چپ: جزئیات دوره */}
          <div className="order-2 lg:order-1">
            <div className="bg-[#0e121c]/80 backdrop-blur-2xl rounded-3xl border border-[#dbb91e]/30 p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-[#dbb91e] mb-6">دوره انتخاب شده</h2>

              <div className="flex gap-6">
                <div className="w-32 h-32 bg-gray-900 rounded-2xl flex-shrink-0 overflow-hidden border-2 border-[#dbb91e]/30">
                  <div className="w-full h-full bg-gradient-to-br from-[#dbb91e]/20 to-[#b8961e]/20 flex items-center justify-center">
                    <PlayCircle className="w-16 h-16 text-[#dbb91e]" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">دوره جامع رنگ و لایت حرفه‌ای</h3>
                  <p className="text-gray-400 mb-4">با تکنیک‌های ۲۰۲۵ + مدرک معتبر CIDESCO</p>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-black text-[#dbb91e]">۱۲,۹۰۰,۰۰۰</span>
                    <span className="text-gray-500 line-through">۱۶,۵۰۰,۰۰۰</span>
                  </div>
                  <span className="inline-block mt-3 px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-bold">
                    تخفیف ویژه محدود
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-[#dbb91e]/20">
                <div className="flex justify-between text-lg mb-4">
                  <span className="text-gray-300">قیمت اصلی:</span>
                  <span className="text-gray-500 line-through">۱۶,۵۰۰,۰۰۰ تومان</span>
                </div>
                <div className="flex justify-between text-xl font-bold">
                  <span className="text-white">پرداخت نهایی:</span>
                  <span className="text-[#dbb91e]">۱۲,۹۰۰,۰۰۰ تومان</span>
                </div>
              </div>
            </div>

            {/* مزایا */}
            <div className="mt-8 bg-[#0e121c]/60 backdrop-blur-xl rounded-3xl border border-[#dbb91e]/20 p-8">
              <h3 className="text-xl font-bold text-[#dbb91e] mb-6">با خرید این دوره دریافت می‌کنید:</h3>
              <ul className="space-y-4 text-gray-300">
                {[
                  "دسترسی مادام‌العمر به تمام ویدیوها",
                  "مدرک معتبر بین‌المللی CIDESCO",
                  "پشتیبانی ۲۴ ساعته در گروه VIP",
                  "آپدیت رایگان تکنیک‌های جدید",
                  "گواهی دیجیتال قابل اشتراک در اینستاگرام",
                  "جزوه PDF + چک‌لیست حرفه‌ای",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* سمت راست: فرم پرداخت */}
          <div className="order-1 lg:order-2">
            <div className="bg-[#0e121c]/90 backdrop-blur-3xl rounded-3xl border-2 border-[#dbb91e]/50 p-8 md:p-10 shadow-2xl sticky top-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-[#dbb91e]">اطلاعات پرداخت</h2>
                <div className="flex items-center gap-2 text-green-400">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm">پرداخت امن</span>
                </div>
              </div>

              <form onSubmit={handlePayment} className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">نام و نام خانوادگی</label>
                  <input
                    type="text"
                    required
                    className="w-full px-5 py-4 bg-black/40 border border-[#dbb91e]/30 rounded-xl focus:border-[#dbb91e] focus:outline-none text-gray-200"
                    placeholder="سارا محمدی"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">شماره موبایل</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-5 py-4 bg-black/40 border border-[#dbb91e]/30 rounded-xl focus:border-[#dbb91e] focus:outline-none text-gray-200"
                    placeholder="09123456789"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">ایمیل (اختیاری)</label>
                  <input
                    type="email"
                    className="w-full px-5 py-4 bg-black/40 border border-[#dbb91e]/30 rounded-xl focus:border-[#dbb91e] focus:outline-none text-gray-200"
                    placeholder="sara@example.com"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-6 mt-8 bg-gradient-to-r from-[#dbb91e] to-[#b8961e] text-black font-bold text-xl rounded-2xl flex items-center justify-center gap-4 hover:shadow-2xl hover:shadow-[#dbb91e]/50 transform hover:scale-[1.02] transition-all duration-300 ${
                    isLoading ? "opacity-80 cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading ? (
                    <>
                      <div className="w-8 h-8 border-4 border-black/30 border-t-white rounded-full animate-spin"></div>
                      در حال انتقال به درگاه...
                    </>
                  ) : (
                    <>
                      پرداخت امن ۱۲,۹۰۰,۰۰۰ تومان
                      <Lock className="w-6 h-6" />
                    </>
                  )}
                </button>

                {/* خطای قبلی درست شد */}
                <div className="text-center text-gray-500 text-sm mt-6 space-y-2">
                  <p className="flex items-center justify-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    پرداخت از طریق درگاه امن زرین‌پال
                  </p>
                  <p>امکان بازگشت وجه تا ۷ روز</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}