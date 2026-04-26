import { Metadata } from "next";
import Footer from "../components/Footer";
import GridLine from "../components/GridLine";
import AnimatedSection from "../components/AnimatedSection";
import AnimatedItem from "../components/AnimatedItem";

export const metadata: Metadata = {
  title: "Blog Posts",
  description:
    "Technical blog posts by Mohitsingh Thakur on WebRTC, RAG chatbots, MCP servers, AI infrastructure, and full-stack architecture.",
  openGraph: {
    title: "Blog Posts - Mohitsingh Thakur",
    description: "Technical writing on WebRTC, RAG chatbots, MCP servers, and full-stack architecture.",
  },
  alternates: { canonical: "https://moh1t.com/blogs" },
};

const blogPosts = [
  {
    slug: "webrtc-peer-to-peer-core",
    title: "How does Peer-to-Peer connection work? The WebRTC Core.",
    summary:
      "A practical breakdown of how WebRTC establishes peer-to-peer connections using NAT traversal, STUN, TURN, and NAT hole punching",
    date: "2026-04-26",
    dateFormatted: "Apr 26, 2026",
    publisher: "medium.com",
    url: "https://medium.com/@thakurmohitsingh2003/how-does-peer-to-peer-connection-work-the-webrtc-core-a3c07830006f",
  },
  {
    slug: "horizon-rag-chatbot",
    title: "How I Built Horizon: A Production-Ready RAG Chatbot Platform",
    summary:
      "Building a full-stack RAG chatbot platform with semantic chunking, hybrid search, and LLM reranking using a Turborepo monorepo architecture",
    date: "2026-02-06",
    dateFormatted: "Feb 6, 2026",
    publisher: "ybmlabs.com",
    url: "https://ybmlabs.com/blog/how-i-built-horizon-a-production%E2%80%91ready-rag-chatbot-platform",
  },
  {
    slug: "mcp-server",
    title: "What Is MCP Server and Why Does It Matter So Much in Current AI Scenario?",
    summary:
      "Explaining Anthropic\u2019s Model Context Protocol - a universal adaptor for LLMs to access real-time external data, files, databases, and APIs",
    date: "2025-03-31",
    dateFormatted: "Mar 31, 2025",
    publisher: "yourbrandmate.agency",
    url: "https://yourbrandmate.agency/blog/what-is-mcp-server-and-why-does-it-matter-so-much-in-current-ai-scenerio",
  },
];

export default function Blogs() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Mohitsingh Thakur's Blog",
    url: "https://moh1t.com/blogs",
    author: { "@type": "Person", name: "Mohitsingh Thakur", url: "https://moh1t.com" },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.summary,
      datePublished: post.date,
      author: { "@type": "Person", name: "Mohitsingh Thakur" },
      url: post.url,
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <AnimatedSection className="px-6 sm:px-8 py-8 sm:py-10">
        <AnimatedItem>
          <h1 className="text-xl sm:text-2xl font-semibold text-[var(--text-faint)] mb-6">
            Blog
          </h1>
        </AnimatedItem>

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <AnimatedItem key={post.slug}>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <h2 className="text-lg font-semibold mb-1 group-hover:text-[var(--accent)] transition-colors">
                  {post.title}
                  {/* <span className="inline-block ml-1 text-[var(--text-faint)] group-hover:text-[var(--accent)] transition-colors">
                    &nearr;
                  </span> */}
                </h2>
                <p className="text-[15px] text-[var(--text-muted)] leading-relaxed mb-2">
                  {post.summary}
                </p>
                <div className="flex items-center gap-2 text-[13px] text-[var(--text-faint)]">
                  <time dateTime={post.date}>{post.dateFormatted}</time>
                  <span>&middot;</span>
                  <span>{post.publisher}</span>
                </div>
              </a>
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
