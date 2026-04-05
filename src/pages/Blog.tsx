import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const posts = [
  { slug: "modern-web-design-trends", title: "Modern Web Design Trends in 2026", excerpt: "Explore the latest design trends shaping the future of web development.", category: "Web Design", date: "Apr 1, 2026" },
  { slug: "seo-best-practices", title: "SEO Best Practices for New Websites", excerpt: "A comprehensive guide to optimizing your website for search engines from day one.", category: "SEO", date: "Mar 25, 2026" },
  { slug: "website-performance", title: "Why Website Speed Matters for Your Business", excerpt: "Learn how website performance directly impacts user experience and conversions.", category: "Optimization", date: "Mar 18, 2026" },
  { slug: "digital-strategy-startups", title: "Digital Strategy Guide for Startups", excerpt: "Build a strong online presence with these proven digital marketing strategies.", category: "Digital Strategy", date: "Mar 10, 2026" },
];

const BlogPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <p className="text-sm font-semibold uppercase tracking-widest gradient-text">Blog</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Insights & Articles</h1>
          <p className="text-muted-foreground">Tips, guides, and insights on web development and digital strategy.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {posts.map((post) => (
            <article key={post.slug} className="group glass rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-300">
              <div className="h-48 gradient-bg opacity-30 group-hover:opacity-50 transition-opacity flex items-center justify-center">
                <span className="text-foreground/40 font-medium">{post.category}</span>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="text-primary font-medium">{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{post.title}</h2>
                <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                  Read More <ArrowRight size={14} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default BlogPage;
