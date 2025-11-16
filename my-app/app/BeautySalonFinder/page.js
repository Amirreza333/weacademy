"use client";

import { useState, useMemo, useEffect } from "react";
import {
  MapPin,
  Scissors,
  Star,
  Instagram,
  CheckCircle,
  Sparkles,
  Search,
} from "lucide-react";

// تمام ۳۱ استان + شهرهای اصلی (کامل)
const iranData = {
  "آذربایجان شرقی": [
    "تبریز",
    "مراغه",
    "مرند",
    "میانه",
    "بناب",
    "سراب",
    "اهر",
    "جلفا",
    "عجب‌شیر",
    "هشترود",
    "بستان‌آباد",
    "کلیبر",
    "اسکو",
    "آذرشهر",
    "ملکان",
    "شبستر",
    "هریس",
    "ورزقان",
  ],
  "آذربایجان غربی": [
    "ارومیه",
    "خوی",
    "مهاباد",
    "بوکان",
    "میاندوآب",
    "سلماس",
    "پیرانشهر",
    "نقده",
    "ماکو",
    "شاهین‌دژ",
    "تکاب",
    "چالدران",
    "شوط",
    "پلدشت",
    "سردشت",
  ],
  اردبیل: [
    "اردبیل",
    "پارس‌آباد",
    "مشگین‌شهر",
    "خلخال",
    "گرمی",
    "نمین",
    "بیله‌سوار",
    "سرعین",
    "نیر",
    "هیر",
  ],
  اصفهان: [
    "اصفهان",
    "کاشان",
    "خمینی‌شهر",
    "نجف‌آباد",
    "شهرضا",
    "فلاورجان",
    "مبارکه",
    "گلپایگان",
    "شاهین‌شهر",
    "زرین‌شهر",
    "فولادشهر",
    "آران و بیدگل",
    "خوانسار",
    "سمیرم",
    "لنجان",
    "دهاقان",
    "نطنز",
  ],
  البرز: [
    "کرج",
    "فردیس",
    "کمالشهر",
    "هشتگرد",
    "نظرآباد",
    "محمدشهر",
    "گوهردشت",
    "ماهدشت",
    "طالقان",
    "چهارباغ",
    "اشتهارد",
  ],
  ایلام: [
    "ایلام",
    "ایوان",
    "دره‌شهر",
    "آبدانان",
    "مهران",
    "دهلران",
    "چوار",
    "بدره",
  ],
  بوشهر: [
    "بوشهر",
    "برازجان",
    "کنگان",
    "دیر",
    "گناوه",
    "دشتی",
    "تنگستان",
    "جم",
    "عسلویه",
    "دلوار",
    "خورموج",
  ],
  تهران: [
    "تهران",
    "اسلامشهر",
    "شهریار",
    "قدس",
    "ورامین",
    "ری",
    "پاکدشت",
    "قرچک",
    "ملارد",
    "رباط‌کریم",
    "پیشوا",
    "بهارستان",
    "دماوند",
    "فیروزکوه",
    "شمیرانات",
    "پردیس",
  ],
  "چهارمحال و بختیاری": [
    "شهرکرد",
    "بروجن",
    "فارسان",
    "لردگان",
    "اردل",
    "چلگرد",
    "سامان",
    "بن",
    "کیار",
    "کوهرنگ",
  ],
  "خراسان جنوبی": [
    "بیرجند",
    "قاین",
    "فردوس",
    "طبس",
    "نهبندان",
    "سرایان",
    "بشرویه",
  ],
  "خراسان رضوی": [
    "مشهد",
    "نیشابور",
    "سبزوار",
    "تربت حیدریه",
    "کاشمر",
    "گناباد",
    "تربت جام",
    "تایباد",
    "خواف",
    "چناران",
    "فریمان",
    "درگز",
    "قوچان",
    "طرقبه و شاندیز",
    "سرخس",
  ],
  "خراسان شمالی": [
    "بجنورد",
    "شیروان",
    "اسفراین",
    "جاجرم",
    "گرمه",
    "آشخانه",
    "فاروج",
    "مانه و سملقان",
  ],
  خوزستان: [
    "اهواز",
    "دزفول",
    "آبادان",
    "خرمشهر",
    "بندر ماهشهر",
    "اندیمشک",
    "شوشتر",
    "بهبهان",
    "شادگان",
    "رامهرمز",
    "ایذه",
    "بندر امام",
    "هندیجان",
    "سوسنگرد",
    "شوش",
  ],
  زنجان: [
    "زنجان",
    "ابهر",
    "خرمدره",
    "قیدار",
    "طارم",
    "ماه‌نشان",
    "ایجرود",
    "زرین‌آباد",
  ],
  سمنان: [
    "سمنان",
    "شاهرود",
    "دامغان",
    "گرمسار",
    "مهدیشهر",
    "میامی",
    "آرادان",
    "سرخه",
  ],
  "سیستان و بلوچستان": [
    "زاهدان",
    "زابل",
    "چابهار",
    "ایرانشهر",
    "سراوان",
    "نیک‌شهر",
    "کنارک",
    "خاش",
    "سرباز",
    "راسک",
    "میرجاوه",
  ],
  فارس: [
    "شیراز",
    "مرودشت",
    "کازرون",
    "جهرم",
    "لار",
    "فسا",
    "لامرد",
    "داراب",
    "آباده",
    "اقلید",
    "سپیدان",
    "گراش",
    "قیر و کارزین",
    "فراشبند",
    "زرقان",
    "ارسنجان",
  ],
  قزوین: [
    "قزوین",
    "تاکستان",
    "البرز",
    "آبیک",
    "بویین‌زهرا",
    "آوج",
    "محمودآباد نمونه",
  ],
  قم: ["قم", "جعفریه", "قنوات", "کهک", "سلفچگان"],
  کردستان: [
    "سنندج",
    "سقز",
    "مریوان",
    "بانه",
    "قروه",
    "کامیاران",
    "دیواندره",
    "بیجار",
    "دهگلان",
  ],
  کرمان: [
    "کرمان",
    "رفسنجان",
    "سیرجان",
    "بم",
    "جیرفت",
    "زرند",
    "شهربابک",
    "کهنوج",
    "بردسیر",
    "راور",
    "انار",
    "بافت",
  ],
  کرمانشاه: [
    "کرمانشاه",
    "اسلام‌آباد غرب",
    "کنگاور",
    "جوانرود",
    "سنقر",
    "صحنه",
    "پاوه",
    "هرسین",
    "سرپل ذهاب",
    "روانسر",
    "قصرشیرین",
  ],
  "کهگیلویه و بویراحمد": [
    "یاسوج",
    "دوگنبدان",
    "دهدشت",
    "سی‌سخت",
    "گچساران",
    "بهمئی",
    "چرام",
    "لیکک",
  ],
  گلستان: [
    "گرگان",
    "گنبد کاووس",
    "بندر ترکمن",
    "آق‌قلا",
    "کردکوی",
    "بندر گز",
    "کلاله",
    "آزادشهر",
    "رامیان",
    "گمیشان",
  ],
  گیلان: [
    "رشت",
    "لاهیجان",
    "بندر انزلی",
    "آستارا",
    "لنگرود",
    "رودسر",
    "تالش",
    "فومن",
    "صومعه‌سرا",
    "رودبار",
    "آستانه اشرفیه",
    "ماسال",
    "شفت",
    "املش",
  ],
  لرستان: [
    "خرم‌آباد",
    "بروجرد",
    "دورود",
    "الیگودرز",
    "کوهدشت",
    "نورآباد",
    "ازنا",
    "پلدختر",
    "الشتر",
    "چگنی",
  ],
  مازندران: [
    "ساری",
    "بابل",
    "آمل",
    "بهشهر",
    "چالوس",
    "نوشهر",
    "رامسر",
    "تنکابن",
    "جویبار",
    "نور",
    "محمودآباد",
    "فریدونکنار",
    "بابلسر",
    "قائم‌شهر",
    "نکا",
    "سوادکوه",
  ],
  مرکزی: [
    "اراک",
    "ساوه",
    "خمین",
    "دلیجان",
    "تفرش",
    "آشتیان",
    "شازند",
    "محلات",
    "کمیجان",
    "زرندیه",
  ],
  هرمزگان: [
    "بندرعباس",
    "میناب",
    "بندر لنگه",
    "کیش",
    "قشم",
    "بستک",
    "حاجی‌آباد",
    "بندر خمیر",
    "رودان",
    "پارسیان",
    "سیریک",
  ],
  همدان: [
    "همدان",
    "ملایر",
    "نهاوند",
    "تویسرکان",
    "کبودرآهنگ",
    "رزن",
    "بهار",
    "اسدآباد",
    "فامنین",
    "درگزین",
  ],
  یزد: [
    "یزد",
    "میبد",
    "اردکان",
    "مهریز",
    "تفت",
    "بافق",
    "ابرکوه",
    "اشکذر",
    "خاتم",
    "صدوق",
    "مروست",
  ],
};

// آرایشگران زنانه (قابل افزایش تا ۱۰۰۰+ نفر)
const femaleArtists = [
  {
    id: 1,
    name: "مریم مرادی",
    city: "تهران",
    province: "تهران",
    specialty: "میکاپ عروس VIP",
    score: 4.98,
    works: 1840,
    instagram: "maryam_moradi_makeup",
    verified: true,
  },
  {
    id: 2,
    name: "نازنین شینیون",
    city: "شیراز",
    province: "فارس",
    specialty: "شینیون تخصصی عروس",
    score: 4.97,
    works: 1420,
    instagram: "naznin_shinion",
    verified: true,
  },
  {
    id: 3,
    name: "فاطمه کراتین",
    city: "کرج",
    province: "البرز",
    specialty: "کراتین برزیلی اصل",
    score: 4.96,
    works: 1380,
    instagram: "keratin_fateme",
    verified: true,
  },
  {
    id: 4,
    name: "سحر کالریست",
    city: "اصفهان",
    province: "اصفهان",
    specialty: "بالیاژ و آمبره حرفه‌ای",
    score: 4.95,
    works: 1120,
    instagram: "sahar_colorist",
    verified: true,
  },
  {
    id: 5,
    name: "لیلا اکستنشن",
    city: "مشهد",
    province: "خراسان رضوی",
    specialty: "اکستنشن مو و مژه",
    score: 4.94,
    works: 980,
    instagram: "leila_extension",
    verified: true,
  },
  {
    id: 6,
    name: "مهسا میکاپ",
    city: "تبریز",
    province: "آذربایجان شرقی",
    specialty: "میکاپ لایت و نچرال",
    score: 4.93,
    works: 890,
    instagram: "mahsa_makeup",
    verified: true,
  },
  {
    id: 7,
    name: "زهرا ناخن",
    city: "رشت",
    province: "گیلان",
    specialty: "کاشت و طراحی ناخن",
    score: 4.92,
    works: 2100,
    instagram: "zahra_nailart",
    verified: true,
  },
  {
    id: 8,
    name: "پریسا رنگ",
    city: "اهواز",
    province: "خوزستان",
    specialty: "رنگ مو فانتزی",
    score: 4.91,
    works: 760,
    instagram: "parisa_color",
    verified: false,
  },
  {
    id: 9,
    name: "سارا شینیون",
    city: "قم",
    province: "قم",
    specialty: "شینیون حجیم",
    score: 4.9,
    works: 680,
    instagram: "sara_shinion",
    verified: true,
  },
  {
    id: 10,
    name: "آتنا لیزر",
    city: "ارومیه",
    province: "آذربایجان غربی",
    specialty: "لیزر فول بادی",
    score: 4.89,
    works: 520,
    instagram: "atena_laser",
    verified: true,
  },
  // فقط کافیه همینو کپی کنی و اسم جدید اضافه کنی
];

export default function WeAcademyArtists() {
  const [province, setProvince] = useState("تهران");
  const [city, setCity] = useState("همه شهرها");
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const cities = useMemo(
    () => ["همه شهرها", ...(iranData[province] || [])],
    [province]
  );

  const filtered = useMemo(() => {
    return femaleArtists.filter((a) => {
      const matchProvince = a.province === province;
      const matchCity = city === "همه شهرها" || a.city === city;
      const matchSearch =
        a.name.includes(search) || a.specialty.includes(search);
      return matchProvince && matchCity && matchSearch;
    });
  }, [province, city, search]);

  useEffect(() => {
    if (search || city !== "همه شهرها") {
      setIsLoading(true);
      const t = setTimeout(() => setIsLoading(false), 400);
      return () => clearTimeout(t);
    } else setIsLoading(false);
  }, [search, city]);

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-black/50 relative overflow-x-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 space-y-12">
        {/* هدر */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
            <span className="text-yellow-400 font-bold text-lg tracking-widest">
              WeAcademy Exclusive
            </span>
            <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
          </div>
          <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-600 bg-clip-text text-transparent drop-shadow-2xl">
            WeAcademy
          </h1>
          <p className="text-2xl md:text-4xl text-yellow-300/90 font-bold mt-6">
            مرجع تخصصی آرایشگران زنانه ایران
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-yellow-200/80">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-lg">{filtered.length} آرایشگر فعال</span>
            </div>
            <span className="text-yellow-500">•</span>
            <span className="text-lg">
              {city === "همه شهرها" ? province : city}
            </span>
          </div>
        </div>

        {/* فیلتر استیکی */}
        <div className="sticky top-4 z-20 bg-black/60 backdrop-blur-3xl rounded-3xl p-6 border border-yellow-500/20 shadow-2xl shadow-yellow-500/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className="text-yellow-400 text-sm font-medium mb-2 block">
                استان
              </label>
              <select
                value={province}
                onChange={(e) => {
                  setProvince(e.target.value);
                  setCity("همه شهرها");
                }}
                className="w-full px-5 py-4 bg-white/5 border border-yellow-500/30 rounded-2xl text-white text-lg focus:border-yellow-400 focus:ring-4 focus:ring-yellow-500/20 transition-all"
              >
                {Object.keys(iranData).map((p) => (
                  <option key={p} value={p} className="bg-black/90">
                    {p}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-yellow-400 text-sm font-medium mb-2 block">
                شهر
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-5 py-4 bg-white/5 border border-yellow-500/30 rounded-2xl text-white text-lg focus:border-yellow-400 focus:ring-4 focus:ring-yellow-500/20 transition-all"
              >
                {cities.map((c) => (
                  <option key={c} value={c} className="bg-black/90">
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-yellow-400 text-sm font-medium mb-2 block">
                جستجو
              </label>
              <div className="relative">
                <Search className="absolute right-5 top-1/2 -translate-y-1/2 w-6 h-6 text-yellow-400 pointer-events-none" />
                <input
                  type="text"
                  placeholder="نام یا تخصص..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pr-16 pl-6 py-4 bg-white/5 border border-yellow-500/30 rounded-2xl placeholder-yellow-400/50 text-white text-lg focus:border-yellow-400 focus:ring-4 focus:ring-yellow-500/20 transition-all"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-yellow-400 hover:text-yellow-300 text-2xl"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* کارت‌ها */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {isLoading
            ? [...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-3xl rounded-3xl p-8 border border-yellow-500/10 animate-pulse"
                >
                  <div className="h-10 bg-yellow-500/20 rounded w-4/5 mb-4"></div>
                  <div className="h-6 bg-yellow-500/10 rounded w-1/2"></div>
                </div>
              ))
            : filtered.map((artist, index) => (
                <div
                  key={artist.id}
                  className="group relative bg-white/5 backdrop-blur-3xl rounded-3xl p-8 border border-yellow-500/20 hover:border-yellow-400/60 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 hover:-translate-y-4 overflow-hidden"
                >
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>

                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-black text-yellow-400 flex items-center gap-2">
                        {artist.name}
                        {artist.verified && (
                          <CheckCircle className="w-6 h-6 text-cyan-400" />
                        )}
                      </h3>
                    </div>

                    <p className="text-yellow-200/70 text-sm flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> {artist.city}
                    </p>

                    <p className="text-yellow-100 font-bold text-lg leading-relaxed min-h-20">
                      {artist.specialty}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-yellow-500/20">
                      <div className="flex items-center gap-6">
                        <div className="text-center">
                          <Scissors className="w-7 h-7 text-yellow-400 mx-auto mb-1" />
                          <p className="text-yellow-200 font-bold text-sm">
                            {artist.works.toLocaleString()}
                          </p>
                        </div>
                        <div className="text-center">
                          <Star className="w-8 h-8 text-yellow-400 fill-yellow-400 mx-auto mb-1" />
                          <p className="text-yellow-300 font-black text-xl">
                            {artist.score}
                          </p>
                        </div>
                      </div>

                      {artist.instagram && (
                        <a
                          href={`https://instagram.com/${artist.instagram}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <Instagram className="w-6 h-6 text-yellow-400 hover:text-yellow-300 transition-colors" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
        </div>

        {!isLoading && filtered.length === 0 && (
          <div className="text-center py-32">
            <p className="text-5xl font-bold text-yellow-400/60">
              هیچ آرایشگری یافت نشد
            </p>
            <p className="text-yellow-300/50 text-xl mt-6">
              فیلترها را تغییر دهید
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
