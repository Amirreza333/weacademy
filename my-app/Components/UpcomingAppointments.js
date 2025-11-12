// components/UpcomingAppointments.js
export default function UpcomingAppointments({ appointments }) {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-amber-200">
      <h3 className="text-xl font-bold text-gray-800 mb-4">نوبت‌های پیش‌رو</h3>
      {appointments.length === 0 ? (
        <p className="text-gray-500 text-center py-8">هنوز نوبتی ثبت نشده</p>
      ) : (
        <div className="space-y-3">
          {appointments.map(apt => (
            <div key={apt.id} className="bg-gradient-to-r from-amber-50 to-pink-50 p-4 rounded-xl border border-amber-200">
              <p className="font-semibold text-gray-800">{apt.service}</p>
              <p className="text-sm text-gray-600">{apt.date} - {apt.time}</p>
              <span className={`text-xs px-2 py-1 rounded-full ${
                apt.status === 'تایید شده' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
              }`}>
                {apt.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}