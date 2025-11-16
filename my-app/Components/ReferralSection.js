// components/ReferralSection.js
'use client';

import React from 'react';
import { Copy, Share2, Users, Check } from 'lucide-react';

export default function ReferralSection({ phone }) {
  const cleanPhone = phone.replace(/\D/g, '').slice(-10) || '0000000000';
  const referralCode = cleanPhone;
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://barber.az';
  const referralLink = `${baseUrl}/register?ref=${referralCode}`;

  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      alert('کپی نشد! لطفاً دستی کپی کنید.');
    }
  };

  const stats = { earned: 485000, referrals: 3, pending: 120000 };

  return React.createElement(
    'div',
    {
      className: 'mt-12 bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-8 shadow-2xl',
      style: { boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }
    },

    // عنوان
    React.createElement(
      'div',
      { className: 'flex items-center gap-3 mb-5' },
      React.createElement(
        'div',
        { className: 'p-3 bg-gradient-to-br from-[#dbb91e] to-yellow-600 rounded-xl shadow-lg' },
        React.createElement(Users, { className: 'w-6 h-6 text-black' })
      ),
      React.createElement(
        'h2',
        { className: 'text-2xl md:text-3xl font-bold text-[#dbb91e] drop-shadow-md' },
        'دعوت دوستان و کسب درآمد'
      )
    ),

    // توضیح
    React.createElement(
      'p',
      { className: 'text-white/80 mb-6 text-sm md:text-base leading-relaxed' },
      'هر آرایشگری که با ',
      React.createElement('strong', { className: 'text-[#dbb91e] font-bold' }, 'کد معرف شما'),
      ' ثبت‌نام کنه و دوره بخره، ',
      React.createElement('strong', { className: 'text-yellow-400 font-bold' }, '۷٪ از مبلغ'),
      ' به حسابت واریز می‌شه!'
    ),

    // گریت اصلی
    React.createElement(
      'div',
      { className: 'grid md:grid-cols-2 gap-6' },

      // بخش کد و لینک
      React.createElement(
        'div',
        { className: 'space-y-5' },

        // کد معرف
        React.createElement(
          'div',
          null,
          React.createElement('label', { className: 'block text-sm font-medium text-white/70 mb-2' }, 'کد معرف شما'),
          React.createElement(
            'div',
            { className: 'flex items-center gap-2' },
            React.createElement(
              'div',
              {
                className: 'flex-1 bg-white/10 border border-[#dbb91e]/40 rounded-xl px-4 py-3 font-mono text-lg text-[#dbb91e] text-center select-all backdrop-blur-sm'
              },
              referralCode
            ),
            React.createElement(
              'button',
              {
                onClick: () => copyToClipboard(referralCode),
                className: 'p-3 bg-gradient-to-r from-[#dbb91e] to-yellow-500 text-black rounded-xl hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105'
              },
              copied ? React.createElement(Check, { className: 'w-5 h-5' }) : React.createElement(Copy, { className: 'w-5 h-5' })
            )
          )
        ),

        // لینک دعوت
        React.createElement(
          'div',
          null,
          React.createElement('label', { className: 'block text-sm font-medium text-white/70 mb-2' }, 'لینک دعوت'),
          React.createElement(
            'div',
            { className: 'flex items-center gap-2' },
            React.createElement('input', {
              type: 'text',
              readOnly: true,
              value: referralLink,
              className: 'flex-1 bg-white/10 border border-[#dbb91e]/40 rounded-xl px-4 py-3 text-sm font-mono text-yellow-300 truncate select-all backdrop-blur-sm'
            }),
            React.createElement(
              'button',
              {
                onClick: () => copyToClipboard(referralLink),
                className: 'p-3 bg-gradient-to-r from-[#dbb91e] to-yellow-500 text-black rounded-xl hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105'
              },
              React.createElement(Share2, { className: 'w-5 h-5' })
            )
          ),
          copied && React.createElement(
            'p',
            { className: 'text-yellow-400 text-xs mt-2 text-center animate-pulse font-medium' },
            'کپی شد!'
          )
        )
      ),

      // آمار
      React.createElement(
        'div',
        { className: 'bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20' },
        React.createElement(
          'div',
          { className: 'text-center' },
          React.createElement('p', { className: 'text-white/70 text-sm' }, 'درآمد از معرف‌ها'),
          React.createElement(
            'p',
            { className: 'text-4xl font-bold text-[#dbb91e] mt-1 drop-shadow-lg' },
            stats.earned.toLocaleString('fa-IR'),
            React.createElement('span', { className: 'text-sm text-white/60 mr-1' }, 'تومان')
          )
        ),
        React.createElement(
          'div',
          { className: 'grid grid-cols-2 gap-4 mt-5 text-center text-sm' },
          React.createElement(
            'div',
            { className: 'bg-gradient-to-br from-[#dbb91e]/20 to-yellow-500/20 rounded-xl p-4 border border-[#dbb91e]/30' },
            React.createElement('p', { className: 'text-[#dbb91e] font-bold text-xl' }, stats.referrals),
            React.createElement('p', { className: 'text-white/70' }, 'معرف موفق')
          ),
          React.createElement(
            'div',
            { className: 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl p-4 border border-yellow-500/30' },
            React.createElement('p', { className: 'text-yellow-400 font-bold text-xl' }, stats.pending.toLocaleString('fa-IR')),
            React.createElement('p', { className: 'text-white/70' }, 'در انتظار')
          )
        )
      )
    ),

    // برچسب‌ها
    React.createElement(
      'div',
      { className: 'mt-7 flex flex-wrap gap-3 justify-center text-sm' },
      React.createElement(
        'span',
        { className: 'px-5 py-2 bg-gradient-to-r from-[#dbb91e] to-yellow-500 text-black rounded-full font-bold shadow-md' },
        '۷٪ پورسانت مادام‌العمر'
      ),
      React.createElement(
        'span',
        { className: 'px-5 py-2 bg-white/10 text-yellow-300 rounded-full font-medium border border-yellow-500/50' },
        'تسویه هفتگی'
      ),
      React.createElement(
        'span',
        { className: 'px-5 py-2 bg-white/10 text-yellow-300 rounded-full font-medium border border-yellow-500/50' },
        'بدون سقف'
      )
    )
  );
}