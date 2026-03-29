# Portfolio Revamp Design

## Goal
Transform portfolio from "I write code" to "I build and run production systems." Keep existing terminal/CLI design language. Make it senior-level, minimal, no BS.

---

## 1. Hero Section (Rewrite)

Keep `$ whoami` prompt. Replace bio.

```
Mohitsingh Thakur

$ whoami
I build backend systems that run in production.

Backend engineer at a startup. I work on multi-tenant SaaS,
payment systems, and cloud infrastructure.
```

Update status line from "Building something awesome" to "shipping production systems".

---

## 2. "What I Do" Section (Replace systemctl status)

Style as `$ ps aux --services` process list. Colored dots + service name + RUNNING + description.

| Service | Description |
|---|---|
| api-design | REST & service APIs, auth layers, rate limiting |
| database-arch | Schema design, query optimization, migrations (30+ table systems) |
| payment-systems | Billing integrations, subscription workflows, ledger design |
| cloud-infra | AWS (EC2, RDS, CloudFront, SQS), Docker, CI/CD pipelines |
| multi-tenant-saas | Tenant isolation, RBAC, org-level access control |
| internal-tooling | Workflow automation, admin dashboards, ops tooling |

No skill bars. No logos. No "Tools & Version Control" category.

---

## 3. Projects (4 case studies)

Style each as `$ cat projects/<name>.md` with DESCRIPTION, KEY WORK, STACK, IMPACT sections.

### 3.1 Multi-Tenant SaaS Platform
- 30+ table PostgreSQL schema with tenant isolation
- RBAC system (org admins, members, viewers)
- Org-level settings, permissions, invite flows
- API layer with multi-tenant query scoping
- Stack: Node.js (TS), PostgreSQL, AWS (EC2, RDS), Docker

### 3.2 Payment Processing System
- Third-party payment gateway + webhook handling
- Subscription management (upgrades/downgrades)
- Ledger tables for transaction history & audit
- Retry logic and idempotency for failed payments
- Stack: Node.js (TS), PostgreSQL, REST APIs, Webhooks

### 3.3 API Gateway & Service Layer
- RESTful API architecture with versioned endpoints
- Auth middleware (JWT, session management)
- Rate limiting and request validation
- Service layer separating business logic from transport
- Stack: Node.js (TS), Express, PostgreSQL, AWS CloudFront

### 3.4 dsa-with-javascript (real, linked)
- Open-source npm library — data structures & algorithms in JS
- 630+ downloads on npm
- Links: GitHub, npm
- Stack: JavaScript, Node.js, npm

**Remove:** Sentilizer project.

---

## 4. Experience (Rewrite)

### Product Engineer — [Startup] · June 2025 – Present
Backend engineer on a SaaS product serving multiple organizations. Owns core systems — multi-tenant architecture, payment integrations, API design, and cloud infrastructure. Ships features, designs database schemas, writes migrations, keeps production stable on AWS. Works across the stack when needed but focus is backend systems and infrastructure.

### Full Stack Engineer Intern — [Startup] · Dec 2024 – June 2025
Sole backend engineer from day one. No senior, no handholding — owned the entire backend and its DevOps. Wrote production code, designed the database layer, set up deployment pipelines, and managed cloud infrastructure solo. Shipped to production independently within first week. Transitioned to full-time after six months.

### Education
B.Tech Computer Science · CGPA 8.78 (single line, no section)

---

## 5. Remove/Reduce

- Kill Sentilizer project
- Kill "Building something awesome" status text
- Kill current systemctl status section (replaced by ps aux)
- Kill "Tools & Version Control" category
- Keep blogs section as-is
- Keep 404 page
- Keep footer/social links

---

## 6. Design Constraints

- Same terminal/CLI aesthetic (black bg, JetBrains Mono, colored dots, `$` prompts)
- Same tech (Next.js, Tailwind, no UI libraries)
- No emojis, no buzzwords, no cringe
- Minimal, confident, slightly technical tone
