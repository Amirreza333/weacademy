// components/DashboardHeader.js
'use client';

import { useRouter } from 'next/navigation';

export default function DashboardHeader({ phone }) {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie = 'auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    router.push('/auth/login');
  };

  return (
    <header className="bg-black/80 backdrop-blur-xl border-b border-[#dbb91e]/30 shadow-2xl">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-[#dbb91e] to-yellow-600 rounded-full flex items-center justify-center shadow-xl">
            <span className="text-black text-lg font-bold">آ</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-[#dbb91e]">داشبورد شخصی</h1>
            <p className="text-sm text-gray-400">خوش آمدید، {phone}</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="bg-gradient-to-r from-[#dbb91e] to-yellow-600 hover:from-yellow-600 hover:to-orange-600 text-black px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg"
        >
          خروج
        </button>
      </div>
    </header>
  );
}