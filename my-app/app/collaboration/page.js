import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "همکاری با WeAcademy | آرایشگر شو، مدرس شو، ستاره شو",
  description:
    "فرصت همکاری به عنوان مدرس، همکار سالن، یا بیوتی بلاگر در WeAcademy",
};

export default function CollaborationPage() {
  return (
    <div className="min-h-screen bg-[#0a0d16] py-16 px-4" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#dbb91e] to-[#b8961e]">
          همکاری با WeAcademy
        </h1>
        <p className="text-center text-gray-200 mb-16 max-w-3xl mx-auto text-lg leading-relaxed">
          اگر آرایشگر حرفه‌ای، مدرس با تجربه یا بیوتی کریتر هستی، جای تو
          اینجاست!
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* سمت راست: برای مخاطبین (همکاری، مدرس شدن، سالن‌دار شدن) */}
          <div className="order-2 lg:order-1 bg-[#0e121c]/80 backdrop-blur-xl rounded-2xl border border-[#dbb91e]/30 p-8">
            <h2 className="text-3xl font-bold text-[#dbb91e] mb-8">
              می‌خوای با ما همکاری کنی؟
            </h2>
            <div className="space-y-5">
              {[
                {
                  title: "مدرس آرایشگری (میکاپ، رنگ و لایت، کوتاهی)",
                  badge: "جذب فوری",
                },
                {
                  title: "همکاری با سالن‌های معتبر (شریک تجاری)",
                  badge: "ویژه",
                },
                { title: "بیوتی بلاگر و اینفلوئنسر", badge: "جدید" },
                { title: "مشاور فنی برندهای آرایشی", badge: null },
                { title: "همکار آموزش آنلاین (لایو و دوره)", badge: "دورکاری" },
              ].map((job) => (
                <div
                  key={job.title}
                  className="bg-black/40 rounded-xl p-6 border border-[#dbb91e]/20 hover:border-[#dbb91e]/70 hover:bg-[#dbb91e]/5 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex justify-between items-center">
                    {/* متن همیشه خاکستری روشن (gray-200) */}
                    <h3 className="font-bold text-xl text-gray-200">
                      {job.title}
                    </h3>
                    {job.badge && (
                      <span
                        className={`px-3 py-1.5 text-xs rounded-full font-bold ${
                          job.badge === "جذب فوری"
                            ? "bg-red-500/20 text-red-400 animate-pulse"
                            : job.badge === "جدید"
                            ? "bg-green-500/20 text-green-400"
                            : job.badge === "دورکاری"
                            ? "bg-purple-500/20 text-purple-400"
                            : "bg-amber-500/20 text-amber-400"
                        }`}
                      >
                        {job.badge}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/apply"
              className="mt-10 block text-center bg-gradient-to-r from-[#dbb91e] to-[#b8961e] text-black font-bold text-lg py-4 rounded-xl hover:shadow-2xl hover:shadow-[#dbb91e]/40 transition-all duration-300"
            >
              درخواست همکاری (رایگان)
            </Link>
          </div>

          {/* سمت چپ: مدارک و افتخارات WeAcademy */}
          <div className="order-1 lg:order-2 bg-[#0e121c]/80 backdrop-blur-xl rounded-2xl border border-[#dbb91e]/30 p-8">
            <h2 className="text-3xl font-bold text-[#dbb91e] mb-8">
              افتخارات و مدارک بین‌المللی
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                "/certs/loreal.png",
                "/certs/wella.png",
                "/certs/schwarzkopf.png",
                "/certs/iso-beauty.png",
                "/certs/global-beauty.png",
                "/certs/award-asia.png",
                "/certs/cidesco.png",
                "/certs/habia.png",
                "/certs/master-educator.png",
              ].map((src, i) => (
                <div
                  key={i}
                  className="bg-black/60 rounded-2xl p-6 border border-[#dbb91e]/20 hover:border-[#dbb91e]/70 transition-all duration-300 hover:scale-110 cursor-pointer group"
                >
                  <Image
                    src={src}
                    width={140}
                    height={140}
                    alt="گواهینامه بین‌المللی آرایشگری"
                    className="mx-auto rounded-lg shadow-xl group-hover:shadow-[#dbb91e]/60 transition-shadow"
                  />
                </div>
              ))}
            </div>
            <p className="text-center text-gray-200 mt-8 text-sm">
              همکاری با برندهای جهانی + مدارک معتبر بین‌المللی
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
