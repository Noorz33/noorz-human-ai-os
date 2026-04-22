import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const ContactCTA = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("درخواست شما ثبت شد", {
        description: "به‌زودی برای هماهنگی جلسه معرفی با شما تماس می‌گیریم.",
      });
    }, 900);
  };

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      {/* Atmospheric backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-primary/40 to-transparent" />
        <div className="absolute -top-20 right-1/3 h-80 w-80 rounded-full bg-primary/15 blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-primary-deep/40 blur-[120px]" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-hairline/60 bg-surface/60 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow" />
            <span className="font-display tracking-widest">START · شروع گفتگو</span>
          </div>
          <h2 className="font-display text-3xl font-bold leading-tight text-foreground md:text-5xl">
            اگر می‌خواهید چند نفر کلیدی سازمانتان
            <br />
            <span className="text-gradient-green">واقعاً با AI کار کنند،</span>
            <br />
            اینجا نقطه شروع جدی است.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-loose text-muted-foreground md:text-lg">
            یک پیام کوتاه برای ما بفرستید. در یک جلسه معرفی، تناسب دوره با سازمان شما را بدون فشار
            بررسی می‌کنیم.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="glass-panel edge-glow mx-auto mt-12 grid max-w-3xl gap-5 rounded-3xl p-7 md:p-10"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Field id="name" label="نام و نام خانوادگی" placeholder="نام شما" required />
            <Field id="org" label="نام سازمان" placeholder="مثلاً شرکت ..." required />
            <Field id="role" label="نقش / سمت" placeholder="مثلاً مدیر استراتژی" required />
            <Field id="email" type="email" label="ایمیل" placeholder="you@company.com" required />
            <Field id="phone" type="tel" label="شماره تماس" placeholder="۰۹..." required />
            <div className="space-y-2">
              <Label htmlFor="size" className="text-sm text-foreground/85">
                تعداد افراد پیشنهادی
              </Label>
              <Input
                id="size"
                placeholder="مثلاً ۵ نفر"
                className="h-12 border-hairline bg-surface/60 text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-primary/50"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="note" className="text-sm text-foreground/85">
              توضیح کوتاه
            </Label>
            <Textarea
              id="note"
              rows={4}
              placeholder="کوتاه بنویسید چه نیازی در سازمانتان احساس می‌کنید..."
              className="resize-none border-hairline bg-surface/60 text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-primary/50"
            />
          </div>

          <div className="mt-2 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-loose text-muted-foreground">
              با ارسال این فرم، یک گفتگوی مقدماتی برای بررسی تناسب آغاز می‌شود. هیچ تعهدی ایجاد
              نمی‌شود.
            </p>
            <Button type="submit" variant="hero" size="xl" disabled={submitting}>
              {submitting ? "در حال ارسال..." : "ارسال درخواست"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

const Field = ({
  id,
  label,
  type = "text",
  placeholder,
  required,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) => (
  <div className="space-y-2">
    <Label htmlFor={id} className="text-sm text-foreground/85">
      {label}
    </Label>
    <Input
      id={id}
      type={type}
      placeholder={placeholder}
      required={required}
      className="h-12 border-hairline bg-surface/60 text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-primary/50"
    />
  </div>
);

export default ContactCTA;
