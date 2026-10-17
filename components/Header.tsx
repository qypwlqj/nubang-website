"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

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
  const [headerHeight, setHeaderHeight] = useState(70);

  // Reset the disclosure before rendering a different route, including history navigation.
  if (menuPathname !== pathname) {
    setMenuPathname(pathname);
    setOpen(false);
  }

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const observer = new ResizeObserver(() => setHeaderHeight(header.getBoundingClientRect().height));
    observer.observe(header);
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      observer.disconnect();
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, []);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
    <header
      ref={headerRef}
      data-open={open || undefined}
      className="hdr fixed inset-x-3 top-0 z-50 sm:inset-x-6 lg:inset-x-10"
    >
      {/* utility strip */}
      <div className="hidden items-center gap-5 border-b border-nav-line px-6 text-[13px] text-muted md:flex lg:px-8">
        <span className="py-2.5">上海市嘉定区胜辛南路 500 号</span>
        <span className="ml-auto py-2.5">润滑油原料 · 添加剂 · 成品油定制</span>
      </div>

      {/* main row */}
      <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" onClick={() => setOpen(false)} className="flex shrink-0 items-center gap-2 leading-none sm:gap-3" aria-label="努邦科技首页">
          <Image src="/images/company-logo.png" alt="" width={1254} height={1254} sizes="48px" className="h-11 w-11 shrink-0 object-contain sm:h-12 sm:w-12" preload />
          <span>
          <span className="display block text-[22px] tracking-tight sm:text-[26px]">
            NUBANG<span className="text-accent-red">.</span>
          </span>
          <span className="mt-1 block text-[9px] font-medium tracking-[0.28em] text-muted">
            上海努邦科技有限公司
          </span>
          </span>
        </Link>

        <nav aria-label="主导航" className="hidden items-center gap-3 text-[13px] font-medium lg:flex xl:gap-5 xl:text-[14px]">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined} className={`whitespace-nowrap transition-colors hover:text-accent-red ${isActive(item.href) ? "text-accent-red" : ""}`}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild variant="brand"><Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="hidden rounded-full bg-ink px-5 py-2.5 text-[14px] font-semibold text-white transition-transform hover:scale-[1.03] sm:block"
          >
            获取报价
          </Link></Button>
          <SheetTrigger asChild>
            <Button
              variant="brand"
              type="button"
              aria-label="打开菜单"
              aria-controls="mobile-navigation"
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-nav-rule lg:hidden"
            >
              <span className="h-[2px] w-4 bg-ink" />
              <span className="h-[2px] w-4 bg-ink" />
            </Button>
          </SheetTrigger>
        </div>
      </div>

    </header>

      <SheetContent
        id="mobile-navigation"
        side="top"
        showCloseButton={false}
        overlayClassName="mobile-navigation-overlay"
        className="mobile-navigation-sheet"
        style={{ top: headerHeight }}
      >
        <SheetTitle className="sr-only">努邦科技网站导航</SheetTitle>
        <SheetDescription className="sr-only">浏览网站页面与联系方式。按 Escape 关闭菜单。</SheetDescription>
        <SheetClose asChild>
          <Button variant="brand" type="button" aria-label="关闭菜单" className="mobile-navigation-close flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-nav-rule bg-white">
            <span className="h-[2px] w-4 translate-y-[3.5px] rotate-45 bg-ink" />
            <span className="h-[2px] w-4 -translate-y-[3.5px] -rotate-45 bg-ink" />
          </Button>
        </SheetClose>
        <div className="max-h-[70dvh] overflow-y-auto">
          <nav aria-label="移动端导航" className="flex flex-col px-6 py-4">
            {NAV.map((item) => (
              <SheetClose asChild key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`border-b border-nav-line py-3.5 text-[16px] font-semibold last:border-0 ${isActive(item.href) ? "text-accent-red" : ""}`}
                >
                  {item.label}
                </Link>
              </SheetClose>
            ))}
            <SheetClose asChild>
              <Button asChild variant="brand"><Link href="/contact" className="mt-3 rounded-full bg-ink px-5 py-3 text-center text-[14px] font-semibold text-white">
                查看联系方式
              </Link></Button>
            </SheetClose>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
