// components/ProfileCard.js
export default function ProfileCard({ phone }) {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-amber-200">
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-pink-400 rounded-full flex items-center justify-center text-white text-2xl font-bold">
          {phone.slice(-2)}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">خوش آمدید!</h2>
          <p className="text-lg text-amber-600">{phone}</p>
          <p className="text-sm text-gray-600">عضو ویژه آرایشگاه طلایی</p>
        </div>
      </div>
    </div>
  );
}