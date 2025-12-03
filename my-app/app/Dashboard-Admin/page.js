// app/Dashboard-Admin/page.js   (یا هر اسمی که داری)
"use client";

import { useState } from "react";
import Link from "next/link";
import AdminSidebar from "@/components/AdminSidebar";
import { Search, Bell, Home, Menu, LayoutDashboard, Users, List, DollarSign, TrendingUp } from "lucide-react";

const chartData = [
  { name: "فروردین", value: 4000 },
  { name: "اردیبهشت", value: 3000 },
  { name: "خرداد", value: 5000 },
  { name: "تیر", value: 4500 },
  { name: "مرداد", value: 6000 },
  { name: "شهریور", value: 5500 },
];

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-black/50">
      {/* فقط این یه <aside> اضافه شد + nav رو داخلش بردیم */}
      <aside className={`transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-0 lg:w-16'} bg-black/80 backdrop-blur-xl border-r border-white/10 flex flex-col`}>
        <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <nav className="p-4 space-y-2 flex-1">
          {[
            { icon: Home, label: 'خانه', href: '/' },
            { icon: LayoutDashboard, label: 'داشبورد', active: true },
            { icon: Users, label: 'کاربران', href: '/DashboardContacts' },
            { icon: List, label: 'مقالات', href: '/admin/articles' },
            { icon: DollarSign, label: 'مالی', href: '/finance' },
            { icon: TrendingUp, label: 'تحلیل', href: '/analytics' },
          ].map((item, i) => {
            const Icon = item.icon;
            return item.href ? (
              <Link 
                key={i}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/70 hover:bg-white/10 transition-all"
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className={`${!sidebarOpen && 'lg:hidden'} text-sm`}>{item.label}</span>
              </Link>
            ) : (
              <button 
                key={i}
                className={`
                  w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all
                  ${item.active 
                    ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' 
                    : 'text-white/70 hover:bg-white/10'
                  }
                `}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className={`${!sidebarOpen && 'lg:hidden'} text-sm`}>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* حالا این div در جای درستشه */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* هدر */}
        <header className="bg-black/40 backdrop-blur-xl border-b border-white/10 px-4 py-3">
          {/* ... تمام کد هدر همون قبلی ... */}
          <div className="flex items-center justify-between">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-lg hover:bg-white/10 hidden lg:block text-white">
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 flex-1 max-w-md mx-4 relative">
              <Search className="w-5 h-5 text-white/50 absolute mr-3 pointer-events-none" />
              <input type="text" placeholder="جستجو در داشبورد..." className="w-full bg-white/10 backdrop-blur-md rounded-xl pl-11 pr-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-500/50" />
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-lg hover:bg-white/10 relative text-white">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </button>
              <div className="w-9 h-9 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-black font-bold text-sm">ع</div>
            </div>
          </div>
        </header>

        {/* محتوای اصلی */}
        <main className="flex-1 p-4 md:p-6 space-y-6 overflow-y-auto">
          {/* ... بقیه کد کارت‌ها و چارت و ... همش همونه */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">خلاصه عملکرد</h1>
              <p className="text-white/60 text-sm mt-1">{new Date().toLocaleDateString("fa-IR")} - به‌روزرسانی لحظه‌ای</p>
            </div>
            <Link href="/" className="px-5 py-2.5 bg-yellow-500/20 backdrop-blur-md rounded-xl text-yellow-400 border border-yellow-500/30 hover:bg-yellow-500/30 transition-all flex items-center gap-2 text-sm">
              <Home className="w-4 h-4" /> بازگشت به گالری
            </Link>
          </div>

          {/* کارت‌های آمار */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "درآمد کل", value: "۱۲,۳۴۵,۶۷۸ تومان", change: "+۱۲.۵%", color: "from-emerald-500 to-teal-600" },
              { title: "کاربران جدید", value: "۱,۲۳۴ نفر", change: "+۸.۳%", color: "from-blue-500 to-cyan-600" },
              { title: "افراد جدید در این ماه", value: "۵۶۷ مورد", change: "-۲.۱%", color: "from-purple-500 to-pink-600" },
              { title: "نرخ تبدیل", value: "۳.۴۵%", change: "+۰.۸%", color: "from-orange-500 to-red-600" },
            ].map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-2xl rounded-2xl p-5 border border-white/10 hover:border-yellow-500/30 transition-all group">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white/70 text-xs sm:text-sm">{stat.title}</p>
                    <p className="text-xl sm:text-2xl font-bold text-white mt-1">{stat.value}</p>
                    <p className={`text-xs sm:text-sm mt-2 ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>{stat.change}</p>
                  </div>
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${stat.color} rounded-xl opacity-80 group-hover:scale-110 transition-transform flex items-center justify-center`}>
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white/30 rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}