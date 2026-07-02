import Link from "next/link";
import { FileText, ArrowRight, ShieldCheck, Eye } from "lucide-react";

export const metadata = {
  title: "Transparansi Keuangan | GMKI Cabang Gunungsitoli",
  description: "Laporan penggunaan dana dan transparansi keuangan organisasi GMKI Cabang Gunungsitoli.",
};

const laporanKeuangan = [
  { id: 1, judul: "Laporan Keuangan Kuartal III - 2026", ukuran: "1.2 MB", tanggal: "10 Okt 2026" },
  { id: 2, judul: "Laporan Keuangan Kuartal II - 2026", ukuran: "1.5 MB", tanggal: "10 Jul 2026" },
  { id: 3, judul: "Laporan Pertanggungjawaban (LPJ) Maper 2026", ukuran: "2.1 MB", tanggal: "5 Jun 2026" },
  { id: 4, judul: "Laporan Keuangan Kuartal I - 2026", ukuran: "1.1 MB", tanggal: "10 Apr 2026" },
];

export default function TransparansiPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="bg-brand-blue pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-brand-blue/90 mix-blend-multiply"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="w-16 h-16 mx-auto bg-white/10 text-white rounded-full flex items-center justify-center mb-6 backdrop-blur-sm border border-white/20">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-outfit text-white mb-6">Transparansi Keuangan</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Menjunjung tinggi nilai kejujuran dan akuntabilitas. Kami membuka akses publik terhadap pengelolaan keuangan organisasi.
          </p>
        </div>
      </section>

      {/* Konten Transparansi */}
      <section className="py-20 -mt-10 relative z-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/40 p-8 md:p-10 mb-12">
            <h2 className="text-2xl font-bold font-outfit text-slate-900 mb-6">Komitmen Kami</h2>
            <div className="prose prose-slate text-slate-600 leading-relaxed text-justify">
              <p>
                Sebagai organisasi yang berlandaskan iman Kristen dan menjunjung tinggi profesionalisme, GMKI Cabang Gunungsitoli berkomitmen penuh terhadap keterbukaan dalam pengelolaan keuangan organisasi. 
              </p>
              <p>
                Dana yang bersumber dari iuran anggota, sumbangan alumni, donatur, maupun mitra kerja sama dicatat dan dikelola secara akuntabel oleh Bendahara Cabang dan dilaporkan secara berkala.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold font-outfit text-slate-900 mb-6">Arsip Laporan Keuangan</h2>
          
          <div className="space-y-4">
            {laporanKeuangan.map((laporan) => (
              <div key={laporan.id} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white hover:shadow-lg hover:border-brand-blue/30 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-brand-gold shrink-0 mt-1">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-1 group-hover:text-brand-blue transition-colors">{laporan.judul}</h3>
                    <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
                      <span>Diunggah: {laporan.tanggal}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                      <span>PDF ({laporan.ukuran})</span>
                    </div>
                  </div>
                </div>
                
                <Link href={`/transparansi/${laporan.id}`} className="flex items-center justify-center gap-2 bg-white border-2 border-slate-200 text-slate-600 hover:text-brand-blue hover:border-brand-blue font-bold px-6 py-3 rounded-xl transition-all">
                  Lihat
                  <Eye className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="text-brand-blue font-bold hover:text-brand-blue-light transition-colors flex items-center gap-2 mx-auto">
              Lihat Arsip Tahun Sebelumnya <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
