import type { Metadata } from "next";
import Link from "next/link";
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
  return product ? { title: `${product.model} ${product.name} | 努邦单剂产品`, description: product.introduction.replace(/\s+/g, " ").slice(0, 155) } : { title: "未找到产品 | 努邦科技" };
}

export default async function ProductPage({ params }: Props) {
  const { model } = await params;
  const product = getProduct(model);
  if (!product) notFound();
  const related = products.filter((entry) => entry.category === product.category && entry.slug !== product.slug).slice(0, 3);
  return (
    <main id="main-content" className="catalog-page"><div className="catalog-container">
      <nav className="catalog-breadcrumb" aria-label="面包屑导航"><Link href="/">首页</Link><span aria-hidden="true">/</span><Link href="/products">单剂产品</Link><span aria-hidden="true">/</span><span aria-current="page">{product.model}</span></nav>
      <header className={`product-heading catalog-tone-${product.categoryIndex % 3}`}>
        <div><Badge asChild variant="brand"><p className="catalog-eyebrow">{product.category}</p></Badge><h1 className="display">{product.model}</h1>{product.name !== product.model ? <p className="product-name">{product.name}</p> : null}</div>
        <div className="product-heading-mark" aria-hidden="true"><span>NB</span><span>PRODUCT<br />INFORMATION</span></div>
      </header>
      <div className="product-detail-grid">
        <div className="product-detail-content">
          <section className="product-section" aria-labelledby="introduction-heading"><p className="catalog-eyebrow">01 / INTRODUCTION</p><h2 id="introduction-heading" className="display">产品介绍</h2><div className="product-prose">{product.introduction}</div></section>
          <section className="product-section" aria-labelledby="technical-heading">
            <p className="catalog-eyebrow">02 / TECHNICAL DATA</p><h2 id="technical-heading" className="display">技术指标</h2><p className="product-table-hint">表格可横向滑动查看完整参数与试验方法。</p>
            {product.technicalTables.map((table, tableIndex) => (
              <Table key={tableIndex} className="product-table" containerProps={{ className: "product-table-scroll", role: "region", "aria-label": `${product.model} 技术指标表 ${tableIndex + 1}`, tabIndex: 0 }}>
                <TableCaption className="sr-only m-0">{product.model} {product.name} 技术指标</TableCaption>
                <TableHeader><TableRow>{table.headers.map((header, index) => <TableHead key={index} scope="col">{header}</TableHead>)}</TableRow></TableHeader>
                <TableBody>{table.rows.map((row, rowIndex) => <TableRow key={rowIndex}>{row.map((cell, columnIndex) => columnIndex === 0 ? <TableHead key={columnIndex} scope="row">{cell}</TableHead> : <TableCell key={columnIndex}>{cell}</TableCell>)}</TableRow>)}</TableBody>
              </Table>
            ))}
            {product.technicalNotes ? <div className="product-technical-notes product-prose">{product.technicalNotes}</div> : null}
          </section>
          {product.storagePackaging ? <section className="product-section" aria-labelledby="storage-heading"><p className="catalog-eyebrow">03 / STORAGE & PACKAGING</p><h2 id="storage-heading" className="display">包装与储存</h2><div className="product-prose">{product.storagePackaging}</div></section> : null}
        </div>
        <Card asChild variant="brand"><aside className="product-aside" aria-label="产品咨询"><p className="catalog-eyebrow">选型与应用咨询</p><p className="display product-aside-title">了解 {product.model}<br />的应用。</p><p>联系我们，沟通您的配方、应用场景与产品需求。</p><Button asChild variant="brand"><a className="catalog-primary-link" href="tel:13813339996">拨打 138 1333 9996 <span aria-hidden="true">↗</span></a></Button><Link className="catalog-secondary-link" href="/contact">查看联系方式 <span aria-hidden="true">→</span></Link><Link className="catalog-back-link" href="/products">← 返回单剂产品目录</Link></aside></Card>
      </div>
      {related.length ? <section className="product-related" aria-labelledby="related-heading"><div><Badge asChild variant="brand"><p className="catalog-eyebrow">{product.category}</p></Badge><h2 className="display" id="related-heading">同类产品</h2></div><div className="product-related-grid">{related.map((entry) => <Card asChild variant="brand" key={entry.slug}><Link href={`/products/${entry.slug}`}><span className="display">{entry.model}</span><span>{entry.name}</span><span aria-hidden="true">↗</span></Link></Card>)}</div></section> : null}
    </div></main>
  );
}
