import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Industry { slug: string; name: string; hero: string; intro: string; body: string[]; standards: string[]; materials: string[]; }

const industries: Industry[] = [
  { slug: "oil-gas", name: "Oil & Gas", hero: "Pipeline, Wellhead, and Production Weld Neck",
    intro: "API 6A and 6BX wellhead pressure, MSS SP-44 pipeline flanges, ASME B16.5 process. The full upstream-through-downstream weld neck supply spectrum.",
    body: ["Upstream wellhead service centers on API 6A and 6BX weld neck flanges. 2M through 5M for production trees and surface piping. 10M through 20M for high pressure stimulation and frac trees. R-series ring gaskets on 6B class, BX-series with self-energizing geometry on 6BX. Material classes CC and DD for sour service with NACE MR0175 hardness compliance.",
      "Midstream pipeline service runs MSS SP-44 weld necks in API 5L X-grade pipe matching. A694 forged grades F42 through F70 mate to X42 through X70 pipe. Charpy impact testing standard per project specification.",
      "Downstream refining returns to ASME B16.5 and B16.47 for process service. Chrome-moly F22 and F91 in reactor and heater service. A105 carbon on utility and intermediate temperature. F316L stainless on alkylation and chloride-bearing service. NACE compliance per sour crude and amine treater specifications."],
    standards: ["API 6A / 6BX", "MSS SP-44", "ASME B16.5 / B16.47", "NACE MR0175"],
    materials: ["A105", "A350 LF2", "A694 F60", "F22", "F91", "F316L"] },
  { slug: "petrochemical", name: "Petrochemical", hero: "Plant Process Weld Neck Supply",
    intro: "Refinery and petrochemical plant process piping. ASME B16.5 and B16.47 across the temperature spectrum with chrome-moly alloy for hot side and Hastelloy for aggressive chemistry.",
    body: ["Petrochemical plants run the full pressure-temperature spectrum on the same site. Cold side cracking units at ambient. Hot side reactor effluent above 800 degrees F. The flange supply has to cover both with grade-appropriate material.",
      "Chrome-moly F22 and F91 cover the elevated temperature reactor and heater service. Stainless F316L handles corrosive acid alkylation and aromatic recovery. A105 carbon covers utility and intermediate temperature. Specialty alloys including Hastelloy C-276 and Inconel 625 cover specific process chemistry.",
      "NACE MR0175 compliance is common on sour crude service and amine treaters. The MTR shows hardness data, chemistry, and heat treatment record."],
    standards: ["ASME B16.5", "ASME B16.47", "NACE MR0175"],
    materials: ["A105", "F11", "F22", "F91", "F304L", "F316L", "Hastelloy C-276", "Inconel 625"] },
  { slug: "power-generation", name: "Power Generation", hero: "Main Steam, Reheat, and Balance of Plant",
    intro: "Power plant weld neck supply across coal, gas, nuclear, and combined-cycle. F91 and F92 on main steam, F347 on auxiliary, AWWA on raw water intake.",
    body: ["Main steam and hot reheat headers run in F91 modified 9 chromium-moly at 1050 to 1200 degrees F. Welding consumables and procedures are tightly controlled. F92 with tungsten substitution extends service into ultra-supercritical units.",
      "Auxiliary and balance of plant uses F347 stabilized austenitic for high-temperature steam and F316L for condensate and feedwater. Carbon A105 on utility air and instrument air.",
      "Raw water intake and circulating water lines move into AWWA C207 plate-cut and Class 125LW lightweight territory at larger diameters. The intake station may have AIS compliance requirements on federally funded utilities."],
    standards: ["ASME B16.5", "ASME B16.47", "AWWA C207", "ASME Section III for nuclear"],
    materials: ["F91", "F92", "F347", "F316L", "A105", "A516-70"] },
  { slug: "waterworks", name: "Water & Wastewater", hero: "AWWA and Lightweight Waterworks Supply",
    intro: "Municipal water and wastewater piping. AWWA C207 Class B/D/E/F plate-cut, Class 125LW lightweight retrofit, slip-on and weld neck construction. 4 inch through 144 inch. AIS-compliant on EPA SRF and USDA Rural Development.",
    body: ["AWWA C207 governs the majority of waterworks flange supply. Class B covers low-pressure distribution. Class D is the workhorse at 175 psi. Class E and F cover high service. Class selection runs against static plus surge pressure analysis.",
      "Class 125LW lightweight steel flanges retrofit ANSI B16.1 Class 125 cast iron installations. Same bolt pattern, lighter steel, ductile failure mode instead of brittle. The standard upgrade path on 1970s-1990s pump house and treatment plant equipment.",
      "AIS compliance covers EPA Clean Water and Drinking Water SRF plus USDA Rural Development water programs. Documentation runs from the domestic mill heat lot through fabrication. The compliance letter references the SRF program and project number."],
    standards: ["AWWA C207", "ANSI B16.1 Class 125", "AIS for federal SRF"],
    materials: ["A36", "A516-70", "Ductile iron components"] },
  { slug: "chemical-processing", name: "Chemical Processing", hero: "Hastelloy and Exotic Alloy Weld Neck",
    intro: "Chemical plant weld neck flanges across acid, caustic, and chloride service. Hastelloy, Inconel, duplex, and titanium grades matched to the specific corrosion environment.",
    body: ["Sulfuric acid service runs in Inconel 825 for concentrated acid and Hastelloy C-276 for dilute mixed acid. Phosphoric acid uses duplex 2205 and 2507. Hydrochloric acid means Hastelloy B-2 or pure tantalum at the most extreme. Selection is a function of acid concentration, temperature, and oxidizing impurities.",
      "Caustic service runs carbon at room temperature and shifts to nickel alloys above 200 degrees F. Stress corrosion cracking is the main failure mode. Chloride service is a stainless killer above 140 degrees F in dilute solution; duplex 2205 buys headroom, super duplex 2507 buys more, Hastelloy C-276 buys still more.",
      "Documentation includes PMI on every flange for grade verification, MTR with chemistry, and corrosion test reports where the project specifies pitting (ASTM G48) or stress corrosion (NACE TM0177) data."],
    standards: ["ASME B16.5", "NACE MR0175", "NACE TM0177"],
    materials: ["F316L", "Hastelloy C-276", "Hastelloy C-22", "Inconel 625", "Inconel 825", "Duplex 2205", "Titanium Gr2"] },
  { slug: "mining", name: "Mining & Minerals", hero: "Mineral Processing Plant and Slurry Supply",
    intro: "Mineral processing plant and slurry transport weld neck supply. Heavy plate ring flanges for tailings, duplex and lined for abrasive slurry, AWWA on water management.",
    body: ["Tailings transport runs in large diameter heavy-wall pipe with AWWA-style weld neck flanges sized to project drawing. Class D and Class E ratings cover most tailings pump pressures. Plate thickness scales with diameter; custom dimensions out to 100+ inches are common.",
      "Abrasive slurry service drives wear-resistant linings. Stellite hard facing on RTJ grooves, ceramic-loaded urethane on pipe and flange interior, or chrome carbide overlay for severe abrasion.",
      "Water management uses AWWA C207 for clear water and stainless or duplex on process water with elevated chloride."],
    standards: ["AWWA C207", "ASME B16.5 plant", "Custom plate drawings"],
    materials: ["A36", "A516-70", "Duplex 2205", "Hastelloy", "Stellite hard facing"] },
  { slug: "pulp-paper", name: "Pulp & Paper", hero: "Bleach Plant and Pulp Mill Weld Neck",
    intro: "Pulp and paper mill weld neck supply. Titanium for the bleach plant, F316L on stock prep, Hastelloy on aggressive service.",
    body: ["Bleach plant service is the most aggressive corrosion environment in industry. Chlorine dioxide bleach stages run titanium grade 2 weld necks. F316L survives low-concentration but pits in concentrated bleach.",
      "Stock prep, white water, and pulp transfer use F316L and duplex 2205 depending on chloride content. Black liquor service in the recovery cycle uses carbon at moderate temperature and chrome-moly F22 in evaporator and concentrator.",
      "Documentation includes PMI on each flange, MTR with chemistry, and corrosion test data where specified. Titanium MTRs include iron and oxygen content limits."],
    standards: ["ASME B16.5", "TAPPI standards"],
    materials: ["Titanium Gr2", "F316L", "Duplex 2205", "Hastelloy C-276", "A105"] },
  { slug: "food-beverage", name: "Food & Beverage", hero: "Sanitary Weld Neck for Food Processing",
    intro: "Food and beverage plant weld neck supply. Sanitary F316L, USDA-approved surface finish, ASME B16.5 on utility connections.",
    body: ["The default material is F316L stainless with 32 Ra or finer surface finish on product-contact surfaces. Electropolish is common for dairy and pharmaceutical-grade installations.",
      "Sanitary connections are typically triclamp rather than ASME, but B16.5 raised face weld necks appear at utility, CIP supply, and steam supply. Flange grade is F316L on any line that may see indirect product contact.",
      "Documentation includes USDA acceptance letters where required, FDA-grade gasket certifications, and standard MTR chain."],
    standards: ["3A Sanitary", "ISO 2852 triclamp", "ASME B16.5 utility"],
    materials: ["F316L", "F304L"] },
  { slug: "agriculture", name: "Agriculture", hero: "Irrigation and Transfer Line Weld Neck",
    intro: "Agricultural irrigation and water transfer weld neck supply. Carbon mainlines, AWWA on large diameter, lightweight retrofit on legacy cast iron.",
    body: ["Agricultural mainline irrigation runs carbon A105 weld necks on welded steel pipe and AWWA C207 on larger diameter transmission. Class B and Class D cover most operating pressures.",
      "USDA Rural Development water program funding triggers AIS compliance. Domestic-melt heat lots and project-specific compliance letters ship with the order.",
      "Pump station service uses ASME B16.5 Class 150 and 300 for smaller bore connections and AWWA for larger transmission. Suction strainer and check valve flanges match the suction header standard."],
    standards: ["AWWA C207", "ASME B16.5", "AIS on USDA-funded"],
    materials: ["A105", "A36", "F304L", "Ductile iron"] },
  { slug: "hvac", name: "HVAC & Mechanical", hero: "Commercial and Institutional HVAC Weld Neck",
    intro: "HVAC and mechanical weld neck supply. Carbon chilled water and steam, Class 125LW lightweight on B16.1 cast iron retrofit, AWWA on campus distribution.",
    body: ["Chilled water in commercial and institutional buildings runs carbon A105 weld necks per ASME B16.5 Class 150. Steam supply and condensate return on heating systems uses A105 Class 150 or 300 depending on operating pressure.",
      "Existing cast iron systems on university and hospital campuses retrofit to Class 125LW lightweight steel during shutdown windows. Same bolt pattern, ductile failure mode.",
      "Larger campus distribution loops move into AWWA C207 plate-cut at 12 inch and above. Pump house piping follows similar logic."],
    standards: ["ASME B16.5", "ANSI B16.1 retrofit", "AWWA C207 large diameter"],
    materials: ["A105", "A36", "F304L specialty"] },
  { slug: "marine", name: "Marine & Shipbuilding", hero: "Marine and Shipbuilding Weld Neck",
    intro: "Marine piping weld neck supply. Monel 400 and copper-nickel for seawater, F316L for sanitary, ABS and DNV approvals on classed vessels.",
    body: ["Seawater service is the defining environment. Monel 400 covers the bulk of seawater piping. Copper-nickel 90/10 and 70/30 cover cooling water on commercial ships. Bronze on smaller bore and non-magnetic applications.",
      "Sanitary and potable water use F316L. Fuel oil and lube oil use A105 carbon. Steam follows the same logic as power generation; F91 superheated, F347 auxiliary.",
      "Classification society approvals (ABS, DNV-GL, Lloyd's Register) require submission of MTR, manufacturer certificate, and dimensional inspection report for each flange."],
    standards: ["ASTM B62, B164, B584 copper alloys", "ASME B16.5", "ABS, DNV, LR class rules"],
    materials: ["Monel 400", "70/30 CuNi", "90/10 CuNi", "Bronze", "F316L"] },
  { slug: "data-centers", name: "Data Centers", hero: "Data Center Mechanical Weld Neck",
    intro: "Data center mechanical weld neck supply. Chilled water and condenser water loops in carbon, humidification in stainless. BABA on federal builds.",
    body: ["Chilled water and condenser water service uses A105 carbon ASME B16.5 weld necks at Class 150. Welded carbon steel piping with raised face flanges at equipment connections.",
      "Humidification and reverse-osmosis water systems use F304L or F316L stainless. Smaller bore lines use F316L socket-weld per ASME B16.11 alongside weld neck on main runs.",
      "Federal data center construction (GSA, DOD, DOE) carries BAA or BABA depending on the funding source. Hyperscaler facilities under CHIPS Act adjacency may carry BABA compliance."],
    standards: ["ASME B16.5", "ASME B16.11 small-bore", "BAA / BABA when federally involved"],
    materials: ["A105", "F304L", "F316L"] }
];

export async function generateStaticParams() { return industries.map((i) => ({ slug: i.slug })); }

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const i = industries.find((x) => x.slug === params.slug);
  if (!i) return { title: "Industry Not Found" };
  return { title: `${i.name} Weld Neck Flange Supply`, description: i.intro };
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = industries.find((i) => i.slug === params.slug);
  if (!industry) notFound();
  return (<>
    <section className="bg-[#1B1F23] text-white py-20 px-4"><div className="max-w-4xl mx-auto"><Link href="/industries" className="text-gray-400 hover:text-[#0D9488] text-sm mb-6 inline-block">&larr; Industries</Link><p className="text-[#0D9488] uppercase tracking-widest text-sm mb-3">{industry.name}</p><h1 className="font-display text-5xl font-bold mb-6 text-white">{industry.hero}</h1><p className="text-xl text-gray-300 leading-relaxed max-w-3xl">{industry.intro}</p></div></section>
    <section className="bg-cream py-16 px-4"><div className="max-w-4xl mx-auto space-y-6">{industry.body.map((p, i) => <p key={i} className="text-lg text-gray-700 leading-relaxed">{p}</p>)}<div className="grid md:grid-cols-2 gap-6 mt-10"><div className="bg-white border border-gray-200 rounded p-6"><h3 className="font-display text-lg font-bold text-[#1B1F23] mb-3">Common Standards</h3><ul className="space-y-1 text-gray-700">{industry.standards.map((s) => <li key={s} className="text-sm">{s}</li>)}</ul></div><div className="bg-white border border-gray-200 rounded p-6"><h3 className="font-display text-lg font-bold text-[#1B1F23] mb-3">Common Materials</h3><ul className="flex flex-wrap gap-2">{industry.materials.map((m) => <li key={m} className="text-xs bg-[#F8F6F0] text-[#1B1F23] px-3 py-1 rounded-full font-semibold">{m}</li>)}</ul></div></div></div></section>
    <section className="bg-[#0D9488] py-16 px-4 text-white text-center"><div className="max-w-3xl mx-auto"><h2 className="font-display text-4xl mb-6">Project in {industry.name}?</h2><Link href="/contact" className="inline-block bg-white text-[#0D9488] px-8 py-4 rounded font-semibold hover:bg-[#F8F6F0] transition">Request Quote</Link><p className="text-sm mt-6 opacity-90">PO Box 2889, Pearland TX 77588</p></div></section>
  </>);
}
