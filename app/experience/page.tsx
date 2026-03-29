import { Metadata } from "next";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Backend engineer building production SaaS systems. Product Engineer at Your Brand Mate. Node.js, PostgreSQL, AWS infrastructure.",
  openGraph: {
    title: "Experience - Mohitsingh Thakur",
    description:
      "Backend engineer building production SaaS systems.",
  },
  alternates: {
    canonical: "https://moh1t.com/experience",
  },
};

export default function Experience() {
  return (
    <main className="space-y-4 sm:space-y-6 px-4 sm:px-6 lg:px-8">
      <section className="space-y-3 sm:space-y-4">
        <h1 className="text-2xl sm:text-3xl font-mono font-bold tracking-tight pixelated">
          $ cat experience.txt
        </h1>
      </section>

      <section className="space-y-4 sm:space-y-6">
        {/* Current Role */}
        <div className="space-y-2 sm:space-y-3">
          <h2 className="text-lg sm:text-xl font-mono font-semibold text-white">
            $ whoami --current
          </h2>
          <div className="font-mono text-xs sm:text-sm text-white/90 space-y-1">
            <div>
              <span className="text-white/60">Role:     </span>
              <span className="text-white">Product Engineer</span>
            </div>
            <div>
              <span className="text-white/60">Company:  </span>
              <span className="text-white">Your Brand Mate</span>
            </div>
            <div>
              <span className="text-white/60">Period:   </span>
              <span className="text-white">June 2025 – Present</span>
            </div>
            <div>
              <span className="text-white/60">Status:   </span>
              <span className="text-green-400">● Active</span>
            </div>
          </div>
          <p className="text-white/60 font-mono text-xs sm:text-sm leading-relaxed">
            Backend engineer on a SaaS product serving multiple organizations. I
            own core systems — multi-tenant architecture, payment integrations,
            API design, and cloud infrastructure. Day-to-day involves shipping
            features, designing database schemas, writing migrations, and
            keeping production stable on AWS. I work across the stack when needed
            but my focus is backend systems and infrastructure.
          </p>
        </div>

        {/* Internship */}
        <div className="space-y-2 sm:space-y-3 pt-3 sm:pt-4 border-t border-white/20">
          <h2 className="text-lg sm:text-xl font-mono font-semibold text-white">
            $ cat internship.log
          </h2>
          <div className="font-mono text-xs sm:text-sm text-white/90 space-y-1">
            <div>
              <span className="text-white/60">Role:     </span>
              <span className="text-white">Full Stack Engineer Intern</span>
            </div>
            <div>
              <span className="text-white/60">Company:  </span>
              <span className="text-white">Your Brand Mate</span>
            </div>
            <div>
              <span className="text-white/60">Period:   </span>
              <span className="text-white">Dec 2024 – June 2025</span>
            </div>
            <div>
              <span className="text-white/60">Status:   </span>
              <span className="text-yellow-400">● Completed</span>
            </div>
          </div>
          <p className="text-white/60 font-mono text-xs sm:text-sm leading-relaxed">
            Sole backend engineer from day one. No senior, no handholding — I
            owned the entire backend and its DevOps. Wrote production code,
            designed the database layer, set up deployment pipelines, and managed
            cloud infrastructure solo. Shipped to production independently
            within my first week. Transitioned to a full-time role after six
            months.
          </p>
        </div>

        {/* Education */}
        <div className="pt-3 sm:pt-4 border-t border-white/20">
          <p className="text-white/60 font-mono text-xs sm:text-sm">
            B.Tech Computer Science · CGPA 8.78
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
