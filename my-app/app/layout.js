
import localFont from 'next/font/local';
import './globals.css';

const vazir = localFont({
  src: '../public/Fonts/Vazirmatn-Medium.ttf',
  variable: '--font-vazir',
  weight: '400',
  style: 'normal',
});

export default function RootLayout({
  children,
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazir.className}>
        {children}
      </body>
    </html>
  );
}