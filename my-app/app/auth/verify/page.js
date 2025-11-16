// app/auth/verify/page.js
'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Shield, Lock, Send, Sparkles } from 'lucide-react';

export default function VerifyPage() {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();
  const phone = searchParams.get('phone') || localStorage.getItem('pending_phone') || '';

  useEffect(() => {
    if (!phone) {
      router.push('/auth/login');
    }
  }, [phone, router]);

  const handleVerify = () => {
    if (otp !== '123456') {
      alert('کد تأیید اشتباه است!');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const existingUser = localStorage.getItem(`user_${phone}`);

      if (existingUser) {
        const token = btoa(phone);
        document.cookie = `auth_token=${token}; path=/; max-age=${30*24*60*60}; Secure; SameSite=Strict`;
        alert('ورود موفق! خوش آمدید');
        localStorage.removeItem('pending_phone');
        router.push('/Dashboard');
      } else {
        localStorage.setItem('temp_phone', phone);
        localStorage.removeItem('pending_phone');
        router.push('/auth/register-info');
      }
      setLoading(false);
    }, 1000);
  };

  if (!phone) return null;

  return React.createElement(
    'div',
    { className: 'min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4 overflow-hidden relative' },

    // افکت‌های پس‌زمینه
    React.createElement('div', {
      className: 'absolute inset-0 opacity-20',
      style: {
        backgroundImage: 'radial-gradient(circle at 20% 80%, #dbb91e 0%, transparent 50%), radial-gradient(circle at 80% 20%, #dbb91e 0%, transparent 50%)',
        backgroundSize: '600px 600px',
        animation: 'float 20s ease-in-out infinite'
      }
    }),

    React.createElement(
      'div',
      { className: 'relative bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-md border border-white/20 overflow-hidden' },

      // نوار طلایی
      React.createElement('div', {
        className: 'absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-[#dbb91e] to-yellow-600 rounded-t-3xl'
      }),

      // آیکون امنیتی
      React.createElement(
        'div',
        { className: 'w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 bg-gradient-to-br from-[#dbb91e] to-yellow-600 rounded-full flex items-center justify-center shadow-2xl ring-4 ring-[#dbb91e]/30 animate-pulse' },
        React.createElement(Shield, { className: 'w-10 h-10 md:w-12 md:h-12 text-black' })
      ),

      // عنوان
      React.createElement('h1', {
        className: 'text-3xl md:text-4xl font-bold text-center mb-3 text-[#dbb91e] drop-shadow-2xl'
      }, 'تأیید هویت'),

      React.createElement('p', {
        className: 'text-center text-white/80 mb-8 text-sm md:text-base'
      }, 'کد ۶ رقمی ارسال شده به ', React.createElement('strong', { className: 'text-[#dbb91e]' }, phone)),

      // فیلد OTP
      React.createElement(
        'div',
        { className: 'relative mb-8' },
        React.createElement(
          'div',
          { className: 'flex items-center bg-white/10 border border-[#dbb91e]/40 rounded-2xl shadow-lg overflow-hidden focus-within:border-[#dbb91e] focus-within:ring-2 focus-within:ring-[#dbb91e]/30 transition-all' },
          React.createElement(Lock, { className: 'w-6 h-6 text-[#dbb91e] mx-4' }),
          React.createElement('input', {
            type: 'text',
            value: otp,
            onChange: (e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6)),
            placeholder: '123456',
            className: 'w-full p-4 pr-2 bg-transparent text-white placeholder-white/50 focus:outline-none text-2xl text-center font-mono tracking-widest',
            maxLength: '6'
          })
        ),
        // نمایش شمارنده 6 خانه
        React.createElement(
          'div',
          { className: 'absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2' },
          ...Array.from({ length: 6 }, (_, i) =>
            React.createElement('div', {
              key: i,
              className: `w-10 h-1 rounded-full transition-all ${otp[i] ? 'bg-[#dbb91e]' : 'bg-white/20'}`
            })
          )
        )
      ),

      // دکمه تأیید
      React.createElement(
        'button',
        {
          onClick: handleVerify,
          disabled: loading || otp.length !== 6,
          className: 'w-full bg-gradient-to-r from-[#dbb91e] to-yellow-500 text-black py-5 rounded-2xl font-bold text-lg md:text-xl shadow-xl hover:from-yellow-500 hover:to-orange-500 transform hover:scale-105 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3 group'
        },
        loading
          ? React.createElement(
              'span',
              { className: 'flex items-center gap-3' },
              React.createElement('svg', {
                className: 'animate-spin h-6 w-6',
                viewBox: '0 0 24 24'
              }, React.createElement('circle', {
                className: 'opacity-25',
                cx: '12', cy: '12', r: '10',
                stroke: 'currentColor', strokeWidth: '4', fill: 'none'
              }), React.createElement('path', {
                className: 'opacity-75', fill: 'currentColor',
                d: 'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              })),
              'در حال تأیید...'
            )
          : React.createElement(
              'span',
              { className: 'flex items-center gap-3' },
              'تأیید و ادامه',
              React.createElement(Send, { className: 'w-5 h-5 group-hover:translate-x-1 transition-transform' })
            )
      ),

      // راهنما
      React.createElement('p', {
        className: 'text-xs text-center text-white/60 mt-12 bg-white/10 px-4 py-3 rounded-xl backdrop-blur-sm'
      }, 'دمو: کد تأیید همیشه ', React.createElement('span', {
        className: 'font-bold text-[#dbb91e]'
      }, '123456')),

      // افکت‌های طلایی
      React.createElement('div', {
        className: 'absolute -bottom-20 -left-20 w-64 h-64 bg-[#dbb91e]/20 rounded-full blur-3xl animate-pulse'
      }),
      React.createElement('div', {
        className: 'absolute -top-20 -right-20 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl animate-pulse'
      })
    ),

    // انیمیشن CSS
    React.createElement('style', { jsx: true }, `
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(1deg); }
      }
      .animate-float { animation: float 20s ease-in-out infinite; }
    `)
  );
}