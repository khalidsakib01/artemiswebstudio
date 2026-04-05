import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", company: "", projectType: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", company: "", projectType: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <p className="text-sm font-semibold uppercase tracking-widest gradient-text">Contact Us</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Let's Work Together</h1>
            <p className="text-muted-foreground">Have a project in mind? We'd love to hear about it.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "artemiswebstudio.com" },
                { icon: Phone, label: "Phone", value: "01943869880" },
                { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh" },
              ].map((item) => (
                <div key={item.label} className="glass rounded-xl p-6 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} className="text-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-foreground font-medium text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
              <a
                href="https://wa.me/8801943869880"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 glass rounded-xl p-6 hover:border-primary/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[hsl(142_70%_45%)] flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={20} className="text-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">WhatsApp</p>
                  <p className="text-foreground font-medium text-sm">Chat with us</p>
                </div>
              </a>
            </div>

            <form onSubmit={handleSubmit} className="lg:col-span-2 glass rounded-xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Name</label>
                  <input
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Email</label>
                  <input
                    required
                    type="email"
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Company</label>
                  <input
                    maxLength={100}
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Project Type</label>
                  <select
                    value={form.projectType}
                    onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select type</option>
                    <option>Website Development</option>
                    <option>E-commerce</option>
                    <option>Web Application</option>
                    <option>UI/UX Design</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">Message</label>
                <textarea
                  required
                  maxLength={1000}
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button type="submit" className="w-full gradient-bg py-3 rounded-lg font-semibold text-foreground hover:opacity-90 transition-opacity">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;
