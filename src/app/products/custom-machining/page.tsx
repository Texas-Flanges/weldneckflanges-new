import Link from "next/link";
export const metadata = { title: "Custom Flange Machining", description: "Custom weld neck flange machining: hubbed plate flanges, non-standard bores, special facings, RTJ groove retrofit, weld overlay, and hard facing. Material range from carbon through Hastelloy." };
export default function CustomMachiningPage() {
  return (<>
    <section className="bg-[#1B1F23] text-white py-20 px-4"><div className="max-w-4xl mx-auto">
      <Link href="/products" className="text-gray-400 hover:text-[#0D9488] text-sm mb-6 inline-block">&larr; Products</Link>
      <h1 className="font-display text-5xl font-bold mb-6 text-white">Custom Machining</h1>
      <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">When the catalog dimension does not fit the job. Hubbed plate weld neck flanges for the largest diameters, non-standard bores, special facings, RTJ groove retrofit, weld overlay, and hard facing. Domestic-melt material available across the work.</p>
    </div></section>
    <section className="bg-cream py-16 px-4"><div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
      {[
        { title: "Hubbed Plate Weld Necks", body: "For weld neck construction above 60 inch (beyond ASME B16.47), the hub is rolled from plate or cast separately and welded to the plate-cut flange face. Full penetration weld with 100 percent NDE. Used on AWWA transmission, large pressure vessels, and custom process equipment." },
        { title: "Bore Modifications", body: "Custom inside diameter for non-standard mating pipe schedules. Overbore for swage transitions. Counterbore for retrofit. Bore taper machined to the project drawing tolerance." },
        { title: "Special Facings", body: "RF, FF, RTJ, T&G, LMF, and custom facing geometries. Smooth turn finish, serrated phonographic, or spiral. The facing finish is matched to the gasket and the service spec." },
        { title: "RTJ Groove Retrofit", body: "Existing RF or FF weld neck flanges can be retrofitted with R-series or BX-series ring grooves for upgrade to higher pressure service. Existing flange dimensions verified by inspection before groove machining." },
        { title: "Weld Overlay", body: "Stainless or nickel-alloy overlay on carbon flange faces and bores for corrosion service. Inconel 625, Inconel 825, and 309L overlay procedures qualified per ASME Section IX. Used to extend service life on capital flanges in mildly corrosive environments without buying solid-alloy flanges." },
        { title: "Hard Facing", body: "Stellite 6 and Stellite 21 deposit on seat and disc surfaces. Used on RTJ groove walls in extreme service and on flange faces where galling and wear matter." },
        { title: "Custom Bolt Patterns", body: "Custom bolt circle diameter, bolt count, drift pin holes, and matched-set drilling. The flange and the mating component drilled together for field-fit alignment." },
        { title: "Reverse Engineering", body: "Existing flange to drawing for replacement, or drawing to flange for new fabrication. Dimensional inspection report against the project drawing with full traceability." }
      ].map((c) => (
        <div key={c.title} className="bg-white border border-gray-200 rounded p-6">
          <h2 className="font-display text-xl font-bold text-[#1B1F23] mb-3">{c.title}</h2>
          <p className="text-gray-700 leading-relaxed text-sm">{c.body}</p>
        </div>
      ))}
    </div></section>
    <section className="bg-[#0D9488] py-16 px-4 text-white text-center"><div className="max-w-3xl mx-auto"><h2 className="font-display text-4xl mb-6">Drawing Ready?</h2><Link href="/contact" className="inline-block bg-white text-[#0D9488] px-8 py-4 rounded font-semibold hover:bg-[#F8F6F0] transition">Request Quote</Link></div></section>
  </>);
}
