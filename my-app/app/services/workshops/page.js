import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "ورک‌شاپ و سمینار | وی آکادمی" };

const workshops = [
  {
    title: "ورک‌شاپ رنگ مو ۲۰۲۶ + بالیاژ روسی",
    date: "۱۵ آذر ۱۴۰۴",
    instructor: "ندا رضایی",
    price: "۴.۹۰۰.۰۰۰ تومان",
    badge: "جدید",
  },
  {
    title: "میکروبلیدینگ + شیدینگ لب (گواهینامه بین‌المللی)",
    date: "۱۰ دی ۱۴۰۴",
    instructor: "مهستی حسینی",
    price: "۸.۲۰۰.۰۰۰ تومان",
    badge: "پرفروش",
  },
  {
    title: "کات و استایل موی زنانه هالیوودی",
    date: "۵ بهمن ۱۴۰۴",
    instructor: "علیرضا کاظمی",
    price: "۳.۷۰۰.۰۰۰ تومان",
    badge: "حضوری",
  },
];

export default function Workshops() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-[#0a0d16] to-[#0e121c] text-white pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#dbb91e] via-[#E8C56A] to-[#dbb91e] mb-6">
              ورک‌شاپ‌ها و سمینارهای تخصصی
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              آموزش فشرده ۱ تا ۳ روزه کنار بهترین اساتید ایران + گواهینامه معتبر
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {workshops.map((ws, i) => (
              <div
                key={i}
                className="group relative bg-[#0e121c]/80 backdrop-blur-3xl rounded-3xl overflow-hidden border border-[#dbb91e]/30 hover:border-[#dbb91e] transition-all duration-500 hover:-translate-y-3"
              >
                <div className="relative h-64 bg-gray-800">
                  <Image
                    src="/workshop-placeholder.jpg"
                    alt={ws.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {ws.badge && (
                    <span className="absolute top-4 right-4 bg-gradient-to-r from-red-600 to-pink-600 px-4 py-2 rounded-full text-sm font-bold">
                      {ws.badge}
                    </span>
                  )}
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-bold text-[#E8C56A] mb-4 line-clamp-2">
                    {ws.title}
                  </h3>
                  <div className="space-y-2 text-gray-300 text-sm mb-6">
                    <p>مدرس: {ws.instructor}</p>
                    <p>تاریخ: {ws.date}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#dbb91e]">
                      {ws.price}
                    </span>
                    <Link
                      href="/contact"
                      className="px-6 py-3 bg-gradient-to-r from-[#dbb91e] to-[#B8961E] text-black font-bold rounded-xl hover:scale-105 transition"
                    >
                      رزرو صندلی
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
