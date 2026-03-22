"use client";

import { useState } from "react";
import {
  Droplets,
  Flame,
  Bath,
  Zap,
  Wrench,
  ChevronRight,
} from "lucide-react";

interface Probleme {
  id: string;
  label: string;
  icon: React.ReactNode;
  fourchette: string;
  delai: string;
  description: string;
  urgence: "normal" | "urgent" | "tres-urgent";
}

const problemes: Probleme[] = [
  {
    id: "fuite",
    label: "Fuite d'eau",
    icon: <Droplets size={28} />,
    fourchette: "80\u20AC \u2014 350\u20AC",
    delai: "Intervention sous 2h",
    description:
      "Recherche et r\u00E9paration de fuite, joint, raccord ou canalisation.",
    urgence: "tres-urgent",
  },
  {
    id: "chauffe-eau",
    label: "Chauffe-eau",
    icon: <Flame size={28} />,
    fourchette: "150\u20AC \u2014 900\u20AC",
    delai: "Intervention sous 24h",
    description:
      "Remplacement ou r\u00E9paration de ballon eau chaude ou thermodynamique.",
    urgence: "urgent",
  },
  {
    id: "salle-bain",
    label: "Salle de bain",
    icon: <Bath size={28} />,
    fourchette: "500\u20AC \u2014 8 000\u20AC",
    delai: "Devis sous 48h",
    description:
      "R\u00E9novation partielle ou compl\u00E8te, douche italienne, robinetterie.",
    urgence: "normal",
  },
  {
    id: "chauffage",
    label: "Chauffage / PAC",
    icon: <Flame size={28} />,
    fourchette: "800\u20AC \u2014 12 000\u20AC",
    delai: "Devis sous 48h",
    description:
      "Installation pompe \u00E0 chaleur, chaudi\u00E8re ou plancher chauffant.",
    urgence: "normal",
  },
  {
    id: "debouchage",
    label: "D\u00E9bouchage",
    icon: <Zap size={28} />,
    fourchette: "90\u20AC \u2014 280\u20AC",
    delai: "Intervention sous 2h",
    description: "Canalisation bouch\u00E9e, WC, \u00E9vier ou siphon.",
    urgence: "tres-urgent",
  },
  {
    id: "autre",
    label: "Autre travaux",
    icon: <Wrench size={28} />,
    fourchette: "Sur devis gratuit",
    delai: "R\u00E9ponse sous 24h",
    description: "Tout autre intervention plomberie ou chauffage.",
    urgence: "normal",
  },
];

const urgenceColors = {
  "tres-urgent": {
    bg: "bg-red-900/20",
    border: "border-red-500/40",
    text: "text-red-600",
    badge: "bg-red-500/20 text-red-700",
  },
  urgent: {
    bg: "bg-orange-900/20",
    border: "border-orange-500/40",
    text: "text-orange-600",
    badge: "bg-orange-500/20 text-orange-700",
  },
  normal: {
    bg: "bg-blue-900/10",
    border: "border-blue-500/30",
    text: "text-[#9f4200]",
    badge: "bg-[#fe7520]/20 text-[#9f4200]",
  },
};

export default function EstimateurPrix() {
  const [selected, setSelected] = useState<string | null>(null);

  const selectedProbleme = problemes.find((p) => p.id === selected);

  return (
    <section className="py-20 bg-surface-container-low">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-secondary-container text-xs tracking-widest uppercase font-bold mb-3">
            Estimation gratuite
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary font-headline mb-4">
            Quel est votre besoin ?
          </h2>
          <p className="text-on-surface-variant max-w-lg mx-auto">
            S\u00E9lectionnez votre probl\u00E8me pour obtenir une fourchette de
            prix instantan\u00E9e.
          </p>
        </div>

        {/* Grid des probl\u00E8mes */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {problemes.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelected(selected === p.id ? null : p.id)}
              className={`p-6 rounded-2xl text-left transition-all duration-300 border-2 group ${
                selected === p.id
                  ? "bg-primary border-secondary-container text-white scale-[1.02]"
                  : "bg-white border-transparent hover:border-secondary-container/30 hover:scale-[1.01]"
              }`}
            >
              <div
                className={`mb-4 transition-colors ${
                  selected === p.id ? "text-secondary-container" : "text-secondary"
                }`}
              >
                {p.icon}
              </div>
              <div
                className={`font-bold text-sm ${
                  selected === p.id ? "text-white" : "text-primary"
                }`}
              >
                {p.label}
              </div>
            </button>
          ))}
        </div>

        {/* R\u00E9sultat anim\u00E9 */}
        {selectedProbleme && (
          <div
            className={`rounded-2xl p-8 border-2 transition-all duration-500 animate-fade-in ${
              urgenceColors[selectedProbleme.urgence].bg
            } ${urgenceColors[selectedProbleme.urgence].border}`}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider ${
                      urgenceColors[selectedProbleme.urgence].badge
                    }`}
                  >
                    {selectedProbleme.delai}
                  </span>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {selectedProbleme.description}
                </p>
              </div>

              <div className="text-right shrink-0">
                <div className="text-xs uppercase tracking-widest text-on-surface-variant mb-1">
                  Estimation
                </div>
                <div
                  className={`text-3xl font-extrabold font-headline ${
                    urgenceColors[selectedProbleme.urgence].text
                  }`}
                >
                  {selectedProbleme.fourchette}
                </div>
                <div className="text-xs text-on-surface-variant mt-1">
                  Devis gratuit et sans engagement
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:0466XXXXXX"
                className="flex items-center justify-center gap-2 bg-secondary-container text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-secondary transition-colors"
              >
                Appeler maintenant
                <ChevronRight size={16} />
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 border-2 border-primary/20 text-primary px-6 py-3 rounded-xl font-bold text-sm hover:border-primary transition-colors"
              >
                Demander un devis \u00E9crit
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
