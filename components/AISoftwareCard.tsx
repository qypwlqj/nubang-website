import Link from "next/link";
import { ArrowRight, BrainCircuit, Database, FlaskConical, Workflow } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function AISoftwareCard() {
  return (
    <Card asChild variant="brand">
      <article className="ai-software-card" aria-labelledby="software-line-heading">
        <div className="ai-software-copy">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[12px] font-bold tracking-[0.2em]">05 / SOFTWARE SERVICES</span>
            <Badge variant="brand" className="rounded-full bg-accent-yellow px-3 py-1 text-[11px] font-bold text-ink">AI 大模型 × 行业定制</Badge>
          </div>
          <h3 id="software-line-heading" className="display mt-6 text-[32px] leading-tight sm:text-[42px]">软件服务</h3>
          <p className="display mt-3 text-[22px] leading-[1.4] text-accent-yellow sm:text-[28px]">让 AI 融入化工业务，<br />让软件适配您的管理方式。</p>
          <p className="mt-5 max-w-xl text-[14px] leading-[1.85] text-paper/80">面向化学实验室与化工公司，围绕检测、研发和企业管理流程定制开发软件。结合 AI 大模型与企业知识，减少重复工作，提供 AI 化工软件服务一站式解决方案。</p>
          <ul className="mt-6 flex flex-wrap gap-2 text-[12px]" aria-label="软件服务方向">
            {["实验室管理", "企业业务流程", "AI 知识助手"].map(item => <li key={item} className="rounded-full border border-paper/25 px-3 py-1.5">{item}</li>)}
          </ul>
          <Button asChild variant="brand"><Link href="/services" className="mt-7 inline-flex items-center gap-3 rounded-full bg-accent-yellow px-6 py-3.5 text-[14px] font-bold text-ink transition-transform hover:translate-x-1">了解 AI 软件定制<ArrowRight size={17} aria-hidden="true" /></Link></Button>
        </div>
        <div className="ai-software-visual" role="img" aria-label="方案示意：实验室数据与企业流程连接 AI 大模型，经人工复核形成知识问答、报告草稿与业务协同">
          <div className="ai-visual-top"><span>NUBANG / AI WORKSPACE</span><span>方案示意</span></div>
          <div className="ai-inputs">
            <div><FlaskConical size={21} aria-hidden="true" /><span>化学实验室</span><small>样品 · 检测 · 报告</small></div>
            <div><Workflow size={21} aria-hidden="true" /><span>化工企业</span><small>研发 · 业务 · 管理</small></div>
          </div>
          <div className="ai-connector" />
          <div className="ai-engine"><BrainCircuit size={34} aria-hidden="true" /><div><strong>AI 大模型</strong><span>企业知识 + 定制软件</span></div></div>
          <div className="ai-connector" />
          <div className="ai-outputs"><span>知识问答</span><span>报告草稿</span><span>业务协同</span></div>
          <div className="ai-visual-note"><Database size={14} aria-hidden="true" /><span>按需配置数据权限与人工复核流程</span></div>
        </div>
      </article>
    </Card>
  );
}
