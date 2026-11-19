import { Link } from "react-router-dom";

const SiteFooter = () => (
  <footer className="bg-navy text-gray-400 py-14">
    <div className="section-container">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="2 12 6 8 10 14 14 6 18 16 22 12" />
              </svg>
            </div>
            <span className="font-heading text-base font-bold text-white">Vonkam Technologies LLC</span>
          </div>
          <p className="text-sm font-body leading-relaxed">
            Foreclosure options and property solutions for homeowners in Miami-Dade and Broward.
          </p>
          <p className="text-sm font-body leading-relaxed mt-4">
            90 Southwest 3rd Street, Suite 4103, Miami, FL 33130<br />
            <a href="tel:+13053072914" className="hover:text-white underline">(305) 307-2914</a><br />
            <a href="mailto:michel@vonkam.com" className="hover:text-white underline">michel@vonkam.com</a>
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-white text-sm mb-4">Navigation</h4>
          <ul className="space-y-2.5 text-sm font-body">
            <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            <li><a href="#get-help" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-white text-sm mb-4">Legal</h4>
          <ul className="space-y-2.5 text-sm font-body">
            <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link></li>
            <li><a href="#get-help" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-8">
        <p className="text-xs font-body leading-relaxed text-center text-gray-500">
          © {new Date().getFullYear()} Vonkam Technologies LLC. Serving Miami-Dade and Broward County, Florida. Vonkam Technologies LLC monitors public property records, buys properties directly, and introduces homeowners to licensed professionals. Vonkam is not a law firm, a lender, or a financial advisor and does not provide legal or financial advice. No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.
        </p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
