const steps = [
  { num: "01", title: "Discovery & Planning", desc: "We learn about your business, goals, and target audience to create a strategic plan." },
  { num: "02", title: "UI/UX Design", desc: "We craft beautiful, user-centered designs that align with your brand identity." },
  { num: "03", title: "Development", desc: "We build your website using modern technologies for optimal performance." },
  { num: "04", title: "Testing & Optimization", desc: "Rigorous testing across devices and browsers to ensure a flawless experience." },
  { num: "05", title: "Launch & Support", desc: "We launch your project and provide ongoing support and maintenance." },
];

const ProcessSection = () => (
  <section id="process" className="py-24">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <p className="text-sm font-semibold uppercase tracking-widest gradient-text">Our Process</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">How We Work</h2>
        <p className="text-muted-foreground">A streamlined process that delivers results on time, every time.</p>
      </div>
      <div className="max-w-3xl mx-auto space-y-0">
        {steps.map((step, i) => (
          <div key={step.num} className="flex gap-6 group">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-sm font-bold text-foreground flex-shrink-0">
                {step.num}
              </div>
              {i < steps.length - 1 && <div className="w-px h-full bg-border min-h-[60px]" />}
            </div>
            <div className="pb-12">
              <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="text-muted-foreground mt-2">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
