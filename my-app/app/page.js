// app/page.js

import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyBestChoice from "@/components/WhyBestChoice";
import Testimonials from "@/components/Testimonials";
import FloatingHalfImage from "@/components/FloatingHalfImage";
import DomeGallery1 from "@/components/DomeGallery";

// ←←← فقط این یک خط اضافه شد
import ArticlesSection from "@/components/ArticlesSection";

// فقط عکس‌های واقعی
const galleryImages = [
  { src: "/images/Couplepic2.webp", alt: "بنیانگذاران WeAcademy" },
  { src: "/images/Grouppic5.webp", alt: "تیم حرفه‌ای WeAcademy" },
  { src: "/images/Amosingle.webp", alt: "هنرجوی موفق WeAcademy" },
  { src: "/images/Couplepic2.webp", alt: "بنیانگذاران WeAcademy" },
  { src: "/images/Grouppic5.webp", alt: "تیم حرفه‌ای WeAcademy" },
  { src: "/images/Amosingle.webp", alt: "هنرجوی موفق WeAcademy" },
  { src: "/images/Couplepic2.webp", alt: "بنیانگذاران WeAcademy" },
  { src: "/images/Grouppic5.webp", alt: "تیم حرفه‌ای WeAcademy" },
];

export default function Home() {
  return (
    <>
      {/* فقط محتوای اصلی صفحه — هدر و فوتر از layout.js میان */}
      <FloatingHalfImage />
      <Hero />
      <About />
      <WhyBestChoice />

      {/* گالری سه‌بعدی */}
      <section className="relative w-full h-screen overflow-hidden bg-black">
        <DomeGallery1
          images={galleryImages}
          fit={0.3}
          segments={10}
          grayscale={false}
          openedImageWidth="600px"
          openedImageHeight="750px"
          imageBorderRadius="20px"
          openedImageBorderRadius="32px"
          minRadius={500}
          maxRadius={1200}
          maxVerticalRotationDeg={50}
          dragSensitivity={15}
          enlargeTransitionMs={400}
        />
      </section>

      <Testimonials />

      {/* ←←← فقط این یک خط اضافه شد */}
      <ArticlesSection />
    </>
  );
}