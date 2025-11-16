// components/ProfileCard.js
export default function ProfileCard({ phone }) {
  return (
    <div className="rounded-3xl p-6 shadow-xl ">
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 bg-gradient-to-br rounded-full flex items-center justify-center text-2xl font-bold">
          {phone.slice(-2)}
        </div>
        <div>
       
        </div>
      </div>
    </div>
  );
}