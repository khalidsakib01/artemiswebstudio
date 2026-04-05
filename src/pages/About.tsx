import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Eye, Heart, Lightbulb } from "lucide-react";

const values = [
  { icon: Target, title: "Excellence", desc: "We deliver nothing less than our best in every project." },
  { icon: Eye, title: "Transparency", desc: "Clear communication and honest timelines throughout." },
  { icon: Heart, title: "Client-First", desc: "Your success is our success. We build partnerships, not just websites." },
  { icon: Lightbulb, title: "Innovation", desc: "We stay ahead with the latest technologies and best practices." },
];

const AboutPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <p className="text-sm font-semibold uppercase tracking-widest gradient-text">About Us</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Who We Are</h1>
          <p className="text-muted-foreground text-lg">A team of passionate developers and designers building the web of tomorrow.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-16">
          <div className="glass rounded-xl p-8 md:p-12 space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              Artemis Web Studio was founded with a simple belief: every business deserves a powerful online presence. Based in Dhaka, Bangladesh, we specialize in crafting modern, high-performance websites and web applications that help businesses grow and succeed in the digital age.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a team of experienced developers and designers, we combine creativity with technical expertise to deliver solutions that not only look stunning but also drive real business results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass rounded-xl p-8 space-y-3">
              <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to help businesses succeed online through powerful, modern, and high-performance websites that convert visitors into customers.
              </p>
            </div>
            <div className="glass rounded-xl p-8 space-y-3">
              <h3 className="text-xl font-bold text-foreground">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become one of the most trusted web development agencies, known for delivering exceptional digital experiences that make a real impact.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">Our Values</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((v) => (
                <div key={v.title} className="glass rounded-xl p-6 flex gap-4">
                  <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                    <v.icon size={24} className="text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{v.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default AboutPage;
