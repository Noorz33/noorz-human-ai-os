const Footer = () => {
  return (
    <footer className="relative border-t border-hairline/60 py-12">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2">
              <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-md bg-primary/15 ring-1 ring-primary/40">
                <span className="absolute h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              <span className="font-display text-base font-semibold text-foreground">Noorz</span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Human × AI Operating System · طراحی‌شده توسط فرزاد نورعلی
            </p>
          </div>

          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Noorz. تمامی حقوق محفوظ است.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
