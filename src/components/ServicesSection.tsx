import { Globe, Smartphone, ShoppingCart, Palette, FileText, Zap, Wrench } from "lucide-react";

const services = [
  { icon: Globe, title: "Website Development", desc: "Custom-built websites that are fast, responsive, and designed to convert visitors into customers." },
  { icon: Smartphone, title: "Custom Web Applications", desc: "Powerful web applications built with modern frameworks to streamline your business operations." },
  { icon: ShoppingCart, title: "E-commerce Development", desc: "Scalable online stores with seamless checkout experiences and inventory management." },
  { icon: Palette, title: "UI/UX Design", desc: "User-centered design that creates intuitive and visually stunning digital experiences." },
  { icon: FileText, title: "Landing Page Design", desc: "High-converting landing pages optimized for lead generation and marketing campaigns." },
  { icon: Zap, title: "Website Optimization", desc: "Speed optimization, SEO improvements, and performance tuning for existing websites." },
  { icon: Wrench, title: "Website Maintenance", desc: "Ongoing support, updates, and maintenance to keep your website running smoothly." },
];

const ServicesSection = () => (
  <section id="services" className="py-24">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <p className="text-sm font-semibold uppercase tracking-widest gradient-text">Our Services</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Everything You Need to Succeed Online</h2>
        <p className="text-muted-foreground">From concept to launch and beyond, we provide end-to-end web solutions.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((s) => (
          <div key={s.title} className="group glass rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <s.icon size={24} className="text-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
