import Section from "./Section";
import portrait from "@/assets/instructor-portrait.png";

const Instructor = () => {
  return (
    <Section
      id="instructor"
      eyebrow="درباره مدرس"
      title={
        <>
          فرزاد نورعلی —
          <br />
          <span className="text-gradient-green">یک سیستم‌ساز، نه فقط یک مدرس AI.</span>
        </>
      }
    >
      <div className="grid items-center gap-12 lg:grid-cols-12">
        {/* Portrait */}
        <div className="lg:col-span-5">
          <figure
            data-image-slot="instructor"
            aria-label="جایگاه پرتره مدرس — قابل تعویض"
            className="relative overflow-hidden rounded-3xl edge-glow shadow-elegant"
          >
            <img
              src={portrait}
              alt="پرتره فرزاد نورعلی"
              loading="lazy"
              className="h-auto w-full object-contain"
              width={1024}
              height={1280}
            />
          </figure>
        </div>

        {/* Bio */}
        <div className="lg:col-span-7">
          <p className="text-base leading-loose text-foreground/90 md:text-lg">
            فرزاد نورعلی سال‌ها در تقاطع استراتژی، کمپین، مدیریت پروژه، مستندسازی و کار عملی با
            هوش مصنوعی فعالیت کرده است. تمرکز او روی این بوده که چگونه فکر و تجربه پراکنده را به
            سیستم‌های قابل انتقال تبدیل کند.
          </p>
          <p className="mt-5 leading-loose text-muted-foreground">
            نورز، خود محصول همین مسیر است: مدل‌سازی مکرر تجربه واقعی، استخراج الگوها، و طراحی یک
            ساختار قابل تدریس برای کسانی که می‌خواهند کار جدی با AI انجام دهند، نه فقط درباره‌اش
            صحبت کنند.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { k: "Strategy", v: "استراتژی و کمپین" },
              { k: "Systems", v: "طراحی سیستم‌های شخصی" },
              { k: "AI Practice", v: "کار عملی با AI" },
            ].map((b) => (
              <div key={b.k} className="glass-panel rounded-xl p-4">
                <div className="font-display text-[11px] uppercase tracking-widest text-primary">
                  {b.k}
                </div>
                <div className="mt-1 text-sm text-foreground/85">{b.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Instructor;
