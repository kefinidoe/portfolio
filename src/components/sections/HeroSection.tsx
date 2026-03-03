import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, ChevronLeft, ChevronRight, MessageCircle, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage1 from "@/assets/kelvin-profile.jpg";
import profileImage2 from "@/assets/kelvin-2.png";
import profileImage3 from "@/assets/kelvin-3.jpg";
import { useState, useEffect } from "react";

// Multiple profile images for the slider
const profileImages = [
  profileImage1,
  profileImage2,
  profileImage3,
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Preload images to prevent flicker during crossfades
  useEffect(() => {
    profileImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % profileImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % profileImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + profileImages.length) % profileImages.length);
  };

  return (
    <section className="min-h-screen hero-gradient relative flex items-center">
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-primary font-display font-medium mb-3 sm:mb-4 tracking-wider uppercase text-xs sm:text-sm"
            >
              Frontend Developer
            </motion.p>
            
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground leading-tight mb-3 sm:mb-6">
              Hi, I'm{" "}
              <span className="text-gradient">Kelvin Kimani</span>
            </h1>
            
            <p className="text-primary-foreground/70 text-sm sm:text-base lg:text-lg leading-relaxed mb-5 sm:mb-8 max-w-xl mx-auto lg:mx-0">
              I design and develop modern, responsive websites that blend clean code with intuitive user experiences. My focus is on crafting interfaces that not only look great but perform seamlessly across all devices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-10 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="w-full sm:w-auto text-sm sm:text-base" asChild>
                <a href="#contact">Work With Me</a>
              </Button>
              <Button variant="heroOutline" size="lg" className="w-full sm:w-auto text-sm sm:text-base text-primary-foreground border-primary-foreground/30 hover:border-primary-foreground/60 hover:bg-primary-foreground/10" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 justify-center lg:justify-start">
              <span className="text-primary-foreground/50 text-xs sm:text-sm font-medium">Connect:</span>
              <div className="flex gap-2 sm:gap-3 flex-wrap justify-center">
                <a
                  href="https://github.com/kefinidoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-primary hover:border-primary transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/kelvin-kimani-9b10822b4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-primary hover:border-primary transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
                </a>
                <a
                  href="https://wa.me/254759809502"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-primary hover:border-primary transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
                </a>
                <a
                  href="https://www.facebook.com/kelvinowens.mwangi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-primary hover:border-primary transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={16} className="sm:w-[18px] sm:h-[18px]" />
                </a>
                <a
                  href="https://twitter.com/KelvinOwe001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-primary hover:border-primary transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter size={16} className="sm:w-[18px] sm:h-[18px]" />
                </a>
                <a
                  href="mailto:kelvinmwangi1744@gmail.com"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-primary hover:border-primary transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Profile Image Slider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-full border-2 border-primary/30 animate-pulse" />
              <div className="absolute -inset-6 sm:-inset-8 rounded-full border border-primary/10" />
              
              {/* Image Slider */}
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-[380px] xl:h-[380px] rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl relative z-10">
                <AnimatePresence mode="sync" initial={false}>
                  <motion.img
                    key={currentImage}
                    src={profileImages[currentImage]}
                    alt="Kelvin Kimani - Frontend Developer"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </AnimatePresence>
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/80 hover:bg-primary flex items-center justify-center text-primary-foreground transition-all duration-300 z-20"
                aria-label="Previous image"
              >
                <ChevronLeft size={16} className="sm:w-[18px] sm:h-[18px]" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/80 hover:bg-primary flex items-center justify-center text-primary-foreground transition-all duration-300 z-20"
                aria-label="Next image"
              >
                <ChevronRight size={16} className="sm:w-[18px] sm:h-[18px]" />
              </button>
              
              {/* Dots indicator */}
              <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {profileImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImage ? "bg-primary w-5 sm:w-6" : "bg-primary/40"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full glow-primary blur-2xl opacity-50 pointer-events-none" />
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden sm:flex"
        >
          <span className="text-primary-foreground/40 text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="text-primary" size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
