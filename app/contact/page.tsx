import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "联系我们 | 努邦科技 NUBANG",
};

export default function ContactPage() {
  return (
    <main id="main-content" tabIndex={-1} className="pt-[104px] md:pt-[144px]">
      <section className="grain-dark grain relative rounded-t-[32px] bg-ink pb-10 pt-24 text-paper">
        <div className="mx-auto max-w-6xl px-5 sm:px-10">
          <Reveal>
            <h1 className="display max-w-3xl text-[34px] leading-[1.12] sm:text-[54px]">
              让每一台设备，
              <br />
              都得到<span className="text-accent-yellow">合适的润滑</span>。
            </h1>
            <Button asChild variant="brand"><a
              href="tel:13813339996"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-paper px-8 py-4 text-[15px] font-bold text-ink transition-transform hover:scale-[1.03]"
            >
              立即咨询
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a></Button>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-16 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="text-[10px] font-bold tracking-[0.25em] text-paper/40">电话咨询</p>
                <a href="tel:13813339996" className="display mt-3 block text-[22px] hover:text-accent-yellow">
                  138 1333 9996
                </a>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.25em] text-paper/40">公司地址</p>
                <p className="mt-3 text-[14px] leading-[1.7] text-paper/80">
                  上海市嘉定区
                  <br />
                  胜辛南路 500 号 10 幢 1046 室
                </p>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.25em] text-paper/40">抖音</p>
                <a
                  href="https://www.douyin.com/search/%E5%8A%AA%E9%82%A6%E7%A7%91%E6%8A%80"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 flex items-center gap-2.5 text-[14px] font-semibold hover:text-accent-yellow"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M16.6 3c.4 2 1.8 3.6 3.9 3.9v3c-1.6 0-3-.5-4.2-1.3v6.2a5.7 5.7 0 1 1-5.7-5.7c.3 0 .7 0 1 .1v3.1a2.7 2.7 0 1 0 1.7 2.5V3h3.3z" />
                  </svg>
                  抖音搜索「努邦科技」
                </a>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.25em] text-paper/40">微信</p>
                <p className="mt-3 flex items-center gap-2.5 text-[14px] font-semibold">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M8.7 4C4.9 4 2 6.6 2 9.8c0 1.8 1 3.4 2.5 4.4l-.6 2 2.2-1.1c.5.1 1 .2 1.6.2h.4A6.5 6.5 0 0 1 8.7 4zm-2.2 3.5a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6zm4.9 0a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6zM22 14.1c0-2.8-2.6-5-5.8-5s-5.8 2.2-5.8 5 2.6 5 5.8 5c.5 0 1-.1 1.5-.2l2 1-.5-1.8c1.6-.9 2.8-2.4 2.8-4zm-7.8-1.7a.7.7 0 1 1 0-1.4.7.7 0 0 1 0 1.4zm4 0a.7.7 0 1 1 0-1.4.7.7 0 0 1 0 1.4z" />
                  </svg>
                  微信同号：138 1333 9996
                </p>
              </div>
            </div>
          </Reveal>

        </div>
      </section>
    </main>
  );
}
