import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weld Neck Flanges | Lightweight to API 6A 20K Pressure Service",
  description: "Engineered weld neck pipe flanges across the full pressure spectrum. Lightweight Class 125LW, ASME B16.5 and B16.47, API 6A and 6BX through 20000 PSI. Carbon, stainless, alloy, and Hastelloy materials."
};

const faqs = [
  { q: "What pressure range can a weld neck flange cover?",
    a: "The weld neck construction itself scales further than any other flange type. At the low end, Class 125LW lightweight weld necks per AWWA C207 handle waterworks service down to 150 to 175 psi working pressure. ASME B16.5 covers Class 150 through Class 2500 in standard catalog sizes, which spans 285 psi through 6170 psi at room temperature for A105 carbon. Above that, API 6A and 6BX weld necks reach 20000 PSI and beyond. One construction type, the full pressure spectrum." },
  { q: "Why pair RTJ facing with a weld neck flange?",
    a: "The metal-to-metal seal of a ring-type joint flange depends on bolt-up force and material stiffness to compress the gasket into the groove. The weld neck hub geometry distributes that bolt-up force evenly into the pipe wall without overstressing the joint, which is why RTJ + weld neck is the default at API 6A 3M class and above. The combination is also required by some refinery and petrochemical specifications for high-temperature steam and cyclic service." },
  { q: "What is Class 125LW and how does it differ from cast iron Class 125?",
    a: "Class 125LW is a lightweight steel flange that shares the bolt circle, bolt count, and outside diameter of ANSI B16.1 Class 125 cast iron. The hub is shorter and the ring section is thinner, which reduces weight without compromising bolted joint integrity for the moderate pressures (typically 150 to 175 psi) of waterworks and HVAC service. The advantage over cast iron is ductility: steel does not crack from impact or bolt-up overtorque the way cast iron does." },
  { q: "When does Hastelloy weld neck make sense over stainless?",
    a: "Hastelloy C-276 is to nickel alloys what A105 is to carbon. It resists wet chlorine, hot mineral acids, ferric and cupric chlorides, formic and acetic acids, sea water, and hypochlorite. Stainless F316L tolerates dilute chloride at room temperature but pits and stress corrosion cracks in concentrated chloride above 140 degrees F. Once the service crosses into hot wet chloride or mixed-acid chemistry, C-276 weld necks are the qualified product." },
  { q: "Do you supply weld neck flanges with NACE MR0175 compliance?",
    a: "Yes. NACE sour service flanges in A105, A350 LF2, A694, F22, F91, and F316L are available with the supplementary hardness testing and chemistry restrictions the standard requires. The MTR shows the hardness data, the heat treatment record, and the NACE annex applicable to the order." },
  { q: "What is the largest weld neck flange you can supply?",
    a: "ASME B16.5 caps at 24 inch nominal. ASME B16.47 Series A and B cover 26 inch through 60 inch. Above 60 inch, weld neck construction continues as custom-fabricated hubbed plate flanges. We have supplied weld neck configurations out to 144 inch on transmission projects, with the hub rolled or cast separately and welded to the plate-cut flange face under full penetration weld with 100 percent NDE." },
  { q: "How fast can you turn around a quote?",
    a: "Send the dimension, pressure class, material grade, and facing. Quotes on stock items typically return same day. Custom and exotic alloy work may need a day or two to confirm mill availability on the specific heat lots." }
];

export default function HomePage() {
  return (
    <>
      <section className="bg-[#1B1F23] text-white py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#0D9488] uppercase tracking-widest text-sm font-semibold mb-4">From Lightweight to 20000 PSI</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">Weld Neck Flanges. Every Pressure Class.</h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed mb-10">The tapered hub and matched weld bevel that make a weld neck flange work scale across the full pressure spectrum. Lightweight Class 125LW for waterworks, ASME B16.5 catalog through Class 2500 for plant process, MSS SP-44 for pipeline pressure, and API 6A through 6BX for wellhead and high pressure production. Carbon through Hastelloy.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="bg-[#0D9488] text-white px-8 py-4 rounded font-semibold hover:bg-[#0F766E] transition">Request a Quote</Link>
            <Link href="/products/weld-neck" className="border-2 border-white text-white px-8 py-4 rounded font-semibold hover:bg-white hover:text-[#1B1F23] transition">Browse the Catalog</Link>
          </div>
        </div>
      </section>

      <section className="bg-[#0D9488] text-white py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div><p className="font-display text-4xl font-bold">125LW</p><p className="text-sm uppercase tracking-wide mt-1">Lightest Class</p></div>
          <div><p className="font-display text-4xl font-bold">20K</p><p className="text-sm uppercase tracking-wide mt-1">PSI API 6BX Max</p></div>
          <div><p className="font-display text-4xl font-bold">203"</p><p className="text-sm uppercase tracking-wide mt-1">Custom Diameter</p></div>
          <div><p className="font-display text-4xl font-bold">40+</p><p className="text-sm uppercase tracking-wide mt-1">Alloy Grades</p></div>
        </div>
      </section>

      <section className="bg-cream py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#0D9488] uppercase tracking-widest text-sm font-semibold mb-3">Why Weld Neck</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1B1F23] mb-6">The Construction Type That Handles Anything</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-12">A weld neck flange has a tapered hub that meets the pipe at a matched weld bevel. The geometry does two things at once: it provides a smooth, gradual stress transition from pipe wall to flange ring (better than slip-on for cyclic and high-temperature service), and the full-penetration butt weld creates a near-seamless joint that meets radiographic acceptance. That is why weld neck shows up on every line where the pressure, temperature, or cycle count matters.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-l-4 border-[#0D9488] p-6 rounded">
              <h3 className="font-display text-xl font-bold text-[#1B1F23] mb-3">Grain Continuity</h3>
              <p className="text-gray-700 leading-relaxed text-sm">Forged weld necks carry continuous grain from pipe-end through hub through ring, oriented with the load path. Cyclic and fatigue service rewards this construction more than any other.</p>
            </div>
            <div className="bg-white border-l-4 border-[#0D9488] p-6 rounded">
              <h3 className="font-display text-xl font-bold text-[#1B1F23] mb-3">Pressure Headroom</h3>
              <p className="text-gray-700 leading-relaxed text-sm">The hub absorbs bolt-up bending without yielding the way a flat slip-on flange ring does. That is why Class 1500 and above are almost always weld neck construction.</p>
            </div>
            <div className="bg-white border-l-4 border-[#0D9488] p-6 rounded">
              <h3 className="font-display text-xl font-bold text-[#1B1F23] mb-3">Radiographic Joint</h3>
              <p className="text-gray-700 leading-relaxed text-sm">The matched weld bevel allows full penetration butt welding with 100 percent NDE on the joint. Required for ASME pressure vessel service and recommended on any line where leak risk carries safety consequences.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#0D9488] uppercase tracking-widest text-sm font-semibold mb-3">The Pressure Spectrum</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1B1F23] mb-6">From Lightweight to 20K PSI</h2>
          <p className="text-lg text-gray-700 max-w-3xl mb-12 leading-relaxed">The same weld neck construction scales from waterworks to wellhead. The class number changes, the material gets heavier, the hub gets taller, but the geometry stays the same.</p>
          <div className="space-y-4">
            {[
              { code: "Class 125LW", range: "150-175 psi", body: "Lightweight steel weld neck on the ANSI B16.1 Class 125 bolt pattern. Waterworks, HVAC, low-pressure process. Plate-cut or forged from A36 or A516-70.", color: "from teal" },
              { code: "AWWA C207 B / D / E / F", range: "86 to 300 psi", body: "Waterworks weld neck flanges per AWWA. Class D is the workhorse at 175 psi. Class E and F handle high-service transmission. Plate-cut from domestic-melt A36 or A516-70 with AIS option.", color: "from teal" },
              { code: "ASME B16.5 Class 150 to 2500", range: "285 to 6170 psi at 100°F", body: "The plant process workhorse. Catalog sizes 1/2 inch through 24 inch. Carbon A105, stainless F316L, chrome-moly F22 and F91. Raised face, flat face, ring-type joint, tongue-and-groove facings.", color: "from teal" },
              { code: "ASME B16.47 Series A / B", range: "Through 6170 psi", body: "Large diameter weld neck flanges 26 inch through 60 inch. Series A heavier MSS pattern, Series B lighter API 605 pattern. Class 75 through 900.", color: "from teal" },
              { code: "MSS SP-44 Pipeline", range: "Class 600 to 2500", body: "Pipeline weld neck flanges matched to API 5L X-grade pipe. A694 F42 through F70 grades. Class 600 through 1500 covers most transmission service. Charpy impact testing standard.", color: "from teal" },
              { code: "API 6A / 6BX 2M to 25M", range: "2000 to 25000 PSI", body: "Wellhead, BOP, and high pressure production weld necks. 6B series for 2M through 5M. 6BX series for 10M and above with self-energizing ring gaskets. Material classes from AA standard to HH severe sour.", color: "from teal" }
            ].map((c) => (
              <div key={c.code} className="bg-[#F8F6F0] border border-gray-200 rounded p-6 flex flex-col md:flex-row gap-6 md:items-center">
                <div className="md:w-1/4">
                  <p className="font-display text-2xl font-bold text-[#1B1F23]">{c.code}</p>
                  <p className="text-sm text-[#0D9488] font-semibold mt-1">{c.range}</p>
                </div>
                <p className="md:w-3/4 text-gray-700 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#0D9488] uppercase tracking-widest text-sm font-semibold mb-3">Material Range</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Carbon Through Hastelloy</h2>
          <p className="text-lg text-gray-300 max-w-3xl mb-12 leading-relaxed">Forty plus alloy grades across the carbon, stainless, chrome-moly, nickel-alloy, duplex, titanium, aluminum, and copper-nickel families. The grade is matched to the service, not stocked once and forced into every line item.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Carbon Steel", grades: "A105, A350 LF2/LF3, A516-70, A694 F42-F70, A36" },
              { title: "Stainless Steel", grades: "F304L, F316L, F321, F347, 904L, Alloy 20" },
              { title: "Chrome-Moly", grades: "F1, F5, F9, F11, F12, F22, F91, F92" },
              { title: "Hastelloy", grades: "B-2, C-276, C-22, G, X" },
              { title: "Inconel", grades: "600, 601, 625, 718" },
              { title: "Incoloy", grades: "800, 800H, 800HT, 825" },
              { title: "Duplex", grades: "2205, 2507 super duplex" },
              { title: "Other", grades: "Monel 400, Titanium Gr2/Gr12, 90/10 and 70/30 CuNi, 6061 / 5083 / 3003 aluminum" }
            ].map((m) => (
              <div key={m.title} className="border border-[#0D9488]/30 p-5 rounded">
                <p className="font-display text-lg font-bold text-white mb-2">{m.title}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{m.grades}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#0D9488] uppercase tracking-widest text-sm font-semibold mb-3">Industries We Supply</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1B1F23] mb-12">From Wellhead to Treatment Plant</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              ["oil-gas", "Oil & Gas"], ["petrochemical", "Petrochemical"], ["power-generation", "Power Generation"],
              ["waterworks", "Water & Wastewater"], ["chemical-processing", "Chemical Processing"], ["mining", "Mining & Minerals"],
              ["pulp-paper", "Pulp & Paper"], ["food-beverage", "Food & Beverage"], ["agriculture", "Agriculture"],
              ["hvac", "HVAC & Mechanical"], ["marine", "Marine & Shipbuilding"], ["data-centers", "Data Centers"]
            ].map(([slug, label]) => (
              <Link key={slug} href={`/industries/${slug}`} className="block bg-[#F8F6F0] border border-gray-200 px-4 py-4 rounded text-center hover:border-[#0D9488] hover:bg-white transition">
                <span className="text-[#1B1F23] font-semibold text-sm">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#0D9488] uppercase tracking-widest text-sm font-semibold mb-3">Technical Resources</p>
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
              <Link key={r.href} href={r.href} className="block bg-white border border-gray-200 rounded p-6 hover:border-[#0D9488] hover:shadow-md transition">
                <h3 className="font-display text-xl font-bold text-[#1B1F23] mb-3">{r.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{r.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#0D9488] uppercase tracking-widest text-sm font-semibold mb-3">Common Questions</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1B1F23] mb-12">Frequently Asked</h2>
          <div className="space-y-6">{faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}</div>
        </div>
      </section>

      <section className="bg-[#0D9488] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Got a Weld Neck Spec to Source?</h2>
          <p className="text-xl mb-10 leading-relaxed">Send the size, the pressure class, the material grade, and the facing. The quote with stock confirmation and lead time comes back the same business day.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:2814848325" className="bg-white text-[#0D9488] px-8 py-4 rounded font-semibold hover:bg-[#F8F6F0] transition">(281) 484-8325</a>
            <a href="mailto:sales@texasflange.com" className="border-2 border-white text-white px-8 py-4 rounded font-semibold hover:bg-white hover:text-[#0D9488] transition">sales@texasflange.com</a>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded font-semibold hover:bg-white hover:text-[#0D9488] transition">Request a Quote</Link>
          </div>
          <p className="text-white/80 text-sm mt-8">PO Box 2889, Pearland, TX 77588</p>
        </div>
      </section>
    </>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="bg-[#F8F6F0] border border-gray-200 rounded-lg p-6 group">
      <summary className="cursor-pointer flex items-start justify-between gap-4">
        <h3 className="font-display text-lg font-bold text-[#1B1F23]">{q}</h3>
        <span className="text-[#0D9488] text-2xl leading-none group-open:rotate-45 transition-transform">+</span>
      </summary>
      <p className="text-gray-700 leading-relaxed mt-4">{a}</p>
    </details>
  );
}
