import { Link } from "react-router-dom";
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

const PortfolioSection = () => (
  <section id="portfolio" className="py-24">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <p className="text-sm font-semibold uppercase tracking-widest gradient-text">Portfolio</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Recent Work</h2>
        <p className="text-muted-foreground">Take a look at some of the projects we've delivered for our clients.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group glass rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-300"
          >
            <div className="h-56 overflow-hidden">
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
                <h3 className="text-xl font-semibold text-foreground mt-1">{p.title}</h3>
                <p className="text-muted-foreground text-sm mt-2">{p.desc}</p>
              </div>
              <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-primary transition-colors mt-1 flex-shrink-0" />
            </div>
          </a>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/portfolio" className="glass px-8 py-3 rounded-lg font-semibold text-foreground hover:bg-secondary transition-colors inline-block">
          View All Projects
        </Link>
      </div>
    </div>
  </section>
);

export default PortfolioSection;
