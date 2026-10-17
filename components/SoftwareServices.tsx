import Link from "next/link";
import { ArrowRight, BrainCircuit, FlaskConical, Workflow } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CAPABILITIES = [
  { Icon: FlaskConical, title: "实验室软件定制", text: "围绕样品流转、检测任务、仪器数据和报告审核，设计适配化学实验室管理方式的软件流程。" },
  { Icon: Workflow, title: "化工企业管理软件", text: "根据研发、采购、库存、销售与审批等业务需求，定制信息协同与管理工具，减少重复录入。" },
  { Icon: BrainCircuit, title: "AI 大模型应用", text: "结合经授权的企业知识与业务数据，按需开发知识问答、资料检索、报告草稿与分析辅助能力。" },
];

export default function SoftwareServices() {
  return (
    <section aria-labelledby="ai-services-heading" className="mb-14 mt-10">
      <Reveal>
        <div className="rounded-[24px] bg-ink p-7 text-paper sm:p-10">
          <p className="text-[11px] font-bold tracking-[0.22em] text-accent-yellow">AI 大模型 × 软件服务</p>
          <h2 id="ai-services-heading" className="display mt-5 max-w-3xl text-[30px] leading-[1.25] sm:text-[42px]">AI 化工软件服务<br />一站式解决方案</h2>
          <p className="mt-5 max-w-3xl text-[15px] leading-[1.9] text-paper/80">服务化学实验室与化工公司，从管理方式与实际工作流程出发，提供需求梳理、软件设计开发、AI 能力集成与上线支持。让软件适配业务，以 AI 辅助知识复用与日常协作，为团队提效。</p>
          <Button asChild variant="brand"><Link href="/contact" className="mt-7 inline-flex items-center gap-3 rounded-full bg-accent-yellow px-6 py-3.5 text-[14px] font-bold text-ink">沟通软件定制需求<ArrowRight size={17} aria-hidden="true" /></Link></Button>
        </div>
      </Reveal>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {CAPABILITIES.map(({ Icon, title, text }, index) => (
          <Reveal key={title} delay={index * 80}><Card variant="brand" className="h-full rounded-[22px] border border-nav-line bg-card-cream p-6">
            <Icon size={26} aria-hidden="true" /><h3 className="display mt-5 text-[21px]">{title}</h3><p className="mt-3 text-[14px] leading-[1.8] text-muted">{text}</p>
          </Card></Reveal>
        ))}
      </div>
      <p className="mt-5 text-[12px] leading-[1.8] text-muted">具体功能、系统对接与部署方式根据需求评估确定；AI 输出需按业务要求人工复核，不替代实验验证、安全判断或专业决策。</p>
    </section>
  );
}
