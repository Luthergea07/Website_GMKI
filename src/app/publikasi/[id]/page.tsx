import Link from "next/link";
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Link as LinkIcon } from "lucide-react";

export const metadata = {
  title: "Baca Berita | GMKI Cabang Gunungsitoli",
};

export default function DetailBeritaPage({ params }: { params: { id: string } }) {
  // Dummy data (ecek-ecek) untuk simulasi isi berita
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Article Header */}
      <section className="bg-slate-50 pt-32 pb-12 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/publikasi" className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-blue-light font-medium mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Semua Berita
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-brand-gold text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Berita Kegiatan
            </span>
            <span className="text-slate-500 text-sm flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              Oktober 2026
            </span>
            <span className="text-slate-500 text-sm flex items-center gap-1.5">
              <User className="w-4 h-4" />
              Humas BPC
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold font-outfit text-slate-900 leading-tight mb-6">
            Detail Berita (Pratinjau Simulasi ID: {params.id})
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Ini adalah halaman contoh (ecek-ecek) yang menampilkan kerangka dari sebuah artikel berita secara penuh.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          <div className="rounded-3xl overflow-hidden mb-12 aspect-[21/9] bg-slate-200 shadow-lg border border-slate-100">
            <img 
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" 
              alt="Ilustrasi Berita" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="prose prose-lg prose-slate prose-a:text-brand-blue max-w-none text-justify">
            <p>
              <strong>GUNUNGSITOLI</strong> - Paragraf ini adalah teks simulasi (dummy text) yang dibuat khusus untuk memperlihatkan bagaimana bentuk sebuah artikel jika sudah diisi penuh nantinya. Gerakan Mahasiswa Kristen Indonesia (GMKI) Cabang Gunungsitoli terus berkomitmen dalam melayani gereja, perguruan tinggi, dan masyarakat.
            </p>
            <p>
              Pada kegiatan kali ini, banyak mahasiswa dan anggota masyarakat yang turut hadir meramaikan jalannya acara. Kegiatan ini merupakan bagian dari program kerja tahunan yang dirancang oleh Badan Pengurus Cabang untuk meningkatkan kapasitas dan kualitas sumber daya manusia (SDM) di wilayah kepulauan Nias.
            </p>
            <blockquote>
              "Kutipan dari ketua panitia atau narasumber akan ditampilkan di sini. Ini memberikan penekanan khusus terhadap pesan yang ingin disampaikan dalam acara tersebut."
            </blockquote>
            <p>
              Dengan antusiasme yang sangat tinggi, diharapkan ke depannya akan lebih banyak lagi program-program serupa yang bisa dilaksanakan. Sinergitas antar komisariat juga sangat dibutuhkan guna menyukseskan visi dan misi organisasi.
            </p>
            <p>
              Semoga kegiatan ini dapat memberikan dampak yang positif dan menginspirasi seluruh kader GMKI di mana pun berada. Ut Omnes Unum Sint.
            </p>
          </div>

          {/* Share & Tags */}
          <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900 mr-2">Tag:</span>
              <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-sm font-medium hover:bg-slate-200 cursor-pointer transition-colors">Organisasi</span>
              <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-sm font-medium hover:bg-slate-200 cursor-pointer transition-colors">Pemuda</span>
              <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-sm font-medium hover:bg-slate-200 cursor-pointer transition-colors">Kegiatan</span>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="font-bold text-slate-900 mr-2 flex items-center gap-2">
                <Share2 className="w-4 h-4" /> Bagikan:
              </span>
              <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:text-white hover:bg-blue-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:text-white hover:bg-sky-500 transition-colors">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:text-white hover:bg-slate-800 transition-colors">
                <LinkIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
