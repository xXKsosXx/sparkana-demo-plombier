import { Star } from "lucide-react";
import { FadeInSection } from "./FadeInSection";

const avis = [
  {
    auteur: "Jean P.",
    ville: "Uzès",
    note: 5,
    texte:
      "Fuite un dimanche matin, M. Fabre était là en 45 minutes. Travail propre, prix honnête. Je recommande sans hésitation.",
  },
  {
    auteur: "Marie-Claire L.",
    ville: "Nîmes",
    note: 5,
    texte:
      "Rénovation complète de notre salle de bain. Résultat impeccable, l'équipe est ponctuelle et soignée. Un vrai plaisir.",
  },
  {
    auteur: "Thomas B.",
    ville: "Le Grau-du-Roi",
    note: 5,
    texte:
      "Installation clim réversible parfaite. Devis clair, pas de surprise à la facturation. Très professionnel.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 text-secondary-container" fill="currentColor" />
      ))}
    </div>
  );
}

export function Avis() {
  return (
    <section id="avis" className="bg-surface-container-low py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeInSection>
          <div className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <Stars count={5} />
              <span className="text-lg font-bold text-primary">4.9/5 sur Google</span>
            </div>
            <h2 className="font-heading text-4xl font-extrabold text-primary lg:text-5xl">
              Ce que disent nos voisins
            </h2>
          </div>
        </FadeInSection>

        <div className="grid gap-6 md:grid-cols-3">
          {avis.map((a, i) => (
            <FadeInSection key={a.auteur}>
              <div
                className={`rounded-3xl bg-white p-8 shadow-sm ${
                  i === 1 ? "md:translate-y-4" : ""
                }`}
              >
                <Stars count={a.note} />
                <p className="mt-4 text-sm leading-relaxed text-on-surface-variant">
                  &ldquo;{a.texte}&rdquo;
                </p>
                <div className="mt-5 border-t border-outline-variant/20 pt-4">
                  <p className="font-heading font-bold text-primary">{a.auteur}</p>
                  <p className="text-xs text-on-surface-variant">{a.ville}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
