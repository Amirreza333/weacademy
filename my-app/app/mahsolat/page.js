import React from "react";

function Mahsolat() {
  return (
    <div className="flex justify-center items-center min-h-screen p-4 ">
      {/* بلوک قرمز - کاملاً وسط صفحه */}
      <section className="bg-red-700/40 backdrop-blur-[250px] flex flex-col md:flex-row justify-center items-center p-6 rounded-2xl  h-[400]  border border-red-300/30">
        
        {/* محتوا - وسط بلوک قرمز */}
        <div className="flex flex-col md:flex-row justify-center items-start w-full px-[50]  ">

          {/* متن - چپ (ولی نسبت به مرکز بلوک) */}
          <div className="bg-amber-50/70 p-5 rounded-2xl backdrop-blur-3xl  flex flex-col items-center text-center h-[300] w-[300] ">
            <h3 className="text-amber-950 text-xl font-bold">
              عنوان محصول
            </h3>
            <p className="text-amber-800 text-sm mt-2 max-w-xs">
              توضیحات کوتاه و جذاب درباره این محصول شگفت‌انگیز...
            </p>
          </div>

          {/* تصویر - راست (نسبت به مرکز بلوک) */}
          <div className="flex justify-end w-full md:w-2/3">
            <img
              src="/mo1.jpg"
              alt="محصول 1"
              className=" max-w-md h-[300] w-[300] object-cover rounded-xl shadow-2xl "
            />
          </div>
              <div className="flex justify-end items-end  w-full md:w-2/3">
            <img
              src="/mo1.jpg"
              alt="محصول 1"
              className="  h-[300] w-[300] object-cover rounded-xl shadow-2xl   "
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mahsolat;