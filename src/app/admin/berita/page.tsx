import { Plus, Search, Edit2, Trash2, MoreVertical } from "lucide-react";

export const metadata = {
  title: "Kelola Berita | Admin GMKI Gunungsitoli",
};

const berita = [
  { id: 1, judul: "Diskusi Publik: Peran Pemuda Kristen", kategori: "Kegiatan", status: "Terbit", tanggal: "24 Okt 2026" },
  { id: 2, judul: "Pelantikan Pengurus Komisariat UNIAS", kategori: "Berita", status: "Terbit", tanggal: "12 Okt 2026" },
  { id: 3, judul: "Aksi Sosial Donor Darah Dies Natalis", kategori: "Kegiatan", status: "Draft", tanggal: "5 Okt 2026" },
];

export default function AdminBeritaPage() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold font-outfit text-slate-900 mb-2">Kelola Berita & Publikasi</h1>
          <p className="text-slate-500">Manajemen konten berita, artikel, dan pengumuman website.</p>
        </div>
        <button className="flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-light text-white px-5 py-2.5 rounded-xl font-bold transition-colors">
          <Plus className="w-5 h-5" />
          Tulis Berita Baru
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-50/50">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Cari berita..." 
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
            />
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <select className="border border-slate-200 rounded-xl px-4 py-2 bg-white focus:outline-none text-sm text-slate-600 w-full sm:w-auto">
              <option>Semua Kategori</option>
              <option>Kegiatan</option>
              <option>Berita</option>
              <option>Artikel/Opini</option>
            </select>
            <select className="border border-slate-200 rounded-xl px-4 py-2 bg-white focus:outline-none text-sm text-slate-600 w-full sm:w-auto">
              <option>Semua Status</option>
              <option>Terbit</option>
              <option>Draft</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-slate-500 text-sm">
                <th className="px-6 py-4 font-semibold w-16">No</th>
                <th className="px-6 py-4 font-semibold">Judul Berita</th>
                <th className="px-6 py-4 font-semibold">Kategori</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Tanggal</th>
                <th className="px-6 py-4 font-semibold text-right w-24">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {berita.map((item, index) => (
                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 text-slate-500">{index + 1}</td>
                  <td className="px-6 py-4 font-medium text-slate-900">{item.judul}</td>
                  <td className="px-6 py-4 text-slate-600">{item.kategori}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      item.status === 'Terbit' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500">{item.tanggal}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-slate-400 hover:text-brand-blue hover:bg-brand-blue/10 rounded-lg transition-colors" title="Edit">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="Hapus">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-slate-100 flex items-center justify-between text-sm text-slate-500">
          <div>Menampilkan 1 hingga 3 dari 3 data</div>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-slate-200 rounded text-slate-400 cursor-not-allowed">Sebelumnya</button>
            <button className="px-3 py-1 border border-brand-blue bg-brand-blue text-white rounded font-medium">1</button>
            <button className="px-3 py-1 border border-slate-200 rounded text-slate-400 cursor-not-allowed">Selanjutnya</button>
          </div>
        </div>
      </div>
    </div>
  );
}
