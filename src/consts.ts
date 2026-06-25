// Global site configuration. Edit these to make the site yours.

export const SITE = {
  title: 'liuxi93ing',
  // Short tagline shown in the header prompt and meta description fallback.
  tagline: 'notes & projects from a builder',
  description:
    'Geek notes on software, trading systems, and side projects — plus live demos.',
  author: 'liuxi93ing',
  // Update to your deployed URL; also set `site` in astro.config.mjs.
  url: 'https://blog.example.com',
  lang: 'en',
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'home' },
  { href: '/blog', label: 'blog' },
  { href: '/projects', label: 'projects' },
  { href: '/about', label: 'about' },
] as const;

export const SOCIAL = {
  github: 'https://github.com/liuxi93ing',
} as const;
