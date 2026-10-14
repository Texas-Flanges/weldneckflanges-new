import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Weld Neck Flanges",
  description: "Industrial Pipe Flanges",
  metadataBase: new URL("https://weldneckflanges.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://weldneckflanges.com",
    siteName: "Weld Neck Flanges",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />{children}</body>
    </html>
  );
}
