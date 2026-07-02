import Link from "next/link";
import { ArrowLeft, FileText, CheckCircle2, AlertCircle } from "lucide-react";

export const metadata = {
  title: "Pratinjau Laporan Keuangan | GMKI Cabang Gunungsitoli",
};

export default function LaporanViewer({ params }: { params: { id: string } }) {
  // Dummy data (ecek-ecek) untuk simulasi isi laporan
  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/transparansi" className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-blue-light font-medium mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Daftar Laporan
        </Link>

        {/* Simulasi Viewer Dokumen */}
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden">
          {/* Header Dokumen */}
          <div className="bg-brand-blue text-white px-8 py-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h1 className="font-outfit font-bold text-xl">Laporan Keuangan (Pratinjau Dokumen)</h1>
                <p className="text-slate-300 text-sm">Dokumen ID: {params.id}</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-green-500/20 text-green-300 rounded-full border border-green-500/30 text-sm font-medium">
              <CheckCircle2 className="w-4 h-4" />
              Terverifikasi
            </div>
          </div>

          {/* Isi Dokumen (Ecek-ecek) */}
          <div className="p-8 md:p-12">
            <div className="max-w-2xl mx-auto">
              {/* Kop Surat Simulasi */}
              <div className="text-center mb-10 border-b-2 border-slate-900 pb-6">
                <h2 className="text-xl font-bold uppercase mb-1 text-slate-900">GERAKAN MAHASISWA KRISTEN INDONESIA</h2>
                <h3 className="text-lg font-bold uppercase mb-3 text-slate-800">CABANG GUNUNGSITOLI</h3>
                <p className="text-sm text-slate-600">Jl. Pendidikan No. 1, Gunungsitoli, Sumatera Utara</p>
              </div>

              {/* Konten Laporan */}
              <h4 className="font-bold text-lg text-center mb-8 text-slate-900 uppercase underline">
                RINGKASAN LAPORAN KEUANGAN KUARTAL INI
              </h4>

              <div className="space-y-8 text-slate-700">
                <p className="text-justify leading-relaxed">
                  Laporan ini disusun sebagai bentuk transparansi dan pertanggungjawaban Badan Pengurus Cabang (BPC) GMKI Gunungsitoli atas pengelolaan dana operasional dan kegiatan pelayanan organisasi. Berikut adalah rekapitulasi singkat perputaran dana:
                </p>

                {/* Tabel Dummy */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-100 text-slate-900">
                        <th className="p-4 font-bold border-b border-slate-200">Keterangan</th>
                        <th className="p-4 font-bold border-b border-slate-200 text-right">Jumlah (Rp)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-100">
                        <td className="p-4 font-medium text-slate-600">Saldo Awal</td>
                        <td className="p-4 text-right">15.000.000</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="p-4 font-medium text-slate-600">Pemasukan (Iuran & Donasi)</td>
                        <td className="p-4 text-right text-green-600 font-medium">+ 8.500.000</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="p-4 font-medium text-slate-600">Pengeluaran (Operasional & Kegiatan)</td>
                        <td className="p-4 text-right text-red-500 font-medium">- 11.200.000</td>
                      </tr>
                      <tr className="bg-brand-blue/5">
                        <td className="p-4 font-bold text-slate-900">Saldo Akhir</td>
                        <td className="p-4 text-right font-bold text-brand-blue">12.300.000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="flex items-start gap-3 p-4 bg-amber-50 text-amber-800 rounded-xl border border-amber-200">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <p className="text-sm">
                    <strong>Catatan:</strong> Data di atas hanyalah data simulasi (pratinjau) sebagai contoh untuk fitur transparansi keuangan ini. 
                  </p>
                </div>
              </div>
              
              {/* Tanda Tangan Simulasi */}
              <div className="mt-16 flex justify-end">
                <div className="text-center">
                  <p className="mb-16 text-slate-600">Gunungsitoli, {new Date().toLocaleDateString('id-ID')}</p>
                  <p className="font-bold text-slate-900 underline">Yohanes Putra</p>
                  <p className="text-sm text-slate-500">Bendahara Cabang</p>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
