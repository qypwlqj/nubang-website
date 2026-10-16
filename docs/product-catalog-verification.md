# Product catalogue verification and handoff

## Source and implementation

- Repository: qypwlqj/nubang-website; base main commit 5cb64651218202c614a805b970e784ce90eb41be.
- Current Notion page: https://app.notion.com/p/3faa14c8db32819794ebd3c463aa1509 ; edited 2026-10-15T13:55:25.383Z, re-fetched 2026-10-16.
- 9 categories, 51 products, 51 technical tables, 400 technical rows. Full model identifiers and all units, methods, applications and storage text retained. PIBSA tables retain four columns. Technical notes retained for 3307, 3359, 5570, 5571.
- Internal notes, attachments and file references excluded. Four introductions remove “我公司生产的” to avoid implying the website company is the manufacturer.
- Product JSON SHA-256: ee3cde2763e99af017f34e6d7e4da24e9d0de3844eb8968287e80d33a24a6849.
- Independent App Router pages: /, /about, /products, /products/[model], /lab, /services, /contact. Original copy and homepage styling retained.

## Actual checks

- Full ESLint and Next.js production build passed, including TypeScript and all 51 product paths. icon.svg adds one static route (61 generated pages in the final build).
- npm run validate:catalog passed all nine checks.
- Desktop browser: 30 checks passed, covering all category counts, model/empty search, reset/sorting, six navigation routes without hashes, product refresh, back/forward and unknown-product 404.
- Mobile browser at 390×844: 12 checks passed, covering category/search, four-column PIBSA table with internal horizontal scrolling and no document overflow, menu route changes, menu closure and Escape.
- Independent HTTP HTML verification: all 51 product pages returned 200 and matched all source fields and every table cell; 0 failures.
- Screenshots and raw reports are in ignored output/playwright/ on the Mac.

## Remaining release work

- Review final screenshots after fonts and entrance animations finish; immediate screenshots can capture the existing header animation offscreen.
- Existing homepage JPEG payloads in lib/img were already malformed and incorrectly used as URLs before this change. A partial data-URI repair still produced invalid image data, so Mosaic.tsx was restored exactly to the baseline rather than claiming that issue fixed.
- Production deployment has NOT been started. The parent task requested saving the work for a cloud handoff before any new release.
- Before updating main, recheck its head and preserve any concurrent changes. Run the final lint/build in the handoff environment, deploy only to the existing project, wait for READY and test the actual production URL.

## Existing production and rollback reference

- Existing Vercel project: nubang-website / prj_pZjqyCF5o3aIHXByqBQSJj32CwWI.
- Account/team: team_NPAk2kDXvokhkmAHAYqJteyI.
- Previous READY production: dpl_CUER3KRLk5iYeZFdszxcSNLno3ey, commit 5cb64651218202c614a805b970e784ce90eb41be.
- Existing URL: https://nubang-website.vercel.app . This is still the old version, not evidence of completion.
- No changes to permissions, credentials, paid plans or domains.
