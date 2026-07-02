import { MapPin, Users, Calendar } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Profil Cabang | GMKI Cabang Gunungsitoli",
  description: "Profil, Sejarah Cabang, dan Struktur Kepengurusan GMKI Cabang Gunungsitoli.",
};

const pengurus = [
  { nama: "Nurman Samehuri Gea", jabatan: "Ketua Cabang", foto: "/pengurus-1.jpg" },
  { nama: "Rizki Oktavian Gea", jabatan: "Sekretaris Cabang", foto: "/pengurus-2.jpg" },
  { nama: "Tuhoni Lase", jabatan: "Bendahara Cabang", foto: "/pengurus-3.jpg" },
  { nama: "Martin Gulo", jabatan: "Ketua Bidang Organisasi", foto: "/pengurus-4.jpg" },
  { nama: "Kristianus Hia", jabatan: "Ketua Bidang Pendidikan", foto: "/pengurus-5.jpg" },
  { nama: "Elfidarius Lase", jabatan: "Ketua Bidang Aksi & Pelayanan", foto: "/pengurus-6.jpg" },
  { nama: "Dedisius Ndruru", jabatan: "Ketua Bidang Komunikasi", foto: "/pengurus-7.jpg" },
  { nama: "Alex Putra Berkat Laoli", jabatan: "Ketua Bidang Kewirausahaan", foto: "/pengurus-8.jpg" },
];

const komisariat = [
  "Komisariat Universitas Nias (UNIAS)",
  "Komisariat IKIP Gunungsitoli",
  "Komisariat STIE Pembangunan Nasional",
  "Komisariat STT BNKP Sundermann",
  "Komisariat STIH Nasional",
];

export default function CabangPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-slate-50 pt-32 pb-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-gold font-bold tracking-wider uppercase text-sm mb-4 block">Profil Cabang</span>
          <h1 className="text-4xl md:text-5xl font-bold font-outfit text-brand-blue mb-6">GMKI Cabang Gunungsitoli</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Menjadi garam dan terang di tengah dinamika perguruan tinggi dan masyarakat di wilayah Gunungsitoli dan sekitarnya.
          </p>
        </div>
      </section>

      {/* Sejarah Cabang */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop" 
                  alt="Sejarah GMKI Gunungsitoli" 
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-brand-blue/20"></div>
                <div className="absolute bottom-6 left-6 bg-white py-3 px-6 rounded-xl shadow-lg flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center text-brand-gold">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase">Berdiri Sejak</div>
                    <div className="text-lg font-bold text-brand-blue">Tahun 1990</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold font-outfit text-slate-900 mb-6">Sejarah Perjalanan Cabang</h2>
              <div className="w-16 h-1.5 bg-brand-gold rounded-full mb-8"></div>
              <div className="prose prose-slate text-slate-600 leading-relaxed text-justify">
                <p>
                  Kehadiran GMKI Cabang Gunungsitoli merupakan manifestasi dari kerinduan mahasiswa Kristen di Kepulauan Nias, khususnya di Kota Gunungsitoli, untuk memiliki wadah pembinaan spiritual dan intelektual.
                </p>
                <p>
                  Sejak awal berdirinya, GMKI Gunungsitoli telah aktif berkontribusi dalam berbagai gerakan sosial, pelayanan gerejawi, serta advokasi kebijakan publik yang berpihak pada kesejahteraan masyarakat Nias.
                </p>
                <p>
                  Hingga kini, cabang ini terus berkembang dengan ribuan alumni yang tersebar di berbagai sektor profesional, pemerintahan, dan pelayanan gereja, membuktikan dedikasi tanpa henti untuk motto "Ut Omnes Unum Sint".
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Struktur Pengurus */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-outfit text-slate-900 mb-4">Badan Pengurus Cabang (BPC)</h2>
            <div className="w-16 h-1.5 bg-brand-gold mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Susunan fungsionaris Badan Pengurus Cabang GMKI Gunungsitoli Masa Bakti 2024-2026 yang diamanatkan melalui Konferensi Cabang.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pengurus.map((p, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-slate-50 group-hover:border-brand-gold/30 transition-colors">
                  <img src={p.foto} alt={p.nama} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{p.nama}</h3>
                <p className="text-brand-gold font-medium text-sm">{p.jabatan}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Komisariat */}
      <section className="py-24 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold font-outfit mb-6">Basis Pelayanan Komisariat</h2>
              <p className="text-slate-300 leading-relaxed mb-8">
                Komisariat adalah ujung tombak pergerakan GMKI yang berada langsung di perguruan tinggi. Melalui komisariat, kaderisasi dan pelayanan kepada mahasiswa Kristen dijalankan secara nyata.
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-4xl font-bold font-outfit text-brand-gold mb-2">{komisariat.length}</div>
                  <div className="text-sm text-slate-400 font-medium">Komisariat Aktif</div>
                </div>
                <div>
                  <div className="text-4xl font-bold font-outfit text-brand-gold mb-2">1,200+</div>
                  <div className="text-sm text-slate-400 font-medium">Total Anggota</div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <ul className="space-y-4">
                  {komisariat.map((kom, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-slate-200">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-brand-gold" />
                      </div>
                      <span className="font-medium text-lg">{kom}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
