import Link from "next/link";
export const metadata = { title: "Weld Neck Flanges | ASME, API, MSS SP-44 Forged", description: "Tapered-hub forged weld neck pipe flanges across the full pressure spectrum. ASME B16.5 Class 150 to 2500, B16.47 large diameter, MSS SP-44 pipeline, API 6A and 6BX wellhead 2K to 25K." };
export default function WeldNeckPage() {
  return (<>
    <section className="bg-[#1B1F23] text-white py-20 px-4"><div className="max-w-4xl mx-auto">
      <Link href="/products" className="text-gray-400 hover:text-[#0D9488] text-sm mb-6 inline-block">&larr; Products</Link>
      <h1 className="font-display text-5xl font-bold mb-6 text-white">Weld Neck Flanges</h1>
      <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">The standard product. Tapered hub, matched weld bevel, forged from billet through Class 2500, machined and tested to the dimensional standard the project specifies.</p>
    </div></section>
    <section className="bg-cream py-16 px-4"><div className="max-w-5xl mx-auto">
      <h2 className="font-display text-3xl font-bold text-[#1B1F23] mb-6">Pressure Class Coverage</h2>
      <div className="space-y-4 mb-12">
        <div className="bg-white border-l-4 border-[#0D9488] p-6">
          <h3 className="font-display text-xl font-bold text-[#1B1F23] mb-2">ASME B16.5 Class 150 to 2500</h3>
          <p className="text-gray-700 leading-relaxed">Catalog sizes 1/2 inch through 24 inch. Standard plant process workhorse. All five facing types (RF, FF, RTJ, T&G, LMF) available. Pressure-temperature ratings tabulated by material grade in the standard.</p>
        </div>
        <div className="bg-white border-l-4 border-[#0D9488] p-6">
          <h3 className="font-display text-xl font-bold text-[#1B1F23] mb-2">ASME B16.47 Series A and B</h3>
          <p className="text-gray-700 leading-relaxed">Large diameter weld neck flanges 26 inch through 60 inch. Series A heavier MSS SP-44 pattern. Series B lighter API 605 pattern. Series A and B are not interchangeable; the project drawing names which.</p>
        </div>
        <div className="bg-white border-l-4 border-[#0D9488] p-6">
          <h3 className="font-display text-xl font-bold text-[#1B1F23] mb-2">MSS SP-44 Pipeline</h3>
          <p className="text-gray-700 leading-relaxed">Pipeline weld neck flanges matched to API 5L X-grade pipe. A694 forged carbon in grades F42, F46, F48, F50, F52, F56, F60, F65, F70. Class 600 through 2500 covers the high-pressure transmission service envelope.</p>
        </div>
        <div className="bg-white border-l-4 border-[#0D9488] p-6">
          <h3 className="font-display text-xl font-bold text-[#1B1F23] mb-2">API 6A 6B Series (2M, 3M, 5M)</h3>
          <p className="text-gray-700 leading-relaxed">Wellhead and pressure control weld necks 2000, 3000, and 5000 PSI working pressure. R-series ring gaskets (oval or octagonal). Material classes AA, BB, CC, DD per API 6A material class system.</p>
        </div>
        <div className="bg-white border-l-4 border-[#0D9488] p-6">
          <h3 className="font-display text-xl font-bold text-[#1B1F23] mb-2">API 6BX Series (10M to 25M)</h3>
          <p className="text-gray-700 leading-relaxed">High pressure wellhead and frac tree weld necks 10000, 15000, 20000, and 25000 PSI. BX-series ring gaskets with self-energizing geometry. Sour service classes DD, EE, FF, HH for H2S environments.</p>
        </div>
      </div>
      <h2 className="font-display text-3xl font-bold text-[#1B1F23] mb-6">Standard Configurations</h2>
      <p className="text-gray-700 leading-relaxed mb-6">Hub length, bore taper, and weld bevel dimensions all follow the governing standard. Bore is matched to the mating pipe schedule. Custom bores, special bevels, and counterbore conditions are available as custom machining work.</p>
      <h2 className="font-display text-3xl font-bold text-[#1B1F23] mb-6">Materials</h2>
      <p className="text-gray-700 leading-relaxed">Full carbon, stainless, chrome-moly, and exotic alloy range. See <Link href="/materials" className="text-[#0D9488] font-semibold">Materials</Link> for the complete grade table.</p>
    </div></section>
    <section className="bg-[#0D9488] py-16 px-4 text-white text-center"><div className="max-w-3xl mx-auto"><h2 className="font-display text-4xl mb-6">Weld Neck Spec in Hand?</h2><Link href="/contact" className="inline-block bg-white text-[#0D9488] px-8 py-4 rounded font-semibold hover:bg-[#F8F6F0] transition">Request Quote</Link></div></section>
  </>);
}
