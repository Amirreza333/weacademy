// app/auth/verify/page.js
'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function VerifyPage() {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [isClient, setIsClient] = useState(false); // برای جلوگیری از SSR

  const searchParams = useSearchParams();
  const router = useRouter();
  const phone = searchParams.get('phone');

  // فقط یک بار بعد از رندر کلاینت
  useEffect(() => {
    setIsClient(true);

    // چک کن که فقط در کلاینت اجرا بشه
    if (typeof window === 'undefined') return;

    const pendingPhone = localStorage.getItem('pending_phone');

    if (!phone || !pendingPhone) {
      router.replace('/auth/login');
      return;
    }

    // تطبیق شماره (امنیت بیشتر)
    const cleanPhone = phone.replace(/\D/g, '').slice(-11);
    const cleanPending = pendingPhone.replace(/\D/g, '').slice(-11);

    if (cleanPhone !== cleanPending) {
      localStorage.removeItem('pending_phone');
      router.replace('/auth/login');
      return;
    }
  }, [phone, router]);

  const verifyOTP = () => {
    if (otp === '123456') {
      // تنظیم کوکی امن (30 روز)
      const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString();
      document.cookie = `auth_token=${btoa(phone)}; path=/; expires=${expires}; Secure; SameSite=Strict`;

      localStorage.removeItem('pending_phone');
      router.push('/Dashboard');
    } else {
      alert('کد اشتباه! (دمو: 123456)');
    }
  };

  // قبل از لود کلاینت → چیزی نشون نده
  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-12 h-12 border-4 border-[#dbb91e] border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 w-full max-w-md border border-white/40">
        <h1 className="text-4xl font-bold text-center mb-3 text-[#dbb91e]">تأیید کد</h1>
        <p className="text-center text-gray-700 mb-8">
          کد به <span className="font-bold text-[#dbb91e]" dir="ltr">{phone}</span> ارسال شد
        </p>

        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
          placeholder="------"
          className="w-full p-4 text-center text-2xl tracking-widest bg-white/70 border-2 border-[#dbb91e]/30 rounded-xl focus:outline-none focus:border-[#dbb91e] focus:ring-4 focus:ring-[#dbb91e]/20 transition-all"
          maxLength="6"
          inputMode="numeric"
        />

        <button
          onClick={verifyOTP}
          disabled={otp.length !== 6 || loading}
          className="mt-6 w-full bg-gradient-to-r from-[#dbb91e] to-yellow-500 text-white py-4 rounded-xl font-bold shadow-lg hover:from-black hover:to-gray-900 transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {loading ? 'در حال ورود...' : 'ورود به داشبورد'}
        </button>

        <p className="text-xs text-center text-gray-600 mt-6 bg-white/60 px-3 py-2 rounded-lg">
          دمو: کد = <span className="font-bold text-[#dbb91e]">123456</span>
        </p>
      </div>
    </div>
  );
}