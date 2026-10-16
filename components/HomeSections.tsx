import CompanyAchievements from "@/components/CompanyAchievements";
import LabScene from "@/components/LabScene";
import Link from "next/link";
import { ArrowRight, Check, Headphones, Lightbulb, Wrench } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

function SectionLink({ href, children, dark = false }: { href: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <Button asChild variant="brand">
      <Link href={href} className={`mt-8 inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-[14px] font-semibold transition-transform hover:scale-[1.03] ${dark ? "bg-paper text-ink" : "bg-ink text-white"}`}>
        {children}<ArrowRight size={16} aria-hidden="true" />
      </Link>
    </Button>
  );
}

export function HomeAbout() {
  return (
    <section aria-labelledby="home-about-heading" className="relative z-10 bg-paper pt-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-10">
        <Reveal>
          <p className="text-[11px] font-semibold tracking-[0.3em] text-muted">01 — 公司简介</p>
          <h2 id="home-about-heading" className="display mt-5 max-w-3xl text-[32px] leading-[1.15] sm:text-[46px]">
            以润滑新材料技术为根基，<br />服务工业客户的每一台设备。
          </h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-[1.8] text-muted">
            上海努邦科技有限公司成立于 2012 年，曾用名上海努邦润滑新材料有限公司。
            业务覆盖润滑油原料、添加剂与成品油供应，并提供成品油定制与化学实验室整体解决方案，
            从原料选型到应用支持，为工业客户提供合适的润滑方案。
          </p>
          <CompanyAchievements />
          <SectionLink href="/about">了解公司简介</SectionLink>
        </Reveal>
      </div>
    </section>
  );
}

const LAB_GROUPS = [
  { en: "SOFTWARE", title: "软件服务支持", description: "AI 驱动的油液数据平台，让每一次检测都沉淀为可复用的知识。", accent: "text-accent-blue", items: ["AI 油液状态监测与异常预警", "智能配方推荐与模拟计算", "检测数据自动汇总与报告生成", "云端实验室数据管理平台"] },
  { en: "EQUIPMENT", title: "实验室设备", description: "从单台仪器到整室规划，建设可靠、高效、可扩展的化学实验室。", accent: "text-accent-red", items: ["油品性能检测分析仪器", "模拟台架与评定设备", "实验室整体规划与建设", "设备安装调试与人员培训"] },
];

export function HomeLab() {
  return (
    <section aria-labelledby="home-lab-heading" className="grain-dark grain relative rounded-t-[32px] bg-card-dark py-24 text-paper">
      <div className="relative z-[2] mx-auto max-w-6xl px-5 sm:px-10">
        <Reveal>
          <div className="flex flex-wrap items-center gap-4">
            <p className="text-[11px] font-semibold tracking-[0.3em] text-paper/50">03 — 化学实验室解决方案</p>
            <Badge variant="brand" className="rounded-full border border-accent-yellow/40 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-accent-yellow">AI 赋能</Badge>
          </div>
          <h2 id="home-lab-heading" className="display mt-6 max-w-3xl text-[32px] leading-[1.15] sm:text-[46px]">软件与设备协同的<br />实验室整体方案。</h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-[1.8] text-paper/60">以软件服务支持与实验室设备连接油品检测、数据分析与应用需求，提供化学实验室整体解决方案。</p>
        </Reveal>
        <Reveal delay={80}><LabScene /></Reveal>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {LAB_GROUPS.map((group, index) => (
            <Reveal key={group.en} delay={(index + 1) * 80}>
              <Card variant="brand" className="h-full overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04] p-8">
                <p className={`text-[10px] font-bold tracking-[0.25em] ${group.accent}`}>{group.en}</p>
                <h3 className="display mt-4 text-[26px]">{group.title}</h3>
                <p className="mt-3 text-[13.5px] leading-[1.7] text-paper/55">{group.description}</p>
                <ul className="mt-7 space-y-3.5">
                  {group.items.map((item) => <li key={item} className="flex items-start gap-3 text-[14px] text-paper/85"><Check size={16} className={`mt-0.5 flex-none ${group.accent}`} aria-hidden="true" />{item}</li>)}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal><SectionLink href="/lab" dark>查看实验室方案</SectionLink></Reveal>
      </div>
    </section>
  );
}

const SERVICES = [
  { title: "成品油定制 & 实验室设备定制", description: "围绕您的工况、产线与预算，提供成品油定制调配与实验室设备定制服务。", Icon: Wrench },
  { title: "售后服务与保障", description: "跟进产品使用与用油异常，协助定位技术问题，为后续应用提供支持。", Icon: Headphones },
  { title: "专业原料技术指导", description: "提供原料选型、配方优化与应用技术指导，让好原料发挥好效果。", Icon: Lightbulb },
];

export function HomeServices() {
  return (
    <section aria-labelledby="home-services-heading" className="bg-paper py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-10">
        <Reveal>
          <p className="text-[11px] font-semibold tracking-[0.3em] text-muted">04 — 服务与支持</p>
          <h2 id="home-services-heading" className="display mt-5 text-[32px] leading-[1.1] sm:text-[46px]">不止卖产品，<br className="sm:hidden" />更陪伴每一公里运转。</h2>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {SERVICES.map(({ title, description, Icon }, index) => (
            <Reveal key={title} delay={index * 100}>
              <Card asChild variant="brand"><article className="grain flex h-full flex-col rounded-[22px] border border-nav-line bg-card-cream p-7">
                <div className="flex items-center justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white"><Icon size={22} strokeWidth={1.8} aria-hidden="true" /></span><span className="display text-[30px] text-ink/15">0{index + 1}</span></div>
                <h3 className="display mt-6 text-[20px] leading-[1.25]">{title}</h3>
                <p className="relative z-[2] mt-3 text-[13.5px] leading-[1.75] text-muted">{description}</p>
              </article></Card>
            </Reveal>
          ))}
        </div>
        <Reveal><SectionLink href="/services">了解服务与支持</SectionLink></Reveal>
      </div>
    </section>
  );
}

export function HomeContact() {
  return (
    <section aria-labelledby="home-contact-heading" className="bg-paper px-5 pb-12 sm:px-10 sm:pb-16">
      <div className="grain relative mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-accent-yellow px-7 py-12 sm:px-12 sm:py-16">
        <Reveal className="relative z-[2] grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.3em] text-ink/60">05 — 联系我们</p>
            <h2 id="home-contact-heading" className="display mt-6 text-[32px] leading-[1.15] sm:text-[48px]">让每一台设备，<br />都得到合适的润滑。</h2>
            <p className="mt-6 max-w-xl text-[15px] leading-[1.8] text-ink/70">咨询原料、添加剂、成品油或实验室方案，与我们沟通您的实际应用需求。</p>
          </div>
          <div className="flex flex-col items-start lg:items-end">
            <a href="tel:13813339996" className="display text-[26px] leading-none transition-opacity hover:opacity-65 sm:text-[30px]">138 1333 9996</a>
            <p className="mt-3 text-[12px] text-ink/60">微信同号 · 欢迎沟通您的需求</p>
            <SectionLink href="/contact">查看联系方式</SectionLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
