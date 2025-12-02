// app/analytics/page.js
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import AdminSidebar from "@/components/AdminSidebar";
import { Search, Bell, Home, Menu, ArrowUp, ArrowDown } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

export default function Analytics() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [income, setIncome] = useState(0);
  const totalIncome = 34567000;

  const pieData = [
    { name: "خدمات", value: 35, color: "#f59e0b" },
    { name: "محصولات", value: 28, color: "#10b981" },
    { name: "تبلیغات", value: 20, color: "#3b82f6" },
    { name: "سایر", value: 17, color: "#8b5cf6" },
  ];

  const stats = [
    { label: "درآمد کل", value: income.toLocaleString("fa-IR"), unit: "تومان", change: "+12.5%", trend: "up" },
    { label: "کاربران جدید", value: "2,847", change: "+8.3%", trend: "up" },
    { label: "نرخ تبدیل", value: "3.42%", change: "-0.7%", trend: "down" },
    { label: "رشد ماهانه", value: "+24.1%", change: "+5.2%", trend: "up" },
  ];

  useEffect(() => {
    const start = Date.now();
    const duration = 2500;
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setIncome(Math.floor(eased * totalIncome));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex h-screen bg-black/50 overflow-hidden">
      <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-black/40 backdrop-blur-xl border-b border-white/10 px-4 py-3">
          <div className="flex items-center justify-between">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-lg hover:bg-white/10 hidden lg:block text-white">
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 flex-1 max-w-md mx-4">
              <Search className="w-5 h-5 text-white/50 absolute mr-3 pointer-events-none" />
              <input type="text" placeholder="جستجو در تحلیل..." className="w-full bg-white/10 backdrop-blur-md rounded-xl pl-11 pr-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 transition-all" />
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

        <main className="flex-1 p-4 md:p-6 space-y-8 overflow-y-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">تحلیل عملکرد</h1>
              <p className="text-white/60 text-sm mt-1">{new Date().toLocaleDateString("fa-IR")} - به‌روزرسانی لحظه‌ای</p>
            </div>
            <Link href="/" className="px-5 py-2.5 bg-yellow-500/20 backdrop-blur-md rounded-xl text-yellow-400 border border-yellow-500/30 hover:bg-yellow-500/30 transition-all flex items-center gap-2 text-sm">
              <Home className="w-4 h-4" /> بازگشت به گالری
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-2xl rounded-2xl p-5 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-white/60 text-xs">{stat.label}</p>
                  {stat.trend === "up" ? <ArrowUp className="w-4 h-4 text-green-400" /> : <ArrowDown className="w-4 h-4 text-red-400" />}
                </div>
                <p className="text-2xl font-bold text-white">
                  {stat.value} {stat.unit && <span className="text-lg text-yellow-400">{stat.unit}</span>}
                </p>
                <p className={`text-xs mt-1 ${stat.trend === "up" ? "text-green-400" : "text-red-400"}`}>{stat.change} نسبت به ماه قبل</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-2xl rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-6 text-center">تفکیک درآمد</h3>
            <div className="w-full max-w-md mx-auto">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" innerRadius={70} outerRadius={110} paddingAngle={3} dataKey="value" stroke="none">
                    {pieData.map((entry, i) => (<Cell key={`cell-${i}`} fill={entry.color} />))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: "#00000090", border: "1px solid #ffffff20", borderRadius: "12px", backdropFilter: "blur(10px)" }} labelStyle={{ color: "#fff" }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-6 flex-wrap">
              {pieData.map((d) => (
                <div key={d.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color }}></div>
                  <span className="text-sm text-white/70">{d.name} ({d.value}%)</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}