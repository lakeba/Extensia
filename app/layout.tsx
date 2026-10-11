import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site, siteUrl } from "@/lib/site";
import "./globals.css";

const sans = Geist({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-sans", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], weight: ["500"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${site.name} · ${site.tagline}`, template: `%s · ${site.name}` },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: site.name, locale: "en_AU", title: site.name, description: site.description, url: "/" },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <Header />
        <main className="page">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
