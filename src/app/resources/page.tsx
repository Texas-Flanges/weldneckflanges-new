import CtaBand from "@/components/CtaBand";
import Link from "next/link";
export const metadata = { title: "Engineering Resources | Dimensions, RTJ Gaskets, CAD, Tech Specs", description: "Engineering reference for weld neck pipe flanges: ASME B16.5 and B16.47 dimensional tables, RTJ ring gasket reference, CAD drawings, technical specifications." };
export default function ResourcesHub() {
  const r = [
    { href: "/resources/flange-dimensions", title: "Flange Dimensions", body: "ASME B16.5 and B16.47 dimensional reference for weld neck flanges. OD, bolt circle, bolt count, hub geometry by class." },
    { href: "/resources/rtj-gaskets", title: "RTJ Gasket Reference", body: "R-series and BX-series ring gasket dimensions, material options, and matching flange groove designations." },
    { href: "/resources/cad-drawings", title: "CAD Drawings", body: "Weld neck flange CAD drawings in DWG, DXF, STEP, and IGES. Direct links to the parent dimensional library." },
    { href: "/resources/technical-specs", title: "Technical Specs", body: "Material grade quick reference, pressure-temperature data, NACE hardness limits, charpy impact requirements." },
    { href: "/tools", title: "Engineering Tools", body: "Bolt torque, flange dimension lookup, and pressure-temperature rating calculators." }
  ];
  return (<>
    <section className="bg-[#1B1F23] text-white py-20 px-4"><div className="max-w-4xl mx-auto"><p className="uppercase tracking-widest text-[#B45309] text-sm mb-3">Reference</p><h1 className="font-display text-5xl font-bold mb-6 text-white">Engineering Resources</h1><p className="text-xl text-gray-300 leading-relaxed max-w-3xl">Dimensional tables, gasket reference, CAD libraries, and calculators. The reference content that gets a weld neck order from spec to ship without surprises.</p></div></section>
    <section className="bg-cream py-16 px-4"><div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">{r.map((x) => (<Link key={x.href} href={x.href} className="block bg-white border border-gray-200 rounded p-6 hover:border-[#B45309] hover:shadow-md transition"><h2 className="font-display text-xl font-bold text-[#1B1F23] mb-2">{x.title}</h2><p className="text-gray-700 leading-relaxed text-sm">{x.body}</p></Link>))}</div></section>
    <CtaBand />
  </>);
}
