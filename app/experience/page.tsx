import { Metadata } from "next";
import Footer from "../components/Footer";
import GridLine from "../components/GridLine";
import AnimatedSection from "../components/AnimatedSection";
import AnimatedItem from "../components/AnimatedItem";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Backend engineer building production SaaS systems. Product Engineer at Your Brand Mate. Node.js, PostgreSQL, AWS infrastructure.",
  openGraph: {
    title: "Experience - Mohitsingh Thakur",
    description: "Backend engineer building production SaaS systems.",
  },
  alternates: { canonical: "https://moh1t.com/experience" },
};

export default function Experience() {
  return (
    <main>
      <AnimatedSection className="px-6 sm:px-8 py-8 sm:py-10">
        <AnimatedItem>
          <h1 className="text-xl sm:text-2xl font-semibold text-[var(--text-faint)] mb-6">
            Experience
          </h1>
        </AnimatedItem>

        <div className="space-y-8">
          <AnimatedItem>
            <div className="space-y-2">
              <div className="flex items-center gap-2.5">
                <h2 className="text-lg font-semibold">Product Engineer</h2>
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              </div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[15px]">
                <span className="text-[var(--text-muted)]">
                  Your Brand Mate
                </span>
                <span className="text-[var(--text-faint)]">&middot;</span>
                <span className="text-[13px] text-[var(--text-faint)]">
                  June 2025 &ndash; Present
                </span>
              </div>
              <p className="text-[15px] text-[var(--text-muted)] leading-relaxed pt-1">
                Backend engineer on SaaS products serving multiple organizations. I
                own core systems - multi-tenant architecture, payment integrations,
                API design, and cloud infrastructure. Day-to-day involves shipping
                features, designing database schemas, writing migrations, and
                keeping production stable.
              </p>
            </div>
          </AnimatedItem>

          <div className="h-px bg-[var(--border)]" />

          <AnimatedItem>
            <div className="space-y-2">
              <div className="flex items-center gap-2.5">
                <h2 className="text-lg font-semibold">
                  Full Stack Engineer Intern
                </h2>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-faint)]" />
              </div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[15px]">
                <span className="text-[var(--text-muted)]">
                  Your Brand Mate
                </span>
                <span className="text-[var(--text-faint)]">&middot;</span>
                <span className="text-[13px] text-[var(--text-faint)]">
                  Dec 2024 &ndash; June 2025
                </span>
              </div>
              <p className="text-[15px] text-[var(--text-muted)] leading-relaxed pt-1">
                Sole backend engineer from day one. No senior, no handholding - I
                owned the entire backend and its DevOps. Wrote production code,
                designed the database layer, set up deployment pipelines, and
                managed cloud infrastructure solo. Shipped to production
                independently. Transitioned to full-time after six months.
              </p>
            </div>
          </AnimatedItem>

          <div className="h-px bg-[var(--border)]" />

          <AnimatedItem>
            <p className="text-[15px] text-[var(--text-faint)]">
              B.Tech Computer Science &middot; CGPA 8.78
            </p>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      <GridLine />
      <div className="px-6 sm:px-8 py-8 sm:py-10">
        <Footer />
      </div>
    </main>
  );
}
