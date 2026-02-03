// projects
export const projectHeadLine = "What I've done and what I'm doing."
export const projectIntro = "I've worked on a variety of projects, here are some of my favorites."

export type ProjectItemType = {
  name: string
  description: string
  link: { href: string, label: string }
  date?: string
  logo?: string,
  category?: string[],
  tags?: string[],
  image?: string,
  techStack?: string[],
  gitStars?: number,
  gitForks?: number
}

// projects 
export const projects: Array<ProjectItemType> = [
  {
    name: 'Veritas',
    description:
      'A hospital appointment booking and management system.',
    link: { href: 'github.com/LuongHoa123/ISP392_Group5', label: 'Veritas' },
    category: ['Website'],
    techStack: ['Bootstrap', 'Java', 'JavaScript', 'MySQL'],
    tags: ['Website', 'Hospital'],
    logo: '/images/icon/veritas.png',
  },
  {
    name: 'Coffee Supply Chain Management System',
    description:
      'A coffee supply chain management system.',
    link: { href: 'github.com/phantomexile/Coffee-Supply', label: 'Coffee Supply Chain Management System' },
    category: ['Website'],
    techStack: ['Java', 'JavaScript', 'PostgreSQL', 'Supabase'],
    tags: ['Website', 'Coffee'],
    logo: '/images/icon/coffee.jpg',
  },
  {
    name: 'Veritas RDS Documentation',
    description:
      'Showcase of my Veritas RDS documentation.',
    link: { href: 'https://docs.google.com/document/d/1-Xx5W0gYyxpL7Oa1-CcZfPhyyr3Alfci9dWkKiB57Eg/edit?usp=sharing', label: 'Veritas RDS Documentation' },
    category: ['Document'],
    techStack: ['Markdown'],
    tags: ['Document'],
    logo: '/images/icon/google-docs.png',
  },
  {
    name: 'CoffeeChain SRS Documentation',
    description:
      'Showcase of my CoffeeChain SRS documentation.',
    link: { href: 'https://docs.google.com/document/d/1GiepM_LvBMKIOFF7Y0dOpqvKU-i6E9uNq87321Knsf4/edit?usp=sharing', label: 'CoffeeChain SRS Documentation' },
    category: ['Document'],
    techStack: ['Markdown'],
    tags: ['Document'],
    logo: '/images/icon/google-docs.png',
  },
  {
    name: 'CoffeeChain SDS Documentation',
    description:
      'Showcase of my CoffeeChain SDS documentation.',
    link: { href: 'https://docs.google.com/document/d/1l87DAsUbP2qSY-75wPjVOSPro1GJaxhxrbLOyZ9PwgM/edit?usp=sharing', label: 'CoffeeChain SDS Documentation' },
    category: ['Document'],
    techStack: ['Markdown'],
    tags: ['Document'],
    logo: '/images/icon/google-docs.png',
  },
]

export const githubProjects: Array<ProjectItemType> = [
  {
    name: 'Devtoolset',
    description: 'Open-source & database-free developer tools navigator / 开源无数据库配置的开发者工具导航站',
    link: { href: 'github.com/iAmCorey/devtoolset', label: 'Devtoolset' },
    gitStars: 203,
    gitForks: 67
  },
  {
    name: 'Corey Chiu Portfolio Template',
    description:
      'portfolio template by corey chiu',
    link: { href: 'github.com/iAmCorey/coreychiu-portfolio-template', label: 'Corey Chiu Portfolio Template' },
    gitStars: 229,
    gitForks: 30
  },
  {
    name: 'Chrome Extension Plasmo Template',
    description:
      'A chrome extension template using plasmo, tailwind css, shadcn/ui',
    link: { href: 'github.com/iAmCorey/chrome-extension-plasmo-template', label: 'Chrome Extension Plasmo Template' },
    gitStars: 54,
    gitForks: 10
  },
  {
    name: 'Awesome Indie Hacker Tools',
    description:
      '独立开发/出海开发相关技术栈及工具收录 / Find the best tools for indie hackers here',
    link: { href: 'github.com/iAmCorey/awesome-indie-hacker-tools', label: 'Awesome Indie Hacker Tools' },
    gitStars: 815,
    gitForks: 69
  },
  {
    name: 'Awesome AI Directory',
    description:
      'AI资源工具导航站收录 / Find all the best AI directories',
    link: { href: 'github.com/iAmCorey/awesome-ai-directory', label: 'Awesome AI Directory' },
    gitStars: 40,
    gitForks: 7
  },
  {
    name: 'Producthunt Daily Bot',
    description:
      'A bot getting product hunt daily top products',
    link: { href: 'github.com/iAmCorey/producthunt-daily-bot', label: 'Producthunt Daily Bot' },
    gitStars: 3,
    gitForks: 3
  },
  {
    name: 'Cantonese Echoes',
    description:
      'Cantonese Echoes / 粵語殘片',
    link: { href: 'github.com/iAmCorey/Cantonese-Echoes', label: 'Cantonese Echoes' },
    gitStars: 1
  },
]
