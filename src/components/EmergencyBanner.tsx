const EmergencyBanner = () => (
  <div className="bg-gradient-to-r from-destructive to-red-700 text-destructive-foreground py-3 text-center mt-16">
    <div className="section-container">
      <p className="text-sm font-medium">
        <span className="font-semibold">Important:</span> Florida foreclosure sales can happen with as little as 20 days notice. If you received a notice,{" "}
        <a href="#get-help" className="underline font-bold hover:text-white/90">
          act today →
        </a>
      </p>
    </div>
  </div>
);

export default EmergencyBanner;
