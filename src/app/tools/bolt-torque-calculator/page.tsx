"use client";
import Link from "next/link";
import { useState } from "react";
const data: Record<string, { dry: number; lubed: number }> = {
  '1/2': { dry: 75, lubed: 50 }, '5/8': { dry: 150, lubed: 100 }, '3/4': { dry: 260, lubed: 175 },
  '7/8': { dry: 420, lubed: 280 }, '1': { dry: 625, lubed: 420 }, '1-1/8': { dry: 900, lubed: 600 },
  '1-1/4': { dry: 1275, lubed: 850 }, '1-3/8': { dry: 1675, lubed: 1115 }, '1-1/2': { dry: 2175, lubed: 1450 },
  '1-5/8': { dry: 2750, lubed: 1830 }, '1-3/4': { dry: 3425, lubed: 2280 }, '2': { dry: 5125, lubed: 3415 }
};
export default function BoltTorqueCalc() {
  const [size, setSize] = useState('1');
  const [lube, setLube] = useState<'dry'|'lubed'>('lubed');
  const val = data[size];
  return (<>
    <section className="bg-[#1B1F23] text-white py-20 px-4"><div className="max-w-4xl mx-auto"><Link href="/tools" className="text-gray-400 hover:text-[#B45309] text-sm mb-6 inline-block">&larr; Tools</Link><h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">Bolt Torque Calculator</h1><p className="text-xl text-gray-300 max-w-3xl leading-relaxed">Recommended torque values for ASTM A193 B7 studs on ASME B16.5 raised face weld neck flange connections. Starting reference values. Final torque should follow gasket manufacturer and project bolt-up procedure.</p></div></section>
    <section className="bg-cream py-16 px-4"><div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div><label className="block text-sm font-semibold text-[#1B1F23] mb-2">Stud Size (inches)</label><select value={size} onChange={(e) => setSize(e.target.value)} className="w-full border border-gray-300 rounded p-3 text-lg">{Object.keys(data).map((k) => <option key={k} value={k}>{k}"</option>)}</select></div>
        <div><label className="block text-sm font-semibold text-[#1B1F23] mb-2">Lubrication</label><select value={lube} onChange={(e) => setLube(e.target.value as 'dry'|'lubed')} className="w-full border border-gray-300 rounded p-3 text-lg"><option value="lubed">Lubricated (anti-seize)</option><option value="dry">Dry / unlubricated</option></select></div>
      </div>
      <div className="bg-[#1B1F23] text-white p-8 rounded text-center"><p className="uppercase tracking-wider text-[#B45309] text-sm mb-2">Recommended Torque</p><p className="font-display text-5xl font-bold">{val[lube]} ft-lb</p><p className="text-gray-400 text-sm mt-4">B7 stud, {size}" diameter, {lube === 'lubed' ? 'lubricated threads' : 'unlubricated threads'}</p></div>
      <p className="text-sm text-gray-600 mt-6 leading-relaxed">Values reference target preload around 50 percent of yield for B7 studs on spiral-wound graphite gaskets. For RTJ gaskets, fire-safe service, or non-standard gasket materials, refer to the gasket manufacturer data sheet. Torque to 30 percent, 60 percent, then 100 percent in a cross pattern.</p>
    </div></section>
    <section className="bg-[#B45309] py-16 px-4 text-white text-center"><div className="max-w-3xl mx-auto"><h2 className="font-display text-4xl mb-6">Need Studs and Gaskets?</h2><Link href="/contact" className="inline-block bg-white text-[#B45309] px-8 py-4 rounded font-semibold hover:bg-[#F8F6F0] transition">Request Quote</Link></div></section>
  </>);
}
