import Section from "./Section";
import { Users, Target, Sliders, Building2 } from "lucide-react";

const items = [
  {
    icon: Users,
    title: "گروه‌های کوچک منتخب",
    body: "سازمان چند نفر کلیدی (مثلاً ۵ نفر) را معرفی می‌کند. تمرکز روی کیفیت فردی، نه تعداد.",
  },
  {
    icon: Target,
    title: "متناسب با نقش هر فرد",
    body: "هر شرکت‌کننده مدل خودش را در بستر نقش شغلی واقعی‌اش می‌سازد، نه یک قالب عمومی.",
  },
  {
    icon: Sliders,
    title: "قابل‌تنظیم با کانتکست سازمان",
    body: "مثال‌ها، تمرین‌ها و مطالعه‌موردها می‌توانند بر اساس فضای سازمان شخصی‌سازی شوند.",
  },
  {
    icon: Building2,
    title: "بازده برای سازمان",
    body: "خروجی، چند فرد کلیدی است با مدل کاری جدید — قابل تسری به پروژه‌ها و تیم‌ها.",
  },
];

const ForOrganizations = () => {
  return (
    <Section
      id="org"
      eyebrow="روش برگزاری برای سازمان"
      title={
        <>
          مدل اجرای{" "}
          <span className="text-gradient-green">سازمانی-اما-فردی</span>
        </>
      }
      subtitle="سازمان فضا را فراهم می‌کند، اما یادگیری و خروجی، در سطح فرد و نقش شغلی او نصب می‌شود."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {items.map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="glass-panel group relative flex gap-5 overflow-hidden rounded-2xl p-7 transition-smooth hover:-translate-y-1"
          >
            <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/30">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{title}</h3>
              <p className="text-sm leading-loose text-muted-foreground">{body}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ForOrganizations;
