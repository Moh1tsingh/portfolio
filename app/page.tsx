import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="space-y-6 sm:space-y-8 px-4 sm:px-6 lg:px-8">
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
          <div className="text-white/60 font-mono text-sm sm:text-base leading-tight">
            Backend engineer at a startup. I work on multi-tenant SaaS, payment systems, and cloud infrastructure.
          </div>
        </div>
      </section>

      <section className="pt-6 sm:pt-8 border-t border-white/20">
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl font-mono font-semibold">
            $ ps aux --services
          </h2>
          {/* Desktop: aligned grid */}
          <div className="hidden sm:grid grid-cols-[auto_auto_auto_1fr] gap-x-4 gap-y-3 font-mono text-sm items-center">
            <span className="text-green-400">●</span>
            <span className="text-white">api-design</span>
            <span className="text-green-400">RUNNING</span>
            <span className="text-white/60">REST & service APIs, auth layers, rate limiting</span>

            <span className="text-blue-400">●</span>
            <span className="text-white">database-arch</span>
            <span className="text-green-400">RUNNING</span>
            <span className="text-white/60">Schema design, query optimization, migrations (30+ table systems)</span>

            <span className="text-yellow-400">●</span>
            <span className="text-white">payment-systems</span>
            <span className="text-green-400">RUNNING</span>
            <span className="text-white/60">Billing integrations, subscription workflows, ledger design</span>

            <span className="text-purple-400">●</span>
            <span className="text-white">cloud-infra</span>
            <span className="text-green-400">RUNNING</span>
            <span className="text-white/60">AWS (EC2, RDS, CloudFront, SQS), Docker, CI/CD pipelines</span>

            <span className="text-cyan-400">●</span>
            <span className="text-white">multi-tenant-saas</span>
            <span className="text-green-400">RUNNING</span>
            <span className="text-white/60">Tenant isolation, RBAC, org-level access control</span>

            <span className="text-orange-400">●</span>
            <span className="text-white">internal-tooling</span>
            <span className="text-green-400">RUNNING</span>
            <span className="text-white/60">Workflow automation, admin dashboards, ops tooling</span>
          </div>

          {/* Mobile: stacked layout */}
          <div className="sm:hidden space-y-3 font-mono text-xs">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">●</span>
                <span className="text-white">api-design</span>
                <span className="text-green-400">RUNNING</span>
              </div>
              <div className="text-white/60 pl-5">REST & service APIs, auth layers, rate limiting</div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">●</span>
                <span className="text-white">database-arch</span>
                <span className="text-green-400">RUNNING</span>
              </div>
              <div className="text-white/60 pl-5">Schema design, query optimization, migrations (30+ table systems)</div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">●</span>
                <span className="text-white">payment-systems</span>
                <span className="text-green-400">RUNNING</span>
              </div>
              <div className="text-white/60 pl-5">Billing integrations, subscription workflows, ledger design</div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-purple-400">●</span>
                <span className="text-white">cloud-infra</span>
                <span className="text-green-400">RUNNING</span>
              </div>
              <div className="text-white/60 pl-5">AWS (EC2, RDS, CloudFront, SQS), Docker, CI/CD pipelines</div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">●</span>
                <span className="text-white">multi-tenant-saas</span>
                <span className="text-green-400">RUNNING</span>
              </div>
              <div className="text-white/60 pl-5">Tenant isolation, RBAC, org-level access control</div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-orange-400">●</span>
                <span className="text-white">internal-tooling</span>
                <span className="text-green-400">RUNNING</span>
              </div>
              <div className="text-white/60 pl-5">Workflow automation, admin dashboards, ops tooling</div>
            </div>
          </div>

          <div className="pt-3 sm:pt-4 border-t border-white/10">
            <div className="text-white/80 font-mono text-xs sm:text-sm">
              <span className="text-yellow-400">●</span> Current Status:{" "}
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

      <Footer />
    </main>
  );
}
