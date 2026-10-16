"use client";

import Link from "next/link";
import { useState } from "react";
import type { ProductSummary } from "@/lib/products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";

function normalize(value: string) { return value.toLowerCase().replace(/[\s\-－–—]/g, ""); }

export default function ProductCatalog({ products, categories }: {
  products: ProductSummary[];
  categories: { name: string; count: number }[];
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("source");
  const terms = query.trim().split(/\s+/).filter(Boolean).map(normalize);
  const visible = products.filter((product) =>
    (!category || product.category === category) && terms.every((term) =>
      normalize(product.model + product.name + product.category + product.introduction).includes(term)),
  );
  if (sort === "model") visible.sort((a, b) => a.model.localeCompare(b.model, "en", { numeric: true }));
  function reset() { setQuery(""); setCategory(""); setSort("source"); }

  return (
    <div className="catalog-browser">
      <aside className="catalog-sidebar" aria-label="产品分类筛选">
        <p className="catalog-eyebrow">按产品类别浏览</p>
        <div className="catalog-category-buttons">
          <Button variant="brand" type="button" aria-pressed={!category} onClick={() => setCategory("")}><span>全部产品</span><span>{products.length}</span></Button>
          {categories.map((item, index) => (
            <Button variant="brand" type="button" key={item.name} aria-pressed={category === item.name} onClick={() => setCategory(item.name)}>
              <span className="catalog-category-label"><span className={`catalog-dot catalog-tone-${index % 3}`} aria-hidden="true" />{item.name}</span><span>{item.count}</span>
            </Button>
          ))}
        </div>
        <div className="catalog-mobile-category">
          <Label className="leading-normal" htmlFor="product-category">产品类别</Label>
          <NativeSelect variant="brand" id="product-category" value={category} onChange={(event) => setCategory(event.target.value)}>
            <NativeSelectOption value="">全部产品（{products.length}）</NativeSelectOption>
            {categories.map((item) => <NativeSelectOption key={item.name} value={item.name}>{item.name}（{item.count}）</NativeSelectOption>)}
          </NativeSelect>
        </div>
        <p className="catalog-sidebar-note">按型号、名称或用途关键词查找，查看技术指标与包装储存信息。</p>
      </aside>

      <div className="catalog-results">
        <div className="catalog-controls">
          <div className="catalog-search">
            <Label className="leading-normal" htmlFor="product-search">搜索产品</Label>
            <div className="catalog-search-field">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></svg>
              <Input variant="brand" id="product-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="例如：T103、抗氧、液压油" autoComplete="off" />
            </div>
          </div>
          <div className="catalog-sort"><Label className="leading-normal" htmlFor="product-sort">排列方式</Label><NativeSelect variant="brand" id="product-sort" value={sort} onChange={(event) => setSort(event.target.value)}><NativeSelectOption value="source">资料顺序</NativeSelectOption><NativeSelectOption value="model">型号顺序</NativeSelectOption></NativeSelect></div>
        </div>
        <div className="catalog-result-meta">
          <p role="status" aria-live="polite" aria-atomic="true">{category || "全部产品"} <span>· {visible.length} 款产品</span></p>
          {query || category || sort !== "source" ? <Button variant="brand" type="button" onClick={reset}>重置筛选</Button> : null}
        </div>
        {visible.length ? (
          <div className="catalog-grid">
            {visible.map((product) => (
              <Card asChild variant="brand" key={product.slug}><Link className={`catalog-card catalog-tone-${product.categoryIndex % 3}`} href={`/products/${product.slug}`} aria-label={`查看 ${product.model} ${product.name} 的产品资料`}>
                <div className="catalog-card-top"><Badge variant="brand" className="catalog-card-category">{product.category}</Badge><span className="catalog-card-arrow" aria-hidden="true">↗</span></div>
                <p className="display catalog-model">{product.model}</p>
                {product.name !== product.model ? <h3>{product.name}</h3> : null}
                <p className="catalog-card-description">{product.introduction}</p>
                <dl className="catalog-preview">{product.preview.map((row, index) => <div key={index}><dt>{row.label}</dt><dd>{row.value}</dd></div>)}</dl>
                <span className="catalog-card-link">产品详情与技术指标 <span aria-hidden="true">↗</span></span>
              </Link></Card>
            ))}
          </div>
        ) : <div className="catalog-empty"><p className="display">没有找到匹配的产品</p><p>试试其他型号、名称或用途关键词，或清除当前分类筛选。</p><Button variant="brand" type="button" onClick={reset}>查看全部 {products.length} 款产品</Button></div>}
      </div>
    </div>
  );
}
