import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { Card } from "@/components/ui/card";

const PRODUCTS = [
  {
    index: "01",
    image: "/images/product-additives.webp",
    title: "添加剂",
    en: "ADDITIVES",
    desc: "抗磨、极压、抗氧化等高性能功能添加剂，显著提升油品综合表现与使用寿命。",
    cls: "bg-accent-red cell-solid",
    dark: false,
  },
  {
    index: "02",
    image: "/images/product-raw-materials.webp",
    title: "原料",
    en: "RAW MATERIALS",
    desc: "优质基础油与功能性原料，供应链稳定，批次品质可追溯，适配多种调和需求。",
    cls: "bg-accent-yellow cell-solid",
    dark: false,
  },
  {
    index: "03",
    image: "/images/product-lubricants.webp",
    title: "成品油",
    en: "LUBRICANTS",
    desc: "液压油、齿轮油、金属加工液等工业油品，规格齐全，满足通用工业场景需求。",
    cls: "bg-accent-blue cell-solid",
    dark: false,
  },
  {
    index: "04",
    image: "/images/product-custom.webp",
    title: "成品油定制",
    en: "CUSTOM BLENDING",
    desc: "按设备工况与工艺要求定制调配成品油，从配方设计、小样测试到批量交付一站式服务。",
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
              <p className="text-[11px] font-semibold tracking-[0.3em] text-muted">02 — 润滑产品</p>
              <h2 id="product-lines-heading" className="display mt-5 text-[32px] leading-[1.1] sm:text-[46px]">四大产品线</h2>
            </div>
            <p className="max-w-sm text-[14px] leading-[1.7] text-muted">
              从原料、添加剂到成品油与定制调配，覆盖润滑产品全链路。
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
                    <Link href={p.index === "01" ? "/products" : "/contact"} className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold">
                      {p.index === "01" ? "浏览单剂产品" : "咨询此类产品"}
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
