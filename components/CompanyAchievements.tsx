import { COMPANY_STATS } from "@/lib/company";

export default function CompanyAchievements() {
  return (
    <dl aria-label="公司成就" className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-nav-rule pt-8 sm:grid-cols-3 lg:grid-cols-5">
      {COMPANY_STATS.map((stat) => (
        <div key={stat.label}>
          <dt className="mt-2 text-[13px] text-muted">{stat.label}</dt>
          <dd className={`display mt-3 text-[42px] leading-none sm:text-[48px] ${stat.accent ? "text-accent-red" : "text-ink"}`}>{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}
