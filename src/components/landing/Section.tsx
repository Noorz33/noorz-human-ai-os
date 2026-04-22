import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  align?: "right" | "center";
}

const Section = ({ id, eyebrow, title, subtitle, children, align = "right" }: SectionProps) => {
  return (
    <section id={id} className="section-pad relative">
      <div className="container relative">
        <header className={`mb-14 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
          {eyebrow && (
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-hairline/60 bg-surface/60 px-3 py-1 text-xs font-medium text-primary">
              <span className="h-1 w-1 rounded-full bg-primary" />
              <span className="font-display tracking-wider">{eyebrow}</span>
            </div>
          )}
          <h2 className="font-display text-3xl font-bold leading-tight text-foreground md:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-5 text-base leading-loose text-muted-foreground md:text-lg">{subtitle}</p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
};

export default Section;
