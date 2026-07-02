import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Twitter } from "lucide-react";

export const metadata = {
  title: "Kontak & Kerja Sama | GMKI Cabang Gunungsitoli",
  description: "Hubungi GMKI Cabang Gunungsitoli untuk informasi, undangan, atau kerja sama.",
};

export default function KontakPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-brand-blue pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-blue-light z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-outfit text-white mb-6">Hubungi Kami</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Kami terbuka untuk komunikasi, undangan kegiatan, serta menjalin kerja sama dengan berbagai pihak.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10 relative z-20">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Info Kontak */}
          <div className="w-full lg:w-1/3 space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
              <h3 className="font-bold text-xl font-outfit text-slate-900 mb-6">Informasi Sekretariat</h3>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-brand-blue/5 text-brand-blue rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Alamat Lengkap</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">Jl. Pendidikan No. 1, Kelurahan Ilir, Kec. Gunungsitoli, Sumatera Utara 22815</p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-brand-blue/5 text-brand-blue rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Telepon / WhatsApp</h4>
                    <p className="text-sm text-slate-600">+62 812-3456-7890 (Humas BPC)</p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-brand-blue/5 text-brand-blue rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Email Resmi</h4>
                    <p className="text-sm text-slate-600">info@gmkigunungsitoli.org</p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-brand-blue/5 text-brand-blue rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Jam Operasional</h4>
                    <p className="text-sm text-slate-600">Senin - Jumat: 10.00 - 18.00 WIB</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-brand-blue text-white rounded-3xl p-8 shadow-sm">
              <h3 className="font-bold text-xl font-outfit mb-6">Sosial Media</h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">Ikuti update terbaru kegiatan kami melalui platform sosial media berikut.</p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-white/10 hover:bg-brand-gold hover:text-white transition-colors rounded-full flex items-center justify-center text-slate-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 hover:bg-brand-gold hover:text-white transition-colors rounded-full flex items-center justify-center text-slate-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 hover:bg-brand-gold hover:text-white transition-colors rounded-full flex items-center justify-center text-slate-300">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Form Pesan */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/40 border border-slate-100">
              <h2 className="text-3xl font-bold font-outfit text-slate-900 mb-2">Kirim Pesan / Pengajuan Kerja Sama</h2>
              <p className="text-slate-500 mb-10 pb-6 border-b border-slate-100">Tim kami akan membalas pesan Anda sesegera mungkin.</p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Nama Lengkap / Instansi</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all" placeholder="Budi / BEM Universitas Nias" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Email Address</label>
                    <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all" placeholder="email@contoh.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Subjek</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all">
                    <option value="">Pilih Subjek Pesan</option>
                    <option value="pertanyaan">Pertanyaan Umum</option>
                    <option value="undangan">Undangan Kegiatan</option>
                    <option value="kerjasama">Pengajuan Kerja Sama</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Pesan Lengkap</label>
                  <textarea rows={6} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all resize-none" placeholder="Tuliskan detail pesan Anda di sini..."></textarea>
                </div>

                <div className="pt-4">
                  <button type="button" className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-brand-gold/20 transition-all w-full md:w-auto">
                    Kirim Pesan
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
