"use client";

import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyBestChoice from "@/components/WhyBestChoice";
import Testimonials from "@/components/Testimonials";
import FloatingHalfImage from "@/components/FloatingHalfImage";
import DomeGallery from "@/components/DomeGallery";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

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

      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10 text-center">
       
          <p className="text-gray-300 text-sm md:text-base "></p>
        </div>

        <DomeGallery
          images={galleryImages}
          fit={0.3}
          segments={10}
          grayscale={false}
          openedImageWidth="500px"
          openedImageHeight="650px"
          imageBorderRadius="20px"
          openedImageBorderRadius="32px"
          minRadius={500}
          maxRadius={1200}
          maxVerticalRotationDeg={50}
          dragSensitivity={15}
        />
      </section>
      



      <Testimonials />

      <Footer />
    </main>
  );
}
