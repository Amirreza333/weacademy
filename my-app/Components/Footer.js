import Link from "next/link";
import { RiPhoneFill, RiWhatsappFill } from "react-icons/ri";
import { FaMapMarkedAlt, FaInstagram, FaTelegram } from "react-icons/fa";

export default function Footer() {
  const quickLinks = [
    { label: "خانه", href: "/" },
    { label: "درباره ما", href: "/Aboutus" },
    { label: "دوره‌های آموزشی", href: "/courses" },
    { label: "مشاوره رایگان", href: "/free-consult" },
    { label: "تماس با ما", href: "/Contact" },
  ];

  return (
    <footer className="relative mt-32 overflow-hidden">
      {/* افکت طلایی پشت فوتر */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-[#E8C56A]/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 bg-black/40 backdrop-blur-3xl border-t-4 border-[#E8C56A] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

            {/* ارتباط با ما — شماره‌ها قابل کلیک! */}
            <div className="text-center md:text-right">
              <h3 className="text-4xl font-black text-[#E8C56A] mb-8 tracking-tight">
                ارتباط با ما
              </h3>

              <div className="space-y-6">
                {/* آدرس */}
                <div className="flex items-center justify-center md:justify-end gap-4 group">
                  <FaMapMarkedAlt className="text-2xl text-[#E8C56A] group-hover:scale-110 transition" />
                  <p className="text-gray-200 text-lg">
                    البرز , کرج 
                  </p>
                </div>

                {/* تلفن ۱ — کلیک = زنگ زدن */}
                <a
                  href="tel:09353619549"
                  className="flex items-center justify-center md:justify-end gap-4 group text-white hover:text-[#E8C56A] transition"
                >
                  <RiPhoneFill className="text-3xl text-green-500 group-hover:scale-110 transition" />
                  <span className="text-xl font-bold">0935-361-9549</span>
                </a>

                {/* تلفن ۲ + واتساپ */}
                <a
                  href="https://wa.me/989353619549"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-end gap-4 text-white group hover:text-[#25D366] transition"
                >
                  <RiWhatsappFill className="text-3xl text-[#25D366] group-hover:scale-110 transition" />
                  <span className="text-xl font-bold">0935-361-9549 (واتساپ)</span>
                </a>
              </div>

              {/* شبکه‌های اجتماعی */}
              <div className="flex justify-center md:justify-end gap-6 mt-10">
                <a href="https://instagram.com/weacademy.ir" target="_blank" className="text-3xl hover:text-pink-500 text-white transition">
                  <FaInstagram />
                </a>
                <a href="https://t.me/weacademy" target="_blank" className="text-3xl hover:text-sky-400 text-white transition">
                  <FaTelegram />
                </a>
              </div>
            </div>

            {/* دسترسی سریع */}
            <div className="flex flex-col items-center">
              <h4 className="text-3xl font-bold text-[#E8C56A] mb-8">دسترسی سریع</h4>
              <nav className="space-y-4">
                {quickLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-gray-300 hover:text-[#E8C56A] text-lg font-medium transition-all duration-300 hover:translate-x-2 md:hover:translate-x-0 md:hover:-translate-x-2"
                  >
                    → {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* درباره وی آکادمی — متن جدید و حرفه‌ای */}
            <div className="text-center md:text-right">
              <h3 className="text-4xl font-black text-[#E8C56A] mb-8 tracking-tight">
                وی آکادمی
              </h3>
              <p className="text-gray-200 text-lg leading-8 font-light">
                ما فقط یک آموزشگاه نیستیم — ما <span className="text-[#E8C56A] font-bold">آینده‌ی شما</span> هستیم.
              </p>
              <p className="text-gray-300 mt-4 leading-relaxed">
                از سال ۱۳۹۸ تا امروز، بیش از <strong className="text-[#E8C56A]">۵۵۰,۰۰۰ هنرجو</strong> را به درآمدهای میلیونی رسانده‌ایم.
                <br />
                با <strong className="text-[#E8C56A]">مدارک بین‌المللی</strong>، <strong className="text-[#E8C56A]">اساتید حرفه‌ای</strong> و
                <strong className="text-[#E8C56A]"> پشتیبانی مادام‌العمر</strong>،
                <br />
                تضمین می‌کنیم شما هم به قله صنعت زیبایی برسید.
              </p>
            </div>
          </div>

          {/* خط طلایی جداکننده */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#E8C56A] to-transparent my-10"></div>

          {/* کپی‌رایت لوکس */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © ۱۴۰۴ وی آکادمی — تمام حقوق محفوظ است
            </p>
            <p className="text-gray-500 text-xs mt-2">
              با عشق و طلا ساخته شده توسط تیم oyek
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}