
'use client';

import dynamic from 'next/dynamic';
import localFont from 'next/font/local';
import './globals.css';


const DynamicBeams = dynamic(
  () => import('../public/Animation/Beams.jsx'),
  { ssr: false }
);


const vazir = localFont({
  src: '../public/Fonts/Vazirmatn-Medium.ttf',
  variable: '--font-vazir',
  weight: '400',
  style: 'normal',
});

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head />
      <body
        className={`${vazir.className} antialiased m-0 p-0 min-h-screen relative overflow-x-hidden`}
      >
      
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <DynamicBeams
            beamWidth={2}
            beamHeight={15}
            beamNumber={12}
            lightColor="#dbb91e"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={0}
          />
        </div>

      
        <main className="relative z-10 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}