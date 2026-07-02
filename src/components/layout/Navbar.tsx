"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Beranda", href: "/" },
  { name: "Tentang", href: "/tentang" },
  { name: "Cabang", href: "/cabang" },
  { name: "Publikasi", href: "/publikasi" },
  { name: "Layanan Akademik", href: "/akademik" },
  { name: "Lainnya", isDropdown: true, items: [
    { name: "Transparansi", href: "/transparansi" },
    { name: "Kontak", href: "/kontak" }
  ]}
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              src="/logo.png" 
              alt="Logo GMKI" 
              className="w-10 h-10 object-contain group-hover:scale-105 transition-transform" 
              onError={(e) => {
                // Fallback jika file logo.png belum ada
                e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/id/thumb/7/7b/Logo_GMKI.png/300px-Logo_GMKI.png";
              }}
            />
            <div className="flex flex-col">
              <span className="font-outfit font-bold text-lg text-brand-blue leading-tight">GMKI</span>
              <span className="text-xs text-slate-500 font-medium leading-tight">Cabang Gunungsitoli</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.isDropdown ? (
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-md transition-colors"
                  >
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    href={link.href!}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                      pathname === link.href
                        ? "text-brand-blue bg-brand-blue/5"
                        : "text-slate-600 hover:text-brand-blue hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {link.isDropdown && (
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-2 border border-slate-100"
                      >
                        {link.items?.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={`block px-4 py-2 text-sm transition-colors ${
                              pathname === item.href
                                ? "text-brand-blue bg-brand-blue/5"
                                : "text-slate-600 hover:text-brand-blue hover:bg-slate-50"
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/gabung"
              className="text-sm font-medium text-brand-blue hover:text-brand-blue-light px-3 py-2 transition-colors"
            >
              Gabung
            </Link>
            <Link
              href="/donasi"
              className="text-sm font-medium bg-brand-gold hover:bg-brand-gold-light text-white px-5 py-2.5 rounded-full transition-colors shadow-sm shadow-brand-gold/30"
            >
              Donasi
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-brand-blue p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.isDropdown ? (
                    <div className="space-y-1">
                      <div className="px-3 py-2 text-sm font-medium text-slate-400 uppercase tracking-wider">
                        {link.name}
                      </div>
                      {link.items?.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`block px-3 py-2 rounded-md text-base font-medium ${
                            pathname === item.href
                              ? "text-brand-blue bg-brand-blue/5"
                              : "text-slate-600 hover:text-brand-blue hover:bg-slate-50"
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={link.href!}
                      className={`block px-3 py-2 rounded-md text-base font-medium ${
                        pathname === link.href
                          ? "text-brand-blue bg-brand-blue/5"
                          : "text-slate-600 hover:text-brand-blue hover:bg-slate-50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 mt-4 border-t border-slate-100 flex flex-col gap-2">
                <Link
                  href="/gabung"
                  className="w-full text-center text-base font-medium text-brand-blue bg-brand-blue/5 hover:bg-brand-blue/10 px-4 py-3 rounded-xl transition-colors"
                >
                  Gabung Bersama GMKI
                </Link>
                <Link
                  href="/donasi"
                  className="w-full text-center text-base font-medium bg-brand-gold hover:bg-brand-gold-light text-white px-4 py-3 rounded-xl transition-colors"
                >
                  Dukung Kami (Donasi)
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
