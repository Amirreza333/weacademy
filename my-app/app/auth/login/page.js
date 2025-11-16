// app/auth/login/page.js
'use client';
import React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    // بررسی کوکی auth_token
    const token = document.cookie
      .split('; ')
      .find(row => row.startsWith('auth_token='))
      ?.split('=')[1];

    if (token) {
      // کاربر لاگین است → مستقیم به داشبورد
      router.push('/dashboard');
    }
  }, [router]);

  const handleLogin = () => {
    // کاربر لاگین نیست → برو به ثبت‌نام
    router.push('/auth/register-info');
  };

  return React.createElement(
    'div',
    { className: 'min-h-screen flex items-center justify-center p-4' },

    React.createElement(
      'div',
      { className: 'relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-12 w-full max-w-md border border-white/30 overflow-hidden text-center' },

      // نوار طلایی
      React.createElement('div', {
        className: 'absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-[#dbb91e] to-yellow-600 rounded-t-3xl'
      }),

      // لوگو یا آیکون
      React.createElement(
        'div',
        { className: 'w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#dbb91e] to-yellow-600 rounded-full flex items-center justify-center shadow-2xl' },
        React.createElement('span', { className: 'text-black text-4xl font-bold' }, 'آ')
      ),

      // عنوان
      React.createElement('h1', {
        className: 'text-4xl font-bold text-[#dbb91e] drop-shadow-md mb-3'
      }, 'آرایشگاه طلایی'),

      React.createElement('p', {
        className: 'text-gray-700 mb-10 font-medium'
      }, 'به پنل مدیریت آرایشگران خوش آمدید'),

      // دکمه ورود
      React.createElement(
        'button',
        {
          onClick: handleLogin,
          className: 'w-full bg-gradient-to-r from-[#dbb91e] to-yellow-500 text-white py-5 rounded-xl font-bold text-xl shadow-lg hover:from-black hover:to-gray-900 transform hover:scale-105 transition-all duration-300'
        },
        'ورود'
      ),

      // افکت پایین
      React.createElement('div', {
        className: 'absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-20 bg-[#dbb91e]/20 blur-3xl rounded-full'
      })
    )
  );
}