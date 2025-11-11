"use client";
import { useState } from "react";
import BubbleMenu from "../../public/Animation/BubbleMenu";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Mail, MessageCircle, Send } from "lucide-react";
import TextType from "../../public/Animation/TextType";


function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const items = [
    {
      label: <Home className="w-7 h-7" />,
      href: "/",
      ariaLabel: "Home",
      rotation: -8,
      hoverStyles: { bgColor: "#3b82f6", textColor: "#ffffff" },
    },
    {
      label: <Mail className="w-7 h-7" />,
      href: "mailto:hello@example.com",
      ariaLabel: "Email",
      rotation: -4,
      hoverStyles: { bgColor: "#ef4444", textColor: "#ffffff" },
    },
    {
      label: <MessageCircle className="w-7 h-7" />,
      href: "https://wa.me/1234567890",
      ariaLabel: "WhatsApp",
      rotation: 4,
      hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" },
    },
    {
      label: <Send className="w-7 h-7" />,
      href: "https://t.me/yourusername",
      ariaLabel: "Telegram",
      rotation: 8,
      hoverStyles: { bgColor: "#0ea5e9", textColor: "#ffffff" },
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
 
      <BubbleMenu
        logo={
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-2xl font-bold text-black"
          >
            ارتباط با ما
          </motion.span>
        }
        items={items}
        menuAriaLabel="Contact menu"
        menuBg="#fff"
        menuContentColor="#000"
        useFixedPosition={false}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
        onToggle={(open) => setIsMenuOpen(open)}
      />

  
      <AnimatePresence mode="wait">
        {!isMenuOpen && (
          <motion.div
            key="unique-text-type-key"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
          >
            <div className="text-center md:hidden">
              <TextType
                key="reset-typing-animation"
                text={[
                  "با ما در ارتباط باشید",
                  "از طریق ایمیل، اینستاگرام و...",
                ]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Contact;
