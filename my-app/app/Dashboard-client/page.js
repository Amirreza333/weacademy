// app/dashboard/page.js — داشبورد کامل کاربر WeAcademy
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import DashboardHeader from "../../components/DashboardHeader2.js";
import ProfileCard from "../../components/ProfileCard.js";
import BookingSection from "../../components/BookingSection.js";
import UpcomingAppointments from "../../components/UpcomingAppointments.js";
import QuickActions from "../../components/QuickActions.js";
import ReferralSection from "../../components/ReferralSection.js";
import Link from "next/link";
import { CheckCircle, PlayCircle, BookOpen } from "lucide-react";

export default async function UserDashboard() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;

  // اگر لاگین نکرده بود → برو لاگین
  if (!token) {
    redirect("/auth/login");
  }

  // دیکد توکن (شماره موبایل)
  let phone = "عزیزم";
  try {
    phone = atob(token);
    phone = phone.replace(/\D/g, "").slice(-11);
    phone = "0" + phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3");
  } catch (err) {
    console.warn("خطا در دیکد توکن:", err);
  }

  return (
    <div className="min-h-screen relative overflow-hidden" dir="rtl">
      {/* بک‌گراند لوکس طلایی-مشکی */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0d16] via-[#0e121c] to-[#0a0d16] opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(219,185,30,0.08),transparent_70%)]" />

      <div className="relative z-10 container mx-auto p-4 md:p-8 max-w-7xl">
        {/* هدر داشبورد */}
        <DashboardHeader phone={phone} />

        {/* کارت پروفایل */}
        <div className="mt-8">
          <ProfileCard phone={phone} />
        </div>

        {/* گریت اصلی: رزرو + نوبت‌ها + دکمه بزرگ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          {/* ستون چپ — رزرو و نوبت‌ها */}
          <div className="lg:col-span-2 space-y-8">
            <BookingSection />
            <UpcomingAppointments appointments={[]} />
          </div>

          {/* ستون راست — دکمه بزرگ آرایشگاه‌ها */}
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

        {/* دوره‌های آموزشی من — جدید و خفن */}
        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#dbb91e] to-[#b8961e]">
            دوره‌های آموزشی من
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* دوره خریداری شده */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0e121c]/90 to-[#0a0d16]/90 border border-[#dbb91e]/30 backdrop-blur-xl hover:border-[#dbb91e] transition-all duration-500 hover:shadow-2xl hover:shadow-[#dbb91e]/20">
              <div className="absolute top-4 right-4 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                خریداری شده
              </div>

              <div className="p-8">
                <div className="w-full h-48 bg-gray-900 rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
                  <div className="bg-gradient-to-br from-[#dbb91e]/20 to-[#b8961e]/20 w-full h-full flex items-center justify-center">
                    <PlayCircle className="w-20 h-20 text-[#dbb91e] opacity-60" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#dbb91e] mb-2">دوره جامع رنگ و لایت حرفه‌ای</h3>
                <p className="text-gray-400 text-sm mb-4">تکنیک‌های ۲۰۲۵ + مدرک بین‌المللی</p>

                <div className="flex items-center justify-between mt-6">
                  <span className="text-green-400 font-bold">۸۵٪ تکمیل شده</span>
                  <Link
                    href="/courses/color-light"
                    className="bg-gradient-to-r from-[#dbb91e] to-[#b8961e] text-black font-bold px-6 py-3 rounded-xl hover:shadow-xl hover:shadow-[#dbb91e]/40 transform hover:scale-105 transition-all duration-300"
                  >
                    ادامه دوره
                  </Link>
                </div>
              </div>
            </div>

            {/* کارت تشویقی — هنوز دوره نخریده */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0e121c]/90 to-[#0a0d16]/90 border border-[#dbb91e]/20 backdrop-blur-xl hover:border-[#dbb91e]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#dbb91e]/10">
              <div className="p-8 text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#dbb91e]/10 to-[#b8961e]/10 rounded-full flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-[#dbb91e]" />
                </div>

                <h3 className="text-2xl font-bold text-[#dbb91e] mb-4">هنوز دوره‌ای نخریدی؟</h3>
                <p className="text-gray-400 mb-8">بهترین دوره‌های آرایشگری با مدرک معتبر بین‌المللی</p>

                <Link
                  href="/courses"
                  className="inline-block bg-gradient-to-r from-[#dbb91e] to-[#b8961e] text-black font-bold px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-[#dbb91e]/40 transform hover:scale-105 transition-all duration-300"
                >
                  مشاهده دوره‌ها
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* بخش دعوت از دوستان */}
        <div className="mt-16">
          <ReferralSection phone={phone} />
        </div>
      </div>
    </div>
  );
}