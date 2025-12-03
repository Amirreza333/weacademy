// lib/articles.js
let cachedArticles = null;

// تابع اصلی برای گرفتن مقالات (حالا localStorage، بعداً API)
export async function getArticles() {
  // اگر قبلاً کش کردیم، همون رو برگردون
  if (cachedArticles) return cachedArticles;

  // اول از localStorage بخون
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('weacademy_articles');
    if (saved) {
      cachedArticles = JSON.parse(saved);
      return cachedArticles;
    }
  }

  // اگر هیچی نبود، دیتای پیش‌فرض برگردون (مثل ArticlesSection.js)
  cachedArticles = [
    {
      id: "1",
      title: "چطور در ۶ ماه آرایشگر حرفه‌ای شدم؟",
      excerpt: "داستان واقعی یکی از شاگردای من که با متد اختصاصی کوچینگ من از صفر به درآمد بالای ۱۰۰ میلیون رسید...",
      author: "نرگس احمدی",
      date: "1404/09/10",
      readTime: "۷ دقیقه",
      image: "/images/articles/makeup1.webp",
      slug: "how-i-became-professional-makeup-artist-in-6-months",
    },
    // ... بقیه مقالات استاتیک تو ArticlesSection.js رو اینجا کپی کن
    // (من فقط ۱ تا گذاشتم برای خلاصه بودن)
  ];

  return cachedArticles;
}

// ذخیره مقالات (حالا localStorage، بعداً API)
export async function saveArticles(newArticles) {
  cachedArticles = newArticles;

  if (typeof window !== 'undefined') {
    localStorage.setItem('weacademy_articles', JSON.stringify(newArticles));
  }

  // این event باعث میشه همه صفحات آپدیت بشن
  window.dispatchEvent(new Event('weacademy_articles_updated'));
}

// فقط برای ریست کش (در صورت نیاز)
export function clearArticlesCache() {
  cachedArticles = null;
}