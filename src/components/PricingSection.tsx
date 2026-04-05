import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter Website",
    price: "Contact Us",
    desc: "Perfect for small businesses getting started online.",
    features: ["Up to 5 pages", "Responsive design", "Basic SEO setup", "Contact form", "1 month support"],
    featured: false,
  },
  {
    name: "Business Website",
    price: "Contact Us",
    desc: "For growing businesses that need more features.",
    features: ["Up to 15 pages", "Custom UI/UX design", "Advanced SEO", "CMS integration", "E-commerce ready", "3 months support"],
    featured: true,
  },
  {
    name: "Premium Custom",
    price: "Contact Us",
    desc: "Full-scale custom solution for enterprise needs.",
    features: ["Unlimited pages", "Custom web application", "API integrations", "Performance optimization", "Priority support", "12 months support"],
    featured: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-24">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <p className="text-sm font-semibold uppercase tracking-widest gradient-text">Pricing</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Simple, Transparent Pricing</h2>
        <p className="text-muted-foreground">Choose a plan that fits your business needs.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((p) => (
          <div key={p.name} className={`rounded-xl p-8 space-y-6 transition-all duration-300 hover:-translate-y-1 ${p.featured ? "gradient-border glass border-0 ring-1 ring-primary/30" : "glass"}`}>
            {p.featured && <span className="text-xs font-semibold uppercase tracking-wider gradient-text">Most Popular</span>}
            <div>
              <h3 className="text-xl font-bold text-foreground">{p.name}</h3>
              <p className="text-muted-foreground text-sm mt-1">{p.desc}</p>
            </div>
            <div className="text-3xl font-bold gradient-text">{p.price}</div>
            <ul className="space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Check size={16} className="text-primary flex-shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className={`block text-center py-3 rounded-lg font-semibold transition-all ${p.featured ? "gradient-bg text-foreground hover:opacity-90" : "glass text-foreground hover:bg-secondary"}`}
            >
              Get Started
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
