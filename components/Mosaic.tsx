import oilJpg from "@/lib/img/oil";
import labJpg from "@/lib/img/lab";
import gearsJpg from "@/lib/img/gears";
import additivesJpg from "@/lib/img/additives";
import serviceJpg from "@/lib/img/service";

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
      { kind: "photo", src: oilJpg, label: "润滑油品特写" },
      { kind: "photo", src: gearsJpg, label: "工业齿轮润滑" },
      { kind: "blue" },
      { kind: "photo", src: serviceJpg, label: "工程师现场服务" },
    ],
  },
  {
    dir: "up",
    cells: [
      { kind: "yellow" },
      { kind: "photo", src: labJpg, label: "化学实验室" },
      { kind: "dark" },
      { kind: "photo", src: additivesJpg, label: "添加剂研究" },
      { kind: "red" },
    ],
  },
  {
    dir: "down",
    cells: [
      { kind: "blue" },
      { kind: "cream" },
      { kind: "photo", src: gearsJpg, label: "工业齿轮润滑" },
      { kind: "yellow" },
      { kind: "photo", src: oilJpg, label: "润滑油品特写" },
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
        role="img"
        aria-label={cell.label}
        style={{ ["--pic" as string]: `url(${cell.src})` }}
      />
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
