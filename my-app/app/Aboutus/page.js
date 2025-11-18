"use client";
import { FaCheck } from "react-icons/fa";
import { FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import Stack from "../../public/Animation/Stack";

export default function Aboutus() {
  const textCards = [
    {
      id: 1,
      title: "اساتید حرفه‌ای",
      desc: "سال‌ها تجربه در صنعت زیبایی",
      icon: "chalkboard",
    },
    {
      id: 2,
      title: "گواهی معتبر",
      desc: "بین‌المللی و رسمی",
      icon: "graduate",
    },
    {
      id: 3,
      title: "۵۰۰۰+ هنرجو",
      desc: "موفق و ستاره درخشان",
      icon: "check",
    },
    {
      id: 4,
      title: "WeAcademy",
      desc: "آینده زیبایی ایران",
      icon: "crown",
    },
  ];

  const icons = {
    chalkboard: `<path d="M2 3h20v14h-4v2h4v4H2v-4h4v-2H2V3zm14 0h4v2h-4V3z" fill="#E8C56A"/>`,
    graduate: `<path d="M12 3l8 4v2l-8-2-8 2v-2l8-4zm0 6l8 4v2l-8-2-8 2v-2l8-4z" fill="#E8C56A"/>`,
    check: `<path d="M20 6l-9 9-4 4 1.5-1.5L12 15.5 19.5 8z" fill="#E8C56A"/>`,
    crown: `<path d="M12 3l-3 6h-3l-1.5-3-4.5 9h18l-4.5-9-1.5 3h-3l-3-6z" fill="#E8C56A"/><rect x="4" y="10" width="16" height="8" fill="#E8C56A"/>`,
  };

  const createSVG = (card) => {
    const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="280" height="360" viewBox="0 0 280 360">
  <defs>
    <linearGradient id="bg${card.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1a1a1a"/>
      <stop offset="50%" stop-color="#111111"/>
      <stop offset="100%" stop-color="#0a0a0a"/>
    </linearGradient>
    <filter id="glow${card.id}">
      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- پس‌زمینه لوکس -->
  <rect width="280" height="360" rx="32" fill="url(#bg${card.id})"/>
  <rect width="280" height="360" rx="32" fill="none" stroke="#E8C56A" stroke-width="3" opacity="0.4"/>
  <rect width="280" height="360" rx="32" fill="none" stroke="#D4AF37" stroke-width="1" opacity="0.8"/>

  <!-- افکت طلایی درخشان -->
  <circle cx="140" cy="180" r="100" fill="none" stroke="#E8C56A" stroke-width="1" opacity="0.15"/>
  <circle cx="140" cy="180" r="80" fill="none" stroke="#D4AF37" stroke-width="0.5" opacity="0.25"/>

  <!-- آیکون با گلو -->
  <g transform="translate(140, 90)" filter="url(#glow${card.id})">
    ${icons[card.icon]}
  </g>

  <!-- عنوان طلایی درخشان -->
  <text x="140" y="195" font-family="Vazirmatn, Tahoma, sans-serif" font-size="26" font-weight="900" fill="#E8C56A" text-anchor="middle" letter-spacing="1">
    ${card.title}
  </text>

  <!-- زیرعنوان -->
  <text x="140" y="240" font-family="Vazirmatn, Tahoma, sans-serif" font-size="16" fill="#ffffff" text-anchor="middle" opacity="0.9">
    <tspan x="140" dy="0">${card.desc.split(" ").slice(0, 3).join(" ")}</tspan>
    <tspan x="140" dy="28">${card.desc.split(" ").slice(3).join(" ")}</tspan>
  </text>

  <!-- دایره طلایی پایین -->
  <circle cx="140" cy="300" r="20" fill="#E8C56A" opacity="0.9"/>
  <circle cx="140" cy="300" r="12" fill="#000000"/>
  <circle cx="140" cy="300" r="28" fill="none" stroke="#E8C56A" stroke-width="2" opacity="0.4"/>
</svg>`.trim();

    return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden " id="about">
      {/* پس‌زمینه طلایی ملایم و لوکس */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E8C56A]/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-black text-center mb-20 bg-gradient-to-r from-[#E8C56A] via-[#D4AF37] to-[#B8961E] bg-clip-text text-transparent tracking-tight">
          درباره WeAcademy
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* استک خفن — همون قبلی فقط بزرگ‌تر و طلایی‌تر */}
          <div className="flex justify-center items-center">
            <Stack
              randomRotation={true}
              sensitivity={130}
              sendToBackOnClick={true}
              cardDimensions={{ width: 280, height: 360 }}
              cardsData={textCards.map((card) => ({
                id: card.id,
                img: createSVG(card),
              }))}
            />
          </div>

          {/* متن راست — شیک‌تر و حرفه‌ای‌تر */}
          <div className="space-y-10 text-right">
            <div dir="ltr" className="space-y-8">
              <div className="flex items-center justify-end gap-5 group">
                <FaChalkboardTeacher className="text-4xl text-[#E8C56A] group-hover:scale-110 transition-transform duration-300" />
                <span className="text-2xl font-bold text-white">
                  اساتید حرفه‌ای و با تجربه
                </span>
                <FaCircleInfo className="text-3xl text-[#D4AF37] opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="flex items-center justify-end gap-5 group">
                <FaUserGraduate className="text-4xl text-[#E8C56A] group-hover:scale-110 transition-transform duration-300" />
                <span className="text-2xl font-bold text-white">
                  گواهی معتبر بین‌المللی
                </span>
                <FaCircleInfo className="text-3xl text-[#D4AF37] opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="flex items-center justify-end gap-5 group">
                <FaCheck className="text-4xl text-[#E8C56A] group-hover:scale-110 transition-transform duration-300" />
                <span className="text-2xl font-bold text-white">
                  بیش از ۵۰۰۰ هنرجوی موفق
                </span>
                <FaCircleInfo className="text-3xl text-[#D4AF37] opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </div>

        {/* خط طلایی و متن پایین */}
        <div className="mt-32 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

        <div className="mt-20 text-center max-w-5xl mx-auto">
          <p className="text-lg md:text-2xl leading-relaxed text-gray-300 font-light tracking-wide">
            وی آکادمی مرکز مشاوره و آموزش جامعی است که به آرایشگران کمک می‌کند در فضای سالنی، فضای مجازی و فضای آموزشی{" "}
            <span className="text-[#E8C56A] font-bold">قوی‌تر عمل کنند</span>، بیشتر دیده شوند و در نهایت{" "}
            <span className="text-[#D4AF37] font-bold">درآمد خود را چند برابر کنند</span>.
            <br /><br />
            اگر شما هم صاحب کسب و کار آرایشگری هستید و به دنبال رشد و توسعه هستید،
            <span className="text-[#E8C56A]"> تمامی نیازهایتان در WeAcademy پاسخ داده می‌شود</span>.
          </p>
        </div>

        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
      </div>
    </section>
  );
}