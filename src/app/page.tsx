import Link from "next/link";
import type { Metadata } from "next";
import CtaBand, { QUOTE_URL } from "@/components/CtaBand";
import { OG_IMAGE } from "@/lib/seo";

const TITLE = "Weld Neck Flanges | Lightweight to API 6A 20K Pressure Service";
const DESCRIPTION = "How weld neck flanges work, where they're used and how to spec them, from Class 125LW lightweight through ASME B16.5, B16.47 and API 6A 20K, with links to the dimension tables.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, url: "./", siteName: "Weld Neck Flanges", type: "website", images: [OG_IMAGE] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [OG_IMAGE] }
};

const TF = "https://texasflange.com";
const REF = "?ref=weldneckflanges";

const faqs = [
  { q: "What is a weld neck flange?",
    a: "A weld neck flange has a tapered hub and a weld bevel. It butt-welds to matching pipe. ASME B16.5 covers NPS 1/2 to 24. ASME B16.47 covers the large weld necks, NPS 26 to 60." },
  { q: "How is a weld neck flange joined to the pipe?",
    a: "Pipe and hub get matching bevels. The shop puts a full-penetration circumferential butt weld around that V. After weld and inspection, the bore is a smooth transition. Flow does not hit a step the way it can on a slip-on fillet." },
  { q: "Why are weld necks used in high-pressure and high-temperature service?",
    a: "The tapered hub spreads load from the flange ring into the pipe wall. That is why higher class, higher temperature, and cyclic service default to weld neck. In larger sizes and higher pressure classes, you'll rarely see anything else used." },
  { q: "Should a weld neck flange have an RF or RTJ face?",
    a: "Facing follows the spec: RF on most process work, RTJ when the class and the mate demand a ring groove. RTJ weld necks with a metal ring gasket are common on higher-pressure oil and gas. Match the face. Do not mix RF and RTJ." },
  { q: "What is a long weld neck flange?",
    a: "A long weld neck is a different part. Tank and vessel shops use it as a one-piece nozzle: flange plus barrel, no pipe weld at the shell. Square-cut end is typical, not a weld bevel. Do not treat a long weld neck as a standard weld neck with extra hub. The weld prep and the bore rules are different." },
  { q: "What pressure range can a weld neck flange cover?",
    a: "The weld neck construction itself scales further than any other flange type. At the low end, Class 125LW lightweight weld necks per AWWA C207 handle waterworks service down to 150 to 175 psi working pressure. ASME B16.5 covers Class 150 through Class 2500 in standard catalog sizes, which spans 285 psi through 6170 psi at room temperature for A105 carbon. Above that, API 6A and 6BX weld necks reach 20000 PSI and beyond. One construction type, the full pressure spectrum." },
  { q: "Why pair RTJ facing with a weld neck flange?",
    a: "The metal-to-metal seal of a ring-type joint flange depends on bolt-up force and material stiffness to compress the gasket into the groove. The weld neck hub geometry distributes that bolt-up force evenly into the pipe wall without overstressing the joint, which is why RTJ + weld neck is the default at API 6A 3M class and above. The combination is also required by some refinery and petrochemical specifications for high-temperature steam and cyclic service." },
  { q: "What is Class 125LW and how does it differ from cast iron Class 125?",
    a: "Class 125LW is a lightweight steel flange that shares the bolt circle, bolt count, and outside diameter of ANSI B16.1 Class 125 cast iron. The hub is shorter and the ring section is thinner, which reduces weight without compromising bolted joint integrity for the moderate pressures (typically 150 to 175 psi) of waterworks and HVAC service. The advantage over cast iron is ductility: steel does not crack from impact or bolt-up overtorque the way cast iron does." },
  { q: "When does Hastelloy weld neck make sense over stainless?",
    a: "Hastelloy C-276 is to nickel alloys what A105 is to carbon. It resists wet chlorine, hot mineral acids, ferric and cupric chlorides, formic and acetic acids, sea water, and hypochlorite. Stainless F316L tolerates dilute chloride at room temperature but pits and stress corrosion cracks in concentrated chloride above 140 degrees F. Once the service crosses into hot wet chloride or mixed-acid chemistry, C-276 weld necks are the qualified product." },
  { q: "Are weld neck flanges available with NACE MR0175 compliance?",
    a: "Yes. NACE sour service flanges in A105, A350 LF2, A694, F22, F91, and F316L are available with the supplementary hardness testing and chemistry restrictions the standard requires. The MTR shows the hardness data, the heat treatment record, and the NACE annex applicable to the order." },
  { q: "How large can a weld neck flange be?",
    a: "ASME B16.5 caps at 24 inch nominal. ASME B16.47 Series A and B cover 26 inch through 60 inch. Above 60 inch, weld neck construction continues as custom-fabricated hubbed plate flanges, with the hub rolled or cast separately and welded to the plate-cut flange face under full penetration weld with 100 percent NDE." }
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Weld Neck Flanges",
  url: "https://weldneckflanges.com",
  telephone: "+1-281-484-8325",
  email: "sales@texasflange.com",
  description: "How weld neck flanges work, where they're used and how to spec them, with links to ASME B16.5 and B16.47 dimension tables."
};

const industries = [
  ["/oil-gas-industry-flanges/", "Oil & Gas"], ["/petrochemical-flanges/", "Petrochemical"], ["/power-plant-industries-flanges/", "Power Generation"],
  ["/waterworks-flanges/", "Water & Wastewater"], ["/petrochemical-flanges/", "Chemical Processing"], ["/flange-types-basics/", "Mining & Minerals"],
  ["/flange-types-basics/", "Pulp & Paper"], ["/food-beverage-industries-flanges/", "Food & Beverage"], ["/flange-types-basics/", "Agriculture"],
  ["/blog/flanges-in-commercial-hvac-what-goes-where-in-the-mechanical-room/", "HVAC & Mechanical"], ["/flange-types-basics/", "Marine & Shipbuilding"], ["/blog/flanges-for-data-center-cooling/", "Data Centers"]
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero (SEO-AI-090) */}
      <section className="hero-split">
        <div className="hero-split-panel">
          <div className="hero-split-inner">
            <p className="hero-eyebrow">ASME B16.5 · B16.47 Reference</p>
            <h1>Weld Neck Flanges</h1>
            <p className="hero-lede">How tapered-hub, butt-weld flanges work, where they&apos;re used, and how to spec them.</p>
            <div className="hero-actions">
              <a href={QUOTE_URL} className="hero-cta">Request a Quote</a>
              <a href={`${TF}/products/flange-dims-weights/ansi-b16-5-forged-flanges/${REF}`} className="hero-link">
                Dimension tables
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 10L10 4M5 4h5v5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="hero-split-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hero-weld-neck.jpg" alt="Weld neck flange bolted to a mating flange" />
        </div>
      </section>

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
      <section className="bg-cream py-20 px-4">
        <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1B1F23] mb-6">How a Weld Neck Flange Works</h2>
          <p className="mb-4">
            A weld neck flange has a tapered hub and a weld bevel. It butt-welds to matching pipe.
            ASME B16.5 covers NPS 1/2 to 24. ASME B16.47 covers the large weld necks, NPS 26 to
            60. Weld necks are used in oil and gas and other industrial service, in carbon, stainless
            and alloy.
          </p>
          <p className="mb-4">
            This is the type, not the dimension table. If you need OD, bolt circle, hub length, or
            bore, use the class tables on texasflange.com.
          </p>

          <h3 className="font-display text-2xl font-bold text-[#1B1F23] mt-10 mb-3">The joint</h3>
          <p className="mb-4">
            Pipe and hub get matching bevels. The shop puts a full-penetration circumferential
            butt weld around that V. After weld and inspection, the bore is a smooth transition.
            Flow does not hit a step the way it can on a slip-on fillet. The tapered hub spreads
            load from the flange ring into the pipe wall. That is why higher class, higher
            temperature, and cyclic service default to weld neck.
          </p>
          <p className="mb-4">
            Bore is a schedule callout. A weld neck bored to the pipe ID, not to NPS, is the usual
            order. Specify the schedule or the ID. Standard-bore columns on the tables are not
            every wall.
          </p>
          <p className="mb-4">
            Facing follows the spec: RF on most process work, RTJ when the class and the mate
            demand a ring groove. RTJ weld necks with a metal ring gasket are common on
            higher-pressure oil and gas. Match the face. Do not mix RF and RTJ.
          </p>

          <h3 className="font-display text-2xl font-bold text-[#1B1F23] mt-10 mb-3">Long weld neck (nozzle)</h3>
          <p className="mb-4">
            A long weld neck is a different part. ASME B16.5 subsection 2.8 calls it a straight
            hub welding flange and does not tabulate it the way a standard weld neck is tabulated.
            Tank and vessel shops use it as a one-piece nozzle: flange plus barrel, no pipe weld
            at the shell. Square-cut end is typical, not a weld bevel. Bore is often the nominal
            size, not a pipe schedule, unless the print says otherwise. Length is on the drawing.
          </p>
          <p className="mb-4">
            Long-weld-neck tables are published by class, including Class 150 and Class 600
            standard connections. Heavy barrel and equal barrel are separate geometries. Send the
            length, barrel OD, and grade. Do not treat a long weld neck as a standard weld neck
            with extra hub. The weld prep and the bore rules are different. Nozzle connections are
            machined with varying wall thickness when the vessel outlet needs more metal. Carbon,
            stainless, and nickel alloys are all in play on a nozzle RFQ.
          </p>

          <h3 className="font-display text-2xl font-bold text-[#1B1F23] mt-10 mb-3">Numbers live on the tables</h3>
          <p className="mb-4">
            OD and bolt counts are not reprinted here.{" "}
            <a className="text-[#B45309] underline" href={`${TF}/weld-neck-flanges/${REF}`}>Weld neck type page</a>
            {" · "}
            <a className="text-[#B45309] underline" href={`${TF}/products/flange-dims-weights/ansi-b16-5-forged-flanges/${REF}`}>B16.5 hub tables</a>
            {" · "}
            <a className="text-[#B45309] underline" href={`${TF}/products/flange-dims-weights/ansi-b16-5-forged-flanges/class-150/${REF}`}>Class 150</a>
            {" · "}
            <a className="text-[#B45309] underline" href={`${TF}/products/flange-dims-weights/long-weld-neck-standard-connection-flanges/class-150-lwn/${REF}`}>LWN Class 150</a>
            {" · "}
            <a className="text-[#B45309] underline" href={`${TF}/products/flange-dims-weights/long-weld-neck-standard-connection-flanges/class-600-lwn/${REF}`}>LWN Class 600</a>
          </p>
        </div>
      </section>

      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#B45309] uppercase tracking-widest text-sm font-semibold mb-3">Why Weld Neck</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1B1F23] mb-6">The Construction Type That Handles Anything</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-12">A weld neck flange has a tapered hub that meets the pipe at a matched weld bevel. The geometry does two things at once: it provides a smooth, gradual stress transition from pipe wall to flange ring (better than slip-on for cyclic and high-temperature service), and the full-penetration butt weld creates a near-seamless joint that meets radiographic acceptance. That is why weld neck shows up on every line where the pressure, temperature, or cycle count matters.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#F8F6F0] border-l-4 border-[#B45309] p-6 rounded">
              <h3 className="font-display text-xl font-bold text-[#1B1F23] mb-3">Grain Continuity</h3>
              <p className="text-gray-700 leading-relaxed text-sm">Forged weld necks carry continuous grain from pipe-end through hub through ring, oriented with the load path. Cyclic and fatigue service rewards this construction more than any other.</p>
            </div>
            <div className="bg-[#F8F6F0] border-l-4 border-[#B45309] p-6 rounded">
              <h3 className="font-display text-xl font-bold text-[#1B1F23] mb-3">Pressure Headroom</h3>
              <p className="text-gray-700 leading-relaxed text-sm">The hub absorbs bolt-up bending without yielding the way a flat slip-on flange ring does. That is why Class 1500 and above are almost always weld neck construction.</p>
            </div>
            <div className="bg-[#F8F6F0] border-l-4 border-[#B45309] p-6 rounded">
              <h3 className="font-display text-xl font-bold text-[#1B1F23] mb-3">Radiographic Joint</h3>
              <p className="text-gray-700 leading-relaxed text-sm">The matched weld bevel allows full penetration butt welding with 100 percent NDE on the joint. Required for ASME pressure vessel service and recommended on any line where leak risk carries safety consequences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Are Weld Necks The Ideal Flange? */}
      <section className="bg-cream py-20 px-4">
        <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1B1F23] mb-6">Why Are Weld Necks The Ideal Flange?</h2>
          <p className="mb-5">
            Weld neck flanges are the go-to choice for most piping applications - and for good reason. They feature a neck extension with a weld bevel at the end, which lets them connect directly to pipe in a way that feels almost seamless. In larger sizes and higher pressure classes, you&apos;ll rarely see anything else used. If there were only one bored flange style to choose from, the weld neck would probably win every time (yes, you still need a blind flange to cap the line off).
          </p>
          <p className="mb-5">
            Here&apos;s how the connection works: the weld bevel meets a matching bevel on the pipe end in a V-shaped joint, allowing for a clean, circular weld all the way around. The result is a smooth, unified transition that lets gas or liquid flow through with very little restriction. After welding, the joint gets inspected to make sure the seal is solid and free of any defects.
          </p>
          <div className="text-center my-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/weld-neck-drawing.jpg" alt="Weld neck flange technical drawing with dimensions" className="inline-block w-full max-w-[420px] border-2 border-[#1B1F23] rounded-lg p-3 bg-white" />
          </div>
          <p className="mb-5">
            Another thing that sets weld neck flanges apart is the standardized, tapered hub. Rather than an abrupt change between pipe and flange, the hub creates a gradual shift that spreads out pressure forces more evenly at a nice angle, like the slope of a mountain. This makes a real difference in high-pressure, high-temperature environments where stress and shock are constant concerns - the extra material along that transition helps absorb it all.
          </p>
          <p>
            Because weld necks are the standard for high-pressure applications, they&apos;re often paired with a ring type joint (RTJ) face. This sealing surface uses a metal gasket that gets compressed between the grooves of two connecting flanges, forming an exceptionally tight seal. Combined with the strength of the weld bevel connection, an RTJ weld neck with a metal gasket is the top pick whenever the stakes are high, and are even required in some specifications such as for API 6A flanges.
          </p>
          <div className="mt-8">
            <a href={`${TF}/weld-neck-flanges/${REF}`} className="inline-block bg-[#B45309] text-white px-8 py-3 rounded font-semibold hover:bg-[#92400E] transition">
              View Weld Neck Flanges at Texas Flange →
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#B45309] uppercase tracking-widest text-sm font-semibold mb-3">The Pressure Spectrum</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1B1F23] mb-6">From Lightweight to 20K PSI</h2>
          <p className="text-lg text-gray-700 max-w-3xl mb-12 leading-relaxed">The same weld neck construction scales from waterworks to wellhead. The class number changes, the material gets heavier, the hub gets taller, but the geometry stays the same.</p>
          <div className="space-y-4">
            {[
              { code: "Class 125LW", range: "150-175 psi", body: "Lightweight steel weld neck on the ANSI B16.1 Class 125 bolt pattern. Waterworks, HVAC, low-pressure process. Plate-cut or forged from A36 or A516-70." },
              { code: "AWWA C207 B / D / E / F", range: "86 to 300 psi", body: "Waterworks weld neck flanges per AWWA. Class D is the workhorse at 175 psi. Class E and F handle high-service transmission. Plate-cut from domestic-melt A36 or A516-70 with AIS option." },
              { code: "ASME B16.5 Class 150 to 2500", range: "285 to 6170 psi at 100°F", body: "The plant process workhorse. Catalog sizes 1/2 inch through 24 inch. Carbon A105, stainless F316L, chrome-moly F22 and F91. Raised face, flat face, ring-type joint, tongue-and-groove facings." },
              { code: "ASME B16.47 Series A / B", range: "Through 6170 psi", body: "Large diameter weld neck flanges 26 inch through 60 inch. Series A heavier MSS pattern, Series B lighter API 605 pattern. Class 75 through 900." },
              { code: "MSS SP-44 Pipeline", range: "Class 600 to 2500", body: "Pipeline weld neck flanges matched to API 5L X-grade pipe. A694 F42 through F70 grades. Class 600 through 1500 covers most transmission service. Charpy impact testing standard." },
              { code: "API 6A / 6BX 2M to 25M", range: "2000 to 25000 PSI", body: "Wellhead, BOP, and high pressure production weld necks. 6B series for 2M through 5M. 6BX series for 10M and above with self-energizing ring gaskets. Material classes from AA standard to HH severe sour." }
            ].map((c) => (
              <div key={c.code} className="bg-[#F8F6F0] border border-gray-200 rounded p-6 flex flex-col md:flex-row gap-6 md:items-center">
                <div className="md:w-1/4">
                  <p className="font-display text-2xl font-bold text-[#1B1F23]">{c.code}</p>
                  <p className="text-sm text-[#B45309] font-semibold mt-1">{c.range}</p>
                </div>
                <p className="md:w-3/4 text-gray-700 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products (SEO-AI-090: WHY US grid kept) */}
      <section id="products" className="bg-cream py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1B1F23] mb-4">WHY US?</h2>
          <p className="text-xl text-[#B45309] font-semibold mb-8">1/2&quot; &ndash; 203&quot; INDUSTRIAL FLANGES</p>
          <h3 className="text-xl font-semibold text-gray-800 mb-5">We provide:</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "ANSI / ASME FORGED FLANGES",
              "MSS-SP-44 FLANGES / ANSI B 16.47 SERIES A",
              "API TYPE 6A – RTJ Face Flanges",
              "API-605 FLANGES / ANSI B 16.47 SERIES B",
              "A.G.A. ORIFICE UNIONS – With or without Hardware",
              "ASME BOILER CODE FLANGES",
              "CL. 125 LIGHTWEIGHT FLANGES – Low pressure",
              "PLATE FLANGES – 1/4″ thru 8″ Thick, AWWA C-207",
              "ANSI LONG WELDNECKS & SPECIAL BODY CONNECTORS",
              "STUDDING OUTLETS (pad flanges)",
              "SPECTACLE BLINDS – Line blinds, paddle spacers",
              "DIN FLANGES / JIS FLANGES / Special Ring Flanges"
            ].map((item) => (
              <div key={item} className="bg-white border-l-4 border-[#B45309] rounded px-5 py-4">
                <p className="text-[15px] font-medium text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials (SEO-AI-090) */}
      <section id="materials" className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-10">Materials Used</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["CARBON STEEL", "ASTM/ASME SA-105, A-350 LF-2, LF-3, A694, SA-516-70, A36"],
              ["CHROME ALLOYS", "A-182-F-1, F-5, F-6, F-9, F-91, F-11, F-12, F-22"],
              ["STAINLESS STEEL", "A-182: F-304, 304/304L, 316/316L, 304H, 316H, 309, 310, 317L, 321, 347, 347H, 904L, Alloy 20, and other H grades"],
              ["SPECIALTY ALLOYS", "Hastelloy B-2, C-276, G, X, C-22 | Inconel 600, 601, 625, 718 | Incoloy 800, 825, 800H, 800HT | Monel 400"],
              ["ALUMINUM", "3003, 6061, 5083 and other grades upon request"],
              ["OTHER MATERIALS", "Copper 90/10, 70/30 | Duplex F51/2205, F53/2507 | Titanium Gr2, Gr12"]
            ].map(([title, grades]) => (
              <div key={title}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#FDBA74" }}>{title}</h3>
                <p className="leading-relaxed text-gray-300">{grades}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-gray-300">
            Grade selection by service: <Link href="/materials" className="underline" style={{ color: "#FDBA74" }}>materials guide</Link>.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#B45309] uppercase tracking-widest text-sm font-semibold mb-3">Industries</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1B1F23] mb-12">From Wellhead to Treatment Plant</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {industries.map(([path, label]) => (
              <a key={label} href={`${TF}${path}${REF}`} className="block bg-[#F8F6F0] border border-gray-200 px-4 py-4 rounded text-center hover:border-[#B45309] hover:bg-white transition">
                <span className="text-[#1B1F23] font-semibold text-sm">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#B45309] uppercase tracking-widest text-sm font-semibold mb-3">Technical Resources</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1B1F23] mb-12">Engineering Reference</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { href: "/resources/flange-dimensions", title: "Flange Dimension Reference", body: "ASME B16.5 and B16.47 dimensional tables for weld neck flanges. OD, BC, bolt count, hub geometry by class." },
              { href: "/resources/rtj-gaskets", title: "RTJ Gasket Reference", body: "R-series and BX-series ring gasket dimensions, material options, and matching flange groove designations." },
              { href: "/standards/api-flanges", title: "API 6A / 6BX Guide", body: "Pipeline and wellhead pressure classes. 2M through 25M. Ring gasket family selection and material class system." },
              { href: "/tools/bolt-torque-calculator", title: "Bolt Torque Calculator", body: "B7 stud torque values by flange size and lubrication condition. Reference values for cross-pattern bolt-up." },
              { href: "/materials/hastelloy", title: "Hastelloy Service Guide", body: "C-276, C-22, B-2 grade selection. Corrosion data for chloride, acid, and chemical process service." },
              { href: "/tools/pressure-temperature-rating", title: "Pressure-Temperature Lookup", body: "ASME B16.5 P-T values for common materials. Class 150 through 2500 across carbon, stainless, chrome-moly." }
            ].map((r) => (
              <Link key={r.href} href={r.href} className="block bg-white border border-gray-200 rounded p-6 hover:border-[#B45309] hover:shadow-md transition">
                <h3 className="font-display text-xl font-bold text-[#1B1F23] mb-3">{r.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{r.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#B45309] uppercase tracking-widest text-sm font-semibold mb-3">Common Questions</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1B1F23] mb-12">Frequently Asked</h2>
          <div className="space-y-6">{faqs.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}</div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="bg-[#F8F6F0] border border-gray-200 rounded-lg p-6 group">
      <summary className="cursor-pointer flex items-start justify-between gap-4">
        <h3 className="font-display text-lg font-bold text-[#1B1F23]">{q}</h3>
        <span className="text-[#B45309] text-2xl leading-none group-open:rotate-45 transition-transform">+</span>
      </summary>
      <p className="text-gray-700 leading-relaxed mt-4">{a}</p>
    </details>
  );
}
