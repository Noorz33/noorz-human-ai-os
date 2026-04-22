import Section from "./Section";
import { Layers, FileSearch, Workflow, Sparkles, Compass } from "lucide-react";

const pains = [
  {
    icon: Layers,
    title: "ابزار زیاد، سیستم صفر",
    body: "ده‌ها اپ و سرویس باز است، اما هیچ مدل منسجمی برای کار کردن با آن‌ها وجود ندارد.",
  },
  {
    icon: FileSearch,
    title: "تصمیم‌ها گم می‌شوند",
    body: "تصمیم گرفته می‌شود، اما ثبت نمی‌شود؛ بعداً نه قابل پیگیری است نه قابل دفاع.",
  },
  {
    icon: Workflow,
    title: "نوت‌ها پراکنده‌اند",
    body: "اطلاعات بین چت، ایمیل، نوت‌اپ و سند پخش است؛ هیچ‌جا یک مرجع واحد نیست.",
  },
  {
    icon: Sparkles,
    title: "استفاده کلیشه‌ای از AI",
    body: "AI تبدیل شده به ماشین تولید پاراگراف، نه شریک واقعی فکر و ساختاردهی.",
  },
  {
    icon: Compass,
    title: "مدل شخصی نداریم",
    body: "هر کس به سلیقه خودش از AI استفاده می‌کند؛ هیچ زبان مشترکی برای کار جدی نیست.",
  },
];

const Problem = () => {
  return (
    <Section
      id="problem"
      eyebrow="مسئله‌ای که حل می‌کنیم"
      title={
        <>
          مشکل کمبود ابزار نیست،
          <br />
          <span className="text-gradient-green">نبود یک لایه عملیاتی شخصی است.</span>
        </>
      }
      subtitle="حرفه‌ای‌ها امروز به ابزار جدید نیاز ندارند؛ به یک سیستم شخصی نیاز دارند که فکر خام را به ساختار، ساختار را به تصمیم، و تصمیم را به اجرا تبدیل کند."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {pains.map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="glass-panel group relative overflow-hidden rounded-2xl p-7 transition-smooth hover:-translate-y-1 hover:ring-1 hover:ring-primary/40"
          >
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/30">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{title}</h3>
            <p className="text-sm leading-loose text-muted-foreground">{body}</p>
          </div>
        ))}

        <div className="glass-panel relative overflow-hidden rounded-2xl p-7 ring-1 ring-primary/30">
          <p className="font-display text-lg leading-loose text-foreground">
            نتیجه:
            <br />
            <span className="text-gradient-green">
              مسئله، نبود ابزار نیست. نبود یک سیستم‌عامل شخصی برای کار با AI است.
            </span>
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Problem;
