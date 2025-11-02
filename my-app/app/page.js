// app/page.tsx
'use client';
import Image from 'next/image';
import Hero from '@/Components/Hero';
import About from '@/Components/About';
import WhyBestChoice from '@/Components/WhyBestChoice';
import Testimonials from '@/Components/Testimonials';
import ContactForm from '@/Components/ContactForm'; 
import FloatingHalfImage from '@/Components/FloatingHalfImage'; 
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      
      <FloatingHalfImage />

     
      <Hero />
      <About />
      <WhyBestChoice />
      <Testimonials />
      <ContactForm />

     
      <div className="h-screen bg-gradient-to-b from-purple-50 to-pink-50 flex items-center justify-center">
      
      </div>
    </main>
  );
}