"use client";

import { CV } from "@/lib/cms";
import { CircuitWires } from "@/components/CircuitWires";

import type { SectionKey } from "@/lib/cms";

import { useState } from "react";

interface HomeViewProps {
  cv: CV;
  onSelect: (section: SectionKey) => void;
  isEntering?: boolean;
  isLeaving?: boolean;
}

export function HomeView({ cv, onSelect, isEntering, isLeaving }: HomeViewProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <main
      className={`flex flex-col items-center text-center p-8 min-h-screen ${isEntering ? "home-entering" : ""} ${isLeaving ? "home-leaving" : ""}`}
    >
      <h1 className="font-serif text-3xl text-paper">{cv.name}</h1>
      <p className="text-sm text-muted mt-1">{cv.headline}</p>
      <p className="text-xs text-dim mt-2">
        {cv.contact.email} · {cv.location} · {cv.languages.map((l) => l.name).join(", ")}
      </p>
      <div className="text-sm text-muted mt-6 max-w-7xl leading-relaxed">
        <p className={`${!expanded ? "line-clamp-3 md:line-clamp-none" : ""}`}>{cv.intro}</p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="md:hidden text-xs text-paper underline mt-2"
        >
          {expanded ? "read less" : "read more"}
        </button>
      </div>
      <div className="mt-8 w-24 h-24 rounded-full border border-paper flex items-center justify-center font-serif text-2xl text-paper">
        MS
      </div>
      <div className="mt-0 w-full max-w-4xl flex-1">
        <CircuitWires onSelect={onSelect} />
      </div>
    </main>
  );
}
