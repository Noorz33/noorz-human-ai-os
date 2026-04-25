import { Button } from "@/components/ui/button";
import { UserRound, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import heroImage from "@/assets/hero-noorz.png";

const Hero = () => {
  const figureRef = useRef<HTMLElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let rafId = 0;
    const handleScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        if (figureRef.current) {
          const rect = figureRef.current.getBoundingClientRect();
          const viewportH = window.innerHeight;
          if (rect.bottom > 0 && rect.top < viewportH) {
            const progress = (rect.top + rect.height / 2 - viewportH / 2) / viewportH;
            setOffsetY(progress * 80);
          }
        }
        rafId = 0;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-hero pt-24 md:pt-28">
      {/* Atmospheric glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 right-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[140px] animate-pulse-glow" />
        <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-primary-deep/30 blur-[120px]" />
      </div>

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary) / 0.6) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="container relative">
        <div className="mx-auto max-w-4xl pt-6 pb-8 text-center animate-fade-up md:pt-10 md:pb-12">
          {/* Human × AI icon mark */}
          <div className="mx-auto mb-6 inline-flex items-center gap-3 rounded-2xl border border-hairline/70 bg-surface/60 px-5 py-3 backdrop-blur">
            <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/40">
              <UserRound className="h-5 w-5 text-primary" strokeWidth={2.2} />
              {/* AI sparkle showing the human "raised to the power of AI" */}
              <span className="absolute -top-1.5 -left-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow">
                <Sparkles className="h-3 w-3" strokeWidth={2.5} />
              </span>
            </span>
            <span className="font-display text-sm tracking-wide text-foreground/80">
              Human <span className="text-primary">^</span> AI
            </span>
          </div>

          <h1 className="font-display text-3xl font-bold leading-[1.25] text-foreground sm:text-4xl md:text-5xl lg:text-[52px]">
            <span className="block">با هوش مصنوعی</span>
            <span className="text-gradient-green">توانمندی‌هات رو به توان برسون</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-loose text-muted-foreground md:text-lg">
            قدرت هوش مصنوعی از بیرون دیده نمی‌شه. باید واردش بشی تا بفهمی.
            <br className="hidden sm:block" />
            این دوره کمک می‌کنه افراد سازمانت یاد بگیرن چطور با هوش مصنوعی چند برابر خروجی داشته باشن
          </p>
        </div>
      </div>

      {/* Full-width hero image banner */}
      <figure
        data-image-slot="hero"
        aria-label="جایگاه تصویر اصلی هیرو — قابل تعویض"
        className="relative mx-auto w-full max-w-[1600px] overflow-hidden"
      >
        <img
          src={heroImage}
          alt="حرفه‌ای در حال کار در شهری مشترک از انسان و هوش مصنوعی"
          className="block h-auto w-full object-contain"
          width={1920}
          height={1920}
        />
        {/* Top overlay — softens transition from text to image */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[35%] bg-gradient-to-b from-background via-background/40 to-transparent" />
        {/* Bottom dark overlay — softens transition to next section */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[18%] bg-gradient-to-t from-background via-background/80 to-transparent" />

        {/* Brand chip */}
        <div className="absolute top-5 right-5 inline-flex items-center gap-2 rounded-full border border-hairline/70 bg-background/50 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow" />
          <span className="font-display tracking-wide">Noorz · Human × AI Operating System</span>
        </div>
      </figure>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
};

export default Hero;
