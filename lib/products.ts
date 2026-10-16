import data from "@/data/products.json";
import importedData from "@/data/imported-products.json";
import { classifyExistingProduct, type ProductGroupId } from "@/lib/product-groups";

export type Product = {
  model: string;
  name: string;
  title: string;
  introduction: string;
  technicalTables: { title?: string; headers: string[]; rows: string[][]; notes?: string[] }[];
  technicalNotes: string;
  storagePackaging: string;
};
export type CatalogProduct = Product & {
  group: ProductGroupId;
  category: string;
  categoryIndex: number;
  slug: string;
  variants: string[];
  applications: string[];
  performance: string[];
  reviewNotes: string[];
  sourceFilename: string;
  sourceLocator: string;
  image: string;
};
export const categories: { name: string; products: Product[] }[] = data.categories;
const originalProducts: CatalogProduct[] = categories.flatMap((category, categoryIndex) =>
  category.products.map((product) => ({ ...product, ...classifyExistingProduct(category.name), categoryIndex, slug: product.model.toLowerCase(), variants: [], applications: [], performance: [], reviewNotes: [], sourceFilename: "", sourceLocator: "", image: "" })),
);
const importedProducts: CatalogProduct[] = importedData.map((product) => ({
  ...product, group: product.group as ProductGroupId,
  categoryIndex: product.group === "additives" ? 0 : product.group === "lubricants" ? 1 : 2,
}));
export const products: CatalogProduct[] = [...originalProducts, ...importedProducts];
export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
export function getSummary(product: CatalogProduct) {
  return {
    model: product.model, name: product.name, introduction: product.introduction, variants: product.variants,
    group: product.group, category: product.category, categoryIndex: product.categoryIndex, slug: product.slug,
    previewLabel: product.variants.length ? `参数摘录 · ${product.technicalTables[0]?.headers[1] ?? "典型数据"}` : "",
    needsReview: product.reviewNotes.some((note) => note.startsWith("原资料待确认")),
    preview: product.technicalTables.flatMap((table) => table.rows).filter((row) => !(product.slug === "csa" && row[0].includes("密度"))).slice(0, 3).map((row) => ({ label: row[0], value: row[1] })),
  };
}
export type ProductSummary = ReturnType<typeof getSummary>;
