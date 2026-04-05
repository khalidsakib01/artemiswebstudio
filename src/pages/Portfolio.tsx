import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";
import vellezaImg from "@/assets/portfolio-velleza.png";
import vellegaImg from "@/assets/portfolio-vellega.png";
import startrekImg from "@/assets/portfolio-startrek.png";

const projects = [
  {
    title: "Velleza",
    category: "E-commerce",
    desc: "Luxury fashion e-commerce platform with elegant design and seamless shopping experience.",
    image: vellezaImg,
    link: "https://velleza.vercel.app",
  },
  {
    title: "Vellega",
    category: "E-commerce",
    desc: "Premium fashion store for Bangladesh with cash on delivery and fast shipping.",
    image: vellegaImg,
    link: "https://trek.bolt.host",
  },
  {
    title: "Star Trek",
    category: "E-commerce",
    desc: "Curated fashion brand delivering premium fabrics and contemporary cuts across Bangladesh.",
    image: startrekImg,
    link: "https://star-trek-three.vercel.app",
  },
];

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <p className="text-sm font-semibold uppercase tracking-widest gradient-text">Portfolio</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Our Work</h1>
            <p className="text-muted-foreground">Explore our latest projects and case studies.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex items-start justify-between">
                  <div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">{p.category}</span>
                    <h3 className="text-lg font-semibold text-foreground mt-1">{p.title}</h3>
                    <p className="text-muted-foreground text-sm mt-2">{p.desc}</p>
                  </div>
                  <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
