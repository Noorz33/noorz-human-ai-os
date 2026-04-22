import Section from "./Section";
import { Check, X } from "lucide-react";

const fits = [
  "استراتژیست‌ها و مشاوران",
  "بازاریاب‌ها و افراد محتوا و کمپین",
  "Product و Project Managerها",
  "افراد عملیات و اجرا",
  "حرفه‌ای‌هایی با کار واقعی و در جریان",
  "کسانی که می‌خواهند مدل شخصی بسازند",
];

const notFits = [
  "کسانی که فقط لیست پرامپت می‌خواهند",
  "دنبال راه‌حل‌های میان‌بر و سطحی",
  "می‌خواهند AI به‌جای آن‌ها فکر کند",
  "علاقه‌ای به ساخت سیستم شخصی ندارند",
  "تنها به‌دنبال آشنایی با ترندها هستند",
];

const Audience = () => {
  return (
    <Section
      id="audience"
      eyebrow="برای چه کسانی مناسب است؟"
      title={
        <>
          این دوره برای کسانی است که می‌خواهند
          <span className="text-gradient-green"> کار واقعی</span> انجام دهند.
        </>
      }
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="glass-panel edge-glow rounded-2xl p-8 ring-1 ring-primary/30">
          <div className="mb-6 flex items-center gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/40">
              <Check className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl font-semibold text-primary">مناسب است</h3>
          </div>
          <ul className="space-y-4">
            {fits.map((f) => (
              <li key={f} className="flex items-start gap-3 text-foreground/90">
                <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <span className="leading-loose">{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-panel rounded-2xl p-8 opacity-90">
          <div className="mb-6 flex items-center gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground ring-1 ring-hairline">
              <X className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl font-semibold text-muted-foreground">
              مناسب نیست
            </h3>
          </div>
          <ul className="space-y-4">
            {notFits.map((f) => (
              <li key={f} className="flex items-start gap-3 text-muted-foreground">
                <X className="mt-1 h-4 w-4 shrink-0" />
                <span className="leading-loose">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Audience;
