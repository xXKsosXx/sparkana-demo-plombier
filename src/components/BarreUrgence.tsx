import { Zap } from "lucide-react";

export function BarreUrgence() {
  return (
    <div className="sticky top-0 z-50 bg-secondary-container">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2">
        <Zap className="h-4 w-4 text-primary" fill="currentColor" />
        <p className="text-sm font-bold uppercase tracking-wide text-primary">
          Urgence 24h/7j &middot; Intervention rapide &middot;{" "}
          <a href="tel:+33466000000" className="animate-subtle-pulse underline">
            04 66 XX XX XX
          </a>
        </p>
      </div>
    </div>
  );
}
