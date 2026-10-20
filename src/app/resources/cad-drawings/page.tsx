import CtaBand from "@/components/CtaBand";
import Link from "next/link";
export const metadata = { title: "Weld Neck CAD Drawings | DWG, DXF, STEP, IGES", description: "Weld neck flange CAD drawings in DWG, DXF, STEP, and IGES. Direct download from the parent dimensional library covers ASME B16.5, B16.47, and AWWA C207." };
export default function CadDrawingsPage() {
  return (<>
    <section className="bg-[#1B1F23] text-white py-20 px-4"><div className="max-w-4xl mx-auto"><Link href="/resources" className="text-gray-400 hover:text-[#B45309] text-sm mb-6 inline-block">&larr; Resources</Link><h1 className="font-display text-5xl font-bold mb-6 text-white">Weld Neck CAD Drawings</h1><p className="text-xl text-gray-300 leading-relaxed max-w-3xl">Pre-built CAD drawings for the standard weld neck dimensional family. DWG, DXF, STEP, and IGES formats for direct use in engineering layout work.</p></div></section>
    <section className="bg-cream py-16 px-4"><div className="max-w-4xl mx-auto prose-content space-y-6">
      <h2 className="font-display text-3xl font-bold text-ink">What Is Available</h2>
      <p className="text-lg text-gray-700 leading-relaxed">The parent dimensional library has CAD drawings for ASME B16.5 weld neck flanges across every size and pressure class, plus selected B16.47 large diameter, AWWA C207 waterworks weld neck, and API 6A wellhead service. Files download as DWG, DXF, STEP, and IGES depending on type.</p>
      <h2 className="font-display text-3xl font-bold text-ink">Direct Links</h2>
      <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
        <li><a href="https://texasflange.com/cad-3d-flange-drawings/?ref=weldneckflanges" target="_blank" rel="noopener" className="text-[#B45309] font-semibold">CAD library main page</a></li>
        <li><a href="https://texasflange.com/weld-neck-flanges/?ref=weldneckflanges" target="_blank" rel="noopener" className="text-[#B45309] font-semibold">Weld neck flange drawings</a></li>
        <li><a href="https://texasflange.com/blind-flanges/?ref=weldneckflanges" target="_blank" rel="noopener" className="text-[#B45309] font-semibold">Blind flange drawings</a></li>
        <li><a href="https://texasflange.com/slip-on-flanges/?ref=weldneckflanges" target="_blank" rel="noopener" className="text-[#B45309] font-semibold">Slip-on flange drawings</a></li>
        <li><a href="https://texasflange.com/lap-joint-flanges/?ref=weldneckflanges" target="_blank" rel="noopener" className="text-[#B45309] font-semibold">Lap joint flange drawings</a></li>
      </ul>
      <h2 className="font-display text-3xl font-bold text-ink">Custom Drawing Requests</h2>
      <p className="text-lg text-gray-700 leading-relaxed">Custom weld neck dimensions, hubbed plate weld necks, weld overlay configurations, and non-standard bolt patterns are drawn to order. Send the dimensions to <a href="mailto:sales@texasflange.com">sales@texasflange.com</a> or call <a href="tel:+1-281-484-8325">281-484-8325</a>.</p>
    </div></section>
    <CtaBand />
  </>);
}
