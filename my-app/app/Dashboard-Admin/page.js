
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  Users, 
  ShoppingCart, 
  DollarSign, 
  TrendingUp, 
  Menu, 
  X, 
  Bell, 
  Search, 
  Home ,
  List
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';


const chartData = [
  { name: 'فروردین', value: 4000 },
  { name: 'اردیبهشت', value: 3000 },
  { name: 'خرداد', value: 5000 },
  { name: 'تیر', value: 4500 },
  { name: 'مرداد', value: 6000 },
  { name: 'شهریور', value: 5500 },
];

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-black/50">
      
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 
        bg-gradient-to-b from-black/60 to-black/40 
        backdrop-blur-xl border-r border-white/10 
        transition-all duration-300 ease-in-out
        ${sidebarOpen ? 'w-64' : 'w-0 lg:w-20'}
        overflow-hidden
      `}>
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h1 className={`font-bold text-xl text-yellow-400 ${!sidebarOpen && 'lg:hidden'}`}>
            داشبورد
          </h1>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-white/10 lg:hidden text-white"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {[
            { icon: Home, label: 'خانه', href: '/' },
            { icon: LayoutDashboard, label: 'داشبورد', active: true },
            { icon: Users, label: 'کاربران', href: '/DashboardContacts' },
            
            { icon: DollarSign, label: 'مالی' , href: '/finance'},
            { icon: TrendingUp, label: 'تحلیل', href: '/analytics' },
            
          ].map((item, i) => {
            const Icon = item.icon;
            return item.href ? (
              <Link 
                key={i}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/70 hover:bg-white/10 transition-all "
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
                placeholder="جستجو در داشبورد..." 
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
                خلاصه عملکرد
              </h1>
              <p className="text-white/60 text-sm mt-1">
                {new Date().toLocaleDateString('fa-IR')} - به‌روزرسانی لحظه‌ای
              </p>
            </div>
            <Link 
              href="/"
              className="px-5 py-2.5 bg-yellow-500/20 backdrop-blur-md rounded-xl text-yellow-400 border border-yellow-500/30 hover:bg-yellow-500/30 transition-all flex items-center gap-2 text-sm"
            >
              <Home className="w-4 h-4" />
              بازگشت به گالری
            </Link>
          </div>

       
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'درآمد کل', value: '۱۲,۳۴۵,۶۷۸ تومان', change: '+۱۲.۵%', color: 'from-emerald-500 to-teal-600' },
              { title: 'کاربران جدید', value: '۱,۲۳۴ نفر', change: '+۸.۳%', color: 'from-blue-500 to-cyan-600' },
           { title: 'افراد جدید در این ماه', value: '۵۶۷ مورد', change: '-۲.۱%', color: 'from-purple-500 to-pink-600' },   
              { title: 'نرخ تبدیل', value: '۳.۴۵%', change: '+۰.۸%', color: 'from-orange-500 to-red-600' },
            ].map((stat, i) => (
              <div 
                key={i}
                className="bg-white/10 backdrop-blur-2xl rounded-2xl p-5 border border-white/10 hover:border-yellow-500/30 transition-all group"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white/70 text-xs sm:text-sm">{stat.title}</p>
                    <p className="text-xl sm:text-2xl font-bold text-white mt-1">{stat.value}</p>
                    <p className={`text-xs sm:text-sm mt-2 ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                      {stat.change}
                    </p>
                  </div>
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${stat.color} rounded-xl opacity-80 group-hover:scale-110 transition-transform flex items-center justify-center`}>
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white/30 rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            <div className="lg:col-span-2 bg-white/10 backdrop-blur-2xl rounded-2xl p-5 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">روند درآمد ماهانه</h3>
              <div className="h-64 sm:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff15" />
                    <XAxis dataKey="name" stroke="#ffffff80" fontSize={12} />
                    <YAxis stroke="#ffffff80" fontSize={12} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#00000090', 
                        border: '1px solid #ffffff20', 
                        borderRadius: '12px',
                        backdropFilter: 'blur(10px)'
                      }}
                      labelStyle={{ color: '#fff' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#dbb91e" 
                      strokeWidth={3} 
                      dot={{ fill: '#dbb91e', r: 6 }}
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

         
            <div className="bg-white/10 backdrop-blur-2xl rounded-2xl p-5 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">فعالیت‌های اخیر</h3>
              <div className="space-y-4">
                {[
                  { text: 'کاربر جدید ثبت‌نام کرد', time: '۲ دقیقه پیش' },
                  { text: 'ارایشگاه بانو ثبت نام کرد', time: '۱۵ دقیقه پیش' },
                  { text: 'پرداخت ۵۰۰,۰۰۰ تومان', time: '۱ ساعت پیش' },
                  { text: 'کاربر جدید به WeAcademy پیوست', time: '۳ ساعت پیش' },
                ].map((act, i) => (
                  <div key={i} className="flex items-center gap-3 pb-3 border-b border-white/5 last:border-0">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    <div className="flex-1">
                      <p className="text-white/90 text-sm">{act.text}</p>
                      <p className="text-white/40 text-xs">{act.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

         
          <div className="bg-white/10 backdrop-blur-2xl rounded-2xl p-5 border border-white/10 overflow-hidden">
            <h3 className="text-lg font-semibold text-white mb-4">کاربران اخیر</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-white/80 text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-right py-3 px-2 sm:px-4 font-medium">ID</th>
                    <th className="text-right py-3 px-2 sm:px-4 font-medium">نام</th>
                    <th className="text-right py-3 px-2 sm:px-4 font-medium">ایمیل</th>
                    <th className="text-right py-3 px-2 sm:px-4 font-medium">وضعیت</th>
                    <th className="text-right py-3 px-2 sm:px-4 font-medium">درآمد</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: 1, name: 'سکینه رضایی', email: 'ali@example.com', status: 'فعال', income: '۲,۳۴۵,۰۰۰' },
                    { id: 2, name: 'سارا احمدی', email: 'sara@example.com', status: 'غیرفعال', income: '۱,۲۳۴,۰۰۰' },
                    { id: 3, name: 'کبرا حسینی', email: 'mohammad@example.com', status: 'فعال', income: '۳,۴۵۶,۰۰۰' },
                  ].map((row) => (
                    <tr key={row.id} className="border-b border-white/05 hover:bg-white/5 transition-all">
                      <td className="py-3 px-2 sm:px-4">{row.id}</td>
                      <td className="py-3 px-2 sm:px-4">{row.name}</td>
                      <td className="py-3 px-2 sm:px-4 text-xs sm:text-sm">{row.email}</td>
                      <td className="py-3 px-2 sm:px-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          row.status === 'فعال' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-red-500/20 text-red-400'
                        }`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="py-3 px-2 sm:px-4">{row.income} تومان</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}