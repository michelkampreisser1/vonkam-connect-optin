import { useState } from "react";
import { Menu, X } from "lucide-react";

const SiteNavbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Services", href: "#services" },
    { label: "FAQ", href: "#faq" },
    { label: "About", href: "#about" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms", href: "/terms" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="section-container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="2 12 6 8 10 14 14 6 18 16 22 12" />
            </svg>
          </div>
          <span className="font-heading text-xl font-bold text-foreground tracking-tight">
            Vonkam
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#get-help"
            className="text-sm font-semibold bg-destructive text-destructive-foreground px-5 py-2.5 rounded-lg hover:bg-destructive/90 transition-all animate-pulse-red"
          >
            Get Immediate Help
          </a>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-b border-border">
          <nav className="section-container py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#get-help"
              className="text-sm font-semibold bg-destructive text-destructive-foreground px-5 py-2.5 rounded-lg text-center"
              onClick={() => setOpen(false)}
            >
              Get Immediate Help
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default SiteNavbar;
