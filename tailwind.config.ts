import type { Config } from "tailwindcss";
const config: Config = { content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"], theme: { extend: { colors: { ink: "#1B1F23", cream: "#F8F6F0", teal: "#0D9488" }, fontFamily: { display: ["Playfair Display", "serif"], body: ["Inter", "sans-serif"] } } }, plugins: [] };
export default config;
