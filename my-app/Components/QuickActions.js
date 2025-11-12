// components/QuickActions.js
'use client';

export default function QuickActions() {
  return (
    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { label: 'مشاهده گالری', icon: 'تصاویر', color: 'from-pink-500 to-rose-500' },
        { label: 'تخفیف‌ها', icon: 'درصد', color: 'from-amber-500 to-yellow-500' },
        { label: 'تاریخچه نوبت', icon: 'تقویم', color: 'from-emerald-500 to-teal-500' },
        { label: 'تماس با ما', icon: 'تلفن', color: 'from-indigo-500 to-purple-500' },
      ].map((action, i) => (
        <button
          key={i}
          className={`bg-gradient-to-br ${action.color} text-white p-4 rounded-2xl shadow-lg hover:scale-105 transition transform`}
        >
          <div className="text-3xl mb-1">{action.icon}</div>
          <p className="text-sm font-medium">{action.label}</p>
        </button>
      ))}
    </div>
  );
}