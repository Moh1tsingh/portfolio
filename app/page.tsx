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
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3 font-mono text-xs sm:text-sm">
              <span className="text-green-400">●</span>
              <span className="text-white">api-design</span>
              <span className="text-green-400">RUNNING</span>
              <span className="text-white/60">REST & service APIs, auth layers, rate limiting</span>
            </div>
            <div className="flex items-center gap-3 font-mono text-xs sm:text-sm">
              <span className="text-blue-400">●</span>
              <span className="text-white">database-arch</span>
              <span className="text-green-400">RUNNING</span>
              <span className="text-white/60">Schema design, query optimization, migrations (30+ table systems)</span>
            </div>
            <div className="flex items-center gap-3 font-mono text-xs sm:text-sm">
              <span className="text-yellow-400">●</span>
              <span className="text-white">payment-systems</span>
              <span className="text-green-400">RUNNING</span>
              <span className="text-white/60">Billing integrations, subscription workflows, ledger design</span>
            </div>
            <div className="flex items-center gap-3 font-mono text-xs sm:text-sm">
              <span className="text-purple-400">●</span>
              <span className="text-white">cloud-infra</span>
              <span className="text-green-400">RUNNING</span>
              <span className="text-white/60">AWS (EC2, RDS, CloudFront, SQS), Docker, CI/CD pipelines</span>
            </div>
            <div className="flex items-center gap-3 font-mono text-xs sm:text-sm">
              <span className="text-cyan-400">●</span>
              <span className="text-white">multi-tenant-saas</span>
              <span className="text-green-400">RUNNING</span>
              <span className="text-white/60">Tenant isolation, RBAC, org-level access control</span>
            </div>
            <div className="flex items-center gap-3 font-mono text-xs sm:text-sm">
              <span className="text-orange-400">●</span>
              <span className="text-white">internal-tooling</span>
              <span className="text-green-400">RUNNING</span>
              <span className="text-white/60">Workflow automation, admin dashboards, ops tooling</span>
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
