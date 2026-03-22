import { MapPin, Shield, Lock, Receipt, Check } from "lucide-react";
import { FadeInSection } from "./FadeInSection";

const args = [
  { icon: MapPin, title: "Local & réactif", desc: "Basés à Nîmes, nous connaissons le Gard par coeur." },
  { icon: Shield, title: "Certifié RGE", desc: "Éligible aux aides de l'État pour vos travaux." },
  { icon: Lock, title: "Garantie décennale", desc: "Assurance 10 ans sur tous nos chantiers." },
  { icon: Receipt, title: "Devis gratuit 24h", desc: "Transparence totale, sans mauvaise surprise." },
];

export function Pourquoi() {
  return (
    <section className="bg-surface-container-lowest py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeInSection>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Cards grid */}
            <div className="grid grid-cols-2 gap-4">
              {args.map((a, i) => (
                <div
                  key={a.title}
                  className={`rounded-3xl bg-white p-6 shadow-sm ${i % 2 === 1 ? "mt-8" : ""}`}
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/5">
                    <a.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-primary">{a.title}</h3>
                  <p className="mt-1.5 text-sm text-on-surface-variant">{a.desc}</p>
                </div>
              ))}
            </div>

            {/* Text */}
            <div>
              <h2 className="font-heading text-4xl font-extrabold text-primary lg:text-5xl">
                Pourquoi faire appel à la famille Fabre ?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-on-surface-variant">
                Depuis plus de 20 ans, notre entreprise familiale met son savoir-faire au service de
                votre confort. Nous intervenons avec rapidité et sérieux sur l&apos;ensemble du département
                du Gard.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="font-medium text-on-surface">
                    Transparence totale sur les tarifs
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="font-medium text-on-surface">
                    Matériel de marques professionnelles uniquement
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
