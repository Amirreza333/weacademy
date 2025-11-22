// app/auth/register-info/LoadingScreen.js
export default function LoadingScreen() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin w-24 h-24 border-8 border-[#dbb91e]/30 border-t-[#dbb91e] rounded-full" />
        <p className="mt-8 text-2xl text-gray-400">در حال بارگذاری فرم...</p>
      </div>
    </div>
  );
}