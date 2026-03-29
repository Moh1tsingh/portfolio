import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
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
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mohitsingh Thakur - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohitsingh Thakur - Backend Engineer",
    description:
      "Backend engineer specializing in multi-tenant SaaS, payment systems, and cloud infrastructure.",
    images: ["/og-image.jpg"],
    creator: "@is_mohitsingh",
    site: "@is_mohitsingh",
  },
  alternates: {
    canonical: "https://moh1t.com",
  },
  category: "technology",
  classification: "Portfolio",
  other: {
    "theme-color": "#000000",
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
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
      </head>
      <body className={`${inter.variable} ${jetbrains.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mohitsingh Thakur",
              url: "https://moh1t.com",
              jobTitle: "Backend Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Your Brand Mate",
              },
              knowsAbout: [
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "PostgreSQL",
                "AWS",
                "Docker",
                "System Architecture",
                "REST APIs",
              ],
              sameAs: [
                "https://github.com/moh1tsingh",
                "https://linkedin.com/in/mohitsingh-thakur",
                "https://x.com/is_mohitsingh",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "B.Tech Computer Science",
              },
            }),
          }}
        />
        <div className="min-h-screen w-full bg-black text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
            <Navbar />
            {children}
            <Analytics />
          </div>
        </div>
      </body>
    </html>
  );
}
