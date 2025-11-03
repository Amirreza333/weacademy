import Link from "next/link";
import { RiPhoneFill } from "react-icons/ri";
import { FaMapMarkedAlt } from "react-icons/fa";

export default function Footer() {
  const quickLinks = [
    { label: "خانه", href: "/" },
    { label: "درباره ما", href: "/about" },
    { label: "تماس با ما", href: "/contact" },
  ];

  return (
    <footer className=" bg-gray-900/60 backdrop-blur-3xl text-amber-50 py-12 px-4 rounded-2xl border-2 border-[#dbb91e] ">
      <div className="container mx-auto max-w-6xl border-">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* === بخش ارتباط با ما === */}
          <div className="flex flex-col space-y-4 text-center md:text-right">
            <h3 className="text-3xl font-bold py-2 text-[#dbb91e]">ارتباط با ما</h3>
            <div className="flex gap-2  ">
              <p className=" text-2xl ">
                <FaMapMarkedAlt />
              </p>{" "}
              <p className="text-white flex ">
                تهران، لوروم یپسوم متن ساختگی برای تولید محتوا به صورت تستی{" "}
              </p>
            </div>

            <div className=" flex">
              {" "}
              <p className=" text-2xl  pb-[20] ">
                {" "}
                <RiPhoneFill />
              </p>{" "}
              <p className="text-xl font-medium text-white gap-2 px-4   ">
                {" "}
                09353619549{" "}
              </p>
            </div>

            <div className="flex">
              <p className=" text-2xl  pb-[20] ">
                {" "}
                <RiPhoneFill />
              </p>{" "}
              <p className="text-xl font-medium text-white gap-2 px-4   ">
                {" "}
                09353619549{" "}
              </p>
            </div>
          </div>

          {/* === دسترسی سریع === */}
          <div className="flex flex-col items-center md:items-start space-y-4 px-[100]">
            <h4 className="text-2xl font-semibold text-[#dbb91e] py-2">
              دسترسی سریع
            </h4>
            <nav className="space-y-2 px-[20] md:px-[31] text-center">
              {quickLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-white hover:text-black hover:bg-gray-300/60 px-4 py-2 rounded-lg transition-all duration-200 text-lg"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* === معرفی وی آکادمی === */}
          <div className="space-y-4 text-center md:text-right">
            <h3 className="text-3xl font-bold text-[#dbb91e] pb-2 ">وی آکادمی</h3>
            <p className="text-white leading-relaxed">
              وی آکادمی یک مرکز مشاوره و آموزش تخصصی برای آرایشگران است که به
              آن‌ها کمک می‌کند در سالن، فضای مجازی و آموزش بهتر عمل کنند، بیشتر
              دیده شوند و درآمدشان را افزایش دهند.
            </p>
            <p className="text-white">
              اگر صاحب کسب‌وکار آرایشگری هستید و می‌خواهید رشد کنید، وی آکادمی
              با مشاوران و مربیان حرفه‌ای، تمام نیازهای شما را در بالاترین سطح
              پوشش می‌دهد تا به اهدافتان برسید.
            </p>
          </div>
        </div>

        {/* خط جداکننده */}
        <hr className="border-[#dbb91e] mb-6" />

        {/* کپی‌رایت */}
        <div className="text-center text-white text-sm">
          <p>طراحی شده توسط نرم‌افزار oyek</p>
        </div>
      </div>
    </footer>
  );
}
