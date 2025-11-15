"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Home,
  LayoutDashboard,
  Users,
  DollarSign,
  TrendingUp,
  Search,
  Bell,
  Download,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const monthlyRevenue = [
  { month: "فروردین", revenue: 4200, expense: 2800 },
  { month: "اردیبهشت", revenue: 3800, expense: 3100 },
  { month: "خرداد", revenue: 5600, expense: 3400 },
  { month: "تیر", revenue: 4900, expense: 3600 },
  { month: "مرداد", revenue: 6200, expense: 3900 },
  { month: "شهریور", revenue: 5800, expense: 4100 },
];

const cashFlow = [
  {
    id: 1,
    date: "1404/08/20",
    description: "پرداخت فاکتور #123",
    type: "expense",
    amount: "1,250,000",
  },
  {
    id: 2,
    date: "1404/08/19",
    description: "دریافت از مشتری A",
    type: "income",
    amount: "2,800,000",
  },
  {
    id: 3,
    date: "1404/08/18",
    description: "خرید تجهیزات",
    type: "expense",
    amount: "750,000",
  },
  {
    id: 4,
    date: "1404/08/17",
    description: "فروش محصول B",
    type: "income",
    amount: "1,950,000",
  },
];

export default function Finance() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-black/50">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-xl border-r border-white/10 transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-0 lg:w-20"
        } overflow-hidden`}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h1
            className={`font-bold text-xl text-yellow-400 ${
              !sidebarOpen && "lg:hidden"
            }`}
          >
            داشبورد
          </h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-white/10 lg:hidden text-white"
          >
            {sidebarOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {[
            { icon: Home, label: "خانه", href: "/" },
            { icon: LayoutDashboard, label: "داشبورد", href: "/dashboard" },
            { icon: Users, label: "کاربران", href: "/DashboardContacts" },
            { icon: DollarSign, label: "مالی", href: "/finance" },
            { icon: TrendingUp, label: "تحلیل", href: "/analytics" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <Link
                key={i}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                  item.href === "/finance"
                    ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                    : "text-white/70 hover:bg-white/10"
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className={`${!sidebarOpen && "lg:hidden"} text-sm`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-black/40 backdrop-blur-xl border-b border-white/10 px-4 py-3">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-white/10 hidden lg:block text-white"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 flex-1 max-w-md mx-4">
              <Search className="w-5 h-5 text-white/50 absolute mr-3 pointer-events-none" />
              <input
                type="text"
                placeholder="جستجو در مالی..."
                className="w-full bg-white/10 backdrop-blur-md rounded-xl pl-11 pr-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 transition-all"
              />
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-lg hover:bg-white/10 relative text-white">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </button>
              <div className="w-9 h-9 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-black font-bold text-sm">
                ع
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-6 space-y-6 overflow-y-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                مدیریت مالی
              </h1>
              <p className="text-white/60 text-sm mt-1">
                {new Date().toLocaleDateString("fa-IR")} - به‌روزرسانی لحظه‌ای
              </p>
            </div>
            <Link
              href="/"
              className="px-5 py-2.5 bg-yellow-500/20 backdrop-blur-md rounded-xl text-yellow-400 border border-yellow-500/30 hover:bg-yellow-500/30 transition-all flex items-center gap-2 text-sm"
            >
              <Home className="w-4 h-4" /> بازگشت به گالری
            </Link>
          </div>

          {/* KPI */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "درآمد کل",
                value: "۳۴,۵۶۷,۰۰۰ تومان",
                change: "+۱۸.۲%",
              },
              { title: "هزینه کل", value: "۲۲,۳۴۵,۰۰۰ تومان", change: "-۵.۱%" },
              {
                title: "سود خالص",
                value: "۱۲,۲۲۲,۰۰۰ تومان",
                change: "+۴۲.۳%",
              },
              { title: "جریان نقدی", value: "+۵,۴۳۲,۰۰۰", change: "+۱۲.۱%" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-2xl rounded-2xl p-5 border border-white/10 hover:border-yellow-500/30 transition-all group"
              >
                <p className="text-white/70 text-xs sm:text-sm">{stat.title}</p>
                <p className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {stat.value}
                </p>
                <p
                  className={`text-xs sm:text-sm mt-2 ${
                    stat.change.startsWith("+")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {stat.change}
                </p>
              </div>
            ))}
          </div>

          {/* نمودار + جدول */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-2xl rounded-2xl p-5 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">
                درآمد و هزینه ماهانه
              </h3>
              <div className="h-64 sm:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyRevenue}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff15" />
                    <XAxis dataKey="month" stroke="#ffffff80" fontSize={12} />
                    <YAxis stroke="#ffffff80" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#00000090",
                        border: "1px solid #ffffff20",
                        borderRadius: "12px",
                        backdropFilter: "blur(10px)",
                      }}
                      labelStyle={{ color: "#fff" }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="#10b981"
                      strokeWidth={3}
                      name="درآمد"
                    />
                    <Line
                      type="monotone"
                      dataKey="expense"
                      stroke="#ef4444"
                      strokeWidth={3}
                      name="هزینه"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-2xl rounded-2xl p-5 border border-white/10 overflow-hidden">
              <h3 className="text-lg font-semibold text-white mb-4">
                جریان نقدی اخیر
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-white/80 text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-right py-3 px-4 font-medium">
                        تاریخ
                      </th>
                      <th className="text-right py-3 px-4 font-medium">
                        توضیحات
                      </th>
                      <th className="text-right py-3 px-4 font-medium">نوع</th>
                      <th className="text-right py-3 px-4 font-medium">مبلغ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cashFlow.map((row) => (
                      <tr
                        key={row.id}
                        className="border-b border-white/05 hover:bg-white/5 transition-all"
                      >
                        <td className="py-3 px-4 text-xs">{row.date}</td>
                        <td className="py-3 px-4">{row.description}</td>
                        <td className="py-3 px-4">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              row.type === "income"
                                ? "bg-green-500/20 text-green-400"
                                : "bg-red-500/20 text-red-400"
                            }`}
                          >
                            {row.type === "income" ? "درآمد" : "هزینه"}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-mono">
                          {row.amount} تومان
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
