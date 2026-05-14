import Link from "next/link";
export const metadata = { title: "Materials | Carbon, Stainless, Alloy, Hastelloy", description: "Material grade reference for weld neck pipe flanges. Carbon, stainless, chrome-moly, Hastelloy, Inconel, Incoloy, Monel, duplex grades." };
export default function MaterialsHub() {
  const mats = [
    { href: "/materials/carbon-steel", title: "Carbon Steel", body: "A105, A350 LF2 / LF3, A516-70, A36, A694 F42 through F70. The default material family for industrial pressure service.", grades: ["A105", "A350 LF2", "A516-70", "A694 F60"] },
    { href: "/materials/stainless-steel", title: "Stainless Steel", body: "F304, F304L, F316, F316L, F321, F347, 904L, Alloy 20. Corrosion resistance, high-temperature, and process service.", grades: ["F304L", "F316L", "F321", "F347"] },
    { href: "/materials/alloy-steel", title: "Alloy Steel", body: "Chrome-moly F1, F5, F9, F11, F22, F91, F92 for elevated temperature service. A350 LF3 for low-temperature carbon-nickel.", grades: ["F11", "F22", "F91", "F92"] },
    { href: "/materials/hastelloy", title: "Hastelloy & Exotic", body: "Hastelloy C-276, C-22, B-2 plus Inconel, Incoloy, Monel, duplex, and titanium. The most corrosive service applications.", grades: ["C-276", "C-22", "Inc 625", "Monel 400"] }
  ];
  return (<>
    <section className="bg-[#1B1F23] text-white py-20 px-4"><div className="max-w-4xl mx-auto"><p className="uppercase tracking-widest text-[#0D9488] text-sm mb-3">Material Reference</p><h1 className="font-display text-5xl font-bold mb-6 text-white">Grades We Stock and Supply</h1><p className="text-xl text-gray-300 leading-relaxed max-w-3xl">Forty plus alloy grades. Pressure, temperature, corrosion, sour service, and low-temperature toughness all flow from the chemistry and the heat treatment.</p></div></section>
    <section className="bg-cream py-16 px-4"><div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">{mats.map((m) => (<Link key={m.href} href={m.href} className="block bg-white border border-gray-200 rounded p-8 hover:border-[#0D9488] hover:shadow-md transition"><h2 className="font-display text-2xl font-bold text-[#1B1F23] mb-3">{m.title}</h2><p className="text-gray-700 leading-relaxed mb-4">{m.body}</p><div className="flex flex-wrap gap-2">{m.grades.map((g) => <span key={g} className="text-xs bg-[#F8F6F0] text-[#1B1F23] px-3 py-1 rounded-full font-semibold">{g}</span>)}</div></Link>))}</div></section>
    <section className="bg-[#0D9488] py-16 px-4 text-white text-center"><div className="max-w-3xl mx-auto"><h2 className="font-display text-4xl mb-6">Specific Grade Question?</h2><Link href="/contact" className="inline-block bg-white text-[#0D9488] px-8 py-4 rounded font-semibold hover:bg-[#F8F6F0] transition">Request Quote</Link></div></section>
  </>);
}
