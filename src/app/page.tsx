import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";
import { CurrentYear } from "@/components/CurrentYear";

export const metadata: Metadata = {
  title: "Weld Neck Flanges | ASME B16.5 and B16.47 Reference",
  description: "How weld neck flanges work, where they're used and how to spec them, with links to ASME B16.5 and B16.47 dimension tables.",
  keywords: ["weld neck flanges", "steel flanges", "pipe flanges", "ASME flanges", "ANSI flanges", "carbon steel flanges", "stainless steel flanges"],
  openGraph: {
    title: "Weld Neck Flanges | ASME B16.5 and B16.47 Reference",
    description: "How weld neck flanges work, where they're used and how to spec them, with links to ASME B16.5 and B16.47 dimension tables.",
    url: "https://weldneckflanges.com",
    siteName: "Weld Neck Flanges",
    type: "website",
    images: ["https://weldneckflanges.com/hero-weld-neck.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Weld Neck Flanges | ASME B16.5 and B16.47 Reference",
    description: "How weld neck flanges work, where they're used and how to spec them, with links to ASME B16.5 and B16.47 dimension tables.",
    images: ["https://weldneckflanges.com/hero-weld-neck.jpg"],
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

      <SiteNav />

      {/* Hero Section */}
      <section className="hero-split">
        <div className="hero-split-panel">
          <p className="hero-eyebrow">ASME B16.5 · B16.47 Reference</p>
          <h1>Weld Neck Flanges</h1>
          <p className="hero-lede">How tapered-hub, butt-weld flanges work, where they&apos;re used, and how to spec them.</p>
          <div className="hero-actions">
            <a href="https://texasflange.com/contact-us/?ref=weldneckflanges" className="hero-cta">Request a Quote</a>
            <a href="https://texasflange.com/products/flange-dims-weights/ansi-b16-5-forged-flanges/?ref=weldneckflanges" className="hero-link">Dimension tables ↗</a>
          </div>
        </div>
        <div className="hero-split-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hero-weld-neck.jpg" alt="Weld neck flange bolted to a mating flange" />
        </div>
      </section>

      {/* Fact strip */}
      <section className="fact-strip">
        <div className="fact-strip-inner">
          <div>
            <p className="fact-label">ASME B16.5</p>
            <p className="fact-sub">NPS 1/2 to 24</p>
          </div>
          <div>
            <p className="fact-label">ASME B16.47</p>
            <p className="fact-sub">NPS 26 to 60</p>
          </div>
          <div>
            <p className="fact-label">Materials</p>
            <p className="fact-sub">Carbon, stainless, alloy</p>
          </div>
        </div>
      </section>

      {/* The type: weld neck flanges (SEO-AI-011) */}
      <section className="rv" style={{ padding: "80px 40px", backgroundColor: "#f5f5f5" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 700, color: "#1a3a5c", marginBottom: "20px" }}>How a Weld Neck Flange Works</h2>
          <p style={{ fontSize: "17px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
            A weld neck flange has a tapered hub and a weld bevel. It butt-welds to matching pipe.
            ASME B16.5 covers NPS 1/2 to 24. ASME B16.47 covers the large weld necks, NPS 26 to
            60. Weld necks are used in oil and gas and other industrial service, in carbon, stainless
            and alloy.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
            This is the type, not the dimension table. If you need OD, bolt circle, hub length, or
            bore, use the class tables on texasflange.com.
          </p>

          <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#1a3a5c", margin: "32px 0 12px" }}>The joint</h3>
          <p style={{ fontSize: "17px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
            Pipe and hub get matching bevels. The shop puts a full-penetration circumferential
            butt weld around that V. After weld and inspection, the bore is a smooth transition.
            Flow does not hit a step the way it can on a slip-on fillet. The tapered hub spreads
            load from the flange ring into the pipe wall. That is why higher class, higher
            temperature, and cyclic service default to weld neck.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
            Bore is a schedule callout. A weld neck bored to the pipe ID, not to NPS, is the usual
            order. Specify the schedule or the ID. Standard-bore columns on the tables are not
            every wall.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
            Facing follows the spec: RF on most process work, RTJ when the class and the mate
            demand a ring groove. RTJ weld necks with a metal ring gasket are common on
            higher-pressure oil and gas. Match the face. Do not mix RF and RTJ.
          </p>

          <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#1a3a5c", margin: "32px 0 12px" }}>Long weld neck (nozzle)</h3>
          <p style={{ fontSize: "17px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
            A long weld neck is a different part. ASME B16.5 subsection 2.8 calls it a straight
            hub welding flange and does not tabulate it the way a standard weld neck is tabulated.
            Tank and vessel shops use it as a one-piece nozzle: flange plus barrel, no pipe weld
            at the shell. Square-cut end is typical, not a weld bevel. Bore is often the nominal
            size, not a pipe schedule, unless the print says otherwise. Length is on the drawing.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
            Long-weld-neck tables are published by class, including Class 150 and Class 600
            standard connections. Heavy barrel and equal barrel are separate geometries. Send the
            length, barrel OD, and grade. Do not treat a long weld neck as a standard weld neck
            with extra hub. The weld prep and the bore rules are different. Nozzle connections are
            machined with varying wall thickness when the vessel outlet needs more metal. Carbon,
            stainless, and nickel alloys are all in play on a nozzle RFQ.
          </p>

          <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#1a3a5c", margin: "32px 0 12px" }}>Numbers live on the tables</h3>
          <p style={{ fontSize: "17px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
            OD and bolt counts are not reprinted here.{" "}
            <a style={{ color: "#B45309", textDecoration: "underline" }} href="https://texasflange.com/weld-neck-flanges/?ref=weldneckflanges">Weld neck type page</a>
            {" · "}
            <a style={{ color: "#B45309", textDecoration: "underline" }} href="https://texasflange.com/products/flange-dims-weights/ansi-b16-5-forged-flanges/?ref=weldneckflanges">B16.5 hub tables</a>
            {" · "}
            <a style={{ color: "#B45309", textDecoration: "underline" }} href="https://texasflange.com/products/flange-dims-weights/ansi-b16-5-forged-flanges/class-150/?ref=weldneckflanges">Class 150</a>
            {" · "}
            <a style={{ color: "#B45309", textDecoration: "underline" }} href="https://texasflange.com/products/flange-dims-weights/long-weld-neck-standard-connection-flanges/class-150-lwn/?ref=weldneckflanges">LWN Class 150</a>
            {" · "}
            <a style={{ color: "#B45309", textDecoration: "underline" }} href="https://texasflange.com/products/flange-dims-weights/long-weld-neck-standard-connection-flanges/class-600-lwn/?ref=weldneckflanges">LWN Class 600</a>
          </p>
        </div>
      </section>

      {/* Why Are Weld Necks The Ideal Flange? */}
      <section className="rv" style={{ padding: "80px 40px", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 700, color: "#1a3a5c", marginBottom: "24px" }}>Why Are Weld Necks The Ideal Flange?</h2>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
            Weld neck flanges are the go-to choice for most piping applications - and for good reason. They feature a neck extension with a weld bevel at the end, which lets them connect directly to pipe in a way that feels almost seamless. In larger sizes and higher pressure classes, you'll rarely see anything else used. If there were only one bored flange style to choose from, the weld neck would probably win every time (yes, you still need a blind flange to cap the line off).
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
            Here's how the connection works: the weld bevel meets a matching bevel on the pipe end in a V-shaped joint, allowing for a clean, circular weld all the way around. The result is a smooth, unified transition that lets gas or liquid flow through with very little restriction. After welding, the joint gets inspected to make sure the seal is solid and free of any defects.
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div style={{ textAlign: "center", margin: "32px 0" }}>
            <img src="/weld-neck-drawing.jpg" alt="Weld neck flange technical drawing with dimensions" style={{ maxWidth: "420px", width: "100%", border: "2px solid #1a3a5c", borderRadius: "8px", padding: "12px", backgroundColor: "#fff" }} />
          </div>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
            Another thing that sets weld neck flanges apart is the standardized, tapered hub. Rather than an abrupt change between pipe and flange, the hub creates a gradual shift that spreads out pressure forces more evenly at a nice angle, like the slope of a mountain. This makes a real difference in high-pressure, high-temperature environments where stress and shock are constant concerns - the extra material along that transition helps absorb it all.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#444" }}>
            Because weld necks are the standard for high-pressure applications, they're often paired with a ring type joint (RTJ) face. This sealing surface uses a metal gasket that gets compressed between the grooves of two connecting flanges, forming an exceptionally tight seal. Combined with the strength of the weld bevel connection, an RTJ weld neck with a metal gasket is the top pick whenever the stakes are high, and are even required in some specifications such as for API 6A flanges.
          </p>
          <div style={{ marginTop: "32px" }}>
            <a href="https://texasflange.com/weld-neck-flanges/?ref=weldneckflanges" style={{ display: "inline-block", backgroundColor: "#1a3a5c", color: "#fff", padding: "14px 32px", borderRadius: "6px", textDecoration: "none", fontWeight: 600, fontSize: "16px" }}>
              View Weld Neck Flanges at Texas Flange →
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="rv" style={{ padding: "80px 40px", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 700, color: "#1a3a5c", marginBottom: "16px" }}>WHY US?</h2>
          <p style={{ fontSize: "20px", color: "#B45309", fontWeight: 600, marginBottom: "32px" }}>1/2&quot; &ndash; 203&quot; INDUSTRIAL FLANGES</p>
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
              <div key={i} style={{ padding: "16px 20px", backgroundColor: "#f8f9fa", borderRadius: "8px", borderLeft: "4px solid #B45309" }}>
                <p style={{ margin: 0, fontSize: "15px", color: "#333", fontWeight: 500 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section id="materials" className="rv" style={{ padding: "80px 40px", backgroundColor: "#1a3a5c", color: "#fff" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 700, color: "#fff", marginBottom: "32px" }}>Materials Used</h2>
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
        </div>
      </section>



      {/* CTA Section */}
      <section className="rv" style={{ padding: "80px 40px", backgroundColor: "#B45309", textAlign: "center", color: "#fff" }}>
        <h2 style={{ fontSize: "36px", fontWeight: 700, color: "#fff", marginBottom: "16px" }}>Request a Quote on Weld Neck Flanges</h2>
        <p style={{ fontSize: "18px", marginBottom: "12px", opacity: 0.9 }}>Send the size, pressure class, facing, bore or schedule, and material grade.</p>
        <p style={{ fontSize: "17px", marginBottom: "30px", opacity: 0.9 }}>
          Phone: <a href="tel:+1-281-484-8325" style={{ color: "#fff", textDecoration: "underline" }}>281-484-8325</a>
        </p>
        <a href="https://texasflange.com/contact-us/?ref=weldneckflanges" style={{ backgroundColor: "#fff", color: "#B45309", padding: "14px 40px", borderRadius: "30px", textDecoration: "none", fontWeight: 600, fontSize: "16px", display: "inline-block" }}>Request a Quote</a>
      </section>

      {/* Footer */}
      <footer style={{ padding: "40px", backgroundColor: "#111", color: "#ccc", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#fff", marginBottom: "16px" }}>Weld Neck Flanges</h3>
          <p style={{ marginBottom: "8px" }}>Have questions? Contact us.</p>
          <p style={{ marginBottom: "8px" }}>
            Phone: <a href="tel:+1-281-484-8325" style={{ color: "#93c5fd", textDecoration: "none" }}>281-484-8325</a>
          </p>
          <p style={{ marginBottom: "8px" }}>
            Email: <a href="mailto:sales@texasflange.com" style={{ color: "#93c5fd", textDecoration: "none" }}>sales@texasflange.com</a>
          </p>
          <p style={{ marginBottom: "16px" }}>
            <a href="https://texasflange.com/?ref=weldneckflanges" style={{ color: "#93c5fd", textDecoration: "none" }}>More Information</a> {" | "}
            <a href="https://texasflange.com/contact-us/?ref=weldneckflanges" style={{ color: "#93c5fd", textDecoration: "none" }}>Request a Quote</a>
          </p>
          <p style={{ fontSize: "13px", color: "#888", marginTop: "20px" }}>&copy; <CurrentYear /> Weld Neck Flanges. All rights reserved.</p>
        </div>
      </footer>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Weld Neck Flanges",
            url: "https://weldneckflanges.com",
            telephone: "+1-281-484-8325",
            email: "sales@texasflange.com",
            description: "How weld neck flanges work, where they're used and how to spec them, with links to ASME B16.5 and B16.47 dimension tables.",
          }),
        }}
      />
    </>
  );
}
