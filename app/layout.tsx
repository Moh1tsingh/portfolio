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
  title:
    "Mohitsingh Thakur - Full Stack Developer | Backend | System Architect",
  description:
    "Full Stack Developer specializing in backend development, system architecture, and cloud infrastructure. Expert in Node.js, PostgreSQL, AWS, and building scalable web applications.",
  keywords: [
    "Mohitsingh Thakur",
    "Mohit Singh",
    "Mohit Singh Thakur",
    "Mohit Thakur",
    "Full Stack Developer",
    "Backend Developer",
    "System Architect",
    "Node.js Developer",
    "PostgreSQL Developer",
    "AWS Developer",
    "JavaScript Developer",
    "React Developer",
    "Next.js Developer",
    "Cloud Infrastructure",
    "API Development",
    "Database Design",
    "DevOps Engineer",
    "Software Engineer",
    "Web Developer",
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
    siteName: "Mohitsingh Thakur Portfolio",
    title: "Mohitsingh Thakur - Full Stack Developer",
    description:
      "Full Stack Developer specializing in backend development, system architecture, and cloud infrastructure. Expert in Node.js, PostgreSQL, AWS, and building scalable web applications.",
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
    title: "Mohitsingh Thakur - Full Stack Developer",
    description:
      "Full Stack Developer specializing in backend development, system architecture, and cloud infrastructure.",
    images: ["/og-image.jpg"],
    creator: "@is_mohitsingh",
    site: "@is_mohitsingh",
  },
  alternates: {
    canonical: "https://moh1t.com",
  },
  category: "technology",
  classification: "Portfolio",
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
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />
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
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.variable} ${jetbrains.variable} antialiased`}>
        <div className="min-h-screen w-full bg-black text-white">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <Navbar />
            {children}
            <Analytics />
          </div>
        </div>
      </body>
    </html>
  );
}
