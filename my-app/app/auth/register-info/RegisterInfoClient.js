// app/auth/register-info/RegisterInfoClient.js
"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// رفع مشکل آیکون پیش‌فرض Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

function LocationMarker({ setPosition, setAddress }) {
  const [position, setLocalPosition] = useState(null);

  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setLocalPosition([lat, lng]);
      setPosition([lat, lng]);

      fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&accept-language=fa`)
        .then(res => res.json())
        .then(data => {
          const addr = data.display_name || 'آدرس نامشخص';
          setAddress(addr);
        })
        .catch(() => setAddress('آدرس یافت نشد'));
    },
  });

  return position === null ? null : <Marker position={position} />;
}

export default function RegisterInfoClient() {
  const [name, setName] = useState('');
  const [family, setFamily] = useState('');
  const [address, setAddress] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState([35.6892, 51.3890]); // تهران
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const tempPhone = localStorage.getItem('temp_phone');
    if (tempPhone) {
      setPhone(tempPhone);
    } else {
      router.push('/auth/login');
    }
  }, [router]);

  const handleSubmit = () => {
    if (!name || !family || !address || !nationalId || !phone) {
      alert('همه فیلدها الزامی است');
      return;
    }
    if (!/^\d{10}$/.test(nationalId)) {
      alert('کد ملی باید ۱۰ رقمی باشد');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const userData = { name, family, address, nationalId, phone, location: position };
      localStorage.setItem(`user_${phone}`, JSON.stringify(userData));
      document.cookie = `auth_token=${btoa(phone)}; path=/; max-age=${30*24*60*60}; Secure; SameSite=Strict`;

      alert(`ثبت‌نام کامل شد! خوش آمدید ${name} ${family}`);
      localStorage.removeItem('temp_phone');
      router.push('/Dashboard');
      setLoading(false);
    }, 1000);
  };

  if (!phone) return null;

  return (
    <div className='min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4'>
      <div className='relative bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 w-full max-w-4xl border border-white/20 overflow-hidden'>

        <div className='absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-[#dbb91e] to-yellow-600 rounded-t-3xl' />

        <h1 className='text-4xl font-bold text-center mb-3 text-[#dbb91e] drop-shadow-2xl'>
          تکمیل ثبت‌نام
        </h1>
        <p className='text-center text-white/80 mb-10 text-lg'>
          اطلاعات خود را وارد کنید و لوکیشن آرایشگاه را روی نقشه انتخاب کنید
        </p>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>

          {/* فرم */}
          <div className='space-y-5'>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="نام" className='w-full p-4 bg-white/10 border border-[#dbb91e]/40 rounded-xl text-white placeholder-white/50 focus:border-[#dbb91e] focus:outline-none focus:ring-2 focus:ring-[#dbb91e]/30 transition-all' />
            <input type="text" value={family} onChange={(e) => setFamily(e.target.value)} placeholder="نام خانوادگی" className='w-full p-4 bg-white/10 border border-[#dbb91e]/40 rounded-xl text-white placeholder-white/50 focus:border-[#dbb91e] focus:outline-none focus:ring-2 focus:ring-[#dbb91e]/30 transition-all' />
            <input type="text" value={nationalId} onChange={(e) => setNationalId(e.target.value.replace(/\D/g, '').slice(0, 10))} placeholder="کد ملی (۱۰ رقم)" maxLength="10" className='w-full p-4 bg-white/10 border border-[#dbb91e]/40 rounded-xl text-white placeholder-white/50 focus:border-[#dbb91e] focus:outline-none focus:ring-2 focus:ring-[#dbb91e]/30 transition-all' />
            <div className='p-4 bg-white/10 rounded-xl text-white/90 font-medium text-sm'>
              شماره: <strong>{phone}</strong>
            </div>
            <textarea value={address} onChange={(e) => setAddress(e.target.value)} placeholder="آدرس دقیق (از نقشه انتخاب کنید)" rows={3} className='w-full p-4 bg-white/10 border border-[#dbb91e]/40 rounded-xl text-white placeholder-white/50 focus:border-[#dbb91e] focus:outline-none focus:ring-2 focus:ring-[#dbb91e]/30 transition-all resize-none' />
          </div>

          {/* نقشه */}
          <div className='h-96 rounded-2xl overflow-hidden shadow-2xl border border-[#dbb91e]/30'>
            <MapContainer center={position} zoom={15} style={{ height: '100%', width: '100%' }} scrollWheelZoom={true}>
              <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' attribution='&copy; OpenStreetMap' />
              <LocationMarker setPosition={setPosition} setAddress={setAddress} />
            </MapContainer>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading || !address}
          className='mt-10 w-full bg-gradient-to-r from-[#dbb91e] to-yellow-500 text-black py-5 rounded-xl font-bold text-xl shadow-xl hover:from-yellow-500 hover:to-orange-500 transform hover:scale-105 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3'
        >
          {loading ? (
            <span className='flex items-center gap-3'>
              <svg className='animate-spin h-6 w-6' viewBox='0 0 24 24'>
                <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' fill='none' />
                <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z' />
              </svg>
              در حال ثبت...
            </span>
          ) : (
            'ثبت‌نام و ورود'
          )}
        </button>

        <div className='absolute -bottom-20 -left-20 w-64 h-64 bg-[#dbb91e]/20 rounded-full blur-3xl' />
        <div className='absolute -top-20 -right-20 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl' />
      </div>
    </div>
  );
}