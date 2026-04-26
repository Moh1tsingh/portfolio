import { Metadata } from "next";
import Footer from "../components/Footer";
import GridLine from "../components/GridLine";
import AnimatedSection from "../components/AnimatedSection";
import AnimatedItem from "../components/AnimatedItem";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Mohitsingh Thakur: ShellChess terminal chess client, dsa-with-javascript npm library, and production healthcare platform backend.",
  openGraph: {
    title: "Projects - Mohitsingh Thakur",
    description: "Terminal tools, open-source packages, and production backend systems.",
  },
  alternates: { canonical: "https://moh1t.com/projects" },
};

const projects = [
  {
    name: "ShellChess",
    description:
      "A terminal chess client I built because I kept switching to a browser tab while CLI AI tools were running on my projects.",
    work: [
      "Created a chess workflow that stays inside the terminal instead of another tab, window, or desktop",
      "Built it for the dead time between prompting an AI coding agent and reviewing its output",
      "Focused on making the game feel natural for developers already living in the CLI",
    ],
    stack: ["Terminal UI", "Lichess", "CLI"],
    impact:
      "A small personal tool built from an actual developer workflow annoyance.",
    links: [
      { label: "GitHub", href: "https://github.com/Moh1tsingh/shellchess" },
      { label: "npm", href: "https://www.npmjs.com/package/shellchess" },
    ],
  },
  {
    name: "dsa-with-javascript",
    description:
      "An open-source npm package implementing common data structures and algorithms for JavaScript and TypeScript projects.",
    work: [
      "Implemented linked lists, trees, graphs, and sorting algorithms",
      "Published and versioned the package on npm with TypeScript support",
      "Kept the code readable so it works as both a utility and a learning reference",
    ],
    stack: ["JavaScript", "TypeScript", "Node.js", "npm"],
    impact: "700+ downloads on npm.",
    links: [
      { label: "GitHub", href: "https://github.com/Moh1tsingh/dsa-npm-lib" },
      { label: "npm", href: "https://www.npmjs.com/package/dsa-with-javascript" },
    ],
  },
  {
    name: "Healthcare Platform Backend",
    description:
      "A production healthcare platform backend for pharmacy workflows, patient records, appointments, prescriptions, follow-ups, billing, and operational audit trails.",
    work: [
      "Built and deployed the Express/TypeScript backend with Prisma and PostgreSQL",
      "Designed a large domain model across pharmacies, patients, appointments, prescriptions, services, waitlists, follow-ups, billing, fax, and audit events",
      "Deployed the production setup on AWS Elastic Beanstalk with scalable infrastructure around RDS PostgreSQL",
      "Integrated AWS SES, SQS, Lambda, S3, CloudFront, EventBridge, ACM, and related production services",
      "Implemented healthcare workflow depth including booking, reminders, file uploads, email flows, Stripe billing, access control, and audit logging",
    ],
    stack: [
      "Node.js",
      "TypeScript",
      "Express",
      "Prisma",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Stripe",
    ],
    impact:
      "Non-disclosable production system. I can discuss architecture, deployment decisions, and backend ownership at a high level.",
  },
];

export default function Projects() {
  return (
    <main>
      <AnimatedSection className="px-6 sm:px-8 py-8 sm:py-10">
        <AnimatedItem>
          <h1 className="text-xl sm:text-2xl font-semibold text-[var(--text-faint)] mb-6">
            Projects
          </h1>
        </AnimatedItem>

        <div className="space-y-6">
          {projects.map((project) => (
            <AnimatedItem key={project.name}>
              <div className="space-y-3">
                <h2 className="text-lg font-semibold">{project.name}</h2>
                <p className="text-[15px] text-[var(--text-muted)] leading-relaxed">
                  {project.description}
                </p>
                <ul className="space-y-1">
                  {project.work.map((item) => (
                    <li
                      key={item}
                      className="text-[15px] text-[var(--text-muted)] flex gap-2"
                    >
                      <span className="text-[var(--text-faint)] shrink-0">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[12px] text-[var(--text-faint)] px-2 py-0.5 rounded border border-[var(--border)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-[14px] text-[var(--text-faint)]">
                  {project.impact}
                </p>
                {project.links && (
                  <div className="flex gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[14px] text-[var(--accent)] hover:text-[var(--text)] transition-colors"
                      >
                        {link.label} &rarr;
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <div className="mt-6 h-px bg-[var(--border)]" />
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>

      <GridLine />
      <div className="px-6 sm:px-8 py-8 sm:py-10">
        <Footer />
      </div>
    </main>
  );
}
