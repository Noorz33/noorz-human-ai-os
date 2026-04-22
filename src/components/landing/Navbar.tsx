import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#what", label: "دوره چیست" },
  { href: "#problem", label: "مسئله" },
  { href: "#curriculum", label: "ساختار" },
  { href: "#outcomes", label: "خروجی" },
  { href: "#instructor", label: "مدرس" },
  { href: "#why", label: "تفاوت" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-smooth ${
        scrolled ? "border-b border-hairline/60 bg-background/80 backdrop-blur-xl" : ""
      }`}
    >
      <div className="container flex h-16 items-center justify-between md:h-20">
        <a href="#" className="flex items-center gap-2">
          <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary/15 ring-1 ring-primary/40">
            <span className="absolute h-1.5 w-1.5 rounded-full bg-primary shadow-glow" />
          </span>
          <span className="font-display text-lg font-semibold tracking-wide text-foreground">
            Noorz
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-smooth hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <Button variant="hero" size="sm" asChild className="hidden md:inline-flex">
          <a href="#contact">جلسه معرفی</a>
        </Button>
        <Button variant="hero" size="sm" asChild className="md:hidden">
          <a href="#contact">تماس</a>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
