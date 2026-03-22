import Image from "next/image";
import { FadeInSection } from "./FadeInSection";

const villes = [
  "Nîmes",
  "Uzès",
  "Alès",
  "Bagnols-sur-Cèze",
  "Le Grau-du-Roi",
  "Beaucaire",
  "Saint-Gilles",
  "Marguerittes",
  "Bouillargues",
];

export function ZoneIntervention() {
  return (
    <section className="bg-surface-container-lowest py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeInSection>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Cities */}
            <div>
              <h2 className="mb-8 font-heading text-4xl font-extrabold text-primary lg:text-5xl">
                Zone d&apos;intervention
              </h2>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {villes.map((v) => (
                  <div key={v} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-secondary-container" />
                    <span className="text-sm font-medium text-on-surface">{v}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-on-surface-variant">
                Et toutes les communes du Gard (30) dans un rayon de 50 km autour de Nîmes.
              </p>
            </div>

            {/* Map */}
            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <Image
                  src="/images/carte-gard.svg"
                  alt="Carte du Gard - Zone d'intervention"
                  width={600}
                  height={500}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="absolute -top-4 right-4 rounded-2xl bg-secondary-container px-5 py-3 shadow-xl">
                <p className="text-sm font-bold text-white">Interventions Express</p>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
