// app/auth/login/page.js
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Send, Sparkles, Scissors, User, RefreshCw, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [role, setRole] = useState(null); // null | "stylist" | "client"
  const [phone, setPhone] = useState("");
  const [captcha, setCaptcha] = useState({ a: 0, b: 0, answer: "" });
  const [userAnswer, setUserAnswer] = useState("");
  const [captchaValid, setCaptchaValid] = useState(false);
  const [loading, setLoading] = useState(false);

  // تولید کپچای ضد ربات
  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 89) + 10;
    const b = Math.floor(Math.random() * 89) + 10;
    setCaptcha({ a, b, answer: (a + b).toString() });
    setUserAnswer("");
    setCaptchaValid(false);
  };

  useEffect(() => {
    if (role) generateCaptcha();
  }, [role]);

  useEffect(() => {
    if (userAnswer && parseInt(userAnswer) === parseInt(captcha.answer)) {
      setCaptchaValid(true);
    } else {
      setCaptchaValid(false);
    }
  }, [userAnswer, captcha.answer]);

  const validatePhone = (num) => /^09[0-9]{9}$/.test(num);

  const handleSendOTP = () => {
    if (!validatePhone(phone)) {
      alert("شماره نامعتبر! مثلاً: 09123456789");
      return;
    }
    if (!captchaValid) {
      alert("لطفاً کپچا را درست حل کنید!");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      localStorage.setItem("pending_phone", phone);
      localStorage.setItem("user_role", role);

      alert(`کد تأیید برای ${phone} ارسال شد: 123456`);
      window.location.href = "/auth/verify";
      setLoading(false);
    }, 1200);
  };

  // صفحه اول — انتخاب نقش (آرایشگر یا کاربر)
  if (!role) {
    return (
      <>
        <div className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 80%, #dbb91e 0%, transparent 40%), radial-gradient(circle at 80% 20%, #f59e0b 0%, transparent 40%)",
                backgroundSize: "800px 800px",
                animation: "float 25s ease-in-out infinite",
              }}
            />
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
                className="group relative bg-white/10 backdrop-blur-xl border-2 border-[#dbb91e]/50 rounded-3xl p-10 overflow-hidden hover:border-[#dbb91e]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#dbb91e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Scissors className="w-16 h-16 mx-auto mb-6 text-[#dbb91e] group-hover:rotate-12 transition-transform" />
                <h3 className="text-2xl font-bold text-white mb-2">آرایشگر</h3>
                <p className="text-white/70">مدیریت نوبت‌ها و مشتریان</p>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setRole("client")}
                className="group relative bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-3xl p-10 overflow-hidden hover:border-yellow-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <User className="w-16 h-16 mx-auto mb-6 text-yellow-500 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-white mb-2">کاربر</h3>
                <p className="text-white/70">رزرو نوبت و پروفایل شخصی</p>
              </motion.button>
            </div>

            {/* دکمه بازگشت به صفحه اصلی — دقیقاً زیر دو تا دکمه */}
            <div className="mt-16">
              <Link
                href="/"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#dbb91e] to-[#b8961e] text-black font-bold text-xl rounded-2xl hover:shadow-2xl hover:shadow-[#dbb91e]/50 transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                بازگشت به صفحه اصلی
              </Link>
            </div>
          </motion.div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-30px) rotate(2deg); }
          }
        `}</style>
      </>
    );
  }

  // صفحه دوم — وارد کردن شماره موبایل (دکمه بازگشت نداره)
  return (
    <>
      <div className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">
        {/* بقیه کد صفحه شماره موبایل بدون هیچ تغییری */}
        {/* (همون کد قبلیت — بدون دکمه بازگشت) */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 70%, #dbb91e 0%, transparent 50%), radial-gradient(circle at 70% 30%, #f59e0b 0%, transparent 50%)",
              animation: "float 20s ease-in-out infinite",
            }}
          />
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
          <p className="text-center text-white/70 mb-8">شماره موبایل و کپچا را وارد کنید</p>

          {/* شماره موبایل + کپچا + ارسال — بدون دکمه بازگشت */}
          {/* (کد کاملاً همون قبلیه) */}
          {/* ... تمام کدهای قبلی صفحه شماره موبایل ... */}

          <div className="flex items-center bg-white/10 border-2 border-[#dbb91e]/40 rounded-2xl shadow-lg focus-within:border-[#dbb91e] focus-within:ring-4 focus-within:ring-[#dbb91e]/20 transition-all mb-6">
            <Phone className="w-6 h-6 text-[#dbb91e] mx-4" />
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 11))}
              placeholder="09123456789"
              className="w-full p-4 bg-transparent text-white placeholder-white/50 focus:outline-none text-lg"
              maxLength="11"
            />
            <span className="text-[#dbb91e] font-bold px-4">IR</span>
          </div>

          {/* کپچای کامل (همون قبلی) */}
          <div className="relative bg-white/10 backdrop-blur-xl border border-[#dbb91e]/40 rounded-2xl p-6 mb-6 overflow-hidden">
            {/* ... همه کدهای کپچا ... */}
            <div className="relative flex items-center justify-center gap-5 mb-5 py-3">
              <span className="text-5xl font-black text-[#dbb91e] tracking-wider"
                    style={{ transform: `rotate(${Math.random() * 12 - 6}deg)`, textShadow: "2px 2px 8px rgba(0,0,0,0.5)" }}>
                {captcha.a}
              </span>
              <span className="text-4xl font-bold text-yellow-400">+</span>
              <span className="text-5xl font-black text-orange-400 tracking-wider"
                    style={{ transform: `rotate(${Math.random() * 12 - 6}deg)`, textShadow: "2px 2px 8px rgba(0,0,0,0.5)" }}>
                {captcha.b}
              </span>
              <span className="text-4xl font-bold text-yellow-500">=</span>
              <div className="w-24 h-14 bg-white/20 rounded-xl border-2 border-dashed border-[#dbb91e]/70 flex items-center justify-center">
                <span className="text-4xl font-bold text-white/80">؟</span>
              </div>
            </div>

            <div className="relative mt-4">
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value.replace(/\D/g, ""))}
                placeholder="جواب را اینجا بنویسید"
                className="w-full px-6 py-5 bg-white/10 rounded-xl text-white placeholder-white/40 text-center text-2xl font-bold focus:outline-none focus:ring-4 focus:ring-[#dbb91e]/40 transition-all"
                maxLength="3"
              />
              {captchaValid && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  className="absolute -top-4 -right-4 bg-green-500 text-white text-sm font-bold rounded-full px-4 py-2 shadow-2xl"
                >
                  درست است
                </motion.div>
              )}
            </div>

            <button
              onClick={generateCaptcha}
              className="absolute top-5 right-5 text-[#dbb91e] hover:text-yellow-400 transition-all hover:rotate-180 duration-700"
            >
              <RefreshCw className="w-7 h-7" />
            </button>
          </div>

          <motion.button
            whileHover={{ scale: captchaValid && phone.length === 11 ? 1.03 : 1 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSendOTP}
            disabled={loading || phone.length !== 11 || !captchaValid}
            className={`w-full py-5 rounded-2xl font-bold text-xl shadow-2xl flex items-center justify-center gap-3 transition-all duration-300 ${
              captchaValid && phone.length === 11
                ? "bg-gradient-to-r from-[#dbb91e] to-yellow-500 text-black hover:from-yellow-500 hover:to-orange-500"
                : "bg-gray-700 text-gray-500 cursor-not-allowed"
            }`}
          >
            {loading ? "در حال ارسال..." : "ارسال کد تأیید"}
            {!loading && <Send className="w-6 h-6" />}
          </motion.button>

          <button
            onClick={() => setRole(null)}
            className="mt-6 text-white/60 hover:text-white transition-colors text-sm block mx-auto"
          >
            تغییر نقش
          </button>

          <p className="text-xs text-center text-white/50 mt-8 bg-white/5 px-4 py-3 rounded-xl">
            دمو: کد تأیید همیشه <span className="font-bold text-[#dbb919]">123456</span>
          </p>

          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#dbb91e]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-yellow-600/20 rounded-full blur-3xl animate-pulse" />
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(1.5deg); }
        }
      `}</style>
    </>
  );
}