import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function ProductNotFound() {
  return <main id="main-content" className="catalog-page catalog-container catalog-not-found"><p className="catalog-eyebrow">PRODUCT NOT FOUND</p><h1 className="display">未找到该产品</h1><p>请检查产品型号，或返回目录浏览全部单剂产品。</p><Button asChild variant="brand"><Link className="catalog-primary-link" href="/products">返回产品目录 <span aria-hidden="true">→</span></Link></Button></main>;
}
