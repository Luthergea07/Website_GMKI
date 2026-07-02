"use client";

import { useState } from "react";
import { Calendar, ArrowRight, User, Image as ImageIcon } from "lucide-react";
import Link from "next/link";

const beritaData = [
  { id: 1, kategori: "kegiatan", judul: "Diskusi Publik: Peran Pemuda Kristen", tanggal: "24 Okt 2026", penulis: "Humas", img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" },
  { id: 2, kategori: "kegiatan", judul: "Pelantikan Pengurus Komisariat UNIAS", tanggal: "12 Okt 2026", penulis: "BPC", img: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=2070&auto=format&fit=crop" },
  { id: 3, kategori: "kegiatan", judul: "Aksi Sosial Donor Darah Dies Natalis", tanggal: "5 Okt 2026", penulis: "Panitia", img: "https://images.unsplash.com/photo-1536856136534-bb679c52a9aa?q=80&w=2070&auto=format&fit=crop" },
  { id: 4, kategori: "kegiatan", judul: "Masa Perkenalan (Maper) Gelombang II", tanggal: "28 Sep 2026", penulis: "BPC", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" },
  { id: 5, kategori: "opini", judul: "Teologi Pembebasan di Era Digital", tanggal: "1 Sep 2026", penulis: "Kerohanian", img: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop" },
  { id: 6, kategori: "kegiatan", judul: "Pelatihan Jurnalistik Tingkat Dasar", tanggal: "20 Agu 2026", penulis: "Humas", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" },
  { id: 7, kategori: "opini", judul: "Menjaga Integritas Sebagai Mahasiswa Kristen", tanggal: "15 Agu 2026", penulis: "Ketua Cabang", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" },
];

const galeriData = [
  { id: 1, caption: "Diskusi Publik", img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" },
  { id: 2, caption: "Pelantikan Komisariat", img: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=2070&auto=format&fit=crop" },
  { id: 3, caption: "Aksi Sosial Donor Darah", img: "https://images.unsplash.com/photo-1536856136534-bb679c52a9aa?q=80&w=2070&auto=format&fit=crop" },
  { id: 4, caption: "Maper Gelombang II", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" },
  { id: 5, caption: "Ibadah Awal Bulan", img: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop" },
  { id: 6, caption: "Pelatihan Jurnalistik", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" },
];

export default function PublikasiPage() {
  const [activeTab, setActiveTab] = useState("semua");

  const filteredBerita = activeTab === "semua" 
    ? beritaData 
    : beritaData.filter(item => item.kategori === activeTab);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-brand-blue pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-brand-gold font-bold tracking-wider uppercase text-sm mb-4 block">Media & Publikasi</span>
          <h1 className="text-4xl md:text-5xl font-bold font-outfit text-white mb-6">Berita & Informasi Terkini</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Ikuti terus perkembangan organisasi, kegiatan pelayanan, dan opini dari kader-kader GMKI Cabang Gunungsitoli.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div className="bg-white border-b border-slate-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex overflow-x-auto gap-8 no-scrollbar">
          <button 
            onClick={() => setActiveTab("semua")}
            className={`whitespace-nowrap py-4 border-b-2 font-medium transition-colors ${activeTab === 'semua' ? 'border-brand-blue text-brand-blue font-bold' : 'border-transparent text-slate-500 hover:text-brand-blue'}`}
          >
            Semua Berita
          </button>
          <button 
            onClick={() => setActiveTab("kegiatan")}
            className={`whitespace-nowrap py-4 border-b-2 font-medium transition-colors ${activeTab === 'kegiatan' ? 'border-brand-blue text-brand-blue font-bold' : 'border-transparent text-slate-500 hover:text-brand-blue'}`}
          >
            Kegiatan Organisasi
          </button>
          <button 
            onClick={() => setActiveTab("opini")}
            className={`whitespace-nowrap py-4 border-b-2 font-medium transition-colors ${activeTab === 'opini' ? 'border-brand-blue text-brand-blue font-bold' : 'border-transparent text-slate-500 hover:text-brand-blue'}`}
          >
            Artikel & Opini
          </button>
          <button 
            onClick={() => setActiveTab("galeri")}
            className={`whitespace-nowrap py-4 border-b-2 font-medium transition-colors ${activeTab === 'galeri' ? 'border-brand-blue text-brand-blue font-bold' : 'border-transparent text-slate-500 hover:text-brand-blue'}`}
          >
            Galeri Dokumentasi
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <section className="py-20 bg-slate-50 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* If Not Galeri (Semua, Kegiatan, Opini) */}
          {activeTab !== "galeri" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBerita.length > 0 ? filteredBerita.map((item) => (
                <div key={item.id} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={item.img} 
                      alt={item.judul}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-brand-gold text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm capitalize">
                      {item.kategori}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {item.tanggal}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <User className="w-4 h-4" />
                        {item.penulis}
                      </div>
                    </div>
                    <h3 className="font-bold text-xl text-slate-900 mb-4 group-hover:text-brand-blue transition-colors line-clamp-2">
                      {item.judul}
                    </h3>
                    <div className="mt-auto pt-4 border-t border-slate-100">
                      <Link href={`/publikasi/${item.id}`} className="text-brand-blue font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                        Baca Selengkapnya <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )) : (
                <div className="col-span-full text-center py-12 text-slate-500">
                  Belum ada konten untuk kategori ini.
                </div>
              )}
            </div>
          )}

          {/* If Galeri Tab */}
          {activeTab === "galeri" && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
              {galeriData.map((img) => (
                <div key={img.id} className="group relative rounded-2xl overflow-hidden aspect-square bg-slate-200 shadow-sm hover:shadow-xl transition-all cursor-pointer">
                  <img src={img.img} alt={img.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-brand-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <ImageIcon className="text-white w-6 h-6 mb-2" />
                    <span className="text-white font-bold">{img.caption}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-16 flex justify-center">
            <button className="bg-white border border-slate-200 hover:border-brand-blue hover:text-brand-blue text-slate-600 font-medium px-8 py-3 rounded-full transition-all shadow-sm">
              Muat Lebih Banyak
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
