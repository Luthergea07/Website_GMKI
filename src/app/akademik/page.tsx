import { BookOpen, Award, Download, ArrowRight, Video } from "lucide-react";

export const metadata = {
  title: "Layanan Akademik | GMKI Cabang Gunungsitoli",
  description: "Informasi beasiswa, sumber belajar, dan dokumen akademik untuk anggota GMKI.",
};

const beasiswaList = [
  { nama: "Beasiswa Unggulan Kemdikbud 2026", deadline: "30 Nov 2026", status: "Buka" },
  { nama: "Beasiswa LPDP Tahap II", deadline: "15 Des 2026", status: "Buka" },
  { nama: "Bantuan UKT Pemprov Sumut", deadline: "5 Nov 2026", status: "Buka" },
  { nama: "Beasiswa Djarum Plus", deadline: "Telah Berakhir", status: "Tutup" },
];

export default function AkademikPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="bg-brand-blue pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-brand-blue/90 mix-blend-multiply"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="w-16 h-16 mx-auto bg-brand-gold/20 text-brand-gold rounded-full flex items-center justify-center mb-6 backdrop-blur-sm border border-brand-gold/30">
            <BookOpen className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-outfit text-white mb-6">Layanan Akademik</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Mendukung peningkatan kapasitas intelektual anggota melalui informasi beasiswa, pelatihan, dan sumber belajar.
          </p>
        </div>
      </section>

      {/* Info Beasiswa */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/3">
              <div className="sticky top-28">
                <h2 className="text-3xl font-bold font-outfit text-slate-900 mb-4">Pusat Informasi Beasiswa</h2>
                <div className="w-16 h-1.5 bg-brand-gold rounded-full mb-6"></div>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Kami mengumpulkan berbagai informasi beasiswa yang relevan untuk membantu mahasiswa dalam mendukung kelancaran studi mereka.
                </p>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Butuh Bantuan Pendaftaran?</h4>
                    <p className="text-sm text-slate-500">Bidang Pendidikan BPC bersedia mendampingi pembuatan essay dan simulasi wawancara.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
                  <h3 className="font-bold text-lg text-slate-900">Daftar Beasiswa Terbaru</h3>
                </div>
                <div className="divide-y divide-slate-100">
                  {beasiswaList.map((item, idx) => (
                    <div key={idx} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-bold text-brand-blue text-lg">{item.nama}</h4>
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                            item.status === 'Buka' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                          }`}>
                            {item.status}
                          </span>
                        </div>
                        <div className="text-sm text-slate-500 font-medium">Batas Waktu: {item.deadline}</div>
                      </div>
                      <button className="whitespace-nowrap px-4 py-2 border border-slate-200 rounded-lg text-sm font-bold text-slate-600 hover:border-brand-blue hover:text-brand-blue transition-colors">
                        Lihat Detail
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sumber Belajar */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-outfit text-slate-900 mb-4">Materi & Sumber Belajar</h2>
            <div className="w-16 h-1.5 bg-brand-gold mx-auto rounded-full mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Item 1 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-rose-50 text-rose-500 rounded-xl flex items-center justify-center mb-6">
                <Download className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-2">Modul Kepemimpinan Dasar</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                Materi wajib bagi calon anggota baru mengenai sejarah, nilai, dan arah pelayanan organisasi.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-brand-blue font-bold text-sm hover:text-brand-blue-light">
                Unduh PDF (2.4 MB) <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Item 2 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-amber-50 text-amber-500 rounded-xl flex items-center justify-center mb-6">
                <Download className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-2">Panduan Penulisan Ilmiah</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                Format penulisan makalah, jurnal, dan skripsi standar sesuai kaidah akademik yang berlaku.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-brand-blue font-bold text-sm hover:text-brand-blue-light">
                Unduh PDF (1.1 MB) <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Item 3 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-500 rounded-xl flex items-center justify-center mb-6">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-2">Rekaman Kelas Diskusi</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                Kumpulan video diskusi tematik dan bedah buku yang diselenggarakan oleh bidang Pendidikan.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-brand-blue font-bold text-sm hover:text-brand-blue-light">
                Akses Playlist <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
