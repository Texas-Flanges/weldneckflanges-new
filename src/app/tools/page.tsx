import CtaBand from "@/components/CtaBand";
import Link from "next/link";
export const metadata = { title: "Engineering Tools | Bolt Torque, Dimensions, P-T Rating", description: "Engineering calculators for weld neck pipe flange specification: bolt torque, dimension lookup, and ASME B16.5 pressure-temperature rating." };
export default function ToolsHub() {
  const tools = [
    { href: "/tools/bolt-torque-calculator", title: "Bolt Torque Calculator", body: "B7 stud torque values by stud diameter and lubrication. Reference for ASME bolt-up procedure." },
    { href: "/tools/flange-dimension-calculator", title: "Flange Dimension Lookup", body: "ASME B16.5 OD, bolt circle, bolt count by class and size. Weld neck quick reference for quoting." },
    { href: "/tools/pressure-temperature-rating", title: "Pressure-Temperature Rating", body: "ASME B16.5 P-T values for common materials. Class 150 through 600." }
  ];
  return (<>
    <section className="bg-[#1B1F23] text-white py-20 px-4"><div className="max-w-4xl mx-auto"><p className="uppercase tracking-widest text-[#B45309] text-sm mb-3">Calculators</p><h1 className="font-display text-5xl font-bold mb-6 text-white">Engineering Tools</h1><p className="text-xl text-gray-300 leading-relaxed max-w-3xl">Quick calculators for the dimensional and mechanical decisions that come up when quoting and installing weld neck flanges. Source values are ASME standard reference data.</p></div></section>
    <section className="bg-cream py-16 px-4"><div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">{tools.map((t) => (<Link key={t.href} href={t.href} className="block bg-white border border-gray-200 rounded p-6 hover:border-[#B45309] hover:shadow-md transition"><h2 className="font-display text-xl font-bold text-[#1B1F23] mb-3">{t.title}</h2><p className="text-gray-700 leading-relaxed text-sm">{t.body}</p></Link>))}</div></section>
    <CtaBand />
  </>);
}
