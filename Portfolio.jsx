import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Mail, Github, Linkedin, Cpu, Terminal, Zap, ExternalLink, Grid, ArrowUp } from 'lucide-react';
import Taskbar from './Taskbar.jsx';

// Portfolio Data
const portfolioData = {
  header: {
    name: 'Ali Alfridawi',
    title: 'Electrical Engineering Student',
    bio: 'Young engineer passionate about photonics excited to participate in research and innovate in the field of electrical engineering.',
  },
  about: {
    content:
      "I'm an Electrical Engineering student at UTA driven by curiosity in photonics and signal processing. Currently conducting undergraduate research in nanophotonics, developing Python-based simulation frameworks to model optical phenomena and analyze experimental data. My work bridges theory and practice—translating complex mathematical models into efficient computational tools. I'm passionate about solving engineering challenges, contributing to meaningful research, and building elegant solutions that combine hardware knowledge with software expertise. Always eager to collaborate, learn from experienced engineers, and explore opportunities at the intersection of photonics and computational engineering.",
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

// Typing Effect Component
const TypingEffect = ({ text, speed = 30, className = "" }) => {
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    let index = 0;
    setDisplayedText(""); 
    const interval = setInterval(() => {
      if (index < text.length) {
        const nextChar = text[index];
        setDisplayedText((prev) => {
          const result = prev + nextChar;
          return result;
        });
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={className} style={{ display: 'inline-block', minWidth: '100%', whiteSpace: 'normal' }}>
      {displayedText}
      <span className="typing-cursor"></span>
    </span>
  );
};

// Circuit Trace Component
const CircuitTrace = ({ className, style }) => (
  <svg className={`absolute pointer-events-none ${className}`} style={style} viewBox="0 0 100 100" preserveAspectRatio="none">
    <path className="circuit-trace animate-trace" d="M0,50 L20,50 L30,20 L50,20 L60,80 L80,80 L100,50" />
  </svg>
);

// PCB Divider Component
const PCBDivider = () => (
  <div className="pcb-divider relative">
    <div className="absolute top-1/2 left-0 w-full h-px bg-slate-700"></div>
    <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-orange-500 rounded-full transform -translate-y-1/2 shadow-lg shadow-orange-500/50"></div>
    <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-orange-500 rounded-full transform -translate-y-1/2 shadow-lg shadow-orange-500/50"></div>
  </div>
);

// New Project Card Component
const ProjectCard = ({ project, isExpanded, onToggle }) => {
  return (
    <div className="card-schematic overflow-hidden mb-6">
      {/* Card Header */}
      <button
        onClick={onToggle}
        className="w-full px-8 py-6 flex items-center justify-between hover:bg-slate-800/50 transition-colors focus-visible:outline-2 focus-visible:outline-orange-500"
        aria-expanded={isExpanded}
      >
        <div className="flex-1 text-left">
          <div className="flex items-center gap-4 mb-2">
            <h3 className="text-xl md:text-2xl font-mono text-orange-500 hover-glitch">{project.name}</h3>
            <span className="px-2 py-1 text-xs border border-blue-500/30 text-blue-400 bg-blue-500/10 font-mono">
              STATUS::{project.status.toUpperCase()}
            </span>
          </div>
          <p className="text-slate-400 font-mono text-sm mb-3">
            &gt; {project.shortDescription}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span key={idx} className="text-xs text-slate-500 font-mono">
                [{tech}]
              </span>
            ))}
          </div>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-orange-500 transition-transform duration-300 ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Expandable Content */}
      <div className={`project-expand-grid ${isExpanded ? 'open' : ''}`}>
        <div className="project-expand-inner border-t border-slate-700 px-8 py-8 bg-slate-900/50">
          <div className="font-mono text-slate-300 mb-6 text-sm leading-relaxed border-l-2 border-orange-500/50 pl-4">
            {project.longDescription}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-sm font-mono text-blue-400 mb-3 uppercase tracking-wider">System Features</h4>
              <ul className="space-y-2">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-400 font-mono">
                    <span className="text-orange-500 mt-1">▹</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-mono text-blue-400 mb-3 uppercase tracking-wider">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="skill-badge px-3 py-1 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2 border border-orange-500 text-orange-400 hover:bg-orange-500/10 hover:text-orange-300 transition-all font-mono text-sm group"
          >
            <Github className="w-4 h-4" />
            <span>SOURCE_CODE</span>
            <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
          </a>
        </div>
      </div>
    </div>
  );
};

// Simple Briefcase Icon substitute for Lucide import
const BriefcaseIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500 w-8 h-8">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [expandedProject, setExpandedProject] = useState(null);
  const sectionRefs = useRef({});

  // Loading Timer
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll Tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowBackToTop(window.scrollY > 400);

      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
      const progressBar = document.getElementById('scroll-progress');
      if (progressBar) progressBar.style.transform = `scaleX(${scrollProgress / 100})`;

      // Section Reveal
      Object.entries(sectionRefs.current).forEach(([id, element]) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.75) {
            setVisibleSections(prev => new Set(prev).add(id));
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center font-mono">
        <Cpu className="w-16 h-16 text-orange-500 animate-pulse mb-4" />
        <div className="text-orange-500 text-xl tracking-widest">INITIALIZING...</div>
        <div className="mt-2 w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-orange-500 animate-[width_2s_ease-out_forwards]" style={{ width: '100%' }}></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen text-slate-300 overflow-x-hidden font-sans">
      {/* Global Grid Background */}
      <div className="schematic-grid" style={{ transform: `translateY(${scrollY * 0.1}px)` }}></div>
      
      <Taskbar sectionRefs={sectionRefs.current} />

      <div id="scroll-progress" className="scroll-progress transform scale-x-0 origin-left" />

      <button onClick={scrollToTop} className={`back-to-top ${showBackToTop ? 'visible' : ''}`}>
        <ArrowUp className="w-5 h-5" />
      </button>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-32">
        
        {/* HEADER Section */}
        <header ref={el => sectionRefs.current['header'] = el} className="min-h-[80vh] flex flex-col justify-center mb-24 relative">
          <CircuitTrace className="top-20 left-10 w-64 h-32 opacity-20" />
          
          <div className="terminal-window max-w-3xl w-full mx-auto section-reveal visible">
            <div className="terminal-header">
              <div className="terminal-dot dot-red"></div>
              <div className="terminal-dot dot-yellow"></div>
              <div className="terminal-dot dot-green"></div>
              <span className="ml-4 text-xs text-slate-400">user@portfolio:~</span>
            </div>
            <div className="p-8 md:p-12">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-4 hover-glitch">
                {portfolioData.header.name}
              </h1>
              <h2 className="text-xl md:text-2xl text-orange-500 font-mono mb-8">
                &lt;{portfolioData.header.title} /&gt;
              </h2>
              
              <div className="font-mono text-sm md:text-base text-slate-400 leading-relaxed border-l-2 border-slate-700 pl-4 mb-8">
                 <span className="text-blue-400">const</span> bio = <span className="text-green-400">"</span>
                 <TypingEffect text={portfolioData.header.bio} speed={30} />
                 <span className="text-green-400">"</span>;
              </div>
              
              {/* Debug: Show raw text */}
              <div className="text-xs text-slate-600 mt-4 hidden">Raw: {portfolioData.header.bio}</div>

              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 border border-orange-500/30 bg-orange-500/10 text-orange-400 font-mono text-sm">
                  :: UTA Freshman
                </div>
                <div className="px-4 py-2 border border-blue-500/30 bg-blue-500/10 text-blue-400 font-mono text-sm">
                  :: Research Assistant
                </div>
              </div>
            </div>
          </div>
        </header>

        <PCBDivider />

        {/* ABOUT Section */}
        <section ref={el => sectionRefs.current['about'] = el} className={`section-reveal ${visibleSections.has('about') ? 'visible' : ''} mb-32`}>
          <div className="flex items-center gap-4 mb-8">
             <Terminal className="w-8 h-8 text-orange-500" />
             <h2 className="text-3xl font-bold text-slate-100">SYSTEM_OVERVIEW</h2>
          </div>
          
          <div className="card-schematic p-8 md:p-12">
             <p className="text-lg leading-relaxed font-mono text-slate-300">
               {portfolioData.about.content}
             </p>
          </div>
        </section>

        {/* INFO GRID (Hobbies/Focus/Interest) */}
        <section ref={el => sectionRefs.current['bio'] = el} className={`section-reveal ${visibleSections.has('bio') ? 'visible' : ''} mb-32`}>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-schematic p-6 hover:border-blue-500 group">
              <div className="text-xs font-mono text-slate-500 mb-2">MODULE: 01</div>
              <h3 className="text-xl text-blue-400 font-mono mb-2 group-hover:text-blue-300">Hobbies</h3>
              <p className="text-sm text-slate-400 font-mono">Card Games & Working Out</p>
            </div>
            <div className="card-schematic p-6 hover:border-orange-500 group">
              <div className="text-xs font-mono text-slate-500 mb-2">MODULE: 02</div>
              <h3 className="text-xl text-orange-500 font-mono mb-2 group-hover:text-orange-300">Focus</h3>
              <p className="text-sm text-slate-400 font-mono">Photonics & Electronics</p>
            </div>
            <div className="card-schematic p-6 hover:border-green-500 group">
              <div className="text-xs font-mono text-slate-500 mb-2">MODULE: 03</div>
              <h3 className="text-xl text-green-500 font-mono mb-2 group-hover:text-green-300">Interest</h3>
              <p className="text-sm text-slate-400 font-mono">Competitive Programming</p>
            </div>
          </div>
        </section>

        <PCBDivider />

        {/* EDUCATION Section */}
        <section ref={el => sectionRefs.current['education'] = el} className={`section-reveal ${visibleSections.has('education') ? 'visible' : ''} mb-32`}>
          <div className="flex items-center gap-4 mb-8">
             <div className="w-8 h-8 border border-orange-500 flex items-center justify-center">
               <span className="text-orange-500 font-mono font-bold">E</span>
             </div>
            <h2 className="text-3xl font-bold text-slate-100">EDUCATION_LOG</h2>
          </div>

          <div className="space-y-6">
            {portfolioData.education.map((edu, idx) => (
              <div key={idx} className="card-schematic p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Cpu size={100} />
                </div>
                <h3 className="text-2xl text-slate-100 font-bold mb-2">{edu.degree}</h3>
                <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-slate-400">
                  <span className="text-orange-500">{edu.school}</span>
                  <span>|</span>
                  <span>Class of {edu.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE Section */}
        <section ref={el => sectionRefs.current['experience'] = el} className={`section-reveal ${visibleSections.has('experience') ? 'visible' : ''} mb-32`}>
           <div className="flex items-center gap-4 mb-8">
             <BriefcaseIcon />
             <h2 className="text-3xl font-bold text-slate-100">WORK_HISTORY</h2>
           </div>

           <div className="border-l-2 border-slate-800 ml-4 space-y-12">
             {portfolioData.experience.map((exp, idx) => (
               <div key={idx} className="relative pl-8">
                 <div className="absolute -left-[9px] top-0 w-4 h-4 bg-slate-900 border-2 border-orange-500 rounded-full"></div>
                 
                 <div className="card-schematic p-8">
                   <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                     <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                     <span className="font-mono text-xs px-2 py-1 bg-slate-800 text-orange-400 rounded">
                       {exp.date}
                     </span>
                   </div>
                   <div className="text-blue-400 font-mono text-sm mb-4">{exp.company}</div>
                   <p className="text-slate-400 leading-relaxed font-mono text-sm">
                     {exp.description}
                   </p>
                 </div>
               </div>
             ))}
           </div>
        </section>

        <PCBDivider />

        {/* SKILLS Section */}
        <section ref={el => sectionRefs.current['skills'] = el} className={`section-reveal ${visibleSections.has('skills') ? 'visible' : ''} mb-32`}>
          <div className="flex items-center gap-4 mb-8">
            <Zap className="w-8 h-8 text-yellow-500" />
            <h2 className="text-3xl font-bold text-slate-100">TECHNICAL_COMPETENCIES</h2>
          </div>
          
          <div className="card-schematic p-10">
            <div className="flex flex-wrap gap-4 justify-center">
              {portfolioData.skills.map((skill, idx) => (
                <div key={idx} className="skill-badge px-6 py-3 text-sm font-medium tracking-wide">
                  {skill.toUpperCase()}
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-700/50 flex justify-between text-xs font-mono text-slate-500">
              <span>MEMORY_USAGE: 45%</span>
              <span>CPU_LOAD: 12%</span>
              <span>UPTIME: 99.9%</span>
            </div>
          </div>
        </section>

        {/* PROJECTS Section */}
        <section ref={el => sectionRefs.current['projects'] = el} className={`section-reveal ${visibleSections.has('projects') ? 'visible' : ''} mb-32`}>
          <div className="flex items-center gap-4 mb-8">
            <Grid className="w-8 h-8 text-blue-500" />
            <h2 className="text-3xl font-bold text-slate-100">PROJECT_MANIFEST</h2>
          </div>

          <div className="space-y-4">
            {portfolioData.projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                isExpanded={expandedProject === project.name}
                onToggle={() => setExpandedProject(expandedProject === project.name ? null : project.name)}
              />
            ))}
          </div>
        </section>

        <PCBDivider />

        {/* CONTACT Section */}
        <section ref={el => sectionRefs.current['contact'] = el} className={`section-reveal ${visibleSections.has('contact') ? 'visible' : ''} mb-20`}>
          <div className="card-schematic p-10 md:p-14 text-center">
            <h2 className="text-4xl font-bold text-slate-100 mb-8">INITIATE_COMMUNICATION</h2>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a href={`mailto:${portfolioData.contact.email}`} className="group card-schematic p-6 flex flex-col items-center gap-3 hover:border-orange-500 min-w-[200px]">
                <Mail className="w-8 h-8 text-slate-400 group-hover:text-orange-500 transition-colors" />
                <span className="font-mono text-xs text-slate-500">EMAIL_PROTOCOL</span>
                <span className="text-sm text-slate-300">Send Message</span>
              </a>
              
              <a href={portfolioData.contact.github} target="_blank" className="group card-schematic p-6 flex flex-col items-center gap-3 hover:border-blue-500 min-w-[200px]">
                <Github className="w-8 h-8 text-slate-400 group-hover:text-blue-500 transition-colors" />
                <span className="font-mono text-xs text-slate-500">GIT_REPO</span>
                <span className="text-sm text-slate-300">View Source</span>
              </a>
              
              <a href={portfolioData.contact.linkedin} target="_blank" className="group card-schematic p-6 flex flex-col items-center gap-3 hover:border-blue-500 min-w-[200px]">
                <Linkedin className="w-8 h-8 text-slate-400 group-hover:text-blue-500 transition-colors" />
                <span className="font-mono text-xs text-slate-500">LINKEDIN</span>
                <span className="text-sm text-slate-300">Connect</span>
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center font-mono text-xs text-slate-600 pb-8">
           <div className="mb-2">SYSTEM STATUS: NOMINAL</div>
           <div>&copy; 2026 {portfolioData.header.name} | BUILD: v2.1.0</div>
        </footer>

      </main>
    </div>
  );
}
