// app/layout.js
'use client';

import dynamic from 'next/dynamic';
import localFont from 'next/font/local';
import './globals.css';

const DynamicBeams = dynamic(
  () => import('../public/Animation/Beams.jsx'),
  { 
    ssr: false,
    loading: () => <div className="fixed inset-0 -z-10 bg-black" />
  }
);

const vazir = localFont({
  src: '../public/Fonts/Vazirmatn-Medium.ttf',
  variable: '--font-vazir',
  weight: '500',
  style: 'normal',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>آرایشگاه طلایی</title>
      </head>

      <body className={`${vazir.className} antialiased m-0 p-0 min-h-screen relative overflow-x-hidden bg-black text-white`}>
        {/* بک‌گراند مشکی + انیمیشن طلایی */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute inset-0 bg-black" />
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

        {/* محتوای اصلی */}
        <main className="relative z-10 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}