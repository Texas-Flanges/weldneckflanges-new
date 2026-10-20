import CtaBand from "@/components/CtaBand";
import Link from "next/link";
export const metadata = { title: "Technical Specifications | Material Grade Quick Reference", description: "Quick reference for weld neck flange technical specifications. Material grade summary, NACE hardness limits, charpy impact requirements, API 6A material classes." };
export default function TechnicalSpecsPage() {
  return (<>
    <section className="bg-[#1B1F23] text-white py-20 px-4"><div className="max-w-4xl mx-auto"><Link href="/resources" className="text-gray-400 hover:text-[#B45309] text-sm mb-6 inline-block">&larr; Resources</Link><h1 className="font-display text-5xl font-bold mb-6 text-white">Technical Specifications</h1><p className="text-xl text-gray-300 leading-relaxed max-w-3xl">Quick reference for the technical decisions that drive weld neck flange selection. Material grade summary, NACE hardness, impact testing, API 6A material classes.</p></div></section>
    <section className="bg-cream py-16 px-4"><div className="max-w-5xl mx-auto">
      <h2 className="font-display text-3xl font-bold text-ink mb-6">Material Grade Quick Reference</h2>
      <div className="overflow-x-auto mb-12">
        <table className="w-full text-sm border-collapse">
          <thead><tr className="bg-[#1B1F23] text-white"><th className="text-left p-3">Grade</th><th className="text-left p-3">Type</th><th className="text-left p-3">Min Yield</th><th className="text-left p-3">Min Tensile</th><th className="text-left p-3">Typical Use</th></tr></thead>
          <tbody className="text-gray-700">
            <tr className="border-b bg-white"><td className="p-3 font-mono">A105</td><td className="p-3">Forged carbon</td><td className="p-3">36 ksi</td><td className="p-3">70 ksi</td><td className="p-3">General pressure</td></tr>
            <tr className="border-b"><td className="p-3 font-mono">A350 LF2</td><td className="p-3">Carbon impact</td><td className="p-3">36 ksi</td><td className="p-3">70 ksi</td><td className="p-3">Low temp -50 F</td></tr>
            <tr className="border-b bg-white"><td className="p-3 font-mono">A694 F60</td><td className="p-3">High-yield carbon</td><td className="p-3">60 ksi</td><td className="p-3">75 ksi</td><td className="p-3">Pipeline X60 mate</td></tr>
            <tr className="border-b"><td className="p-3 font-mono">F304L</td><td className="p-3">Austenitic stainless</td><td className="p-3">25 ksi</td><td className="p-3">70 ksi</td><td className="p-3">General corrosion</td></tr>
            <tr className="border-b bg-white"><td className="p-3 font-mono">F316L</td><td className="p-3">Mo stainless</td><td className="p-3">25 ksi</td><td className="p-3">70 ksi</td><td className="p-3">Chloride resistance</td></tr>
            <tr className="border-b"><td className="p-3 font-mono">F22</td><td className="p-3">2.25 Cr 1 Mo</td><td className="p-3">30 ksi</td><td className="p-3">75 ksi</td><td className="p-3">Hot service to 1100 F</td></tr>
            <tr className="border-b bg-white"><td className="p-3 font-mono">F91</td><td className="p-3">9 Cr 1 Mo V Nb</td><td className="p-3">60 ksi</td><td className="p-3">85 ksi</td><td className="p-3">Power main steam</td></tr>
            <tr className="border-b"><td className="p-3 font-mono">C-276</td><td className="p-3">Hastelloy nickel</td><td className="p-3">41 ksi</td><td className="p-3">100 ksi</td><td className="p-3">Chloride and acid corrosion</td></tr>
            <tr className="border-b bg-white"><td className="p-3 font-mono">Inc 625</td><td className="p-3">Ni-Cr-Mo</td><td className="p-3">60 ksi</td><td className="p-3">120 ksi</td><td className="p-3">FGD and acid service</td></tr>
            <tr className="border-b"><td className="p-3 font-mono">2205</td><td className="p-3">Duplex SS</td><td className="p-3">65 ksi</td><td className="p-3">90 ksi</td><td className="p-3">Chloride pitting</td></tr>
            <tr className="bg-white"><td className="p-3 font-mono">A516-70</td><td className="p-3">Pressure plate</td><td className="p-3">38 ksi</td><td className="p-3">70 ksi</td><td className="p-3">Blind and ring</td></tr>
          </tbody>
        </table>
      </div>
      <h2 className="font-display text-3xl font-bold text-ink mb-6">API 6A Material Class Summary</h2>
      <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-12">
        <li><strong>AA, BB</strong>: standard service. AA general, BB with charpy impact for low temperature.</li>
        <li><strong>CC, DD</strong>: NACE MR0175 sour service. Controlled hardness and chemistry.</li>
        <li><strong>EE</strong>: sour service plus higher strength plus low temperature.</li>
        <li><strong>FF, HH</strong>: severe sour service with the most restrictive chemistry and hardness limits.</li>
      </ul>
      <h2 className="font-display text-3xl font-bold text-ink mb-6">NACE Hardness Limits</h2>
      <p className="text-gray-700 leading-relaxed mb-4">For wet H2S service per NACE MR0175 / ISO 15156:</p>
      <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-12">
        <li>Carbon and low alloy steels: 22 HRC (about 248 HV) maximum</li>
        <li>F22 and F91 alloy: per supplementary annex, typically 22 HRC max post-PWHT</li>
        <li>F304L and F316L stainless: 22 HRC maximum plus ferrite content limits</li>
        <li>Duplex 2205 and 2507: 28 HRC maximum, separate annex</li>
        <li>Nickel alloys (C-276, Inconel 625): typically 35 HRC max, see specific NACE annex</li>
      </ul>
      <h2 className="font-display text-3xl font-bold text-ink mb-6">Charpy Impact</h2>
      <p className="text-gray-700 leading-relaxed">Common test temperatures and minimum absorbed energy: A350 LF2 at -50 F, 13 ft-lb min avg. A350 LF3 at -150 F, 15 ft-lb min. A694 F60 at -20 F, 20 ft-lb min. API 6A class EE typically tested at -50 F or lower with project-specific energy requirements.</p>
    </div></section>
    <CtaBand />
  </>);
}
