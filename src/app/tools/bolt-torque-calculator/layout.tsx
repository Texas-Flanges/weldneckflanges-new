import type { Metadata } from "next";
import { OG_IMAGE } from "@/lib/seo";

const TITLE = "Bolt Torque Calculator for B7 Studs | Weld Neck Flanges";
const DESCRIPTION = "Recommended torque values for ASTM A193 B7 studs on ASME B16.5 raised face weld neck flange connections. Starting reference values only.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, url: "./", images: [OG_IMAGE] }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
