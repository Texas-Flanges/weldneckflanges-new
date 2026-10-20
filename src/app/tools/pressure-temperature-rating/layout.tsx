import type { Metadata } from "next";
import { OG_IMAGE } from "@/lib/seo";

const TITLE = "Pressure-Temperature Rating (ASME B16.5) | Weld Neck Flanges";
const DESCRIPTION = "ASME B16.5 working pressure ratings as a function of material, class, and service temperature, for matching a weld neck flange to a line spec.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, url: "./", images: [OG_IMAGE] }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
