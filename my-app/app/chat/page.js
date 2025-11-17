// app/chat/page.js
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Send, MessageCircle, X, Users, Clock, Search, Smile, Paperclip, Image as ImageIcon, CheckCircle, Sparkles, ThumbsUp, Reply } from 'lucide-react';
import { format } from 'date-fns';
import { faIR } from 'date-fns/locale';

export default function BeautyChat() {
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      sender: 'مریم مرادی', 
      text: 'دخترا! امروز یه مدل جدید شینیون کار کردم، عکسشو میذارم ببینید', 
      time: new Date(Date.now() - 20 * 60 * 1000), 
      isMe: false, 
      avatar: 'مریم', 
      image: '/sample/shinion1.jpg',
      likes: 12,
      replies: 3
    },
    { 
      id: 2, 
      sender: 'نازنین شینیون', 
      text: 'وای چه خوشگل! از چه تکنیکی استفاده کردی؟', 
      time: new Date(Date.now() - 15 * 60 * 1000), 
      isMe: false, 
      avatar: 'نازنین',
      replyTo: 1
    },
    { 
      id: 3, 
      sender: 'شما', 
      text: 'منم دیروز یه بالیاژ طلایی زدم، مشتری عاشقش شد!', 
      time: new Date(Date.now() - 10 * 60 * 1000), 
      isMe: true,
      image: '/sample/balyage.jpg',
      likes: 8
    },
  ]);
  const [input, setInput] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [replyTo, setReplyTo] = useState(null);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  const onlineArtists = [
    { name: 'مریم مرادی', specialty: 'میک', online: true },
    { name: 'نازنین شینیون', specialty: 'شینیون VIP', online: true },
    { name: 'فاطمه کراتین', specialty: 'کراتین اصل', online: false, lastSeen: '10 دقیقه پیش' },
    { name: 'سحر کالریست', specialty: 'بالیاژ حرفه‌ای', online: true },
    { name: 'لیلا ناخن', specialty: 'کاشت ژلیش', online: true },
    { name: 'زهرا لیزر', specialty: 'لیزر الکس', online: false, lastSeen: '2 ساعت پیش' },
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim() && !selectedImage) return;

    const newMsg = {
      id: messages.length + 1,
      sender: 'شما',
      text: input,
      time: new Date(),
      isMe: true,
      image: selectedImage,
      likes: 0,
      replies: 0,
      replyTo: replyTo?.id
    };
    setMessages([...messages, newMsg]);
    setInput('');
    setSelectedImage(null);
    setReplyTo(null);

    // شبیه‌سازی پاسخ
    setTimeout(() => {
      const replies = ['عالی بود!', 'منم امتحانش می‌کنم', 'چه ایده قشنگی!', 'وای چقدر خوشگله'];
      const randomReply = replies[Math.floor(Math.random() * replies.length)];
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        sender: onlineArtists[Math.floor(Math.random() * 3)].name,
        text: randomReply,
        time: new Date(),
        isMe: false,
        avatar: 'random',
        replyTo: newMsg.id
      }]);
    }, 2000);
  };

  const getAvatar = (name) => {
    const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2);
    return (
      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center text-black font-bold text-sm shadow-md">
        {initials}
      </div>
    );
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setSelectedImage(ev.target.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-black/50 flex items-center justify-center p-4">
      <div className="w-full max-w-7xl h-[88vh] bg-[#0e121c]/95 backdrop-blur-3xl rounded-3xl overflow-hidden border border-[#dbb91e]/60 shadow-2xl flex flex-col md:flex-row">
        
        {/* سایدبار — آرایشگران آنلاین */}
        <div className="w-full md:w-80 bg-black/50 border-l border-[#dbb91e]/30 flex flex-col">
          <div className="p-5 border-b border-[#dbb91e]/30">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-black bg-gradient-to-r from-[#E8C56A] to-[#B8961E] bg-clip-text text-transparent flex items-center gap-2">
                <Sparkles className="w-6 h-6" />
                جامعه آرایشگران
              </h2>
              <div className="flex items-center gap-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-bold">{onlineArtists.filter(u => u.online).length} نفر</span>
              </div>
            </div>
            <div className="text-yellow-300/80 text-sm">به اشتراک‌گذاری ایده، عکس و تجربه</div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {onlineArtists.map((artist) => (
              <div key={artist.name} className="p-4 border-b border-[#dbb91e]/10 hover:bg-white/5 transition-all">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    {getAvatar(artist.name)}
                    {artist.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-black animate-pulse"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-yellow-300 text-sm">{artist.name}</h3>
                    <p className="text-xs text-yellow-200/70">{artist.specialty}</p>
                    {!artist.online && (
                      <p className="text-xs text-yellow-400/50 flex items-center gap-1 mt-1">
                        <Clock className="w-3 h-3" />
                        {artist.lastSeen}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* چت اصلی */}
        <div className="flex-1 flex flex-col">
          {/* هدر */}
          <div className="p-5 border-b border-[#dbb91e]/30 bg-gradient-to-b from-black/60 to-transparent">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-black text-yellow-300">چت گروهی آرایشگران</h3>
                <p className="text-sm text-yellow-200/70">همه می‌تونن نظر بدن و عکس بفرستن</p>
              </div>
              <MessageCircle className="w-7 h-7 text-yellow-400 animate-pulse" />
            </div>
          </div>

          {/* پیام‌ها */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'} group`}
              >
                <div className={`flex gap-3 max-w-xs lg:max-w-lg ${msg.isMe ? 'flex-row-reverse' : ''}`}>
                  {!msg.isMe && <div className="flex-shrink-0">{getAvatar(msg.sender)}</div>}
                  <div className="space-y-1">
                    {/* پاسخ به پیام قبلی */}
                    {msg.replyTo && (
                      <div className="text-xs text-yellow-400/70 bg-black/30 rounded-lg p-2 mb-1 border-l-2 border-yellow-400">
                        پاسخ به: {messages.find(m => m.id === msg.replyTo)?.text.slice(0, 30)}...
                      </div>
                    )}
                    {/* پیام */}
                    <div
                      className={`rounded-2xl px-4 py-3 shadow-lg transition-all ${
                        msg.isMe
                          ? 'bg-gradient-to-r from-[#dbb91e] to-[#B8961E] text-black font-medium'
                          : 'bg-white/10 text-yellow-200 border border-[#dbb91e]/20'
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      {msg.image && (
                        <img src={msg.image} alt="عکس" className="mt-3 rounded-xl max-w-full shadow-md" />
                      )}
                    </div>
                    {/* لایک و پاسخ */}
                    <div className="flex items-center gap-3 text-xs text-yellow-400/70">
                      <button className="flex items-center gap-1 hover:text-yellow-300 transition-colors">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{msg.likes}</span>
                      </button>
                      <button 
                        onClick={() => setReplyTo(msg)}
                        className="flex items-center gap-1 hover:text-yellow-300 transition-colors"
                      >
                        <Reply className="w-4 h-4" />
                        <span>پاسخ</span>
                      </button>
                      <span>{format(msg.time, 'HH:mm', { locale: faIR })}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* ورودی پیام */}
          <div className="p-4 bg-black/60 border-t border-[#dbb91e]/30">
            {/* نمایش پاسخ به */}
            {replyTo && (
              <div className="mb-3 p-3 bg-white/5 rounded-xl border border-yellow-400/30 text-sm text-yellow-300 flex items-center justify-between">
                <span>پاسخ به: {replyTo.text.slice(0, 40)}...</span>
                <button onClick={() => setReplyTo(null)} className="text-yellow-400 hover:text-red-400">
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
            {/* آپلود عکس */}
            {selectedImage && (
              <div className="mb-3 relative inline-block">
                <img src={selectedImage} alt="پیش‌نمایش" className="h-24 rounded-xl shadow-lg" />
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-1 right-1 bg-black/70 p-1 rounded-full text-yellow-400 hover:text-red-400"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
            <div className="flex items-center gap-3">
              <input type="file" ref={fileInputRef} onChange={handleImageUpload} accept="image/*" className="hidden" />
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                <ImageIcon className="w-6 h-6" />
              </button>
              <button className="text-yellow-400 hover:text-yellow-300 transition-colors">
                <Smile className="w-6 h-6" />
              </button>
              <input
                type="text"
                placeholder="ایده، عکس یا نظرت رو به اشتراک بذار..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()}
                className="flex-1 px-5 py-3 bg-white/5 border border-[#dbb91e]/30 rounded-xl text-white placeholder-yellow-400/50 focus:border-[#dbb91e] focus:ring-2 focus:ring-[#dbb91e]/20 transition-all"
              />
              <button
                onClick={sendMessage}
                className="bg-gradient-to-r from-[#dbb91e] to-[#B8961E] p-3 rounded-xl text-black font-bold hover:scale-110 transition-all shadow-lg"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}