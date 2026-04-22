import Section from "./Section";

const sessions = [
  {
    n: "01",
    title: "مایندست و هم‌زیستی فعال با AI",
    en: "Mindset & Active Coexistence",
    outcome: "چارچوب فکری برای جایی که AI شتاب می‌دهد و انسان جهت می‌دهد.",
  },
  {
    n: "02",
    title: "Google Workspace به‌عنوان زیرساخت",
    en: "Google Workspace",
    outcome: "بازطراحی فضای کار شخصی روی یک زیرساخت ساده، تمیز و قابل اتکا.",
  },
  {
    n: "03",
    title: "GPT و چت‌بات‌ها در نقش شغلی",
    en: "GPT & Chatbots",
    outcome: "سناریوهای واقعی استفاده از GPT، نه پرامپت‌های نمایشی.",
  },
  {
    n: "04",
    title: "Notion و مستندسازی",
    en: "Notion & Documentation",
    outcome: "ساخت مرجع واحد برای ذهن، تصمیم و پروژه‌های در جریان.",
  },
  {
    n: "05",
    title: "Vibe Coding",
    en: "Vibe Coding",
    outcome: "ساختن ابزار شخصی کوچک با AI، بدون نیاز به سابقه برنامه‌نویسی.",
  },
  {
    n: "06",
    title: "زندگی به‌مثابه یک کمپین زنده",
    en: "Life as a Live Campaign",
    outcome: "اجرا، مرور و بازطراحی مداوم؛ کار به‌عنوان یک سیستم پویا.",
  },
];

const Curriculum = () => {
  return (
    <Section
      id="curriculum"
      eyebrow="ساختار دوره"
      title={
        <>
          ۶ جلسه اصلی +<span className="text-gradient-green"> ۱ ورکشاپ نهایی</span>
        </>
      }
      subtitle="هر جلسه یک لایه از سیستم شخصی کار با AI را نصب می‌کند. در پایان، یک ورکشاپ عملی برای تبدیل آموخته‌ها به یک خروجی واقعی برگزار می‌شود."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {sessions.map((s) => (
          <article
            key={s.n}
            className="glass-panel group relative flex flex-col overflow-hidden rounded-2xl p-7 transition-smooth hover:-translate-y-1"
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="font-display text-4xl font-bold text-primary/30 transition-smooth group-hover:text-primary/70">
                {s.n}
              </span>
              <span className="font-display text-[11px] uppercase tracking-widest text-muted-foreground">
                {s.en}
              </span>
            </div>
            <h3 className="mb-3 font-display text-xl font-semibold text-foreground">{s.title}</h3>
            <p className="mt-auto border-t border-hairline/60 pt-4 text-sm leading-loose text-muted-foreground">
              {s.outcome}
            </p>
          </article>
        ))}

        {/* Workshop card spanning */}
        <article className="glass-panel relative overflow-hidden rounded-2xl p-8 md:col-span-2 lg:col-span-3 ring-1 ring-primary/40">
          <div className="absolute inset-0 bg-gradient-to-l from-primary/10 via-transparent to-transparent" />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow" />
                <span className="font-display tracking-widest">FINAL WORKSHOP</span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground md:text-3xl">
                ورکشاپ نهایی ساخت خروجی
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-loose text-muted-foreground md:text-base">
                هر شرکت‌کننده یک خروجی واقعی از نقش شغلی خودش را با استفاده از سیستمی که ساخته، تولید
                و ارائه می‌کند.
              </p>
            </div>
            <span className="font-display text-6xl font-bold text-primary/20 md:text-7xl">07</span>
          </div>
        </article>
      </div>
    </Section>
  );
};

export default Curriculum;
