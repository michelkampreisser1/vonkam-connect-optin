const FloatingHelpButton = () => (
  <a
    href="#get-help"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center text-2xl shadow-lg hover:bg-destructive/90 transition-all animate-pulse-red"
    aria-label="Get Immediate Help"
  >
    🚨
  </a>
);

export default FloatingHelpButton;
