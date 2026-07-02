import { CheckCircle2, FileText, Upload, Send } from "lucide-react";

export const metadata = {
  title: "Gabung GMKI | GMKI Cabang Gunungsitoli",
  description: "Formulir pendaftaran dan persyaratan keanggotaan GMKI Cabang Gunungsitoli.",
};

const persyaratan = [
  "Mahasiswa Kristen yang terdaftar pada perguruan tinggi (negeri maupun swasta).",
  "Mengisi formulir pendaftaran anggota secara lengkap.",
  "Melampirkan pas foto berwarna ukuran 3x4 (1 lembar).",
  "Melampirkan fotokopi Kartu Tanda Mahasiswa (KTM) atau Surat Keterangan Aktif Kuliah.",
  "Bersedia mengikuti Masa Perkenalan (Maper) yang diselenggarakan oleh BPC.",
  "Menerima dan menyetujui AD/ART GMKI serta Peraturan Organisasi."
];

export default function GabungPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-brand-blue pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-outfit text-white mb-6">Bergabung Bersama Kami</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Mari bertumbuh bersama dalam iman, ilmu, dan pengabdian. Jadilah bagian dari pergerakan mahasiswa Kristen di Gunungsitoli.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Persyaratan Info */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 sticky top-28">
              <div className="w-12 h-12 bg-brand-gold/10 text-brand-gold flex items-center justify-center rounded-xl mb-6">
                <FileText className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold font-outfit text-slate-900 mb-6">Persyaratan Pendaftaran</h2>
              <ul className="space-y-4">
                {persyaratan.map((syarat, idx) => (
                  <li key={idx} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-sm leading-relaxed">{syarat}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-slate-100">
                <h3 className="font-bold text-slate-900 mb-2">Punya Pertanyaan?</h3>
                <p className="text-sm text-slate-500 mb-4">Hubungi narahubung kami untuk informasi lebih lanjut mengenai pendaftaran.</p>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="block text-center bg-green-50 text-green-600 font-bold py-3 rounded-xl border border-green-200 hover:bg-green-100 transition-colors">
                  WhatsApp Admin (0812-3456-7890)
                </a>
              </div>
            </div>
          </div>

          {/* Form Pendaftaran */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/40 border border-slate-100">
              <h2 className="text-3xl font-bold font-outfit text-slate-900 mb-2">Formulir Pendaftaran Calon Anggota</h2>
              <p className="text-slate-500 mb-10 pb-6 border-b border-slate-100">Silakan isi formulir di bawah ini dengan data yang sebenar-benarnya.</p>
              
              <form className="space-y-8">
                {/* Data Pribadi */}
                <div>
                  <h3 className="text-lg font-bold text-brand-blue mb-4">Data Pribadi</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Nama Lengkap</label>
                      <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Tempat, Tanggal Lahir</label>
                      <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all" placeholder="Gunungsitoli, 1 Januari 2005" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Jenis Kelamin</label>
                      <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all">
                        <option value="">Pilih Jenis Kelamin</option>
                        <option value="L">Laki-laki</option>
                        <option value="P">Perempuan</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Nomor WhatsApp</label>
                      <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all" placeholder="0812xxxxxx" />
                    </div>
                  </div>
                </div>

                {/* Data Akademik */}
                <div className="pt-6 border-t border-slate-100">
                  <h3 className="text-lg font-bold text-brand-blue mb-4">Data Akademik</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-medium text-slate-700">Perguruan Tinggi</label>
                      <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all" placeholder="Universitas Nias..." />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Fakultas</label>
                      <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all" placeholder="Fakultas Keguruan..." />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Program Studi / Jurusan</label>
                      <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all" placeholder="Pendidikan Bahasa..." />
                    </div>
                  </div>
                </div>

                {/* Upload Dokumen */}
                <div className="pt-6 border-t border-slate-100">
                  <h3 className="text-lg font-bold text-brand-blue mb-4">Unggah Dokumen (Opsional)</h3>
                  <p className="text-sm text-slate-500 mb-4">Anda dapat mengunggah berkas sekarang atau menyerahkannya secara fisik nanti.</p>
                  <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 mx-auto bg-slate-100 text-slate-400 group-hover:text-brand-blue group-hover:bg-brand-blue/10 rounded-full flex items-center justify-center mb-3 transition-colors">
                      <Upload className="w-6 h-6" />
                    </div>
                    <p className="text-sm font-medium text-slate-700 mb-1">Klik untuk unggah file atau seret file ke sini</p>
                    <p className="text-xs text-slate-400">PDF, JPG, atau PNG (Maks 2MB)</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <div className="flex items-start gap-3 mb-8">
                    <input type="checkbox" id="agreement" className="mt-1 shrink-0 w-4 h-4 text-brand-blue rounded border-slate-300 focus:ring-brand-blue" />
                    <label htmlFor="agreement" className="text-sm text-slate-600 leading-relaxed">
                      Saya menyatakan bahwa data yang saya isi adalah benar. Saya bersedia mengikuti seluruh proses pendaftaran dan menerima AD/ART serta Peraturan Organisasi GMKI apabila diterima sebagai anggota.
                    </label>
                  </div>
                  
                  <button type="button" className="w-full flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-light text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-blue/20 transition-all">
                    Kirim Pendaftaran
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
