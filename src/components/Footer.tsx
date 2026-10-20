import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-[#1B1F23] text-gray-300 py-12 px-4 border-t border-[#B45309]/30">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div className="col-span-2">
          <p className="text-white font-display text-2xl mb-3">WELD<span className="text-[#B45309]">NECK</span></p>
          <p className="text-gray-300 leading-relaxed max-w-md">Engineered weld neck pipe flange supply across the full pressure spectrum. Lightweight Class 125LW through API 6A 20000 PSI. Carbon, stainless, alloy, and exotic nickel alloys.</p>
          <p className="text-gray-400 text-xs mt-4">PO Box 2889, Pearland, TX 77588</p>
        </div>
        <div>
          <p className="text-white font-semibold mb-3 uppercase tracking-wide text-xs">Catalog</p>
          <ul className="space-y-2">
            <li><Link href="/products/weld-neck" className="text-gray-300 hover:text-[#B45309]">Weld Neck Flanges</Link></li>
            <li><Link href="/products/blind-flanges" className="text-gray-300 hover:text-[#B45309]">Blind Flanges</Link></li>
            <li><Link href="/products/lightweight-flanges" className="text-gray-300 hover:text-[#B45309]">Lightweight Flanges</Link></li>
            <li><Link href="/products/custom-machining" className="text-gray-300 hover:text-[#B45309]">Custom Machining</Link></li>
            <li><Link href="/materials/hastelloy" className="text-gray-300 hover:text-[#B45309]">Hastelloy</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-white font-semibold mb-3 uppercase tracking-wide text-xs">Contact</p>
          <ul className="space-y-2">
            <li><a href="tel:2814848325" className="text-gray-300 hover:text-[#B45309]">(281) 484-8325</a></li>
            <li><a href="mailto:sales@texasflange.com" className="text-gray-300 hover:text-[#B45309]">sales@texasflange.com</a></li>
            <li className="text-gray-400">Mon-Fri, 8 AM-5 PM CST</li>
            <li><Link href="/contact" className="text-gray-300 hover:text-[#B45309]">Request Quote</Link></li>
            <li><Link href="/privacy-policy" className="text-gray-300 hover:text-[#B45309]">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-700 text-xs text-gray-400">&copy; {new Date().getFullYear()} Weld Neck Flanges. All rights reserved.</div>
    </footer>
  );
}
