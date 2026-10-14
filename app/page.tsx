import Header from "@/components/Header";
import Mosaic from "@/components/Mosaic";
import Reveal from "@/components/Reveal";

const STATS = [
  { value: "2012", label: "公司成立年份", accent: false },
  { value: "100+", label: "产品种类", accent: true },
  { value: "24h", label: "售后支持", accent: false },
  { value: "10+", label: "专利技术", accent: false },
  { value: "3倍", label: "润滑效果提升", accent: true },
];

const PRODUCTS = [
  {
    index: "01",
    title: "添加剂",
    en: "ADDITIVES",
    desc: "抗磨、极压、抗氧化等高性能功能添加剂，显著提升油品综合表现与使用寿命。",
    cls: "bg-accent-red cell-solid",
    dark: false,
  },
  {
    index: "02",
    title: "原料",
    en: "RAW MATERIALS",
    desc: "优质基础油与功能性原料，供应链稳定，批次品质可追溯，适配多种调和需求。",
    cls: "bg-accent-yellow cell-solid",
    dark: false,
  },
  {
    index: "03",
    title: "成品油",
    en: "LUBRICANTS",
    desc: "液压油、齿轮油、金属加工液等工业油品，规格齐全，满足通用工业场景需求。",
    cls: "bg-accent-blue cell-solid",
    dark: false,
  },
  {
    index: "04",
    title: "成品油定制",
    en: "CUSTOM BLENDING",
    desc: "按设备工况与工艺要求定制调配成品油，从配方设计、小样测试到批量交付一站式服务。",
    cls: "bg-card-dark cell-dark grain-dark",
    dark: true,
  },
];

const LAB_SOFTWARE = [
  "AI 油液状态监测与异常预警",
  "智能配方推荐与模拟计算",
  "检测数据自动汇总与报告生成",
  "云端实验室数据管理平台",
];

const LAB_DEVICES = [
  "油品性能检测分析仪器",
  "模拟台架与评定设备",
  "实验室整体规划与建设",
  "设备安装调试与人员培训",
];

const SERVICES = [
  {
    index: "01",
    title: "成品油定制 & 实验室设备定制",
    desc: "围绕您的工况、产线与预算，提供成品油定制调配与实验室设备定制服务，方案落地快。",
    icon: (
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.7-.7-.7-2.7 2.6-2.6z" />
    ),
  },
  {
    index: "02",
    title: "7×24h 售后服务与保障",
    desc: "全天候响应机制，技术问题快速定位，用油异常即时跟进，售后支持全年无休。",
    icon: (
      <path d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10zm0-18a8 8 0 0 1 8 8v1a2 2 0 0 1-2 2h-2v-6h4M4 13h4v6H6a2 2 0 0 1-2-2v-4z" />
    ),
  },
  {
    index: "03",
    title: "专业原料技术指导",
    desc: "资深应用工程师团队，提供原料选型、配方优化与现场应用技术指导，让好原料发挥好效果。",
    icon: (
      <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.8.7 1 1.5 1 2.5h6c0-1 .2-1.8 1-2.5A6 6 0 0 0 12 3z" />
    ),
  },
];

export default function Home() {
  return (
    <>
      <Header />

      {/* ---------------- HERO ---------------- */}
      <section id="home" className="relative flex min-h-[100svh] flex-col lg:block">
        <div className="relative z-10 flex flex-1 flex-col justify-center px-5 pt-[150px] pb-12 sm:px-10 lg:h-[100svh] lg:w-[560px] lg:justify-center lg:pt-[120px] lg:pb-[60px] lg:pl-[86px]">
          <p className="rise flex items-center gap-2 text-[10px] font-semibold tracking-[0.22em] text-muted sm:text-[11px] sm:tracking-[0.3em]" style={{ animationDelay: "0.2s" }}>
            <span className="inline-block h-2 w-2 bg-accent-red" aria-hidden="true" />
            SHANGHAI NUBANG TECHNOLOGY · EST. 2012
          </p>

          <h1 className="display mt-6 text-[58px] leading-[0.98] tracking-[-0.04em] sm:text-[76px] lg:text-[80px]">
            <span className="mask-line"><span style={{ animationDelay: "0.30s" }}>润滑科技</span></span>
            <span className="mask-line"><span style={{ animationDelay: "0.385s" }}>驱动工业</span></span>
            <span className="mask-line"><span className="text-accent-red" style={{ animationDelay: "0.47s" }}>高效运转</span></span>
          </h1>

          <p className="rise mt-7 max-w-[460px] text-[16px] leading-[1.65] text-muted" style={{ animationDelay: "0.6s" }}>
            上海努邦科技有限公司成立于 2012 年，专注润滑油原料、添加剂与成品油供应，
            以化学实验室与 AI 分析能力为核心，提供成品油定制与一站式润滑解决方案。
          </p>

          <div className="rise mt-9 flex items-center gap-5" style={{ animationDelay: "0.7s" }}>
            <a
              href="#contact"
              className="rounded-full bg-ink px-7 py-3.5 text-[15px] font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              联系我们
            </a>
            <a href="#products" className="group flex items-center gap-2 text-[15px] font-semibold">
              了解产品
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-nav-rule transition-colors group-hover:bg-ink group-hover:text-white" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        <Mosaic />
      </section>

      {/* ---------------- ABOUT ---------------- */}
      <section id="about" className="relative z-10 scroll-mt-24 bg-paper py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-10">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.3em] text-muted">01 — 公司简介</p>
            <h2 className="display mt-5 max-w-3xl text-[32px] leading-[1.15] sm:text-[46px]">
              以润滑新材料技术为根基，
              <br />
              服务工业客户的每一台设备。
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] leading-[1.8] text-muted">
              努邦科技（曾用名：上海努邦润滑新材料有限公司）深耕润滑行业十余年，业务覆盖润滑油原料、
              添加剂与成品油供应，并提供成品油定制服务。依托自建化学实验室与 AI
              数据分析能力，我们从配方源头把控品质，为工业客户降本增效。
            </p>
          </Reveal>

          <Reveal delay={120}>
            <dl className="mt-14 grid grid-cols-2 gap-y-10 border-t border-ink/10 pt-10 md:grid-cols-5">
              {STATS.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <dd className={`display order-1 text-[40px] leading-none sm:text-[48px] ${s.accent ? "text-accent-red" : ""}`}>
                    {s.value}
                  </dd>
                  <dt className="order-2 mt-2 text-[13px] text-muted">{s.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ---------------- PRODUCTS ---------------- */}
      <section id="products" className="scroll-mt-24 bg-paper pb-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-10">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.3em] text-muted">02 — 润滑产品</p>
              <h2 className="display mt-5 text-[32px] leading-[1.1] sm:text-[46px]">四大产品线</h2>
            </div>
            <p className="max-w-sm text-[14px] leading-[1.7] text-muted">
              从原料、添加剂到成品油与定制调配，覆盖润滑产品全链路。
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.index} delay={i * 90}>
                <article className={`group flex h-full flex-col overflow-hidden rounded-[22px] border border-nav-line bg-card-cream transition-transform duration-500 hover:-translate-y-1.5 grain ${p.dark ? "" : ""}`}>
                  <div className={`relative flex h-36 items-end justify-between p-5 ${p.cls}`}>
                    <span className={`display text-[44px] leading-none ${p.dark ? "text-white/90" : "text-ink/80"}`}>
                      {p.index}
                    </span>
                    <span className={`text-[10px] font-bold tracking-[0.2em] ${p.dark ? "text-white/60" : "text-ink/50"}`}>
                      {p.en}
                    </span>
                  </div>
                  <div className="relative z-[2] flex flex-1 flex-col bg-card-cream p-5">
                    <h3 className="display text-[22px]">{p.title}</h3>
                    <p className="mt-3 flex-1 text-[13.5px] leading-[1.7] text-muted">{p.desc}</p>
                    <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold">
                      咨询此类产品
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- LAB ---------------- */}
      <section id="lab" className="grain-dark grain relative scroll-mt-24 rounded-t-[32px] bg-card-dark py-24 text-paper">
        <div className="mx-auto max-w-6xl px-5 sm:px-10">
          <Reveal>
            <div className="flex flex-wrap items-center gap-4">
              <p className="text-[11px] font-semibold tracking-[0.3em] text-paper/50">03 — 化学实验室解决方案</p>
              <span className="flex items-center gap-1.5 rounded-full border border-accent-yellow/40 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-accent-yellow">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-yellow opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-yellow" />
                </span>
                AI 赋能
              </span>
            </div>
            <h2 className="display mt-6 max-w-3xl text-[32px] leading-[1.15] sm:text-[46px]">
              软件与设备协同的
              <br />
              实验室整体方案。
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] leading-[1.8] text-paper/60">
              以 AI 分析平台连接实验数据与生产决策：软件持续学习油品数据，设备精准完成每一项检测，
              让实验室真正成为研发的发动机。
            </p>
          </Reveal>

          <div className="mt-14 grid gap-4 lg:grid-cols-2">
            <Reveal delay={80}>
              <div className="group relative h-full overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04] p-8 transition-colors duration-500 hover:border-accent-blue/50">
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-40 blur-3xl transition-opacity duration-700 group-hover:opacity-70"
                  style={{ background: "radial-gradient(circle, #9fd5f7 0%, transparent 70%)" }}
                  aria-hidden="true"
                />
                <p className="text-[10px] font-bold tracking-[0.25em] text-accent-blue">SOFTWARE</p>
                <h3 className="display mt-4 text-[26px]">软件服务支持</h3>
                <p className="mt-3 text-[13.5px] leading-[1.7] text-paper/55">
                  AI 驱动的油液数据平台，让每一次检测都沉淀为可复用的知识。
                </p>
                <ul className="mt-7 space-y-3.5">
                  {LAB_SOFTWARE.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[14px] text-paper/85">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9fd5f7" strokeWidth="2.4" className="mt-0.5 flex-none" aria-hidden="true">
                        <path d="M4 12.5 9.5 18 20 6.5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="group relative h-full overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04] p-8 transition-colors duration-500 hover:border-accent-red/50">
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-40 blur-3xl transition-opacity duration-700 group-hover:opacity-70"
                  style={{ background: "radial-gradient(circle, #ef5d44 0%, transparent 70%)" }}
                  aria-hidden="true"
                />
                <p className="text-[10px] font-bold tracking-[0.25em] text-accent-red">EQUIPMENT</p>
                <h3 className="display mt-4 text-[26px]">实验室设备</h3>
                <p className="mt-3 text-[13.5px] leading-[1.7] text-paper/55">
                  从单台仪器到整室规划，建设可靠、高效、可扩展的化学实验室。
                </p>
                <ul className="mt-7 space-y-3.5">
                  {LAB_DEVICES.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[14px] text-paper/85">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef5d44" strokeWidth="2.4" className="mt-0.5 flex-none" aria-hidden="true">
                        <path d="M4 12.5 9.5 18 20 6.5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- SERVICES ---------------- */}
      <section id="services" className="scroll-mt-24 bg-paper py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-10">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.3em] text-muted">04 — 服务与支持</p>
            <h2 className="display mt-5 text-[32px] leading-[1.1] sm:text-[46px]">
              不止卖产品，
              <br className="sm:hidden" />
              更陪伴每一公里运转。
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.index} delay={i * 100}>
                <article className="grain flex h-full flex-col rounded-[22px] border border-nav-line bg-card-cream p-7">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        {s.icon}
                      </svg>
                    </span>
                    <span className="display text-[30px] text-ink/15">{s.index}</span>
                  </div>
                  <h3 className="display mt-6 text-[20px] leading-[1.25]">{s.title}</h3>
                  <p className="relative z-[2] mt-3 text-[13.5px] leading-[1.75] text-muted">{s.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FOOTER / CONTACT ---------------- */}
      <footer id="contact" className="grain-dark grain relative scroll-mt-24 rounded-t-[32px] bg-ink pb-10 pt-24 text-paper">
        <div className="mx-auto max-w-6xl px-5 sm:px-10">
          <Reveal>
            <h2 className="display max-w-3xl text-[34px] leading-[1.12] sm:text-[54px]">
              让每一台设备，
              <br />
              都得到<span className="text-accent-yellow">合适的润滑</span>。
            </h2>
            <a
              href="tel:13813339996"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-paper px-8 py-4 text-[15px] font-bold text-ink transition-transform hover:scale-[1.03]"
            >
              立即咨询
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-16 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="text-[10px] font-bold tracking-[0.25em] text-paper/40">电话咨询</p>
                <a href="tel:13813339996" className="display mt-3 block text-[22px] hover:text-accent-yellow">
                  138 1333 9996
                </a>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.25em] text-paper/40">公司地址</p>
                <p className="mt-3 text-[14px] leading-[1.7] text-paper/80">
                  上海市嘉定区
                  <br />
                  胜辛南路 500 号 10 幢 1046 室
                </p>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.25em] text-paper/40">抖音</p>
                <a
                  href="https://www.douyin.com/search/%E5%8A%AA%E9%82%A6%E7%A7%91%E6%8A%80"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 flex items-center gap-2.5 text-[14px] font-semibold hover:text-accent-yellow"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M16.6 3c.4 2 1.8 3.6 3.9 3.9v3c-1.6 0-3-.5-4.2-1.3v6.2a5.7 5.7 0 1 1-5.7-5.7c.3 0 .7 0 1 .1v3.1a2.7 2.7 0 1 0 1.7 2.5V3h3.3z" />
                  </svg>
                  抖音搜索「努邦科技」
                </a>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.25em] text-paper/40">微信</p>
                <p className="mt-3 flex items-center gap-2.5 text-[14px] font-semibold">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M8.7 4C4.9 4 2 6.6 2 9.8c0 1.8 1 3.4 2.5 4.4l-.6 2 2.2-1.1c.5.1 1 .2 1.6.2h.4A6.5 6.5 0 0 1 8.7 4zm-2.2 3.5a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6zm4.9 0a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6zM22 14.1c0-2.8-2.6-5-5.8-5s-5.8 2.2-5.8 5 2.6 5 5.8 5c.5 0 1-.1 1.5-.2l2 1-.5-1.8c1.6-.9 2.8-2.4 2.8-4zm-7.8-1.7a.7.7 0 1 1 0-1.4.7.7 0 0 1 0 1.4zm4 0a.7.7 0 1 1 0-1.4.7.7 0 0 1 0 1.4z" />
                  </svg>
                  微信同号：138 1333 9996
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-[12px] text-paper/40">
            <p>© 2012–2026 上海努邦科技有限公司 · 版权所有</p>
            <p>润滑油原料 · 添加剂 · 成品油定制 · 化学实验室解决方案</p>
          </div>
        </div>
      </footer>
    </>
  );
}
