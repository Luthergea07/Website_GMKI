import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import PublicLayoutWrapper from "@/components/layout/PublicLayoutWrapper";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GMKI Cabang Gunungsitoli",
  description: "Website Resmi Gerakan Mahasiswa Kristen Indonesia Cabang Gunungsitoli",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased font-inter bg-slate-50 text-slate-900 min-h-screen flex flex-col`}
      >
        <PublicLayoutWrapper>
          {children}
        </PublicLayoutWrapper>
      </body>
    </html>
  );
}
