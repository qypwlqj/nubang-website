import Link from "next/link";
import { Button } from "@/components/ui/button";
import Mosaic from "@/components/Mosaic";
import ProductLines from "@/components/ProductLines";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="relative flex min-h-[100svh] flex-col lg:block">
        <div className="relative z-10 flex flex-1 flex-col justify-center px-5 pt-[150px] pb-12 sm:px-10 lg:h-[100svh] lg:w-[560px] lg:justify-center lg:pt-[120px] lg:pb-[60px] lg:pl-[86px]">
          <p className="rise flex items-center gap-2 text-[10px] font-semibold tracking-[0.22em] text-muted sm:text-[11px] sm:tracking-[0.3em]" style={{ animationDelay: "0.2s" }}>
            <span className="inline-block h-2 w-2 bg-accent-red" aria-hidden="true" />
            SHANGHAI NUBANG TECHNOLOGY · EST. 2012
          </p>

          <h1 className="display mt-6 text-[58px] leading-[0.98] tracking-[-0.04em] sm:text-[76px] lg:text-[80px]">
            <span className="mask-line"><span style={{ animationDelay: "0.30s" }}>润滑科技</span></span>
            <span className="mask-line"><span style={{ animationDelay: "0.385s" }}>驱动工业</span></span>
            <span className="mask-line"><span className="text-accent-red" style={{ animationDelay: "0.47s" }}>高效运转</span></span>
          </h1>

          <p className="rise mt-7 max-w-[460px] text-[16px] leading-[1.65] text-muted" style={{ animationDelay: "0.6s" }}>
            上海努邦科技有限公司成立于 2012 年，专注润滑油原料、添加剂与成品油供应，
            以化学实验室与 AI 分析能力为核心，提供成品油定制与一站式润滑解决方案。
          </p>

          <div className="rise mt-9 flex items-center gap-5" style={{ animationDelay: "0.7s" }}>
            <Button asChild variant="brand"><Link
              href="/contact"
              className="rounded-full bg-ink px-7 py-3.5 text-[15px] font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              联系我们
            </Link></Button>
            <Link href="/products" className="group flex items-center gap-2 text-[15px] font-semibold">
              了解产品
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-nav-rule transition-colors group-hover:bg-ink group-hover:text-white" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          </div>
        </div>

        <Mosaic />
      </section>
      <ProductLines />
    </main>
  );
}
