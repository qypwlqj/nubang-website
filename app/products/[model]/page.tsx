import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { productGroups } from "@/lib/product-groups";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/lib/products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type Props = { params: Promise<{ model: string }> };
export function generateStaticParams() { return products.map((product) => ({ model: product.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { model } = await params;
  const product = getProduct(model);
  return product ? { title: `${product.model} ${product.name} | 努邦润滑产品`, description: product.introduction.replace(/\s+/g, " ").slice(0, 155) } : { title: "未找到产品 | 努邦科技" };
}

export default async function ProductPage({ params }: Props) {
  const { model } = await params;
  const product = getProduct(model);
  if (!product) notFound();
  const related = products.filter((entry) => entry.category === product.category && entry.slug !== product.slug).slice(0, 3);
  return (
    <main id="main-content" className="catalog-page"><div className="catalog-container">
      <nav className="catalog-breadcrumb" aria-label="面包屑导航"><Link href="/">首页</Link><span aria-hidden="true">/</span><Link href="/products">润滑产品</Link><span aria-hidden="true">/</span><Link href={`/products?group=${product.group}`}>{productGroups.find((group) => group.id === product.group)?.name}</Link><span aria-hidden="true">/</span><span aria-current="page">{product.model}</span></nav>
      <header className={`product-heading catalog-tone-${product.categoryIndex % 3}`}>
        <div><Badge asChild variant="brand"><p className="catalog-eyebrow">{product.category}</p></Badge><h1 className="display">{product.model}</h1>{product.name !== product.model ? <p className="product-name">{product.name}</p> : null}</div>
        <div className="product-heading-mark" aria-hidden="true"><span>NB</span><span>PRODUCT<br />INFORMATION</span></div>
      </header>
      {product.variants.length ? <p className="product-variants">型号 / 牌号：{product.variants.join(" · ")}</p> : null}
      {product.reviewNotes.length ? <aside className="product-review" aria-label="资料与选型提示"><h2>资料与选型提示</h2><ul>{product.reviewNotes.map((note) => <li key={note}>{note}</li>)}</ul></aside> : null}
      <div className="product-detail-grid">
        <div className="product-detail-content">
          <section className="product-section" aria-labelledby="introduction-heading"><p className="catalog-eyebrow">01 / INTRODUCTION</p><h2 id="introduction-heading" className="display">产品介绍</h2><div className="product-prose">{product.introduction}</div></section>
          {product.performance.length ? <section className="product-section"><h2 className="display">性能特点</h2><p className="product-table-hint">以下为所提供产品资料中的描述，实际性能以确认后的技术资料和工况验证为准。</p><ul className="product-prose product-list">{product.performance.map((text) => <li key={text}>{text}</li>)}</ul></section> : null}
          {product.applications.length ? <section className="product-section"><h2 className="display">应用与使用建议</h2><ul className="product-prose product-list">{product.applications.map((text) => <li key={text}>{text}</li>)}</ul></section> : null}
          <section className="product-section" aria-labelledby="technical-heading">
            <p className="catalog-eyebrow">02 / TECHNICAL DATA</p><h2 id="technical-heading" className="display">技术指标</h2><p className="product-table-hint">表格可横向滑动查看完整参数与试验方法。</p>
            {product.technicalTables.map((table, tableIndex) => (
              <div key={tableIndex}>{table.title ? <h3 className="product-table-title">{table.title}</h3> : null}<Table className="product-table" containerProps={{ className: "product-table-scroll", role: "region", "aria-label": `${product.model} 技术指标表 ${tableIndex + 1}`, tabIndex: 0 }}>
                <TableCaption className="sr-only m-0">{product.model} {product.name} 技术指标</TableCaption>
                <TableHeader><TableRow>{table.headers.map((header, index) => <TableHead key={index} scope="col">{header}</TableHead>)}</TableRow></TableHeader>
                <TableBody>{table.rows.map((row, rowIndex) => <TableRow key={rowIndex}>{row.map((cell, columnIndex) => columnIndex === 0 ? <TableHead key={columnIndex} scope="row">{cell}</TableHead> : <TableCell key={columnIndex}>{cell}</TableCell>)}</TableRow>)}</TableBody>
              </Table>{table.notes?.length ? <p className="product-table-hint">{table.notes.join(" ")}</p> : null}</div>
            ))}
            {product.image ? <figure className="product-chart"><Image src={product.image} width={534} height={321} alt="HDP 原资料性能曲线：50℃、100℃、130℃下 Lithium 与 Lithium 加1% HDP 的 TORQUE/STRAIN 对比" /><figcaption>原资料性能图。未注明具体型号及坐标单位，曲线不作为精确数值或型号对比依据。</figcaption></figure> : null}
            {product.technicalNotes ? <div className="product-technical-notes product-prose">{product.technicalNotes}</div> : null}
          </section>
          {product.storagePackaging ? <section className="product-section" aria-labelledby="storage-heading"><p className="catalog-eyebrow">03 / STORAGE & PACKAGING</p><h2 id="storage-heading" className="display">包装与储存</h2><div className="product-prose">{product.storagePackaging}</div></section> : null}
          {product.sourceFilename ? <section className="product-section product-source"><h2 className="display">资料来源</h2><p>{product.sourceFilename} · {product.sourceLocator}</p><p>按所提供产品资料整理；性能、环保及标准符合性表述为原资料声明，不代表另行认证。页码因文档排版可能变化，采用文件名与表格定位。包装、技术指标与适用条件请在订购前确认。</p></section> : null}
        </div>
        <Card asChild variant="brand"><aside className="product-aside" aria-label="产品咨询"><p className="catalog-eyebrow">选型与应用咨询</p><p className="display product-aside-title">了解 {product.model}<br />的应用。</p><p>联系我们，沟通您的配方、应用场景与产品需求。</p><Button asChild variant="brand"><Link className="catalog-primary-link" href="/contact">咨询产品应用 <span aria-hidden="true">↗</span></Link></Button><Link className="catalog-back-link" href={`/products?group=${product.group}`}>← 返回此类产品目录</Link></aside></Card>
      </div>
      {related.length ? <section className="product-related" aria-labelledby="related-heading"><div><Badge asChild variant="brand"><p className="catalog-eyebrow">{product.category}</p></Badge><h2 className="display" id="related-heading">同类产品</h2></div><div className="product-related-grid">{related.map((entry) => <Card asChild variant="brand" key={entry.slug}><Link href={`/products/${entry.slug}`}><span className="display">{entry.model}</span><span>{entry.name}</span><span aria-hidden="true">↗</span></Link></Card>)}</div></section> : null}
    </div></main>
  );
}
