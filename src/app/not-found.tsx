import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";

export const metadata: Metadata = {
  description: "Page not found | Weld Neck Flanges",
};

export default function NotFound() {
  return (
    <>
      <SiteNav />
      <section style={{ padding: "80px 16px", textAlign: "center" }}>
        <h1 style={{ fontSize: "32px", fontWeight: 700, color: "#1a3a5c", marginBottom: "12px" }}>Page not found</h1>
        <p style={{ fontSize: "17px", color: "#444", marginBottom: "24px" }}>That page doesn&apos;t exist.</p>
        <a href="/">Back to the homepage</a>
      </section>
    </>
  );
}
