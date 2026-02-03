export * from './projects'
export * from './friends'
export * from './changelog'
export * from './education'
export * from './career'
export * from './activity'
export * from './skills'


// personal info
export const name = 'Tuấn'
export const headline = 'Business Analyst, Tester, and Software Engineer.'
export const introduction = 'I’m Tuấn, a Business Analyst based in Hà Nội, Vietnam. I like analyzing, testing, and finding the most optimal solutions to problems.'
export const email = 'cyrex76@gmail.com'
export const githubUsername = 'phantomexile'

// about page
export const aboutMeHeadline = "I'm Tuấn, a Business Analyst based in Hà Nội, Vietnam."
export const aboutParagraphs = [
  "I love analyzing and testing. I learned analyzing and testing when I in university. I wrote my first program in Python when I was 16.",
  "I have a lot of hobbies, such as gaming, gym, watching movies, music and so on.",
  "I'm still studying my major Information System in FPT University. I'm looking for a part-time job as a Business Analyst or Tester in Hà Nội, Vietnam."
]


// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro = "I've written something about AI, programming and life."


// social links
export type SocialLinkType = {
  name: string,
  ariaLabel?: string,
  icon: string,
  href: string,
  external?: boolean
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'X',
    icon: 'x',
    href: 'https://x.com/Nitrozys',
    external: true
  },
  {
    name: 'Github',
    icon: 'github',
    href: 'https://github.com/phantomexile',
    external: true
  },
  {
    name: 'Discord',
    icon: 'discord',
    href: 'https://discordpp.com/users/364364825939279883',
    external: true
  },
  {
    name: 'Facebook',
    icon: 'facebook',
    href: 'https://www.facebook.com/minh.tuan.131255/',
    external: true
  },
  {
    name: 'Instagram',
    icon: 'instagram',
    href: 'https://www.instagram.com/21exile/',
    external: true
  },
]

// https://simpleicons.org/
export const techIcons = [
  "typescript",
  "javascript",
  "supabase",
  "cloudflare",
  "java",
  "python",
  "mysql",
  "postgresql",
  "cursor",
  "vercel",
  "git",
  "github",
  "visualstudiocode",
  "anaconda",
  "apple",
  "gitlab",
  "android",
  "facebook",
  "instagram",
  "tiktok",
  "youtube",
];



