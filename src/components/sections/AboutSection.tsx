import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap, Globe } from "lucide-react";
import profileImage from "@/assets/kelvin-profile.jpg";

const skills = [
  { icon: Code2, label: "HTML5, CSS3, JavaScript (ES6+)" },
  { icon: Palette, label: "React.js & Component Architecture" },
  { icon: Zap, label: "Vibe Coding — AI-Powered Development" },
  { icon: Globe, label: "Stunning Modern Landing Pages" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Background decorative elements */}
              <div className="absolute -top-6 -left-6 w-full h-full bg-primary/10 rounded-2xl" />
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/20 rounded-2xl" />
              
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={profileImage}
                  alt="Kelvin Kimani - Frontend Developer from Nakuru, Kenya working on web development projects"
                  className="w-full aspect-[4/5] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-primary font-display font-medium mb-3 tracking-wider uppercase text-sm">
              About Me
            </p>
            
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              About Kelvin Kimani: Code, Creativity &{" "}
              <span className="text-gradient">Connection</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Hey there — I'm <strong className="text-foreground">Kelvin Kimani</strong>, a Frontend Developer from Nakuru, Kenya, passionate about turning ideas into engaging digital experiences.
              </p>
              <p>
                My journey began with pure curiosity — a fascination with how a few lines of code could transform a blank screen into something interactive, alive, and purposeful.
              </p>
              <p>
                Today, that curiosity fuels my mission to build websites that don't just "look" good, but also "feel" good to use. I specialize in HTML, CSS, JavaScript, and modern libraries like React.js — creating responsive, accessible, and high-performing web interfaces.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary" aria-hidden="true">
                    <skill.icon size={20} aria-hidden="true" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{skill.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <div className="text-5xl text-primary/30 font-serif leading-none mb-4">"</div>
          <p className="text-xl md:text-2xl text-foreground/80 font-display italic leading-relaxed">
            I believe great design starts with empathy — understanding how users think, feel, and interact. Code is just the tool; connection is the goal.
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default AboutSection;
