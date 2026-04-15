'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Briefcase,
  Github,
  Globe,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Sparkles,
  X,
} from 'lucide-react';

const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const metrics = [
  { value: '7+', label: 'Production projects shipped' },
  { value: '3', label: 'Active workspaces in progress now' },
  { value: '3+', label: 'Years building for real businesses' },
  { value: 'E2E', label: 'From planning to deployment support' },
];

const skills = [
  {
    category: 'Frontend Systems',
    items: ['React', 'Next.js App Router', 'TypeScript', 'Tailwind CSS', 'Responsive UX'],
  },
  {
    category: 'Backend & API',
    items: ['Node.js', 'Express', 'REST API', 'JWT Auth', 'Role-based Access'],
  },
  {
    category: 'Data & Infra',
    items: ['PostgreSQL', 'MySQL', 'LibSQL', 'Drizzle ORM', 'Cloudinary', 'Nginx'],
  },
  {
    category: 'Business Workflows',
    items: ['Admin Dashboard', 'Quotation Flow', 'Order Operations', 'Content Systems', 'Excel Export'],
  },
  {
    category: 'Delivery',
    items: ['Vercel', 'Render', 'cPanel', 'Cloudflare DNS', 'Production Support'],
  },
  {
    category: 'Tools',
    items: ['GitHub', 'Postman', 'Figma', 'Blender', 'Canva', 'VS Code'],
  },
];

const experiences = [
  {
    year: '2023 - Present',
    title: 'Freelance Full-stack Developer',
    company: 'Self-employed',
    description:
      'Ship business-facing products for Thai SMEs across e-commerce, healthcare, and real-estate. Own planning, development, deployment, and post-launch support.',
  },
  {
    year: '2022 - 2023',
    title: 'Junior Developer',
    company: 'RCSA Drone Thailand',
    description:
      'Built internal tools for drone-show formation planning, flight workflows, and Blender-based automation for choreography and presentation assets.',
  },
];

const projects = [
  {
    title: 'Closet Go Rental Platform',
    category: 'E-commerce Operations',
    year: '2026',
    status: 'Active workspace',
    summary:
      'Clothing rental platform covering membership tiers, checkout, PromptPay verification, and admin workflows for inventory, orders, and shipping.',
    impact:
      'The current production system already supports rental checkout, membership activation, shipping flow, delivery confirmation, and buyout requests in one operational pipeline.',
    tech: ['React', 'Vite', 'Node.js', 'Express', 'MySQL', 'JWT', 'Cloudinary'],
    url: 'https://closetgostudio.com',
    featured: true,
  },
  {
    title: 'Langa Health Center React Migration',
    category: 'Healthcare Platform',
    year: '2026',
    status: 'Active migration',
    summary:
      'Ongoing migration from static pages to a React frontend while keeping the working backend and legacy routes online during the transition.',
    impact:
      'This reduces rewrite risk. Public pages, booking routes, and admin views can move into a cleaner component-based app without breaking the live service.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Express', 'MySQL', 'Framer Motion'],
    url: 'https://langashph.com',
    featured: true,
  },
  {
    title: 'Apple Bake Campaign Site',
    category: 'Food & Beverage Microsite',
    year: '2026',
    status: 'Active build',
    summary:
      'Promotional storefront for premium mini soft cakes with a flavour catalog, delivery coverage messaging, and WhatsApp-led ordering flow for Malaysia-wide customers.',
    impact:
      'Built to turn social traffic into direct inquiry quickly, with strong visual merchandising and a lightweight sales flow instead of a heavy checkout system.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Vite', 'Vercel Serverless'],
    featured: true,
  },
  {
    title: 'PhuketKeys.com',
    category: 'Real Estate Platform',
    year: '2025',
    status: 'Archived highlight',
    summary:
      'Production property platform with listing search, account system, media management, and an analytics-ready back-office for real-estate operations.',
    impact:
      'Supports both customer-facing discovery and internal listing management, so the business team can operate without patchwork tools.',
    tech: ['Next.js', 'TypeScript', 'Express', 'PostgreSQL', 'Cloudinary', 'Recharts'],
    url: 'https://phuketkeys.com',
  },
  {
    title: 'Bangkok WYNN Electrical Platform',
    category: 'B2B / B2C Product Catalog',
    year: '2025',
    status: 'Archived build',
    summary:
      'Product platform with filtering, quote and order flow, account system, admin panels, and technical document distribution for engineering customers.',
    impact:
      'Structured for customers who need fast access to product specs and for staff who need a manageable sales workflow behind the scenes.',
    tech: ['Next.js', 'TypeScript', 'Drizzle ORM', 'LibSQL', 'Tailwind CSS'],
  },
  {
    title: 'Langa Care',
    category: 'Healthcare Operations',
    year: '2025',
    status: 'Internal system',
    summary:
      'Internal screening and health-tracking system with dashboards, appointment handling, map-based field support, and reporting tools.',
    impact:
      'Designed around real service operations so staff can track cases, appointments, and field work from one place.',
    tech: ['Node.js', 'Express', 'MySQL', 'Sequelize', 'JWT', 'Google Maps', 'SheetJS'],
  },
  {
    title: 'Roundcube to Microsoft 365 Migration',
    category: 'Infra / Migration',
    year: '2024',
    status: 'Delivered',
    summary:
      'Migrated around 200,000 business emails from Roundcube to Microsoft 365 and handled DNS cutover through Cloudflare with limited disruption.',
    impact:
      'This was infrastructure-heavy work focused on continuity, risk reduction, and a clean switch for users.',
    tech: ['Microsoft 365', 'Roundcube', 'DNS', 'Cloudflare'],
  },
];

const contactLinks = [
  {
    label: 'Email',
    value: 'lucky99.commit@gmail.com',
    href: 'mailto:lucky99.commit@gmail.com',
    icon: Mail,
  },
  {
    label: 'GitHub',
    value: 'github.com/the-lucky-commit',
    href: 'https://github.com/the-lucky-commit',
    icon: Github,
  },
  {
    label: 'Line',
    value: 'line.me/ti/p/~adaybank',
    href: 'https://line.me/ti/p/~adaybank',
    icon: MessageCircle,
  },
  {
    label: 'Portfolio',
    value: 'lucky-commit-portfolio.vercel.app',
    href: 'https://lucky-commit-portfolio.vercel.app/',
    icon: Globe,
  },
];

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeProjects = projects.filter((project) => project.featured);
  const archiveProjects = projects.filter((project) => !project.featured);

  return (
    <div className="relative min-h-screen">
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-white/10 bg-slate-950/80 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-8">
          <a href="#top" className="font-display text-lg tracking-[0.28em] text-slate-200">
            lucky<span className="text-cyan-300">.commit</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-slate-300/80 transition-colors duration-200 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            className="text-slate-200 md:hidden"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="border-t border-white/10 bg-slate-950/95 px-6 py-4 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-slate-200/80 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main id="top">
        <section className="px-6 pb-16 pt-32 lg:px-8 lg:pb-24 lg:pt-36">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-3xl">
              <div className="fade-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-100/90">
                <Sparkles size={15} className="text-cyan-300" />
                Available for freelance builds and product work
              </div>

              <h1 className="font-display fade-up fade-delay-1 mt-6 text-5xl leading-[0.95] text-white sm:text-6xl lg:text-8xl">
                Building web products that look sharp and work in production.
              </h1>

              <p className="fade-up fade-delay-2 mt-6 max-w-2xl text-balance text-lg leading-8 text-slate-300/86 lg:text-xl">
                I design and build full-stack systems for businesses that need more than a pretty
                landing page. My focus is practical UX, strong admin workflows, and clean delivery
                from idea to launch.
              </p>

              <div className="fade-up fade-delay-3 mt-8 flex flex-wrap gap-3 text-sm text-slate-200/90">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  Next.js
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  TypeScript
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  Node.js
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  Business systems
                </span>
              </div>

              <div className="fade-up fade-delay-3 mt-10 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Explore projects
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white transition-colors hover:bg-white/10"
                >
                  Start a conversation
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {metrics.map((metric, index) => (
                  <div
                    key={metric.label}
                    className={`surface-card fade-up rounded-3xl p-5 ${index === 0 ? 'fade-delay-1' : index === 1 ? 'fade-delay-2' : 'fade-delay-3'}`}
                  >
                    <div className="font-display text-2xl text-white">{metric.value}</div>
                    <div className="mt-2 text-sm leading-6 text-slate-300/80">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-up fade-delay-2">
              <div className="surface-card glow-ring float-slow relative mx-auto max-w-xl overflow-hidden rounded-[32px] p-5">
                <div className="absolute -left-10 top-10 h-32 w-32 rounded-full bg-cyan-300/20 blur-3xl" />
                <div className="absolute -right-10 bottom-8 h-36 w-36 rounded-full bg-sky-400/20 blur-3xl" />

                <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-slate-950/70">
                  <div className="relative aspect-[0.95]">
                    <Image
                      src="/profile-3326.jpg"
                      alt="Lucky Commit profile illustration"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>

                  <div className="grid gap-4 border-t border-white/10 bg-slate-950/75 p-6 sm:grid-cols-2">
                    <div>
                      <div className="text-xs uppercase tracking-[0.24em] text-slate-400">Based in</div>
                      <div className="mt-2 flex items-center gap-2 text-sm text-slate-100">
                        <MapPin size={15} className="text-cyan-300" />
                        Khlung, Chanthaburi, Thailand
                      </div>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.24em] text-slate-400">Working style</div>
                      <div className="mt-2 flex items-center gap-2 text-sm text-slate-100">
                        <BadgeCheck size={15} className="text-cyan-300" />
                        Practical, fast, detail-aware
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section-divider px-6 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <div className="mb-4 text-sm uppercase tracking-[0.28em] text-cyan-300/85">
                  Selected Work
                </div>
                <h2 className="font-display text-4xl text-white sm:text-5xl lg:text-6xl">
                  Projects that solve real operational problems.
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-slate-300/78">
                This section now reflects the projects currently sitting in my active workspace,
                plus a few archive highlights that still represent the kind of systems I build.
              </p>
            </div>

            <div className="mb-6 text-sm uppercase tracking-[0.24em] text-slate-400">
              Active now
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {activeProjects.map((project) => (
                <article
                  key={project.title}
                  className="surface-card glow-ring group relative overflow-hidden rounded-[30px] p-8 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-cyan-300/10 blur-3xl transition-transform duration-500 group-hover:scale-125" />
                  <div className="relative">
                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300/75">
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                        {project.category}
                      </span>
                      <span>{project.year}</span>
                      <span className="rounded-full bg-cyan-300/12 px-3 py-1 text-cyan-200">
                        {project.status}
                      </span>
                    </div>

                    <div className="mt-8 flex items-start justify-between gap-6">
                      <div>
                        <h3 className="font-display text-3xl text-white sm:text-4xl">
                          {project.title}
                        </h3>
                        <p className="mt-4 max-w-xl text-base leading-7 text-slate-300/82">
                          {project.summary}
                        </p>
                      </div>
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Open ${project.title}`}
                          className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-cyan-300 hover:text-slate-950"
                        >
                          <ArrowUpRight size={18} />
                        </a>
                      ) : null}
                    </div>

                    <div className="mt-8 rounded-3xl border border-white/10 bg-black/10 p-5">
                      <div className="text-xs uppercase tracking-[0.24em] text-slate-400">Why it matters</div>
                      <p className="mt-3 text-sm leading-7 text-slate-200/85">{project.impact}</p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-slate-200/82"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-14 mb-6 text-sm uppercase tracking-[0.24em] text-slate-400">
              Selected archive
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {archiveProjects.map((project) => (
                <article
                  key={project.title}
                  className="surface-card group rounded-[28px] p-6 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="text-sm text-slate-300/74">
                      <div>{project.category}</div>
                      <div className="mt-1 text-slate-500">{project.year}</div>
                    </div>
                    <div className="rounded-full bg-white/5 px-3 py-1 text-xs text-cyan-200">
                      {project.status}
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-display text-2xl text-white">{project.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300/82">{project.summary}</p>
                    <p className="mt-4 text-sm leading-7 text-slate-400">{project.impact}</p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-200/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm text-cyan-200 transition-colors hover:text-white"
                    >
                      Visit project
                      <ArrowUpRight size={16} />
                    </a>
                  ) : (
                    <div className="mt-6 text-sm text-slate-500">Available on request</div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-divider px-6 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="surface-card rounded-[30px] p-8 lg:p-10">
              <div className="mb-4 text-sm uppercase tracking-[0.28em] text-cyan-300/85">About</div>
              <h2 className="font-display text-4xl text-white sm:text-5xl">Building useful products with clear thinking.</h2>
              <p className="mt-6 text-base leading-8 text-slate-300/84">
                My work sits between product sense and implementation. I care about how a system
                looks, but I care more about whether teams can actually use it every day without
                friction.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-300/78">
                That usually means translating messy requirements into structured UX, practical
                admin flows, and maintainable code that can survive real operations after launch.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <Briefcase size={18} className="text-cyan-300" />
                  <div className="mt-4 text-lg text-white">Product-minded delivery</div>
                  <p className="mt-2 text-sm leading-7 text-slate-300/78">
                    I look at flow, clarity, and business value before jumping straight into code.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <BadgeCheck size={18} className="text-cyan-300" />
                  <div className="mt-4 text-lg text-white">Hands-on execution</div>
                  <p className="mt-2 text-sm leading-7 text-slate-300/78">
                    Frontend, backend, deployment, fixes, and production support all stay in scope.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              {experiences.map((experience) => (
                <article key={experience.title} className="surface-card rounded-[28px] p-7">
                  <div className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">
                    {experience.year}
                  </div>
                  <h3 className="mt-4 font-display text-2xl text-white">{experience.title}</h3>
                  <div className="mt-2 text-sm text-slate-400">{experience.company}</div>
                  <p className="mt-4 text-base leading-8 text-slate-300/82">{experience.description}</p>
                </article>
              ))}

              <article className="surface-card rounded-[28px] p-7">
                <div className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">
                  What clients usually get
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-300/82">
                    Stronger information hierarchy and easier user flow
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-300/82">
                    Admin tools designed around actual operations
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-300/82">
                    Cleaner frontend with maintainable components
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-300/82">
                    Faster path from idea to working production release
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="skills" className="section-divider px-6 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <div className="mb-4 text-sm uppercase tracking-[0.28em] text-cyan-300/85">Skills</div>
              <h2 className="font-display text-4xl text-white sm:text-5xl lg:text-6xl">
                A stack shaped by product delivery, not trend chasing.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {skills.map((skill) => (
                <article key={skill.category} className="surface-card rounded-[26px] p-6">
                  <div className="text-sm uppercase tracking-[0.22em] text-cyan-300/80">
                    {skill.category}
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200/86"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-divider px-6 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="surface-card rounded-[30px] p-8 lg:p-10">
              <div className="mb-4 text-sm uppercase tracking-[0.28em] text-cyan-300/85">Contact</div>
              <h2 className="font-display text-4xl text-white sm:text-5xl">
                Looking for someone who can ship and refine the product with you?
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-300/82">
                I am open to freelance work, product collaboration, and full-time roles where clean
                execution and practical UX matter.
              </p>

              <div className="mt-8 rounded-[26px] border border-emerald-400/20 bg-emerald-400/8 p-5">
                <div className="flex items-center gap-3 text-sm text-emerald-200">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                  Currently available: freelance + selected full-time opportunities
                </div>
              </div>

              <div className="mt-8 space-y-4 text-sm text-slate-300/80">
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-cyan-300" />
                  Khlung, Chanthaburi, Thailand
                </div>
                <div className="flex items-center gap-3">
                  <BadgeCheck size={16} className="text-cyan-300" />
                  Comfortable with remote collaboration and async workflow
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {contactLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="surface-card group flex items-center justify-between rounded-[26px] p-6 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-4">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-cyan-300">
                        <Icon size={20} />
                      </div>
                      <div>
                        <div className="text-sm uppercase tracking-[0.2em] text-slate-400">
                          {item.label}
                        </div>
                        <div className="mt-1 text-base text-white">{item.value}</div>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-slate-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="section-divider px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© 2026 lucky.commit</div>
          <div>Built with Next.js and refreshed for a cleaner reading experience.</div>
        </div>
      </footer>
    </div>
  );
}
