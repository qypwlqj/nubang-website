import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "block",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "block",
});

export const metadata: Metadata = {
  title: "努邦科技 NUBANG — 润滑油原料 · 添加剂 · 成品油定制",
  description:
    "上海努邦科技有限公司成立于 2012 年，专注润滑油原料、添加剂与成品油供应，提供成品油定制与化学实验室整体解决方案。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${archivo.variable} ${inter.variable}`}>
      <body className="bg-paper text-ink font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent-yellow focus:px-5 focus:py-3 focus:font-semibold focus:text-ink"
        >
          跳转到主要内容
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
