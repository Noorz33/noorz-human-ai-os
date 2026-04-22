import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-noorz.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-hero pt-28 md:pt-32">
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
        <div className="grid items-center gap-12 md:gap-16 lg:grid-cols-12">
          {/* Text */}
          <div className="lg:col-span-6 animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-hairline/70 bg-surface/60 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow" />
              <span className="font-display tracking-wide">Noorz · Human × AI Operating System</span>
            </div>

            <h1 className="font-display text-4xl font-bold leading-[1.15] text-foreground sm:text-5xl md:text-6xl lg:text-[64px]">
              <span className="block">سیستم‌عامل شخصی</span>
              <span className="text-gradient-green">کار با هوش مصنوعی</span>
              <span className="mt-3 block text-2xl font-medium text-muted-foreground sm:text-3xl md:text-4xl">
                نه آموزش ابزار، نصب یک مدل کاری.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-loose text-muted-foreground md:text-lg">
              نورز برای حرفه‌ای‌هایی طراحی شده که می‌خواهند هوش مصنوعی واقعاً وارد کار روزمره‌شان شود؛
              نه به‌عنوان یک ابزار جدید، بلکه به‌عنوان یک لایه عملیاتی شخصی برای فکر کردن، تصمیم گرفتن و اجرا.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button variant="hero" size="xl" asChild>
                <a href="#contact">درخواست جلسه معرفی</a>
              </Button>
              <Button variant="outlineGlow" size="xl" asChild>
                <a href="#org">دریافت نسخه سازمانی دوره</a>
              </Button>
            </div>

            {/* Trust bar */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              {["فردمحور", "کاربردی", "مسئله‌محور", "گروه‌های کوچک"].map((tag) => (
                <div key={tag} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  <span>{tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image slot */}
          <div className="lg:col-span-6 animate-fade-in">
            <figure
              data-image-slot="hero"
              aria-label="جایگاه تصویر اصلی هیرو — قابل تعویض"
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl edge-glow shadow-elegant"
            >
              <img
                src={heroImage}
                alt="حرفه‌ای در حال کار در شهری مشترک از انسان و هوش مصنوعی"
                className="h-full w-full object-cover transition-smooth group-hover:scale-[1.03]"
                width={1408}
                height={1408}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
              <figcaption className="absolute bottom-5 right-5 left-5 flex items-end justify-between text-xs text-foreground/70">
                <span className="rounded-full bg-background/60 px-3 py-1 backdrop-blur">
                  Hero Visual · قابل جایگزینی
                </span>
                <span className="font-display tracking-wider text-primary/90">NOORZ</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
};

export default Hero;
