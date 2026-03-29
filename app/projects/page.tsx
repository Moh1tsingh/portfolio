import { Metadata } from "next";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Backend systems and production infrastructure built by Mohitsingh Thakur. Multi-tenant SaaS, payment processing, API architecture, and open-source npm libraries.",
  openGraph: {
    title: "Projects - Mohitsingh Thakur",
    description:
      "Production backend systems and open-source tools.",
  },
  alternates: {
    canonical: "https://moh1t.com/projects",
  },
};

export default function Projects() {
  return (
    <main className="space-y-4 sm:space-y-6 px-4 sm:px-6 lg:px-8">
      <section className="space-y-3 sm:space-y-4">
        <h1 className="text-2xl sm:text-3xl font-mono font-bold tracking-tight pixelated">
          $ ls projects/
        </h1>
      </section>

      <section className="space-y-4 sm:space-y-6">
        {/* Multi-Tenant SaaS Platform */}
        <div className="space-y-3 sm:space-y-4 p-4 sm:p-6 border border-white/20 rounded">
          <div className="space-y-2 sm:space-y-3">
            <h2 className="text-lg sm:text-xl font-mono font-semibold text-white">
              $ cat multi-tenant-saas/README.md
            </h2>
            <div className="space-y-2 sm:space-y-3 text-white/90 font-mono text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="text-white/60 min-w-[80px] sm:min-w-[100px]">
                  Project:
                </span>
                <span className="text-white">Multi-Tenant SaaS Platform</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                <span className="text-white/60 min-w-[80px] sm:min-w-[100px] shrink-0">
                  Description:
                </span>
                <span className="text-white">
                  A multi-tenant SaaS platform serving multiple organizations
                  with isolated data, role-based access, and org-level controls.
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-white/60">Key Work:</span>
                <div className="pl-3 sm:pl-4 text-white space-y-1">
                  <div>├─ Designed a 30+ table PostgreSQL schema with tenant isolation</div>
                  <div>├─ Built role-based access control system (org admins, members, viewers)</div>
                  <div>├─ Implemented org-level settings, permissions, and invite flows</div>
                  <div>└─ Architected API layer handling multi-tenant query scoping</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="text-white/60 min-w-[80px] sm:min-w-[100px]">
                  Stack:
                </span>
                <span className="text-white">
                  Node.js (TypeScript) · PostgreSQL · AWS (EC2, RDS) · Docker
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                <span className="text-white/60 min-w-[80px] sm:min-w-[100px] shrink-0">
                  Impact:
                </span>
                <span className="text-white">
                  Handles production workloads across multiple tenants.
                  Designed for horizontal scalability and strict data isolation.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Processing System */}
        <div className="space-y-3 sm:space-y-4 p-4 sm:p-6 border border-white/20 rounded">
          <div className="space-y-2 sm:space-y-3">
            <h2 className="text-lg sm:text-xl font-mono font-semibold text-white">
              $ cat payment-system/README.md
            </h2>
            <div className="space-y-2 sm:space-y-3 text-white/90 font-mono text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="text-white/60 min-w-[80px] sm:min-w-[100px]">
                  Project:
                </span>
                <span className="text-white">Payment Processing System</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                <span className="text-white/60 min-w-[80px] sm:min-w-[100px] shrink-0">
                  Description:
                </span>
                <span className="text-white">
                  End-to-end payment and billing system integrated into a SaaS product.
                  Handles subscriptions, invoicing, and payment lifecycle events.
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-white/60">Key Work:</span>
                <div className="pl-3 sm:pl-4 text-white space-y-1">
                  <div>├─ Integrated third-party payment gateway with webhook handling</div>
                  <div>├─ Built subscription management with plan upgrades/downgrades</div>
                  <div>├─ Designed ledger tables for transaction history and audit trails</div>
                  <div>└─ Implemented retry logic and idempotency for failed payments</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="text-white/60 min-w-[80px] sm:min-w-[100px]">
                  Stack:
                </span>
                <span className="text-white">
                  Node.js (TypeScript) · PostgreSQL · REST APIs · Webhooks
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                <span className="text-white/60 min-w-[80px] sm:min-w-[100px] shrink-0">
                  Impact:
                </span>
                <span className="text-white">
                  Processes real transactions in production.
                  Built for reliability with idempotent operations and audit logging.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* API Gateway & Service Layer */}
        <div className="space-y-3 sm:space-y-4 p-4 sm:p-6 border border-white/20 rounded">
          <div className="space-y-2 sm:space-y-3">
            <h2 className="text-lg sm:text-xl font-mono font-semibold text-white">
              $ cat api-gateway/README.md
            </h2>
            <div className="space-y-2 sm:space-y-3 text-white/90 font-mono text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="text-white/60 min-w-[80px] sm:min-w-[100px]">
                  Project:
                </span>
                <span className="text-white">API Gateway & Service Layer</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                <span className="text-white/60 min-w-[80px] sm:min-w-[100px] shrink-0">
                  Description:
                </span>
                <span className="text-white">
                  Centralized API layer handling authentication, routing,
                  rate limiting, and service orchestration for a SaaS product.
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-white/60">Key Work:</span>
                <div className="pl-3 sm:pl-4 text-white space-y-1">
                  <div>├─ Designed RESTful API architecture with versioned endpoints</div>
                  <div>├─ Built authentication middleware (JWT, session management)</div>
                  <div>├─ Implemented rate limiting and request validation</div>
                  <div>└─ Structured service layer separating business logic from transport</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="text-white/60 min-w-[80px] sm:min-w-[100px]">
                  Stack:
                </span>
                <span className="text-white">
                  Node.js (TypeScript) · Express · PostgreSQL · AWS CloudFront
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                <span className="text-white/60 min-w-[80px] sm:min-w-[100px] shrink-0">
                  Impact:
                </span>
                <span className="text-white">
                  Powers core product workflows in production.
                  Optimized for low-latency responses and consistent error handling.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* dsa-with-javascript */}
        <div className="space-y-3 sm:space-y-4 p-4 sm:p-6 border border-white/20 rounded">
          <div className="space-y-2 sm:space-y-3">
            <h2 className="text-lg sm:text-xl font-mono font-semibold text-white">
              $ cat dsa-js/README.md
            </h2>
            <div className="space-y-2 sm:space-y-3 text-white/90 font-mono text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="text-white/60 min-w-[80px] sm:min-w-[100px]">
                  Project:
                </span>
                <span className="text-white">dsa-with-javascript</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                <span className="text-white/60 min-w-[80px] sm:min-w-[100px] shrink-0">
                  Description:
                </span>
                <span className="text-white">
                  Open-source npm library implementing core data structures
                  and algorithms in JavaScript. Built for learning and reuse.
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-white/60">Key Work:</span>
                <div className="pl-3 sm:pl-4 text-white space-y-1">
                  <div>├─ Implemented linked lists, trees, graphs, sorting algorithms</div>
                  <div>├─ Published to npm with semantic versioning</div>
                  <div>└─ Written for clarity — used as a learning reference</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="text-white/60 min-w-[80px] sm:min-w-[100px]">
                  Stack:
                </span>
                <span className="text-white">
                  JavaScript · Node.js · npm
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="text-white/60 min-w-[80px] sm:min-w-[100px]">
                  Downloads:
                </span>
                <span className="text-white">630+ on npm</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="text-white/60 min-w-[80px] sm:min-w-[100px]">
                  Status:
                </span>
                <span className="text-green-400">● Live on npm</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="text-white/60 min-w-[80px] sm:min-w-[100px]">
                  Links:
                </span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://github.com/Moh1tsingh/dsa-npm-lib"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    [github]
                  </a>
                  <a
                    href="https://www.npmjs.com/package/dsa-with-javascript"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    [npm]
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Summary */}
        <div className="pt-3 sm:pt-4 border-t border-white/20">
          <div className="text-white/60 font-mono text-xs sm:text-sm">
            $ wc -l projects/* | tail -1
          </div>
          <div className="text-white/80 font-mono text-xs sm:text-sm mt-2">
            Total: 4 | 3 production systems, 1 npm package (630+ downloads)
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
