# Portfolio Revamp Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Revamp portfolio to position as a backend/systems engineer — rewrite hero, replace skills section, add production case studies, rewrite experience.

**Architecture:** Same Next.js app, same terminal/CLI design language. Edit existing files in-place. No new dependencies or components needed.

**Tech Stack:** Next.js 15, React 19, Tailwind CSS v4, TypeScript

---

### Task 1: Rewrite Hero Section

**Files:**
- Modify: `app/page.tsx:1-101`

**Step 1: Rewrite the hero bio (lines 7-23)**

Replace the current hero content with:

```tsx
<section className="space-y-4 sm:space-y-6">
  <div className="space-y-2">
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold tracking-tight pixelated">
      Mohitsingh Thakur
    </h1>
    <div className="text-base sm:text-lg text-white/80 font-mono">
      $ whoami
    </div>
  </div>

  <div className="space-y-3 sm:space-y-4 max-w-3xl">
    <div className="text-white/90 font-mono text-base sm:text-lg leading-tight">
      I build backend systems that run in production.
    </div>
    <div className="text-white/60 font-mono text-sm sm:text-base leading-relaxed">
      Backend engineer at a startup. I work on multi-tenant SaaS,
      payment systems, and cloud infrastructure.
    </div>
  </div>
</section>
```

**Step 2: Replace systemctl status section (lines 26-96) with ps aux services**

Replace the entire `systemctl status` section with:

```tsx
<section className="pt-6 sm:pt-8 border-t border-white/20">
  <div className="space-y-4 sm:space-y-6">
    <h2 className="text-xl sm:text-2xl font-mono font-semibold">
      $ ps aux --services
    </h2>
    <div className="space-y-2 sm:space-y-3">
      <div className="text-white/90 font-mono text-xs sm:text-sm flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
        <span className="flex items-center gap-2 min-w-[200px] sm:min-w-[240px]">
          <span className="text-green-400">●</span>
          <span className="text-white">api-design</span>
          <span className="text-green-400 text-xs">RUNNING</span>
        </span>
        <span className="text-white/60 pl-5 sm:pl-0">REST & service APIs, auth layers, rate limiting</span>
      </div>
      <div className="text-white/90 font-mono text-xs sm:text-sm flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
        <span className="flex items-center gap-2 min-w-[200px] sm:min-w-[240px]">
          <span className="text-blue-400">●</span>
          <span className="text-white">database-arch</span>
          <span className="text-green-400 text-xs">RUNNING</span>
        </span>
        <span className="text-white/60 pl-5 sm:pl-0">Schema design, query optimization, migrations (30+ table systems)</span>
      </div>
      <div className="text-white/90 font-mono text-xs sm:text-sm flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
        <span className="flex items-center gap-2 min-w-[200px] sm:min-w-[240px]">
          <span className="text-yellow-400">●</span>
          <span className="text-white">payment-systems</span>
          <span className="text-green-400 text-xs">RUNNING</span>
        </span>
        <span className="text-white/60 pl-5 sm:pl-0">Billing integrations, subscription workflows, ledger design</span>
      </div>
      <div className="text-white/90 font-mono text-xs sm:text-sm flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
        <span className="flex items-center gap-2 min-w-[200px] sm:min-w-[240px]">
          <span className="text-purple-400">●</span>
          <span className="text-white">cloud-infra</span>
          <span className="text-green-400 text-xs">RUNNING</span>
        </span>
        <span className="text-white/60 pl-5 sm:pl-0">AWS (EC2, RDS, CloudFront, SQS), Docker, CI/CD pipelines</span>
      </div>
      <div className="text-white/90 font-mono text-xs sm:text-sm flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
        <span className="flex items-center gap-2 min-w-[200px] sm:min-w-[240px]">
          <span className="text-cyan-400">●</span>
          <span className="text-white">multi-tenant-saas</span>
          <span className="text-green-400 text-xs">RUNNING</span>
        </span>
        <span className="text-white/60 pl-5 sm:pl-0">Tenant isolation, RBAC, org-level access control</span>
      </div>
      <div className="text-white/90 font-mono text-xs sm:text-sm flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
        <span className="flex items-center gap-2 min-w-[200px] sm:min-w-[240px]">
          <span className="text-orange-400">●</span>
          <span className="text-white">internal-tooling</span>
          <span className="text-green-400 text-xs">RUNNING</span>
        </span>
        <span className="text-white/60 pl-5 sm:pl-0">Workflow automation, admin dashboards, ops tooling</span>
      </div>
    </div>

    <div className="pt-3 sm:pt-4 border-t border-white/10">
      <div className="text-white/80 font-mono text-xs sm:text-sm">
        <span className="text-green-400">●</span> Status:{" "}
        <span className="text-green-400">shipping production systems</span>
      </div>
      <div className="text-white/60 font-mono text-xs sm:text-sm mt-1">
        Last updated:{" "}
        {new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </div>
    </div>
  </div>
</section>
```

**Step 3: Verify**

Run: `npm run build`
Expected: Build succeeds with no errors.

**Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "feat: rewrite hero and replace systemctl with ps aux services section"
```

---

### Task 2: Rewrite Projects Page

**Files:**
- Modify: `app/projects/page.tsx:1-165`

**Step 1: Rewrite the full projects page**

Replace the entire page content. Keep the same `$ cat project/README.md` style but with 4 new projects:
1. Multi-Tenant SaaS Platform
2. Payment Processing System
3. API Gateway & Service Layer
4. dsa-with-javascript (keep real links)

Each project card uses the same border/padding pattern as current (`p-4 sm:p-6 border border-white/20 rounded`) but with new fields: DESCRIPTION, KEY WORK (bullet list), STACK, IMPACT/STATS, LINKS.

Update metadata description to reflect backend/systems focus.

Update project summary footer to: `Total: 4 | 3 production systems, 1 npm package (630+ downloads)`

**Step 2: Verify**

Run: `npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add app/projects/page.tsx
git commit -m "feat: rewrite projects with production case studies"
```

---

### Task 3: Rewrite Experience Page

**Files:**
- Modify: `app/experience/page.tsx:1-127`

**Step 1: Rewrite experience page**

Replace current key-value grid layout with paragraph-style descriptions for each role.

Current Role section:
- Title: `$ whoami --current`
- Role/Company/Period as compact header
- Followed by paragraph: "Backend engineer on a SaaS product serving multiple organizations. I own core systems — multi-tenant architecture, payment integrations, API design, and cloud infrastructure. Day-to-day involves shipping features, designing database schemas, writing migrations, and keeping production stable on AWS. I work across the stack when needed but my focus is backend systems and infrastructure."

Internship section:
- Title: `$ cat internship.log`
- Role/Company/Period as compact header
- Followed by paragraph: "Sole backend engineer from day one. No senior, no handholding — I owned the entire backend and its DevOps. Wrote production code, designed the database layer, set up deployment pipelines, and managed cloud infrastructure solo. Shipped to production independently within my first week. Transitioned to a full-time role after six months."

Education:
- Single line at bottom: `B.Tech Computer Science · CGPA 8.78`
- No separate section heading, just a small footer-style line

Update metadata to reflect backend engineer positioning.

**Step 2: Verify**

Run: `npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add app/experience/page.tsx
git commit -m "feat: rewrite experience with impact-focused descriptions"
```

---

### Task 4: Update Layout Metadata

**Files:**
- Modify: `app/layout.tsx:19-97`

**Step 1: Update metadata**

Change all "Full Stack Developer" references to "Backend Engineer":
- `title.default`: "Mohitsingh Thakur - Backend Engineer | Portfolio"
- `description`: "Backend engineer specializing in multi-tenant SaaS, payment systems, and cloud infrastructure. Node.js, PostgreSQL, AWS."
- `openGraph.title`: "Mohitsingh Thakur - Backend Engineer"
- `openGraph.description`: Same as description
- `twitter.title`: "Mohitsingh Thakur - Backend Engineer"
- `twitter.description`: Same short version
- Update `keywords` array — remove "Full Stack Developer", "React Developer", "Web Developer". Add "Backend Engineer", "SaaS Developer", "Multi-tenant Architecture", "Payment Systems".
- Update JSON-LD `jobTitle` to "Backend Engineer" (keep company name as is since it's real)

**Step 2: Verify**

Run: `npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: update metadata to backend engineer positioning"
```

---

### Task 5: Final Verification

**Step 1: Full build check**

Run: `npm run build`
Expected: Clean build, no warnings or errors.

**Step 2: Dev server visual check**

Run: `npm run dev`
Manually verify all 4 pages render correctly:
- `/` — new hero + ps aux section
- `/projects` — 4 project case studies
- `/experience` — paragraph descriptions
- `/blogs` — unchanged

**Step 3: Commit any remaining fixes if needed**
