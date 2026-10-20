import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { OG_IMAGE } from "@/lib/seo";

const DESCRIPTION = "How weld neck flanges work, where they're used and how to spec them, from Class 125LW lightweight through ASME B16.5, B16.47 and API 6A 20K, with links to the dimension tables.";

export const metadata: Metadata = {
  title: { default: "Weld Neck Flanges | Lightweight to API 6A 20K Pressure Service", template: "%s | Weld Neck Flanges" },
  description: DESCRIPTION,
  keywords: "weld neck flanges, ASME B16.5 weld neck, API 6A weld neck, lightweight flanges, Class 125LW, Hastelloy weld neck, large diameter weld neck, MSS SP-44 pipeline flange, AWWA C207, high yield weld neck",
  metadataBase: new URL("https://weldneckflanges.com"),
  alternates: { canonical: "./" },
  openGraph: { type: "website", siteName: "Weld Neck Flanges", title: "Weld Neck Flanges | Lightweight to API 6A 20K", description: DESCRIPTION, url: "./", images: [OG_IMAGE] },
  twitter: { card: "summary_large_image", images: [OG_IMAGE] },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#1B1F23" />
      </head>
      <body className="bg-cream text-ink font-body">
        <GoogleAnalytics />
        <Header /><main>{children}</main><Footer />
      </body>
    </html>
  );
}
