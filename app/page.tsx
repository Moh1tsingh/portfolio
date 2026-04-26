import Image from "next/image";
import Footer from "./components/Footer";
import GridLine from "./components/GridLine";
import AnimatedSection from "./components/AnimatedSection";
import AnimatedItem from "./components/AnimatedItem";
import VisitorCount from "./components/VisitorCount";

const notes = [
  "I have been building production software for a little over a year, mostly inside startup-paced teams where shipping and ownership matter.",
  "My strongest work is the part behind the interface: databases, APIs, auth, queues, payments, cloud deployments, and the small details that keep a product stable.",
  "I still care about the front end. Not flashy screens for the sake of it, but clean product surfaces that make the system underneath easier to trust.",
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <AnimatedSection className="px-7 sm:px-10 py-12 sm:py-16">
        <AnimatedItem>
          <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[var(--text)]">
                Mohitsingh Thakur
              </h1>
              <p className="mt-3 text-[16px] sm:text-[18px] text-[var(--text-muted)]">
                I build product backends, cloud infra, and the tools around them.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-2 text-[15px] text-[var(--text-faint)]">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  currently shipping prod
                </span>
                <span>&bull;</span>
                <span>1+ year in production software</span>
              </div>
            </div>

            <div className="hidden items-center gap-5 sm:flex sm:flex-col sm:items-end">
              {/* <div className="relative size-40 shrink-0 overflow-hidden rounded-xl border border-[var(--border-hover)] bg-[var(--bg-card)] opacity-90 shadow-lg shadow-black/30">
                <Image
                  src="/me.jpeg"
                  alt="Mohitsingh Thakur"
                  width={160}
                  height={160}
                  priority
                  className="h-full w-full object-cover grayscale"
                />
              </div> */}
              <VisitorCount />
            </div>
          </div>
        </AnimatedItem>
      </AnimatedSection>

      <GridLine />

      {/* Notes */}
      <AnimatedSection className="px-7 sm:px-10 py-9 sm:py-12">
        <AnimatedItem>
          <h2 className="text-xl sm:text-2xl font-semibold text-[var(--text-faint)] mb-6">
            Notes
          </h2>
        </AnimatedItem>
        <div className="space-y-5 text-[16px] text-[var(--text-muted)] leading-relaxed">
          {notes.map((note) => (
            <AnimatedItem key={note}>
              <p>{note}</p>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>

      <GridLine />

      {/* Connect / Footer */}
      <div className="px-7 sm:px-10 py-9 sm:py-12">
        <Footer />
      </div>
    </main>
  );
}
