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
  { id: "debouchage", label: "Débouchage", icon: <Zap size={24} /> },
  { id: "autre", label: "Autre", icon: <Wrench size={24} /> },
];

const villesGard = [
  "Nîmes",
  "Uzès",
  "Alès",
  "Bagnols-sur-Cèze",
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
    description: "",
  });

  const handleSubmit = async () => {
    const typeLabel =
      problemesWizard.find((p) => p.id === data.probleme)?.label || data.probleme;

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: data.nom,
          telephone: data.telephone,
          ville: data.ville,
          type: typeLabel,
          description: data.description,
        }),
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
          Demande reçue !
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
        {/* Étape indicator */}
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
            {step === 3 && "Vos coordonnées"}
          </span>
        </div>

        {/* ÉTAPE 1 — Problème */}
        {step === 1 && (
          <div className="animate-fade-in">
            <h3 className="text-xl font-extrabold text-primary font-headline mb-6">
              Quel est votre problème ?
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
                  <div className="text-sm font-bold text-primary">
                    {p.label}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ÉTAPE 2 — Ville */}
        {step === 2 && (
          <div className="animate-fade-in">
            <h3 className="text-xl font-extrabold text-primary font-headline mb-2">
              Où intervenons-nous ?
            </h3>
            <p className="text-on-surface-variant text-sm mb-6">
              Nous couvrons tout le département du Gard (30).
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
                  <MapPin
                    size={14}
                    className="text-secondary-container shrink-0"
                  />
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

        {/* ÉTAPE 3 — Coordonnées */}
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
                  Téléphone *
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
                  Précisions (optionnel)
                </label>
                <textarea
                  value={data.description}
                  onChange={(e) =>
                    setData({ ...data, description: e.target.value })
                  }
                  className="w-full border-b-2 border-gray-200 focus:border-secondary-container outline-none py-3 text-primary bg-transparent transition-colors resize-none"
                  placeholder="Décrivez brièvement le problème..."
                  rows={3}
                />
              </div>
            </div>

            {/* Récap */}
            <div className="bg-surface-container-low rounded-xl p-4 mb-6 text-sm text-on-surface-variant">
              <div className="font-bold text-primary mb-2 text-xs uppercase tracking-wider">
                Récapitulatif
              </div>
              <div className="flex gap-4">
                <span>
                  {problemesWizard.find((p) => p.id === data.probleme)?.label}
                </span>
                <span>&middot;</span>
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
