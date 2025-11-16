// app/dashboard/page.js
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import DashboardHeader from "../../Components/DashboardHeader.js";
import BookingSection from "../../Components/BookingSection.js";
import ProfileCard from "../../Components/ProfileCard.js";
import UpcomingAppointments from "../../Components/UpcomingAppointments.js";
import QuickActions from "../../Components/QuickActions.js";
import ReferralSection from "../../Components/ReferralSection.js";
import React from 'react';

export default async function Dashboard() {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token')?.value;

  if (!token) {
    redirect('/auth/login');
  }

  let phone = 'کاربر';
  try {
    phone = atob(token);
    phone = phone.replace(/\D/g, '').slice(-15);
    if (phone.length >= 10) {
      phone = phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');
    }
  } catch (err) {
    console.warn('خطا در دیکد توکن:', err);
  }

  const appointments = [
    { id: 1, service: "کوتاهی مو", date: "۱۴۰۴/۰۸/۲۵", time: "۱۴:۳۰", status: "تایید شده" },
    { id: 2, service: "مانیکور", date: "۱۴۰۴/۰۸/۲۷", time: "۱۰:۰۰", status: "در انتظار" },
    { id: 3, service: "رنگ مو", date: "۱۴۰۴/۰۸/۳۰", time: "۱۶:۰۰", status: "تایید شده" },
  ];

  return React.createElement(
    'div',
    { className: 'min-h-screen relative z-20 overflow-hidden', dir: 'rtl' },

    // محتوا
    React.createElement(
      'div',
      { className: 'container mx-auto p-4 md:p-8 max-w-7xl' },

      // هدر
      React.createElement(DashboardHeader, { phone }),

      // کارت پروفایل
      React.createElement(
        'div',
        { className: 'mt-8' },
        React.createElement(ProfileCard, { phone })
      ),

      // گریت اصلی
      React.createElement(
        'div',
        { className: 'grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10' },
        React.createElement(
          'div',
          { className: 'lg:col-span-2 space-y-8' },
          React.createElement(BookingSection)
        ),
        React.createElement(
          'div',
          { className: 'space-y-8' },
          React.createElement(UpcomingAppointments, { appointments })
        )
      ),

      // اقدامات سریع
      React.createElement(
        'div',
        { className: 'mt-10' },
        React.createElement(QuickActions)
      ),

      // بخش معرف
      React.createElement(
        'div',
        { className: 'mt-12' },
        React.createElement(ReferralSection, { phone })
      )
    )
  );
}