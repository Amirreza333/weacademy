// components/BookingSection.js
'use client';
import React from 'react';
import { useState } from 'react';
import { Plus } from 'lucide-react';

export default function BookingSection() {
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const services = ['کوتاهی مو', 'مانیکور', 'پدیکور', 'رنگ مو', 'میکاپ', 'مراقبت پوست'];
  const times = ['10:00', '11:00', '14:00', '15:00', '16:00', '17:00'];

  const handleSubmit = () => {
    if (!service || !date || !time) {
      alert('لطفاً همه فیلدها را پر کنید');
      return;
    }
    alert(`نوبت ${service} در ${date} ساعت ${time} ثبت شد!`);
    setService('');
    setDate('');
    setTime('');
  };

  return React.createElement(
    'div',
    { className: 'bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl' },
    React.createElement(
      'h3',
      { className: 'text-2xl font-bold text-[#dbb91e] mb-6 flex items-center gap-2' },
      React.createElement(Plus, { className: 'w-6 h-6' }),
      'رزرو نوبت جدید'
    ),
    React.createElement(
      'div',
      { className: 'grid grid-cols-1 md:grid-cols-3 gap-4' },
      // سرویس
      React.createElement(
        'select',
        {
          value: service,
          onChange: (e) => setService(e.target.value),
          className: 'p-4 bg-white/10 border border-[#dbb91e]/40 rounded-xl text-white placeholder-white/50 focus:border-[#dbb91e] focus:outline-none focus:ring-2 focus:ring-[#dbb91e]/20 transition-all'
        },
        React.createElement('option', { value: '', className: 'text-white/50' }, 'خدمات را انتخاب کنید'),
        services.map((s) => React.createElement('option', { key: s, value: s, className: 'text-black' }, s))
      ),
      // تاریخ
      React.createElement('input', {
        type: 'date',
        value: date,
        onChange: (e) => setDate(e.target.value),
        className: 'p-4 bg-white/10 border border-[#dbb91e]/40 rounded-xl text-white focus:border-[#dbb91e] focus:outline-none focus:ring-2 focus:ring-[#dbb91e]/20 transition-all'
      }),
      // ساعت
      React.createElement(
        'select',
        {
          value: time,
          onChange: (e) => setTime(e.target.value),
          className: 'p-4 bg-white/10 border border-[#dbb91e]/40 rounded-xl text-white focus:border-[#dbb91e] focus:outline-none focus:ring-2 focus:ring-[#dbb91e]/20 transition-all'
        },
        React.createElement('option', { value: '', className: 'text-white/50' }, 'ساعت'),
        times.map((t) => React.createElement('option', { key: t, value: t, className: 'text-black' }, t))
      )
    ),
    React.createElement(
      'button',
      {
        onClick: handleSubmit,
        className: 'mt-6 w-full bg-gradient-to-r from-[#dbb91e] to-yellow-500 text-black py-4 rounded-xl font-bold hover:from-yellow-500 hover:to-orange-500 transition-all transform hover:scale-105 shadow-lg'
      },
      'ثبت نوبت'
    )
  );
}