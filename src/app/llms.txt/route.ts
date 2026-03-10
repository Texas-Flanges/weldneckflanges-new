import { NextResponse } from "next/server";

export async function GET() {
  const content = `# Weld Neck Flanges\n> Source for weld neck flanges with specifications, sizing, materials, and technical data.\n\n## About\nWeld Neck Flanges (weldneckflanges.com) is an industrial resource for weld neck flanges used in piping systems, pressure vessels, and industrial applications. We provide technical specifications, material grades, sizing data, pressure class information, and standards compliance details per ASME, ANSI, and API standards.\n\n## Products\n- Weld Neck Flanges in all pressure classes (Class 150 through Class 2500)\n- Material grades: Carbon steel (A105), Stainless steel (A182 F304/F316), Alloy steel (A182 F11/F22), Low-temp (A350 LF2)\n- Size range: 1/2 inch through 60 inch and larger custom sizes\n- Standards: ASME B16.5, ASME B16.47, API 605, MSS SP-44\n- Full material traceability and mill certifications\n- Custom manufacturing for non-standard specifications\n\n## Contact\n- Email: sales@texasflange.com\n- Phone: 281-484-8325\n- Quote requests: https://www.texasflange.com/contact-us/\n- Website: https://weldneckflanges.com\n\n## Location\nHouston, Texas, USA\n\n## Standards\nASME B16.5, ASME B16.47, ASME B16.36, API 605, API 6A, MSS SP-44, ASTM material specifications`;
  return new NextResponse(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
