// app/layout.js

'use client';

import dynamic from 'next/dynamic';
import localFont from 'next/font/local';
import './globals.css';

// فقط Beams رو با ssr: false و loading خالی لود می‌کنیم
const DynamicBeams = dynamic(
  () => import('../public/Animation/Beams.jsx'),
  { 
    ssr: false,
    loading: () => null
  }
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

      <body className={`${vazir.className} antialiased min-h-screen bg-black text-white overflow-x-hidden`}>

        {/* پس‌زمینه مشکی + انیمیشن طلایی — با z-index درست */}
        <div className="fixed inset-0 -z-50 pointer-events-none bg-black">
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

        {/* محتوای اصلی — حالا بالای همه چیز هست */}
        <main className="relative z-10 min-h-screen">
          {children}
        </main>

      </body>
    </html>
  );
}