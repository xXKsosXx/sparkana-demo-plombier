"use client";

import { useState } from "react";
import { Wrench, Phone, Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Avis", href: "#avis" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-[40px] z-40 border-b border-white/10 bg-primary-container/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Wrench className="h-7 w-7 text-secondary-container" />
          <span className="font-heading text-lg font-bold text-white">
            Fabre Plomberie &amp; Chauffage
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+33466000000"
            className="flex items-center gap-2 rounded-2xl bg-secondary-container px-5 py-2.5 text-sm font-bold text-white shadow-lg transition hover:bg-secondary-container/90"
          >
            <Phone className="h-4 w-4" />
            04 66 XX XX XX
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-white/10 bg-primary-container px-4 pb-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-white/80 transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+33466000000"
            className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-secondary-container px-5 py-3 text-sm font-bold text-white"
          >
            <Phone className="h-4 w-4" />
            04 66 XX XX XX
          </a>
        </div>
      )}
    </nav>
  );
}
