// components/DashboardHeader.js
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function DashboardHeader({ phone }) {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie =
      "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; Secure; SameSite=Strict";
    router.push("/auth/login");
  };

  return React.createElement(
    "header",
    {
      className:
        "bg-white/5 backdrop-blur-xl border-b border-[#dbb91e]/30 shadow-2xl",
    },
    React.createElement(
      "div",
      {
        className:
          "container mx-auto px-6 py-5 flex justify-between items-center",
      },

      // بخش خوش آمدید
      React.createElement(
        "div",
        { className: "flex items-center gap-4" },
        // آواتار طلایی
        React.createElement(
          "div",
          {
            className:
              "w-14 h-14 bg-gradient-to-br from-[#dbb91e] to-yellow-600 rounded-full flex items-center justify-center shadow-xl",
          },
          React.createElement(
            "span",
            { className: "text-black text-xl font-bold" },
            "آ"
          )
        ),
        // متن خوش‌آمدگویی
        React.createElement(
          "div",
          null,
          React.createElement(
            "h1",
            { className: "text-2xl font-bold text-[#dbb91e] drop-shadow-md" },
            "خوش آمدید!"
          ),
          React.createElement(
            "p",
            { className: "text-white/70 text-sm mt-1" },
            phone
          )
        )
      ),

      // دکمه‌های سمت چپ: لیست آرایشگران + خروج
      React.createElement(
        "div",
        { className: "flex items-center gap-4" },

        // دکمه لیست آرایشگران (جدید — کاملاً طلایی و خفن)
        // React.createElement(
        //   Link,
        //   {
        //     href: "/BeautySalonFinder",
        //     className:
        //       "bg-gradient-to-r from-[#dbb91e]/20 to-yellow-600/20 hover:from-[#dbb91e]/30 hover:to-yellow-600/30 border border-[#dbb91e]/50 text-[#dbb91e] px-7 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg backdrop-blur-md flex items-center gap-2",
        //   },
        //   React.createElement("span", null, "لیست آرایشگران")
        // ),

        // دکمه خروج
        React.createElement(
          "button",
          {
            onClick: handleLogout,
            className:
              "bg-gradient-to-r from-[#dbb91e] to-yellow-600 hover:from-yellow-600 hover:to-orange-600 text-black px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg",
          },
          "خروج"
        )
      )
    )
  );
}
