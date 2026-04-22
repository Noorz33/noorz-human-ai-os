import Section from "./Section";

const points = [
  {
    n: "01",
    title: "آموزش ابزار نیست، آموزش مدل کار کردن است",
    body: "ابزارها عوض می‌شوند؛ مدل کاری شخصی باقی می‌ماند و قابل انتقال است.",
  },
  {
    n: "02",
    title: "AI جایگزین فکر نیست، تقویت‌کننده فکر است",
    body: "وقتی فرد سیستم دارد، AI ذهن او را گسترش می‌دهد؛ بدون سیستم، فقط نویز تولید می‌کند.",
  },
  {
    n: "03",
    title: "خروجی باید قابل دفاع باشد، نه فقط خوش‌فرم",
    body: "تمرکز ما روی تصمیم‌های قابل توضیح و قابل پیگیری است، نه خروجی‌های ظاهراً تمیز.",
  },
  {
    n: "04",
    title: "مستندسازی برای انتقال است، نه برای تزئین",
    body: "هر چیزی که ثبت می‌شود باید بعداً قابل استفاده توسط خودِ فرد یا تیم او باشد.",
  },
  {
    n: "05",
    title: "تمرکز بر استفاده در نقش شغلی واقعی",
    body: "هیچ مثال جنرالی جایگزین تمرین در بستر کار واقعی شرکت‌کننده نمی‌شود.",
  },
];

const Differentiators = () => {
  return (
    <Section
      id="why"
      eyebrow="چرا این دوره متفاوت است"
      title={
        <>
          ماشین سرعت می‌دهد،
          <br />
          <span className="text-gradient-green">انسان جهت می‌دهد.</span>
        </>
      }
      subtitle="نورز روی پنج اصل بنا شده که آن را از کلاس‌های ابزارمحور AI جدا می‌کند."
    >
      <div className="space-y-3">
        {points.map((p) => (
          <div
            key={p.n}
            className="glass-panel group relative grid items-center gap-4 rounded-2xl p-6 transition-smooth hover:ring-1 hover:ring-primary/40 md:grid-cols-12 md:gap-8 md:p-8"
          >
            <div className="md:col-span-2">
              <span className="font-display text-3xl font-bold text-primary/40 transition-smooth group-hover:text-primary md:text-4xl">
                {p.n}
              </span>
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground md:col-span-5 md:text-xl">
              {p.title}
            </h3>
            <p className="text-sm leading-loose text-muted-foreground md:col-span-5 md:text-base">
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Differentiators;
