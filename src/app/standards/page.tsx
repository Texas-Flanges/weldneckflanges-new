import Link from "next/link";
export const metadata = { title: "Standards | ASME, API, AWWA, DIN", description: "Reference for the major weld neck flange standards: ASME B16.5 and B16.47, API 6A and 6BX, AWWA C207, DIN EN 1092-1." };
export default function StandardsHub() {
  const std = [
    { href: "/standards/asme-flanges", code: "ASME B16.5 / B16.47", body: "Pipe flanges 1/2 to 24 inch in B16.5 and 26 to 60 inch in B16.47 Series A and B. Class 75 through 2500." },
    { href: "/standards/api-flanges", code: "API 6A / 6BX", body: "Wellhead and pressure-control. 2000 PSI through 25000 PSI. R and BX ring gaskets. Material classes AA through HH." },
    { href: "/standards/awwa-flanges", code: "AWWA C207", body: "Steel pipe flanges for waterworks. Class B, D, E, F from 86 to 300 psi working pressure. 4 to 144 inch." },
    { href: "/standards/din-flanges", code: "DIN EN 1092-1", body: "European metric weld neck flanges. PN 6 through PN 400. DN 10 through DN 4000. Types 11 and 12." }
  ];
  return (<>
    <section className="bg-[#1B1F23] text-white py-20 px-4"><div className="max-w-4xl mx-auto"><p className="uppercase tracking-widest text-[#B45309] text-sm mb-3">Standards Reference</p><h1 className="font-display text-5xl font-bold mb-6 text-white">Built to Code</h1><p className="text-xl text-gray-300 leading-relaxed max-w-3xl">Four major standards cover the majority of weld neck flange specification. Each governs different pressure regimes, dimensional families, and material chemistry.</p></div></section>
    <section className="bg-cream py-16 px-4"><div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">{std.map((s) => (<Link key={s.href} href={s.href} className="block bg-white border border-gray-200 rounded p-8 hover:border-[#B45309] hover:shadow-md transition"><p className="text-[#B45309] font-display text-2xl font-bold mb-3">{s.code}</p><p className="text-gray-700 leading-relaxed">{s.body}</p></Link>))}</div></section>
    <section className="bg-[#B45309] py-16 px-4 text-white text-center"><div className="max-w-3xl mx-auto"><h2 className="font-display text-4xl mb-6">Spec Standard Not Listed?</h2><Link href="/contact" className="inline-block bg-white text-[#B45309] px-8 py-4 rounded font-semibold hover:bg-[#F8F6F0] transition">Request Quote</Link></div></section>
  </>);
}
