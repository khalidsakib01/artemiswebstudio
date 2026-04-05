import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <div className="relative rounded-2xl overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-10" />
        <div className="absolute inset-0 bg-card/80" />
        <div className="relative z-10 text-center py-20 px-8 space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Ready to Build Your Next <span className="gradient-text">Website?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Let's turn your vision into a powerful digital experience. Get in touch today.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 gradient-bg px-8 py-4 rounded-lg font-semibold text-foreground hover:opacity-90 transition-opacity text-lg">
            Start Your Project <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
