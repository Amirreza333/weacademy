// app/admin/articles/page.js

"use client"; // ← حتماً اولین خط فایل باشه!

// اینجا فقط یکی از این دو خط رو داشته باش (من پیشنهاد می‌کنم فقط force-dynamic)
// فقط یکی! هیچ دوتایی نه!
export const dynamic = "force-dynamic";
// export const revalidate = false; // این خط رو کاملاً حذف کن!

import { useState, useEffect } from "react";
import Image from "next/image";
import { MdEdit, MdDelete, MdClose } from "react-icons/md";

// اینجا اسم dynamic رو عوض کردیم که با export تداخل نداشته باشه
import dynamicImport from "next/dynamic";

const CKEditor = dynamicImport(
  () => import("@ckeditor/ckeditor5-react").then((mod) => mod.CKEditor),
  { ssr: false }
);

const ClassicEditor = dynamicImport(
  () => import("@ckeditor/ckeditor5-build-classic"),
  { ssr: false }
);

export default function AdminArticles() {
  const [articles, setArticles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingArticle, setEditingArticle] = useState(null);
  const [previewImage, setPreviewImage] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
    image: "/images/blog-default.jpg",
  });

  useEffect(() => {
    const saved = localStorage.getItem("weacademy_articles");
    if (saved) setArticles(JSON.parse(saved));
  }, []);

  useEffect(() => {
    if (articles.length > 0) {
      localStorage.setItem("weacademy_articles", JSON.stringify(articles));
    }
  }, [articles]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      setFormData({ ...formData, image: base64 });
      setPreviewImage(base64);
    };
    reader.readAsDataURL(file);
  };

  const uploadAdapter = (loader) => ({
    upload: () =>
      loader.file.then(
        (file) =>
          new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => resolve({ default: reader.result });
            reader.readAsDataURL(file);
          })
      ),
  });

  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) =>
      uploadAdapter(loader);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.title.trim() ||
      !formData.content.replace(/<[^>]*>/g, "").trim()
    ) {
      alert("عنوان و محتوا نمی‌تونه خالی باشه!");
      return;
    }

    const plainText = formData.content.replace(/<[^>]*>/g, "").trim();
    const excerpt =
      plainText.slice(0, 160) + (plainText.length > 160 ? "..." : "");

    const slug = formData.title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^ا-یa-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    const newArticle = {
      id: editingArticle?.id || Date.now().toString(),
      slug: editingArticle?.slug || slug || "article-" + Date.now(),
      title: formData.title,
      excerpt,
      content: formData.content,
      author: formData.author || "ادمین WeAcademy",
      date: new Date().toISOString().split("T")[0],
      image: formData.image,
    };

    if (editingArticle) {
      setArticles((prev) =>
        prev.map((a) => (a.id === editingArticle.id ? newArticle : a))
      );
    } else {
      setArticles((prev) => [newArticle, ...prev]);
    }

    setFormData({
      title: "",
      content: "",
      author: "",
      image: "/images/blog-default.jpg",
    });
    setPreviewImage("");
    setEditingArticle(null);
    setShowModal(false);
  };

  const handleEdit = (article) => {
    setEditingArticle(article);
    setFormData({
      title: article.title,
      content: article.content || "",
      author: article.author,
      image: article.image,
    });
    setPreviewImage(article.image);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (confirm("حذف بشه؟")) {
      setArticles((prev) => {
        const updated = prev.filter((a) => a.id !== id);
        localStorage.setItem("weacademy_articles", JSON.stringify(updated));
        return updated;
      });
    }
  };

  return (
    <>
      <style jsx global>{`
        .ck-editor__editable {
          min-height: 420px !important;
          background: #111827 !important;
          color: #f3f4f6 !important;
          padding: 1.5rem !important;
        }
        .ck-editor__editable:focus {
          background: #0f172a !important;
          outline: 2px solid #e8c56a !important;
        }
        .ck-editor__editable h1,
        .ck-editor__editable h2,
        .ck-editor__editable h3 {
          color: #e8c56a !important;
          font-weight: bold !important;
        }
      `}</style>

      <div className="min-h-screen text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-5xl font-black bg-gradient-to-r from-[#E8C56A] to-[#D4AF37] bg-clip-text text-transparent">
              مدیریت مقالات
            </h1>
            <button
              onClick={() => setShowModal(true)}
              className="px-8 py-4 bg-gradient-to-r from-[#E8C56A] to-[#D4AF37] text-black font-bold rounded-full hover:scale-105 transition shadow-2xl"
            >
              مقاله جدید
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div
                key={article.id}
                className="group bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-[#E8C56A]/50 transition-all hover:shadow-2xl hover:shadow-[#E8C56A]/30"
              >
                <div className="relative h-64">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#E8C56A] mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex justify-between text-sm text-gray-500 mb-6">
                    <span>{article.author}</span>
                    <span>
                      {new Date(article.date).toLocaleDateString("fa-IR")}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleEdit(article)}
                      className="flex-1 py-3 bg-yellow-500/20 hover:bg-yellow-500/40 border border-yellow-500/50 rounded-xl text-yellow-400"
                    >
                      ویرایش
                    </button>
                    <button
                      onClick={() => handleDelete(article.id)}
                      className="flex-1 py-3 bg-red-500/20 hover:bg-red-500/40 border border-red-500/50 rounded-xl text-red-400"
                    >
                      حذف
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {articles.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-500 mb-8">
                هنوز مقاله‌ای منتشر نشده
              </p>
              <button
                onClick={() => setShowModal(true)}
                className="px-10 py-4 bg-gradient-to-r from-[#E8C56A] to-[#D4AF37] text-black font-bold rounded-full hover:scale-105 transition shadow-xl"
              >
                اولین مقاله رو بنویس
              </button>
            </div>
          )}
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-6 overflow-y-auto">
            <div className="bg-gray-900 border border-[#E8C56A]/40 rounded-3xl p-8 max-w-5xl w-full max-h-screen overflow-y-auto shadow-2xl">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-black text-[#E8C56A]">
                  {editingArticle ? "ویرایش مقاله" : "مقاله جدید"}
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <MdClose className="text-3xl" />
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    عکس کاور
                  </label>
                  <div className="relative h-64 bg-gray-800 rounded-2xl border-2 border-dashed border-gray-600 overflow-hidden cursor-pointer">
                    {previewImage ? (
                      <Image
                        src={previewImage}
                        alt="preview"
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-500">
                        کلیک کنید و عکس آپلود کنید
                      </div>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </div>
                </div>

                <input
                  type="text"
                  placeholder="عنوان مقاله"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="w-full mb-8 px-6 py-4 bg-white/10 border border-[#E8C56A]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#E8C56A]"
                  required
                />

                <input
                  type="text"
                  placeholder="نام نویسنده (اختیاری)"
                  value={formData.author}
                  onChange={(e) =>
                    setFormData({ ...formData, author: e.target.value })
                  }
                  className="w-full mb-8 px-6 py-4 bg-white/10 border border-[#E8C56A]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#E8C56A]"
                />

                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    محتوای مقاله
                  </label>
                  <div className="border border-[#E8C56A]/30 rounded-xl overflow-hidden">
                    <CKEditor
                      editor={ClassicEditor}
                      data={formData.content}
                      onChange={(_, editor) =>
                        setFormData({ ...formData, content: editor.getData() })
                      }
                      config={{
                        extraPlugins: [uploadPlugin],
                        language: "fa",
                        toolbar: [
                          "heading",
                          "|",
                          "bold",
                          "italic",
                          "underline",
                          "|",
                          "link",
                          "bulletedList",
                          "numberedList",
                          "|",
                          "imageUpload",
                          "blockQuote",
                          "insertTable",
                          "|",
                          "undo",
                          "redo",
                        ],
                        placeholder: "اینجا محتوای مقاله رو بنویس...",
                      }}
                    />
                  </div>
                </div>

                <div className="flex gap-4 justify-end">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-8 py-4 border border-gray-600 text-gray-400 rounded-full hover:bg-gray-800"
                  >
                    لغو
                  </button>
                  <button
                    type="submit"
                    className="px-10 py-4 bg-gradient-to-r from-[#E8C56A] to-[#D4AF37] text-black font-bold rounded-full hover:scale-105 transition shadow-xl"
                  >
                    {editingArticle ? "به‌روزرسانی" : "انتشار مقاله"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
