// data/articles.ts
export type Article = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string; // ISO: "2025-04-05"
  image: string;
  featured?: boolean;
};

export const articles: Article[] = [
  {
    id: "1",
    title: "بهترین رنگ مو برای پوست گندمی در سال ۱۴۰۴",
    slug: "best-hair-color-1404",
    excerpt: "اگر پوست گندمی دارید و دنبال رنگ مویی هستید که هم طبیعی باشه هم جذاب، این مقاله رو از دست ندید...",
    content: "متن کامل مقاله اینجا نوشته میشه...",
    author: "سارا رضایی",
    date: "2025-04-01",
    image: "/images/blog1.jpg",
    featured: true,
  },
  {
    id: "2",
    title: "۵ ترفند آرایش صورت برای ماندگاری ۲۴ ساعته",
    slug: "makeup-long-lasting-tricks",
    excerpt: "می‌خوای آرایشت تا آخر شب مثل ساعت اول بمونه؟ این ترفندها معجزه می‌کنن!",
    content: "متن کامل...",
    author: "نازنین احمدی",
    date: "2025-03-28",
    image: "/images/blog2.jpg",
  },
  // بعداً خودت اضافه کن
];