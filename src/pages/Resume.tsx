import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Resume = () => {
  const navigate = useNavigate();

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Helmet>
        <title>Kelvin Kimani Resume | Frontend Developer CV</title>
        <meta
          name="description"
          content="Download Kelvin Kimani's professional resume. Frontend Developer specializing in React.js, TypeScript, and modern web development."
        />
      </Helmet>

      {/* Print Controls - Hidden when printing */}
      <div className="print:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
            <ArrowLeft size={18} aria-hidden="true" />
            Back to Portfolio
          </Button>
          <Button onClick={handlePrint} className="gap-2">
            <Download size={18} aria-hidden="true" />
            Download PDF
          </Button>
        </div>
      </div>

      {/* Resume Content */}
      <div className="min-h-screen bg-white print:bg-white pt-20 print:pt-0">
        <div className="max-w-[8.5in] mx-auto bg-white p-8 md:p-12 print:p-8 shadow-lg print:shadow-none">
          
          {/* Header */}
          <header className="text-center mb-8 pb-6 border-b-2 border-gray-800">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              KELVIN KIMANI
            </h1>
            <p className="text-lg md:text-xl text-primary font-semibold mb-4">
              Frontend Developer
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <a href="mailto:kelvinmwangi1744@gmail.com" className="hover:text-primary">
                kelvinmwangi1744@gmail.com
              </a>
              <span className="hidden sm:inline">•</span>
              <a href="tel:+254759809502" className="hover:text-primary">
                +254 759 809 502
              </a>
              <span className="hidden sm:inline">•</span>
              <span>Nakuru, Kenya</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mt-2">
              <a href="https://github.com/kefinidoe" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                github.com/kefinidoe
              </a>
              <span className="hidden sm:inline">•</span>
              <a href="https://www.linkedin.com/in/kelvin-kimani-9b10822b4/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                linkedin.com/in/kelvin-kimani
              </a>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider mb-3 border-b border-gray-300 pb-1">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Passionate and detail-oriented Frontend Developer with hands-on experience building responsive, 
              user-friendly web applications. Proficient in React.js, TypeScript, JavaScript, and modern CSS 
              frameworks including Tailwind CSS. Dedicated to writing clean, maintainable code and creating 
              intuitive user interfaces that deliver exceptional user experiences. Strong foundation in web 
              performance optimization, SEO best practices, and accessibility standards.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider mb-3 border-b border-gray-300 pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Languages & Frameworks</h3>
                <p className="text-gray-700 text-sm">JavaScript (ES6+), TypeScript, React.js, HTML5, CSS3</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Styling & UI</h3>
                <p className="text-gray-700 text-sm">Tailwind CSS, Bootstrap, Framer Motion, Responsive Design</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Tools & Platforms</h3>
                <p className="text-gray-700 text-sm">Git, GitHub, VS Code, Figma, Vercel, Vite</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Other Skills</h3>
                <p className="text-gray-700 text-sm">REST APIs, SEO Optimization, Web Accessibility, UI/UX Principles</p>
              </div>
            </div>
          </section>

          {/* Professional Experience */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider mb-3 border-b border-gray-300 pb-1">
              Professional Experience
            </h2>
            
            <div className="mb-5">
              <div className="flex flex-wrap justify-between items-start mb-1">
                <h3 className="font-semibold text-gray-900">Frontend Developer</h3>
                <span className="text-sm text-gray-600">2025 - Present</span>
              </div>
              <p className="text-primary font-medium text-sm mb-2">Freelance | Remote</p>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 ml-2">
                <li>Design and develop responsive web applications for clients across various industries</li>
                <li>Build modern React.js applications with TypeScript, ensuring type safety and code quality</li>
                <li>Implement pixel-perfect UI designs using Tailwind CSS and custom animations with Framer Motion</li>
                <li>Optimize website performance and implement SEO best practices for improved search rankings</li>
                <li>Collaborate directly with clients to gather requirements and deliver solutions that exceed expectations</li>
              </ul>
            </div>

            <div className="mb-5">
              <div className="flex flex-wrap justify-between items-start mb-1">
                <h3 className="font-semibold text-gray-900">Web Development Intern</h3>
                <span className="text-sm text-gray-600">2024 - 2025</span>
              </div>
              <p className="text-primary font-medium text-sm mb-2">Tech Solutions | Kenya</p>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 ml-2">
                <li>Collaborated with senior developers on multiple web projects using modern frameworks</li>
                <li>Developed reusable UI components following best practices and design system guidelines</li>
                <li>Participated in code reviews and implemented feedback to improve code quality</li>
                <li>Gained hands-on experience with Git version control and agile development methodologies</li>
                <li>Assisted in debugging and troubleshooting front-end issues across various browsers</li>
              </ul>
            </div>
          </section>

          {/* Featured Projects */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider mb-3 border-b border-gray-300 pb-1">
              Featured Projects
            </h2>
            
            <div className="space-y-4">
              <div>
                <div className="flex flex-wrap justify-between items-start">
                  <h3 className="font-semibold text-gray-900">Axis Hotel Nakuru</h3>
                  <a href="https://nakuruaxishotel.co.ke" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                    nakuruaxishotel.co.ke
                  </a>
                </div>
                <p className="text-gray-700 text-sm">
                  Premium hotel booking website featuring elegant UI, room galleries, WhatsApp booking integration, 
                  and smooth animations. Built with React.js, TypeScript, Tailwind CSS, and Framer Motion.
                </p>
              </div>

              <div>
                <div className="flex flex-wrap justify-between items-start">
                  <h3 className="font-semibold text-gray-900">HouseLink Kenya</h3>
                  <a href="https://house-link-kenya.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                    house-link-kenya.vercel.app
                  </a>
                </div>
                <p className="text-gray-700 text-sm">
                  Smart house hunting platform for students and professionals in Kenya with verified listings, 
                  search filters, and landlord portal. Built with HTML5, CSS3, and JavaScript.
                </p>
              </div>

              <div>
                <div className="flex flex-wrap justify-between items-start">
                  <h3 className="font-semibold text-gray-900">Personal Portfolio</h3>
                  <a href="https://kefinidoe.github.io/Kelvin-Mwangi-portfolio/" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                    kefinidoe.github.io
                  </a>
                </div>
                <p className="text-gray-700 text-sm">
                  Responsive single-page portfolio showcasing my development journey with smooth scrolling, 
                  interactive elements, and section-based navigation. Built with HTML5, CSS3, and JavaScript.
                </p>
              </div>
            </div>
          </section>

          {/* Education & Certifications */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider mb-3 border-b border-gray-300 pb-1">
              Education & Certifications
            </h2>
            
            <div className="space-y-3">
              <div className="flex flex-wrap justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">Front End Development Libraries Certification</h3>
                  <p className="text-gray-600 text-sm">freeCodeCamp</p>
                </div>
                <span className="text-sm text-gray-600">2025</span>
              </div>

              <div className="flex flex-wrap justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">JavaScript Algorithms & Data Structures Certification</h3>
                  <p className="text-gray-600 text-sm">freeCodeCamp</p>
                </div>
                <span className="text-sm text-gray-600">2025</span>
              </div>

              <div className="flex flex-wrap justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">Responsive Web Design Certification</h3>
                  <p className="text-gray-600 text-sm">freeCodeCamp</p>
                </div>
                <span className="text-sm text-gray-600">2024</span>
              </div>
            </div>
          </section>

          {/* Additional Information */}
          <section>
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider mb-3 border-b border-gray-300 pb-1">
              Additional Information
            </h2>
            <div className="text-gray-700 text-sm space-y-1">
              <p><strong>Languages:</strong> English (Fluent), Swahili (Native)</p>
              <p><strong>Interests:</strong> Open Source Contribution, UI/UX Design, Tech Communities, Continuous Learning</p>
              <p><strong>Availability:</strong> Open to freelance projects and full-time opportunities</p>
            </div>
          </section>

        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 0.5in;
          }
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Resume;
