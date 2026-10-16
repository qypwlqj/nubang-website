# shadcn/ui 组件迁移与视觉保留审查

日期：2026-10-16。范围：现有 Next.js 16 / React 19 / Tailwind CSS 4 网站的组件层。产品原始数据、路由结构、内容顺序及品牌版式保持不变。

## 来源与配置

采用 shadcn/ui 官方 `new-york-v4` registry 的完整 TypeScript 源码，手动安装后做品牌适配，并非以同名自制组件替代。源码入口：

- `https://ui.shadcn.com/r/styles/new-york-v4/{button,input,badge,card,table,sheet,label,native-select}.json`
- [现有 Next.js 项目安装](https://ui.shadcn.com/docs/installation/next)
- [Tailwind CSS 4 指南](https://ui.shadcn.com/docs/tailwind-v4)
- [Sheet](https://ui.shadcn.com/docs/components/radix/sheet)
- [Native Select](https://ui.shadcn.com/docs/components/radix/native-select)
- [Radix Dialog 的焦点与键盘行为](https://www.radix-ui.com/primitives/docs/components/dialog)

MIT 版权与许可全文保留在 `docs/licenses/shadcn-ui.txt`，每个组件源文件标注对应官方 registry URL。

`components.json` 声明 `@/components/ui`、`@/lib/utils`、CSS 变量主题及 Lucide 图标。官方源文件的 `cn` 导入适配为项目内 `clsx` + `tailwind-merge` 工具。运行依赖为 `radix-ui`、`class-variance-authority`、`clsx`、`tailwind-merge`、`lucide-react`、`tw-animate-css`；准确版本锁定在 `package-lock.json`。`sharp` 显式列为图片验证开发依赖。

## 已替换

| 页面 / 区域 | shadcn/ui 组件 | 处理方式 |
| --- | --- | --- |
| Header 报价入口、汉堡按钮与移动电话 CTA | Button | `asChild` 保留 Next Link / 电话链接；品牌变体保持原尺寸与字重 |
| Header 移动导航 | Sheet、SheetTrigger、SheetClose、SheetTitle、SheetDescription | 使用真正的 Radix Dialog 模态层，提供焦点锁定、Escape 关闭、关闭后焦点回到触发按钮；点击导航、路由变化和切换桌面断点均关闭 |
| 产品目录分类、重置、空状态按钮 | Button | 保留 `aria-pressed` 与全部现有筛选逻辑；不引入默认 `h-9`、padding 或 `font-medium` |
| 产品目录搜索框 | Input、Label | 保留 `type=search`、受控值、搜索规则、占位文字与 label 的关联；保持原无内框样式 |
| 产品目录分类 / 排序下拉 | NativeSelect、NativeSelectOption、Label | 保留真正的原生 select、系统移动端选择器和键盘行为；品牌变体沿用原生外观及尺寸，不增加自绘箭头或额外容器 |
| 产品目录分类标签、详情分类、实验室 AI 标签 | Badge | 保留原文字/标点/颜色/边框/字距；不增加默认胶囊 padding |
| 产品目录链接卡片、详情咨询侧栏、关联产品卡片 | Card | `asChild` 保留单一完整链接、aside 语义与原 DOM；不嵌套 button/link |
| 四大产品线、服务卡片、实验室方案卡片 | Card | 保留原 article/div、展示内容、布局、边距、grain 与装饰层 |
| 产品详情技术数据 | Table、TableHeader、TableBody、TableRow、TableHead、TableCell、TableCaption | 保留动态列数、列/行表头 scope、隐藏 caption、换行与原有条纹；滚动容器继续可键盘聚焦并带 region 名称 |
| 首页联系 CTA、联系页电话 CTA、详情咨询 CTA、产品未找到返回 CTA | Button | `asChild` 保留原 a / Next Link 语义，沿用原品牌样式 |

## 明确保留的原生与业务组件

- 桌面主导航、页脚导航、面包屑和普通文本链接继续使用语义化 `nav` / `a` / Next Link。这里没有多级菜单，不引入 NavigationMenu、Menubar 或按钮化导航。
- 分类是对同一结果集的筛选，不改造成 Tabs，以免错误暗示多个独立 tabpanel。
- 技术表格是产品原始资料，不引入 TanStack Data Table 的客户端排序、分页或额外数据转换，以免改变技术参数顺序和复杂多列表头。
- Mosaic、Reveal、品牌 Logo、图标、grain、标题动效及页面 section/grid 都是定制的展示元素，保留；无需为静态装饰引入 Carousel、Dialog 或组件化容器层。
- 首页、公司简介、润滑产品、实验室、服务、联系仍为独立页面。所有产品详情 URL、静态生成、metadata、404、关联产品与目录数据处理保持原逻辑。

## 视觉适配约束

1. 完整保留原纸白 `#f5f4ef`、墨黑 `#0f0f0e`、奶油白 `#f9f6f1`、红 `#ef5d44`、黄 `#fcdd71`、蓝 `#9fd5f7`，以及 Archivo / Inter 与中文字体回退。
2. shadcn 语义色映射至现有颜色；没有添加 shadcn 的全局颜色、字号、边框 reset，也没有开启新的深色模式。
3. Button / Badge / Card / Input / NativeSelect 保留官方默认实现，并增加 `brand` 变体。现有页面明确选用此变体，由原样式控制几何、颜色和字体，避免默认组件尺寸悄然改变页面。
4. Card 的 `asChild` 使用 Radix Slot，避免新 div 改变 grid/flex、子选择器、article/aside 语义和整卡链接。默认 Card 的 gap、padding、shadow 不进入品牌页面。
5. Table 仅补充必要局部规则，清除官方默认行下边框与 th 高度/前景色；原技术表格 padding、字号、白/米灰条纹和换行仍优先生效。
6. Sheet 保留原顶端下拉位置、白色背景、22px 下圆角、原导航字体与间距。透明遮罩不改变页面明暗。弹层挂载到 body，并通过头部真实高度定位；滚动锁定时补偿固定头部的滚动条宽度。可见关闭按钮在原汉堡按钮位置，未增加标题占位。

## 浏览器基准（迁移前实测）

基准 viewport 为 1180 × 757；保留了截图与 computed styles 供发布前后对比。下表为原值，后续实测结果见文末。

| 元素 | 原尺寸 / 关键 computed styles |
| --- | --- |
| Header 报价 | 96 × 41px；padding 10px 20px；font 600 14px / 21px |
| 目录卡片 | 410.5 × 438.25px；padding 25px；gap normal；radius 22px |
| 搜索 input | 646 × 49px；padding 14px 0；font 14px / 21px；border 0；radius 0 |
| 分类筛选按钮 | 210 × 46px；padding 11px 12px；font 400 13px / 19.5px |
| 详情咨询侧栏 | 265 × 400.96875px；padding 25px；display block |
| 详情咨询 CTA | 213 × 47.59px；padding 15px 14px；font 700 11px / 17.6px |
| 技术表格 | 758 × 271.77px；font 13px / 22.1px |
| 技术表格列头 | padding 16px 18px；font 600 12px / 20.4px |

另有 500 × 757 窄屏基准：目录卡片 445 × 439.328125px、padding 24px；搜索 input 274 × 52px、font 16px / 24px；技术表格最小宽 560px，表头 padding 13px 15px。保留这些移动端规则，避免套用默认 Input 的 14px 字号或默认 Table 的 nowrap。

## 本地验证

- `npm run lint`：通过，无 ESLint 错误。
- `npm run typecheck`：通过，执行 `next typegen && tsc --noEmit`；新增组件与业务改造无 `any` 类型。
- `npm run build`：通过，61 个页面完成静态生成，51 款产品的详情路由保留。
- `npm run validate:catalog`：通过全部 9 项检查，9 类、51 款、400 行技术指标、4 项附注；PIBSA 四列表格完整。数据 SHA-256 保持 `ee3cde2763e99af017f34e6d7e4da24e9d0de3844eb8968287e80d33a24a6849`。
- `npm run validate:images`：通过，5 张 1200 × 800 WebP 均可完整解码且已被页面引用；配图质量与结果记录在 `docs/image-generation.md`。
- 静态审查：保留全部原生导航和语义标签；技术表格未固定列数；未改变产品数据；没有引入新表单提交或外部接口。

## 发布后浏览器验证

待生产版本 READY 后，对比桌面 / 窄屏截图、上述 computed styles，以及 Sheet 的 Tab 循环、Escape、关闭后焦点、导航后关闭和目录搜索/筛选/重置。开发服务与云浏览器处于不同环境，localhost 预览不可达，不将其记为已完成的浏览器验证。

### 首次生产回归与响应式微调

- 发布提交 `0db40e4` 的桌面 1180×757 与窄屏 500×757：目录搜索、排序、筛选、卡片和详情侧栏/技术表格的全部采集 computed styles 与改造前逐项完全相同。
- Sheet 已实测 Shift+Tab / Tab 首尾循环、Escape 关闭并返回触发按钮、6 个菜单独立跳转后关闭；搜索 T065、分类 ZDDP / 其他产品、空结果恢复、排序和详情刷新通过。
- 全部 51 个线上详情页的原始正文、全部 400 行参数、PIBSA 四列和 4 项附注通过 HTTP 全量核对。五张新图、14 个拼贴图片实例全部实际加载。
- 新图片使原固定宽拼贴在 1024–1279px 桌面断点与简介的重叠变得明显。仅此区间按可用宽度收缩拼贴列宽，不更改正文位置、字体、品牌颜色或 ≥1280px 的原布局。移动拼贴的外框宽度扣除已有左右20px留白，消除旧外框造成的空白横向溢出；图片单元位置和原有视觉尺寸不变。
