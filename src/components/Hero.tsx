import { PhoneCall, FileText, Shield, Clock, File } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="overflow-hidden bg-surface-container-lowest py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-12 lg:gap-8 lg:px-8">
        {/* Text */}
        <div className="lg:col-span-7">
          <span className="inline-block rounded-full bg-secondary-container/15 px-4 py-1.5 text-sm font-bold text-secondary">
            Artisan Gardois depuis 20 ans
          </span>

          <h1 className="mt-6 font-heading text-5xl font-extrabold leading-tight text-primary lg:text-7xl">
            Votre plombier de{" "}
            <em className="not-italic text-secondary-container" style={{ fontStyle: "italic" }}>
              confiance
            </em>{" "}
            à Nîmes.
          </h1>

          <p className="mt-6 max-w-xl text-xl leading-relaxed text-on-surface-variant">
            Plomberie, chauffage et climatisation pour les particuliers et professionnels du Gard.
            Intervention rapide, devis gratuit.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:+33466000000"
              className="flex items-center gap-2 rounded-2xl bg-secondary-container px-7 py-4 text-lg font-bold text-white shadow-xl transition hover:scale-[1.02] hover:shadow-2xl"
            >
              <PhoneCall className="h-5 w-5" />
              Appeler maintenant
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-2xl border border-primary/30 px-7 py-4 text-lg font-bold text-primary transition hover:bg-primary/5"
            >
              <FileText className="h-5 w-5" />
              Demander un devis
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-sm font-medium text-on-surface-variant">
              <Shield className="h-5 w-5 text-primary" />
              20 ans d&apos;exp&eacute;rience
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-on-surface-variant">
              <Clock className="h-5 w-5 text-primary" />
              Intervention sous 2h
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-on-surface-variant">
              <File className="h-5 w-5 text-primary" />
              Devis gratuit
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative lg:col-span-5">
          <div className="relative overflow-hidden rounded-[2rem] rotate-2 transition-transform duration-500 hover:rotate-0">
            <Image
              src="/images/hero-plombier.png"
              alt="Plombier professionnel Fabre Plomberie"
              width={600}
              height={700}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white p-4 shadow-2xl lg:-left-8">
            <p className="text-sm font-bold text-primary">Qualibat RGE</p>
            <p className="text-xs text-on-surface-variant">
              Certifié économies d&apos;énergie
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
