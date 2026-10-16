"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const NAV = [
  { href: "/", label: "首页" },
  { href: "/about", label: "公司简介" },
  { href: "/products", label: "润滑产品" },
  { href: "/lab", label: "实验室方案" },
  { href: "/services", label: "服务与支持" },
  { href: "/contact", label: "联系我们" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuPathname, setMenuPathname] = useState(pathname);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Reset the disclosure before rendering a different route, including history navigation.
  if (menuPathname !== pathname) {
    setMenuPathname(pathname);
    setOpen(false);
  }

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        const button = menuButtonRef.current;
        if (button && button.getClientRects().length > 0) button.focus();
      }
    }

    function onPointerDown(event: PointerEvent) {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
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
        <Link href="/" onClick={() => setOpen(false)} className="leading-none" aria-label="努邦科技首页">
          <span className="display block text-[22px] tracking-tight sm:text-[26px]">
            NUBANG<span className="text-accent-red">.</span>
          </span>
          <span className="mt-1 block text-[9px] font-medium tracking-[0.28em] text-muted">
            上海努邦科技有限公司
          </span>
        </Link>

        <nav aria-label="主导航" className="hidden items-center gap-5 text-[14px] font-medium lg:flex">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined} className={`whitespace-nowrap transition-colors hover:text-accent-red ${isActive(item.href) ? "text-accent-red" : ""}`}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="hidden rounded-full bg-ink px-5 py-2.5 text-[14px] font-semibold text-white transition-transform hover:scale-[1.03] sm:block"
          >
            获取报价
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            aria-controls="mobile-navigation"
            aria-expanded={open}
            aria-label={open ? "关闭菜单" : "打开菜单"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-nav-rule lg:hidden"
          >
            <span className={`h-[2px] w-4 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-[2px] w-4 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      <div id="mobile-navigation" hidden={!open} className="max-h-[70dvh] overflow-y-auto border-t border-nav-line lg:hidden">
        <nav aria-label="移动端导航" className="flex flex-col px-6 py-4">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              onClick={() => {
                setOpen(false);
                menuButtonRef.current?.focus();
              }}
              className={`border-b border-nav-line py-3.5 text-[16px] font-semibold last:border-0 ${isActive(item.href) ? "text-accent-red" : ""}`}
            >
              {item.label}
            </Link>
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
