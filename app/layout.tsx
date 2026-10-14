import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
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
      <body className="bg-paper text-ink font-sans">{children}</body>
    </html>
  );
}
