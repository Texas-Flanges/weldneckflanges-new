import Link from "next/link";
export const metadata = { title: "Products | Weld Neck, Blind, Lightweight, Custom", description: "Weld neck pipe flange product line. Standard ASME and API weld neck, blind flanges, Class 125LW lightweight, custom machining. Carbon through Hastelloy materials." };
export default function ProductsHub() {
  const products = [
    { href: "/products/weld-neck", title: "Weld Neck Flanges", body: "Standard tapered-hub forged weld neck flanges per ASME B16.5, B16.47, MSS SP-44, API 6A and 6BX. Class 150 through 25000 PSI. Carbon, stainless, alloy, exotic materials.", chips: ["ASME B16.5", "ASME B16.47", "API 6A / 6BX", "MSS SP-44"] },
    { href: "/products/blind-flanges", title: "Blind Flanges", body: "Solid disc flanges to cap line ends, test points, and future tie-ins. Same bolt pattern as the mating weld neck. Carbon A516-70 plate or forged from A105, F316L, alloy as needed.", chips: ["Class 150 to 2500", "API 6A", "Forged or plate-cut", "Lightweight option"] },
    { href: "/products/lightweight-flanges", title: "Lightweight Flanges", body: "Class 125LW lightweight steel weld neck and slip-on flanges on the ANSI B16.1 cast iron bolt pattern. AWWA C207 Class B, D, E, F. Waterworks and HVAC service.", chips: ["Class 125LW", "AWWA C207", "4 in to 144 in", "Plate-cut"] },
    { href: "/products/custom-machining", title: "Custom Machining", body: "Hubbed plate flanges, non-standard bores, special facings, RTJ groove retrofit, weld overlay, hard facing. When the catalog dimension does not fit the job.", chips: ["CNC turn / mill", "Bore mods", "RTJ retrofit", "Weld overlay"] }
  ];
  return (<>
    <section className="bg-[#1B1F23] text-white py-20 px-4"><div className="max-w-5xl mx-auto">
      <p className="uppercase tracking-widest text-[#0D9488] text-sm mb-3">Product Lines</p>
      <h1 className="font-display text-5xl font-bold mb-6 text-white">What We Supply</h1>
      <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">Four product categories built around weld neck construction. Every piece traceable to a mill heat, every order documented to the standard the project specifies.</p>
    </div></section>
    <section className="bg-cream py-16 px-4"><div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">{products.map((p) => (
      <Link key={p.href} href={p.href} className="block bg-white border border-gray-200 p-8 rounded-lg hover:border-[#0D9488] hover:shadow-md transition">
        <h2 className="font-display text-3xl font-bold text-[#1B1F23] mb-4">{p.title}</h2>
        <p className="text-gray-700 leading-relaxed mb-6">{p.body}</p>
        <ul className="flex flex-wrap gap-2 mb-4">{p.chips.map((c) => <li key={c} className="text-xs bg-[#F8F6F0] text-[#1B1F23] px-3 py-1 rounded-full font-semibold">{c}</li>)}</ul>
        <span className="text-[#0D9488] font-semibold">View Details &rarr;</span>
      </Link>))}</div></section>
    <section className="bg-[#0D9488] py-16 px-4 text-white text-center"><div className="max-w-3xl mx-auto"><h2 className="font-display text-4xl mb-4">Send a Spec, Not a Catalog Number</h2><p className="text-xl mb-8">We work from drawings, BOMs, or descriptions. Quote returns the same business day.</p><Link href="/contact" className="inline-block bg-white text-[#0D9488] px-8 py-4 rounded font-semibold hover:bg-[#F8F6F0] transition">Request Quote</Link></div></section>
  </>);
}
