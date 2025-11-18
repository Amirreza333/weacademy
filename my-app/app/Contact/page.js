// app/contact/page.js
"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, Home, Sparkles, Instagram } from "lucide-react";
import { useState } from "react";
export default function Contact() {
  const [hovered, setHovered] = useState(null);

  const contacts = [
    {
      name: "خانه",
      icon: <Home className="w-7 h-7" />,
      href: "/",
      gradient: "from-amber-500 to-yellow-600",
      glow: "shadow-amber-500/50",
    },
    {
      name: "اینستاگرام",
      icon: <Instagram className="w-7 h-7" />,
      href: "mailto:hello@yourdomain.com",
      gradient: "from-pink-500 to-rose-600",
      glow: "shadow-pink-500/50",
    },
    {
      name: "واتس‌اپ",
      icon: <MessageCircle className="w-7 h-7" />,
      href: "https://wa.me/989123456789",
      gradient: "from-emerald-500 to-teal-600",
      glow: "shadow-emerald-500/50",
    },
    {
      name: "تلگرام",
      icon: <Send className="w-7 h-7" />,
      href: "https://t.me/yourusername",
      gradient: "from-cyan-500 to-blue-600",
      glow: "shadow-cyan-500/50",
    },
  ];

  return (
    <>
      {/* پس‌زمینه لوکس با گرادیانت متحرک */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(255, 215, 0, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 20%, rgba(34, 211, 238, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
      </div>

      <div className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="text-center space-y-16">
          {/* عنوان با افکت گلو طلایی */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter">
              <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                ارتباط با ما
              </span>
            </h1>
            <motion.div
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -inset-x-32 -inset-y-8 bg-amber-500/20 rounded-full blur-3xl -z-10 left-1/2 -translate-x-1/2"
            />
            <p className="mt-6 text-zinc-400 text-lg md:text-xl font-light tracking-wide">
              هر زمان که آماده بودید، ما اینجاییم
            </p>
          </motion.div>

          {/* کارت‌های ارتباطی معلق با افکت شیشه‌ای و گلو */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto">
            {contacts.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                className="group relative"
              >
                {/* کارت اصلی با شیشه مات */}
                <div className="relative p-10 md:p-12 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden transition-all duration-500 group-hover:border-white/30">
                  {/* گرادیانت هاور */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700`}
                  />

                  {/* گلو هنگام هاور */}
                  <motion.div
                    animate={hovered === i ? { scale: 1.4, opacity: 0.6 } : { scale: 0, opacity: 0 }}
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} blur-3xl ${item.glow}`}
                  />

                  {/* آیکون */}
                  <motion.div
                    animate={hovered === i ? { scale: 1.2, rotate: 360 } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 text-white"
                  >
                    {item.icon}
                  </motion.div>

                  {/* نام */}
                  <p className="mt-6 text-zinc-300 text-sm md:text-base font-medium tracking-wider">
                    {item.name}
                  </p>
                </div>

                {/* اسپارکِل کوچک هنگام هاور */}
                {hovered === i && (
                  <Sparkles className="absolute -top-3 -right-3 w-8 h-8 text-amber-400 animate-pulse" />
                )}
              </motion.a>
            ))}
          </div>

          {/* متن پایین صفحه (دسکتاپ) */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="hidden md:block text-zinc-500 text-sm tracking-widest"
          >
            © 2025 • با افتخار ساخته شده
          </motion.p>
        </div>
      </div>
    </>
  );
}