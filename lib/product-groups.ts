export const productGroups = [
  { id: "raw-materials", name: "原料", description: "查找添加剂、基础油、成脂原料及中间体，满足配方与生产需求。", image: "/images/business-raw-materials.webp" },
  { id: "lubricants", name: "润滑油脂成品", description: "按设备工况与应用场景查找可直接使用的润滑油、润滑脂及相关成品。", image: "/images/business-lubricants.webp" },
] as const;

export type ProductGroupId = (typeof productGroups)[number]["id"];
export function isProductGroup(value: string): value is ProductGroupId {
  return productGroups.some((group) => group.id === value);
}
export function classifyExistingProduct(category: string) {
  if (category === "润滑脂增稠剂") return { group: "raw-materials" as const, category: "润滑脂增稠原料" };
  if (category === "其他产品") return { group: "raw-materials" as const, category: "添加剂中间体" };
  return { group: "raw-materials" as const, category };
}
