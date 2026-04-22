import { Button } from "@/components/ui/button";
import { UserRound, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-noorz.png";

const Hero = () => {
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

      {/* Full-width hero image banner */}
      <figure
        data-image-slot="hero"
        aria-label="جایگاه تصویر اصلی هیرو — قابل تعویض"
        className="relative w-full overflow-hidden"
      >
        <img
          src={heroImage}
          alt="حرفه‌ای در حال کار در شهری مشترک از انسان و هوش مصنوعی"
          className="h-[38vh] w-full object-cover sm:h-[44vh] md:h-[52vh] lg:h-[58vh]"
          width={1920}
          height={900}
        />
        {/* Cinematic gradient overlays for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-l from-background/60 via-transparent to-background/60" />

        {/* Brand chip */}
        <div className="absolute top-5 right-5 inline-flex items-center gap-2 rounded-full border border-hairline/70 bg-background/50 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow" />
          <span className="font-display tracking-wide">Noorz · Human × AI Operating System</span>
        </div>
      </figure>

      <div className="container relative">
        <div className="mx-auto max-w-4xl pt-10 pb-20 text-center animate-fade-up md:pt-14 md:pb-28">
          {/* Human × AI icon mark */}
          <div className="mx-auto mb-7 inline-flex items-center gap-3 rounded-2xl border border-hairline/70 bg-surface/60 px-5 py-3 backdrop-blur">
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

          <h1 className="font-display text-3xl font-bold leading-[1.25] text-foreground sm:text-4xl md:text-5xl lg:text-[56px]">
            <span className="block">با هوش مصنوعی</span>
            <span className="text-gradient-green">توانمندی‌هاتو به توان برسون</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-loose text-muted-foreground md:text-lg">
            قدرت هوش مصنوعی از بیرون دیده نمی‌شه. باید واردش بشی تا بفهمی.
            <br className="hidden sm:block" />
            این دوره کمک می‌کنه افراد سازمان بیاموزند چطور از هوش مصنوعی در کار واقعی‌شان خروجی بگیرند.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">درخواست جلسه معرفی</a>
            </Button>
            <Button variant="outlineGlow" size="xl" asChild>
              <a href="#org">دریافت نسخه سازمانی دوره</a>
            </Button>
          </div>

          {/* Trust bar */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            {["فردمحور", "کاربردی", "مسئله‌محور", "گروه‌های کوچک"].map((tag) => (
              <div key={tag} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-primary" />
                <span>{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
};

export default Hero;
