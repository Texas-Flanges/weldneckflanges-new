import type { Metadata } from "next";
import { OG_IMAGE } from "@/lib/seo";

const TITLE = "Flange Dimension Lookup (ASME B16.5) | Weld Neck Flanges";
const DESCRIPTION = "ASME B16.5 weld neck dimensional reference for the most common pressure classes and sizes. OD, bolt circle, bolt count, and bolt diameter at a glance.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, url: "./", images: [OG_IMAGE] }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
