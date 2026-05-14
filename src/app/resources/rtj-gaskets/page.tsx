import Link from "next/link";
export const metadata = { title: "RTJ Ring Gasket Reference | R-Series and BX-Series", description: "Ring-type joint gasket reference for ASME and API 6A weld neck flanges. R-series (oval and octagonal) and BX-series ring gasket dimensions, materials, and flange groove matching." };
export default function RtjGasketsPage() {
  return (<>
    <section className="bg-[#1B1F23] text-white py-20 px-4"><div className="max-w-4xl mx-auto"><Link href="/resources" className="text-gray-400 hover:text-[#0D9488] text-sm mb-6 inline-block">&larr; Resources</Link><h1 className="font-display text-5xl font-bold mb-6 text-white">RTJ Ring Gasket Reference</h1><p className="text-xl text-gray-300 leading-relaxed max-w-3xl">Ring-type joint gaskets seal weld neck flanges by metal-to-metal compression in a machined groove. The R-series covers ASME and API 6B class flanges. The BX-series covers API 6BX high-pressure flanges with self-energizing geometry.</p></div></section>
    <section className="bg-cream py-16 px-4"><div className="max-w-4xl mx-auto prose-content space-y-6">
      <h2 className="font-display text-3xl font-bold text-ink">How RTJ Sealing Works</h2>
      <p className="text-lg text-gray-700 leading-relaxed">A ring-type joint flange has a precision-machined groove in the flange face. The ring gasket (a solid metal ring with a specific cross-section profile) sits in the groove. When the mating flanges are bolted together, the bolt-up force compresses the ring against the groove walls until the metal deforms slightly and creates a continuous line contact seal around the entire flange. The result is a metal-to-metal seal with no soft sealing material - critical for high-temperature service where elastomers fail and for high-pressure service where extrusion of soft gasket material is a leak path.</p>
      <h2 className="font-display text-3xl font-bold text-ink">R-Series Rings</h2>
      <p className="text-lg text-gray-700 leading-relaxed">R-series ring gaskets are designated R-x where x is a numeric size identifier. Common sizes run from R-11 (small bore) through R-94 (24 inch). R-series rings come in oval and octagonal cross-section. Oval was the original profile; octagonal is the modern preference because it seats more reliably under varying bolt-up torque and groove tolerance.</p>
      <p className="text-lg text-gray-700 leading-relaxed">R-series rings mate to ASME B16.5 RTJ flanges Class 150 through 2500 and API 6A 6B class flanges (2M, 3M, 5M). The flange order should specify the ring groove designation (R-x), and the ring order should match.</p>
      <h2 className="font-display text-3xl font-bold text-ink">BX-Series Rings</h2>
      <p className="text-lg text-gray-700 leading-relaxed">BX-series ring gaskets are designated BX-x where x is a numeric size identifier. Common sizes include BX-150 through BX-303. BX rings have a rectangular cross-section with relieved corners and a deliberate angle on the contact face that causes the ring to self-energize: internal pressure pushes the ring outward against the groove wall, increasing seal force as pressure rises.</p>
      <p className="text-lg text-gray-700 leading-relaxed">BX rings mate to API 6BX class flanges (10M, 15M, 20M, 25M). They are not interchangeable with R-series rings. The flange groove geometry is different, and mating an R ring to a BX groove (or vice versa) is a service failure mode.</p>
      <h2 className="font-display text-3xl font-bold text-ink">Ring Materials</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li><strong>Soft iron / low-carbon steel</strong>: standard for sweet service. Most common ring material.</li>
        <li><strong>F5 chrome-moly</strong>: moderate elevated temperature service.</li>
        <li><strong>F304 / F316 stainless</strong>: corrosion service and standby applications.</li>
        <li><strong>Inconel 718 / Inconel 625</strong>: severe sour service and HPHT applications.</li>
        <li><strong>Monel 400</strong>: seawater and hydrofluoric acid service.</li>
      </ul>
      <p className="text-lg text-gray-700 leading-relaxed">Ring material is matched to service environment and to the mating flange material. The flange + ring assembly is ordered together to ensure compatibility.</p>
    </div></section>
    <section className="bg-[#0D9488] py-16 px-4 text-white text-center"><div className="max-w-3xl mx-auto"><h2 className="font-display text-4xl mb-6">Flange + Ring Package?</h2><Link href="/contact" className="inline-block bg-white text-[#0D9488] px-8 py-4 rounded font-semibold hover:bg-[#F8F6F0] transition">Request Quote</Link></div></section>
  </>);
}
