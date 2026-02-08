import React from "react";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import "./globals.css";
import Head from "next/head";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manuvance Talent Solutions - Staffing & Recruitment Agency",
  description:
    "Premier recruitment and staffing solutions connecting top talent with leading companies.",
  icons: {
    icon: [
      {
        url: "/favicon-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logo.jpeg",
        type: "image/jpeg",
      },
    ],
    apple: "/apple-icon.png",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      name: [
        "About",
        "Contact",
        "Services",
        "Employer Services",
        "Job Seekers",
        "Hiring Models",
      ],
      url: [
        "https://manuvancetalent.in/about",
        "https://manuvancetalent.in/contact",
        "https://manuvancetalent.in/services",
        "https://manuvancetalent.in/services/employers",
        "https://manuvancetalent.in/services/job-seekers",
        "https://manuvancetalent.in/services/hiring-model",
      ],
    }),
  },
};
export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              name: [
                "About",
                "Contact",
                "Services",
                "Employer Services",
                "Job Seekers",
                "Hiring Models",
              ],
              url: [
                "https://manuvancetalent.in/about",
                "https://manuvancetalent.in/contact",
                "https://manuvancetalent.in/services",
                "https://manuvancetalent.in/services/employers",
                "https://manuvancetalent.in/services/job-seekers",
                "https://manuvancetalent.in/services/hiring-model",
              ],
            }),
          }}
        />
      </Head>
      <body className={`font-sans antialiased`}>
        <Navigation />
        <main className="pt-16">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
