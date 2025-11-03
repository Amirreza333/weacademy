"use client";
import { FaCheck } from "react-icons/fa";
import { FaChalkboardTeacher, FaUserGraduate,} from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import Stack from "../../public/Animation/Stack";
import ScrollReveal from "@/public/Animation/ScrollReveal";


export default function Aboutus() {
  const textCards = [
    {
      id: 1,
      title: "اساتید حرفه‌ای",
      desc: "سال‌ها تجربه در صنعت",
      
    },
    {
      id: 2,
      title: "گواهی معتبر",
      desc: "بین‌المللی و رسمی",
      
    },
    { id: 3, title: "۵۰۰۰+ هنرجو", desc: "موفق و ستاره",  },
    { id: 4, title: "WeAcademy", desc: "منتظر شماست", },
  ];

  const icons = {
    chalkboard: `<path d="M2 3h20v14h-4v2h4v4H2v-4h4v-2H2V3zm14 0h4v2h-4V3z" fill="#dbb91e"/>`,
    graduate: `<path d="M12 3l8 4v2l-8-2-8 2v-2l8-4zm0 6l8 4v2l-8-2-8 2v-2l8-4z" fill="#dbb91e"/>`,
    check: `<path d="M20 6l-9 9-4 4 1.5-1.5L12 15.5 19.5 8z" fill="#dbb91e"/>`,
    crown: `<path d="M12 3l-3 6h-3l-1.5-3-4.5 9h18l-4.5-9-1.5 3h-3l-3-6z" fill="#dbb91e"/><rect x="4" y="10" width="16" height="8" fill="#dbb91e"/>`,
  };

  const createSVG = (card) => {
    const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="260" height="320" viewBox="0 0 260 320">
  <defs>
    <linearGradient id="bg${card.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1a1a1a"/>
      <stop offset="100%" stop-color="#0f0f0f"/>
    </linearGradient>
  </defs>
  <rect width="260" height="320" rx="24" fill="url(#bg${card.id})"/>
  <rect width="260" height="320" rx="24" fill="none" stroke="#dbb91e" stroke-width="2" opacity="0.3"/>
  
  <g transform="translate(110, 70)">${icons[card.icon]}</g>

  <text x="130" y="160" font-family="Tahoma, Arial, sans-serif" font-size="19" font-weight="bold" fill="#dbb91e" text-anchor="middle">
    ${card.title}
  </text>

  <text x="130" y="195" font-family="Tahoma, Arial, sans-serif" font-size="15" fill="#ffffff" text-anchor="middle">
    <tspan x="130" dy="0">${card.desc.split(" ").slice(0, 3).join(" ")}</tspan>
    <tspan x="130" dy="22">${card.desc.split(" ").slice(3).join(" ")}</tspan>
  </text>

  <circle cx="130" cy="250" r="14" fill="#dbb91e"/>
  <circle cx="130" cy="250" r="7" fill="#000000"/>
</svg>`.trim();

 
    return `data:image/svg+xml;base64,${btoa(
      unescape(encodeURIComponent(svg))
    )}`;
  };

  return (
    <section className=" py-16 px-4 md:py-24" id="about">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#dbb91e] via-yellow-500 to-[#dbb91e] bg-clip-text text-transparent">
          درباره WeAcademy
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center items-center">
            <Stack
              randomRotation={true}
              sensitivity={120}
              sendToBackOnClick={true}
              cardDimensions={{ width: 260, height: 320 }}
              cardsData={textCards.map((card) => ({
                id: card.id,
                img: createSVG(card),
              }))}
            />
          </div>

          <div className="space-y-6 text-right">
   <div dir="ltr" className="space-y-6">
              <div className="flex items-center justify-end gap-3">
                <FaChalkboardTeacher className="text-[#dbb91e] text-xl" />
                <span className="text-lg text-[#ffffff] font-medium">
                  اساتید حرفه‌ای و با تجربه
                </span>
                <FaCircleInfo className="text-[#dbb91e] text-xl" />
              </div>

              <div className="flex items-center justify-end gap-3">
                <FaUserGraduate className="text-[#dbb91e] text-xl" />
                <span className="text-lg text-[#ffffff] font-medium">
                  گواهی معتبر بین‌المللی
                </span>
                <FaCircleInfo className="text-[#dbb91e] text-xl" />
              </div>

              <div className="flex items-center justify-end gap-3">
                <FaCheck className="text-[#dbb91e] text-xl" />
                <span className="text-lg text-[#ffffff] font-medium">
                  بیش از ۵۰۰۰ هنرجوی موفق
                </span>
                <FaCircleInfo className="text-[#dbb91e] text-xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-[#dbb91e] to-transparent w-full"></div>
        <div>   
        <ScrollReveal
              className="text-lg md:text-xl font-medium text-gray-300 mt-9 leading-loose  "
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
            >
              وی آکادمی مرکز مشاوره و آموزش جامعی است که به آرایشگران کمک می‌کند
              در فضای سالنی، فضای مجازی و فضای آموزشی قوی تر عمل کرده، بیشتر
              دیده شوند و در نهایت درآمد خود را افزایش دهند. اگر شما هم صاحب کسب
              و کار آرایشگری هستید و به دنبال رشد و توسعه ی شغل خود می باشید
              قطعا به حضور افرادی کاردان و آموزش های تخصصی نیاز دارید، تمامی این
              نیازها در بخش های مختلف وی آکادمی در بالاترین سطح ممکن پاسخگویی و
              برطرف خواهد شد و شما میتوانید با همراهی و مشاوره گرفتن از افراد
              متخصص و آموزش دیدن توسط مربیان کاردان در وی آکادمی به تمامی
              اهدافتان تحقق ببخشید
            </ScrollReveal>
          </div>
      </div>
    </section>
  );
}
