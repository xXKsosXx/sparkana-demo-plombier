import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Work_Sans } from "next/font/google";
import "./globals.css";
import { BarreUrgence } from "@/components/BarreUrgence";
import { Nav } from "@/components/Nav";
import { MobileNav } from "@/components/MobileNav";
import { Footer } from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fabre Plomberie & Chauffage | Plombier Chauffagiste Nîmes",
  description:
    "Artisan plombier chauffagiste à Nîmes, Gard. 20 ans d'expérience, urgences 24h/7j, RGE Qualibat. Plomberie, chauffage, climatisation, dépannage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${plusJakarta.variable} ${workSans.variable}`}>
      <body className="font-body antialiased">
        <BarreUrgence />
        <Nav />
        <main>{children}</main>
        <Footer />
        <MobileNav />
      </body>
    </html>
  );
}
