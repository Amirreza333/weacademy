'use client';

import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function VerifyPage() {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const phone = searchParams.get('phone');

  if (!phone || !localStorage.getItem('pending_phone')) {
    router.push('/auth/login');
    return null;
  }

  const verifyOTP = () => {
    if (otp === '123456') {
      document.cookie = `auth_token=${btoa(phone)}; path=/; max-age=${30 * 24 * 60 * 60}`;
      localStorage.removeItem('pending_phone');
      router.push('/Dashboard'); // مستقیم برو داشبورد
    } else {
      alert('کد اشتباه! (دمو: 123456)');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 w-full max-w-md border border-white/30">
        <h1 className="text-4xl font-bold text-center mb-3 text-[#dbb91e]">تأیید کد</h1>
        <p className="text-center text-gray-700 mb-8">کد به {phone} ارسال شد</p>

        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
          placeholder="------"
          className="w-full p-4 text-center text-2xl tracking-widest bg-white/60 border-2 border-[#dbb91e]/30 rounded-xl focus:outline-none focus:border-[#dbb91e] focus:ring-4 focus:ring-[#dbb91e]/20"
          maxLength="6"
        />

        <button
          onClick={verifyOTP}
          disabled={otp.length !== 6}
          className="mt-6 w-full bg-gradient-to-r from-[#dbb91e] to-yellow-500 text-white py-4 rounded-xl font-bold shadow-lg hover:from-black hover:to-gray-900 transform hover:scale-105 transition-all"
        >
          ورود به داشبورد
        </button>

        <p className="text-xs text-center text-gray-600 mt-6 bg-white/50 px-3 py-2 rounded-lg">
          دمو: کد = <span className="font-bold text-[#dbb91e]">123456</span>
        </p>
      </div>
    </div>
  );
}