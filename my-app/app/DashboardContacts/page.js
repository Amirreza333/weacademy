'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Search, 
  Plus, 
  Edit, 
  Trash2, 
  Filter, 
  ChevronLeft, 
  ChevronRight,
  User,
  Mail,
  Phone,
  Calendar,
  MoreVertical
} from 'lucide-react';

const initialUsers = [
  { id: 1, name: 'سکینه رضایی', email: 'ali@example.com', phone: '09123456789', joinDate: '1403/05/15', status: 'فعال', role: 'مدیر' },
  { id: 2, name: 'سارا احمدی', email: 'sara@example.com', phone: '09129876543', joinDate: '1403/06/20', status: 'غیرفعال', role: 'کاربر' },
  { id: 3, name: 'کبرا حسینی', email: 'mohammad@example.com', phone: '09137654321', joinDate: '1403/04/10', status: 'فعال', role: 'ادمین' },
  { id: 4, name: 'فاطمه محمدی', email: 'fateme@example.com', phone: '09141234567', joinDate: '1403/07/01', status: 'فعال', role: 'کاربر' },
  { id: 5, name: 'صغرا کریمی', email: 'hosein@example.com', phone: '09155678901', joinDate: '1403/03/25', status: 'غیرفعال', role: 'کاربر' },
  { id: 6, name: 'مریم نوری', email: 'maryam@example.com', phone: '09166789012', joinDate: '1403/08/05', status: 'فعال', role: 'ویرایشگر' },
];

export default function UsersPage() {
  const [users] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('همه');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const usersPerPage = 5;


  const filteredUsers = useMemo(() => {
    return users.filter(user => {
      const matchesSearch = 
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.phone.includes(searchTerm);
      
      const matchesStatus = filterStatus === 'همه' || user.status === filterStatus;
      
      return matchesSearch && matchesStatus;
    });
  }, [users, searchTerm, filterStatus]);

  
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  return (
    <div className="min-h-screen p-4 md:p-6 space-y-6">
   
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
            مدیریت کاربران
          </h1>
          <p className="text-white/60 text-sm mt-1">
            {filteredUsers.length} کاربر ثبت‌شده
          </p>
        </div>
        <div className="flex gap-3">
          <Link 
            href="/Dashboard"
            className="px-4 py-2.5 bg-white/10 backdrop-blur-md rounded-xl text-white hover:bg-white/20 transition-all flex items-center gap-2 text-sm"
          >
            بازگشت به داشبورد
          </Link>
          <button className="px-4 py-2.5 bg-yellow-500/20 backdrop-blur-md rounded-xl text-yellow-400 border border-yellow-500/30 hover:bg-yellow-500/30 transition-all flex items-center gap-2 text-sm">
            <Plus className="w-4 h-4" />
            افزودن کاربر
          </button>
        </div>
      </div>

      
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
          <input
            type="text"
            placeholder="جستجو در نام، ایمیل یا تلفن..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pr-11 pl-4 py-3 bg-white/10 backdrop-blur-md rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 transition-all"
          />
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-3 bg-white/10 backdrop-blur-md rounded-xl text-white hover:bg-white/20 transition-all flex items-center gap-2">
            <Filter className="w-4 h-4" />
            فیلتر
          </button>
          <select 
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-3 bg-white/10 backdrop-blur-md rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-500/50 transition-all"
          >
            <option value="همه">همه وضعیت‌ها</option>
            <option value="فعال">فعال</option>
            <option value="غیرفعال">غیرفعال</option>
          </select>
        </div>
      </div>

     
      <div className="bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-white/80">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-right py-4 px-4 font-medium">نام</th>
                <th className="text-right py-4 px-4 font-medium">ایمیل</th>
                <th className="text-right py-4 px-4 font-medium hidden sm:table-cell">تلفن</th>
                <th className="text-right py-4 px-4 font-medium hidden md:table-cell">تاریخ عضویت</th>
                <th className="text-right py-4 px-4 font-medium">وضعیت</th>
                <th className="text-right py-4 px-4 font-medium">نقش</th>
                <th className="text-right py-4 px-4 font-medium">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.map((user) => (
                <tr 
                  key={user.id} 
                  className="border-b border-white/05 hover:bg-white/5 transition-all cursor-pointer"
                  onClick={() => setSelectedUser(user)}
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-black font-bold text-sm">
                        {user.name[0]}
                      </div>
                      <span className="font-medium">{user.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Mail className="w-4 h-4 text-white/50" />
                      {user.email}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm hidden sm:table-cell">
                    <div className="flex items-center gap-1">
                      <Phone className="w-4 h-4 text-white/50" />
                      {user.phone}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm hidden md:table-cell">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-white/50" />
                      {user.joinDate}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      user.status === 'فعال' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm">{user.role}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-lg hover:bg-white/10 transition-all text-yellow-400">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-white/10 transition-all text-red-400">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-white/10 transition-all text-white/70">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-white/10">
            <p className="text-white/60 text-sm">
              نمایش {((currentPage - 1) * usersPerPage) + 1} تا {Math.min(currentPage * usersPerPage, filteredUsers.length)} از {filteredUsers.length}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 rounded-lg text-sm font-medium transition-all ${
                      currentPage === page 
                        ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' 
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        )}
      </div>

     
      {selectedUser && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedUser(null)}
        >
          <div 
            className="bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/10 p-6 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-black text-2xl font-bold">
                {selectedUser.name[0]}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{selectedUser.name}</h3>
                <p className="text-yellow-400 text-sm">{selectedUser.role}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/80">
                <Mail className="w-5 h-5 text-white/50" />
                <span className="text-sm">{selectedUser.email}</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Phone className="w-5 h-5 text-white/50" />
                <span className="text-sm">{selectedUser.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Calendar className="w-5 h-5 text-white/50" />
                <span className="text-sm">عضو از: {selectedUser.joinDate}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  selectedUser.status === 'فعال' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-red-500/20 text-red-400'
                }`}>
                  {selectedUser.status}
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button className="flex-1 py-2.5 bg-yellow-500/20 text-yellow-400 rounded-xl hover:bg-yellow-500/30 transition-all">
                ویرایش
              </button>
              <button className="flex-1 py-2.5 bg-red-500/20 text-red-400 rounded-xl hover:bg-red-500/30 transition-all">
                حذف
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}