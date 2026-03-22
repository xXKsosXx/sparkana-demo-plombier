"use client";

import { useState } from "react";
import {
  Droplets,
  Flame,
  Bath,
  Zap,
  Wrench,
  MapPin,
  ChevronRight,
  ChevronLeft,
  Check,
} from "lucide-react";

const problemesWizard = [
  { id: "fuite", label: "Fuite d'eau", icon: <Droplets size={24} /> },
  { id: "chauffe-eau", label: "Chauffe-eau", icon: <Flame size={24} /> },
  { id: "salle-bain", label: "Salle de bain", icon: <Bath size={24} /> },
  { id: "chauffage", label: "Chauffage/PAC", icon: <Flame size={24} /> },
  { id: "debouchage", label: "D\u00E9bouchage", icon: <Zap size={24} /> },
  { id: "autre", label: "Autre", icon: <Wrench size={24} /> },
];

const villesGard = [
  "N\u00EEmes",
  "Uz\u00E8s",
  "Al\u00E8s",
  "Bagnols-sur-C\u00E8ze",
  "Le Grau-du-Roi",
  "Beaucaire",
  "Saint-Gilles",
  "Marguerittes",
  "Autre commune",
];

export default function FormulaireWizard() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({
    probleme: "",
    ville: "",
    nom: "",
    telephone: "",
    email: "",
    description: "",
  });

  const handleSubmit = async () => {
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch (e) {
      console.error(e);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-[2rem] p-12 text-center shadow-sm">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check size={32} className="text-green-600" />
        </div>
        <h3 className="text-2xl font-extrabold text-primary font-headline mb-3">
          Demande re\u00E7ue !
        </h3>
        <p className="text-on-surface-variant">
          M. Fabre vous rappelle sous 2h maximum.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[2rem] shadow-sm overflow-hidden">
      {/* Progress bar */}
      <div className="flex">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`flex-1 h-1.5 transition-all duration-500 ${
              s <= step ? "bg-secondary-container" : "bg-gray-100"
            }`}
          />
        ))}
      </div>

      <div className="p-8 md:p-10">
        {/* \u00C9tape indicator */}
        <div className="flex items-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  s < step
                    ? "bg-secondary-container text-white"
                    : s === step
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                {s < step ? <Check size={14} /> : s}
              </div>
              {s < 3 && (
                <div
                  className={`h-px w-8 transition-all ${
                    s < step ? "bg-secondary-container" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
          <span className="ml-3 text-xs text-on-surface-variant uppercase tracking-wider">
            {step === 1 && "Votre besoin"}
            {step === 2 && "Votre localisation"}
            {step === 3 && "Vos coordonn\u00E9es"}
          </span>
        </div>

        {/* \u00C9TAPE 1 \u2014 Probl\u00E8me */}
        {step === 1 && (
          <div className="animate-fade-in">
            <h3 className="text-xl font-extrabold text-primary font-headline mb-6">
              Quel est votre probl\u00E8me ?
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {problemesWizard.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setData({ ...data, probleme: p.id });
                    setStep(2);
                  }}
                  className={`p-4 rounded-xl border-2 text-left transition-all hover:scale-[1.02] group ${
                    data.probleme === p.id
                      ? "border-secondary-container bg-secondary-container/5"
                      : "border-gray-200 hover:border-secondary-container/50"
                  }`}
                >
                  <div className="text-secondary-container mb-2">{p.icon}</div>
                  <div className="text-sm font-bold text-primary">{p.label}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* \u00C9TAPE 2 \u2014 Ville */}
        {step === 2 && (
          <div className="animate-fade-in">
            <h3 className="text-xl font-extrabold text-primary font-headline mb-2">
              O\u00F9 intervenons-nous ?
            </h3>
            <p className="text-on-surface-variant text-sm mb-6">
              Nous couvrons tout le d\u00E9partement du Gard (30).
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {villesGard.map((ville) => (
                <button
                  key={ville}
                  onClick={() => {
                    setData({ ...data, ville });
                    setStep(3);
                  }}
                  className={`p-3 rounded-xl border-2 text-sm font-semibold transition-all hover:scale-[1.02] flex items-center gap-2 ${
                    data.ville === ville
                      ? "border-secondary-container bg-secondary-container/5 text-primary"
                      : "border-gray-200 hover:border-secondary-container/50 text-on-surface-variant"
                  }`}
                >
                  <MapPin size={14} className="text-secondary-container shrink-0" />
                  {ville}
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(1)}
              className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary"
            >
              <ChevronLeft size={16} /> Retour
            </button>
          </div>
        )}

        {/* \u00C9TAPE 3 \u2014 Coordonn\u00E9es */}
        {step === 3 && (
          <div className="animate-fade-in">
            <h3 className="text-xl font-extrabold text-primary font-headline mb-6">
              Comment vous contacter ?
            </h3>
            <div className="space-y-4 mb-6">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-primary block mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  value={data.nom}
                  onChange={(e) => setData({ ...data, nom: e.target.value })}
                  className="w-full border-b-2 border-gray-200 focus:border-secondary-container outline-none py-3 text-primary bg-transparent transition-colors"
                  placeholder="Jean Dupont"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-primary block mb-2">
                  T\u00E9l\u00E9phone *
                </label>
                <input
                  type="tel"
                  value={data.telephone}
                  onChange={(e) =>
                    setData({ ...data, telephone: e.target.value })
                  }
                  className="w-full border-b-2 border-gray-200 focus:border-secondary-container outline-none py-3 text-primary bg-transparent transition-colors"
                  placeholder="06 XX XX XX XX"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-primary block mb-2">
                  Pr\u00E9cisions (optionnel)
                </label>
                <textarea
                  value={data.description}
                  onChange={(e) =>
                    setData({ ...data, description: e.target.value })
                  }
                  className="w-full border-b-2 border-gray-200 focus:border-secondary-container outline-none py-3 text-primary bg-transparent transition-colors resize-none"
                  placeholder="D\u00E9crivez bri\u00E8vement le probl\u00E8me..."
                  rows={3}
                />
              </div>
            </div>

            {/* R\u00E9cap */}
            <div className="bg-surface-container-low rounded-xl p-4 mb-6 text-sm text-on-surface-variant">
              <div className="font-bold text-primary mb-2 text-xs uppercase tracking-wider">
                R\u00E9capitulatif
              </div>
              <div className="flex gap-4">
                <span>
                  {problemesWizard.find((p) => p.id === data.probleme)?.label}
                </span>
                <span>\u00B7</span>
                <span>{data.ville}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep(2)}
                className="flex items-center gap-2 px-5 py-3 border-2 border-gray-200 rounded-xl text-sm font-bold text-on-surface-variant hover:border-gray-400 transition-colors"
              >
                <ChevronLeft size={16} /> Retour
              </button>
              <button
                onClick={handleSubmit}
                disabled={!data.nom || !data.telephone}
                className="flex-1 flex items-center justify-center gap-2 bg-secondary-container text-white py-3 rounded-xl font-bold text-sm hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Envoyer ma demande
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
