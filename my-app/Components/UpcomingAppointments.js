// components/UpcomingAppointments.js
'use client';
import React from 'react';
import { Calendar, Clock, CheckCircle, AlertCircle } from 'lucide-react';

export default function UpcomingAppointments({ appointments }) {
  const getStatusIcon = (status) => {
    return status === 'تایید شده'
      ? React.createElement(CheckCircle, { className: 'w-5 h-5 text-green-400' })
      : React.createElement(AlertCircle, { className: 'w-5 h-5 text-yellow-400' });
  };

  const getStatusColor = (status) => {
    return status === 'تایید شده' ? 'text-green-400 bg-green-400/10' : 'text-yellow-400 bg-yellow-400/10';
  };

  return React.createElement(
    'div',
    { className: 'bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl' },
    React.createElement(
      'h3',
      { className: 'text-2xl font-bold text-[#dbb91e] mb-5 flex items-center gap-2' },
      React.createElement(Calendar, { className: 'w-6 h-6' }),
      'نوبت‌های پیش‌رو'
    ),
    appointments.length === 0
      ? React.createElement('p', { className: 'text-white/50 text-center py-10' }, 'هنوز نوبتی ثبت نشده')
      : React.createElement(
          'div',
          { className: 'space-y-4' },
          appointments.map((apt) =>
            React.createElement(
              'div',
              { key: apt.id, className: 'bg-white/5 border border-[#dbb91e]/20 rounded-2xl p-5 hover:bg-white/10 transition-all' },
              React.createElement(
                'div',
                { className: 'flex items-center justify-between' },
                React.createElement(
                  'div',
                  null,
                  React.createElement('p', { className: 'text-white font-semibold text-lg' }, apt.service),
                  React.createElement(
                    'p',
                    { className: 'text-white/70 text-sm mt-1 flex items-center gap-1' },
                    React.createElement(Clock, { className: 'w-4 h-4' }),
                    apt.date,
                    ' - ',
                    apt.time
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'flex items-center gap-2' },
                  getStatusIcon(apt.status),
                  React.createElement(
                    'span',
                    { className: `text-sm px-3 py-1 rounded-full font-medium ${getStatusColor(apt.status)}` },
                    apt.status
                  )
                )
              )
            )
          )
        )
  );
}