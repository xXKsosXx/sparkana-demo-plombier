import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import EstimateurPrix from "@/components/EstimateurPrix";
import { Pourquoi } from "@/components/Pourquoi";
import { Galerie } from "@/components/Galerie";
import { Avis } from "@/components/Avis";
import { ZoneIntervention } from "@/components/ZoneIntervention";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <EstimateurPrix />
      <Pourquoi />
      <Galerie />
      <Avis />
      <ZoneIntervention />
      <Contact />
    </>
  );
}
