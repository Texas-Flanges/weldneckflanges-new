"use client";
import Link from "next/link";
import { useState } from "react";

import { QUOTE_URL } from "@/components/CtaBand";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="bg-[#1B1F23] text-white sticky top-0 z-50 border-b border-[#B45309]/40">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-white font-display text-2xl tracking-wide">
          WELD<span className="text-[#FDBA74]">NECK</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-1 text-sm">
          <NavDropdown label="Standards" items={[
            { href: "/standards/asme-flanges", label: "ASME B16.5 / B16.47" },
            { href: "/standards/api-flanges", label: "API 6A / 6BX" },
            { href: "/standards/awwa-flanges", label: "AWWA C207" },
            { href: "/standards/din-flanges", label: "DIN EN 1092-1" }
          ]} />
          <NavDropdown label="Materials" items={[
            { href: "/materials/carbon-steel", label: "Carbon Steel" },
            { href: "/materials/stainless-steel", label: "Stainless Steel" },
            { href: "/materials/alloy-steel", label: "Alloy Steel" },
            { href: "/materials/hastelloy", label: "Hastelloy & Exotic" }
          ]} />
          <NavDropdown label="Resources" items={[
            { href: "/resources/flange-dimensions", label: "Flange Dimensions" },
            { href: "/resources/rtj-gaskets", label: "RTJ Gasket Reference" },
            { href: "/resources/cad-drawings", label: "CAD Drawings" },
            { href: "/resources/technical-specs", label: "Technical Specs" },
            { href: "/tools", label: "Engineering Tools" }
          ]} />
          <Link href="/blog" className="px-3 py-2 hover:text-[#FDBA74] transition">Blog</Link>
          <a href={QUOTE_URL} className="hidden lg:inline-block bg-[#B45309] text-white px-4 py-2 rounded font-semibold text-sm hover:bg-[#92400E] transition ml-2">Request a Quote</a>
        </nav>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white p-2" aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      {mobileOpen && (
        <div className="lg:hidden bg-[#1B1F23] border-t border-[#B45309]/30 px-4 py-4">
          <div className="flex flex-col gap-1 text-sm">
            <Link href="/standards" className="py-2 text-white hover:text-[#FDBA74]" onClick={() => setMobileOpen(false)}>Standards</Link>
            <Link href="/materials" className="py-2 text-white hover:text-[#FDBA74]" onClick={() => setMobileOpen(false)}>Materials</Link>
            <Link href="/resources" className="py-2 text-white hover:text-[#FDBA74]" onClick={() => setMobileOpen(false)}>Resources</Link>
            <Link href="/tools" className="py-2 text-white hover:text-[#FDBA74]" onClick={() => setMobileOpen(false)}>Tools</Link>
            <Link href="/blog" className="py-2 text-white hover:text-[#FDBA74]" onClick={() => setMobileOpen(false)}>Blog</Link>
            <a href={QUOTE_URL} className="block py-2 bg-[#B45309] text-white text-center rounded mt-2" onClick={() => setMobileOpen(false)}>Request a Quote</a>
          </div>
        </div>
      )}
    </header>
  );
}

function NavDropdown({ label, items }: { label: string; items: { href: string; label: string }[] }) {
  return (
    <div className="relative group">
      <button className="px-3 py-2 hover:text-[#FDBA74] transition flex items-center gap-1">{label}
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M5.516 7.548L10 12.032l4.484-4.484 1.06 1.061L10 14.155 4.456 8.609z" /></svg>
      </button>
      <div className="absolute top-full left-0 hidden group-hover:block bg-white border border-gray-200 rounded shadow-lg min-w-[220px] py-2 z-50">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="block px-4 py-2 text-sm text-[#1B1F23] hover:bg-[#F8F6F0] hover:text-[#B45309] transition">{item.label}</Link>
        ))}
      </div>
    </div>
  );
}
