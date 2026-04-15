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

const locales = ['en', 'th'] as const;
type Locale = (typeof locales)[number];
type LocalizedText = Record<Locale, string>;

const navItems = [
  {
    label: { en: 'Projects', th: 'ผลงาน' },
    href: '#projects',
  },
  {
    label: { en: 'About', th: 'เกี่ยวกับ' },
    href: '#about',
  },
  {
    label: { en: 'Skills', th: 'ทักษะ' },
    href: '#skills',
  },
  {
    label: { en: 'Contact', th: 'ติดต่อ' },
    href: '#contact',
  },
];

const metrics = [
  {
    value: '7+',
    label: {
      en: 'Production projects shipped',
      th: 'โปรเจกต์ที่ส่งมอบและใช้งานจริง',
    },
  },
  {
    value: '3',
    label: {
      en: 'Active workspaces in progress now',
      th: 'โปรเจกต์ที่กำลังพัฒนาอยู่ในขณะนี้',
    },
  },
  {
    value: '3+',
    label: {
      en: 'Years building for real businesses',
      th: 'ประสบการณ์พัฒนางานให้ธุรกิจจริง',
    },
  },
  {
    value: 'E2E',
    label: {
      en: 'From planning to deployment support',
      th: 'ดูแลงานตั้งแต่วางแผนจนถึงหลังขึ้นระบบ',
    },
  },
];

const skills = [
  {
    category: { en: 'Frontend Systems', th: 'ระบบฝั่งผู้ใช้งาน' },
    items: ['React', 'Next.js App Router', 'TypeScript', 'Tailwind CSS', 'Responsive UX'],
  },
  {
    category: { en: 'Backend & API', th: 'Backend และ API' },
    items: ['Node.js', 'Express', 'REST API', 'JWT Auth', 'Role-based Access'],
  },
  {
    category: { en: 'Data & Infra', th: 'ข้อมูลและโครงสร้างระบบ' },
    items: ['PostgreSQL', 'MySQL', 'LibSQL', 'Drizzle ORM', 'Cloudinary', 'Nginx'],
  },
  {
    category: { en: 'Business Workflows', th: 'กระบวนการธุรกิจ' },
    items: ['Admin Dashboard', 'Quotation Flow', 'Order Operations', 'Content Systems', 'Excel Export'],
  },
  {
    category: { en: 'Delivery', th: 'การนำระบบขึ้นใช้งาน' },
    items: ['Vercel', 'Render', 'cPanel', 'Cloudflare DNS', 'Production Support'],
  },
  {
    category: { en: 'Tools', th: 'เครื่องมือที่ใช้ประจำ' },
    items: ['GitHub', 'Postman', 'Figma', 'Blender', 'Canva', 'VS Code'],
  },
];

const experiences = [
  {
    year: '2023 - Present',
    title: {
      en: 'Freelance Full-stack Developer',
      th: 'Freelance Full-stack Developer',
    },
    company: {
      en: 'Self-employed',
      th: 'รับงานอิสระ',
    },
    description: {
      en: 'Ship business-facing products for Thai SMEs across e-commerce, healthcare, and real-estate. Own planning, development, deployment, and post-launch support.',
      th: 'พัฒนาและส่งมอบระบบสำหรับธุรกิจ SME ในไทย ทั้งด้านอีคอมเมิร์ซ สุขภาพ และอสังหาริมทรัพย์ โดยดูแลงานตั้งแต่การวางแผน พัฒนา ขึ้นระบบ และติดตามหลังเปิดใช้งาน',
    },
  },
  {
    year: '2022 - 2023',
    title: {
      en: 'Junior Developer',
      th: 'Junior Developer',
    },
    company: {
      en: 'RCSA Drone Thailand',
      th: 'RCSA Drone Thailand',
    },
    description: {
      en: 'Built internal tools for drone-show formation planning, flight workflows, and Blender-based automation for choreography and presentation assets.',
      th: 'พัฒนาเครื่องมือภายในสำหรับการวางแผนรูปแบบการแสดงโดรน การจัดการ workflow การบิน และระบบอัตโนมัติบน Blender สำหรับงาน choreography และสื่อประกอบการนำเสนอ',
    },
  },
];

const projects = [
  {
    title: 'Closet Go Rental Platform',
    category: {
      en: 'E-commerce Operations',
      th: 'ระบบอีคอมเมิร์ซเพื่อการดำเนินงาน',
    },
    year: '2026',
    status: {
      en: 'Active workspace',
      th: 'กำลังพัฒนาและดูแลต่อเนื่อง',
    },
    summary: {
      en: 'Clothing rental platform covering membership tiers, checkout, PromptPay verification, and admin workflows for inventory, orders, and shipping.',
      th: 'แพลตฟอร์มเช่าเสื้อผ้าที่รองรับสมาชิกหลายระดับ ระบบเช็กเอาต์ การยืนยันชำระเงินผ่าน PromptPay และ workflow ฝั่งแอดมินสำหรับสต็อก ออเดอร์ และการจัดส่ง',
    },
    impact: {
      en: 'The current production system already supports rental checkout, membership activation, shipping flow, delivery confirmation, and buyout requests in one operational pipeline.',
      th: 'ระบบ production ปัจจุบันรองรับทั้งการเช็กเอาต์งานเช่า การเปิดใช้งานสมาชิก การจัดการสถานะจัดส่ง การยืนยันรับสินค้า และคำขอซื้อขาดภายใน workflow เดียว',
    },
    tech: ['React', 'Vite', 'Node.js', 'Express', 'MySQL', 'JWT', 'Cloudinary'],
    url: 'https://closetgostudio.com',
    featured: true,
  },
  {
    title: 'Langa Health Center React Migration',
    category: {
      en: 'Healthcare Platform',
      th: 'แพลตฟอร์มด้านสุขภาพ',
    },
    year: '2026',
    status: {
      en: 'Active migration',
      th: 'อยู่ระหว่างย้ายระบบ',
    },
    summary: {
      en: 'Ongoing migration from static pages to a React frontend while keeping the working backend and legacy routes online during the transition.',
      th: 'กำลังย้ายเว็บไซต์จากหน้า static เดิมไปสู่ React frontend โดยยังคงให้ backend เดิมและเส้นทาง legacy ใช้งานได้ต่อระหว่างช่วงเปลี่ยนผ่าน',
    },
    impact: {
      en: 'This reduces rewrite risk. Public pages, booking routes, and admin views can move into a cleaner component-based app without breaking the live service.',
      th: 'ช่วยลดความเสี่ยงจากการ rewrite ทั้งระบบในครั้งเดียว ทำให้หน้าสาธารณะ ระบบจอง และมุมมองแอดมินทยอยย้ายเข้าสู่โครงสร้าง component ที่ดูแลง่ายขึ้นโดยไม่กระทบบริการที่ใช้งานอยู่',
    },
    tech: ['React', 'Vite', 'Tailwind CSS', 'Express', 'MySQL', 'Framer Motion'],
    url: 'https://langashph.com',
    featured: true,
  },
  {
    title: 'Apple Bake Campaign Site',
    category: {
      en: 'Food & Beverage Microsite',
      th: 'Microsite สำหรับแบรนด์อาหารและเครื่องดื่ม',
    },
    year: '2026',
    status: {
      en: 'Active build',
      th: 'กำลังพัฒนา',
    },
    summary: {
      en: 'Promotional storefront for premium mini soft cakes with a flavour catalog, delivery coverage messaging, and WhatsApp-led ordering flow for Malaysia-wide customers.',
      th: 'หน้าโปรโมตสินค้า mini soft cake ระดับพรีเมียม พร้อม catalog รสชาติ การสื่อสารเรื่องพื้นที่จัดส่ง และ flow การสั่งซื้อผ่าน WhatsApp สำหรับลูกค้าในมาเลเซีย',
    },
    impact: {
      en: 'Built to turn social traffic into direct inquiry quickly, with strong visual merchandising and a lightweight sales flow instead of a heavy checkout system.',
      th: 'ออกแบบมาเพื่อเปลี่ยนผู้ชมจาก social ให้กลายเป็นผู้ติดต่อสั่งซื้อได้รวดเร็ว โดยเน้นการนำเสนอสินค้าให้ชัดและใช้ flow การขายที่เบา เข้าใจง่าย และไม่ซับซ้อนเกินจำเป็น',
    },
    tech: ['HTML', 'CSS', 'JavaScript', 'Vite', 'Vercel Serverless'],
    featured: true,
  },
  {
    title: 'PhuketKeys.com',
    category: {
      en: 'Real Estate Platform',
      th: 'แพลตฟอร์มอสังหาริมทรัพย์',
    },
    year: '2025',
    status: {
      en: 'Archived highlight',
      th: 'ผลงานเด่นจาก archive',
    },
    summary: {
      en: 'Production property platform with listing search, account system, media management, and an analytics-ready back-office for real-estate operations.',
      th: 'แพลตฟอร์มอสังหาริมทรัพย์ที่ใช้งานจริง รองรับการค้นหารายการทรัพย์ ระบบบัญชีผู้ใช้ การจัดการสื่อ และ back-office ที่พร้อมต่อยอดด้านข้อมูลและการวิเคราะห์',
    },
    impact: {
      en: 'Supports both customer-facing discovery and internal listing management, so the business team can operate without patchwork tools.',
      th: 'รองรับทั้งประสบการณ์ฝั่งลูกค้าที่เข้ามาค้นหาทรัพย์ และการจัดการข้อมูลภายในของทีมงาน ทำให้สามารถทำงานได้ในระบบเดียวโดยไม่ต้องพึ่งเครื่องมือกระจัดกระจาย',
    },
    tech: ['Next.js', 'TypeScript', 'Express', 'PostgreSQL', 'Cloudinary', 'Recharts'],
    url: 'https://phuketkeys.com',
  },
  {
    title: 'Bangkok WYNN Electrical Platform',
    category: {
      en: 'B2B / B2C Product Catalog',
      th: 'ระบบแคตตาล็อกสินค้า B2B / B2C',
    },
    year: '2025',
    status: {
      en: 'Archived build',
      th: 'โปรเจกต์ใน archive',
    },
    summary: {
      en: 'Product platform with filtering, quote and order flow, account system, admin panels, and technical document distribution for engineering customers.',
      th: 'แพลตฟอร์มสินค้าอุตสาหกรรมที่มีระบบกรองข้อมูล การขอราคาและสั่งซื้อ ระบบบัญชีผู้ใช้ แผงควบคุมแอดมิน และการแจกจ่ายเอกสารทางเทคนิคสำหรับลูกค้ากลุ่มวิศวกรรม',
    },
    impact: {
      en: 'Structured for customers who need fast access to product specs and for staff who need a manageable sales workflow behind the scenes.',
      th: 'ออกแบบให้ลูกค้าเข้าถึงข้อมูลสเปกสินค้าได้รวดเร็ว พร้อมช่วยให้ทีมขายและทีมงานภายในจัดการ workflow ได้สะดวกและเป็นระบบมากขึ้น',
    },
    tech: ['Next.js', 'TypeScript', 'Drizzle ORM', 'LibSQL', 'Tailwind CSS'],
  },
  {
    title: 'Langa Care',
    category: {
      en: 'Healthcare Operations',
      th: 'ระบบปฏิบัติงานด้านสุขภาพ',
    },
    year: '2025',
    status: {
      en: 'Internal system',
      th: 'ระบบใช้งานภายใน',
    },
    summary: {
      en: 'Internal screening and health-tracking system with dashboards, appointment handling, map-based field support, and reporting tools.',
      th: 'ระบบคัดกรองและติดตามสุขภาพภายในองค์กร พร้อม dashboard การจัดการนัดหมาย เครื่องมือสนับสนุนการลงพื้นที่ และรายงานสำหรับการติดตามงาน',
    },
    impact: {
      en: 'Designed around real service operations so staff can track cases, appointments, and field work from one place.',
      th: 'ออกแบบจากการทำงานจริงของหน่วยบริการ เพื่อให้เจ้าหน้าที่ติดตามเคส นัดหมาย และงานภาคสนามได้จากศูนย์กลางเดียว',
    },
    tech: ['Node.js', 'Express', 'MySQL', 'Sequelize', 'JWT', 'Google Maps', 'SheetJS'],
  },
  {
    title: 'Roundcube to Microsoft 365 Migration',
    category: {
      en: 'Infra / Migration',
      th: 'โครงสร้างพื้นฐาน / การย้ายระบบ',
    },
    year: '2024',
    status: {
      en: 'Delivered',
      th: 'ส่งมอบแล้ว',
    },
    summary: {
      en: 'Migrated around 200,000 business emails from Roundcube to Microsoft 365 and handled DNS cutover through Cloudflare with limited disruption.',
      th: 'ย้ายอีเมลธุรกิจประมาณ 200,000 ฉบับจาก Roundcube ไปยัง Microsoft 365 และดูแลการสลับ DNS ผ่าน Cloudflare โดยลดผลกระทบต่อการใช้งานให้น้อยที่สุด',
    },
    impact: {
      en: 'This was infrastructure-heavy work focused on continuity, risk reduction, and a clean switch for users.',
      th: 'เป็นงานโครงสร้างพื้นฐานที่เน้นความต่อเนื่องของบริการ การลดความเสี่ยง และการเปลี่ยนผ่านที่ราบรื่นสำหรับผู้ใช้งาน',
    },
    tech: ['Microsoft 365', 'Roundcube', 'DNS', 'Cloudflare'],
  },
];

const contactLinks = [
  {
    label: { en: 'Email', th: 'อีเมล' },
    value: 'lucky99.commit@gmail.com',
    href: 'mailto:lucky99.commit@gmail.com',
    icon: Mail,
  },
  {
    label: { en: 'GitHub', th: 'GitHub' },
    value: 'github.com/the-lucky-commit',
    href: 'https://github.com/the-lucky-commit',
    icon: Github,
  },
  {
    label: { en: 'Line', th: 'Line' },
    value: 'line.me/ti/p/~adaybank',
    href: 'https://line.me/ti/p/~adaybank',
    icon: MessageCircle,
  },
  {
    label: { en: 'Portfolio', th: 'Portfolio' },
    value: 'lucky-commit-portfolio.vercel.app',
    href: 'https://lucky-commit-portfolio.vercel.app/',
    icon: Globe,
  },
];

const copy = {
  en: {
    languageLabel: 'Language',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    availabilityBadge: 'Available for freelance builds and product work',
    heroTitle: 'Building web products that look sharp and work in production.',
    heroDescription:
      'I design and build full-stack systems for businesses that need more than a pretty landing page. My focus is practical UX, strong admin workflows, and clean delivery from idea to launch.',
    heroTags: ['Next.js', 'TypeScript', 'Node.js', 'Business systems'],
    heroPrimaryCta: 'Explore projects',
    heroSecondaryCta: 'Start a conversation',
    profileAlt: 'Lucky Commit profile illustration',
    basedIn: 'Based in',
    workingStyle: 'Working style',
    workingStyleValue: 'Practical, fast, detail-aware',
    projectsEyebrow: 'Selected Work',
    projectsTitle: 'Projects that solve real operational problems.',
    projectsIntro:
      'This section now reflects the projects currently sitting in my active workspace, plus a few archive highlights that still represent the kind of systems I build.',
    activeNow: 'Active now',
    selectedArchive: 'Selected archive',
    whyItMatters: 'Why it matters',
    visitProject: 'Visit project',
    availableOnRequest: 'Available on request',
    aboutEyebrow: 'About',
    aboutTitle: 'Building useful products with clear thinking.',
    aboutBodyOne:
      'My work sits between product sense and implementation. I care about how a system looks, but I care more about whether teams can actually use it every day without friction.',
    aboutBodyTwo:
      'That usually means translating messy requirements into structured UX, practical admin flows, and maintainable code that can survive real operations after launch.',
    aboutCardOneTitle: 'Product-minded delivery',
    aboutCardOneBody:
      'I look at flow, clarity, and business value before jumping straight into code.',
    aboutCardTwoTitle: 'Hands-on execution',
    aboutCardTwoBody:
      'Frontend, backend, deployment, fixes, and production support all stay in scope.',
    clientValueTitle: 'What clients usually get',
    clientValues: [
      'Stronger information hierarchy and easier user flow',
      'Admin tools designed around actual operations',
      'Cleaner frontend with maintainable components',
      'Faster path from idea to working production release',
    ],
    skillsEyebrow: 'Skills',
    skillsTitle: 'A stack shaped by product delivery, not trend chasing.',
    contactEyebrow: 'Contact',
    contactTitle: 'Looking for someone who can ship and refine the product with you?',
    contactBody:
      'I am open to freelance work, product collaboration, and full-time roles where clean execution and practical UX matter.',
    availabilityNow: 'Currently available: freelance + selected full-time opportunities',
    remoteReady: 'Comfortable with remote collaboration and async workflow',
    footerNote: 'Built with Next.js and refreshed for a cleaner reading experience.',
  },
  th: {
    languageLabel: 'ภาษา',
    menuOpen: 'เปิดเมนู',
    menuClose: 'ปิดเมนู',
    availabilityBadge: 'เปิดรับงานพัฒนาเว็บและผลิตภัณฑ์ดิจิทัล',
    heroTitle: 'ออกแบบและพัฒนาเว็บโปรดักต์ที่พร้อมใช้งานจริงในระดับ production',
    heroDescription:
      'ผมออกแบบและพัฒนาระบบเว็บสำหรับธุรกิจที่ต้องการมากกว่าหน้าเว็บไซต์ที่ดูดี โดยมุ่งเน้น UX ที่ชัดเจน กระบวนการทำงานหลังบ้านที่รองรับการใช้งานจริง และการส่งมอบงานอย่างเป็นระบบตั้งแต่แนวคิดจนถึงการเปิดใช้งาน',
    heroTags: ['Next.js', 'TypeScript', 'Node.js', 'ระบบธุรกิจ'],
    heroPrimaryCta: 'ดูผลงาน',
    heroSecondaryCta: 'เริ่มพูดคุย',
    profileAlt: 'ภาพโปรไฟล์ Lucky Commit',
    basedIn: 'ที่อยู่ปัจจุบัน',
    workingStyle: 'ลักษณะการทำงาน',
    workingStyleValue: 'ทำงานเป็นระบบ สื่อสารชัดเจน และใส่ใจรายละเอียด',
    projectsEyebrow: 'ผลงานที่คัดมา',
    projectsTitle: 'ผลงานที่พัฒนาจากโจทย์การใช้งานจริงของธุรกิจ',
    projectsIntro:
      'ผลงานส่วนนี้คัดเลือกจากโปรเจกต์ที่กำลังพัฒนาอยู่ในปัจจุบัน และงานสำคัญจาก archive เพื่อสะท้อนแนวทางการออกแบบระบบและการส่งมอบงานที่ผมถนัด',
    activeNow: 'กำลังพัฒนาอยู่ตอนนี้',
    selectedArchive: 'ผลงานจาก archive ที่ยังอยากนำเสนอ',
    whyItMatters: 'คุณค่าของงานชิ้นนี้',
    visitProject: 'เปิดดูโปรเจกต์',
    availableOnRequest: 'สามารถขอดูรายละเอียดเพิ่มเติมได้',
    aboutEyebrow: 'เกี่ยวกับ',
    aboutTitle: 'ผมให้ความสำคัญกับทั้งการคิดเชิงระบบและการส่งมอบงานที่ชัดเจน',
    aboutBodyOne:
      'แนวทางการทำงานของผมอยู่กึ่งกลางระหว่างความเข้าใจเชิงผลิตภัณฑ์และการพัฒนาเชิงเทคนิค ผมให้ความสำคัญกับภาพลักษณ์ของระบบ แต่ให้ความสำคัญมากยิ่งกว่าว่าทีมงานจะสามารถใช้งานได้จริงอย่างมีประสิทธิภาพในทุกวัน',
    aboutBodyTwo:
      'โดยทั่วไป งานลักษณะนี้หมายถึงการนำ requirement ที่ซับซ้อนมาจัดโครงสร้างใหม่ ให้กลายเป็น UX ที่เข้าใจง่าย กระบวนการทำงานหลังบ้านที่เหมาะกับการใช้งานจริง และโค้ดที่สามารถดูแลต่อได้หลังเปิดระบบ',
    aboutCardOneTitle: 'ทำงานด้วยมุมมองแบบ product',
    aboutCardOneBody:
      'ผมพิจารณา flow ความชัดเจน และคุณค่าทางธุรกิจก่อนเริ่มลงมือพัฒนาเสมอ',
    aboutCardTwoTitle: 'รับผิดชอบงานได้ครบตลอดกระบวนการ',
    aboutCardTwoBody:
      'ทั้ง frontend, backend, deployment, การแก้ปัญหา และการดูแลหลังขึ้นระบบ ล้วนอยู่ในขอบเขตที่ผมสามารถรับผิดชอบได้',
    clientValueTitle: 'สิ่งที่ลูกค้ามักได้รับจากการทำงานร่วมกัน',
    clientValues: [
      'โครงสร้างข้อมูลที่ชัดเจนขึ้นและ user flow ที่ใช้งานง่ายขึ้น',
      'เครื่องมือฝั่งแอดมินที่ออกแบบตามการทำงานจริง',
      'frontend ที่เรียบร้อย ดูแลง่าย และขยายต่อได้',
      'ระยะทางจากไอเดียไปสู่ระบบที่ใช้งานได้จริงสั้นลงอย่างมีระบบ',
    ],
    skillsEyebrow: 'ทักษะ',
    skillsTitle: 'เทคโนโลยีที่เลือกใช้จากประสบการณ์ส่งมอบงานจริง ไม่ใช่เพียงตามกระแส',
    contactEyebrow: 'ติดต่อ',
    contactTitle: 'หากคุณกำลังมองหาคนที่ช่วยพัฒนาและขับเคลื่อนงานไปพร้อมกับทีม',
    contactBody:
      'ผมเปิดรับทั้งงาน freelance งานร่วมพัฒนาผลิตภัณฑ์ และโอกาส full-time ในทีมที่ให้ความสำคัญกับการส่งมอบงานที่เรียบร้อย ใช้งานได้จริง และมีประสบการณ์ผู้ใช้ที่เหมาะสมกับบริบทของธุรกิจ',
    availabilityNow: 'ปัจจุบันพร้อมรับงาน freelance และพิจารณาโอกาส full-time ที่เหมาะสม',
    remoteReady: 'สามารถทำงานร่วมกันแบบ remote และ async workflow ได้อย่างคล่องตัว',
    footerNote: 'พัฒนาด้วย Next.js และปรับใหม่เพื่อให้อ่านง่ายขึ้นและใช้งานเป็นมิตรมากขึ้น',
  },
} as const;

function LanguageToggle({
  locale,
  setLocale,
  label,
}: {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="hidden text-xs uppercase tracking-[0.2em] text-slate-500 lg:block">
        {label}
      </span>
      <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1">
        {locales.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setLocale(item)}
            className={`rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] transition-colors ${
              locale === item
                ? 'bg-cyan-300 text-slate-950'
                : 'text-slate-300 hover:text-white'
            }`}
            aria-pressed={locale === item}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [locale, setLocale] = useState<Locale>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const t = (value: LocalizedText) => value[locale];
  const activeProjects = projects.filter((project) => project.featured);
  const archiveProjects = projects.filter((project) => !project.featured);
  const c = copy[locale];
  const isThai = locale === 'th';
  const sectionEyebrowClass = isThai
    ? 'mb-4 text-sm font-medium tracking-[0.02em] text-cyan-300/85'
    : 'mb-4 text-sm uppercase tracking-[0.28em] text-cyan-300/85';
  const metaLabelClass = isThai
    ? 'text-xs font-medium tracking-[0.02em] text-slate-400'
    : 'text-xs uppercase tracking-[0.24em] text-slate-400';

  return (
    <div className={`relative min-h-screen ${locale === 'th' ? 'locale-th' : ''}`}>
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
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300/80 transition-colors duration-200 hover:text-white"
              >
                {t(item.label)}
              </a>
            ))}
            <LanguageToggle locale={locale} setLocale={setLocale} label={c.languageLabel} />
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <LanguageToggle locale={locale} setLocale={setLocale} label={c.languageLabel} />
            <button
              className="text-slate-200"
              aria-label={isMenuOpen ? c.menuClose : c.menuOpen}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="border-t border-white/10 bg-slate-950/95 px-6 py-4 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-slate-200/80 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {t(item.label)}
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
                {c.availabilityBadge}
              </div>

              <h1
                className={`font-display fade-up fade-delay-1 mt-6 text-white ${
                  isThai
                    ? 'max-w-2xl text-4xl leading-[1.08] sm:text-5xl lg:text-[4.75rem]'
                    : 'text-5xl leading-[0.95] sm:text-6xl lg:text-8xl'
                }`}
              >
                {c.heroTitle}
              </h1>

              <p
                className={`fade-up fade-delay-2 mt-6 text-balance text-slate-300/86 ${
                  isThai
                    ? 'max-w-2xl text-base leading-8 lg:text-[1.05rem]'
                    : 'max-w-2xl text-lg leading-8 lg:text-xl'
                }`}
              >
                {c.heroDescription}
              </p>

              <div className="fade-up fade-delay-3 mt-8 flex flex-wrap gap-3 text-sm text-slate-200/90">
                {c.heroTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="fade-up fade-delay-3 mt-10 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  {c.heroPrimaryCta}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white transition-colors hover:bg-white/10"
                >
                  {c.heroSecondaryCta}
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {metrics.map((metric, index) => (
                  <div
                    key={`${metric.value}-${index}`}
                    className={`surface-card fade-up rounded-3xl p-5 ${
                      index === 0
                        ? 'fade-delay-1'
                        : index === 1
                          ? 'fade-delay-2'
                          : 'fade-delay-3'
                    }`}
                  >
                    <div className="font-display text-2xl text-white">{metric.value}</div>
                    <div className="mt-2 text-sm leading-6 text-slate-300/80">{t(metric.label)}</div>
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
                      alt={c.profileAlt}
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>

                  <div className="grid gap-4 border-t border-white/10 bg-slate-950/75 p-6 sm:grid-cols-2">
                    <div>
                      <div className="text-xs uppercase tracking-[0.24em] text-slate-400">
                        {c.basedIn}
                      </div>
                      <div className="mt-2 flex items-center gap-2 text-sm text-slate-100">
                        <MapPin size={15} className="text-cyan-300" />
                        Khlung, Chanthaburi, Thailand
                      </div>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.24em] text-slate-400">
                        {c.workingStyle}
                      </div>
                      <div className="mt-2 flex items-center gap-2 text-sm text-slate-100">
                        <BadgeCheck size={15} className="text-cyan-300" />
                        {c.workingStyleValue}
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
                <div className={sectionEyebrowClass}>{c.projectsEyebrow}</div>
                <h2
                  className={`font-display text-white ${
                    isThai
                      ? 'text-3xl leading-[1.18] sm:text-4xl lg:text-[3.4rem]'
                      : 'text-4xl sm:text-5xl lg:text-6xl'
                  }`}
                >
                  {c.projectsTitle}
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-slate-300/78">{c.projectsIntro}</p>
            </div>

            <div className="mb-6 text-sm uppercase tracking-[0.24em] text-slate-400">
              {c.activeNow}
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
                        {t(project.category)}
                      </span>
                      <span>{project.year}</span>
                      <span className="rounded-full bg-cyan-300/12 px-3 py-1 text-cyan-200">
                        {t(project.status)}
                      </span>
                    </div>

                    <div className="mt-8 flex items-start justify-between gap-6">
                      <div>
                        <h3 className="font-display text-3xl text-white sm:text-4xl">
                          {project.title}
                        </h3>
                        <p className="mt-4 max-w-xl text-base leading-7 text-slate-300/82">
                          {t(project.summary)}
                        </p>
                      </div>
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${c.visitProject}: ${project.title}`}
                          className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-cyan-300 hover:text-slate-950"
                        >
                          <ArrowUpRight size={18} />
                        </a>
                      ) : null}
                    </div>

                    <div className="mt-8 rounded-3xl border border-white/10 bg-black/10 p-5">
                      <div className={metaLabelClass}>{c.whyItMatters}</div>
                      <p className="mt-3 text-sm leading-7 text-slate-200/85">{t(project.impact)}</p>
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

            <div className="mb-6 mt-14 text-sm uppercase tracking-[0.24em] text-slate-400">
              {c.selectedArchive}
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {archiveProjects.map((project) => (
                <article
                  key={project.title}
                  className="surface-card group rounded-[28px] p-6 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="text-sm text-slate-300/74">
                      <div>{t(project.category)}</div>
                      <div className="mt-1 text-slate-500">{project.year}</div>
                    </div>
                    <div className="rounded-full bg-white/5 px-3 py-1 text-xs text-cyan-200">
                      {t(project.status)}
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-display text-2xl text-white">{project.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300/82">{t(project.summary)}</p>
                    <p className="mt-4 text-sm leading-7 text-slate-400">{t(project.impact)}</p>
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
                      {c.visitProject}
                      <ArrowUpRight size={16} />
                    </a>
                  ) : (
                    <div className="mt-6 text-sm text-slate-500">{c.availableOnRequest}</div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-divider px-6 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="surface-card rounded-[30px] p-8 lg:p-10">
              <div className={sectionEyebrowClass}>{c.aboutEyebrow}</div>
              <h2
                className={`font-display text-white ${
                  isThai ? 'text-3xl leading-[1.2] sm:text-4xl lg:text-[3rem]' : 'text-4xl sm:text-5xl'
                }`}
              >
                {c.aboutTitle}
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-300/84">{c.aboutBodyOne}</p>
              <p className="mt-4 text-base leading-8 text-slate-300/78">{c.aboutBodyTwo}</p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <Briefcase size={18} className="text-cyan-300" />
                  <div className="mt-4 text-lg text-white">{c.aboutCardOneTitle}</div>
                  <p className="mt-2 text-sm leading-7 text-slate-300/78">{c.aboutCardOneBody}</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <BadgeCheck size={18} className="text-cyan-300" />
                  <div className="mt-4 text-lg text-white">{c.aboutCardTwoTitle}</div>
                  <p className="mt-2 text-sm leading-7 text-slate-300/78">{c.aboutCardTwoBody}</p>
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              {experiences.map((experience) => (
                <article key={experience.year + experience.title.en} className="surface-card rounded-[28px] p-7">
                  <div className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">
                    {experience.year}
                  </div>
                  <h3 className="mt-4 font-display text-2xl text-white">{t(experience.title)}</h3>
                  <div className="mt-2 text-sm text-slate-400">{t(experience.company)}</div>
                  <p className="mt-4 text-base leading-8 text-slate-300/82">
                    {t(experience.description)}
                  </p>
                </article>
              ))}

              <article className="surface-card rounded-[28px] p-7">
                <div className={isThai ? 'text-sm font-medium tracking-[0.02em] text-cyan-300/80' : 'text-sm uppercase tracking-[0.24em] text-cyan-300/80'}>
                  {c.clientValueTitle}
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {c.clientValues.map((value) => (
                    <div
                      key={value}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-300/82"
                    >
                      {value}
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="skills" className="section-divider px-6 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <div className={sectionEyebrowClass}>{c.skillsEyebrow}</div>
              <h2
                className={`font-display text-white ${
                  isThai
                    ? 'text-3xl leading-[1.18] sm:text-4xl lg:text-[3.2rem]'
                    : 'text-4xl sm:text-5xl lg:text-6xl'
                }`}
              >
                {c.skillsTitle}
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {skills.map((skill) => (
                <article key={skill.category.en} className="surface-card rounded-[26px] p-6">
                  <div className="text-sm uppercase tracking-[0.22em] text-cyan-300/80">
                    {t(skill.category)}
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
              <div className={sectionEyebrowClass}>{c.contactEyebrow}</div>
              <h2
                className={`font-display text-white ${
                  isThai ? 'text-3xl leading-[1.2] sm:text-4xl lg:text-[3rem]' : 'text-4xl sm:text-5xl'
                }`}
              >
                {c.contactTitle}
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-300/82">{c.contactBody}</p>

              <div className="mt-8 rounded-[26px] border border-emerald-400/20 bg-emerald-400/8 p-5">
                <div className="flex items-center gap-3 text-sm text-emerald-200">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                  {c.availabilityNow}
                </div>
              </div>

              <div className="mt-8 space-y-4 text-sm text-slate-300/80">
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-cyan-300" />
                  Khlung, Chanthaburi, Thailand
                </div>
                <div className="flex items-center gap-3">
                  <BadgeCheck size={16} className="text-cyan-300" />
                  {c.remoteReady}
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {contactLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.value}
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
                          {t(item.label)}
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
          <div>{c.footerNote}</div>
        </div>
      </footer>
    </div>
  );
}
