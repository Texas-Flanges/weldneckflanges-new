import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Texas Flange",
  description: "Industrial Pipe Flanges",
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
