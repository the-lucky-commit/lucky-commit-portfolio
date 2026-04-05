'use client';

import React, { useState, useEffect } from 'react';
import { Github, Mail, Menu, X, ArrowRight, ArrowUpRight, MessageCircle, Globe } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js (App Router)', 'TypeScript', 'Tailwind CSS', 'CSS Modules', 'Vite'] },
    { category: 'Backend/API', items: ['Node.js', 'Express.js', 'REST API', 'JWT Auth', 'bcrypt', 'Multer'] },
    { category: 'Data Layer', items: ['PostgreSQL (Neon)', 'MySQL', 'LibSQL/SQLite', 'Drizzle ORM', 'Sequelize'] },
    { category: 'Cloud & Deploy', items: ['Vercel', 'Render', 'Cloudflare DNS', 'cPanel', 'Plesk', 'Nginx'] },
    { category: 'Business Systems', items: ['Admin Dashboard', 'E-commerce Flow', 'Quotation Workflow', 'Excel Export', 'Role-based Access'] },
    { category: 'Integrations', items: ['Cloudinary', 'SendGrid', 'Google Maps API', 'SheetJS/XLSX', 'LINE OA'] },
    { category: 'Quality & Ops', items: ['Smoke Testing', 'Release Checklist', 'Deployment Hardening', 'API Monitoring'] },
    { category: 'Tools', items: ['Git/GitHub', 'Postman', 'VS Code', 'Figma', 'Blender', 'Canva'] }
  ];

  const experiences = [
    {
      year: '2023 - Present',
      title: 'Freelance Developer',
      company: 'Self-Employed',
      description: 'Built and maintained full-stack platforms for Thai SMEs, including E-commerce, real estate, and healthcare systems with production deployments and admin workflows.'
    },
    {
      year: '2022 - 2023',
      title: 'Junior Developer',
      company: 'RCSA Drone Thailand',
      description: 'Developed drone-show formation and flight-planning tools, plus Blender add-ons for automated choreography and 3D presentation pipelines.'
    }
  ];

  const projects = [
    {
      title: 'Closet Go Rental Platform',
      description: 'End-to-end clothing rental platform with membership tiers, cart/checkout, PromptPay proof upload, and admin operations for inventory, orders, and shipping (deployed at closetgostudio.com).',
      tech: ['React', 'Vite', 'Node.js', 'Express', 'MySQL', 'JWT', 'Cloudinary', 'cPanel'],
      url: 'https://closetgostudio.com',
      color: 'from-fuchsia-500 to-rose-500'
    },
    {
      title: 'Lucky Commit Portfolio',
      description: 'Personal portfolio website showcasing selected projects, technical stack, and availability for freelance and full-time opportunities.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      url: 'https://lucky-commit-portfolio.vercel.app/',
      color: 'from-cyan-500 to-sky-500'
    },
    {
      title: 'Bangkok WYNN Electrical Platform',
      description: 'B2B/B2C product platform with catalog filtering, quote/order flow, account system, admin panels, and technical document distribution for engineering customers.',
      tech: ['Next.js', 'React', 'TypeScript', 'Drizzle ORM', 'LibSQL', 'Tailwind CSS'],
      color: 'from-violet-500 to-indigo-500'
    },
    {
      title: 'PhuketKeys.com',
      description: 'Production real-estate platform with listing search, customer accounts, role-based admin dashboard, media management, and analytics-ready back-office tools.',
      tech: ['Next.js', 'TypeScript', 'Express', 'PostgreSQL', 'Cloudinary', 'Recharts'],
      url: 'https://phuketkeys.com',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Langa Care (Internal)',
      description: 'Internal screening and health-tracking system with real-time dashboards, appointment handling, and location-aware field support for community healthcare operations.',
      tech: ['Node.js', 'Express', 'MySQL', 'Sequelize', 'JWT', 'bcrypt', 'JavaScript', 'Chart.js', 'Google Maps', 'Flatpickr', 'Choices.js', 'SheetJS', 'PWA'],
      color: 'from-sky-500 to-cyan-500'
    },
    {
      title: 'Langa Health Center',
      description: 'Public healthcare website with online booking for 3 services, admin content management, and service worker caching for better performance in low-connectivity areas.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MySQL', 'Service Worker'],
      url: 'https://langashph.com',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Roundcube to Microsoft 365 Migration',
      description: 'Migrated ~200,000 business emails from Roundcube to Microsoft 365 and completed DNS cutover via Cloudflare with minimal service disruption.',
      tech: ['Roundcube', 'Microsoft 365', 'DNS', 'Cloudflare'],
      color: 'from-amber-500 to-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0e1a]/95 backdrop-blur-md border-b border-cyan-500/10' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-xl font-light tracking-wider text-cyan-400">
              lucky<span className="text-white">.commit</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-12">
              {['Work', 'About', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm tracking-wider text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            <button
              className="md:hidden text-cyan-400"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden bg-[#0f1420] border-t border-cyan-500/10">
            {['Work', 'About', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="block px-6 py-4 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 lg:px-8 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-cyan-400 text-sm tracking-[0.3em] mb-6 font-light">
                FULL-STACK DEVELOPER
              </div>
              <h1 className="text-6xl lg:text-8xl font-light mb-6 leading-none">
                lucky<span className="text-cyan-400">.</span>
                <br />
                commit
              </h1>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-xl">
                Building production-ready web products from idea to deployment. Specialized in full-stack systems, admin workflows, and scalable architectures for SMEs.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="group px-8 py-4 bg-cyan-500 text-[#0a0e1a] font-medium flex items-center hover:bg-cyan-400 transition-all"
                >
                  Let&apos;s Talk
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </a>
                <a 
                  href="#work" 
                  className="px-8 py-4 border border-cyan-500/30 hover:border-cyan-400 transition-all"
                >
                  View Work
                </a>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="w-full aspect-square bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-3xl" 
                   style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'}}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-9xl">👨‍💻</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-32 px-6 lg:px-8 border-t border-cyan-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="text-cyan-400 text-sm tracking-[0.3em] mb-4 font-light">SELECTED WORK</div>
            <h2 className="text-5xl lg:text-6xl font-light">Projects</h2>
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative bg-[#0f1420] border border-cyan-500/10 hover:border-cyan-500/30 transition-all overflow-hidden"
              >
                <div className="p-8 lg:p-12">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
                    <div>
                      <div className="text-sm text-gray-500 mb-2">0{index + 1}</div>
                      <h3 className="text-3xl lg:text-4xl font-light mb-3 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 max-w-2xl">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0 relative z-10">
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Open ${project.title}`}
                          className="w-12 h-12 border border-cyan-500/30 inline-flex items-center justify-center group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-all"
                        >
                          <ArrowUpRight className="group-hover:text-[#0a0e1a]" size={20} />
                        </a>
                      ) : (
                        <div className="w-12 h-12 border border-cyan-500/30 flex items-center justify-center group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-all">
                          <ArrowUpRight className="group-hover:text-[#0a0e1a]" size={20} />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 text-xs tracking-wider bg-cyan-500/5 border border-cyan-500/20 text-cyan-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className={`absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l ${project.color} opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 lg:px-8 border-t border-cyan-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="text-cyan-400 text-sm tracking-[0.3em] mb-4 font-light">ABOUT ME</div>
              <h2 className="text-5xl lg:text-6xl font-light mb-8">Background</h2>
              <p className="text-xl text-gray-400 leading-relaxed mb-6">
                Full-stack developer focused on practical business systems: e-commerce operations, property platforms, and service booking solutions.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Currently available for freelance projects and full-time roles. I handle end-to-end delivery including planning, development, deployment, and production support.
              </p>
            </div>

            <div className="space-y-8">
              <div className="text-cyan-400 text-sm tracking-[0.3em] mb-8 font-light">EXPERIENCE</div>
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-2 border-cyan-500/20 pl-6 pb-8">
                  <div className="text-sm text-cyan-400 mb-2">{exp.year}</div>
                  <h3 className="text-xl font-light mb-1">{exp.title}</h3>
                  <div className="text-gray-500 text-sm mb-3">{exp.company}</div>
                  <p className="text-gray-400">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 lg:px-8 border-t border-cyan-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="text-cyan-400 text-sm tracking-[0.3em] mb-4 font-light">EXPERTISE</div>
            <h2 className="text-5xl lg:text-6xl font-light">Skills</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-[#0f1420] border border-cyan-500/10 p-8">
                <h3 className="text-cyan-400 text-sm tracking-[0.2em] mb-6">{skill.category.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {skill.items.map((item) => (
                    <li key={item} className="text-gray-400 hover:text-white transition-colors cursor-default">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 lg:px-8 border-t border-cyan-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="text-cyan-400 text-sm tracking-[0.3em] mb-4 font-light">GET IN TOUCH</div>
              <h2 className="text-5xl lg:text-6xl font-light mb-8">Let&apos;s Work<br />Together</h2>
              <p className="text-xl text-gray-400 leading-relaxed mb-12">
                Open for freelance projects and full-time opportunities. Feel free to reach out for collaboration, product builds, or ongoing technical support.
              </p>
              
              <div className="space-y-6">
                <div>
                  <div className="text-xs text-gray-500 tracking-wider mb-2">LOCATION</div>
                  <div className="text-gray-300">Khlung, Chanthaburi, Thailand</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 tracking-wider mb-2">USERNAME</div>
                  <div className="text-gray-300">lucky.commit</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 tracking-wider mb-2">STATUS</div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                    <span className="text-gray-300">Available: freelance + full-time</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <a 
                href="mailto:lucky99.commit@gmail.com"
                className="group flex items-center justify-between p-6 bg-[#0f1420] border border-cyan-500/10 hover:border-cyan-400 transition-all"
              >
                <div className="flex items-center">
                  <Mail className="mr-4 text-cyan-400" size={24} />
                  <span className="text-lg">Email</span>
                </div>
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
              </a>

              <a 
                href="https://github.com/the-lucky-commit"
                className="group flex items-center justify-between p-6 bg-[#0f1420] border border-cyan-500/10 hover:border-cyan-400 transition-all"
              >
                <div className="flex items-center">
                  <Github className="mr-4 text-cyan-400" size={24} />
                  <span className="text-lg">GitHub</span>
                </div>
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
              </a>

              <a 
                href="https://line.me/ti/p/~adaybank"
                className="group flex items-center justify-between p-6 bg-[#0f1420] border border-cyan-500/10 hover:border-cyan-400 transition-all"
              >
                <div className="flex items-center">
                  <MessageCircle className="mr-4 text-cyan-400" size={24} />
                  <span className="text-lg">Line</span>
                </div>
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
              </a>

              <a 
                href="https://lucky-commit-portfolio.vercel.app/"
                className="group flex items-center justify-between p-6 bg-[#0f1420] border border-cyan-500/10 hover:border-cyan-400 transition-all"
              >
                <div className="flex items-center">
                  <Globe className="mr-4 text-cyan-400" size={24} />
                  <span className="text-lg">Portfolio</span>
                </div>
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 border-t border-cyan-500/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2026 lucky.commit — Full-stack Developer
          </div>
          <div className="text-gray-500 text-sm">
            Built with React + Tailwind CSS
          </div>
        </div>
      </footer>
    </div>
  );
}
