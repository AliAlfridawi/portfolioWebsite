import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Github, Linkedin, Fish, Waves, Shell} from 'lucide-react';

// Portfolio Data - Easy to edit
const portfolioData = {
  header: {
    name: 'Ali Alfridawi',
    title: 'Electrical Engineering Student',
    bio: 'Young engineer passionate about photonics excited to participate in research and innovate in the field of electrical engineering.',
  },
  about: {
    content:
      "I am a Freshman in Electrical Engineering at the University of Texas at Arlington, with strong interests in research, photonics, and signal processing. As I continue developing my programming skills, I'm committed to creating clear, well-structured documentation for both personal and academic projects using GitHub. I am eager to learn, collaborate, and connect with others in engineering and research communities, and I'm open to networking and new opportunities.",
  },
  education: [
    {
      degree: 'Bachelor of Science in Electrical Engineering',
      school: 'University of Texas at Arlington',
      year: '2029',
    },
  ],
  experience: [
    {
      role: 'Undergraduate Research Assistant',
      company: 'University of Texas at Arlington',
      date: '2025 - Present',
      description:
        'Developed Python scripts with NumPy, SciPy, Pandas, and S4 to model and analyze nanophotonics experiments, enabling faster data processing and uncovering key optical patterns that guided subsequent experimental designs.',
    },
    {
      role: 'IT Intern',
      company: 'iFortriss',
      date: '2024 - 2025',
      description:
        'Engineered and tested a secure office network infrastructure with a patch panel, a firewall, a ticketing system, wireless access points, and a server, resulting in more reliable network performance and faster issue resolution.',
    },
  ],
  skills: [
    'Python',
    'MATLAB',
    'C/C++',
    'Multisim',
    'Altium',
    'KiCad',
    'Git',
  ],
  contact: {
    email: 'ama3373@mavas.uta.edu',
    github: 'https://github.com/AliAlfridawi',
    linkedin: 'https://www.linkedin.com/in/alialfridawi/',
  },
};

// Decorative Coral Component
const CoralIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 20 Q45 30 50 40 Q40 45 35 55 Q45 50 50 60 Q55 50 65 55 Q60 45 50 40" fill="currentColor" />
    <path d="M50 60 Q40 70 45 85 Q50 75 50 85 Q50 75 55 85 Q60 70 50 60" fill="currentColor" />
    <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.6" />
  </svg>
);

// Floating Bubble Component
const Bubble = ({ size, delay, duration, left, bottom }) => (
  <div
    className="absolute rounded-full bg-cyan-300 opacity-10 pointer-events-none"
    style={{
      width: size,
      height: size,
      left: left,
      bottom: bottom,
      animation: `float ${duration}s ease-in-out ${delay}s infinite`,
    }}
  />
);

// Seaweed Component
const Seaweed = ({ className }) => (
  <svg className={className} viewBox="0 0 100 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 0 Q40 40 45 80 Q50 120 40 160 Q35 200 45 240 Q50 270 50 300" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <path d="M50 20 Q55 60 50 100 Q45 140 55 180 Q60 220 50 260" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
    <circle cx="50" cy="80" r="3" fill="currentColor" opacity="0.4" />
    <circle cx="45" cy="150" r="2" fill="currentColor" opacity="0.3" />
    <circle cx="52" cy="220" r="3" fill="currentColor" opacity="0.4" />
  </svg>
);

// Accordion Section Component
const AccordionSection = ({ title, isOpen, onToggle, icon: Icon, children }) => {
  return (
    <div className="border-b border-cyan-500 border-opacity-30 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between hover:bg-cyan-500 hover:bg-opacity-10 transition-all duration-300"
      >
        <div className="flex items-center gap-4">
          {Icon && <Icon className={`w-6 h-6 text-cyan-400 hover:scale-110 transition-all duration-300 ${isOpen ? 'animate-pulse-slow' : ''}`} />}
          <h2 className={`text-lg font-bold text-cyan-50 hover:text-cyan-300 transition-colors duration-300 ${isOpen ? 'text-cyan-200' : ''}`}>
            {title}
          </h2>
        </div>
        <ChevronDown
          className={`w-6 h-6 text-cyan-400 transition-all duration-500 hover:scale-110 ${
            isOpen ? 'rotate-180 scale-110' : ''
          }`}
        />
      </button>

      <div className={`accordion-grid ${isOpen ? 'open' : ''}`}>
        <div className="accordion-inner bg-blue-900 bg-opacity-40 border-t border-cyan-500 border-opacity-30 backdrop-blur-md px-6 py-6">
          {children}
        </div>
      </div>
    </div>
  );
};

// Main Portfolio Component
export default function Portfolio() {
  const [openSection, setOpenSection] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Show loading animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  if (isLoading) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center">
        {/* Loading animation background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <Bubble size="40px" delay="0" duration="6" left="10%" bottom="20%" />
          <Bubble size="60px" delay="1" duration="8" left="80%" bottom="40%" />
          <Bubble size="30px" delay="2" duration="7" left="20%" bottom="60%" />
          <Bubble size="50px" delay="3" duration="9" left="70%" bottom="15%" />
          <Bubble size="35px" delay="0.5" duration="7.5" left="50%" bottom="50%" />
        </div>

        {/* Loading content */}
        <div className="relative z-10 text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative w-20 h-20">
              {/* Rotating circle */}
              <div className="absolute inset-0 rounded-full border-4 border-cyan-500 border-opacity-20"></div>
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-400 border-r-cyan-400 animate-spin"></div>
              
              {/* Center fish icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Fish className="w-8 h-8 text-cyan-400 animate-pulse" />
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-cyan-300 mb-2">Diving into the Ocean...</h2>
          <p className="text-cyan-200 text-opacity-70">Preparing your portfolio</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden ocean-animated">
      {/* Tsunami Wave at the top */}
      <div className="absolute top-0 left-0 right-0 h-24 pointer-events-none z-5 opacity-80">
        <svg className="w-full h-full animate-tsunami" viewBox="0 0 1200 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,50 Q300,10 600,50 T1200,50 L1200,100 L0,100 Z" fill="url(#waveGradient)" />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0c4a6e" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Animated background elements with z-0 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Swimming Fish - Multiple depths, speeds, sizes, and colors */}
        {/* Fish swimming left */}
        <div className="absolute top-1/4 text-2xl opacity-70 animate-swim-left text-cyan-300">🐟</div>
        <div className="absolute top-2/5 text-3xl opacity-60 animate-swim-left-fast text-orange-400">🐠</div>
        <div className="absolute top-1/2 text-xl opacity-40 animate-swim-left-slow text-cyan-200">🐟</div>
        <div className="absolute top-2/3 text-2xl opacity-45 animate-swim-left-fast text-yellow-300">🐠</div>
        
        {/* Fish swimming right (with flipped orientation) */}
        <div className="absolute top-1/3 text-2xl opacity-50 animate-swim-right-slow text-purple-400" style={{transform: 'scaleX(-1)'}}>🐠</div>
        <div className="absolute top-3/5 text-3xl opacity-55 animate-swim-right text-green-400" style={{transform: 'scaleX(-1)'}}>🐟</div>
        <div className="absolute top-3/4 text-xl opacity-65 animate-swim-right-fast text-pink-400" style={{transform: 'scaleX(-1)'}}>🐠</div>
        <div className="absolute top-1/5 text-xl opacity-35 animate-swim-right text-blue-200" style={{transform: 'scaleX(-1)'}}>🐟</div>

        {/* Floating bubbles */}
        <Bubble size="40px" delay="0" duration="6" left="10%" bottom="20%" />
        <Bubble size="60px" delay="1" duration="8" left="80%" bottom="40%" />
        <Bubble size="30px" delay="2" duration="7" left="20%" bottom="60%" />
        <Bubble size="50px" delay="3" duration="9" left="70%" bottom="15%" />
        <Bubble size="35px" delay="0.5" duration="7.5" left="50%" bottom="50%" />



        {/* Seaweed along the bottom */}
        {/* Left side seaweed */}
        <Seaweed className="absolute bottom-0 left-0 w-24 h-64 text-green-500 opacity-35 animate-seaweed-wave" />
        <Seaweed className="absolute bottom-0 left-12 w-20 h-72 text-green-500 opacity-30 animate-seaweed-wave" style={{animationDelay: '0.5s'}} />
        <Seaweed className="absolute bottom-0 left-24 w-16 h-56 text-green-400 opacity-25 animate-seaweed-wave" style={{animationDelay: '1s'}} />
        
        {/* Center seaweed */}
        <Seaweed className="absolute bottom-0 left-1/3 w-20 h-64 text-green-500 opacity-30 animate-seaweed-wave" style={{animationDelay: '0.8s'}} />
        <Seaweed className="absolute bottom-0 left-1/2 w-24 h-72 text-green-500 opacity-35 animate-seaweed-wave" style={{animationDelay: '0.3s', transform: 'translateX(-50%)'}} />
        <Seaweed className="absolute bottom-0 right-1/3 w-20 h-60 text-green-500 opacity-30 animate-seaweed-wave" style={{animationDelay: '1.2s'}} />
        
        {/* Right side seaweed */}
        <Seaweed className="absolute bottom-0 right-24 w-16 h-56 text-green-400 opacity-25 animate-seaweed-wave" style={{animationDelay: '0.6s'}} />
        <Seaweed className="absolute bottom-0 right-12 w-20 h-68 text-green-500 opacity-30 animate-seaweed-wave" style={{animationDelay: '1.4s'}} />
        <Seaweed className="absolute bottom-0 right-0 w-24 h-64 text-green-500 opacity-35 animate-seaweed-wave" style={{transform: 'scaleX(-1)'}} />

        {/* Red Crabs at the bottom */}
        <div className="absolute bottom-8 left-1/4 text-4xl opacity-60 animate-crab-shuffle">🦀</div>
        <div className="absolute bottom-12 left-1/3 text-3xl opacity-50 animate-crab-shuffle" style={{animationDelay: '0.5s'}}>🦀</div>
        <div className="absolute bottom-6 right-1/4 text-4xl opacity-55 animate-crab-shuffle" style={{animationDelay: '1s'}}>🦀</div>
        <div className="absolute bottom-10 right-1/3 text-3xl opacity-45 animate-crab-shuffle" style={{animationDelay: '1.5s'}}>🦀</div>
        <div className="absolute bottom-4 left-1/2 text-2xl opacity-40 animate-crab-shuffle" style={{transform: 'translateX(-50%)', animationDelay: '2s'}}>🦀</div>
      </div>

      {/* Main content - z-10 */}
      <div className="relative z-10">
        {/* Header */}
        <header className="backdrop-blur-sm bg-blue-950 bg-opacity-50 border-b border-cyan-500 border-opacity-30 shadow-lg">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-3xl text-cyan-400 animate-pulse-slow">
                <svg className="w-12 h-12" viewBox="0 0 100 100" fill="currentColor">
                  <ellipse cx="50" cy="50" rx="30" ry="18" />
                  <circle cx="65" cy="45" r="8" fill="white" opacity="0.8" />
                  <circle cx="67" cy="45" r="5" />
                  <path d="M75 45 L90 40 L85 50 Z" />
                </svg>
              </div>
              <div>
                <h1 className="text-5xl font-bold text-cyan-50 mb-1">
                  {portfolioData.header.name}
                </h1>
                <p className="text-xl font-semibold text-cyan-300">
                  {portfolioData.header.title}
                </p>
              </div>
              <div className="ml-auto flex flex-col gap-2">
                <div className="px-3 py-1 rounded-full bg-cyan-500 bg-opacity-20 border border-cyan-500 border-opacity-50 text-xs font-semibold text-cyan-300">
                  🎓 UTA Freshman
                </div>
                <div className="px-3 py-1 rounded-full bg-blue-500 bg-opacity-20 border border-blue-500 border-opacity-50 text-xs font-semibold text-blue-300">
                  🔬 Research
                </div>
              </div>
            </div>
            <div className="ml-16 flex gap-3 text-xs">
              <span className="text-cyan-300">📍 Based in Texas</span>
              <span className="text-blue-300">⚡ Passionate about Innovation</span>
            </div>
          </div>
        </header>

        {/* Bio Section */}
        <section className="backdrop-blur-sm bg-blue-950 bg-opacity-30 border-b border-cyan-500 border-opacity-30 shadow-md">
          <div className="max-w-4xl mx-auto px-4 py-10">
            <div className="flex items-start gap-4">
              <CoralIcon className="w-12 h-12 flex-shrink-0 text-cyan-400" />
              <div className="flex-1">
                <p className="text-lg leading-relaxed text-cyan-50 mb-4">
                  {portfolioData.header.bio}
                </p>
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="p-3 rounded-lg bg-cyan-500 bg-opacity-10 border border-cyan-500 border-opacity-30 hover:bg-opacity-20 transition-all">
                    <div className="text-sm font-bold text-cyan-300 mb-1">Hobbies</div>
                    <div className="text-xs text-cyan-100">Card Games and Working Out</div>
                  </div>
                  <div className="p-3 rounded-lg bg-blue-500 bg-opacity-10 border border-blue-500 border-opacity-30 hover:bg-opacity-20 transition-all">
                    <div className="text-sm font-bold text-blue-300 mb-1">Focus</div>
                    <div className="text-xs text-blue-100">Photonics & Electronics</div>
                  </div>
                  <div className="p-3 rounded-lg bg-purple-500 bg-opacity-10 border border-purple-500 border-opacity-30 hover:bg-opacity-20 transition-all">
                    <div className="text-sm font-bold text-purple-300 mb-1">Interest</div>
                    <div className="text-xs text-purple-100">Competitive Programming and Math</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Accordion Content */}
        <main className="max-w-4xl mx-auto my-12 mx-4 rounded-xl overflow-hidden shadow-2xl backdrop-blur-md bg-blue-950 bg-opacity-40 border border-cyan-500 border-opacity-30">
        {/* About Section */}
        <AccordionSection
          title="About"
          isOpen={openSection === 'about'}
          onToggle={() => toggleSection('about')}
        >
          <p className="text-base leading-relaxed text-cyan-100">
            {portfolioData.about.content}
          </p>
        </AccordionSection>

        {/* Education Section */}
        <AccordionSection
          title="Education"
          isOpen={openSection === 'education'}
          onToggle={() => toggleSection('education')}
        >
          <div className="space-y-5">
            {portfolioData.education.map((edu, index) => (
              <div key={index} className="p-4 rounded-lg backdrop-blur-sm transition-all hover:shadow-md bg-cyan-500 bg-opacity-10 hover:bg-opacity-20 border border-cyan-500 border-opacity-30">
                <h3 className="font-bold text-base mb-1 text-cyan-300">
                  {edu.degree}
                </h3>
                <p className="text-sm text-cyan-100">
                  {edu.school} • {edu.year}
                </p>
              </div>
            ))}
          </div>
        </AccordionSection>

        {/* Experience Section */}
        <AccordionSection
          title="Experience"
          isOpen={openSection === 'experience'}
          onToggle={() => toggleSection('experience')}
        >
          <div className="space-y-5">
            {portfolioData.experience.map((exp, index) => (
              <div key={index} className="p-5 rounded-lg backdrop-blur-sm border-l-4 border-l-cyan-400 transition-all hover:shadow-md bg-cyan-500 bg-opacity-10 hover:bg-opacity-20 border border-cyan-500 border-opacity-30">
                <h3 className="font-bold text-base mb-1 text-cyan-100">
                  {exp.role}
                </h3>
                <p className="text-sm font-semibold mb-3 text-cyan-300">
                  {exp.company} • {exp.date}
                </p>
                <p className="text-sm leading-relaxed text-white">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </AccordionSection>

        {/* Skills Section */}
        <AccordionSection
          title="Skills"
          isOpen={openSection === 'skills'}
          onToggle={() => toggleSection('skills')}
        >
          <div className="flex flex-wrap gap-3">
            {portfolioData.skills.map((skill, index) => (
              <span
                key={index}
                className="px-5 py-3 rounded-full text-sm font-bold transition-all duration-300 hover:scale-110 hover:shadow-lg backdrop-blur-sm bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </AccordionSection>

        {/* Projects Section */}
        <AccordionSection
          title="Projects"
          isOpen={openSection === 'projects'}
          onToggle={() => toggleSection('projects')}
        >
          <div className="text-center py-8">
            <div className="text-5xl mb-4">🚀</div>
            <p className="text-cyan-300 text-lg font-semibold mb-2">Work in Progress</p>
            <p className="text-cyan-200 text-opacity-70">
              I'm currently working on some exciting projects. Check back soon!
            </p>
          </div>
        </AccordionSection>

        {/* Contact Section */}
        <AccordionSection
          title="Contact"
          isOpen={openSection === 'contact'}
          onToggle={() => toggleSection('contact')}
        >
          <div className="space-y-4">
            {/* Email */}
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="flex items-center gap-4 p-4 rounded-lg transition-all hover:shadow-md hover:scale-105 transform bg-cyan-500 bg-opacity-10 hover:bg-opacity-20 text-cyan-100 border border-cyan-500 border-opacity-30"
            >
              <Mail className="w-6 h-6 flex-shrink-0 text-cyan-400" />
              <span className="font-semibold">{portfolioData.contact.email}</span>
            </a>

            {/* GitHub */}
            <a
              href={portfolioData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg transition-all hover:shadow-md hover:scale-105 transform bg-cyan-500 bg-opacity-10 hover:bg-opacity-20 text-cyan-100 border border-cyan-500 border-opacity-30"
            >
              <Github className="w-6 h-6 flex-shrink-0 text-cyan-400" />
              <span className="font-semibold">GitHub</span>
            </a>

            {/* LinkedIn */}
            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg transition-all hover:shadow-md hover:scale-105 transform bg-cyan-500 bg-opacity-10 hover:bg-opacity-20 text-cyan-100 border border-cyan-500 border-opacity-30"
            >
              <Linkedin className="w-6 h-6 flex-shrink-0 text-cyan-400" />
              <span className="font-semibold">LinkedIn</span>
            </a>
          </div>
        </AccordionSection>
        </main>

        {/* Footer */}
        <footer className="py-8 mt-12 border-t border-cyan-500 border-opacity-30">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-sm text-cyan-300">
              2026 {portfolioData.header.name}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
