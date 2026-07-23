import type { Metadata } from "next";
import { Bodoni_Moda, Inter, Prata } from "next/font/google";
import "./globals.css";
const serif = Bodoni_Moda({ variable: "--serif", subsets: ["latin"], weight: ["400","500","700"], style: ["normal","italic"] });
const sans = Inter({ variable: "--sans", subsets: ["latin","cyrillic"] });
const serifRu = Prata({ variable: "--serif-ru", subsets: ["latin","cyrillic"], weight: "400" });
export const metadata: Metadata = { title: "Atelier Noir — Form Follows Feeling", description: "Independent Paris fashion house." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${serif.variable} ${sans.variable} ${serifRu.variable}`}>{children}</body></html>; }
