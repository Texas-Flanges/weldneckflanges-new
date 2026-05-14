import Link from "next/link";
export const metadata = { title: "AWWA C207 Weld Neck Flanges | Class B, D, E, F Waterworks", description: "AWWA C207 weld neck and slip-on steel pipe flanges for water and wastewater service. Class B (86 psi), D (175 psi), E (275 psi), F (300 psi). 4 inch through 144 inch." };
export default function AwwaPage() {
  return (<>
    <section className="bg-[#1B1F23] text-white py-20 px-4"><div className="max-w-4xl mx-auto"><Link href="/standards" className="text-gray-400 hover:text-[#0D9488] text-sm mb-6 inline-block">&larr; Standards</Link><h1 className="font-display text-5xl font-bold mb-6 text-white">AWWA C207</h1><p className="text-xl text-gray-300 max-w-3xl leading-relaxed">Steel pipe flanges for waterworks service. The default standard for transmission mains, treatment plant interconnects, and large diameter water and wastewater piping. Weld neck and slip-on construction.</p></div></section>
    <section className="bg-cream py-16 px-4"><div className="max-w-4xl mx-auto prose-content space-y-6">
      <h2 className="font-display text-3xl font-bold text-ink">Pressure Classes</h2>
      <ul className="list-disc pl-6 space-y-1 text-lg text-gray-700">
        <li><strong>Class B</strong>: 86 psi working pressure. Low-pressure water distribution.</li>
        <li><strong>Class D</strong>: 175 psi working pressure on sizes 4 to 12 inch, 150 psi above 12 inch. The waterworks workhorse.</li>
        <li><strong>Class E</strong>: 275 psi working pressure. High service and pump station piping.</li>
        <li><strong>Class F</strong>: 300 psi working pressure. The highest standard waterworks class.</li>
      </ul>
      <p className="text-lg text-gray-700 leading-relaxed">Working pressure is the static rating. Surge pressure (water hammer from pump trip or valve closure) is allowed up to 150 percent of working pressure for short duration. Project hydraulic analysis governs class selection.</p>
      <h2 className="font-display text-3xl font-bold text-ink">Construction</h2>
      <p className="text-lg text-gray-700 leading-relaxed">AWWA C207 flanges are plate-cut from rolled steel. Standard plate is ASTM A36 carbon steel for the structural classes and ASTM A516 Grade 70 where pressure-rated plate is specified. Plate thickness scales with flange diameter and class. Bolt circle dimensions and bolt count follow standard tables.</p>
      <p className="text-lg text-gray-700 leading-relaxed">Weld neck variants in AWWA service use a rolled or cast hub welded to the plate-cut flange face under full penetration weld with NDE. The hub provides the same stress-distribution benefit as standard ASME weld neck but at the larger diameters where forged construction is not practical.</p>
      <h2 className="font-display text-3xl font-bold text-ink">Sizes</h2>
      <p className="text-lg text-gray-700 leading-relaxed">The standard covers 4 inch through 144 inch nominal diameter. Custom diameters beyond 144 inch are routinely fabricated to project drawings using the same plate-cut process. Bolt patterns can be matched to the mating component on transmission projects.</p>
      <h2 className="font-display text-3xl font-bold text-ink">AIS Compliance</h2>
      <p className="text-lg text-gray-700 leading-relaxed">For EPA State Revolving Fund water and wastewater projects, plus USDA Rural Development water programs, American Iron and Steel compliance is the default requirement. AWWA C207 flanges fabricated from domestic-melt plate qualify when manufacturing stays within the United States. The compliance letter references the SRF program and the project number.</p>
    </div></section>
    <section className="bg-[#0D9488] py-16 px-4 text-white text-center"><div className="max-w-3xl mx-auto"><h2 className="font-display text-4xl mb-6">Waterworks Project?</h2><Link href="/contact" className="inline-block bg-white text-[#0D9488] px-8 py-4 rounded font-semibold hover:bg-[#F8F6F0] transition">Request Quote</Link></div></section>
  </>);
}
