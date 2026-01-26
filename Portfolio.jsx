import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Mail, Github, Linkedin, Fish, Waves, Shell, ArrowUp, ExternalLink} from 'lucide-react';

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
  projects: [
    {
      name: 'LoudPenguin',
      shortDescription: 'Discord bot for automated stock market reports and financial data',
      longDescription: 'A production-grade Discord bot that delivers automated end-of-day stock market reports, tracks market indices in real-time, manages server-specific watchlists, and aggregates financial headlines. Built with TypeScript, optimized for performance, and hardened against production issues.',
      technologies: ['TypeScript', 'Node.js', 'Discord.js', 'MongoDB', 'Mongoose', 'REST APIs'],
      githubUrl: 'https://github.com/AliAlfridawi/loudPenguin',
      features: [
        'Automated daily market reports at 4:15 PM ET',
        'Real-time stock price queries with caching',
        'Per-server watchlist management',
        'Financial headlines aggregation',
        'Server-specific configuration'
      ],
      status: 'Production Ready'
    }
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

// Project Card Component
const ProjectCard = ({ project, isExpanded, onToggle }) => {
  return (
    <div className="card-enhanced overflow-hidden">
      {/* Card Header - Clickable */}
      <button
        onClick={onToggle}
        className="ripple-effect w-full px-8 md:px-10 py-7 md:py-8 flex items-center justify-between hover:bg-cyan-500 hover:bg-opacity-5 smooth-transition focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2"
        aria-expanded={isExpanded}
      >
        <div className="flex-1 text-left">
          <div className="flex items-center gap-4 mb-3">
            <h3 className="text-2xl md:text-3xl font-semibold text-cyan-50">{project.name}</h3>
            <span className="px-3 py-1.5 rounded-full bg-teal-500 bg-opacity-15 border border-teal-500 border-opacity-30 text-xs font-medium text-teal-200">
              {project.status}
            </span>
          </div>
          <p className="text-base md:text-lg text-cyan-200 text-opacity-80 mb-4">{project.shortDescription}</p>
          <div className="flex flex-wrap gap-2.5">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span key={idx} className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-cyan-500 bg-opacity-15 border border-cyan-500 border-opacity-25 text-cyan-200">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-cyan-500 bg-opacity-15 border border-cyan-500 border-opacity-25 text-cyan-200">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>
        </div>
        <ChevronDown
          className={`w-6 h-6 md:w-7 md:h-7 text-cyan-400 icon-hover smooth-transition ml-6 flex-shrink-0 ${
            isExpanded ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      {/* Expandable Content */}
      <div className={`project-expand-grid ${isExpanded ? 'open' : ''}`}>
        <div className="project-expand-inner border-t border-cyan-500 border-opacity-15 px-8 md:px-10 py-8 md:py-10">
          <p className="text-base md:text-lg leading-relaxed text-cyan-100 text-opacity-90 mb-8">
            {project.longDescription}
          </p>
          
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-cyan-200 mb-4">Key Features</h4>
            <ul className="space-y-3">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-base md:text-lg text-cyan-100 text-opacity-90">
                  <span className="text-cyan-400 mt-1.5 text-lg">▹</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold text-cyan-200 mb-4">Technologies</h4>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="skill-badge px-4 py-2.5 rounded-full text-sm font-medium backdrop-blur-sm bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:from-cyan-400 hover:to-teal-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ripple-effect inline-flex items-center gap-3 px-6 py-3.5 bg-cyan-500 bg-opacity-15 hover:bg-opacity-25 text-cyan-100 border border-cyan-500 border-opacity-25 hover:border-opacity-40 rounded-lg hover-lift group smooth-transition"
            aria-label={`View ${project.name} on GitHub`}
          >
            <Github className="w-5 h-5 text-cyan-300 icon-hover" />
            <span className="font-medium">View on GitHub</span>
            <ExternalLink className="w-4 h-4 text-cyan-300 opacity-0 group-hover:opacity-100 smooth-transition" />
          </a>
        </div>
      </div>
    </div>
  );
};

// Main Portfolio Component
export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [expandedProject, setExpandedProject] = useState(null);
  const [depthClass, setDepthClass] = useState('depth-surface');
  const sectionRefs = useRef({});
  const parallaxRefs = useRef({});

  // Show loading animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll tracking for depth effect, parallax, and back to top button
  useEffect(() => {
    let rafId = null;
    
    const handleScroll = () => {
      if (rafId) return;
      
      rafId = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        setScrollY(currentScrollY);
        setShowBackToTop(currentScrollY > 400);

        // Update scroll progress indicator
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = scrollHeight > 0 ? (currentScrollY / scrollHeight) * 100 : 0;
        const progressBar = document.getElementById('scroll-progress');
        if (progressBar) {
          progressBar.style.transform = `scaleX(${scrollProgress / 100})`;
        }

        // Update depth-based background
        const newDepthClass = getDepthClass(currentScrollY, scrollHeight);
        setDepthClass(newDepthClass);

        // Parallax effects for background elements
        Object.entries(parallaxRefs.current).forEach(([id, element]) => {
          if (element && element.dataset.speed) {
            const parallaxSpeed = parseFloat(element.dataset.speed) || 0.5;
            const yPos = currentScrollY * parallaxSpeed;
            element.style.transform = `translateY(${yPos}px)`;
          }
        });

        // Section reveal on scroll
        Object.entries(sectionRefs.current).forEach(([id, element]) => {
          if (element) {
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
            if (isVisible) {
              setVisibleSections(prev => new Set([...prev, id]));
            }
          }
        });

        rafId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Helper function to get depth class
  const getDepthClass = (scrollY, scrollHeight) => {
    if (scrollHeight <= 0) return 'depth-surface';
    const depthPercent = (scrollY / scrollHeight) * 100;
    if (depthPercent < 25) return 'depth-surface';
    if (depthPercent < 50) return 'depth-mid';
    if (depthPercent < 75) return 'depth-deep';
    return 'depth-abyss';
  };

  // Back to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toggle project expansion
  const toggleProject = (projectName) => {
    setExpandedProject(expandedProject === projectName ? null : projectName);
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
          
          <h2 className="text-2xl font-semibold text-cyan-200 mb-2">Loading Portfolio</h2>
          <p className="text-cyan-200 text-opacity-60">Please wait...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative min-h-screen overflow-hidden ocean-animated ${depthClass}`}>
      {/* Scroll Progress Indicator */}
      <div id="scroll-progress" className="scroll-progress" style={{ transform: 'scaleX(0)' }} />

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      {/* Subtle Light Rays Effect - Reduced */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="light-ray" style={{ left: '20%', animationDelay: '0s' }} />
        <div className="light-ray" style={{ left: '50%', animationDelay: '4s' }} />
        <div className="light-ray" style={{ left: '80%', animationDelay: '8s' }} />
      </div>

      {/* Subtle Particle Effects - Reduced */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${15 + (i * 15)}%`,
              top: `${20 + (i * 12)}%`,
              animationDelay: `${i * 2.5}s`,
              animationDuration: `${18 + (i * 2)}s`,
            }}
          />
        ))}
      </div>

      {/* Subtle Wave at the top - More refined */}
      <div className="absolute top-0 left-0 right-0 h-20 pointer-events-none z-5 opacity-40">
        <svg className="w-full h-full animate-tsunami" viewBox="0 0 1200 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,50 Q300,10 600,50 T1200,50 L1200,100 L0,100 Z" fill="url(#waveGradient)" />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#0e7490" stopOpacity="0.15" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Simplified Animated background elements - Subtle and elegant */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Minimal floating bubbles - Only 3 subtle ones */}
        <Bubble size="60px" delay="0" duration="12" left="15%" bottom="25%" />
        <Bubble size="80px" delay="4" duration="15" left="70%" bottom="45%" />
        <Bubble size="50px" delay="8" duration="18" left="45%" bottom="65%" />

        {/* Minimal seaweed - Only at very bottom, subtle */}
        <Seaweed className="absolute bottom-0 left-1/4 w-20 h-48 text-teal-600 opacity-15 animate-seaweed-wave" style={{animationDelay: '1s'}} />
        <Seaweed className="absolute bottom-0 left-1/2 w-24 h-56 text-teal-600 opacity-18 animate-seaweed-wave" style={{animationDelay: '0.5s', transform: 'translateX(-50%)'}} />
        <Seaweed className="absolute bottom-0 right-1/4 w-20 h-52 text-teal-600 opacity-15 animate-seaweed-wave" style={{animationDelay: '1.5s'}} />
      </div>

      {/* Main content - z-10 */}
      <div className="relative z-10">
        {/* Header */}
        <header 
          ref={el => sectionRefs.current['header'] = el}
          className={`section-reveal ${visibleSections.has('header') ? 'visible' : ''} backdrop-blur-xl bg-slate-900 bg-opacity-70 border-b border-cyan-500 border-opacity-20`}
        >
          <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
              <div className="text-3xl text-cyan-400 icon-hover">
                <Waves className="w-14 h-14 md:w-16 md:h-16" />
              </div>
              <div className="flex-1">
                <h1 className="text-glow text-cyan-50 mb-2">
                  {portfolioData.header.name}
                </h1>
                <p className="text-xl md:text-2xl font-semibold text-cyan-300">
                  {portfolioData.header.title}
                </p>
              </div>
              <div className="flex flex-col gap-3 w-full md:w-auto">
                <div className="px-4 py-2 rounded-full bg-cyan-500 bg-opacity-15 border border-cyan-500 border-opacity-30 text-sm font-medium text-cyan-200 hover:bg-opacity-25 hover:border-opacity-40 smooth-transition">
                  UTA Freshman
                </div>
                <div className="px-4 py-2 rounded-full bg-teal-500 bg-opacity-15 border border-teal-500 border-opacity-30 text-sm font-medium text-teal-200 hover:bg-opacity-25 hover:border-opacity-40 smooth-transition">
                  Research
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 text-sm md:text-base">
              <span className="text-cyan-200 text-opacity-80">Based in Texas</span>
              <span className="text-teal-200 text-opacity-80">Passionate about Innovation</span>
            </div>
          </div>
        </header>

        {/* Subtle Wave Divider */}
        <div className="wave-divider">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 Q300,10 600,30 T1200,30 L1200,60 L0,60 Z" fill="rgba(6, 182, 212, 0.06)" />
          </svg>
        </div>

        {/* Bio Section */}
        <section 
          ref={el => sectionRefs.current['bio'] = el}
          className={`section-reveal ${visibleSections.has('bio') ? 'visible' : ''} backdrop-blur-xl bg-slate-900 bg-opacity-50 border-b border-cyan-500 border-opacity-15`}
        >
          <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <Waves className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 text-cyan-400 icon-hover" />
              <div className="flex-1">
                <p className="text-lg md:text-xl leading-relaxed text-cyan-100 text-opacity-90 mb-8">
                  {portfolioData.header.bio}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                  <div className="card-enhanced p-5 md:p-6 hover-lift">
                    <div className="text-base font-semibold text-cyan-300 mb-2">Hobbies</div>
                    <div className="text-sm text-cyan-200 text-opacity-80">Card Games and Working Out</div>
                  </div>
                  <div className="card-enhanced p-5 md:p-6 hover-lift">
                    <div className="text-base font-semibold text-teal-300 mb-2">Focus</div>
                    <div className="text-sm text-teal-200 text-opacity-80">Photonics & Electronics</div>
                  </div>
                  <div className="card-enhanced p-5 md:p-6 hover-lift">
                    <div className="text-base font-semibold text-cyan-300 mb-2">Interest</div>
                    <div className="text-sm text-cyan-200 text-opacity-80">Competitive Programming and Math</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Subtle Wave Divider */}
        <div className="wave-divider">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 Q300,10 600,30 T1200,30 L1200,60 L0,60 Z" fill="rgba(6, 182, 212, 0.06)" />
          </svg>
        </div>

        {/* About Section */}
        <section 
          ref={el => sectionRefs.current['about'] = el}
          className={`section-reveal ${visibleSections.has('about') ? 'visible' : ''} max-w-7xl mx-auto px-6 py-20 md:py-24`}
        >
          <div className="card-enhanced p-10 md:p-12">
            <h2 className="text-4xl md:text-5xl font-semibold text-cyan-50 mb-8 text-center">About</h2>
            <p className="text-base md:text-lg leading-relaxed text-cyan-100 text-opacity-90">
              {portfolioData.about.content}
            </p>
          </div>
        </section>

        {/* Subtle Wave Divider */}
        <div className="wave-divider">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 Q300,10 600,30 T1200,30 L1200,60 L0,60 Z" fill="rgba(6, 182, 212, 0.06)" />
          </svg>
        </div>

        {/* Education Section */}
        <section 
          ref={el => sectionRefs.current['education'] = el}
          className={`section-reveal ${visibleSections.has('education') ? 'visible' : ''} max-w-7xl mx-auto px-6 py-20 md:py-24`}
        >
          <div className="card-enhanced p-10 md:p-12">
            <h2 className="text-4xl md:text-5xl font-semibold text-cyan-50 mb-10 text-center">Education</h2>
            <div className="space-y-6 md:space-y-8">
              {portfolioData.education.map((edu, index) => (
                <div key={index} className="card-enhanced p-6 md:p-7 hover-lift relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-teal-500 rounded-l-lg" />
                  <h3 className="font-semibold text-xl md:text-2xl mb-2 text-cyan-50">
                    {edu.degree}
                  </h3>
                  <p className="text-base md:text-lg text-cyan-200 text-opacity-80">
                    {edu.school} • {edu.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subtle Wave Divider */}
        <div className="wave-divider">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 Q300,10 600,30 T1200,30 L1200,60 L0,60 Z" fill="rgba(6, 182, 212, 0.06)" />
          </svg>
        </div>

        {/* Experience Section */}
        <section 
          ref={el => sectionRefs.current['experience'] = el}
          className={`section-reveal ${visibleSections.has('experience') ? 'visible' : ''} max-w-7xl mx-auto px-6 py-20 md:py-24`}
        >
          <div className="card-enhanced p-10 md:p-12">
            <h2 className="text-4xl md:text-5xl font-semibold text-cyan-50 mb-10 text-center">Experience</h2>
            <div className="space-y-6 md:space-y-8">
              {portfolioData.experience.map((exp, index) => (
                <div key={index} className="card-enhanced p-7 md:p-8 border-l-4 border-l-cyan-400 hover-lift relative">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-xl md:text-2xl mb-2 text-cyan-50">
                        {exp.role}
                      </h3>
                      <p className="text-base md:text-lg font-medium text-cyan-200 text-opacity-80">
                        {exp.company} • {exp.date}
                      </p>
                    </div>
                  </div>
                  <p className="text-base md:text-lg leading-relaxed text-cyan-100 text-opacity-90">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subtle Wave Divider */}
        <div className="wave-divider">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 Q300,10 600,30 T1200,30 L1200,60 L0,60 Z" fill="rgba(6, 182, 212, 0.06)" />
          </svg>
        </div>

        {/* Skills Section */}
        <section 
          ref={el => sectionRefs.current['skills'] = el}
          className={`section-reveal ${visibleSections.has('skills') ? 'visible' : ''} max-w-7xl mx-auto px-6 py-20 md:py-24`}
        >
          <div className="card-enhanced p-10 md:p-12">
            <h2 className="text-4xl md:text-5xl font-semibold text-cyan-50 mb-10 text-center">Skills</h2>
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
              {portfolioData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="skill-badge px-5 md:px-6 py-3 md:py-4 rounded-full text-sm md:text-base font-medium backdrop-blur-sm bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:from-cyan-400 hover:to-teal-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Wave Divider */}
        <div className="wave-divider">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 Q300,10 600,30 T1200,30 L1200,60 L0,60 Z" fill="rgba(6, 182, 212, 0.1)" />
          </svg>
        </div>

        {/* Projects Section */}
        <section 
          ref={el => sectionRefs.current['projects'] = el}
          className={`section-reveal ${visibleSections.has('projects') ? 'visible' : ''} max-w-7xl mx-auto px-6 py-20 md:py-24`}
        >
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-semibold text-cyan-50 mb-4">Projects</h2>
            <p className="text-cyan-200 text-opacity-70 text-lg md:text-xl">
              Explore my work and contributions
            </p>
          </div>
          <div className="space-y-6">
            {portfolioData.projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                isExpanded={expandedProject === project.name}
                onToggle={() => toggleProject(project.name)}
              />
            ))}
          </div>
        </section>

        {/* Subtle Wave Divider */}
        <div className="wave-divider">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 Q300,10 600,30 T1200,30 L1200,60 L0,60 Z" fill="rgba(6, 182, 212, 0.06)" />
          </svg>
        </div>

        {/* Contact Section */}
        <section 
          ref={el => sectionRefs.current['contact'] = el}
          className={`section-reveal ${visibleSections.has('contact') ? 'visible' : ''} max-w-7xl mx-auto px-6 py-20 md:py-24`}
        >
          <div className="card-enhanced p-10 md:p-12">
            <h2 className="text-4xl md:text-5xl font-semibold text-cyan-50 mb-10 text-center">Contact</h2>
            <div className="space-y-4 md:space-y-5">
              {/* Email */}
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="ripple-effect card-enhanced flex items-center gap-4 md:gap-6 p-5 md:p-6 bg-cyan-500 bg-opacity-10 hover:bg-opacity-20 text-cyan-100 border border-cyan-500 border-opacity-30 hover-lift group"
                aria-label={`Send email to ${portfolioData.contact.email}`}
              >
                <Mail className="w-7 h-7 md:w-8 md:h-8 flex-shrink-0 text-cyan-400 icon-hover group-hover:text-cyan-300" />
                <span className="font-semibold text-base md:text-lg flex-1">{portfolioData.contact.email}</span>
                <ExternalLink className="w-5 h-5 text-cyan-400 opacity-0 group-hover:opacity-100 smooth-transition" />
              </a>

              {/* GitHub */}
              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="ripple-effect card-enhanced flex items-center gap-4 md:gap-6 p-5 md:p-6 bg-cyan-500 bg-opacity-10 hover:bg-opacity-20 text-cyan-100 border border-cyan-500 border-opacity-30 hover-lift group"
                aria-label="Visit GitHub profile"
              >
                <Github className="w-7 h-7 md:w-8 md:h-8 flex-shrink-0 text-cyan-400 icon-hover group-hover:text-cyan-300" />
                <span className="font-semibold text-base md:text-lg flex-1">GitHub</span>
                <ExternalLink className="w-5 h-5 text-cyan-400 opacity-0 group-hover:opacity-100 smooth-transition" />
              </a>

              {/* LinkedIn */}
              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="ripple-effect card-enhanced flex items-center gap-4 md:gap-6 p-5 md:p-6 bg-cyan-500 bg-opacity-10 hover:bg-opacity-20 text-cyan-100 border border-cyan-500 border-opacity-30 hover-lift group"
                aria-label="Visit LinkedIn profile"
              >
                <Linkedin className="w-7 h-7 md:w-8 md:h-8 flex-shrink-0 text-cyan-400 icon-hover group-hover:text-cyan-300" />
                <span className="font-semibold text-base md:text-lg flex-1">LinkedIn</span>
                <ExternalLink className="w-5 h-5 text-cyan-400 opacity-0 group-hover:opacity-100 smooth-transition" />
              </a>
            </div>
          </div>
        </section>

        {/* Wave Divider */}
        <div className="wave-divider">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 Q300,10 600,30 T1200,30 L1200,60 L0,60 Z" fill="rgba(6, 182, 212, 0.1)" />
          </svg>
        </div>

        {/* Footer */}
        <footer className="py-12 md:py-16 mt-24 md:mt-32 border-t border-cyan-500 border-opacity-15">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-sm md:text-base text-cyan-200 text-opacity-60">
              © 2026 {portfolioData.header.name}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
