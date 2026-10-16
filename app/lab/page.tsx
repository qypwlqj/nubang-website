import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "实验室方案 | 努邦科技 NUBANG",
};

const LAB_SOFTWARE = [
  "AI 油液状态监测与异常预警",
  "智能配方推荐与模拟计算",
  "检测数据自动汇总与报告生成",
  "云端实验室数据管理平台",
];

const LAB_DEVICES = [
  "油品性能检测分析仪器",
  "模拟台架与评定设备",
  "实验室整体规划与建设",
  "设备安装调试与人员培训",
];

export default function LabPage() {
  return (
    <main id="main-content" tabIndex={-1} className="pt-[104px] md:pt-[144px]">
      <section className="grain-dark grain relative rounded-t-[32px] bg-card-dark py-24 text-paper">
        <div className="mx-auto max-w-6xl px-5 sm:px-10">
          <Reveal>
            <div className="flex flex-wrap items-center gap-4">
              <p className="text-[11px] font-semibold tracking-[0.3em] text-paper/50">03 — 化学实验室解决方案</p>
              <Badge variant="brand" className="flex items-center gap-1.5 rounded-full border border-accent-yellow/40 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-accent-yellow">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-yellow opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-yellow" />
                </span>
                AI 赋能
              </Badge>
            </div>
            <h1 className="display mt-6 max-w-3xl text-[32px] leading-[1.15] sm:text-[46px]">
              软件与设备协同的
              <br />
              实验室整体方案。
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-[1.8] text-paper/60">
              以 AI 分析平台连接实验数据与生产决策：软件持续学习油品数据，设备精准完成每一项检测，
              让实验室真正成为研发的发动机。
            </p>
          </Reveal>

          <div className="mt-14 grid gap-4 lg:grid-cols-2">
            <Reveal delay={80}>
              <Card variant="brand" className="group relative h-full overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04] p-8 transition-colors duration-500 hover:border-accent-blue/50">
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-40 blur-3xl transition-opacity duration-700 group-hover:opacity-70"
                  style={{ background: "radial-gradient(circle, #9fd5f7 0%, transparent 70%)" }}
                  aria-hidden="true"
                />
                <p className="text-[10px] font-bold tracking-[0.25em] text-accent-blue">SOFTWARE</p>
                <h2 className="display mt-4 text-[26px]">软件服务支持</h2>
                <p className="mt-3 text-[13.5px] leading-[1.7] text-paper/55">
                  AI 驱动的油液数据平台，让每一次检测都沉淀为可复用的知识。
                </p>
                <ul className="mt-7 space-y-3.5">
                  {LAB_SOFTWARE.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[14px] text-paper/85">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9fd5f7" strokeWidth="2.4" className="mt-0.5 flex-none" aria-hidden="true">
                        <path d="M4 12.5 9.5 18 20 6.5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>

            <Reveal delay={160}>
              <Card variant="brand" className="group relative h-full overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04] p-8 transition-colors duration-500 hover:border-accent-red/50">
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-40 blur-3xl transition-opacity duration-700 group-hover:opacity-70"
                  style={{ background: "radial-gradient(circle, #ef5d44 0%, transparent 70%)" }}
                  aria-hidden="true"
                />
                <p className="text-[10px] font-bold tracking-[0.25em] text-accent-red">EQUIPMENT</p>
                <h2 className="display mt-4 text-[26px]">实验室设备</h2>
                <p className="mt-3 text-[13.5px] leading-[1.7] text-paper/55">
                  从单台仪器到整室规划，建设可靠、高效、可扩展的化学实验室。
                </p>
                <ul className="mt-7 space-y-3.5">
                  {LAB_DEVICES.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[14px] text-paper/85">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef5d44" strokeWidth="2.4" className="mt-0.5 flex-none" aria-hidden="true">
                        <path d="M4 12.5 9.5 18 20 6.5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
