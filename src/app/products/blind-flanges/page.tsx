import Link from "next/link";
export const metadata = { title: "Blind Flanges | ASME, API, AWWA Forged and Plate-Cut", description: "Blind flanges for line termination, test points, and future tie-ins. Forged A105 through Class 2500 and plate-cut A516-70 for large diameter. API 6A blind flanges with RTJ facings." };
export default function BlindFlangesPage() {
  return (<>
    <section className="bg-[#1B1F23] text-white py-20 px-4"><div className="max-w-4xl mx-auto">
      <Link href="/products" className="text-gray-400 hover:text-[#0D9488] text-sm mb-6 inline-block">&larr; Products</Link>
      <h1 className="font-display text-5xl font-bold mb-6 text-white">Blind Flanges</h1>
      <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">The solid disc companion to the weld neck. Caps line ends, test points, and future tie-ins. Forged carbon through Class 2500, plate-cut A516-70 above 24 inch, and full API 6A coverage for wellhead service.</p>
    </div></section>
    <section className="bg-cream py-16 px-4"><div className="max-w-4xl mx-auto prose-content space-y-6">
      <h2 className="font-display text-3xl font-bold text-ink">What a Blind Flange Does</h2>
      <p className="text-lg text-gray-700 leading-relaxed">A blind flange is a solid disc with the same outside diameter, bolt circle, bolt count, and bolt diameter as the mating flange family. It bolts up to the mating weld neck or slip-on flange face with a gasket between them, sealing the end of the line. Common applications include the dead-end of a header, a future tie-in for downstream expansion, a hydrostatic test point during commissioning, and a line cap for maintenance isolation.</p>
      <h2 className="font-display text-3xl font-bold text-ink">Construction Methods</h2>
      <p className="text-lg text-gray-700 leading-relaxed">For ASME B16.5 sizes (1/2 inch through 24 inch) and most B16.47 sizes through 36 inch, the standard construction is forged from billet. The forged blind carries the same grain orientation benefits as a forged weld neck and matches the catalog mechanical and pressure-temperature ratings of the standard.</p>
      <p className="text-lg text-gray-700 leading-relaxed">Above 36 inch, plate-cut construction from A516-70 pressure-rated plate becomes the value path. The blind is cut from rolled plate, machined to the bolt pattern and facing of the mating standard, and shipped with the MTR on the base plate. AWWA C207 blind flanges at 144 inch and beyond are routine plate-cut work.</p>
      <h2 className="font-display text-3xl font-bold text-ink">API 6A Blind Flanges</h2>
      <p className="text-lg text-gray-700 leading-relaxed">For wellhead and pressure control service, API 6A blind flanges ship with R-series or BX-series ring grooves matched to the mating weld neck. Material class (AA through HH) and pressure class (2M through 25M) are specified on the order. NACE MR0175 compliance for sour service is supplied with hardness mapping on the machined disc.</p>
      <h2 className="font-display text-3xl font-bold text-ink">Lightweight Variant</h2>
      <p className="text-lg text-gray-700 leading-relaxed">Class 125LW lightweight blind flanges are plate-cut from A36 or A516-70 on the ANSI B16.1 Class 125 cast iron bolt pattern. Used to cap waterworks transmission mains, HVAC headers, and other moderate-pressure piping where the full ASME weight is overbuilt.</p>
    </div></section>
    <section className="bg-[#0D9488] py-16 px-4 text-white text-center"><div className="max-w-3xl mx-auto"><h2 className="font-display text-4xl mb-6">Blind Flange Order?</h2><Link href="/contact" className="inline-block bg-white text-[#0D9488] px-8 py-4 rounded font-semibold hover:bg-[#F8F6F0] transition">Request Quote</Link></div></section>
  </>);
}
