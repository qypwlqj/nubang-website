"use client";

import { useState } from "react";

const NAV = [
  { href: "#home", label: "首页" },
  { href: "#about", label: "公司简介" },
  { href: "#products", label: "润滑产品" },
  { href: "#lab", label: "实验室方案" },
  { href: "#services", label: "服务与支持" },
  { href: "#contact", label: "联系我们" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      data-open={open || undefined}
      className="hdr fixed inset-x-3 top-0 z-50 sm:inset-x-6 lg:inset-x-10"
    >
      {/* utility strip */}
      <div className="hidden items-center gap-5 border-b border-nav-line px-6 text-[13px] text-muted md:flex lg:px-8">
        <a href="tel:13813339996" className="flex items-center gap-2 py-2.5 hover:text-ink">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          138 1333 9996
        </a>
        <span className="h-4 w-px bg-nav-rule" aria-hidden="true" />
        <span className="py-2.5">上海市嘉定区胜辛南路 500 号</span>
        <span className="ml-auto py-2.5">润滑油原料 · 添加剂 · 成品油定制</span>
      </div>

      {/* main row */}
      <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="leading-none" aria-label="努邦科技首页">
          <span className="display block text-[22px] tracking-tight sm:text-[26px]">
            NUBANG<span className="text-accent-red">.</span>
          </span>
          <span className="mt-1 block text-[9px] font-medium tracking-[0.28em] text-muted">
            上海努邦科技有限公司
          </span>
        </a>

        <nav aria-label="主导航" className="hidden items-center gap-6 text-[14px] font-medium lg:flex">
          {NAV.slice(1, 5).map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-accent-red">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-ink px-5 py-2.5 text-[14px] font-semibold text-white transition-transform hover:scale-[1.03] sm:block"
          >
            获取报价
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-label="打开菜单"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-nav-rule lg:hidden"
          >
            <span className={`h-[2px] w-4 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-[2px] w-4 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* mobile panel */}
      <div
        className={`overflow-hidden border-t border-nav-line transition-[max-height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          open ? "max-h-[420px]" : "max-h-0 border-t-0"
        }`}
      >
        <nav aria-label="移动端导航" className="flex flex-col px-6 py-4">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-nav-line py-3.5 text-[16px] font-semibold last:border-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:13813339996"
            className="mt-3 rounded-full bg-ink px-5 py-3 text-center text-[14px] font-semibold text-white"
          >
            拨打 138 1333 9996
          </a>
        </nav>
      </div>
    </header>
  );
}
