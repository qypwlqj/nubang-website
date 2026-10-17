import Link from "next/link";

export default function Footer() {
  return (
    <footer className="grain-dark grain relative bg-ink py-12 sm:py-14 text-paper">
      <div className="relative z-[2] mx-auto max-w-6xl px-5 sm:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div>
            <Link href="/" className="display inline-block text-[28px]" aria-label="努邦科技首页">
              NUBANG<span className="text-accent-red">.</span>
            </Link>
            <p className="mt-3 text-[14px] text-paper/80">上海努邦科技有限公司</p>
            <p className="mt-2 text-[13px] leading-[1.7] text-paper/60">
              上海市嘉定区胜辛南路 500 号 10 幢 1046 室
            </p>
          </div>
          <div className="space-y-3 text-[14px]">
            <a
              href="https://www.douyin.com/search/%E5%8A%AA%E9%82%A6%E7%A7%91%E6%8A%80"
              target="_blank"
              rel="noreferrer"
              className="inline-block text-paper/80 hover:text-accent-yellow"
            >
              抖音搜索「努邦科技」<span className="sr-only">（在新窗口打开）</span>
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-[12px] text-paper/50">
          <p>© 2012–2026 上海努邦科技有限公司 · 版权所有</p>
          <p>润滑油原料 · 添加剂 · 成品油定制 · 化学实验室解决方案</p>
        </div>
      </div>
    </footer>
  );
}
