import Image from "next/image";
import { FadeInSection } from "./FadeInSection";

const realisations = [
  { src: "/images/salle-bain.png", label: "Rénovation SDB - Nîmes" },
  { src: "/images/pac-installation.png", label: "Pose PAC - Uzès" },
  { src: "/images/plancher-chauffant.png", label: "Plancher Chauffant - Alès" },
  { src: "/images/chauffe-eau.png", label: "Ballon Thermo. - Beaucaire" },
];

export function Galerie() {
  return (
    <section id="realisations" className="bg-surface-container-lowest py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeInSection>
          <h2 className="mb-12 font-heading text-4xl font-extrabold text-primary lg:text-5xl">
            Nos dernières réalisations
          </h2>
        </FadeInSection>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {realisations.map((r) => (
            <FadeInSection key={r.label}>
              <div className="group relative aspect-square overflow-hidden rounded-3xl">
                <Image
                  src={r.src}
                  alt={r.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <p className="absolute bottom-4 left-4 text-sm font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {r.label}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
