import { Rocket, Smartphone, Zap, Search, Layers, Headphones } from "lucide-react";

const reasons = [
  { icon: Rocket, title: "Modern Technology Stack", desc: "React, Next.js, Node.js, and Tailwind CSS for cutting-edge solutions." },
  { icon: Smartphone, title: "Mobile-First Design", desc: "Every project is built responsive from the ground up." },
  { icon: Zap, title: "Fast Loading Performance", desc: "Optimized for speed to deliver the best user experience." },
  { icon: Search, title: "SEO-Optimized", desc: "Built with search engine visibility in mind from day one." },
  { icon: Layers, title: "Scalable Architecture", desc: "Solutions that grow with your business needs." },
  { icon: Headphones, title: "Ongoing Support", desc: "Dedicated support and maintenance after launch." },
];

const WhyChooseSection = () => (
  <section className="py-24 border-y border-border/50">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <p className="text-sm font-semibold uppercase tracking-widest gradient-text">Why Choose Us</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why Artemis Web Studio?</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((r) => (
          <div key={r.title} className="text-center space-y-3">
            <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mx-auto">
              <r.icon size={28} className="text-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">{r.title}</h3>
            <p className="text-muted-foreground text-sm">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
