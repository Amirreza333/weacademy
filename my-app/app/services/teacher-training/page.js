import Header from "@/components/Header";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata = { title: "آموزش مدرس آرایشگری | وی آکادمی" };

export default function TeacherTraining() {
  const benefits = [
    "تدریس در بهترین آموزشگاه‌های ایران",
    "درآمد ماهانه ۸۰ تا ۲۰۰ میلیون تومان",
    "گواهینامه معتبر بین‌المللی",
    "پشتیبانی کامل در برندسازی شخصی",
    "دسترسی به دانش‌آموزان آماده",
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-[#0a0d16] to-[#0e121c] text-white pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <h1 className="text-5xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#dbb91e] to-[#E8C56A] mb-8">
            دوره جامع آموزش مدرس آرایشگری
          </h1>
          <p className="text-xl text-center text-gray-300 mb-16 max-w-4xl mx-auto">
            از آرایشگر حرفه‌ای به مدرس میلیونر — فقط در ۳ ماه
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/teacher.jpg"
                alt="آموزش مدرس"
                className="rounded-3xl shadow-2xl border-4 border-[#dbb91e]/40 w-full"
              />
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-[#E8C56A]">
                مزایای دوره:
              </h2>
              {benefits.map((item) => (
                <div key={item} className="flex items-center gap-4 text-lg">
                  <Check className="w-8 h-8 text-green-500 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}

              <div className="pt-8">
                <Link
                  href="/contact"
                  className="inline-block px-12 py-6 text-black font-bold text-xl bg-gradient-to-r from-[#dbb91e] to-[#B8961E] rounded-3xl hover:scale-110 transition-all shadow-2xl"
                >
                  مشاوره رایگان + ثبت‌نام
                </Link>
                <p className="mt-6 text-2xl text-center text-gray-400">
                  قیمت ویژه:{" "}
                  <span className="text-[#E8C56A] font-bold text-3xl">
                    ۳۸ میلیون تومان
                  </span>{" "}
                  (قسطی)
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
