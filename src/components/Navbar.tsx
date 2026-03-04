import { Link } from "react-router-dom";
import { Activity, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Platform", href: "#platform" },
    { label: "About", href: "#about" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-hero/95 backdrop-blur-lg border-b border-hero-foreground/10">
      <div className="section-container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Activity className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-heading text-lg font-bold text-hero-foreground tracking-tight">
            Vonkam
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-hero-muted hover:text-hero-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-semibold bg-primary text-primary-foreground px-5 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            Check Status
          </a>
        </nav>

        <button className="md:hidden text-hero-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-hero border-b border-hero-foreground/10">
          <nav className="section-container py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-hero-muted hover:text-hero-foreground" onClick={() => setOpen(false)}>{l.label}</a>
            ))}
            <a href="#contact" className="text-sm font-semibold bg-primary text-primary-foreground px-5 py-2 rounded-lg text-center" onClick={() => setOpen(false)}>Check Status</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
