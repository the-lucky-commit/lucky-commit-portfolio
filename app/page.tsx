'use client';

import React, { useState, useEffect } from 'react';
import { Github, Mail, Menu, X, ArrowRight, ArrowUpRight, MessageCircle } from 'lucide-react';

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
    { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'SEO'] },
    { category: 'Backend', items: ['Node.js', 'PHP', 'Python', 'REST API'] },
    { category: 'Database', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'] },
    { category: 'DevOps/Infra', items: ['Git', 'Docker', 'Vercel', 'Cloudflare', 'DNS', 'Supabase', 'cPanel', 'Plesk'] },
    { category: 'Email/IT', items: ['Mail Systems', 'Email Migration', 'Microsoft 365'] },
    { category: 'Creative Tools', items: ['Figma', 'Blender', 'Canva'] }
  ];

  const experiences = [
    {
      year: '2023 - Present',
      title: 'Freelance Developer',
      company: 'Self-Employed',
      description: 'Full-stack web development for diverse clients including E-commerce platforms, landing pages, and dashboard systems.'
    },
    {
      year: '2022 - 2023',
      title: 'Junior Developer',
      company: 'RCSA Drone Thailand',
      description: 'Developed drone light show lettering/formation systems, designed flight plans for show performances, and built Blender add-ons/scripts for show planning, plus created 3D content for project presentations.'
    }
  ];

  const projects = [
    {
      title: 'PhuketKeys.com',
      description: 'Deployed website for Phuket Keys, focused on clear property information and fast loading.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'SEO'],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Roundcube to Microsoft 365 Migration',
      description: 'Migrated around 200,000 hotel booking emails from Roundcube webmail to Microsoft 365 and repointed the domain DNS via Cloudflare.',
      tech: ['Roundcube', 'Microsoft 365', 'DNS', 'Cloudflare'],
      color: 'from-amber-500 to-orange-500'
    },
    {
      title: 'Langa Care (Internal)',
      description: 'Internal screening and health tracking system for Langa health center, focused on 35+ demographics with real-time dashboards and field-ready risk maps.',
      tech: ['Node.js', 'Express', 'MySQL', 'Sequelize', 'JWT', 'bcrypt', 'JavaScript', 'Chart.js', 'Google Maps', 'Flatpickr', 'Choices.js', 'SheetJS', 'PWA'],
      color: 'from-sky-500 to-cyan-500'
    },
    {
      title: 'Langa Health Center',
      description: 'Public health center website (langashph.com) with online queue booking for 3 services, admin content/booking management, and service worker caching for faster access.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MySQL', 'Service Worker'],
      color: 'from-cyan-500 to-blue-500'
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
                Crafting digital experiences through clean code and modern design. Specializing in full-stack web development with a focus on performance and user experience.
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
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 border border-cyan-500/30 flex items-center justify-center group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-all">
                        <ArrowUpRight className="group-hover:text-[#0a0e1a]" size={20} />
                      </div>
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
                
                <div className={`absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l ${project.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
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
                Full-stack developer with a passion for creating seamless digital experiences. Graduated from Garden City University with a Bachelor&apos;s in Computer Applications.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Currently working as a freelance developer, delivering custom web solutions for clients worldwide. Previously contributed to drone technology applications at RCSA Drone Thailand.
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
                Available for freelance projects and full-time opportunities. Feel free to reach out if you&apos;d like to collaborate.
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
                    <span className="text-gray-300">Available for work</span>
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
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 border-t border-cyan-500/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 lucky.commit — Full-stack Developer
          </div>
          <div className="text-gray-500 text-sm">
            Built with React + Tailwind CSS
          </div>
        </div>
      </footer>
    </div>
  );
}
