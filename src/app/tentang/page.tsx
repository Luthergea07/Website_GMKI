import { BookOpen, Target, Heart, Shield, FileText } from "lucide-react";

export const metadata = {
  title: "Tentang GMKI | GMKI Cabang Gunungsitoli",
  description: "Sejarah, Visi Misi, dan Nilai Organisasi Gerakan Mahasiswa Kristen Indonesia.",
};

export default function TentangPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="bg-brand-blue text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/90 to-brand-blue/50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-outfit mb-6">Tentang GMKI</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Mengenal lebih dekat Gerakan Mahasiswa Kristen Indonesia: Sejarah, Visi, Misi, dan nilai perjuangan yang menjadi landasan setiap langkah kami.
          </p>
        </div>
      </section>

      {/* Sejarah Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-outfit text-slate-900 mb-4">Sejarah Singkat</h2>
            <div className="w-16 h-1.5 bg-brand-gold mx-auto rounded-full"></div>
          </div>
          <div className="prose prose-lg prose-slate mx-auto text-slate-600 leading-relaxed text-justify">
            <p className="mb-6">
              Gerakan Mahasiswa Kristen Indonesia (GMKI) didirikan pada tanggal 9 Februari 1950 di Jakarta. GMKI merupakan hasil penggabungan antara Christelijke Studenten Vereeniging op Java (CSV) yang didirikan tahun 1932 dan Perhimpunan Mahasiswa Kristen Indonesia (PMKI).
            </p>
            <p className="mb-6">
              Kehadiran GMKI di tengah-tengah bangsa Indonesia adalah untuk mengaktualisasikan panggilannya, mewujudkan syalom Allah di tengah perguruan tinggi dan masyarakat, melalui tri panggilannya: bersaksi, bersekutu, dan melayani.
            </p>
            <p>
              Dengan moto <strong>"Ut Omnes Unum Sint"</strong> (Agar Mereka Semua Menjadi Satu), GMKI terus bergerak mendidik dan mempersiapkan kader-kader muda Kristen yang memiliki integritas tinggi dan komitmen pada nilai-nilai kebangsaan.
            </p>
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Visi */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-brand-gold/10 text-brand-gold flex items-center justify-center rounded-2xl mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold font-outfit text-slate-900 mb-4">Visi GMKI</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                "Terwujudnya kedamaian, kesejahteraan, keadilan, kebenaran, keutuhan ciptaan dan demokrasi di Indonesia berdasarkan kasih."
              </p>
            </div>
            
            {/* Misi */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-brand-blue/10 text-brand-blue flex items-center justify-center rounded-2xl mb-6">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold font-outfit text-slate-900 mb-4">Misi GMKI</h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0"></span>
                  <span>Membina mahasiswa untuk memahami panggilannya dalam rangka mewujudkan syalom Allah.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0"></span>
                  <span>Mempersiapkan pemimpin dan penggerak di dalam masyarakat, gereja dan perguruan tinggi.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0"></span>
                  <span>Memperjuangkan keadilan, kebenaran, dan kesejahteraan bagi seluruh ciptaan.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai Perjuangan */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-outfit text-slate-900 mb-4">Profil Kader (Panca Kegiatan)</h2>
            <div className="w-16 h-1.5 bg-brand-gold mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-6 max-w-2xl mx-auto">
              Setiap kader GMKI dibentuk untuk memiliki karakter yang tercermin dalam Trinitas pengabdian dan integritas pergerakan.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all border border-slate-100">
              <div className="w-16 h-16 mx-auto bg-brand-blue text-white rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Tinggi Iman</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Memiliki fondasi kerohanian yang kuat dan hidup yang berpusat pada Kristus sebagai teladan.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all border border-slate-100">
              <div className="w-16 h-16 mx-auto bg-brand-gold text-white rounded-full flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Tinggi Ilmu</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Mengejar keunggulan intelektual, analitis, dan wawasan yang luas dalam merespon dinamika zaman.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all border border-slate-100">
              <div className="w-16 h-16 mx-auto bg-brand-blue-light text-white rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Tinggi Pengabdian</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Mengamalkan ilmu dan iman melalui dedikasi serta pelayanan yang berdampak bagi nusa dan bangsa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dokumen Organisasi */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-outfit mb-6">Dokumen Resmi Organisasi</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10">
            Sebagai organisasi yang modern dan transparan, seluruh landasan operasional kami terbuka untuk dipelajari oleh seluruh anggota.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-6 py-4 rounded-xl border border-white/10 transition-all">
              <FileText className="w-6 h-6 text-brand-gold" />
              <div className="text-left">
                <div className="font-bold">Anggaran Dasar (AD)</div>
                <div className="text-xs text-slate-300">Format PDF</div>
              </div>
            </a>
            <a href="#" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-6 py-4 rounded-xl border border-white/10 transition-all">
              <FileText className="w-6 h-6 text-brand-gold" />
              <div className="text-left">
                <div className="font-bold">Anggaran Rumah Tangga (ART)</div>
                <div className="text-xs text-slate-300">Format PDF</div>
              </div>
            </a>
            <a href="#" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-6 py-4 rounded-xl border border-white/10 transition-all">
              <FileText className="w-6 h-6 text-brand-gold" />
              <div className="text-left">
                <div className="font-bold">Peraturan Organisasi (PO)</div>
                <div className="text-xs text-slate-300">Format PDF</div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
