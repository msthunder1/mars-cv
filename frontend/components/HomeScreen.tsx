"use client";

import { CV } from "@/lib/cms";
import { HomeView } from "./HomeView";
import { DetailView } from "./DetailView";
import { FallTransition } from "./FallTransition";
import { useState } from "react";

import type { SectionKey } from "@/lib/cms";

import { TOTAL_TRANSITION_MS } from "@/lib/constants";

interface HomeScreenProps {
  cv: CV;
}

export function HomeScreen({ cv }: HomeScreenProps) {
  const [activeSection, setActiveSection] = useState<SectionKey | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  function goToSection(target: SectionKey) {
    setDirection("forward");
    setActiveSection(target);
    setTransitioning(true);
    setTimeout(() => {
      setTransitioning(false);
    }, TOTAL_TRANSITION_MS);
  }

  function goBack() {
    setDirection("backward");
    setTransitioning(true);
    setTimeout(() => {
      setActiveSection(null);
      setTransitioning(false);
    }, TOTAL_TRANSITION_MS);
  }

  if (activeSection !== null) {
    return (
      <>
        {transitioning && direction === "forward" && (
          <>
            <HomeView cv={cv} onSelect={goToSection} isLeaving />
            <FallTransition section={activeSection} />
            <DetailView cv={cv} section={activeSection} onBack={goBack} isEntering />
          </>
        )}
        {transitioning && direction === "backward" && (
          <>
            <DetailView cv={cv} section={activeSection} onBack={goBack} isLeaving />
            <FallTransition section={activeSection} reverse />
            <HomeView cv={cv} onSelect={goToSection} isEntering />
          </>
        )}
        {!transitioning && <DetailView cv={cv} section={activeSection} onBack={goBack} />}
      </>
    );
  }

  return <HomeView cv={cv} onSelect={goToSection} />;
}
