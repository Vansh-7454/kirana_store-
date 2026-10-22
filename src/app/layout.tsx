import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteContent } from "@/data/siteContent";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#155239",
};

export const metadata: Metadata = {
  title: {
    default: `${siteContent.storeDetails.shortName} | Daily Groceries & Kitchen Staples`,
    template: `%s | ${siteContent.storeDetails.shortName}`,
  },
  description: siteContent.storeDetails.tagline,
  openGraph: {
    title: `${siteContent.storeDetails.shortName} | Neighborhood Kirana Store`,
    description: siteContent.storeDetails.tagline,
    type: "website",
    locale: "en_IN",
    siteName: siteContent.storeDetails.shortName,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
