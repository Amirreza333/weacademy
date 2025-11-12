// components/BookingSection.js
'use client';

import { useState } from 'react';

export default function BookingSection() {
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const services = ['کوتاهی مو', 'مانیکور', 'پدیکور', 'رنگ مو', 'میکاپ', 'مراقبت پوست'];

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-pink-200">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        رزرو نوبت جدید
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="p-3 border-2 border-amber-300 rounded-xl focus:border-pink-500 focus:outline-none"
        >
          <option value="">خدمات را انتخاب کنید</option>
          {services.map(s => <option key={s}>{s}</option>)}
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-3 border-2 border-amber-300 rounded-xl focus:border-pink-500 focus:outline-none"
        />

        <select
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="p-3 border-2 border-amber-300 rounded-xl focus:border-pink-500 focus:outline-none"
        >
          <option value="">ساعت</option>
          {['10:00', '11:00', '14:00', '15:00', '16:00', '17:00'].map(t => <option key={t}>{t}</option>)}
        </select>
      </div>

      <button className="mt-6 w-full bg-gradient-to-r from-amber-500 to-pink-500 text-white py-3 rounded-xl font-bold hover:from-pink-600 hover:to-amber-600 transition transform hover:scale-105">
        ثبت نوبت
      </button>
    </div>
  );
}