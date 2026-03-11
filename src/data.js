// ── All portfolio content lives here.
// Edit this file to update your site content.

export const emails = [
  {
    id: 'about',
    colorClass: 'e1',
    sender: 'Brad Carter',
    date: 'NOW',
    subject: 'RE: Who is this guy anyway?',
    preview: '15 years. 40+ products. Still loves the craft...',
  },
  {
    id: 'work',
    colorClass: 'e2',
    sender: 'Brad Carter',
    date: '2d ago',
    subject: 'Selected Work (3 attachments)',
    preview: 'AllyIQ, Health Insights, Fast Forward AI...',
  },
  {
    id: 'contact',
    colorClass: 'e3',
    sender: 'Brad Carter',
    date: '3d ago',
    subject: "Let's build something good.",
    preview: 'Open to Senior Product Designer roles in DFW...',
  },
  {
    id: 'resume',
    colorClass: 'e4',
    sender: 'Brad Carter',
    date: '1w ago',
    subject: '📎 Resume.pdf — here\'s the full story',
    preview: 'Slalom · Capgemini · 15 years of the good stuff...',
  },
]

export const sidebarMailboxes = [
  { icon: '✉', label: 'Inbox', badge: 4 },
  { icon: '★', label: 'Flagged' },
  { icon: '↗', label: 'Sent' },
  { icon: '✎', label: 'Drafts' },
  { icon: '⋯', label: 'Junk' },
  { icon: '□', label: 'Trash' },
]

export const sidebarFolders = [
  { icon: '◈', label: 'Portfolio' },
  { icon: '◈', label: 'Job Search' },
  { icon: '◈', label: 'Archive' },
]

export const skills = [
  { name: 'Product Design',       level: 5 },
  { name: 'UX Research',          level: 4 },
  { name: 'Design Systems',       level: 5 },
  { name: 'HTML / CSS / JS',      level: 3 },
  { name: 'Figma',                level: 5 },
  { name: 'Workshop Facilitation',level: 4 },
]

export const caseStudies = [
  {
    num: '01',
    tags: ['Healthcare', 'Design Lead', 'Design Systems'],
    title: 'AllyIQ — Healthcare Inventory Platform',
    desc: 'Led a team of 3 designers to ship a healthcare inventory platform for retina practices. Replaced disconnected tools with a single platform providing real-time visibility, dispensing risk flags, and closed billing gaps.',
    link: '#',
  },
  {
    num: '02',
    tags: ['Healthcare', 'Mobile', 'Patient UX'],
    title: 'Health Insights — Lab Results App',
    desc: 'Designed a mobile lab results experience that transformed how patients understand their medical data. Plain-language explanations, trend visualization, and clear information hierarchy.',
    link: '#',
  },
  {
    num: '03',
    tags: ['AI / ML', 'Methodology'],
    title: 'Fast Forward AI — Design Methodology',
    desc: "Co-developed Slalom's AI-accelerated design methodology — a repeatable framework that cuts discovery-to-prototype time in half while keeping humans at the center.",
    link: '#',
  },
]
