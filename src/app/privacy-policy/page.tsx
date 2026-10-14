import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";
import { CurrentYear } from "@/components/CurrentYear";

export const metadata: Metadata = {
  title: "Privacy Policy | Weld Neck Flanges",
  description: "Privacy Policy for Weld Neck Flanges. Learn how we protect and manage your personal information.",
  openGraph: {
    title: "Privacy Policy | Weld Neck Flanges",
    description: "Privacy Policy for Weld Neck Flanges.",
    url: "https://weldneckflanges.com/privacy-policy",
    siteName: "Weld Neck Flanges",
    type: "website",
  },
  alternates: {
    canonical: "https://weldneckflanges.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            body > header.border-gray-200 { display: none !important; }
            * { box-sizing: border-box; }
          `,
        }}
      />

      <SiteNav />

      {/* Breadcrumb */}
      <div style={{ padding: "16px 40px", backgroundColor: "#f8f9fa", fontSize: "14px" }}>
        <a href="/" style={{ color: "#B45309", textDecoration: "none" }}>Home</a> / <span style={{ color: "#666" }}>Privacy Policy</span>
      </div>

      {/* Content */}
      <section style={{ padding: "60px 40px", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "36px", fontWeight: 700, marginBottom: "24px", color: "#1B1F23" }}>Privacy Policy</h1>

          <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#444", marginBottom: "20px" }}>
            At Weld Neck Flanges, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>

          <h2 style={{ fontSize: "22px", fontWeight: 600, marginBottom: "16px", color: "#1B1F23", marginTop: "30px" }}>Information We Collect</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#444", marginBottom: "20px" }}>
            We may collect information about you in a variety of ways. The information we may collect on the site includes:
          </p>
          <ul style={{ fontSize: "16px", lineHeight: 1.7, color: "#444", marginBottom: "20px", marginLeft: "20px" }}>
            <li>Personal identification information (name, email address, phone number, company)</li>
            <li>Technical data (IP address, browser type, operating system)</li>
            <li>Usage information (pages visited, time spent on site, links clicked)</li>
          </ul>

          <h2 style={{ fontSize: "22px", fontWeight: 600, marginBottom: "16px", color: "#1B1F23", marginTop: "30px" }}>How We Use Your Information</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#444", marginBottom: "20px" }}>
            We use the information we collect to:
          </p>
          <ul style={{ fontSize: "16px", lineHeight: 1.7, color: "#444", marginBottom: "20px", marginLeft: "20px" }}>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Improve our website and services</li>
            <li>Send you promotional communications (with your consent)</li>
            <li>Comply with applicable laws and regulations</li>
          </ul>

          <h2 style={{ fontSize: "22px", fontWeight: 600, marginBottom: "16px", color: "#1B1F23", marginTop: "30px" }}>Protection of Your Information</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#444", marginBottom: "20px" }}>
            We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 style={{ fontSize: "22px", fontWeight: 600, marginBottom: "16px", color: "#1B1F23", marginTop: "30px" }}>Contact Us</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#444", marginBottom: "20px" }}>
            If you have questions about this Privacy Policy, please contact us at:
          </p>
          <p style={{ fontSize: "16px", color: "#444", marginBottom: "10px" }}>
            Email: <a href="mailto:sales@texasflange.com" style={{ color: "#B45309", textDecoration: "none" }}>sales@texasflange.com</a>
          </p>
          <p style={{ fontSize: "16px", color: "#444" }}>
            Phone: <a href="tel:+1-281-484-8325" style={{ color: "#B45309", textDecoration: "none" }}>281-484-8325</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "40px", backgroundColor: "#111", color: "#ccc", textAlign: "center" }}>
        <p style={{ marginBottom: "8px" }}>
          <a href="https://texasflange.com/?ref=weldneckflanges" style={{ color: "#FDBA74", textDecoration: "none" }}>Texas Flange</a> {" | "}
          <a href="https://texasflange.com/contact-us/?ref=weldneckflanges" style={{ color: "#FDBA74", textDecoration: "none" }}>Request a Quote</a>
        </p>
        <p style={{ fontSize: "13px", color: "#888" }}>&copy; <CurrentYear /> Weld Neck Flanges. All rights reserved.</p>
      </footer>

      {/* Structured Data - Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://weldneckflanges.com" },
              { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://weldneckflanges.com/privacy-policy" },
            ],
          }),
        }}
      />
    </>
  );
}
