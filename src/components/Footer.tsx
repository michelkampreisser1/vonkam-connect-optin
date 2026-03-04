import { Link } from "react-router-dom";
import { Activity } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-hero border-t border-hero-foreground/10">
      <div className="section-container py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
                <Activity className="h-3.5 w-3.5 text-primary-foreground" />
              </div>
              <span className="font-heading text-base font-bold text-hero-foreground">Vonkam Technologies</span>
            </div>
            <p className="text-sm text-hero-muted leading-relaxed">
              Automated monitoring of public property records and foreclosure filings to help homeowners stay informed.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-hero-foreground text-sm mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm text-hero-muted">
              <li><a href="#how-it-works" className="hover:text-hero-foreground transition-colors">How It Works</a></li>
              <li><a href="#platform" className="hover:text-hero-foreground transition-colors">Platform</a></li>
              <li><a href="#about" className="hover:text-hero-foreground transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-hero-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-hero-foreground text-sm mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm text-hero-muted">
              <li><Link to="/privacy-policy" className="hover:text-hero-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-hero-foreground transition-colors">Terms &amp; Conditions</Link></li>
              <li><a href="#contact" className="hover:text-hero-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-hero-foreground/10 mt-10 pt-6 text-center text-xs text-hero-muted">
          &copy; {new Date().getFullYear()} Vonkam Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
