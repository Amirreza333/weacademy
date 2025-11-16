// app/dashboard/page.js — داشبورد لیدی‌ها — نسخه نهایی + UI/UX کاملاً تمیز
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import DashboardHeader from "../../Components/DashboardHeader2.js";
import ProfileCard from "../../Components/ProfileCard.js";
import BookingSection from "../../Components/BookingSection.js";
import UpcomingAppointments from "../../Components/UpcomingAppointments.js";
import QuickActions from "../../Components/QuickActions.js";
import ReferralSection from "../../Components/ReferralSection.js";
import Link from "next/link";
import React from "react";

export default async function UserDashboard() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;

  if (!token) {
    redirect("/auth/login");
  }

  let phone = "عزیزم";
  try {
    phone = atob(token);
    phone = phone.replace(/\D/g, "").slice(-11);
    phone = "0" + phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3");
  } catch (err) {
    console.warn("خطا در دیکد توکن:", err);
  }

  return (
    <div
      className="min-h-screen bg-black/50 relative overflow-hidden"
      dir="rtl"
    >
      {/* بک‌گراند لوکس */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/30 via-black/90 to-black pointer-events-none" />

      <div className="relative z-10 container mx-auto p-4 md:p-8 max-w-7xl">
        {/* هدر */}
        <DashboardHeader phone={phone} />

        {/* کارت پروفایل */}
        <div className="mt-8">
          <ProfileCard phone={phone} />
        </div>

        {/* گریت اصلی: فقط رزرو + نوبت‌ها در چپ | دکمه بزرگ در راست */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          {/* ستون چپ — رزرو و نوبت‌ها */}
          <div className="lg:col-span-2 space-y-8">
            <BookingSection />
            <UpcomingAppointments appointments={[]} />
          </div>

          {/* ستون راست — فقط یک دکمه بزرگ و خفن */}
          <div className="space-y-8">
            <div className="group relative">
              <Link href="/BeautySalon" className="block">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-yellow-500/20 to-amber-600/20 border-2 border-yellow-500/50 p-10 md:p-12 text-center backdrop-blur-3xl hover:border-yellow-400 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/30 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <h3 className="text-3xl md:text-4xl font-black text-yellow-400 mb-4 leading-tight">
                    آرایشگاه‌های زنانه
                  </h3>
                  <p className="text-yellow-200 text-lg mb-8">
                    بهترین سالن‌های زیبایی ایران در یک نگاه
                  </p>
                  <div className="inline-block bg-gradient-to-r from-yellow-500 to-amber-600 px-10 md:px-12 py-5 rounded-2xl text-black font-bold text-lg md:text-xl shadow-2xl transform group-hover:scale-110 transition-all duration-300">
                    ورود به لیست سالن‌ها
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* اقدامات سریع */}
        <div className="mt-12">
          <QuickActions />
        </div>

        {/* بخش دعوت از دوستان — تمام عرض و مستقل (جای درست و حرفه‌ای) */}
        <div className="mt-16">
          <ReferralSection phone={phone} />
        </div>
      </div>
    </div>
  );
}
