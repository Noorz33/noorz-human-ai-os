import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, X } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "@/components/landing/Hero";
import WhatIsIt from "@/components/landing/WhatIsIt";
import Problem from "@/components/landing/Problem";
import Curriculum from "@/components/landing/Curriculum";
import Outcomes from "@/components/landing/Outcomes";
import Audience from "@/components/landing/Audience";
import ForOrganizations from "@/components/landing/ForOrganizations";
import Instructor from "@/components/landing/Instructor";
import Differentiators from "@/components/landing/Differentiators";
import ContactCTA from "@/components/landing/ContactCTA";
import { Button } from "@/components/ui/button";

const slides = [
  { id: "hero", label: "خوش‌آمد", Component: Hero },
  { id: "what", label: "دوره چیست", Component: WhatIsIt },
  { id: "problem", label: "مسئله", Component: Problem },
  { id: "curriculum", label: "ساختار", Component: Curriculum },
  { id: "outcomes", label: "خروجی", Component: Outcomes },
  { id: "audience", label: "مخاطبان", Component: Audience },
  { id: "org", label: "سازمان‌ها", Component: ForOrganizations },
  { id: "instructor", label: "مدرس", Component: Instructor },
  { id: "why", label: "تفاوت", Component: Differentiators },
  { id: "contact", label: "تماس", Component: ContactCTA },
];

const Present = () => {
  const [index, setIndex] = useState(0);
  const [isFs, setIsFs] = useState(false);
  const [showUI, setShowUI] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const hideTimer = useRef<number | null>(null);

  const go = useCallback((dir: number) => {
    setIndex((i) => Math.max(0, Math.min(slides.length - 1, i + dir)));
  }, []);

  const goTo = useCallback((i: number) => {
    setIndex(Math.max(0, Math.min(slides.length - 1, i)));
  }, []);

  const toggleFullscreen = useCallback(async () => {
    if (!document.fullscreenElement) {
      await containerRef.current?.requestFullscreen?.();
    } else {
      await document.exitFullscreen?.();
    }
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        // RTL: ArrowRight goes back visually, but for slides we keep "next" semantics
        go(1);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        go(-1);
      } else if (e.key === "Home") {
        goTo(0);
      } else if (e.key === "End") {
        goTo(slides.length - 1);
      } else if (e.key.toLowerCase() === "f") {
        toggleFullscreen();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, goTo, toggleFullscreen]);

  useEffect(() => {
    const onChange = () => setIsFs(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  // Auto-hide UI after inactivity
  useEffect(() => {
    const reveal = () => {
      setShowUI(true);
      if (hideTimer.current) window.clearTimeout(hideTimer.current);
      hideTimer.current = window.setTimeout(() => setShowUI(false), 2500);
    };
    reveal();
    window.addEventListener("mousemove", reveal);
    window.addEventListener("touchstart", reveal);
    return () => {
      window.removeEventListener("mousemove", reveal);
      window.removeEventListener("touchstart", reveal);
      if (hideTimer.current) window.clearTimeout(hideTimer.current);
    };
  }, []);

  const Current = slides[index].Component;

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-screen overflow-hidden bg-background text-foreground"
    >
      {/* Slide stage */}
      <div key={slides[index].id} className="h-full w-full overflow-y-auto animate-fade-in">
        <Current />
      </div>

      {/* Top bar */}
      <div
        className={`pointer-events-none fixed inset-x-0 top-0 z-50 flex items-center justify-between p-4 transition-opacity duration-500 ${
          showUI ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-hairline/70 bg-background/70 px-4 py-1.5 text-xs backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow" />
          <span className="font-display tracking-wide text-foreground/80">
            {slides[index].label}
          </span>
          <span className="text-muted-foreground">
            · {index + 1} / {slides.length}
          </span>
        </div>

        <div className="pointer-events-auto flex items-center gap-2">
          <Button
            variant="outlineGlow"
            size="icon"
            onClick={toggleFullscreen}
            aria-label="تمام‌صفحه"
          >
            {isFs ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </Button>
          <Button variant="outlineGlow" size="icon" asChild aria-label="خروج">
            <Link to="/">
              <X className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Side nav arrows */}
      <button
        onClick={() => go(-1)}
        disabled={index === 0}
        aria-label="اسلاید قبلی"
        className={`fixed right-4 top-1/2 z-50 -translate-y-1/2 rounded-full border border-hairline/70 bg-background/60 p-3 text-foreground backdrop-blur transition-opacity hover:bg-background/90 disabled:opacity-20 ${
          showUI ? "opacity-100" : "opacity-0"
        }`}
      >
        <ChevronRight className="h-5 w-5" />
      </button>
      <button
        onClick={() => go(1)}
        disabled={index === slides.length - 1}
        aria-label="اسلاید بعدی"
        className={`fixed left-4 top-1/2 z-50 -translate-y-1/2 rounded-full border border-hairline/70 bg-background/60 p-3 text-foreground backdrop-blur transition-opacity hover:bg-background/90 disabled:opacity-20 ${
          showUI ? "opacity-100" : "opacity-0"
        }`}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {/* Bottom progress + dots */}
      <div
        className={`pointer-events-none fixed inset-x-0 bottom-0 z-50 flex flex-col items-center gap-3 p-4 transition-opacity duration-500 ${
          showUI ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="pointer-events-auto flex items-center gap-1.5 rounded-full border border-hairline/70 bg-background/70 px-3 py-2 backdrop-blur">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              aria-label={`رفتن به ${s.label}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-primary shadow-glow" : "w-1.5 bg-muted-foreground/40 hover:bg-muted-foreground/70"
              }`}
            />
          ))}
        </div>
        <div className="h-0.5 w-full max-w-md overflow-hidden rounded-full bg-muted-foreground/20">
          <div
            className="h-full bg-gradient-to-l from-primary to-primary-glow transition-all duration-500"
            style={{ width: `${((index + 1) / slides.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Present;
