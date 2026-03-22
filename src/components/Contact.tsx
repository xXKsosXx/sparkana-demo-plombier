"use client";

import { useState } from "react";
import { Phone, Mail, Send } from "lucide-react";

const typesBesoin = [
  "Plomberie générale",
  "Chauffage / PAC",
  "Climatisation",
  "Dépannage urgent",
  "Salle de bain",
  "Chauffe-eau / Ballon",
  "Autre",
];

export function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: data.get("nom"),
          telephone: data.get("telephone"),
          ville: data.get("ville"),
          type: data.get("type"),
          description: data.get("description"),
        }),
      });

      if (res.ok) {
        setSent(true);
        form.reset();
      }
    } catch {
      // silently fail for demo
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="bg-primary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left */}
          <div className="text-white">
            <h2 className="font-heading text-4xl font-extrabold lg:text-5xl">
              Besoin d&apos;un plombier ?
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Remplissez le formulaire ou contactez-nous directement. Nous vous répondons sous 24h.
            </p>

            <div className="mt-10 space-y-6">
              <a
                href="tel:+33466000000"
                className="flex items-center gap-4 rounded-2xl bg-secondary-container/15 px-6 py-4 transition hover:bg-secondary-container/25"
              >
                <Phone className="h-6 w-6 text-secondary-container" />
                <div>
                  <p className="text-sm text-white/60">Téléphone</p>
                  <p className="text-lg font-bold">04 66 XX XX XX</p>
                </div>
              </a>

              <a
                href="mailto:contact@fabre-plomberie.fr"
                className="flex items-center gap-4 rounded-2xl bg-secondary-container/15 px-6 py-4 transition hover:bg-secondary-container/25"
              >
                <Mail className="h-6 w-6 text-secondary-container" />
                <div>
                  <p className="text-sm text-white/60">Email</p>
                  <p className="text-lg font-bold">contact@fabre-plomberie.fr</p>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-[2rem] bg-white p-8 shadow-2xl lg:p-10">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Send className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary">Demande envoyée !</h3>
                <p className="mt-2 text-on-surface-variant">
                  Nous vous recontactons dans les 24h.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="nom" className="mb-1.5 block text-sm font-medium text-on-surface">
                    Nom
                  </label>
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    required
                    className="w-full rounded-xl border border-outline-variant/30 px-4 py-3 text-sm outline-none transition focus:border-secondary-container focus:ring-2 focus:ring-secondary-container/20"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div>
                  <label htmlFor="telephone" className="mb-1.5 block text-sm font-medium text-on-surface">
                    Téléphone
                  </label>
                  <input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    required
                    className="w-full rounded-xl border border-outline-variant/30 px-4 py-3 text-sm outline-none transition focus:border-secondary-container focus:ring-2 focus:ring-secondary-container/20"
                    placeholder="06 12 34 56 78"
                  />
                </div>

                <div>
                  <label htmlFor="ville" className="mb-1.5 block text-sm font-medium text-on-surface">
                    Ville
                  </label>
                  <input
                    id="ville"
                    name="ville"
                    type="text"
                    className="w-full rounded-xl border border-outline-variant/30 px-4 py-3 text-sm outline-none transition focus:border-secondary-container focus:ring-2 focus:ring-secondary-container/20"
                    placeholder="Nîmes"
                  />
                </div>

                <div>
                  <label htmlFor="type" className="mb-1.5 block text-sm font-medium text-on-surface">
                    Type de besoin
                  </label>
                  <select
                    id="type"
                    name="type"
                    required
                    className="w-full rounded-xl border border-outline-variant/30 px-4 py-3 text-sm outline-none transition focus:border-secondary-container focus:ring-2 focus:ring-secondary-container/20"
                  >
                    <option value="">Sélectionnez...</option>
                    {typesBesoin.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="description" className="mb-1.5 block text-sm font-medium text-on-surface">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    className="w-full resize-none rounded-xl border border-outline-variant/30 px-4 py-3 text-sm outline-none transition focus:border-secondary-container focus:ring-2 focus:ring-secondary-container/20"
                    placeholder="Décrivez votre besoin..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-secondary-container px-6 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-secondary-container/90 disabled:opacity-60"
                >
                  <Send className="h-5 w-5" />
                  {sending ? "Envoi..." : "Envoyer ma demande de devis"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
