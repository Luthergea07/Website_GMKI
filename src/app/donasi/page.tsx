import { Heart, Building, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Donasi & Dukungan | GMKI Cabang Gunungsitoli",
  description: "Dukung pelayanan dan pergerakan GMKI Cabang Gunungsitoli melalui donasi.",
};

export default function DonasiPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-50 pt-32 pb-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 mx-auto bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center mb-6">
            <Heart className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-outfit text-brand-blue mb-6">Dukung Gerakan Kami</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Setiap dukungan Anda sangat berarti bagi kelancaran program pembinaan, pelayanan, dan pergerakan mahasiswa Kristen di Gunungsitoli.
          </p>
        </div>
      </section>

      {/* Konten Utama */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Info Rekening */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold font-outfit text-slate-900 mb-6">Saluran Donasi Resmi</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Bantuan berupa dana operasional maupun dukungan kegiatan dapat disalurkan langsung ke rekening resmi organisasi kami di bawah ini:
              </p>
              
              <div className="bg-brand-blue rounded-3xl p-8 text-white shadow-xl relative overflow-hidden mb-8">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Building className="w-32 h-32" />
                </div>
                <div className="relative z-10">
                  <div className="text-brand-gold font-bold mb-1">Bank Rakyat Indonesia (BRI)</div>
                  <div className="text-3xl md:text-4xl font-mono font-bold tracking-wider mb-2">1234-5678-9012-345</div>
                  <div className="text-slate-300 mb-8">a.n. GMKI Cabang Gunungsitoli</div>
                  
                  <button className="bg-white/10 hover:bg-white/20 border border-white/20 transition-colors px-6 py-2 rounded-lg text-sm font-medium backdrop-blur-sm">
                    Salin Rekening
                  </button>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold" /> Konfirmasi Donasi
                </h3>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  Setelah melakukan transfer, mohon kesediaannya untuk mengkonfirmasi melalui WhatsApp resmi kami agar dapat dicatat dalam laporan transparansi keuangan.
                </p>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-blue font-bold hover:text-brand-blue-light transition-colors">
                  Konfirmasi via WhatsApp <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Penggunaan Dana */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold font-outfit text-slate-900 mb-6">Transparansi Penggunaan</h2>
              <div className="w-16 h-1.5 bg-brand-gold rounded-full mb-8"></div>
              
              <p className="text-slate-600 mb-8">
                Kami berkomitmen untuk menggunakan setiap donasi secara bertanggung jawab. Dana yang terkumpul dialokasikan untuk:
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center shrink-0">
                    <span className="font-bold text-brand-blue text-lg">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Program Pembinaan Kader</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">Pelatihan kepemimpinan, Latihan Dasar Kepemimpinan (LDK), dan kelompok diskusi studi.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center shrink-0">
                    <span className="font-bold text-brand-blue text-lg">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Aksi Sosial & Pelayanan</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">Bantuan bencana alam, kunjungan ke panti asuhan, dan pelayanan mahasiswa di kampus.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center shrink-0">
                    <span className="font-bold text-brand-blue text-lg">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Operasional Sekretariat</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">Pemeliharaan fasilitas sekretariat, biaya administrasi, dan perlengkapan organisasi.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
