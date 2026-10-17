import EditorialScene from "@/components/EditorialScene";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "服务与支持 | 努邦科技 NUBANG",
};

const SERVICES = [
  {
    index: "01",
    title: "成品油定制 & 实验室软件定制",
    desc: "围绕您的工况与实验室业务流程，提供成品油定制调配，以及检测数据管理、报告生成和分析流程等实验室软件定制服务。",
    icon: (
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.7-.7-.7-2.7 2.6-2.6z" />
    ),
  },
  {
    index: "02",
    title: "7×24h 售后服务与保障",
    desc: "全天候响应机制，技术问题快速定位，用油异常即时跟进，售后支持全年无休。",
    icon: (
      <path d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10zm0-18a8 8 0 0 1 8 8v1a2 2 0 0 1-2 2h-2v-6h4M4 13h4v6H6a2 2 0 0 1-2-2v-4z" />
    ),
  },
  {
    index: "03",
    title: "专业原料技术指导",
    desc: "资深应用工程师团队，提供原料选型、配方优化与现场应用技术指导，让好原料发挥好效果。",
    icon: (
      <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.8.7 1 1.5 1 2.5h6c0-1 .2-1.8 1-2.5A6 6 0 0 0 12 3z" />
    ),
  },
];

export default function ServicesPage() {
  return (
    <main id="main-content" tabIndex={-1} className="pt-[104px] md:pt-[144px]">
      <section className="bg-paper py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-10">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.3em] text-muted">04 — 服务与支持</p>
            <h1 className="display mt-5 text-[32px] leading-[1.1] sm:text-[46px]">
              不止卖产品，
              <br className="sm:hidden" />
              更陪伴每一公里运转。
            </h1>
          </Reveal>

          <Reveal delay={80}><EditorialScene kind="services" /></Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.index} delay={i * 100}>
                <Card asChild variant="brand"><article className="grain flex h-full flex-col rounded-[22px] border border-nav-line bg-card-cream p-7">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        {s.icon}
                      </svg>
                    </span>
                    <span className="display text-[30px] text-ink/15">{s.index}</span>
                  </div>
                  <h2 className="display mt-6 text-[20px] leading-[1.25]">{s.title}</h2>
                  <p className="relative z-[2] mt-3 text-[13.5px] leading-[1.75] text-muted">{s.desc}</p>
                </article></Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
