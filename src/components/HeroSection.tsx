import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    {/* Background effects */}
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-border/20 animate-float" />
    </div>

    <div className="container mx-auto px-4 relative z-10 text-center">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-muted-foreground animate-fade-in">
          <span className="w-2 h-2 rounded-full gradient-bg" />
          Web Development Agency
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Building Powerful Websites for{" "}
          <span className="gradient-text">Modern Businesses</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          We design and develop modern websites, web apps, and e-commerce platforms that help companies grow online.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Link to="/contact" className="gradient-bg px-8 py-4 rounded-lg font-semibold text-foreground hover:opacity-90 transition-opacity flex items-center gap-2 text-lg">
            Start Your Project <ArrowRight size={20} />
          </Link>
          <Link to="/portfolio" className="glass px-8 py-4 rounded-lg font-semibold text-foreground hover:bg-secondary transition-colors text-lg">
            View Portfolio
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
