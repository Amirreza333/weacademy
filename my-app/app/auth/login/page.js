// app/auth/login/page.js
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Send, Sparkles, Scissors, User, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [role, setRole] = useState(null); // null | "stylist" | "client"
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendOTP = () => {
    if (!/^09[0-9]{9}$/.test(phone)) {
      alert("شماره موبایل نامعتبره! مثلاً: 09123456789");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      // ذخیره موقت شماره و نقش
      localStorage.setItem("pending_phone", phone);
      localStorage.setItem("user_role", role);

      alert(`کد تأیید ارسال شد به ${phone}\n\nکد دمو: 123456`);

      // حتماً برو صفحه OTP
      window.location.href = "/auth/verify";
      
      setLoading(false);
    }, 1000);
  };

  // صفحه انتخاب نقش
  if (!role) {
    return (
      <div className="min-h-screen  flex items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-radial from-[#dbb91e]/20 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 text-center max-w-2xl"
        >
          <div className="w-28 h-28 mx-auto mb-8 bg-gradient-to-br from-[#dbb91e] to-yellow-600 rounded-full flex items-center justify-center shadow-2xl ring-8 ring-[#dbb91e]/20 animate-pulse">
            <Sparkles className="w-14 h-14 text-black" />
          </div>

          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-[#dbb91e] via-yellow-400 to-amber-600 bg-clip-text text-transparent mb-4">
            WeAcademy
          </h1>
          <p className="text-xl text-white/80 mb-16">به دنیای زیبایی خوش آمدید</p>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setRole("stylist")}
              className="group relative bg-white/10  backdrop-blur-xl border-2 border-[#dbb91e]/50 rounded-3xl p-10 hover:border-[#dbb91e] transition-all"
            >
              <Scissors className="w-16 h-16 mx-auto mb-6 text-[#dbb91e] group-hover:rotate-12 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-2">آرایشگر</h3>
              <p className="text-white/70">مدیریت نوبت‌ها و مشتریان</p>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setRole("client")}
              className="group relative bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-3xl p-10 hover:border-yellow-500 transition-all"
            >
              <User className="w-16 h-16 mx-auto mb-6 text-yellow-500 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-2">کاربر</h3>
              <p className="text-white/70">رزرو نوبت و پروفایل شخصی</p>
            </motion.button>
          </div>

          <div className="mt-16">
            <Link
              href="/"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#dbb91e] to-[#b8961e] text-black font-bold text-xl rounded-2xl hover:scale-105 transition-all shadow-2xl"
            >
              <ArrowLeft className="w-6 h-6" />
              بازگشت به صفحه اصلی
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  // صفحه ورود شماره موبایل (فقط ارسال OTP)
  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-radial from-[#dbb91e]/20 to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 md:p-14 w-full max-w-md border border-white/20"
      >
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#dbb91e] to-yellow-600 rounded-t-3xl" />

        <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#dbb91e] to-yellow-600 rounded-full flex items-center justify-center shadow-2xl ring-4 ring-[#dbb91e]/30">
          {role === "stylist" ? <Scissors className="w-12 h-12 text-black" /> : <User className="w-12 h-12 text-black" />}
        </div>

        <h2 className="text-3xl font-bold text-center text-[#dbb91e] mb-3">
          {role === "stylist" ? "ورود آرایشگر" : "ورود کاربر"}
        </h2>
        <p className="text-center text-white/70 mb-8">شماره موبایل خود را وارد کنید</p>

        <div className="flex items-center bg-white/10 border-2 border-[#dbb91e]/40 rounded-2xl shadow-lg focus-within:border-[#dbb91e] transition-all mb-8">
          <Phone className="w-6 h-6 text-[#dbb91e] mx-4" />
          <input
            type="text"
            inputMode="numeric"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 11))}
            placeholder="09123456789"
            className="w-full p-4 bg-transparent text-white placeholder-gray-400 text-lg focus:outline-none"
            maxLength="11"
            autoFocus
          />
          <span className="text-[#dbb91e] font-bold px-4">IR</span>
        </div>

        <motion.button
          whileHover={{ scale: phone.length === 11 ? 1.03 : 1 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSendOTP}
          disabled={loading || phone.length !== 11}
          className={`w-full py-5 rounded-2xl font-bold text-xl shadow-2xl flex items-center justify-center gap-3 transition-all ${
            phone.length === 11
              ? "bg-gradient-to-r from-[#dbb91e] to-yellow-500 text-black hover:from-yellow-500 hover:to-orange-500"
              : "bg-gray-700 text-gray-500 cursor-not-allowed"
          }`}
        >
          {loading ? "در حال ارسال..." : "ارسال کد تأیید"}
          {!loading && <Send className="w-6 h-6" />}
        </motion.button>

        <button
          onClick={() => setRole(null)}
          className="mt-6 text-white/60 hover:text-white transition text-sm block mx-auto"
        >
          تغییر نقش
        </button>

        <p className="text-xs text-center text-white/50 mt-8 bg-white/5 px-4 py-3 rounded-xl">
          کد دمو همیشه: <strong className="text-[#dbb91e]">123456</strong>
        </p>
      </motion.div>
    </div>
  );
}