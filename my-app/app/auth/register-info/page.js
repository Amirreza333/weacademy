// app/auth/register-info/page.js
"use client";                           // این خط اجباریه برای Next.js 16 + Turbopack

import dynamic from 'next/dynamic';
import LoadingScreen from './LoadingScreen';

// حالا dynamic با ssr: false کاملاً مجاز و بدون خطاست
const RegisterInfoClient = dynamic(
  () => import('./RegisterInfoClient'),
  {
    ssr: false,                         // فقط توی مرورگر لود بشه
    loading: () => <LoadingScreen />,   // لودینگ قشنگ موقع بارگذاری
  }
);

export default function RegisterInfoPage() {
  return <RegisterInfoClient />;
}