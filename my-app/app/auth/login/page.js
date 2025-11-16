// app/auth/login/page.js
'use client';
import React from 'react';
import { useState } from 'react';

export default function AuthHomePage() {
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const validatePhone = (num) => /^09[0-9]{9}$/.test(num);

  const handleLogin = () => {
    if (!validatePhone(phone)) {
      alert('شماره نامعتبر! مثلاً: 09123456789');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      alert(`کد تأیید برای ${phone} ارسال شد: 123456`);
      localStorage.setItem('pending_phone', phone);
      window.location.href = `/auth/verify?phone=${phone}`;
      setLoading(false);
    }, 800);
  };

  const handleRegister = () => {
    if (!validatePhone(phone)) {
      alert('شماره نامعتبر! مثلاً: 09123456789');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      localStorage.setItem('temp_phone', phone);
      window.location.href = `/auth/register-info?phone=${phone}`;
      setLoading(false);
    }, 800);
  };

  return React.createElement(
    'div',
    { className: 'min-h-screen flex items-center justify-center p-4' },

    React.createElement(
      'div',
      { className: 'relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 w-full max-w-md border border-white/30 overflow-hidden' },

      // نوار طلایی
      React.createElement('div', {
        className: 'absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-[#dbb91e] to-yellow-600 rounded-t-3xl'
      }),

      // عنوان
      React.createElement('h1', {
        className: 'text-4xl font-bold text-center mb-3 text-[#dbb91e] drop-shadow-md'
      }, 'آرایشگاه طلایی'),

      React.createElement('p', {
        className: 'text-center text-gray-700 mb-8 font-medium'
      }, 'شماره تلفن خود را وارد کنید'),

      // ورودی
      React.createElement(
        'div',
        { className: 'relative mb-6' },
        React.createElement('input', {
          type: 'text',
          value: phone,
          onChange: (e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 11)),
          placeholder: '09123456789',
          className: 'w-full p-4 pr-12 text-lg text-center bg-white/60 border-2 border-[#dbb91e]/30 rounded-xl focus:outline-none focus:border-[#dbb91e] focus:ring-4 focus:ring-[#dbb91e]/20 transition-all duration-300 placeholder:text-gray-500',
          maxLength: '11'
        }),
        React.createElement('span', {
          className: 'absolute left-4 top-1/2 -translate-y-1/2 text-[#dbb91e] font-bold'
        }, 'IR')
      ),

      // دکمه ورود
      React.createElement(
        'button',
        {
          onClick: handleLogin,
          disabled: loading || !phone,
          className: 'w-full bg-gradient-to-r from-[#dbb91e] to-yellow-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:from-black hover:to-gray-900 transform hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none mb-3'
        },
        loading ? 'در حال ارسال...' : 'ورود با کد تأیید'
      ),

      // دکمه ثبت‌نام
      React.createElement(
        'button',
        {
          onClick: handleRegister,
          disabled: loading || !phone,
          className: 'w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:from-emerald-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none'
        },
        loading ? 'در حال انتقال...' : 'ثبت‌نام جدید'
      ),

      // راهنما
      React.createElement('p', {
        className: 'text-xs text-center text-gray-600 mt-6 bg-white/50 px-3 py-2 rounded-lg'
      }, 'دمو: کد تأیید همیشه ', React.createElement('span', {
        className: 'font-bold text-[#dbb91e]'
      }, '123456')),

      // افکت
      React.createElement('div', {
        className: 'absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-16 bg-[#dbb91e]/20 blur-3xl rounded-full'
      })
    )
  );
}