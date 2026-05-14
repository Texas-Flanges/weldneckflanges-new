import Link from "next/link";
export const metadata = { title: "About Weld Neck Flanges", description: "A Houston-area specialist in tapered-hub forged and plate-cut weld neck pipe flanges across the full pressure spectrum from lightweight Class 125LW through API 6A 20000 PSI." };
export default function AboutPage() {
  return (<>
    <section className="bg-[#1B1F23] text-white py-20 px-4"><div className="max-w-4xl mx-auto">
      <p className="uppercase tracking-wider text-[#0D9488] text-sm mb-3">About Weld Neck Flanges</p>
      <h1 className="text-5xl font-display font-bold mb-6 text-white">The Weld Neck Specialist</h1>
      <p className="text-xl text-gray-300 leading-relaxed">This is a focused supply operation. One flange construction type, every pressure class, every material grade, every standard. The tapered hub and matched weld bevel that define a weld neck flange are the through-line, and the pressure ratings, dimensional families, and metallurgy build outward from that.</p>
    </div></section>
    <section className="bg-cream py-16 px-4"><div className="max-w-4xl mx-auto prose-content">
      <h2 className="text-3xl font-display font-bold mb-6 text-ink">Why Weld Neck</h2>
      <p className="text-lg text-gray-700 mb-6 leading-relaxed">Most flange suppliers carry every construction type and treat them as interchangeable line items. They are not. Slip-on saves on installation cost in low-pressure service. Lap joint allows rotational alignment for awkward bolt-up. Socket weld and threaded handle small-bore high-pressure where butt welding is impractical. But for any line where the pressure, temperature, cycle count, or vibration profile reaches industrial-grade severity, the weld neck construction is the qualified product. The tapered hub distributes bolt-up load into the pipe wall, the matched weld bevel allows full-penetration butt welding with radiographic acceptance, and the forged grain orientation runs continuously through the joint.</p>
      <p className="text-lg text-gray-700 mb-6 leading-relaxed">This site exists to be the deep reference for weld neck supply specifically. The metallurgy, the dimensional standards, the pressure classes, the gasket selection, and the documentation chain all live here. When a project office or an engineer needs to spec a weld neck flange and have the supply chain match, this is the resource.</p>

      <h2 className="text-3xl font-display font-bold mb-6 mt-12 text-ink">Pressure Range</h2>
      <p className="text-lg text-gray-700 mb-6 leading-relaxed">The weld neck construction itself scales further than most engineers realize. At the low end, Class 125LW lightweight weld neck flanges (designed on the ANSI B16.1 cast iron bolt pattern but built from steel plate) handle waterworks and HVAC service at working pressures of 150 to 175 psi. AWWA C207 extends the lightweight family up to 300 psi at Class F. ASME B16.5 picks up the standard catalog from Class 150 (285 psi at 100 degrees F for A105 carbon) through Class 2500 (6170 psi). ASME B16.47 covers the same pressure classes at large diameter from 26 inch through 60 inch. MSS SP-44 governs pipeline weld necks matched to API 5L X-grade pipe. And API 6A and 6BX cover wellhead service from 2000 PSI through 25000 PSI. One construction type. Every operating envelope.</p>

      <h2 className="text-3xl font-display font-bold mb-6 mt-12 text-ink">Materials</h2>
      <p className="text-lg text-gray-700 mb-6 leading-relaxed">The material grade is matched to the service, not preloaded into inventory and forced into every order. Carbon steel A105 covers general process. A350 LF2 and LF3 cover low-temperature service. A516-70 plate covers blind and ring flanges in pressure service. A694 high-yield carbon matches API 5L X-grade pipeline pipe. Chrome-moly F11 through F91 covers elevated temperature service from intermediate hot oil to power plant main steam. Stainless F304L and F316L cover corrosion resistance. Specialty alloys cover the specific corrosion environments where stainless fails: Hastelloy B-2, C-276, C-22 for acid and chloride; Inconel 600, 625, 718 for high-temperature and oxidizing service; Incoloy 800 for sulfide stress; Monel 400 for seawater; duplex 2205 and super duplex 2507 for moderate-to-severe chloride; titanium grade 2 for bleach plant. The material library is the depth.</p>

      <h2 className="text-3xl font-display font-bold mb-6 mt-12 text-ink">Documentation</h2>
      <p className="text-lg text-gray-700 mb-6 leading-relaxed">Every weld neck flange ships with a mill test report traceable to the heat number. EN 10204 3.1 and 3.2 certificates are available. NACE MR0175 hardness reports ship on sour service heats. Charpy impact reports ship on low-temperature grades. Domestic-melt MTRs are available for projects with BAA, BABA, or AIS compliance requirements. The paperwork chain is part of what the order buys.</p>

      <h2 className="text-3xl font-display font-bold mb-6 mt-12 text-ink">How We Work</h2>
      <p className="text-lg text-gray-700 leading-relaxed">Send the dimension, the pressure class, the material grade, the facing, and any project documentation requirements. The quote with stock confirmation, lead time, and documentation scope returns the same business day. Call <a href="tel:2814848325">(281) 484-8325</a> or email <a href="mailto:sales@texasflange.com">sales@texasflange.com</a>.</p>
    </div></section>
    <section className="bg-[#0D9488] py-16 px-4 text-white text-center"><div className="max-w-3xl mx-auto"><h2 className="font-display text-4xl mb-6">Ready to Send a Spec?</h2><Link href="/contact" className="inline-block bg-white text-[#0D9488] px-8 py-4 rounded font-semibold hover:bg-[#F8F6F0] transition">Request a Quote</Link></div></section>
  </>);
}
