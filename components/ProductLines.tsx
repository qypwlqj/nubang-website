import AISoftwareCard from "@/components/AISoftwareCard";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { Card } from "@/components/ui/card";

const PRODUCTS = [
  {
    index: "01",
    image: "/images/business-raw-materials.webp",
    title: "原料",
    en: "RAW MATERIALS",
    desc: "基础油、功能添加剂、润滑脂增稠原料与添加剂中间体，按配方功能与生产需求分类选择。",
    href: "/products?group=raw-materials",
    linkLabel: "浏览原料产品",
    cls: "bg-accent-yellow cell-solid",
    dark: false,
  },
  {
    index: "02",
    image: "/images/business-lubricants.webp",
    title: "润滑油脂成品",
    en: "FINISHED LUBRICANTS",
    desc: "润滑油、润滑脂及相关成品，按设备工况与应用场景查找产品，查看技术指标与使用信息。",
    href: "/products?group=lubricants",
    linkLabel: "浏览润滑油脂成品",
    cls: "bg-accent-blue cell-solid",
    dark: false,
  },
  {
    index: "03",
    image: "/images/business-lab-equipment.webp",
    title: "实验室设备",
    en: "LAB EQUIPMENT",
    desc: "油品性能检测分析仪器、模拟台架与评定设备，配合实验室规划、安装调试与人员培训。",
    href: "/lab",
    linkLabel: "了解实验室设备",
    cls: "bg-accent-red cell-solid",
    dark: false,
  },
  {
    index: "04",
    image: "/images/business-custom.webp",
    title: "定制服务",
    en: "CUSTOM BLENDING",
    desc: "按设备工况与工艺要求定制调配成品油，从配方设计、小样测试到批量交付一站式服务。",
    href: "/contact",
    linkLabel: "咨询定制服务",
    cls: "bg-card-dark cell-dark grain-dark",
    dark: true,
  },
];

export default function ProductLines() {
  return (
    <section aria-labelledby="product-lines-heading" className="bg-paper py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-10">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.3em] text-muted">02 — 产品与服务</p>
              <h2 id="product-lines-heading" className="display mt-5 text-[32px] leading-[1.1] sm:text-[46px]">五大产品线</h2>
            </div>
            <p className="max-w-sm text-[14px] leading-[1.7] text-muted">
              原料、润滑油脂成品、实验室设备、定制服务与软件服务，连接材料、检测和企业数字化管理。
            </p>
          </Reveal>

          <Reveal className="mt-10"><AISoftwareCard /></Reveal>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.index} delay={i * 90}>
                <Card asChild variant="brand"><article className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-nav-line bg-card-cream transition-transform duration-500 hover:-translate-y-1.5 grain">
                  <div className="relative aspect-[4/3] overflow-hidden bg-card-dark">
                    <Image src={p.image} alt={`${p.title}产品应用示例（AI 生成）`} fill sizes="(min-width: 1280px) 256px, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none" />
                    <span className={`absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-[13px] font-bold ${p.cls} ${p.dark ? "text-paper" : "text-ink"}`}>{p.index}</span>
                  </div>
                  <div className={`relative z-[2] px-5 py-3 text-[9px] font-bold tracking-[0.15em] ${p.cls} ${p.dark ? "text-paper/80" : "text-ink/70"}`}>{p.en}</div>
                  <div className="relative z-[2] flex flex-1 flex-col bg-card-cream p-5">
                    <h3 className="display text-[22px]">{p.title}</h3>
                    <p className="mt-3 flex-1 text-[13.5px] leading-[1.7] text-muted">{p.desc}</p>
                    <Link href={p.href} className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold">
                      {p.linkLabel}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </Link>
                  </div>
                </article></Card>
              </Reveal>
            ))}
          </div>
          <p className="mt-5 text-[11px] leading-relaxed text-muted">产品配图为 AI 生成示意，不代表实际品牌、包装或交付规格。</p>
        </div>
      </section>
  );
}
