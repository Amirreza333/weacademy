"use client";

import Link from "next/link";
import { CheckCircle, Upload } from "lucide-react";
import { useState } from "react";

export default function ApplyPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#0a0d16] flex items-center justify-center py-16 px-4" dir="rtl">
        <div className="max-w-md w-full text-center">
          <div className="mb-10">
            <div className="w-28 h-28 mx-auto bg-gradient-to-br from-[#dbb91e]/20 to-[#b8961e]/20 rounded-full flex items-center justify-center animate-pulse">
              <CheckCircle className="w-16 h-16 text-[#dbb91e]" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#dbb91e] to-[#b8961e]">
            درخواست شما با موفقیت ارسال شد!
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            ممنون که به WeAcademy اعتماد کردی
          </p>

          <p className="text-lg text-gray-400 mb-10">
            تیم ما درخواستت رو بررسی می‌کنه و حداکثر ظرف <span className="text-[#dbb91e] font-bold">۴۸ ساعت آینده</span> با شما تماس می‌گیریم
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#dbb91e] to-[#b8961e] text-black font-bold rounded-xl hover:shadow-2xl hover:shadow-[#dbb91e]/40 transform hover:scale-105 transition-all duration-300"
          >
            بازگشت به صفحه اصلی
          </Link>

          <p className="text-sm text-gray-500 mt-10">
            بیش از <span className="text-[#dbb91e] font-bold">۲۳۰+</span> آرایشگر حرفه‌ای الان با ما همکاری می‌کنن
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0d16] py-16 px-4" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#dbb91e] to-[#b8961e]">
            درخواست همکاری با WeAcademy
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            اگر آرایشگر حرفه‌ای، مدرس با تجربه یا بیوتی کریتر هستی، همین الان درخواستت رو بفرست!
          </p>
        </div>

        <div className="bg-[#0e121c]/80 backdrop-blur-2xl rounded-3xl border border-[#dbb91e]/30 p-8 md:p-12 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* بقیه فرم همون قبلیه... */}
            {/* (همه فیلدها دقیقاً مثل قبل) */}
            {/* فقط برای خلاصه بودن، اینجا کوتاه کردم */}

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 font-medium mb-2">نام</label>
                <input type="text" required className="w-full px-5 py-4 bg-black/40 border border-[#dbb91e]/20 rounded-xl focus:border-[#dbb91e] focus:outline-none transition-all text-gray-200 placeholder-gray-500" placeholder="مثال: سارا" />
              </div>
              <div>
                <label className="block text-gray-300 font-medium mb-2">نام خانوادگی</label>
                <input type="text" required className="w-full px-5 py-4 bg-black/40 border border-[#dbb91e]/20 rounded-xl focus:border-[#dbb91e] focus:outline-none transition-all text-gray-200 placeholder-gray-500" placeholder="مثال: محمدی" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 font-medium mb-2">شماره موبایل</label>
                <input type="tel" required className="w-full px-5 py-4 bg-black/40 border border-[#dbb91e]/20 rounded-xl focus:border-[#dbb91e] focus:outline-none transition-all text-gray-200 placeholder-gray-500" placeholder="09123456789" />
              </div>
              <div>
                <label className="block text-gray-300 font-medium mb-2">آیدی اینستاگرام (اختیاری)</label>
                <input type="text" className="w-full px-5 py-4 bg-black/40 border border-[#dbb91e]/20 rounded-xl focus:border-[#dbb91e] focus:outline-none transition-all text-gray-200 placeholder-gray-500" placeholder="@sara_beauty" />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 font-medium mb-4">نوع همکاری مورد نظر</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["مدرس آرایشگری","همکاری با سالن","بیوتی بلاگر","مشاور برند","همکار آنلاین","سایر"].map((item) => (
                  <label key={item} className="flex items-center gap-3 p-4 bg-black/30 rounded-xl border border-[#dbb91e]/20 hover:border-[#dbb91e]/60 hover:bg-[#dbb91e]/5 transition-all cursor-pointer group">
                    <input type="radio" name="role" className="w-5 h-5 text-[#dbb91e]" required />
                    <span className="text-gray-200 group-hover:text-[#dbb91e] transition-colors">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-300 font-medium mb-2">توضیح مختصر درباره خودت و تجربه‌ات</label>
              <textarea rows={5} required className="w-full px-5 py-4 bg-black/40 border border-[#dbb91e]/20 rounded-xl focus:border-[#dbb91e] focus:outline-none transition-all text-gray-200 placeholder-gray-500 resize-none" placeholder="مثلاً: ۸ سال تجربه در میکاپ عروس، مدرس دوره‌های رنگ و لایت..." />
            </div>

            <div>
              <label className="block text-gray-300 font-medium mb-3">آپلود نمونه کار (اختیاری)</label>
              <div className="border-2 border-dashed border-[#dbb91e]/30 rounded-2xl p-8 text-center hover:border-[#dbb91e]/60 transition-all cursor-pointer group">
                <Upload className="w-12 h-12 mx-auto mb-4 text-[#dbb91e] group-hover:scale-110 transition-transform" />
                <p className="text-gray-400">کلیک کن یا فایل رو اینجا بکش</p>
                <p className="text-sm text-gray-500 mt-2">حداکثر ۵ فایل - JPG, PNG, MP4</p>
              </div>
            </div>

            <div className="text-center pt-6">
              <button
                type="submit"
                disabled={isLoading}
                className={`inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-[#dbb91e] to-[#b8961e] text-black font-bold text-lg rounded-xl transform transition-all duration-300 ${isLoading ? "opacity-80 cursor-not-allowed" : "hover:shadow-2xl hover:shadow-[#dbb91e]/40 hover:scale-105"}`}
              >
                {isLoading ? "در حال ارسال..." : "ارسال درخواست همکاری"} <CheckCircle className="w-6 h-6" />
              </button>
            </div>

            <p className="text-center text-gray-400 text-sm mt-8">
              پس از بررسی، حداکثر ظرف ۴۸ ساعت با شما تماس می‌گیریم
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}