// app/page.js
'use client'; // این خط خیلی مهمه!

import { useState, useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyBestChoice from "@/components/WhyBestChoice";
import Testimonials from "@/components/Testimonials";
import FloatingHalfImage from "@/components/FloatingHalfImage";
import DomeGallery1 from "@/components/DomeGallery";
import Image from "next/image";
import Link from "next/link";

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
  const [articles, setArticles] = useState([]);

  // فقط تو مرورگر اجرا میشه → localStorage در دسترسه
  useEffect(() => {
    const loadArticles = () => {
      const saved = localStorage.getItem('weacademy_articles');
      if (saved) {
        setArticles(JSON.parse(saved));
      }
    };

    loadArticles(); // اول لود کن

    const handleStorageChange = (event) => {
      if (event.key === 'weacademy_articles') {
        loadArticles();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const latestArticles = articles
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 6);

  return (
    <>
      {/* فقط محتوای اصلی صفحه — هدر و فوتر از layout.js میان */}
      <FloatingHalfImage />
      <Hero />
      <About />
      <WhyBestChoice />

      <section className="relative w-full h-screen overflow-hidden">
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

      {/* بخش مقالات — حالا واقعاً کار می‌کنه! */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-radial from-[#E8C56A]/30 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black">
              <span className="bg-gradient-to-r from-[#E8C56A] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-xl">
                تازه‌ترین مقالات
              </span>
            </h2>
            <p className="mt-4 text-xl text-gray-400 font-light">
              نکات طلایی از دنیای زیبایی و آرایش حرفه‌ای
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.length > 0 ? (
              latestArticles.map((article) => (
                <Link key={article.id} href={`/articles/${article.slug}`}>
                  <article className="group relative bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-[#E8C56A]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#E8C56A]/20 hover:-translate-y-3">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg md:text-xl font-bold text-[#E8C56A] line-clamp-2 group-hover:text-yellow-400 transition-colors">
                        {article.title}
                      </h3>
                      <p className="mt-3 text-gray-400 text-sm line-clamp-2 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="mt-5 flex items-center justify-between text-xs text-gray-500">
                        <span>{article.author}</span>
                        <span className="text-[#E8C56A] font-medium group-hover:translate-x-1 transition-transform">
                          بیشتر
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <p className="text-2xl text-gray-500">هنوز مقاله‌ای منتشر نشده</p>
              </div>
            )}
          </div>

          <div className="text-center mt-14">
            <Link href="/articles">
              <button className="px-12 py-5 bg-gradient-to-r from-[#E8C56A] to-[#D4AF37] text-black font-bold text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#E8C56A]/50">
                مشاهده همه مقالات
              </button>
            </Link>
          </div>
        </div>
      </section>

      
    </>   
  );
}