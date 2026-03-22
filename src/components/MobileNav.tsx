"use client";

import { PhoneCall, Wrench, FileText } from "lucide-react";
import { useState } from "react";

const tabs = [
  { label: "Urgence", icon: PhoneCall, href: "tel:+33466000000" },
  { label: "Services", icon: Wrench, href: "#services" },
  { label: "Devis", icon: FileText, href: "#contact" },
];

export function MobileNav() {
  const [active, setActive] = useState(0);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-outline-variant/15 bg-surface md:hidden">
      <div className="flex items-center justify-around py-2">
        {tabs.map((tab, i) => (
          <a
            key={tab.label}
            href={tab.href}
            onClick={() => setActive(i)}
            className={`flex flex-col items-center gap-0.5 px-4 py-1 text-xs font-medium transition ${
              active === i ? "text-secondary-container" : "text-on-surface-variant"
            }`}
          >
            <tab.icon className="h-5 w-5" />
            {tab.label}
          </a>
        ))}
      </div>
    </div>
  );
}
