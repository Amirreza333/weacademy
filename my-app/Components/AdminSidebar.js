// src/components/AdminSidebar.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  LayoutDashboard, 
  Users, 
  DollarSign, 
  TrendingUp, 
  List, 
  FilePlus,
  Menu,
  X
} from "lucide-react";

const menuItems = [

];

export default function AdminSidebar({ sidebarOpen, setSidebarOpen }) {
  const pathname = usePathname();

  return (
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
        {menuItems.map((item, i) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={i}
              href={item.href}
              className={`
                flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all
                ${isActive 
                  ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' 
                  : 'text-white/70 hover:bg-white/10'
                }
              `}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className={`${!sidebarOpen && 'lg:hidden'} text-sm`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}