import { Wrench } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-surface-container pb-24 pt-16 md:pb-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Wrench className="h-6 w-6 text-secondary-container" />
              <span className="font-heading text-lg font-bold text-primary">
                Fabre Plomberie &amp; Chauffage
              </span>
            </div>
            <p className="mt-3 text-sm text-on-surface-variant">
              Artisan plombier chauffagiste à Nîmes depuis plus de 20 ans. Qualité, réactivité et
              transparence.
            </p>
            <div className="mt-4 flex gap-2">
              <span className="rounded-lg bg-primary/5 px-3 py-1 text-xs font-bold text-primary">
                RGE
              </span>
              <span className="rounded-lg bg-primary/5 px-3 py-1 text-xs font-bold text-primary">
                Qualibat
              </span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 font-heading font-bold text-primary">Liens utiles</h4>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li>
                <a href="#services" className="transition hover:text-primary">
                  Nos services
                </a>
              </li>
              <li>
                <a href="#realisations" className="transition hover:text-primary">
                  Réalisations
                </a>
              </li>
              <li>
                <a href="#avis" className="transition hover:text-primary">
                  Avis clients
                </a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-primary">
                  Demander un devis
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 font-heading font-bold text-primary">Informations</h4>
            <p className="text-sm text-on-surface-variant">
              SIRET : XXX XXX XXX XXXXX
            </p>
            <p className="mt-2 text-sm text-on-surface-variant">
              Nîmes, Gard (30)
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-outline-variant/20 pt-8 md:flex-row">
          <p className="text-xs text-on-surface-variant">
            &copy; 2025 Fabre Plomberie &amp; Chauffage &middot; Nîmes
          </p>
          <p className="text-xs text-on-surface-variant">
            Site réalisé par{" "}
            <a
              href="https://sparkana.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-secondary-container transition hover:underline"
            >
              sparkana
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
