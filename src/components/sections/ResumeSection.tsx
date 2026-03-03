import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download, FileText, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Freelance",
    period: "2025 - Present",
    description: "Building responsive web applications for clients worldwide.",
  },
  {
    title: "Web Development Intern",
    company: "Tech Solutions",
    period: "2024 - 2025",
    description: "Collaborated on various web projects using modern frameworks.",
  },
];

const education = [
  {
    degree: "Responsive Web Design Certification",
    institution: "freeCodeCamp",
    period: "2024",
  },
  {
    degree: "JavaScript Algorithms & Data Structures",
    institution: "freeCodeCamp",
    period: "2025",
  },
  {
    degree: "Front End Development Libraries",
    institution: "freeCodeCamp",
    period: "2025",
  },
];

const ResumeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleDownload = () => {
    // Navigate to the resume page for viewing/printing
    window.open('/resume', '_blank');
  };

  return (
    <section id="resume" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-primary font-display font-medium mb-3 tracking-wider uppercase text-sm">
            My Background
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            A snapshot of my professional journey and educational background.
          </p>
          
          {/* Download Button */}
          <Button
            variant="hero"
            size="lg"
            onClick={handleDownload}
            className="gap-2"
          >
            <Download size={20} />
            Download Resume
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary" aria-hidden="true">
                <Briefcase size={24} aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground">
                Work Experience
              </h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                  <div className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
                    <p className="text-primary text-sm font-medium mb-1">{exp.period}</p>
                    <h4 className="font-display text-lg font-semibold text-foreground mb-1">
                      {exp.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-2">{exp.company}</p>
                    <p className="text-muted-foreground text-sm">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary" aria-hidden="true">
                <GraduationCap size={24} aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground">
                Education & Certifications
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                  <div className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
                    <p className="text-primary text-sm font-medium mb-1">{edu.period}</p>
                    <h4 className="font-display text-lg font-semibold text-foreground mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-muted-foreground text-sm">{edu.institution}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skills highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 p-6 rounded-2xl bg-primary/10 border border-primary/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <FileText size={20} className="text-primary" aria-hidden="true" />
                <h4 className="font-display font-semibold text-foreground">Core Technical Skills</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5", "CSS3", "Git", "Figma"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-primary/20 text-primary font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
