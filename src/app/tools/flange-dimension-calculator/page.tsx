"use client";
import Link from "next/link";
import { useState } from "react";
const dims: Record<string, Record<string, { od: number; bc: number; bolts: number; boltDia: string }>> = {
  '150': { '2': { od: 6.0, bc: 4.75, bolts: 4, boltDia: '5/8' }, '4': { od: 9.0, bc: 7.5, bolts: 8, boltDia: '5/8' }, '6': { od: 11.0, bc: 9.5, bolts: 8, boltDia: '3/4' }, '8': { od: 13.5, bc: 11.75, bolts: 8, boltDia: '3/4' }, '10': { od: 16.0, bc: 14.25, bolts: 12, boltDia: '7/8' }, '12': { od: 19.0, bc: 17.0, bolts: 12, boltDia: '7/8' } },
  '300': { '2': { od: 6.5, bc: 5.0, bolts: 8, boltDia: '5/8' }, '4': { od: 10.0, bc: 7.875, bolts: 8, boltDia: '3/4' }, '6': { od: 12.5, bc: 10.625, bolts: 12, boltDia: '3/4' }, '8': { od: 15.0, bc: 13.0, bolts: 12, boltDia: '7/8' }, '10': { od: 17.5, bc: 15.25, bolts: 16, boltDia: '1' }, '12': { od: 20.5, bc: 17.75, bolts: 16, boltDia: '1-1/8' } },
  '600': { '2': { od: 6.5, bc: 5.0, bolts: 8, boltDia: '5/8' }, '4': { od: 10.75, bc: 8.5, bolts: 8, boltDia: '7/8' }, '6': { od: 14.0, bc: 11.5, bolts: 12, boltDia: '1' }, '8': { od: 16.5, bc: 13.75, bolts: 12, boltDia: '1-1/8' }, '10': { od: 20.0, bc: 17.0, bolts: 16, boltDia: '1-1/4' }, '12': { od: 22.0, bc: 19.25, bolts: 20, boltDia: '1-1/4' } }
};
export default function FlangeDimCalc() {
  const [cls, setCls] = useState('150');
  const [size, setSize] = useState('6');
  const d = dims[cls]?.[size];
  return (<>
    <section className="bg-[#1B1F23] text-white py-20 px-4"><div className="max-w-4xl mx-auto"><Link href="/tools" className="text-gray-400 hover:text-[#0D9488] text-sm mb-6 inline-block">&larr; Tools</Link><h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">Flange Dimension Lookup</h1><p className="text-xl text-gray-300 max-w-3xl leading-relaxed">ASME B16.5 weld neck dimensional reference for the most common pressure classes and sizes. OD, bolt circle, bolt count, and bolt diameter at a glance.</p></div></section>
    <section className="bg-cream py-16 px-4"><div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div><label className="block text-sm font-semibold text-[#1B1F23] mb-2">Pressure Class</label><select value={cls} onChange={(e) => setCls(e.target.value)} className="w-full border border-gray-300 rounded p-3 text-lg"><option value="150">Class 150</option><option value="300">Class 300</option><option value="600">Class 600</option></select></div>
        <div><label className="block text-sm font-semibold text-[#1B1F23] mb-2">NPS (inches)</label><select value={size} onChange={(e) => setSize(e.target.value)} className="w-full border border-gray-300 rounded p-3 text-lg">{Object.keys(dims[cls] || {}).map((k) => <option key={k} value={k}>{k}"</option>)}</select></div>
      </div>
      {d ? (
        <div className="bg-[#1B1F23] text-white p-8 rounded grid grid-cols-2 gap-4">
          <div><p className="uppercase tracking-wider text-[#0D9488] text-xs mb-1">Outside Diameter</p><p className="font-display text-3xl font-bold">{d.od}"</p></div>
          <div><p className="uppercase tracking-wider text-[#0D9488] text-xs mb-1">Bolt Circle</p><p className="font-display text-3xl font-bold">{d.bc}"</p></div>
          <div><p className="uppercase tracking-wider text-[#0D9488] text-xs mb-1">Bolt Count</p><p className="font-display text-3xl font-bold">{d.bolts}</p></div>
          <div><p className="uppercase tracking-wider text-[#0D9488] text-xs mb-1">Bolt Diameter</p><p className="font-display text-3xl font-bold">{d.boltDia}"</p></div>
        </div>
      ) : <p className="text-gray-600">No data for this combination.</p>}
      <p className="text-sm text-gray-600 mt-6 leading-relaxed">Reference values per ASME B16.5. For complete dimensional tables including flange thickness, hub geometry, and raised face dimensions, see the parent dimensional library or send the line spec for verification.</p>
    </div></section>
    <section className="bg-[#0D9488] py-16 px-4 text-white text-center"><div className="max-w-3xl mx-auto"><h2 className="font-display text-4xl mb-6">Need Dimensional Verification?</h2><Link href="/contact" className="inline-block bg-white text-[#0D9488] px-8 py-4 rounded font-semibold hover:bg-[#F8F6F0] transition">Send the Spec</Link></div></section>
  </>);
}
