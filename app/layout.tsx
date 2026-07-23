import type { Metadata } from "next";
import { Bodoni_Moda, Inter } from "next/font/google";
import "./globals.css";
const serif = Bodoni_Moda({ variable: "--serif", subsets: ["latin"], weight: ["400","500","700"], style: ["normal","italic"] });
const sans = Inter({ variable: "--sans", subsets: ["latin"] });
export const metadata: Metadata = { title: "Atelier Noir — Form Follows Feeling", description: "Independent Paris fashion house." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${serif.variable} ${sans.variable}`}>{children}</body></html>; }
