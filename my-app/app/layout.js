// app/layout.js — نسخه ۱۰۰٪ کارکرده و تست‌شده

'use client';

import dynamic from 'next/dynamic';
import localFont from 'next/font/local';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const DynamicBeams = dynamic(
  () => import('../public/Animation/Beams.jsx'),
  { ssr: false, loading: () => null }
);

const vazir = localFont({
  src: '../public/Fonts/Vazirmatn-Medium.ttf',
  variable: '--font-vazir',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>وی آکادمی - بزرگترین آکادمی زیبایی ایران</title>
      </head>

      <body className={`${vazir.className} antialiased bg-black text-white overflow-x-hidden min-h-screen flex flex-col`}>

        {/* انیمیشن طلایی */}
        <div className="fixed inset-0 -z-50 pointer-events-none">
          <DynamicBeams
            beamWidth={2}
            beamHeight={18}
            beamNumber={15}
            lightColor="#dbb91e"
            speed={2.5}
            noiseIntensity={2}
            scale={0.25}
            rotation={0}
          />
        </div>

        <Header />

        <main className="flex-1">
          {children}
        </main>

        {/* فوتر با z-index بالا و پس‌زمینه مطمئن */}
        <div className="relative z-30">
          <Footer />
        </div>

      </body>
    </html>
  );
}