import data from "@/data/products.json";

export type Product = {
  model: string;
  name: string;
  title: string;
  introduction: string;
  technicalTables: { headers: string[]; rows: string[][] }[];
  technicalNotes: string;
  storagePackaging: string;
};
export const categories: { name: string; products: Product[] }[] = data.categories;
export const products = categories.flatMap((category, categoryIndex) =>
  category.products.map((product) => ({ ...product, category: category.name, categoryIndex, slug: product.model.toLowerCase() })),
);
export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
export function getSummary(product: (typeof products)[number]) {
  return {
    model: product.model, name: product.name, introduction: product.introduction,
    category: product.category, categoryIndex: product.categoryIndex, slug: product.slug,
    preview: product.technicalTables.flatMap((table) => table.rows).slice(0, 3).map((row) => ({ label: row[0], value: row[1] })),
  };
}
export type ProductSummary = ReturnType<typeof getSummary>;
