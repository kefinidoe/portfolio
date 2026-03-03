import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ResumeSection from "@/components/sections/ResumeSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Kelvin Kimani | Frontend Developer - Modern Web Solutions</title>
        <meta
          name="description"
          content="Kelvin Kimani is a professional Frontend Developer from Kenya, specializing in React.js, responsive design, and creating stunning web experiences that drive results."
        />
        <meta
          name="keywords"
          content="Frontend Developer, React Developer, Web Developer Kenya, UI/UX, Responsive Design, Kelvin Kimani"
        />
        <meta property="og:title" content="Kelvin Kimani | Frontend Developer" />
        <meta
          property="og:description"
          content="I design and develop modern, responsive websites that blend clean code with intuitive user experiences."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://kelvinkimani.dev" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ProjectsSection />
          <ResumeSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
