import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Weld Neck Flanges",
  description: "Industrial Pipe Flanges",
  metadataBase: new URL("https://weldneckflanges.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://weldneckflanges.com",
    siteName: "Weld Neck Flanges",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
