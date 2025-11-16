// app/auth/register-info/page.js
'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function RegisterInfoPage() {
  const [name, setName] = useState('');
  const [family, setFamily] = useState('');
  const [address, setAddress] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();
  const phone = searchParams.get('phone') || localStorage.getItem('temp_phone') || '';

  useEffect(() => {
    if (!phone) {
      router.push('/auth/login');
    }
  }, [phone, router]);

  const handleSubmit = () => {
    if (!name || !family || !address || !nationalId) {
      alert('همه فیلدها الزامی است');
      return;
    }
    if (!/^\d{10}$/.test(nationalId)) {
      alert('کد ملی باید ۱۰ رقمی باشد');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const userData = { name, family, address, nationalId, phone };
      localStorage.setItem('user_profile', JSON.stringify(userData));

      const token = btoa(phone);
      document.cookie = `auth_token=${token}; path=/; max-age=${30*24*60*60}; Secure; SameSite=Strict`;

      alert(`ثبت‌نام کامل شد! خوش آمدید ${name} ${family}`);
      localStorage.removeItem('temp_phone');
      router.push('/Dashboard');
    }, 1000);
  };

  if (!phone) return null;

  return React.createElement(
    'div',
    { className: 'min-h-screen flex items-center justify-center p-4' },

    React.createElement(
      'div',
      { className: 'relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 w-full max-w-lg border border-white/30 overflow-hidden' },

      React.createElement('div', {
        className: 'absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-[#dbb91e] to-yellow-600 rounded-t-3xl'
      }),

      React.createElement('h1', {
        className: 'text-3xl font-bold text-center mb-3 text-[#dbb91e] drop-shadow-md'
      }, 'تکمیل ثبت‌نام'),

      React.createElement('p', {
        className: 'text-center text-gray-700 mb-8'
      }, 'اطلاعات شخصی خود را وارد کنید'),

      React.createElement(
        'div',
        { className: 'space-y-5' },
        React.createElement('input', {
          type: 'text',
          value: name,
          onChange: (e) => setName(e.target.value),
          placeholder: 'نام',
          className: 'w-full p-4 bg-white/60 border-2 border-[#dbb91e]/30 rounded-xl focus:outline-none focus:border-[#dbb91e] focus:ring-4 focus:ring-[#dbb91e]/20 transition-all'
        }),
        React.createElement('input', {
          type: 'text',
          value: family,
          onChange: (e) => setFamily(e.target.value),
          placeholder: 'نام خانوادگی',
          className: 'w-full p-4 bg-white/60 border-2 border-[#dbb91e]/30 rounded-xl focus:outline-none focus:border-[#dbb91e] focus:ring-4 focus:ring-[#dbb91e]/20 transition-all'
        }),
        React.createElement('input', {
          type: 'text',
          value: address,
          onChange: (e) => setAddress(e.target.value),
          placeholder: 'آدرس آرایشگاه',
          className: 'w-full p-4 bg-white/60 border-2 border-[#dbb91e]/30 rounded-xl focus:outline-none focus:border-[#dbb91e] focus:ring-4 focus:ring-[#dbb91e]/20 transition-all'
        }),
        React.createElement('input', {
          type: 'text',
          value: nationalId,
          onChange: (e) => setNationalId(e.target.value.replace(/\D/g, '').slice(0, 10)),
          placeholder: 'کد ملی (۱۰ رقم)',
          className: 'w-full p-4 bg-white/60 border-2 border-[#dbb91e]/30 rounded-xl focus:outline-none focus:border-[#dbb91e] focus:ring-4 focus:ring-[#dbb91e]/20 transition-all',
          maxLength: '10'
        })
      ),

      React.createElement(
        'button',
        {
          onClick: handleSubmit,
          disabled: loading,
          className: 'mt-8 w-full bg-gradient-to-r from-[#dbb91e] to-yellow-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:from-black hover:to-gray-900 transform hover:scale-105 transition-all duration-300 disabled:opacity-70'
        },
        loading ? 'در حال ثبت...' : 'ثبت‌نام و ورود'
      ),

      React.createElement('div', {
        className: 'absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-20 bg-[#dbb91e]/20 blur-3xl rounded-full'
      })
    )
  );
}