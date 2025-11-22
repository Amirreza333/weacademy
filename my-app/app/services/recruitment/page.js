import Header from "@/components/Header";
import Link from "next/link";

export const metadata = { title: "جذب مدرس | وی آکادمی" };

export default function Recruitment() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b  text-white pt-32 pb-20">
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#dbb91e] to-[#E8C56A] mb-8">
            همکاری در جذب مدرس
          </h1>
          <p className="text-2xl text-gray-300 mb-12">
            اگر مدرس حرفه‌ای هستید، ما شما را به بهترین آموزشگاه‌های ایران معرفی
            می‌کنیم —{" "}
            <span className="text-[#dbb91e] font-bold">کاملاً رایگان!</span>
          </p>

          <div className="bg-[#0e121c]/90 backdrop-blur-3xl rounded-3xl p-12 border border-[#dbb91e]/40 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#E8C56A] mb-10">
              شرایط همکاری:
            </h2>
            <ul className="text-right space-y-6 text-xl mb-12">
              <li>حداقل ۳ سال سابقه کار حرفه‌ای</li>
              <li>نمونه کار قوی و به‌روز</li>
              <li>گواهینامه معتبر یا مدرک فنی حرفه‌ای</li>
              <li>تسلط کامل به آموزش</li>
            </ul>

            <Link
              href="/contact"
              className="inline-block px-16 py-6 text-black text-xl font-bold bg-gradient-to-r from-[#dbb91e] to-[#B8961E] rounded-3xl hover:scale-110 transition-all shadow-2xl"
            >
              ارسال رزومه و نمونه کار
            </Link>

            <p className="mt-10 text-2xl">
              درآمد ماهانه مدرسین ما:{" "}
              <span className="text-[#E8C56A] font-bold">
                ۸۰ تا ۲۰۰ میلیون تومان
              </span>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
