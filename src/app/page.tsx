import Link from "next/link";
import { ArrowRight, Users, BookOpen, MapPin, Calendar } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-brand-blue text-white overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/90 to-brand-blue/50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
            <span className="text-sm font-medium text-slate-100">Ut Omnes Unum Sint</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-outfit mb-6 max-w-4xl leading-tight">
            Selamat Datang di Website Resmi <br />
            <span className="text-brand-gold">GMKI Cabang Gunungsitoli</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
            Pusat informasi, komunikasi, dan pelayanan organisasi. Mari bersama mewujudkan kader yang berintegritas, profesional, dan melayani.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/tentang"
              className="inline-flex justify-center items-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-brand-gold/25"
            >
              Kenali GMKI
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/gabung"
              className="inline-flex justify-center items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-medium transition-all"
            >
              Bergabung Bersama Kami
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, label: "Anggota Aktif", value: "1,200+" },
              { icon: MapPin, label: "Komisariat", value: "15" },
              { icon: Calendar, label: "Kegiatan Tahunan", value: "50+" },
              { icon: BookOpen, label: "Program Kerja", value: "35+" },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-gold/30 hover:shadow-lg hover:shadow-brand-gold/5 transition-all">
                <div className="w-12 h-12 rounded-full bg-brand-blue/5 text-brand-blue flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold font-outfit text-slate-900 mb-1">{stat.value}</h3>
                <p className="text-sm font-medium text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Organization */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-outfit text-slate-900 mb-4">
                  Membangun Pemimpin Masa Depan
                </h2>
                <div className="w-20 h-1.5 bg-brand-gold rounded-full mb-6"></div>
                <p className="text-slate-600 leading-relaxed text-lg">
                  GMKI Cabang Gunungsitoli hadir sebagai wadah pembentukan karakter, intelektualitas, dan spiritualitas mahasiswa Kristen. Kami berkomitmen untuk terus berkontribusi bagi gereja, perguruan tinggi, dan masyarakat.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Tinggi Iman", desc: "Spiritualitas yang berakar kuat pada nilai Kristiani." },
                  { title: "Tinggi Ilmu", desc: "Pengembangan akademik dan kapasitas intelektual." },
                  { title: "Tinggi Pengabdian", desc: "Pelayanan nyata bagi masyarakat dan bangsa." },
                  { title: "Profesional", desc: "Menjunjung tinggi etika dan integritas karya." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-brand-gold mt-2 shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video lg:aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
                  alt="Kegiatan GMKI" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 via-transparent to-transparent flex items-end p-8">
                  <div>
                    <span className="px-3 py-1 bg-brand-gold text-white text-xs font-bold rounded-full mb-3 inline-block">Highlight</span>
                    <h3 className="text-white text-xl font-bold">Masa Perkenalan (Maper) 2026</h3>
                    <p className="text-slate-200 text-sm mt-2">Menyambut ribuan kader baru dari berbagai perguruan tinggi.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold font-outfit text-slate-900 mb-4">Berita & Pengumuman</h2>
              <div className="w-20 h-1.5 bg-brand-gold rounded-full"></div>
            </div>
            <Link href="/publikasi" className="hidden sm:flex items-center gap-2 text-brand-blue font-medium hover:text-brand-blue-light transition-colors">
              Lihat Semua <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { id: 1, title: "Diskusi Publik: Peran Pemuda Kristen dalam Menyambut Era Digital", img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop", desc: "Diskusi interaktif bersama para pakar dan tokoh pemuda membahas kesiapan kader GMKI dalam menghadapi tantangan era digitalisasi modern." },
              { id: 2, title: "Pelantikan Pengurus Komisariat UNIAS", img: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=2070&auto=format&fit=crop", desc: "Acara pelantikan pengurus komisariat Universitas Nias (UNIAS) masa bakti 2026-2027 berjalan dengan lancar dan hikmat." },
              { id: 3, title: "Aksi Sosial Donor Darah Dies Natalis", img: "https://images.unsplash.com/photo-1536856136534-bb679c52a9aa?q=80&w=2070&auto=format&fit=crop", desc: "Merayakan Dies Natalis, GMKI Cabang Gunungsitoli mengadakan aksi sosial donor darah bersama Palang Merah Indonesia." },
            ].map((item) => (
              <div key={item.id} className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all">
                <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                  <img 
                    src={item.img} 
                    alt="Berita"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-blue shadow-sm">
                    Kegiatan
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs text-slate-500 font-medium mb-3 flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5" />
                    24 Oktober 2026
                  </div>
                  <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-brand-blue transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                    {item.desc}
                  </p>
                  <Link href={`/publikasi/${item.id}`} className="text-brand-gold font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Baca Selengkapnya <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center sm:hidden">
            <Link href="/publikasi" className="inline-flex items-center gap-2 text-brand-blue font-medium hover:text-brand-blue-light transition-colors px-6 py-3 rounded-full border border-slate-200">
              Lihat Semua Berita <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
