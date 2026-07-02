import { Users, FileText, Activity, MapPin } from "lucide-react";

export const metadata = {
  title: "Dashboard Admin | GMKI Cabang Gunungsitoli",
};

export default function AdminDashboardPage() {
  const stats = [
    { title: "Total Berita & Artikel", value: "45", icon: FileText, color: "text-blue-600", bg: "bg-blue-100" },
    { title: "Anggota Terdaftar", value: "1,240", icon: Users, color: "text-brand-gold", bg: "bg-brand-gold/20" },
    { title: "Komisariat Aktif", value: "15", icon: MapPin, color: "text-emerald-600", bg: "bg-emerald-100" },
    { title: "Pengunjung Bulan Ini", value: "4,821", icon: Activity, color: "text-purple-600", bg: "bg-purple-100" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold font-outfit text-slate-900 mb-2">Ringkasan Sistem</h1>
      <p className="text-slate-500 mb-8">Selamat datang kembali! Berikut adalah statistik aktivitas website Anda.</p>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${stat.bg} ${stat.color}`}>
              <stat.icon className="w-7 h-7" />
            </div>
            <div>
              <div className="text-sm font-medium text-slate-500 mb-1">{stat.title}</div>
              <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h3 className="font-bold text-lg text-slate-900 mb-6">Aktivitas Terbaru</h3>
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start gap-4 pb-6 border-b border-slate-100 last:border-0 last:pb-0">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Admin Utama menambahkan berita baru</h4>
                    <p className="text-sm text-slate-500 mt-1">"Diskusi Publik: Peran Pemuda Kristen dalam Menyambut Era Digital"</p>
                    <span className="text-xs text-slate-400 mt-2 block">{i * 2} jam yang lalu</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h3 className="font-bold text-lg text-slate-900 mb-6">Aksi Cepat</h3>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-3 bg-slate-50 hover:bg-brand-blue hover:text-white border border-slate-200 hover:border-brand-blue rounded-xl font-medium text-slate-700 transition-colors">
                + Tulis Berita Baru
              </button>
              <button className="w-full text-left px-4 py-3 bg-slate-50 hover:bg-brand-blue hover:text-white border border-slate-200 hover:border-brand-blue rounded-xl font-medium text-slate-700 transition-colors">
                + Tambah Data Pengurus
              </button>
              <button className="w-full text-left px-4 py-3 bg-slate-50 hover:bg-brand-blue hover:text-white border border-slate-200 hover:border-brand-blue rounded-xl font-medium text-slate-700 transition-colors">
                + Unggah Laporan Keuangan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
