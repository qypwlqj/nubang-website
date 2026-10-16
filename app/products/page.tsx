import { Suspense } from "react";
import type { Metadata } from "next";
import ProductCatalog from "@/components/ProductCatalog";
import { isProductGroup } from "@/lib/product-groups";
import { products, getSummary } from "@/lib/products";

export const metadata: Metadata = {
  title: "润滑产品 — 添加剂、润滑油脂成品与原料 | 努邦科技",
  description: "浏览努邦润滑产品资料，按类别、型号、名称及用途检索，查看产品介绍、技术指标和包装储存要求。",
};

type Props = { searchParams: Promise<{ group?: string }> };
async function Catalog({ searchParams }: Props) {
  const params = await searchParams;
  const group = params.group && isProductGroup(params.group) ? params.group : "";
  return <ProductCatalog key={group} group={group} products={products.map(getSummary)} />;
}
export default function ProductsPage({ searchParams }: Props) {
  return (
    <main id="main-content" className="catalog-page">
      <section className="catalog-hero catalog-container">
        <div><p className="catalog-eyebrow"><span className="catalog-dot catalog-tone-0" aria-hidden="true" /> NUBANG · PRODUCT COLLECTION</p><h1 className="display">润滑产品<span className="text-accent-red">。</span></h1><p className="catalog-hero-description">从产品介绍到技术指标，<br />找到适合您配方与应用的产品。</p></div>
        <dl className="catalog-hero-stats"><div><dd className="display">03</dd><dt>产品大类</dt></div><div><dd className="display">{products.length}</dd><dt>产品 / 系列</dt></div></dl>
      </section>
      <section className="catalog-container catalog-collection" aria-labelledby="catalog-heading">
        <h2 id="catalog-heading" className="sr-only">润滑产品目录</h2>
        <Suspense fallback={<p role="status">正在载入产品目录…</p>}><Catalog searchParams={searchParams} /></Suspense>
      </section>
    </main>
  );
}
