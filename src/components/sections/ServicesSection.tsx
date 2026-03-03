import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code, 
  Smartphone, 
  Palette, 
  Search, 
  Settings, 
  Layers,
  Sparkles,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Website Development",
    description: "Your brand is unique — your website should be too. I handcraft websites using HTML, CSS, and JavaScript to match your goals, tone, and audience.",
  },
  {
    icon: Smartphone,
    title: "Responsive Web Design",
    description: "People browse on every device imaginable. I design websites that adapt beautifully — from mobile screens to large monitors.",
  },
  {
    icon: Palette,
    title: "UI/UX Implementation",
    description: "I bring design prototypes to life with pixel-perfect precision. My focus is on intuitive layouts, balanced colors, and seamless navigation.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Slow websites kill engagement. I optimize performance, accessibility, and SEO structure so your site loads faster and ranks higher.",
  },
  {
    icon: Settings,
    title: "Website Maintenance",
    description: "The web evolves daily. I offer ongoing maintenance to keep your site secure, updated, and relevant — so you can focus on your business.",
  },
  {
    icon: Layers,
    title: "Frontend Frameworks",
    description: "Proficient in React.js, Tailwind CSS, and Bootstrap, I build scalable, component-driven interfaces ready for future expansion.",
  },
  {
    icon: Sparkles,
    title: "Vibe Coding",
    description: "I harness AI-powered tools to accelerate development — turning ideas into production-ready code faster without sacrificing quality, creativity, or attention to detail.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-primary font-display font-medium mb-3 tracking-wider uppercase text-sm">
            My Services
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frontend Development Services:{" "}
            <span className="text-gradient">Stunning Websites</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Every project I work on begins with one goal — to create a digital experience that reflects your story and drives real results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-elevated"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                <service.icon size={28} aria-hidden="true" />
              </div>
              
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              
              <div className="flex items-center text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more <ArrowRight size={16} className="ml-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
