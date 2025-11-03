'use client';

import Beams from '../public/Animation/Beams.jsx';
import localFont from 'next/font/local';
import './globals.css';

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
        className={vazir.className}
        style={{
          margin: 0,
          padding: 0,
          minHeight: '100vh',
          position: 'relative',
          overflowX: 'hidden',
        }}
      >
      
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: -1,
            pointerEvents: 'none',
          }}
        >
          <Beams
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

       
        <main style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
          {children}
        </main>
      </body>
    </html>
  );
}