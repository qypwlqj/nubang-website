import Image from "next/image";

const SCENES = {
  company: { src: "/images/company-introduction.webp", alt: "润滑原料与产品应用交流场景示意", caption: "业务场景为 AI 生成示意，不代表公司实际场地或人员。" },
  services: { src: "/images/service-support.webp", alt: "实验室软件定制与润滑应用技术支持场景示意", caption: "服务场景为 AI 生成示意，软件界面与服务内容以实际方案为准。" },
} as const;

export default function EditorialScene({ kind }: { kind: keyof typeof SCENES }) {
  const scene = SCENES[kind];
  return (
    <figure className="mt-10">
      <div className="relative aspect-[16/9] overflow-hidden rounded-[22px] border border-nav-line bg-card-cream sm:aspect-[21/9]">
        <Image src={scene.src} alt={scene.alt} fill sizes="(max-width: 768px) 100vw, 1072px" className="object-cover" style={{ objectPosition: kind === "company" ? "50% 62%" : "50% 50%" }} />
      </div>
      <figcaption className="mt-3 text-[11px] leading-relaxed text-muted">{scene.caption}</figcaption>
    </figure>
  );
}
