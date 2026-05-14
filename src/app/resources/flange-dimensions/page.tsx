import Link from "next/link";
export const metadata = { title: "Weld Neck Dimensions Reference | ASME B16.5 and B16.47", description: "Reference dimensions for ASME B16.5 and B16.47 weld neck flanges. OD, bolt circle, bolt count, hub length, hub diameter, bore by class and size." };
export default function FlangeDimensionsPage() {
  return (<>
    <section className="bg-[#1B1F23] text-white py-20 px-4"><div className="max-w-4xl mx-auto"><Link href="/resources" className="text-gray-400 hover:text-[#0D9488] text-sm mb-6 inline-block">&larr; Resources</Link><h1 className="font-display text-5xl font-bold mb-6 text-white">Weld Neck Dimensions</h1><p className="text-xl text-gray-300 leading-relaxed max-w-3xl">Dimensional families covered, the dimensions that drive quoting, and where to find the detailed tables.</p></div></section>
    <section className="bg-cream py-16 px-4"><div className="max-w-4xl mx-auto prose-content space-y-6">
      <h2 className="font-display text-3xl font-bold text-ink">Dimensions That Matter for Weld Neck</h2>
      <p className="text-lg text-gray-700 leading-relaxed">Beyond the standard bolt-pattern dimensions (OD, BC, bolt count, bolt hole size), weld neck flanges have hub-specific dimensions that the order needs to specify:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li><strong>Outside diameter (OD)</strong>: across the flange face. Drives bolt circle and clearance.</li>
        <li><strong>Bolt circle (BC)</strong>: diameter through bolt hole centers.</li>
        <li><strong>Bolt count and diameter</strong>: how many bolts and what size.</li>
        <li><strong>Flange thickness (t)</strong>: from back face to raised face transition.</li>
        <li><strong>Hub length (Y)</strong>: from back face to small end of hub.</li>
        <li><strong>Hub diameter at small end (A)</strong>: at the weld bevel.</li>
        <li><strong>Hub diameter at face end (X)</strong>: at the flange face.</li>
        <li><strong>Bore (B)</strong>: matched to mating pipe schedule.</li>
        <li><strong>Weld bevel</strong>: angle and root face matched to pipe wall thickness.</li>
      </ul>
      <h2 className="font-display text-3xl font-bold text-ink">ASME B16.5</h2>
      <p className="text-lg text-gray-700 leading-relaxed">B16.5 covers weld neck and other flange types in nominal pipe sizes 1/2 inch through 24 inch in pressure classes 150, 300, 400, 600, 900, 1500, and 2500. Each type-class-size combination has tabulated dimensional values.</p>
      <h2 className="font-display text-3xl font-bold text-ink">ASME B16.47</h2>
      <p className="text-lg text-gray-700 leading-relaxed">B16.47 covers 26 inch through 60 inch in Series A and Series B. Series A is the heavier MSS-style pattern. Series B is the lighter API 605 pattern. The two series are not interchangeable.</p>
      <h2 className="font-display text-3xl font-bold text-ink">Detailed Tables</h2>
      <p className="text-lg text-gray-700 leading-relaxed">For the full ASME B16.5 and B16.47 dimensional tables, see the parent dimensional library at <a href="https://www.texasflange.com/products/flange-dims-weights/ansi-b16-5-forged-flanges/?ref=weldneckflanges-new" target="_blank" rel="noopener" className="text-[#0D9488] font-semibold">texasflange.com/products/flange-dims-weights</a>. Tables are organized by class with weld neck dimensions and hub geometry called out per size.</p>
      <p className="text-lg text-gray-700 leading-relaxed">For a specific dimension or to verify a tolerance, call <a href="tel:2814848325">(281) 484-8325</a> with the line spec.</p>
    </div></section>
    <section className="bg-[#0D9488] py-16 px-4 text-white text-center"><div className="max-w-3xl mx-auto"><h2 className="font-display text-4xl mb-6">Dimensional Question?</h2><Link href="/contact" className="inline-block bg-white text-[#0D9488] px-8 py-4 rounded font-semibold hover:bg-[#F8F6F0] transition">Send the Spec</Link></div></section>
  </>);
}
