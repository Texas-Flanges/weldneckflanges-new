"use client";
import CtaBand from "@/components/CtaBand";
import Link from "next/link";
import { useState } from "react";
const pt: Record<string, Record<string, Record<number, number>>> = {
  'A105': { '150': { 100: 285, 200: 260, 400: 200, 600: 140, 800: 80 }, '300': { 100: 740, 200: 675, 400: 635, 600: 550, 800: 410 }, '600': { 100: 1480, 200: 1350, 400: 1270, 600: 1095, 800: 825 } },
  'F304L': { '150': { 100: 230, 200: 195, 400: 170, 600: 140, 800: 115 }, '300': { 100: 600, 200: 510, 400: 440, 600: 365, 800: 305 }, '600': { 100: 1200, 200: 1015, 400: 880, 600: 730, 800: 605 } },
  'F316L': { '150': { 100: 230, 200: 195, 400: 170, 600: 140, 800: 115 }, '300': { 100: 600, 200: 510, 400: 445, 600: 370, 800: 320 }, '600': { 100: 1200, 200: 1025, 400: 885, 600: 745, 800: 640 } }
};
export default function PTRatingCalc() {
  const [mat, setMat] = useState('A105');
  const [cls, setCls] = useState('150');
  const [temp, setTemp] = useState(100);
  const rating = pt[mat]?.[cls]?.[temp];
  return (<>
    <section className="bg-[#1B1F23] text-white py-20 px-4"><div className="max-w-4xl mx-auto"><Link href="/tools" className="text-gray-400 hover:text-[#B45309] text-sm mb-6 inline-block">&larr; Tools</Link><h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">Pressure-Temperature Rating</h1><p className="text-xl text-gray-300 max-w-3xl leading-relaxed">ASME B16.5 working pressure ratings as a function of material, class, and service temperature. The numbers that matter when matching a weld neck flange to a line spec.</p></div></section>
    <section className="bg-cream py-16 px-4"><div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div><label className="block text-sm font-semibold text-[#1B1F23] mb-2">Material</label><select value={mat} onChange={(e) => setMat(e.target.value)} className="w-full border border-gray-300 rounded p-3"><option value="A105">A105</option><option value="F304L">F304L</option><option value="F316L">F316L</option></select></div>
        <div><label className="block text-sm font-semibold text-[#1B1F23] mb-2">Class</label><select value={cls} onChange={(e) => setCls(e.target.value)} className="w-full border border-gray-300 rounded p-3"><option value="150">Class 150</option><option value="300">Class 300</option><option value="600">Class 600</option></select></div>
        <div><label className="block text-sm font-semibold text-[#1B1F23] mb-2">Temp (°F)</label><select value={temp} onChange={(e) => setTemp(parseInt(e.target.value))} className="w-full border border-gray-300 rounded p-3">{[100, 200, 400, 600, 800].map((t) => <option key={t} value={t}>{t}°F</option>)}</select></div>
      </div>
      <div className="bg-[#1B1F23] text-white p-8 rounded text-center"><p className="uppercase tracking-wider text-[#B45309] text-sm mb-2">Max Working Pressure</p><p className="font-display text-5xl font-bold">{rating ?? 'N/A'} psig</p><p className="text-gray-400 text-sm mt-4">{mat}, Class {cls}, at {temp}°F</p></div>
      <p className="text-sm text-gray-600 mt-6 leading-relaxed">Reference values per ASME B16.5. Actual project ratings should be verified against the full P-T table for the specific material grade and design temperature. NACE, low-temperature impact, and sour service may impose additional limits.</p>
    </div></section>
    <CtaBand />
  </>);
}
