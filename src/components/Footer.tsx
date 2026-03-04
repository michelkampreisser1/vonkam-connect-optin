import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6" />
              <span className="font-heading text-lg font-bold">Vonkam Technologies</span>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Monitoring public property records to help homeowners stay informed about foreclosure case activity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#how-it-works" className="hover:opacity-100 transition-opacity">How It Works</a></li>
              <li><a href="#services" className="hover:opacity-100 transition-opacity">Services</a></li>
              <li><a href="#about" className="hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/privacy-policy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:opacity-100 transition-opacity">Terms &amp; Conditions</Link></li>
              <li><a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-xs opacity-60">
          &copy; {new Date().getFullYear()} Vonkam Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
