"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

export default function BadgeDisponibilite() {
  const [delai, setDelai] = useState("sous 45min");

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour >= 22 || hour < 7) {
      setDelai("Urgences 24h/7j");
    } else if ((hour >= 8 && hour <= 9) || (hour >= 17 && hour <= 19)) {
      setDelai("sous 1h");
    } else {
      setDelai("sous 45min");
    }
  }, []);

  return (
    <div className="inline-flex items-center gap-3 bg-white border border-green-200 px-4 py-2.5 rounded-full shadow-sm">
      {/* Point pulsant vert */}
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
      </span>

      <div className="flex items-center gap-2">
        <Phone size={13} className="text-green-600" />
        <span className="text-sm font-bold text-primary">Disponible</span>
        <span className="text-sm text-on-surface-variant">
          · Intervention {delai}
        </span>
      </div>
    </div>
  );
}
