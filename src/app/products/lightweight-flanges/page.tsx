import Link from "next/link";
export const metadata = { title: "Lightweight Flanges | Class 125LW, AWWA C207", description: "Class 125LW lightweight steel pipe flanges on the ANSI B16.1 Class 125 cast iron bolt pattern. AWWA C207 Class B, D, E, F. Slip-on, blind, weld neck. 4 inch through 144 inch waterworks and HVAC service." };
export default function LightweightFlangesPage() {
  return (<>
    <section className="bg-[#1B1F23] text-white py-20 px-4"><div className="max-w-4xl mx-auto">
      <Link href="/products" className="text-gray-400 hover:text-[#0D9488] text-sm mb-6 inline-block">&larr; Products</Link>
      <h1 className="font-display text-5xl font-bold mb-6 text-white">Lightweight Flanges</h1>
      <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">Class 125LW reduced-weight steel flanges on the ANSI B16.1 Class 125 cast iron bolt pattern. AWWA C207 plate-cut weld neck, slip-on, and blind. Sizes 4 inch through 144 inch for waterworks, HVAC, and general industrial service.</p>
    </div></section>
    <section className="bg-cream py-16 px-4"><div className="max-w-4xl mx-auto prose-content space-y-6">
      <h2 className="font-display text-3xl font-bold text-ink">What Lightweight Means</h2>
      <p className="text-lg text-gray-700 leading-relaxed">Class 125LW is a steel flange that shares the dimensional family of ANSI B16.1 Class 125 cast iron: same outside diameter, same bolt circle, same bolt count, same bolt hole diameter. The difference is in the cross-section. A standard B16.1 Class 125 cast iron flange has a thick ring section to handle the brittle failure mode of cast iron. A 125LW steel flange uses a thinner ring section because steel is ductile and does not need the extra section to resist crack initiation. The result is a flange that fits the same bolt pattern, mates to the same hardware, and weighs significantly less.</p>
      <h2 className="font-display text-3xl font-bold text-ink">Why Replace Cast Iron with Lightweight Steel</h2>
      <p className="text-lg text-gray-700 leading-relaxed">Cast iron fails by cracking. A 1980s waterworks pump house with B16.1 Class 125 cast iron flanges in service for forty years has accumulated bolt-up overstress, thermal cycling, and impact damage. Replacement during shutdown windows is increasingly common, and the modern replacement is Class 125LW steel rather than another generation of cast iron. The bolt pattern is identical, so the replacement drops in to the existing piping without rework. The pressure rating is the same or better. The weight is lower, which reduces support structure load. And the failure mode shifts from brittle crack to ductile yield, which is forgiving rather than catastrophic.</p>
      <h2 className="font-display text-3xl font-bold text-ink">AWWA C207 Coverage</h2>
      <p className="text-lg text-gray-700 leading-relaxed">AWWA C207 governs steel pipe flanges for waterworks service in four pressure classes: Class B at 86 psi working pressure, Class D at 175 psi (the workhorse), Class E at 275 psi, and Class F at 300 psi. Sizes run 4 inch through 144 inch. All construction methods - slip-on, blind, weld neck - are available in each class. The standard provides bolt pattern tables that match common waterworks valve and pipe connection patterns.</p>
      <h2 className="font-display text-3xl font-bold text-ink">Plate-Cut Construction</h2>
      <p className="text-lg text-gray-700 leading-relaxed">Lightweight flanges in larger sizes are plate-cut from rolled A36 structural plate (for low-pressure service) or A516-70 pressure plate (for higher pressure or where pressure code applies). Bolt holes are CNC-drilled. Faces are machined to the specified finish. The MTR ships with the order traceable to the base plate heat number.</p>
      <h2 className="font-display text-3xl font-bold text-ink">Domestic Content</h2>
      <p className="text-lg text-gray-700 leading-relaxed">For EPA State Revolving Fund water and wastewater projects, USDA Rural Development water, and federal-aid highway work, AIS-compliant lightweight flanges are available with domestic-melt MTRs. The base plate is sourced from a confirmed domestic mill and the documentation chain runs unbroken through fabrication.</p>
    </div></section>
    <section className="bg-[#0D9488] py-16 px-4 text-white text-center"><div className="max-w-3xl mx-auto"><h2 className="font-display text-4xl mb-6">Waterworks or HVAC Project?</h2><Link href="/contact" className="inline-block bg-white text-[#0D9488] px-8 py-4 rounded font-semibold hover:bg-[#F8F6F0] transition">Request Quote</Link></div></section>
  </>);
}
