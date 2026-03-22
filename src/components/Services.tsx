import { Wrench, Flame, Wind, Zap, Bath, Droplets } from "lucide-react";
import { FadeInSection } from "./FadeInSection";

const services = [
  {
    icon: Wrench,
    title: "Plomberie générale",
    desc: "Installation, réparation et entretien de vos réseaux d'eau. Recherche de fuite non destructive.",
  },
  {
    icon: Flame,
    title: "Chauffage & PAC",
    desc: "Pose de pompes à chaleur air-eau, chaudières gaz THPE et planchers chauffants.",
  },
  {
    icon: Wind,
    title: "Climatisation",
    desc: "Solutions de climatisation réversible pour un confort optimal toute l'année.",
  },
  {
    icon: Zap,
    title: "Dépannage urgent",
    desc: "Canalisation bouchée ou fuite majeure ? Intervention 24h/24 dans tout le Gard.",
  },
  {
    icon: Bath,
    title: "Salle de bain",
    desc: "Rénovation complète clef en main, de la robinetterie à la douche à l'italienne.",
  },
  {
    icon: Droplets,
    title: "Chauffe-eau & Ballon",
    desc: "Installation et remplacement rapide de ballons thermodynamiques ou classiques.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-surface-container-low py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeInSection>
          <div className="mb-14 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="font-heading text-4xl font-extrabold text-primary lg:text-5xl">
                Nos services
              </h2>
              <p className="mt-3 text-lg text-on-surface-variant">
                Une gamme complète pour votre confort
              </p>
            </div>
            <span className="rounded-2xl bg-primary/5 px-4 py-2 text-sm font-bold text-primary">
              Qualité Artisanale
            </span>
          </div>
        </FadeInSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <FadeInSection key={s.title} className={`delay-${i * 100}`}>
              <div className="group cursor-default rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:bg-primary-container hover:shadow-xl">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary-container/10 transition-colors group-hover:bg-white/15">
                  <s.icon className="h-7 w-7 text-secondary-container transition-colors group-hover:text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary transition-colors group-hover:text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-on-surface-variant transition-colors group-hover:text-white/80">
                  {s.desc}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
