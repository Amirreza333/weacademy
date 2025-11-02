import Image from "next/image";
import { FaChalkboardTeacher, FaUserGraduate, FaCheck } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";

export default function About() {
  return (
    <section className="bg-black  py-16 px-4 md:py-24" id="about">
      <div className="max-w-7xl  mx-auto">
        <h2 className="text-2xl text-[#dbb91e]  md:text-4xl font-bold text-center mb-16 leading-tight">
          درباره WeAcademy
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="order-2 md:order-1">
            <Image
              src="/Couple pic.JPG"
              alt="WeAcademy"
              width={1200}
              height={800}
              className="w-full max-w-3xl mx-auto h-auto rounded-3xl shadow-2xl"
              priority
            />
          </div>

          <div className="order-1 md:order-2 space-y-6 text-right">
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

            <p className="text-lg md:text-xl font-medium text-gray-300 mt-9 leading-loose">
              وی آکادمی مرکز مشاوره و آموزش جامعی است که به آرایشگران کمک می‌کند در فضای سالنی، فضای مجازی و فضای آموزشی قوی تر عمل کرده، بیشتر دیده شوند و در نهایت درآمد خود را افزایش دهند.

اگر شما هم صاحب کسب و کار آرایشگری هستید و به دنبال رشد و توسعه ی شغل خود می باشید قطعا به حضور افرادی کاردان و آموزش های تخصصی نیاز دارید، تمامی این نیازها در بخش های مختلف وی آکادمی در بالاترین سطح ممکن پاسخگویی و برطرف خواهد شد و شما میتوانید با همراهی و مشاوره گرفتن از افراد متخصص و آموزش دیدن توسط مربیان کاردان در وی آکادمی به تمامی اهدافتان تحقق ببخشید
            </p>
          </div>
        </div>

        <div className="mt-19 h-1 bg-gradient-to-r from-transparent via-[#dbb91e] to-transparent w-full"></div>
      </div>
    </section>
  );
}
