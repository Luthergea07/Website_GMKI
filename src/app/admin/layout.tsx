import Link from "next/link";
import { LayoutDashboard, Users, FileText, Settings, LogOut, FileImage } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-brand-blue text-white flex flex-col fixed inset-y-0 left-0 z-50">
        <div className="p-6 border-b border-white/10">
          <Link href="/admin" className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="Logo GMKI" 
              className="w-10 h-10 object-contain bg-white rounded-lg p-1" 
            />
            <div>
              <div className="font-bold text-lg leading-tight">Admin</div>
              <div className="text-xs text-brand-gold">GMKI Gunungsitoli</div>
            </div>
          </Link>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 bg-white/10 rounded-xl font-medium text-white">
            <LayoutDashboard className="w-5 h-5 text-brand-gold" />
            Dashboard
          </Link>
          <Link href="/admin/berita" className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors">
            <FileText className="w-5 h-5" />
            Kelola Berita
          </Link>
          <Link href="/admin/pengurus" className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors">
            <Users className="w-5 h-5" />
            Data Pengurus
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors">
            <FileImage className="w-5 h-5" />
            Media & Galeri
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors">
            <Settings className="w-5 h-5" />
            Pengaturan
          </Link>
        </nav>
        
        <div className="p-4 border-t border-white/10">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-slate-300 hover:text-red-400 hover:bg-red-400/10 transition-colors">
            <LogOut className="w-5 h-5" />
            Kembali ke Web
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-64 min-w-0">
        <header className="bg-white h-20 border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-40">
          <h2 className="text-xl font-bold font-outfit text-slate-800">Administrator Panel</h2>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 border border-slate-200">
              A
            </div>
            <div className="hidden md:block">
              <div className="text-sm font-bold text-slate-900">Admin Utama</div>
              <div className="text-xs text-slate-500">admin@gmkigunungsitoli.org</div>
            </div>
          </div>
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
