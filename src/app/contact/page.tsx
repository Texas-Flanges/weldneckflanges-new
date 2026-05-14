import type { Metadata } from "next";
export const metadata: Metadata = { title: "Contact", description: "Contact Weld Neck Flanges for tapered-hub forged and plate-cut weld neck pipe flange supply. (281) 484-8325 / sales@texasflange.com / PO Box 2889, Pearland, TX 77588." };
export default function ContactPage() {
  return (<>
    <section className="bg-[#1B1F23] text-white py-20 px-4"><div className="max-w-4xl mx-auto">
      <p className="uppercase tracking-widest text-[#0D9488] text-sm mb-3">Contact</p>
      <h1 className="font-display text-5xl font-bold mb-6 text-white">Send a Weld Neck Spec</h1>
      <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">Tell us the size, pressure class, material grade, and facing. The quote returns the same business day with stock confirmation, lead time, and documentation scope.</p>
    </div></section>
    <section className="bg-cream py-16 px-4"><div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
      <div><h2 className="font-display text-3xl font-bold text-[#1B1F23] mb-6">Direct Contact</h2><div className="space-y-6">
        <div><p className="uppercase text-xs tracking-wider text-gray-500 mb-1">Phone</p><a href="tel:2814848325" className="text-2xl text-ink font-semibold hover:text-[#0D9488]">(281) 484-8325</a></div>
        <div><p className="uppercase text-xs tracking-wider text-gray-500 mb-1">Email</p><a href="mailto:sales@texasflange.com" className="text-xl text-ink font-semibold hover:text-[#0D9488]">sales@texasflange.com</a></div>
        <div><p className="uppercase text-xs tracking-wider text-gray-500 mb-1">Hours</p><p className="text-lg text-ink">Monday through Friday<br />8 AM to 5 PM Central</p></div>
        <div><p className="uppercase text-xs tracking-wider text-gray-500 mb-1">Mailing Address</p><p className="text-lg text-ink">PO Box 2889<br />Pearland, TX 77588</p></div>
      </div></div>
      <div className="bg-white border border-gray-200 rounded p-8"><h2 className="font-display text-2xl font-bold text-[#1B1F23] mb-4">What to Send in Your First Email</h2><ul className="space-y-3 text-gray-700">
        <li className="flex gap-3"><span className="text-[#0D9488] font-bold">1.</span><span>Size and pressure class (NPS plus ASME class, AWWA class, or API 6A/6BX class).</span></li>
        <li className="flex gap-3"><span className="text-[#0D9488] font-bold">2.</span><span>Material grade (A105, F316L, F22, Hastelloy C-276, etc).</span></li>
        <li className="flex gap-3"><span className="text-[#0D9488] font-bold">3.</span><span>Facing (RF, FF, RTJ, T&G, LMF) and gasket type if API 6A.</span></li>
        <li className="flex gap-3"><span className="text-[#0D9488] font-bold">4.</span><span>Quantity and any phasing.</span></li>
        <li className="flex gap-3"><span className="text-[#0D9488] font-bold">5.</span><span>Documentation requirements: MTR EN 10204 3.1 or 3.2, NACE, charpy impact temperature, domestic melt if applicable.</span></li>
      </ul><p className="text-sm text-gray-600 mt-6 leading-relaxed">Drawings, BOMs, or copies of project specification language all help.</p></div>
    </div></section>
  </>);
}
