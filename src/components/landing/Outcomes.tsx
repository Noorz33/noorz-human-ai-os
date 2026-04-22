import Section from "./Section";
import { Cpu, NotebookPen, MessageSquare, GitBranch, Package } from "lucide-react";

const outcomes = [
  {
    icon: Cpu,
    title: "سیستم شخصی کار با AI",
    body: "یک مدل کاری تثبیت‌شده، نه مجموعه‌ای از پرامپت‌های پراکنده.",
  },
  {
    icon: NotebookPen,
    title: "مدل ثبت و مستندسازی",
    body: "زبان مشترک با خودت برای ثبت تصمیم، یادداشت و پیگیری کار.",
  },
  {
    icon: MessageSquare,
    title: "سناریوهای واقعی GPT",
    body: "الگوهای استفاده از GPT متناسب با نقش شغلی، نه دموی عمومی.",
  },
  {
    icon: GitBranch,
    title: "ساختار تصمیم و پیگیری",
    body: "از فکر خام تا تصمیم قابل دفاع و اجرای قابل ردیابی.",
  },
  {
    icon: Package,
    title: "یک خروجی واقعی",
    body: "محصول مشخص ورکشاپ نهایی که در کار واقعی قابل استفاده است.",
  },
];

const Outcomes = () => {
  return (
    <Section
      id="outcomes"
      eyebrow="خروجی دوره"
      title={
        <>
          آنچه نصب می‌شود،
          <br />
          <span className="text-gradient-green">نه آنچه فقط آموخته می‌شود.</span>
        </>
      }
      subtitle="در پایان دوره، شرکت‌کننده با مجموعه‌ای از قابلیت‌های نصب‌شده روی کار روزمره‌اش بیرون می‌آید — نه با چند فایل اسلاید."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
        {outcomes.map(({ icon: Icon, title, body }, idx) => (
          <div
            key={title}
            className={`glass-panel group relative overflow-hidden rounded-2xl p-6 transition-smooth hover:-translate-y-1 ${
              idx === 0 ? "lg:col-span-2 ring-1 ring-primary/30" : ""
            }`}
          >
            <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/30">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mb-2 font-display text-base font-semibold text-foreground">{title}</h3>
            <p className="text-sm leading-loose text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Outcomes;
