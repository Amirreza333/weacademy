// app/dashboard/page.js
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import DashboardHeader from "../../Components/DashboardHeader";
import BookingSection from "../../Components/BookingSection";
import ProfileCard from "../../Components/ProfileCard";
import UpcomingAppointments from "../../Components/UpcomingAppointments";
import QuickActions from "../../Components/QuickActions";

export default async function Dashboard() {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token')?.value;

  if (!token) {
    redirect('/auth/login');
  }

  let phone = 'کاربر';
  try {
    phone = atob(token);
  } catch {}

  const appointments = [
    { id: 1, service: "کوتاهی مو", date: "۱۴۰۴/۰۸/۲۵", time: "۱۴:۳۰", status: "تایید شده" },
    { id: 2, service: "مانیکور", date: "۱۴۰۴/۰۸/۲۷", time: "۱۰:۰۰", status: "در انتظار" },
  ];

  return (
    <div className="min-h-screen relative z-10">
      <DashboardHeader phone={phone} />
      <div className="container mx-auto p-4 md:p-8 max-w-7xl">
        <ProfileCard phone={phone} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2">
            <BookingSection />
          </div>
          <div>
            <UpcomingAppointments appointments={appointments} />
          </div>
        </div>
        <QuickActions />
      </div>
    </div>
  );
}