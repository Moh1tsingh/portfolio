import { Metadata } from "next";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Blog Posts",
  description:
    "Technical blog posts by Mohitsingh Thakur on RAG chatbots, MCP servers, AI infrastructure, and full-stack architecture.",
  openGraph: {
    title: "Blog Posts - Mohitsingh Thakur",
    description:
      "Technical writing on RAG chatbots, MCP servers, and full-stack architecture.",
  },
  alternates: {
    canonical: "https://moh1t.com/blogs",
  },
};

const blogPosts = [
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
    title:
      "What Is MCP Server and Why Does It Matter So Much in Current AI Scenario?",
    summary:
      "Explaining Anthropic\u2019s Model Context Protocol \u2014 a universal adaptor for LLMs to access real-time external data, files, databases, and APIs",
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
    author: {
      "@type": "Person",
      name: "Mohitsingh Thakur",
      url: "https://moh1t.com",
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.summary,
      datePublished: post.date,
      author: {
        "@type": "Person",
        name: "Mohitsingh Thakur",
      },
      url: post.url,
    })),
  };

  return (
    <main className="space-y-4 sm:space-y-6 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="space-y-3 sm:space-y-4">
        <h1 className="text-2xl sm:text-3xl font-mono font-bold tracking-tight pixelated">
          $ ls blogs/
        </h1>
      </section>

      <section className="space-y-4 sm:space-y-6">
        {blogPosts.map((post) => (
          <a
            key={post.slug}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block space-y-3 sm:space-y-4 p-4 sm:p-6 border border-white/20 rounded hover:border-white/40 transition-colors duration-200"
          >
            <article className="space-y-2 sm:space-y-3">
              <h2 className="text-lg sm:text-xl font-mono font-semibold text-white">
                $ cat {post.slug}.md
              </h2>
              <div className="space-y-2 sm:space-y-3 text-white/90 font-mono text-xs sm:text-sm">
                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                  <span className="text-white/60 min-w-[80px] sm:min-w-[100px]">
                    Title:
                  </span>
                  <span className="text-white">{post.title}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                  <span className="text-white/60 min-w-[80px] sm:min-w-[100px]">
                    Summary:
                  </span>
                  <span className="text-white">{post.summary}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                  <span className="text-white/60 min-w-[80px] sm:min-w-[100px]">
                    Date:
                  </span>
                  <time dateTime={post.date} className="text-white">
                    {post.dateFormatted}
                  </time>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="text-white/60 min-w-[80px] sm:min-w-[100px]">
                    Published:
                  </span>
                  <span className="text-blue-400">{post.publisher}</span>
                </div>
              </div>
            </article>
          </a>
        ))}

        {/* Blog Summary */}
        <div className="pt-3 sm:pt-4 border-t border-white/20">
          <div className="text-white/60 font-mono text-xs sm:text-sm">
            $ wc -l blogs/* | tail -1
          </div>
          <div className="text-white/80 font-mono text-xs sm:text-sm mt-2">
            Total posts: 2 | Published on ybmlabs.com, yourbrandmate.agency
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
