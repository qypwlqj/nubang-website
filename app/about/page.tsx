import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "公司简介 | 努邦科技 NUBANG",
};

const STATS = [
  { value: "2012", label: "公司成立年份", accent: false },
  { value: "100+", label: "产品种类", accent: true },
  { value: "24h", label: "售后支持", accent: false },
  { value: "10+", label: "专利技术", accent: false },
  { value: "3倍", label: "润滑效果提升", accent: true },
];

export default function AboutPage() {
  return (
    <main id="main-content" tabIndex={-1} className="pt-[104px] md:pt-[144px]">
      <section className="relative z-10 bg-paper py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-10">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.3em] text-muted">01 — 公司简介</p>
            <h1 className="display mt-5 max-w-3xl text-[32px] leading-[1.15] sm:text-[46px]">
              以润滑新材料技术为根基，
              <br />
              服务工业客户的每一台设备。
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-[1.8] text-muted">
              努邦科技（曾用名：上海努邦润滑新材料有限公司）深耕润滑行业十余年，业务覆盖润滑油原料、
              添加剂与成品油供应，并提供成品油定制服务。依托自建化学实验室与 AI
              数据分析能力，我们从配方源头把控品质，为工业客户降本增效。
            </p>
          </Reveal>

          <Reveal delay={120}>
            <dl className="mt-14 grid grid-cols-2 gap-y-10 border-t border-ink/10 pt-10 md:grid-cols-5">
              {STATS.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <dt className="order-2 mt-2 text-[13px] text-muted">{s.label}</dt>
                  <dd className={`display order-1 text-[40px] leading-none sm:text-[48px] ${s.accent ? "text-accent-red" : ""}`}>
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
