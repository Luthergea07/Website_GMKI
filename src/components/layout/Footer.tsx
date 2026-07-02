"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white pt-16 pb-8 border-t border-brand-blue-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group mb-6">
              <img 
                src="/logo.png" 
                alt="Logo GMKI" 
                className="w-12 h-12 object-contain" 
                onError={(e) => {
                  e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/id/thumb/7/7b/Logo_GMKI.png/300px-Logo_GMKI.png";
                }}
              />
              <div className="flex flex-col">
                <span className="font-outfit font-bold text-xl text-white leading-tight">GMKI</span>
                <span className="text-sm text-slate-300 font-medium leading-tight">Cabang Gunungsitoli</span>
              </div>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed">
              Ut Omnes Unum Sint. Tinggi Iman, Tinggi Ilmu, Tinggi Pengabdian.
              Menjadi wadah pembentukan kader yang berintegritas dan profesional.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://www.facebook.com/share/18sMr7TZHL/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-blue-light flex items-center justify-center text-slate-300 hover:text-white hover:bg-brand-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/gmkigunungsitoli?igsh=cGtoYmF1OGs0ZGlo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-blue-light flex items-center justify-center text-slate-300 hover:text-white hover:bg-brand-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-blue-light flex items-center justify-center text-slate-300 hover:text-white hover:bg-brand-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h3 className="font-outfit font-bold text-lg mb-6 text-brand-gold">Jelajahi</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/tentang" className="text-slate-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/50"></span>
                  Tentang GMKI
                </Link>
              </li>
              <li>
                <Link href="/cabang" className="text-slate-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/50"></span>
                  Profil Cabang
                </Link>
              </li>
              <li>
                <Link href="/publikasi" className="text-slate-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/50"></span>
                  Berita & Publikasi
                </Link>
              </li>
              <li>
                <Link href="/akademik" className="text-slate-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/50"></span>
                  Layanan Akademik
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h3 className="font-outfit font-bold text-lg mb-6 text-brand-gold">Partisipasi</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/gabung" className="text-slate-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/50"></span>
                  Pendaftaran Anggota
                </Link>
              </li>
              <li>
                <Link href="/donasi" className="text-slate-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/50"></span>
                  Donasi & Dukungan
                </Link>
              </li>
              <li>
                <Link href="/transparansi" className="text-slate-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/50"></span>
                  Transparansi Keuangan
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h3 className="font-outfit font-bold text-lg mb-6 text-brand-gold">Kontak Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm leading-relaxed">
                  Jl. Pendidikan No. 1, Gunungsitoli, Sumatera Utara, Indonesia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <span className="text-slate-300 text-sm">+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <span className="text-slate-300 text-sm">medkominfogmkigunungsitoli@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-blue-light pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} GMKI Cabang Gunungsitoli. Hak cipta dilindungi.
          </p>
          <div className="flex gap-6 text-sm text-slate-400">
            <Link href="/syarat" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
            <Link href="/privasi" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
