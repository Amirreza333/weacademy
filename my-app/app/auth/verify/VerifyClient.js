// app/auth/verify/VerifyClient.js
"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Scissors, User, Send } from "lucide-react";
import { motion } from "framer-motion";

// تبدیل عدد انگلیسی به فارسی
const toPersianDigits = (str) => {
  const persian = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return str.replace(/[0-9]/g, (w) => persian[+w]);
};

export default function VerifyClient() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef([]);

  const searchParams = useSearchParams();
  const router = useRouter();

  const phone =
    searchParams.get("phone") || localStorage.getItem("pending_phone") || "";
  const userRole = localStorage.getItem("user_role") || "client";

  useEffect(() => {
    if (!phone) router.push("/auth/login");
  }, [phone, router]);

  const handleVerify = () => {
    const code = otp.join("");
    if (code !== "123456") {
      alert("کد تأیید اشتباه است!");
      setOtp(["", "", "", "", "", ""]);
      inputRefs.current[0]?.focus();
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const phone = localStorage.getItem("pending_phone");
      const role = localStorage.getItem("user_role") || "client";

      // بررسی وجود کاربر
      const existingUser = localStorage.getItem(`user_${phone}`);

      // همیشه توکن بده
      document.cookie = `auth_token=${btoa(
        phone + Date.now()
      )}; path=/; max-age=2592000; Secure; SameSite=Strict`;
      localStorage.setItem("user_role", role);
      localStorage.removeItem("pending_phone");

      if (existingUser) {
        alert("خوش آمدید!");
        window.location.href =
          role === "stylist" ? "/Dashboard" : "/Dashboard-client";
      } else {
        localStorage.setItem("temp_phone", phone);
        alert("خوش آمدید! لطفاً اطلاعات خود را تکمیل کنید");
        window.location.href = "/auth/register-info";
      }

      setLoading(false);
    }, 1200);
  };

  const handleChange = (index, value) => {
    if (!/^\d$/.test(value) && value !== "") return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
    if (e.key === "ArrowLeft" && index > 0) {
      e.preventDefault();
      inputRefs.current[index - 1].focus();
    }
    if (e.key === "ArrowRight" && index < 5) {
      e.preventDefault();
      inputRefs.current[index + 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    if (!pasted) return;

    const newOtp = [...otp];
    pasted.split("").forEach((char, i) => {
      if (i < 6) newOtp[i] = char;
    });
    setOtp(newOtp);

    const next = pasted.length < 6 ? pasted.length : 5;
    inputRefs.current[next]?.focus();
  };

  if (!phone) return null;

  return (
    <>
      <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 80%, #dbb91e 0%, transparent 50%), radial-gradient(circle at 80% 20%, #f59e0b 0%, transparent 50%)",
              backgroundSize: "700px 700px",
              animation: "float 22s ease-in-out infinite",
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-md border border-white/20"
        >
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#dbb91e] to-yellow-500 rounded-t-3xl" />

          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-[#dbb91e] to-yellow-600 rounded-full flex items-center justify-center shadow-2xl ring-8 ring-[#dbb91e]/30"
          >
            {userRole === "stylist" ? (
              <Scissors className="w-12 h-12 text-black" />
            ) : (
              <User className="w-12 h-12 text-black" />
            )}
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-black text-center bg-gradient-to-r from-[#dbb91e] via-yellow-400 to-amber-600 bg-clip-text text-transparent mb-4">
            تأیید هویت
          </h1>

          <p className="text-center text-white/80 mb-10 text-lg">
            کد ۶ رقمی ارسال شده به
            <span className="block mt-2 text-2xl font-bold text-[#dbb91e] tracking-wider">
              {toPersianDigits(phone)}
            </span>
          </p>

          <div className="mb-12">
            <div className="flex justify-center gap-3 md:gap-4">
              {otp.map((digit, index) => (
                <div
                  key={index}
                  className="relative w-12 h-14 md:w-14 md:h-16 bg-white/10 border-2 border-[#dbb91e]/40 rounded-2xl focus-within:border-[#dbb91e] focus-within:ring-4 focus-within:ring-[#dbb91e]/20 transition-all duration-300 backdrop-blur-sm"
                >
                  <input
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onPaste={index === 0 ? handlePaste : undefined}
                    onFocus={(e) => e.target.select()}
                    className="absolute inset-0 w-full h-full bg-transparent text-center outline-none opacity-0 z-10 caret-transparent"
                    style={{ direction: "ltr" }}
                    autoComplete="off"
                  />

                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-3xl md:text-4xl font-bold text-white">
                      {digit ? toPersianDigits(digit) : ""}
                    </span>
                  </div>

                  {digit && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#dbb91e] to-yellow-500 rounded-b-2xl"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: otp.join("").length === 6 ? 1.03 : 1 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleVerify}
            disabled={loading || otp.join("").length !== 6}
            className={`w-full py-5 rounded-2xl font-bold text-xl shadow-2xl flex items-center justify-center gap-3 transition-all duration-300 ${
              otp.join("").length === 6
                ? "bg-gradient-to-r from-[#dbb91e] to-yellow-500 text-black hover:from-yellow-500 hover:to-orange-500"
                : "bg-gray-800 text-gray-600 cursor-not-allowed"
            }`}
          >
            {loading ? "در حال تأیید..." : "تأیید و ادامه"}
            {!loading && <Send className="w-6 h-6" />}
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center text-white/60 mt-10 text-sm bg-white/10 px-6 py-4 rounded-2xl backdrop-blur-sm"
          >
            دمو: کد تأیید همیشه{" "}
            <span className="font-bold text-[#dbb91e] text-lg">۱۲۳۴۵۶</span>
          </motion.p>

          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#dbb91e]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-yellow-600/20 rounded-full blur-3xl animate-pulse" />
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(2deg);
          }
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type="number"] {
          -moz-appearance: textfield;
        }
      `}</style>
    </>
  );
}
