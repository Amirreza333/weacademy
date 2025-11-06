import React from "react";

function Mahsolat() {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      {/* بلوک قرمز اصلی */}
      <section className="bg-[#dbb91e]/20 backdrop-blur-[250px] flex flex-col justify-center items-center p-6 rounded-2xl h-auto border border-red-300/30 w-full max-w-[50%] gap-2">

        {/* قسمت بالا: کارت متنی + عکس کنارش */}
        <div className="w-full flex flex-col md:flex-row items-center gap-2 max-w-3xl">
          {/* کارت محصول ۱ */}
          <div className="bg-amber-50/70 p-5 rounded-2xl backdrop-blur-3xl flex flex-col items-center text-center h-[200px] w-[200] m-2 px-2 md:w-1/2">
            <h3 className="text-amber-950 text-xl font-bold">محصول ۱</h3>
            <p className="text-amber-800 text-sm mt-2">
              توضیحات کوتاه و جذاب درباره این محصول شگفت‌انگیز...
            </p>
          </div>

          {/* عکس کنار محصول ۱ */}
          <div className="flex justify-center w-full md:w-1/2">
            <img
              src="/mo1.jpg"
              alt="تصویر محصول ۱"
              className="h-[200px] w-[200] max-w-xs object-cover rounded-xl shadow-2xl"
            />
          </div>
        </div>

        {/* قسمت پایین: سه عکس در یک ردیف */}
        
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {/* عکس ۱ */}
            <div className="flex justify-center">
              <img
                src="/mo1.jpg"
                alt="محصول ۳"
                className="h-[200px] w-[200]  object-cover rounded-xl "
              />
            </div>

            {/* عکس ۲ */}
            <div className="flex justify-center">
              <img
                src="/mo1.jpg"
                alt="محصول ۴"
                className="h-[200px] w-[200]  object-cover rounded-xl "
              />
            </div>

            {/* عکس ۳ */}
            <div className="flex justify-center">
              <img
                src="/mo1.jpg"
                alt="محصول ۵"
                className="h-[200px] w-[200px] max-w-xs object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>
               {/* قسمت پایین: سه عکس در یک ردیف */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
            {/* عکس ۱ */}
            <div className="flex justify-center">
              <img
                src="/mo1.jpg"
                alt="محصول ۳"
                className="h-[200px] w-[200]  object-cover rounded-xl "
              />
            </div>

            {/* عکس ۲ */}
            <div className="flex justify-center">
              <img
                src="/mo1.jpg"
                alt="محصول ۴"
                className="h-[200px] w-[200]  object-cover rounded-xl "
              />
            </div>

            {/* عکس ۳ */}
            <div className="flex justify-center">
              <img
                src="/mo1.jpg"
                alt="محصول ۵"
                className="h-[200px] w-[200px] max-w-xs object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Mahsolat;