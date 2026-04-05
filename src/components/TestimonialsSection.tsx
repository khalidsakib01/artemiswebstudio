import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah Ahmed", company: "TechFlow Inc.", review: "Artemis Web Studio delivered an exceptional website that exceeded our expectations. Professional, creative, and highly responsive team.", rating: 5 },
  { name: "David Chen", company: "GreenLeaf Co.", review: "Their attention to detail and modern design approach transformed our online presence completely. Highly recommended!", rating: 5 },
  { name: "Maria Rodriguez", company: "ShopVibe", review: "From concept to launch, the team was incredible. Our e-commerce sales increased by 40% after the redesign.", rating: 5 },
];

const TestimonialsSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <p className="text-sm font-semibold uppercase tracking-widest gradient-text">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">What Our Clients Say</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="glass rounded-xl p-8 space-y-4">
            <div className="flex gap-1">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={16} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed">"{t.review}"</p>
            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-sm font-bold text-foreground">
                {t.name[0]}
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
