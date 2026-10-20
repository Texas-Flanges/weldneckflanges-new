import Link from "next/link";
import { QUOTE_URL } from "@/components/CtaBand";

export default function Footer() {
  return (
    <footer className="bg-[#1B1F23] text-gray-300 py-12 px-4 border-t border-[#B45309]/30">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div className="col-span-2">
          <p className="text-white font-display text-2xl mb-3">WELD<span className="text-[#FDBA74]">NECK</span></p>
          <p className="text-gray-300 leading-relaxed max-w-md">How weld neck flanges work, where they&apos;re used and how to spec them, from Class 125LW lightweight through API 6A 20000 PSI.</p>
        </div>
        <div>
          <p className="text-white font-semibold mb-3 uppercase tracking-wide text-xs">Reference</p>
          <ul className="space-y-2">
            <li><Link href="/standards" className="text-gray-300 hover:text-[#FDBA74]">Standards</Link></li>
            <li><Link href="/materials" className="text-gray-300 hover:text-[#FDBA74]">Materials</Link></li>
            <li><Link href="/resources/flange-dimensions" className="text-gray-300 hover:text-[#FDBA74]">Flange Dimensions</Link></li>
            <li><Link href="/tools" className="text-gray-300 hover:text-[#FDBA74]">Engineering Tools</Link></li>
            <li><Link href="/blog" className="text-gray-300 hover:text-[#FDBA74]">Blog</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-white font-semibold mb-3 uppercase tracking-wide text-xs">Contact</p>
          <ul className="space-y-2">
            <li><a href="tel:+1-281-484-8325" className="text-gray-300 hover:text-[#FDBA74]">281-484-8325</a></li>
            <li><a href="mailto:sales@texasflange.com" className="text-gray-300 hover:text-[#FDBA74]">sales@texasflange.com</a></li>
            <li><a href={QUOTE_URL} className="text-gray-300 hover:text-[#FDBA74]">Request a Quote</a></li>
            <li><a href="https://texasflange.com/?ref=weldneckflanges" className="text-gray-300 hover:text-[#FDBA74]">Texas Flange</a></li>
            <li><Link href="/privacy-policy" className="text-gray-300 hover:text-[#FDBA74]">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-700 text-xs text-gray-400">&copy; {new Date().getFullYear()} Weld Neck Flanges. All rights reserved.</div>
    </footer>
  );
}
