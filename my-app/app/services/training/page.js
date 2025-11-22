import Header from "@/components/Header";
import Link from "next/link";

export const metadata = { title: "دوره‌های آموزشی | وی آکادمی" };

const courses = [
  { name: "میکاپ عروس حرفه‌ای", duration: "۴ ماه", price: "۲۸ میلیون" },
  { name: "کوتاهی و رنگ مو", duration: "۶ ماه", price: "۴۲ میلیون" },
  { name: "میکروبلیدینگ + نانو", duration: "۳ ماه", price: "۳۲ میلیون" },
  { name: "پکیج کامل آرایشگری", duration: "۱۲ ماه", price: "۸۵ میلیون" },
];

export default function Training() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-[#0a0d16] to-[#0e121c] text-white pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#dbb91e] to-[#E8C56A] mb-6">
            دوره‌های آموزشی حرفه‌ای
          </h1>
          <p className="text-xl text-gray-300 mb-16">
            از صفر تا درآمد بالای ۱۵۰ میلیون در ماه
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {courses.map((course) => (
              <div
                key={course.name}
                className="bg-[#0e121c]/80 backdrop-blur-xl border border-[#dbb91e]/30 rounded-3xl p-8 hover:border-[#dbb91e] hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-[#E8C56A] mb-6">
                  {course.name}
                </h3>
                <p className="text-gray-300 mb-4">
                  مدت دوره: {course.duration}
                </p>
                <p className="text-3xl font-bold text-[#dbb91e] mb-8">
                  {course.price}
                </p>
                <Link
                  href="/contact"
                  className="block w-full py-4 bg-gradient-to-r from-[#dbb91e] to-[#B8961E] text-black font-bold rounded-2xl hover:scale-105 transition"
                >
                  ثبت‌نام و مشاوره
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
