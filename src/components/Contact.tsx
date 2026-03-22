import { Phone, Mail } from "lucide-react";
import FormulaireWizard from "./FormulaireWizard";

export function Contact() {
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
              Remplissez le formulaire ou contactez-nous directement. Nous vous
              r&eacute;pondons sous 24h.
            </p>

            <div className="mt-10 space-y-6">
              <a
                href="tel:+33466000000"
                className="flex items-center gap-4 rounded-2xl bg-secondary-container/15 px-6 py-4 transition hover:bg-secondary-container/25"
              >
                <Phone className="h-6 w-6 text-secondary-container" />
                <div>
                  <p className="text-sm text-white/60">T&eacute;l&eacute;phone</p>
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

          {/* Wizard Form */}
          <FormulaireWizard />
        </div>
      </div>
    </section>
  );
}
