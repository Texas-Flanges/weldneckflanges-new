import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: "Weld Neck Flanges | Lightweight to API 6A 20K Pressure Service", template: "%s | Weld Neck Flanges" },
  description: "Engineered weld neck pipe flanges across the full pressure spectrum. Lightweight Class 125LW waterworks, ASME B16.5 and B16.47 process, API 6A and 6BX through 20000 PSI wellhead. Carbon through Hastelloy materials.",
  keywords: "weld neck flanges, ASME B16.5 weld neck, API 6A weld neck, lightweight flanges, Class 125LW, Hastelloy weld neck, large diameter weld neck, MSS SP-44 pipeline flange, AWWA C207, high yield weld neck",
  metadataBase: new URL("https://weldneckflanges.com"),
  alternates: { canonical: "./" },
  openGraph: { type: "website", siteName: "Weld Neck Flanges", title: "Weld Neck Flanges | Lightweight to API 6A 20K", description: "Weld neck pipe flanges across every pressure class and every material grade. Carbon through Hastelloy. Lightweight through 20000 PSI.", url: "https://weldneckflanges.com" },
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "Organization", name: "Weld Neck Flanges",
          url: "https://weldneckflanges.com", logo: "https://weldneckflanges.com/logo.png",
          description: "Engineered weld neck pipe flange supply across the full pressure spectrum from lightweight Class 125LW through API 6A 20000 PSI.",
          telephone: "+1-281-484-8325", email: "sales@texasflange.com",
          address: { "@type": "PostalAddress", postOfficeBoxNumber: "PO Box 2889", addressLocality: "Pearland", addressRegion: "TX", postalCode: "77588", addressCountry: "US" }
        })}} />
      </head>
      <body className="bg-cream text-ink font-body">
        <Header /><main>{children}</main><Footer />
      </body>
    </html>
  );
}
