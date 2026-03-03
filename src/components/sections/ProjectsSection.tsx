import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "PCEA St. Ninian's Church",
    category: "Church Website",
    description: "A comprehensive church website for PCEA St. Ninian's Millimani Parish in Nakuru. Features service schedules, ministries showcase, sermons, events, prayer requests, online giving, and a school section.",
    challenge: "The church needed a modern digital presence to connect with their congregation, share sermons, manage events, and enable online giving and prayer requests.",
    solution: "Built a feature-rich multi-page website with worship service info, ministry pages, district management, sermon archives, and integrated giving and prayer request systems.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "https://pceastninians.lovable.app/assets/congregation-worship-DU-kKyrV.jpg",
    liveUrl: "https://pceastninians.lovable.app",
    githubUrl: "https://github.com/kefinidoe",
  },
  {
    title: "Axis Hotel Nakuru",
    category: "Hotel Website",
    description: "A premium hotel booking website for Axis Hotel in Nakuru, Kenya. Features elegant UI, room browsing, WhatsApp booking integration, and responsive design.",
    challenge: "The hotel needed a professional online presence to showcase their rooms and services while making it easy for guests to book.",
    solution: "Built a modern React-based website with smooth animations, optimized imagery, room galleries, and integrated WhatsApp for easy bookings.",
    tech: ["React.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    image: "https://axis-hotel.vercel.app/assets/hero-hotel-C9F-w9Li.jpg",
    liveUrl: "https://nakuruaxishotel.co.ke",
    githubUrl: "https://github.com/kefinidoe",
  },
  {
    title: "Personal Portfolio v1",
    category: "Portfolio Website",
    description: "My first portfolio website showcasing my journey as a frontend developer. Clean design with smooth animations and project showcases.",
    challenge: "Needed a professional portfolio to demonstrate my skills and attract potential clients and employers.",
    solution: "Created a responsive single-page portfolio with section-based navigation, smooth scrolling, and interactive elements.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    liveUrl: "https://kefinidoe.github.io/Kelvin-Mwangi-portfolio/",
    githubUrl: "https://github.com/kefinidoe/Kelvin-Mwangi-portfolio",
  },
  {
    title: "HouseLink Kenya",
    category: "Web Application",
    description: "A smart house hunting platform for students and professionals in Kenya. Features verified listings, search filters by house type and price range, and landlord portal for posting vacancies.",
    challenge: "Students and professionals needed an easy way to find verified housing near campuses and workplaces across Kenya.",
    solution: "Built a user-friendly platform with location-based search, price filtering, verified listing badges, and direct caretaker contact integration.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: "https://i.pinimg.com/736x/ef/2d/4c/ef2d4c84b3c337aebe8e0652d8cb5175.jpg",
    liveUrl: "https://house-link-kenya.vercel.app/",
    githubUrl: "https://github.com/kefinidoe",
  },
  {
    title: "Real Estate Listings",
    category: "Web Application",
    description: "A comprehensive real estate platform featuring property listings, advanced search filters, and virtual tour capabilities.",
    challenge: "Users needed an easy way to browse, filter, and compare multiple property listings.",
    solution: "Developed a responsive grid-based UI with lazy loading, interactive maps, and detailed property views.",
    tech: ["React.js", "CSS3", "REST API"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-primary font-display font-medium mb-3 tracking-wider uppercase text-sm">
            Featured Work
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Web Development Projects That{" "}
            <span className="text-gradient">Deliver Results</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A selection of projects where I've transformed ideas into functional, beautiful web experiences.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative rounded-xl overflow-hidden shadow-elevated">
                    <img
                      src={project.image}
                      alt={`${project.title} - ${project.category} project screenshot showing ${project.tech.join(', ')} implementation`}
                      className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                      <div className="flex gap-3">
                        <a
                          href={project.liveUrl}
                          className="w-12 h-12 rounded-full bg-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                          aria-label={`View ${project.title} live website`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={20} aria-hidden="true" />
                        </a>
                        <a
                          href={project.githubUrl}
                          className="w-12 h-12 rounded-full bg-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                          aria-label={`View ${project.title} source code on GitHub`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={20} aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  {project.category}
                </span>
                
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4" id={`project-${index}`}>
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-1">
                      The Challenge
                    </h4>
                    <p className="text-muted-foreground text-sm">{project.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-1">
                      My Solution
                    </h4>
                    <p className="text-muted-foreground text-sm">{project.solution}</p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md bg-secondary text-secondary-foreground text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button variant="default" size="lg" asChild>
                  <a href={project.liveUrl}>
                    View Project <ArrowRight size={18} className="ml-2" />
                  </a>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
