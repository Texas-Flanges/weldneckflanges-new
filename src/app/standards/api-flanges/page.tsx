import CtaBand from "@/components/CtaBand";
import Link from "next/link";
export const metadata = { title: "API 6A and 6BX Weld Neck Flanges | Wellhead Pressure", description: "API 6A wellhead and pressure control weld neck flanges. 2000 PSI through 25000 PSI. R-series and BX-series ring gaskets. Material classes AA through HH including NACE sour service." };
export default function ApiPage() {
  return (<>
    <section className="bg-[#1B1F23] text-white py-20 px-4"><div className="max-w-4xl mx-auto"><Link href="/standards" className="text-gray-400 hover:text-[#B45309] text-sm mb-6 inline-block">&larr; Standards</Link><h1 className="font-display text-5xl font-bold mb-6 text-white">API 6A and 6BX</h1><p className="text-xl text-gray-300 max-w-3xl leading-relaxed">Where ASME B16.5 tops out around 6000 PSI, API 6A picks up and runs to 25000 PSI. Weld neck construction is the dominant flange type in the 6A family. RTJ facing is mandatory. Ring gasket matching is non-negotiable.</p></div></section>
    <section className="bg-cream py-16 px-4"><div className="max-w-4xl mx-auto prose-content space-y-6">
      <h2 className="font-display text-3xl font-bold text-ink">Pressure Class System</h2>
      <p className="text-lg text-gray-700 leading-relaxed">API 6A weld necks are designated by working pressure in thousands of PSI. The 6B series covers 2M (2000 PSI), 3M (3000 PSI), and 5M (5000 PSI). The 6BX series covers 10M, 15M, 20M, and 25M. The 6B series uses R-series ring gaskets in oval or octagonal cross-section. The 6BX series uses BX-series ring gaskets with a self-energizing rectangular cross-section that increases sealing force as pressure rises.</p>
      <p className="text-lg text-gray-700 leading-relaxed">The 2M class is dimensionally close to ASME B16.5 Class 600 but with tighter material and ring-joint requirements. Above 5M, the dimensional family diverges from ASME entirely. A 10M weld neck flange has a much deeper ring groove and a heavier flange thickness than any B16.5 flange.</p>
      <h2 className="font-display text-3xl font-bold text-ink">Material Classes</h2>
      <p className="text-lg text-gray-700 leading-relaxed">API 6A defines material classes that combine chemistry, heat treatment, and environmental service rating. The classes are AA, BB, CC, DD, EE, FF, and HH. AA and BB are standard service in AISI 4140 or 4130 alloy steel. CC and DD add NACE MR0175 sour service compliance with controlled hardness. EE adds low temperature plus higher strength. FF and HH cover severe sour service at the lowest temperatures.</p>
      <p className="text-lg text-gray-700 leading-relaxed">The class designation appears on the MTR and the manufacturer certification. A weld neck specified as material class CC ships with the NACE hardness data, the chemistry restrictions, and the heat treatment record that NACE MR0175 requires.</p>
      <h2 className="font-display text-3xl font-bold text-ink">Ring Gasket Matching</h2>
      <p className="text-lg text-gray-700 leading-relaxed">The flange and the ring gasket are ordered as a matched set. R-series rings (designated R-x where x is a numeric size) mate to 6B-class ring grooves. BX-series rings (designated BX-x) mate to 6BX-class ring grooves. The cross-section geometry differs - mating an R ring to a BX groove or vice versa is a service failure mode. The flange order should list the ring groove designation, and the ring order should list the matching ring number.</p>
      <p className="text-lg text-gray-700 leading-relaxed">Ring material is also specified. Soft iron rings are the standard for sweet service. F5 chrome-moly rings handle moderate elevated temperature. F304 and F316 stainless rings cover stainless service. Inconel 718 rings cover severe sour and HPHT applications.</p>
      <h2 className="font-display text-3xl font-bold text-ink">Where API 6A Lives</h2>
      <p className="text-lg text-gray-700 leading-relaxed">Wellhead and christmas tree service is primary. Blowout preventer top flanges interface to 6A. Frac trees for hydraulic fracturing run at 10M or 15M class. Choke and kill manifolds are 6A. Surface flowlines downstream of the wellhead stay in 6A flange territory until the working pressure falls below 2500 PSI and the standard transitions to ASME B16.5.</p>
    </div></section>
    <CtaBand />
  </>);
}
