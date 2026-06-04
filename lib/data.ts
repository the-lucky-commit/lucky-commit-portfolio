import { Briefcase, Github, Globe, Mail, MapPin, MessageCircle } from 'lucide-react';

export const locales = ['en', 'th'] as const;
export type Locale = (typeof locales)[number];
export type L = Record<Locale, string>;

export const projects = [
  { id: '1', title: 'Closet Go Rental Platform', cat: { en: 'E-commerce Operations', th: 'ระบบอีคอมเมิร์ซ' } as L, year: '2026', status: { en: 'Live platform', th: 'ใช้งานจริง' } as L, desc: { en: 'Clothing rental platform covering membership tiers, checkout, PromptPay verification, and admin workflows for inventory, orders, and shipping.', th: 'แพลตฟอร์มเช่าเสื้อผ้าที่รองรับสมาชิกหลายระดับ ระบบเช็กเอาต์ การยืนยันชำระเงินผ่าน PromptPay และ workflow ฝั่งแอดมิน' } as L, tech: ['React', 'Vite', 'Node.js', 'Express', 'MySQL', 'JWT', 'Cloudinary'], url: 'https://closetgostudio.com', gradientClass: 'project-gradient-1' },
  { id: '2', title: 'Langa Health Center', cat: { en: 'Healthcare Platform', th: 'แพลตฟอร์มสุขภาพ' } as L, year: '2026', status: { en: 'Ongoing migration', th: 'อยู่ระหว่างพัฒนา' } as L, desc: { en: 'Migration from a static legacy site into a React-based frontend while keeping existing services live during the transition.', th: 'ย้ายเว็บไซต์จากโครงสร้าง static เดิมไปสู่ React frontend โดยให้บริการเดิมใช้งานต่อได้' } as L, tech: ['React', 'Vite', 'Tailwind CSS', 'Express', 'MySQL'], url: 'https://langashph-frontend.vercel.app/home', gradientClass: 'project-gradient-2' },
  { id: '3', title: 'Apple Bake Campaign', cat: { en: 'Food & Beverage Microsite', th: 'Microsite อาหาร' } as L, year: '2026', status: { en: 'Campaign build', th: 'งานแคมเปญ' } as L, desc: { en: 'Promotional storefront for premium mini soft cakes with flavour browsing, delivery messaging, and direct inquiry flow.', th: 'หน้าโปรโมตสินค้า mini soft cake พร้อมช่องทางติดต่อสั่งซื้อ' } as L, tech: ['HTML', 'CSS', 'JavaScript', 'Vite', 'Vercel'], url: 'https://softcake-baker.vercel.app/', gradientClass: 'project-gradient-3' },
  { id: '4', title: 'PhuketKeys.com', cat: { en: 'Real Estate Platform', th: 'แพลตฟอร์มอสังหาฯ' } as L, year: '2025', status: { en: 'Live platform', th: 'ใช้งานจริง' } as L, desc: { en: 'Property platform with listing search, account system, media management, and back-office for real-estate operations.', th: 'แพลตฟอร์มอสังหาริมทรัพย์ที่รองรับการค้นหา ระบบบัญชีผู้ใช้ และ back-office' } as L, tech: ['Next.js', 'TypeScript', 'Express', 'PostgreSQL', 'Cloudinary'], url: 'https://phuketkeys.com', gradientClass: 'project-gradient-4' },
  { id: '5', title: 'Bangkok WYNN Electrical', cat: { en: 'B2B / B2C Platform', th: 'ระบบสินค้า B2B/B2C' } as L, year: '2025', status: { en: 'Product platform', th: 'แพลตฟอร์มสินค้า' } as L, desc: { en: 'Product platform with filters, quote flow, admin tools, and technical document distribution.', th: 'แพลตฟอร์มสินค้าอุตสาหกรรมที่มีระบบกรอง ขอราคา แอดมิน และเอกสาร' } as L, tech: ['Next.js', 'TypeScript', 'Drizzle ORM', 'LibSQL', 'Tailwind'], gradientClass: 'project-gradient-5' },
  { id: '6', title: 'Langa Care', cat: { en: 'Healthcare Operations', th: 'ระบบสุขภาพ' } as L, year: '2025', status: { en: 'Internal system', th: 'ระบบภายใน' } as L, desc: { en: 'Internal screening and health-tracking system with dashboards, appointments, field support, and reporting.', th: 'ระบบคัดกรองและติดตามสุขภาพ พร้อม dashboard การนัดหมาย และรายงาน' } as L, tech: ['Node.js', 'Express', 'MySQL', 'Google Maps', 'SheetJS'], gradientClass: 'project-gradient-6' },
  { id: '7', title: 'Taily Pet Discovery Platform', cat: { en: 'Pet Lifestyle Platform', th: 'แพลตฟอร์มสัตว์เลี้ยง' } as L, year: '2026', status: { en: 'Active MVP build', th: 'กำลังพัฒนา MVP' } as L, desc: { en: 'Mobile-first pet lifestyle platform with place discovery, map search, member accounts, saved places, content modules, admin tools, and backend API foundations.', th: 'แพลตฟอร์มสัตว์เลี้ยงแบบ mobile-first มีระบบค้นหาสถานที่ แผนที่ บัญชีสมาชิก บันทึกรายการ โมดูลคอนเทนต์ เครื่องมือแอดมิน และโครงสร้าง API' } as L, tech: ['Next.js', 'React', 'TypeScript', 'Leaflet', 'Supabase', 'Vercel'], url: 'https://place-discovery-web.vercel.app/', gradientClass: 'project-gradient-7' },
  { id: '8', title: 'Self Discovery Workbook', cat: { en: 'Digital Product System', th: 'ระบบสินค้า Digital Product' } as L, year: '2026', status: { en: 'Launch package', th: 'ชุดส่งมอบสำหรับ launch' } as L, desc: { en: 'Digital workbook production and launch workflow covering guided content, bilingual editorial work, Canva handoff, landing page planning, referral rules, and customer support materials.', th: 'งานผลิต digital workbook และ workflow สำหรับเปิดขาย ครอบคลุม content, bilingual editorial, Canva handoff, landing page, referral rules และเอกสาร support ลูกค้า' } as L, tech: ['Content Ops', 'Canva', 'HTML', 'JavaScript', 'PDF QA', 'Launch Ops'], url: 'https://assetebook.closetgostudio.com/', gradientClass: 'project-gradient-8' },
];

export const services = [
  { n: '01', title: { en: 'Web Platforms', th: 'Web Platforms' } as L, tag: { en: 'Top performing', th: 'จุดเด่น' } as L, body: { en: 'I build modern marketing sites and product-facing websites that feel considered, load fast, and support real business goals.', th: 'ผมพัฒนาเว็บไซต์ที่ให้ความสำคัญกับความชัดเจน ความเร็ว และเป้าหมายธุรกิจจริง' } as L, tags: ['Next.js', 'TypeScript', 'Responsive', 'SEO', 'Vercel'] },
  { n: '02', title: { en: 'Product Systems', th: 'Product Systems' } as L, tag: { en: 'MVP to operations', th: 'จาก MVP สู่งานจริง' } as L, body: { en: 'From scope and flow design to admin logic and backend integration, I structure systems so teams can operate after launch.', th: 'ผมออกแบบระบบให้ทีมสามารถนำไปใช้งานจริงต่อได้หลังเปิดระบบ' } as L, tags: ['Admin workflows', 'REST API', 'Auth', 'MySQL', 'E2E'] },
  { n: '03', title: { en: 'UI/UX Systems', th: 'UI/UX Systems' } as L, tag: { en: 'User focused', th: 'เน้นผู้ใช้' } as L, body: { en: 'I turn messy requirements into cleaner interfaces, clearer journeys, and interaction patterns that reduce friction.', th: 'ผมแปลง requirement ซับซ้อนให้เป็นหน้าจอที่ชัดเจนและลดความสับสน' } as L, tags: ['Info hierarchy', 'Dashboard UX', 'Components', 'Forms', 'Polish'] },
];

export const contactLinks = [
  { label: { en: 'Email', th: 'อีเมล' } as L, value: 'lucky99.commit@gmail.com', href: 'mailto:lucky99.commit@gmail.com', icon: Mail },
  { label: { en: 'GitHub', th: 'GitHub' } as L, value: 'github.com/the-lucky-commit', href: 'https://github.com/the-lucky-commit', icon: Github },
  { label: { en: 'Line', th: 'Line' } as L, value: 'line.me/ti/p/~adaybank', href: 'https://line.me/ti/p/~adaybank', icon: MessageCircle },
  { label: { en: 'Portfolio', th: 'Portfolio' } as L, value: 'lucky-commit-portfolio.vercel.app', href: 'https://lucky-commit-portfolio.vercel.app/', icon: Globe },
];

export const navItems = [
  { href: '#hero', label: { en: 'Home', th: 'หน้าแรก' } as L },
  { href: '#about', label: { en: 'About', th: 'เกี่ยวกับ' } as L },
  { href: '#skills', label: { en: 'Services', th: 'บริการ' } as L },
  { href: '#projects', label: { en: 'Portfolio', th: 'ผลงาน' } as L },
  { href: '#contact', label: { en: 'Contact', th: 'ติดต่อ' } as L },
];

export const txt = {
  en: {
    heroSub: 'Creative Developer & Systems Builder',
    heroTag: 'High Performing Full-stack Developer',
    heroSub2: 'Full-stack Developer & Systems Builder, based in Chanthaburi, Thailand',
    heroCta: 'See selected work', heroCta2: 'Start a conversation',
    sEye: 'Services, Skills, Abilities', sTitle: 'What I do best?',
    sDesc: 'I build around actual business operations — with frontend clarity, backend structure, and a setup that stays useful after launch.',
    aEye: 'About Me', aTitle: 'Creative at the core', aSub: 'Developer. Builder. Problem-solver.',
    aBody: 'I work best where business goals, user flow, and implementation quality need to move together. That usually means translating messy requirements into clear screens, stronger admin workflows, and maintainable systems.',
    aNote: 'My role sits between product, UX, frontend, backend, and launch support — rather than only one layer.',
    aCta: 'Email me', aCta2: 'Open GitHub',
    s1: 'Production projects shipped', s2: 'Years experience', s3: 'End-to-end delivery',
    str1: 'Clearer information hierarchy and smoother user flow',
    str2: 'Admin tools designed around actual operations',
    str3: 'Frontend systems that are easier to maintain',
    pEye: 'Portfolio Projects', pTitle: 'Selected Work',
    pDesc: 'A focused selection showing how I handle interface quality, operations, and production delivery.',
    visit: 'Visit project', onReq: 'Available on request',
    cEye: 'Contact Information', cTitle: 'How can I help?',
    cBody: 'If the work above fits what you need, send me a note. Share the goal, a link, and when you want to start. I\'ll reply with the next step.',
    cCta: 'Email me', marquee: "Let's work together",
    footer: 'All rights reserved.',
    trusted: 'Trusted by clients across industries',
    tEye: 'Testimonials & Trust',
    tTitle: 'What they say',
    tDesc: 'Feedback from clients and partners I\'ve worked with on production systems and digital tools.',
  },
  th: {
    heroSub: 'Creative Developer & Systems Builder',
    heroTag: 'นักพัฒนาเว็บ Full-stack ที่เชี่ยวชาญ',
    heroSub2: 'Full-stack Developer & Systems Builder ประจำ จ.จันทบุรี ประเทศไทย',
    heroCta: 'ดูผลงาน', heroCta2: 'เริ่มพูดคุย',
    sEye: 'บริการ ทักษะ ความเชี่ยวชาญ', sTitle: 'สิ่งที่ผมทำได้ดีที่สุด?',
    sDesc: 'ผมออกแบบระบบตามการทำงานจริงของธุรกิจ ทั้ง UX โครงสร้างหลังบ้าน และความต่อเนื่อง',
    aEye: 'About Me', aTitle: 'คิดแบบ Creative', aSub: 'Developer. Builder. Problem-solver.',
    aBody: 'ผมทำงานได้ดีเมื่อเป้าหมายธุรกิจ ประสบการณ์ผู้ใช้ และคุณภาพเชิงเทคนิคเดินไปพร้อมกัน',
    aNote: 'บทบาทของผมอยู่กึ่งกลางระหว่าง product, UX, frontend, backend และการดูแลหลังเปิดระบบ',
    aCta: 'ส่งอีเมล', aCta2: 'เปิด GitHub',
    s1: 'โปรเจกต์ส่งมอบจริง', s2: 'ปีประสบการณ์', s3: 'ครบทุกขั้นตอน',
    str1: 'โครงสร้างข้อมูลชัดเจนและ user flow ใช้ง่าย',
    str2: 'เครื่องมือแอดมินออกแบบตามงานจริง',
    str3: 'frontend เรียบร้อย ดูแลง่าย ขยายต่อได้',
    pEye: 'Portfolio Projects', pTitle: 'ผลงานตัวอย่าง',
    pDesc: 'ชุดผลงานที่สะท้อนคุณภาพหน้าตา การใช้งานจริง และการส่งมอบ',
    visit: 'เปิดดูโปรเจกต์', onReq: 'ขอดูรายละเอียดได้',
    cEye: 'ข้อมูลการติดต่อ', cTitle: 'ผมช่วยอะไรได้บ้าง?',
    cBody: 'หากงานข้างต้นตรงกับที่คุณต้องการ ส่งข้อความมาได้เลย พร้อมบอกเป้าหมาย ลิงก์ และเวลาที่ต้องการเริ่ม',
    cCta: 'ส่งอีเมล', marquee: 'มาทำงานด้วยกัน',
    footer: 'สงวนลิขสิทธิ์',
    trusted: 'ได้รับความไว้วางใจจากลูกค้าหลากหลายอุตสาหกรรม',
    tEye: 'คำนิยมและความเชื่อมั่น',
    tTitle: 'เสียงจากผู้ที่เคยร่วมงาน',
    tDesc: 'ผลตอบรับจากลูกค้าและพาร์ทเนอร์ที่ได้ทำงานร่วมกันในโปรเจกต์ต่างๆ',
  },
} as const;

export const t = (v: L, locale: Locale) => v[locale];
