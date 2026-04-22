import Section from "./Section";

const WhatIsIt = () => {
  return (
    <Section
      id="what"
      eyebrow="این دوره دقیقاً چیست؟"
      title={
        <>
          خریدار سازمان است،
          <br />
          <span className="text-gradient-green">یادگیرنده فرد است.</span>
        </>
      }
      subtitle="نورز یک دوره مشترک تیمی نیست. سازمان تعداد محدودی از افراد کلیدی خود را معرفی می‌کند، و هر فرد یاد می‌گیرد چگونه برای نقش شغلی خودش، یک سیستم شخصی کار با AI بسازد."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {[
          {
            title: "این دوره نیست",
            kind: "negative",
            items: [
              "تحول فرایندی تیمی",
              "بازطراحی workflow سازمان",
              "کلاس عمومی ابزارهای AI",
            ],
          },
          {
            title: "این دوره هست",
            kind: "positive",
            items: [
              "ساخت سیستم شخصی کار با AI",
              "متناسب با نقش واقعی هر فرد",
              "خروجی قابل دفاع، نه نمایشی",
            ],
          },
          {
            title: "نتیجه برای سازمان",
            kind: "neutral",
            items: [
              "چند نفر کلیدی با مدل کاری جدید",
              "انتقال‌پذیر در پروژه‌های واقعی",
              "ارتقاء کیفیت تصمیم و اجرا",
            ],
          },
        ].map((col) => (
          <div
            key={col.title}
            className={`glass-panel edge-glow rounded-2xl p-7 ${
              col.kind === "positive" ? "ring-1 ring-primary/30" : ""
            }`}
          >
            <h3
              className={`mb-5 font-display text-lg font-semibold ${
                col.kind === "positive"
                  ? "text-primary"
                  : col.kind === "negative"
                  ? "text-muted-foreground"
                  : "text-foreground"
              }`}
            >
              {col.title}
            </h3>
            <ul className="space-y-3 text-sm leading-loose text-foreground/85">
              {col.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                      col.kind === "positive" ? "bg-primary" : "bg-muted-foreground/60"
                    }`}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default WhatIsIt;
