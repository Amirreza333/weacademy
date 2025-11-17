"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Crown } from "lucide-react";
import api from "../../lib/axios";

export default function TopUsers() {
  const [coins, setCoins] = useState([]);

  // 10 آرایشگر برتر

  const [artists, SetArtists] = useState([]);
  const [loading, SetLoading] = useState(true);

  // سکه از بالا می‌ریزه روی هر سکه امتیاز
  const dropCoin = (userId, coinIndex) => {
    const newCoin = {
      id: Date.now() + Math.random(),
      userId,
      coinIndex,
      x: 20 + coinIndex * 28 + (Math.random() * 16 - 8), // وسط سکه + لرزش
    };
    setCoins((prev) => [...prev, newCoin]);
    setTimeout(
      () => setCoins((prev) => prev.filter((c) => c.id !== newCoin.id)),
      1800
    );
  };

  // هر 1.2 ثانیه برای TOP 5
  useEffect(() => {
    if (artists.length === 0) return;

    const interval = setInterval(() => {
      const top5 = artists.slice(0, 5);
      if (top5.length === 0) return; 

      const randomUser = top5[Math.floor(Math.random() * top5.length)];
      if (!randomUser || !randomUser.score) return; 

      const filledCoins = Math.floor(randomUser.score);
      if (filledCoins <= 0) return; 

      const randomIndex = Math.floor(Math.random() * filledCoins);
      dropCoin(randomUser.id, randomIndex);
    }, 1200);

    return () => clearInterval(interval);
  }, [artists]);
  useEffect(() => {
    api
      .get("/topArtists")
      .then((res) => {
        SetArtists(res.data);
        SetLoading(false);
      })
      .catch(() => SetLoading(false));
  }, []);
  if (loading)
    return (
      <div className="text-amber-500 text-center py-20">در حال بارگذاری...</div>
    );
  return (
    <>
      <section className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
        {/* پس‌زمینه طلایی نرم */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute top-0 w-full h-48 bg-gradient-to-b from-[#dbb91e]/5 to-transparent blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* عنوان */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-[#E8C56A] via-[#D4AFF7] to-[#B8961E] bg-clip-text text-transparent mb-12"
          >
            برترین آرایشگران
          </motion.h1>

          {/* لیست فشرده */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {artists.map((artist, index) => {
              const filled = Math.floor(artist.score);
              const decimal = (artist.score % 1).toFixed(1);

              return (
                <motion.div
                  key={artist.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="relative bg-gradient-to-br from-[#111]/80 to-[#0a0a0a] rounded-2xl p-5 border border-[#dbb91e]/20 backdrop-blur-xl shadow-xl hover:border-[#dbb91e]/60 transition-all"
                >
                  {/* رتبه */}
                  {index === 0 && (
                    <Crown className="absolute -top-3 -right-3 w-8 h-8 text-[#dbb91e] animate-pulse" />
                  )}
                  {index < 3 && (
                    <div className="absolute top-2 left-2 bg-[#dbb91e] text-black text-xs font-bold px-2 py-1 rounded-full">
                      TOP {index + 1}
                    </div>
                  )}

                  {/* آواتار */}
                  <div className="flex justify-center mb-4">
                    <div className="relative w-20 h-20">
                      <div className="absolute inset-0 bg-[#dbb91e]/30 rounded-full blur-xl"></div>
                      <Image
                        src={artist.avatar}
                        alt={artist.name}
                        width={80}
                        height={80}
                        className="relative rounded-full object-cover border-3 border-[#dbb91e]/40"
                      />
                    </div>
                  </div>

                  {/* نام و شهر */}
                  <h3 className="text-lg font-bold text-center text-white">
                    {artist.name}
                  </h3>
                  <p className="text-xs text-gray-400 text-center">
                    {artist.city} • {artist.specialty}
                  </p>

                  {/* امتیاز با سکه */}
                  <div className="relative flex justify-center items-end gap-1 mt-5 h-10">
                    {[...Array(20)].map((_, i) => (
                      <div key={i} className="relative w-6 h-6">
                        {/* سکه اصلی */}
                        <motion.div
                          initial={{ scale: 0, y: -20 }}
                          animate={{ scale: i < filled ? 1 : 0.4, y: 0 }}
                          transition={{ delay: i * 0.03 }}
                          className={`absolute inset-0 rounded-full shadow-md ${
                            i < filled
                              ? "bg-gradient-to-br from-[#E8C56A] to-[#B8961E] shadow-[#dbb91e]/60"
                              : "bg-gray-700"
                          }`}
                        />

                        {/* سکه در حال ریختن */}
                        <AnimatePresence>
                          {coins
                            .filter(
                              (c) => c.userId === artist.id && c.coinIndex === i
                            )
                            .map((coin) => (
                              <motion.div
                                key={coin.id}
                                initial={{
                                  y: -80,
                                  x: coin.x,
                                  opacity: 1,
                                  rotate: 0,
                                }}
                                animate={{ y: 0, opacity: 0, rotate: 720 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5, ease: "easeIn" }}
                                className="absolute w-6 h-6 bg-gradient-to-br from-[#E8C56A] to-[#B8961E] rounded-full shadow-lg shadow-[#dbb91e]/60"
                                style={{ left: coin.x }}
                              />
                            ))}
                        </AnimatePresence>

                        {/* اعشار */}
                        {i === filled - 1 && decimal > 0 && (
                          <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-bold text-[#dbb91e]">
                            .{decimal}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* امتیاز عددی */}
                  <div className="text-center mt-3">
                    <span className="text-sm font-bold text-[#dbb91e]">
                      {artist.score.toFixed(1)} / 20
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
