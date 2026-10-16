import type { Metadata } from "next";
import ProductCatalog from "@/components/ProductCatalog";
import ProductLines from "@/components/ProductLines";
import { categories, products, getSummary } from "@/lib/products";

export const metadata: Metadata = {
  title: "单剂产品 — 9 个品类 · 51 款产品 | 努邦科技",
  description: "浏览努邦单剂产品资料，按类别、型号、名称及用途检索，查看产品介绍、技术指标和包装储存要求。",
};

export default function ProductsPage() {
  return (
    <main id="main-content" className="catalog-page">
      <section className="catalog-hero catalog-container">
        <div><p className="catalog-eyebrow"><span className="catalog-dot catalog-tone-0" aria-hidden="true" /> NUBANG · PRODUCT COLLECTION</p><h1 className="display">单剂产品<span className="text-accent-red">。</span></h1><p className="catalog-hero-description">从产品介绍到技术指标，<br />找到适合您配方与应用的单剂。</p></div>
        <dl className="catalog-hero-stats"><div><dd className="display">{categories.length.toString().padStart(2, "0")}</dd><dt>产品品类</dt></div><div><dd className="display">{products.length}</dd><dt>单剂产品</dt></div></dl>
      </section>
      <section className="catalog-container catalog-collection" aria-labelledby="catalog-heading">
        <h2 id="catalog-heading" className="sr-only">单剂产品目录</h2>
        <ProductCatalog categories={categories.map((category) => ({ name: category.name, count: category.products.length }))} products={products.map(getSummary)} />
      </section>
      <div className="catalog-business"><ProductLines /></div>
    </main>
  );
}
