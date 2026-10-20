import Link from "next/link";
export const metadata = { title: "Industries We Supply", description: "Weld neck pipe flange supply across twelve core industries from oil and gas wellhead through municipal waterworks." };
const industries = [
  { slug: "oil-gas", name: "Oil & Gas", line: "API 6A 6BX wellhead. MSS SP-44 pipeline. ASME process. NACE sour service." },
  { slug: "petrochemical", name: "Petrochemical", line: "ASME B16.5 and B16.47. Chrome-moly F22 and F91. Hastelloy on aggressive process." },
  { slug: "power-generation", name: "Power Generation", line: "F91 and F92 main steam. F347 austenitic. AWWA on raw water intake." },
  { slug: "waterworks", name: "Water & Wastewater", line: "AWWA C207 Class B, D, E, F. Class 125LW lightweight. AIS-compliant on EPA SRF." },
  { slug: "chemical-processing", name: "Chemical Processing", line: "Hastelloy C-276 and C-22. Inconel 625. Duplex 2205. Titanium for bleach." },
  { slug: "mining", name: "Mining & Minerals", line: "Slurry service. Duplex 2205 lined. Heavy plate ring flanges for tailings." },
  { slug: "pulp-paper", name: "Pulp & Paper", line: "Titanium grade 2 for bleach plant. F316L stock prep. Hastelloy chlorination." },
  { slug: "food-beverage", name: "Food & Beverage", line: "Sanitary F316L. Electropolish finish. USDA-approved on product contact." },
  { slug: "agriculture", name: "Agriculture", line: "AWWA C207 transmission. Carbon mainline. USDA-funded AIS lightweight." },
  { slug: "hvac", name: "HVAC & Mechanical", line: "Class 125LW chilled water. ASME B16.5 steam. Campus distribution." },
  { slug: "marine", name: "Marine & Shipbuilding", line: "Monel 400 seawater. 70/30 and 90/10 copper-nickel cooling. Class society approval." },
  { slug: "data-centers", name: "Data Centers", line: "ASME B16.5 chilled water. F316L humidification. BABA on federal builds." }
];
export default function IndustriesHub() {
  return (<>
    <section className="bg-[#1B1F23] text-white py-20 px-4"><div className="max-w-4xl mx-auto"><p className="uppercase tracking-widest text-[#0D9488] text-sm mb-3">Sectors We Serve</p><h1 className="font-display text-5xl font-bold mb-6 text-white">From Wellhead to Treatment Plant</h1><p className="text-xl text-gray-300 leading-relaxed max-w-3xl">Weld neck pipe flange supply across twelve core industries. Different services, different standards, same construction type at the through-line.</p></div></section>
    <section className="bg-cream py-16 px-4"><div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">{industries.map((i) => (<Link key={i.slug} href={`/industries/${i.slug}`} className="block bg-white border border-gray-200 rounded p-5 hover:border-[#0D9488] hover:shadow-md transition"><h2 className="font-display text-xl font-bold text-[#1B1F23] mb-2">{i.name}</h2><p className="text-gray-700 text-sm leading-relaxed">{i.line}</p></Link>))}</div></section>
    <section className="bg-[#0D9488] py-16 px-4 text-white text-center"><div className="max-w-3xl mx-auto"><h2 className="font-display text-4xl mb-6">Industry-Specific Spec?</h2><Link href="/contact" className="inline-block bg-white text-[#0D9488] px-8 py-4 rounded font-semibold hover:bg-[#F8F6F0] transition">Request Quote</Link></div></section>
  </>);
}
