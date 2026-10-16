# 新配图生成记录

生成日期：2026-10-16（UTC）。

## 用途与真实性说明

本组为上海努邦科技有限公司网站制作的 AI 商业示意配图，围绕润滑油原料、添加剂与成品油的销售、供应及技术服务场景。图片不代表公司真实产品包装、检测场所、仓储设施或自有生产工厂，也不应被用作设施所有权、生产资质或产品认证的证据。

使用内建 image_gen.imagegen 工具逐图生成，共 5 次独立调用，没有使用 CLI/API 回退，没有用程序绘图替代生成。输出原图均为 1536 × 1024 PNG，保留于被 Git 忽略的 output/imagegen/originals/，不随网站公开发布；网页版本经 sharp 等比缩至 1200 × 800，WebP 质量 83、effort 6，仅进行尺寸/格式压缩，不改绘图片。原始工具输出也保留在生成路径。

视觉方向：金色油液、深灰和银色主体，辅以少量冷蓝光感。oil 在配色补充前已生成，保留少量紫色反光，不作为主色。图片用于现有 Mosaic 照片卡片，原有米白/黑/红黄蓝界面布局、动画与色块由原组件保持。

## 文件与验证

| 文件 | 原图尺寸 | WebP尺寸 | WebP字节数 | 场景 |
| --- | --- | --- | --- | --- |
| oil | 1536×1024 | 1200×800 | 82120 | 金色润滑油流体产品特写 |
| lab | 1536×1024 | 1200×800 | 81220 | 样品检测与技术支持示意 |
| gears | 1536×1024 | 1200×800 | 138550 | 工业齿轮润滑应用示意 |
| additives | 1536×1024 | 1200×800 | 63830 | 基础油与添加剂样品示意 |
| service | 1536×1024 | 1200×800 | 82338 | 整洁仓储配送示意 |

5 张优化图总计 448058 字节（约 438 KiB）。所有图通过 sharp 读取元数据及完整像素解码；逐张查看输出，确认主体清晰、无可读文字、无品牌水印、无大型炼化工厂或生产线。构图主体靠近中央，适合现有照片卡片的居中裁切。

## 完整提示词与来源

### oil

- 工具原始输出：/workspace/scratch/80f62f86b2d1/generated_images/exec-23a2fd60-937c-41f6-a2c5-4546a8230764.png
- 仓库内原图：output/imagegen/originals/oil.png
- 网页使用文件：public/images/oil.webp
- 生成方式：image_gen.imagegen，transparent_background=false，无输入参考图。

完整提示词：

Use case: ads-marketing. Asset type: horizontal website hero photograph for a Chinese lubricant raw-materials, additives and finished-oil sales and supply company. Primary request: premium macro product photograph of rich transparent golden lubricant flowing in one smooth sculptural ribbon from a narrow polished stainless spout into a shallow pool of oil, beautiful viscosity, subtle ripples, fine highlights and realistic fluid physics. Scene: controlled charcoal-gray product photography studio, softly blurred silver metal detail, warm gold glow. Composition: cinematic landscape 3:2, dominant fluid subject centered slightly right, generous dark breathing room around edges, safe for cropping to portrait and landscape tiles. Style: highly photorealistic industrial commercial photography, tactile, elegant, precise. Palette: golden amber, deep charcoal and brushed silver, tiny restrained muted violet reflection in the background. No text, no brand, no labels, no watermarks, no collage, no refinery, no factory skyline, no unrealistic enormous oil splash, no hands. This is an illustrative product scene, not evidence of a company's actual facilities.

### lab

- 工具原始输出：/workspace/scratch/80f62f86b2d1/generated_images/exec-8630362f-8abc-4459-9310-180a6141dfd1.png
- 仓库内原图：output/imagegen/originals/lab.png
- 网页使用文件：public/images/lab.webp
- 生成方式：image_gen.imagegen，transparent_background=false，无输入参考图。

完整提示词：

Use case: ads-marketing. Asset type: horizontal website photograph showing lubricant sample testing and technical support for a lubricant materials and finished-oil sales and supply company. Primary request: a tidy modest laboratory workstation with three small transparent sample vials containing clear to amber lubricant, a silver viscometer instrument in the background, a technician's single realistically proportioned blue nitrile-gloved hand carefully holding a glass pipette above one vial. Scene: close laboratory workbench view, no facility panorama. Composition: cinematic landscape 3:2, samples and gloved hand centered with clear visual focus, safe for crop to small website tiles. Style: highly photorealistic premium industrial commercial photography, realistic materials and plausible simple lab apparatus, restrained depth of field. Palette: warm amber samples, silver and charcoal-gray equipment, subtle blue glove accent. Lighting: clean soft window and controlled studio light. No text, no numbers, no visible brand, no logo, no watermark, no complex extra fingers, no chemical hazard drama, no production factory. Illustration of technical service, not proof of owned facilities.

### gears

- 工具原始输出：/workspace/scratch/80f62f86b2d1/generated_images/exec-f54e9949-0ee4-47bd-bd31-d99a03390658.png
- 仓库内原图：output/imagegen/originals/gears.png
- 网页使用文件：public/images/gears.webp
- 生成方式：image_gen.imagegen，transparent_background=false，无输入参考图。

完整提示词：

Use case: ads-marketing. Asset type: horizontal website photograph showing industrial gear lubrication applications for a lubricant sales and supply company. Primary request: macro close-up of a real pair of precision-machined interlocking steel gears in a clean open gear housing, a thin glossy golden amber lubrication film along the teeth and a small natural bead of lubricant at the contact area. Scene: industrial machine detail only, no factory panorama. Composition: cinematic landscape 3:2, large gear positioned slightly left and secondary gear at right, gear contact point central, crop-safe edges. Style: highly photorealistic premium industrial commercial photography, physically plausible machined metal geometry and oil viscosity, crisp contact-area detail with restrained background blur. Palette: cool brushed silver, deep graphite charcoal shadows, warm gold oil, extremely subtle cool blue reflection. Lighting: side-lit controlled highlights, sophisticated and clean, no grunge. No text, no logos, no watermark, no sparks, no people, no absurd oil splash. Illustrative industrial application, not evidence of any company's actual production plant.

### additives

- 工具原始输出：/workspace/scratch/80f62f86b2d1/generated_images/exec-933e584c-5f31-4b68-9b94-46551f266e2e.png
- 仓库内原图：output/imagegen/originals/additives.png
- 网页使用文件：public/images/additives.webp
- 生成方式：image_gen.imagegen，transparent_background=false，无输入参考图。

完整提示词：

Use case: product-mockup. Asset type: horizontal website photograph for a lubricant raw-materials and additives supplier. Primary request: elegant studio still life of a small curated selection of transparent laboratory glass sample containers holding lubricant base oils and additives, two slender capped glass sample bottles with pale clear and golden amber liquids, one low borosilicate beaker with darker amber liquid, one tiny transparent glass dish of pale waxlike additive pellets. Scene: charcoal-gray tabletop with subtle soft reflection and seamless deep gray background, no laboratory facility claim. Composition: cinematic landscape 3:2, samples arranged neatly across center at differing heights, balanced spacing, crop-safe edges. Style: highly photorealistic premium commercial product photography, immaculate realistic glass, realistic transparent fluids, no invented packaging. Palette: warm pale gold to dark amber, silver gray, deep charcoal, very faint cool blue accent reflection. Lighting: soft lateral studio light with clean glass highlights. No text, no printed marks, no brands, no labels, no logos, no watermark, no collage, no oversized dramatic chemistry effects.

### service

- 工具原始输出：/workspace/scratch/80f62f86b2d1/generated_images/exec-cad1dcac-1455-4ece-a469-eb0e726d652d.png
- 仓库内原图：output/imagegen/originals/service.png
- 网页使用文件：public/images/service.webp
- 生成方式：image_gen.imagegen，transparent_background=false，无输入参考图。

完整提示词：

Use case: ads-marketing. Asset type: horizontal website photograph illustrating orderly lubricant supply, warehousing and delivery service for a lubricant materials and finished-oil sales company. Primary request: clean modest distribution warehouse scene with several sealed unbranded gray metal lubricant drums and plain neutral cartons securely arranged on clean wooden pallets, a compact yellow manual pallet jack at the edge, tidy shelving softly out of focus in the back. Scene: a credible small-to-medium distributor storage and dispatch area, no manufacturing or processing equipment and no claim of a real company-owned site. Composition: cinematic landscape 3:2, drum-and-pallet grouping center-right and clear aisle on the left, low eye-level editorial photography, safe for cropping into compact tiles. Style: highly photorealistic premium commercial photography, realistic warehouse proportions and equipment, quiet organized reliability. Palette: deep gray and silver, warm amber/yellow small equipment accents, very subtle cool blue ambient tones. Lighting: clean natural soft daylight, polished but believable. No people, no text, no brands, no labels, no logos, no watermarks, no refinery, no industrial chimneys, no giant factory, no pipes or chemical processing.


## 文件 SHA-256

原图在工作区保留，不进入发布目录或版本控制；以下校验值用于复核来源及压缩产物。

| 文件 | SHA-256 |
| --- | --- |
| output/imagegen/originals/oil.png | 69091f24194fcc692543b1f9c63b8dc37de28217de883c870cc831d3e653175b |
| public/images/oil.webp | 70cd30ec1080605fceb39be2faf918ae697e2284feaf960a8897598c03dfbd90 |
| output/imagegen/originals/lab.png | b19741454b62a24636dd68e3fd9319445b628954f3b8d63206d618853e386c5e |
| public/images/lab.webp | b84dc510f4a980bb0a2549e4e95212902c9e42e7ac6488edc07216ec6430b6e4 |
| output/imagegen/originals/gears.png | db60181fcc187ade96feada3646713fce5c09b309cbbcee1e193fd95d897e46a |
| public/images/gears.webp | bec1e215b5437135c2994851215bfe4f1c649858c173b18b09d4c6a1d83def80 |
| output/imagegen/originals/additives.png | d43ba788221de9344ce837c8780115cc47e2f8396470bcd5e189a3df88f87a63 |
| public/images/additives.webp | fd9c0f10f264d601cae1b860a1256287cba408e64c9f5464b33bdae0081cf39f |
| output/imagegen/originals/service.png | 307a392fb57b6bbcd0cea1dcc47b7a055db9351d27950d98d291a2845a11ff3b |
| public/images/service.webp | a0c600dffa01b1cfec068dfac2274dab2de818c81f1e9f0aa38fef8661f04a90 |
