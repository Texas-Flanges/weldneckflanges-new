import Link from "next/link";
export const metadata = { title: "DIN EN 1092-1 Weld Neck Flanges | Type 11 Metric", description: "DIN EN 1092-1 metric weld neck flanges. Type 11 weld neck. PN 6 through PN 400 pressure ratings. DN 10 through DN 4000 nominal sizes." };
export default function DinPage() {
  return (<>
    <section className="bg-[#1B1F23] text-white py-20 px-4"><div className="max-w-4xl mx-auto"><Link href="/standards" className="text-gray-400 hover:text-[#B45309] text-sm mb-6 inline-block">&larr; Standards</Link><h1 className="font-display text-5xl font-bold mb-6 text-white">DIN EN 1092-1</h1><p className="text-xl text-gray-300 max-w-3xl leading-relaxed">The European metric flange standard. Type 11 weld neck covers the bulk of metric piping system supply. PN 6 through PN 400. DN 10 through DN 4000.</p></div></section>
    <section className="bg-cream py-16 px-4"><div className="max-w-4xl mx-auto prose-content space-y-6">
      <h2 className="font-display text-3xl font-bold text-ink">PN Pressure Ratings</h2>
      <p className="text-lg text-gray-700 leading-relaxed">PN stands for Pressure Nominal, expressed in bar (1 bar approximately equals 14.5 psi). Standard PN ratings are 6, 10, 16, 25, 40, 63, 100, 160, 250, 320, and 400. The PN rating is a designator, not a working pressure. Actual working pressure at temperature follows P-T tables in the standard.</p>
      <h2 className="font-display text-3xl font-bold text-ink">DN Sizes</h2>
      <p className="text-lg text-gray-700 leading-relaxed">DN stands for Diameter Nominal, expressed in millimeters. Common sizes run from DN 10 (3/8 inch nominal) through DN 4000 (158 inch nominal). DN does not directly equal outside diameter; it is a nominal designator tied to dimensional tables.</p>
      <h2 className="font-display text-3xl font-bold text-ink">Type 11 Weld Neck</h2>
      <p className="text-lg text-gray-700 leading-relaxed">Type 11 is the metric weld neck flange. The hub geometry is similar to ASME B16.5 weld neck but the dimensions follow the metric standard. Hub length, hub diameter, bore, and weld bevel are specified per DIN. The flange face is typically Type B1 raised face unless the project drawing specifies otherwise.</p>
      <h2 className="font-display text-3xl font-bold text-ink">ASME vs DIN Compatibility</h2>
      <p className="text-lg text-gray-700 leading-relaxed">ASME and DIN flanges are not directly interchangeable. The outside diameter, bolt circle, bolt count, and bolt size all differ. Adapter spools or transition flanges bridge the two systems where ASME process equipment connects to DIN piping. Confirm the project standard explicitly and check the mating component drawing before ordering.</p>
      <h2 className="font-display text-3xl font-bold text-ink">Facing Designators</h2>
      <p className="text-lg text-gray-700 leading-relaxed">Type A (flat face), Type B1 (small raised face), Type B2 (raised face with serrations), Type C (tongue and groove), Type D (recess), Type E (spigot), Type F (small male and female), Type G (large male and female), Type H (tongue), Type I (groove). Type B1 is the default for standard pressure service.</p>
    </div></section>
    <section className="bg-[#B45309] py-16 px-4 text-white text-center"><div className="max-w-3xl mx-auto"><h2 className="font-display text-4xl mb-6">Metric Weld Neck Project?</h2><Link href="/contact" className="inline-block bg-white text-[#B45309] px-8 py-4 rounded font-semibold hover:bg-[#F8F6F0] transition">Request Quote</Link></div></section>
  </>);
}
