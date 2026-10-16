import Image from "next/image";

export default function LabScene() {
  return (
    <figure className="mt-10">
      <div className="relative aspect-[16/9] overflow-hidden rounded-[22px] border border-white/10 sm:aspect-[21/9]">
        <Image src="/images/lab-solutions.webp" alt="油品检测实验室整体方案示意，展示检测仪器与实验工作台" fill sizes="(max-width: 768px) 100vw, 1072px" className="object-cover" />
      </div>
      <figcaption className="mt-3 text-[11px] leading-relaxed text-paper/50">实验室场景为 AI 生成示意，具体配置以项目方案为准。</figcaption>
    </figure>
  );
}
