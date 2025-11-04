"use client";

import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyBestChoice from "@/components/WhyBestChoice";
import Testimonials from "@/components/Testimonials";
import FloatingHalfImage from "@/components/FloatingHalfImage";
<<<<<<< HEAD
import DomeGallery1 from "@/components/DomeGallery";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
=======
import DomeGallery from "@/components/DomeGallery";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

>>>>>>> 7a75f4004c13246cbaaa9f95835350ca4a3cd0bd

const galleryImages = [
  { src: "/images/Amosingle.jpg", alt: "تصویر ۱" },
  { src: "/images/Couplepic2.jpg", alt: "تصویر ۲" },
  { src: "/images/Grouppic.jpg", alt: "تصویر ۳" },
  { src: "/images/Amosingle2.jpg", alt: "تصویر ۴" },
  { src: "/images/Grouppic5.jpg", alt: "تصویر ۵" },
  { src: "/images/Grouppic2.jpg", alt: "تصویر ۶" },
  { src: "/images/Khale2.jpg", alt: "تصویر ۷" },
  { src: "/images/Khale3.jpg", alt: "تصویر ۸" },
];

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Header />

      <FloatingHalfImage />

      <Hero />

      <About />
      <WhyBestChoice />

      <section className="relative w-full h-screen bg-gradient-to-b from-[#0a0a1f] to-[#0f0f2e] overflow-hidden">
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
            گالری سه‌بعدی
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            عکس‌ها رو بکشید و بزرگ کنید
          </p>
        </div>

        <DomeGallery1
          images={galleryImages}
<<<<<<< HEAD
          fit={0.4}
          segments={22}
=======
          fit={0.45}
          segments={28}
>>>>>>> 7a75f4004c13246cbaaa9f95835350ca4a3cd0bd
          grayscale={false}
          openedImageWidth="500px"
          openedImageHeight="650px"
          imageBorderRadius="20px"
          openedImageBorderRadius="32px"
          minRadius={500}
          maxRadius={1200}
          maxVerticalRotationDeg={80}
          dragSensitivity={15}
        />
      </section>

      <Testimonials />

      <Footer />
    </main>
  );
}
