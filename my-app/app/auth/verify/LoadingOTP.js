export default function LoadingOTP() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin w-20 h-20 border-8 border-[#dbb91e]/30 border-t-[#dbb91e] rounded-full" />
        <p className="mt-8 text-2xl text-gray-400">در حال بارگذاری...</p>
      </div>
    </div>
  );
}