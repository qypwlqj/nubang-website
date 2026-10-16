import Image from "next/image";

type CellDef =
  | { kind: "photo"; src: string; label: string }
  | { kind: "red" }
  | { kind: "yellow" }
  | { kind: "blue" }
  | { kind: "cream" }
  | { kind: "dark" };

const COLS: { dir: "down" | "up"; cells: CellDef[] }[] = [
  {
    dir: "down",
    cells: [
      { kind: "red" },
      { kind: "photo", src: "/images/oil.webp", label: "润滑油品特写" },
      { kind: "photo", src: "/images/gears.webp", label: "工业齿轮润滑" },
      { kind: "blue" },
      { kind: "photo", src: "/images/service.webp", label: "油品仓储与配送服务示意" },
    ],
  },
  {
    dir: "up",
    cells: [
      { kind: "yellow" },
      { kind: "photo", src: "/images/lab.webp", label: "油液样品检测技术服务示意" },
      { kind: "dark" },
      { kind: "photo", src: "/images/additives.webp", label: "润滑油添加剂与原料样品示意" },
      { kind: "red" },
    ],
  },
  {
    dir: "down",
    cells: [
      { kind: "blue" },
      { kind: "cream" },
      { kind: "photo", src: "/images/gears.webp", label: "工业齿轮润滑" },
      { kind: "yellow" },
      { kind: "photo", src: "/images/oil.webp", label: "润滑油品特写" },
    ],
  },
];

const SOLID: Record<string, string> = {
  red: "bg-accent-red cell-solid grain",
  yellow: "bg-accent-yellow cell-solid grain",
  blue: "bg-accent-blue cell-solid grain",
  cream: "bg-card-cream cell-solid grain",
  dark: "bg-card-dark cell-dark grain grain-dark",
};

function Cell({ cell }: { cell: CellDef }) {
  if (cell.kind === "photo") {
    return (
      <div
        className="cell cell-photo grain"
        title={`${cell.label} · AI 生成示意，非实际公司设施照片`}
      >
        <Image
          src={cell.src}
          alt=""
          fill
          unoptimized
          loading="eager"
          sizes="(max-width: 1023px) 33vw, 206px"
          className="object-cover"
        />
      </div>
    );
  }
  return <div className={`cell ${SOLID[cell.kind]}`} aria-hidden="true" />;
}

export default function Mosaic() {
  return (
    <div className="mosaic relative" aria-hidden="true">
      {COLS.map((col, i) => (
        <div
          key={i}
          className={`mosaic-col ${col.dir === "up" ? "up" : ""} c${i + 1}`}
        >
          <div className="mosaic-track">
            {col.cells.map((cell, j) => (
              <Cell key={j} cell={cell} />
            ))}
            {col.cells.map((cell, j) => (
              <Cell key={`clone-${j}`} cell={cell} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
