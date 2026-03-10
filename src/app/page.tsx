import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weld Neck Flanges | Steel Flanges by Texas Flange",
  description: "Manufacturing and supplying a complete line of weld neck flanges and steel pipe flanges. Carbon Steel, Stainless, Alloy Flanges per ASME, ANSI, AWWA, API. Since 1986.",
  keywords: ["weld neck flanges", "steel flanges", "pipe flanges", "flange supplier", "ASME flanges", "ANSI flanges", "Texas Flange", "carbon steel flanges", "stainless steel flanges"],
  openGraph: {
    title: "Weld Neck Flanges | Steel Flanges by Texas Flange",
    description: "Manufacturing and supplying a complete line of weld neck flanges and steel pipe flanges in carbon steel, stainless steel, and alloys.",
    url: "https://weldneckflanges.com",
    siteName: "Weld Neck Flanges",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Weld Neck Flanges | Steel Flanges by Texas Flange",
    description: "Manufacturing and supplying a complete line of weld neck flanges and steel pipe flanges.",
  },
  alternates: {
    canonical: "https://weldneckflanges.com",
  },
};

export default function Home() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            body > header.border-gray-200 { display: none !important; }
            .rv { opacity: 1; transform: none; }
            * { box-sizing: border-box; }
            html { scroll-behavior: smooth; }
          `,
        }}
      />

      {/* Navigation */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 40px", backgroundColor: "#1a3a5c", color: "#fff", position: "sticky", top: 0, zIndex: 50 }}>
        <a href="/" style={{ fontSize: "20px", fontWeight: 700, color: "#fff", textDecoration: "none" }}>Steel Flanges</a>
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <a href="/" style={{ color: "#fff", textDecoration: "none" }}>Home</a>
          <a href="#products" style={{ color: "#fff", textDecoration: "none" }}>Products</a>
          <a href="#materials" style={{ color: "#fff", textDecoration: "none" }}>Materials</a>
          <a href="https://texasflange.com/contact-us" style={{ backgroundColor: "#2563eb", color: "#fff", padding: "10px 24px", borderRadius: "6px", textDecoration: "none", fontWeight: 500 }}>Request a Quote</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="rv"
        style={{
          backgroundImage: "linear-gradient(rgba(26,58,92,0.65), rgba(26,58,92,0.65)), url(/TF-HEADER.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "100px 40px",
          color: "#fff",
          minHeight: "480px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ maxWidth: "800px" }}>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 700, marginBottom: "12px", lineHeight: 1.1 }}>
            Weld Neck Flanges
          </h1>
          <p style={{ fontSize: "17px", opacity: 0.9, marginBottom: "24px" }}>
            Carbon Steel / Stainless / Alloy Flanges per ASME / ANSI / AWWA / API
          </p>
          <p style={{ fontSize: "clamp(18px, 2.5vw, 24px)", marginBottom: "36px", lineHeight: 1.6 }}>
            Manufacturing and Supplying a complete line of Pipe Flanges with Multiple materials available.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="https://texasflange.com/contact-us" style={{ backgroundColor: "#2563eb", color: "#fff", padding: "14px 36px", borderRadius: "6px", textDecoration: "none", fontWeight: 600, fontSize: "16px" }}>Get Started</a>
            <a href="https://www.texasflange.com" style={{ color: "#fff", padding: "14px 36px", textDecoration: "none", fontWeight: 500, fontSize: "16px", border: "2px solid rgba(255,255,255,0.5)", borderRadius: "6px" }}>Visit Texas Flange</a>
          </div>
        </div>
      </section>

      {/* Since 1986 Banner */}
      <section className="rv" style={{ background: "linear-gradient(135deg, #111 0%, #1a1a2e 100%)", padding: "12px 40px", textAlign: "center" }}>
        <p style={{ color: "#fff", fontSize: "18px", fontWeight: 600, letterSpacing: "3px", margin: 0 }}>SINCE 1986</p>
      </section>

      {/* About Section */}
      <section className="rv" style={{ padding: "80px 40px", backgroundColor: "#f5f5f5" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", gap: "40px", flexWrap: "wrap", alignItems: "flex-start" }}>
          <div style={{ flex: "1 1 500px" }}>
            <h2 style={{ fontSize: "36px", fontWeight: 700, color: "#2563eb", marginBottom: "24px" }}>Since 1986</h2>
            <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#444" }}>
              We provide ASME and Non code Industrial pipe flanges for the Petrochemical, Process, and Waterworks industries in Stainless Steel Industrial Flanges, Alloy Steel Industrial Flanges and Carbon Steel Industrial Flanges. ANSI, API, AWWA pipe flanges in carbon steel, stainless steel, alloys and chrome steel. Our steel flanges can be Weld Neck, Slip on, Blind, Threaded, Socket Weld, Lap Joint, Orifice Flanges, Ring, and custom steel flanges in sizes 1/2&quot; to 203&quot;. Pressure classes: 75, 125, 150, 175, 250, 300, 350, 400, 600, 900, 1500, 2500, 5K, 10K, 15K, 20K. High Yield, Low Temp.
            </p>
          </div>
          <div style={{ flex: "0 0 320px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/STEEL-picture.jpg" alt="Steel flanges manufacturing" style={{ width: "100%", borderRadius: "12px", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }} />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="rv" style={{ padding: "80px 40px", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 700, color: "#1a3a5c", marginBottom: "16px" }}>WHY US?</h2>
          <p style={{ fontSize: "20px", color: "#2563eb", fontWeight: 600, marginBottom: "32px" }}>1/2&quot; &ndash; 202&quot; INDUSTRIAL FLANGES</p>
          <h3 style={{ fontSize: "22px", fontWeight: 600, color: "#333", marginBottom: "20px" }}>We provide:</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
            {[
              "ANSI / ASME FORGED FLANGES",
              "MSS-SP-44 FLANGES / ANSI B 16.47 SERIES A",
              "API TYPE 6A \u2013 RTJ Face Flanges",
              "API-605 FLANGES / ANSI B 16.47 SERIES B",
              "A.G.A. ORIFICE UNIONS \u2013 With or without Hardware",
              "ASME BOILER CODE FLANGES",
              "CL. 125 LIGHTWEIGHT FLANGES \u2013 Low pressure",
              "PLATE FLANGES \u2013 1/4\u2033 thru 8\u2033 Thick, AWWA C-207",
              "ANSI LONG WELDNECKS & SPECIAL BODY CONNECTORS",
              "STUDDING OUTLETS (pad flanges)",
              "SPECTACLE BLINDS \u2013 Line blinds, paddle spacers",
              "DIN FLANGES / JIS FLANGES / Special Ring Flanges",
            ].map((item, i) => (
              <div key={i} style={{ padding: "16px 20px", backgroundColor: "#f8f9fa", borderRadius: "8px", borderLeft: "4px solid #2563eb" }}>
                <p style={{ margin: 0, fontSize: "15px", color: "#333", fontWeight: 500 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section id="materials" className="rv" style={{ padding: "80px 40px", backgroundColor: "#1a3a5c", color: "#fff" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 700, marginBottom: "32px" }}>Materials Used</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            <div>
              <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#93c5fd", marginBottom: "8px" }}>CARBON STEEL</h3>
              <p style={{ lineHeight: 1.7, opacity: 0.9 }}>ASTM/ASME SA-105, A-350 LF-2, LF-3, A694, SA-516-70, A36</p>
            </div>
            <div>
              <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#93c5fd", marginBottom: "8px" }}>CHROME ALLOYS</h3>
              <p style={{ lineHeight: 1.7, opacity: 0.9 }}>A-182-F-1, F-5, F-6, F-9, F-91, F-11, F-12, F-22</p>
            </div>
            <div>
              <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#93c5fd", marginBottom: "8px" }}>STAINLESS STEEL</h3>
              <p style={{ lineHeight: 1.7, opacity: 0.9 }}>A-182: F-304, 304/304L, 316/316L, 304H, 316H, 309, 310, 317L, 321, 347, 347H, 904L, Alloy 20, and other H grades</p>
            </div>
            <div>
              <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#93c5fd", marginBottom: "8px" }}>SPECIALTY ALLOYS</h3>
              <p style={{ lineHeight: 1.7, opacity: 0.9 }}>Hastelloy B-2, C-276, G, X, C-22 | Inconel 600, 601, 625, 718 | Incoloy 800, 825, 800H, 800HT | Monel 400</p>
            </div>
            <div>
              <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#93c5fd", marginBottom: "8px" }}>ALUMINUM</h3>
              <p style={{ lineHeight: 1.7, opacity: 0.9 }}>3003, 6061, 5083 and other grades upon request</p>
            </div>
            <div>
              <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#93c5fd", marginBottom: "8px" }}>OTHER MATERIALS</h3>
              <p style={{ lineHeight: 1.7, opacity: 0.9 }}>Copper 90/10, 70/30 | Duplex F51/2205, F53/2507 | Titanium Gr2, Gr12</p>
            </div>
          </div>
          <p style={{ marginTop: "32px", lineHeight: 1.7, opacity: 0.9 }}>
            We also offer a full line of Stainless and Alloy Plate Flame Cutting and Galvanized Carbon Steel Flanges. There are some grades of steel that no flange producers stock but on occasion are required. We source them and make them per your requirements.
          </p>
        </div>
      </section>



      {/* CTA Section */}
      <section className="rv" style={{ padding: "80px 40px", backgroundColor: "#2563eb", textAlign: "center", color: "#fff" }}>
        <h2 style={{ fontSize: "36px", fontWeight: 700, marginBottom: "16px" }}>Ready to Source Your Flanges?</h2>
        <p style={{ fontSize: "18px", marginBottom: "12px", opacity: 0.9 }}>We want your industrial flange inquiry and will give you your quote quickly!</p>
        <p style={{ fontSize: "17px", marginBottom: "30px", opacity: 0.9 }}>
          Phone: <a href="tel:281-484-8325" style={{ color: "#fff", textDecoration: "underline" }}>281-484-8325</a>
        </p>
        <a href="https://texasflange.com/contact-us" style={{ backgroundColor: "#fff", color: "#2563eb", padding: "14px 40px", borderRadius: "30px", textDecoration: "none", fontWeight: 600, fontSize: "16px", display: "inline-block" }}>Request a Quote</a>
      </section>

      {/* Footer */}
      <footer style={{ padding: "40px", backgroundColor: "#111", color: "#ccc", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#fff", marginBottom: "16px" }}>Steel Flanges</h3>
          <p style={{ marginBottom: "8px" }}>Have questions? Contact us.</p>
          <p style={{ marginBottom: "8px" }}>
            Phone: <a href="tel:281-484-8325" style={{ color: "#93c5fd", textDecoration: "none" }}>281-484-8325</a>
          </p>
          <p style={{ marginBottom: "8px" }}>
            Email: <a href="mailto:sales@texasflange.com" style={{ color: "#93c5fd", textDecoration: "none" }}>sales@texasflange.com</a>
          </p>
          <p style={{ marginBottom: "16px" }}>
            <a href="https://texasflange.com" style={{ color: "#93c5fd", textDecoration: "none" }}>More Information</a> {" | "}
            <a href="https://texasflange.com/contact-us" style={{ color: "#93c5fd", textDecoration: "none" }}>Request a Quote</a>
          </p>
          <p style={{ fontSize: "13px", color: "#888", marginTop: "20px" }}>&copy; 2026 Weld Neck Flanges. All rights reserved.</p>
        </div>
      </footer>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Steel Flanges",
            url: "https://weldneckflanges.com",
            telephone: "+1-281-484-8325",
            email: "sales@texasflange.com",
            description: "Manufacturing and supplying a complete line of steel pipe flanges in carbon steel, stainless steel, and alloys per ASME, ANSI, AWWA, API standards.",
            parentOrganization: {
              "@type": "Organization",
              name: "Texas Flange",
              url: "https://texasflange.com",
            },
          }),
        }}
      />
    </>
  );
}
