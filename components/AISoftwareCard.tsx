import Link from "next/link";
import { ArrowRight, BrainCircuit } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function AISoftwareCard() {
  return (
    <Card asChild variant="brand">
      <article className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-nav-line bg-card-cream transition-transform duration-500 hover:-translate-y-1.5 grain" aria-labelledby="software-line-heading">
        <div className="relative flex aspect-[4/3] flex-col items-center justify-center gap-3 overflow-hidden bg-card-dark p-5 text-paper" role="img" aria-label="AI 大模型与化工定制软件方案示意">
          <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent-yellow text-[13px] font-bold text-ink">05</span>
          <BrainCircuit size={42} className="text-accent-yellow" aria-hidden="true" />
          <strong className="display text-[24px] text-accent-yellow">AI 大模型</strong>
          <span className="text-[11px] tracking-wider text-paper/80">企业知识 × 定制软件</span>
        </div>
        <div className="relative z-[2] bg-accent-yellow px-5 py-3 text-[9px] font-bold tracking-[0.15em] text-ink/70">AI / SOFTWARE SERVICES</div>
        <div className="relative z-[2] flex flex-1 flex-col bg-card-cream p-5">
          <h3 id="software-line-heading" className="display text-[22px]">软件服务</h3>
          <p className="mt-3 flex-1 text-[13.5px] leading-[1.7] text-muted">面向化学实验室与化工公司，结合 AI 大模型定制管理软件，减少重复工作，提供 AI 化工软件服务一站式解决方案。</p>
          <Link href="/services" className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold">了解 AI 软件定制<ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden="true" /></Link>
        </div>
      </article>
    </Card>
  );
}
