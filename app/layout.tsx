import type { Metadata } from "next";
import { Google_Sans_Code } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Navbar from "./components/Navbar";
import GridLine from "./components/GridLine";
import MobileDock from "./components/MobileDock";
import VisitorCount from "./components/VisitorCount";
import { Analytics } from "@vercel/analytics/next";

const googleSansCode = Google_Sans_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gsc",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://moh1t.com"),
  title: {
    default: "Mohitsingh Thakur - Backend Engineer | Portfolio",
    template: "%s | Mohitsingh Thakur",
  },
  description:
    "Backend engineer specializing in multi-tenant SaaS, payment systems, and cloud infrastructure. Node.js, PostgreSQL, AWS.",
  keywords: [
    "Mohitsingh Thakur",
    "Mohit Singh",
    "Mohit Singh Thakur",
    "Mohit Thakur",
    "Backend Engineer",
    "System Architect",
    "Node.js Developer",
    "PostgreSQL Developer",
    "AWS Developer",
    "SaaS Developer",
    "Multi-tenant Architecture",
    "Payment Systems",
    "Cloud Infrastructure",
    "API Development",
    "Database Design",
    "DevOps Engineer",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Mohitsingh Thakur" }],
  creator: "Mohitsingh Thakur",
  publisher: "Mohitsingh Thakur",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://moh1t.com",
    siteName: "Mohitsingh Thakur",
    title: "Mohitsingh Thakur - Backend Engineer",
    description:
      "Backend engineer specializing in multi-tenant SaaS, payment systems, and cloud infrastructure. Node.js, PostgreSQL, AWS.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Mohitsingh Thakur portfolio homepage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohitsingh Thakur - Backend Engineer",
    description:
      "Backend engineer specializing in multi-tenant SaaS, payment systems, and cloud infrastructure.",
    images: ["/opengraph-image"],
    creator: "@is_mohitsingh",
    site: "@is_mohitsingh",
  },
  alternates: {
    canonical: "https://moh1t.com",
  },
  category: "technology",
  classification: "Portfolio",
  other: {
    "theme-color": "#0a0a0b",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://moh1t.com" />
        <meta name="color-scheme" content="dark" />
        <meta name="mobile-web-app-capable" content="no" />
        <meta name="apple-mobile-web-app-capable" content="no" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body className={`${googleSansCode.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mohitsingh Thakur",
              url: "https://moh1t.com",
              jobTitle: "Backend Engineer",
              worksFor: { "@type": "Organization", name: "Your Brand Mate" },
              knowsAbout: [
                "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
                "PostgreSQL", "AWS", "Docker", "System Architecture", "REST APIs",
              ],
              sameAs: [
                "https://github.com/moh1tsingh",
                "https://linkedin.com/in/mohitsingh-thakur",
                "https://x.com/is_mohitsingh",
              ],
              alumniOf: { "@type": "EducationalOrganization", name: "B.Tech Computer Science" },
            }),
          }}
        />
        <div className="min-h-screen w-full overflow-x-hidden">
          {/* Main content column with vertical edge lines */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical edge lines */}
            <div className="absolute inset-y-0 left-0 w-px bg-[var(--border)] opacity-70 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-px bg-[var(--border)] opacity-70 pointer-events-none" />

            <Navbar />
            <GridLine />
            {/* Shared visual banner */}
            <div className="site-visual-banner">
              <Image
                src="/gif-bg.gif"
                alt=""
                width={960}
                height={260}
                unoptimized
                priority
                className="h-full w-full object-cover opacity-80"
              />
              <div className="absolute bottom-4 right-7 z-10 hidden sm:block">
                <VisitorCount />
              </div>
            </div>
            <GridLine />
            {children}
            <MobileDock />
            <Analytics />
          </div>
        </div>
      </body>
    </html>
  );
}
