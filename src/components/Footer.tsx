import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border/50 pt-16 pb-8">
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <img src={logo} alt="Artemis Web Studio" className="h-10" />
          <p className="text-muted-foreground text-sm leading-relaxed">
            Crafting Modern Websites for Growing Businesses. We help companies succeed online with powerful, high-performance websites.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["Home", "Services", "Portfolio", "About", "Blog", "Contact"].map((l) => (
              <li key={l}>
                <Link to={l === "Home" ? "/" : l === "Services" ? "/#services" : `/${l.toLowerCase()}`} className="text-muted-foreground hover:text-foreground transition-colors">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Website Development</li>
            <li>E-commerce Development</li>
            <li>UI/UX Design</li>
            <li>Web Applications</li>
            <li>Website Optimization</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 text-muted-foreground"><Mail size={14} /> artemiswebstudio.com</li>
            <li className="flex items-center gap-2 text-muted-foreground"><Phone size={14} /> 01943869880</li>
            <li className="flex items-center gap-2 text-muted-foreground"><MapPin size={14} /> Dhaka, Bangladesh</li>
          </ul>
          <div className="flex gap-4 mt-4">
            {["LinkedIn", "Facebook", "Instagram"].map((s) => (
              <a key={s} href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">{s}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Artemis Web Studio. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
