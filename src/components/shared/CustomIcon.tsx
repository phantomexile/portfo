'use client'

import {
  Bank,
  GithubLogo,
  XLogo,
  InstagramLogo,
  Envelope,
  GraduationCap,
  Coffee,
  Butterfly,
  Pill,
  WechatLogo,
  DiscordLogo,
  Laptop,
  FacebookLogo,
  Briefcase,
  ChartLine,
  FileText,
  Database,
  Kanban,
  GitMerge,
  Wrench,
  FigmaLogo,
  Notion,
  Sitemap
} from '@phosphor-icons/react'

export function CustomIcon({ name, size = 20 }: { name: string; size?: number }) {
  switch (name) {
    case 'bank':
      return <Bank size={size} weight="duotone" />;
    case 'github':
      return <GithubLogo size={size} weight="duotone" />;
    case 'x':
      return <XLogo size={size} weight="duotone" />;
    case 'instagram':
      return <InstagramLogo size={size} weight="duotone" />;
    case "bsky":
      return <Butterfly size={size} weight="duotone" />
    case 'email':
      return <Envelope size={size} weight="duotone" />;
    case "college":
      return <GraduationCap size={size} weight="duotone" />;
    case "coffee":
      return <Coffee size={size} weight="duotone" />;
    case "pill":
      return <Pill size={size} weight="duotone" />;
    case "wechat":
      return <WechatLogo size={size} weight="duotone" />;
    case "discord":
      return <DiscordLogo size={size} weight="duotone" />;
    case "freelance":
      return <Laptop size={size} weight="duotone" />;
    case "facebook":
      return <FacebookLogo size={size} weight="duotone" />;
    case "briefcase":
      return <Briefcase size={size} weight="duotone" />;
    case "chart-line":
      return <ChartLine size={size} weight="duotone" />;
    case "file-text":
      return <FileText size={size} weight="duotone" />;
    case "database":
      return <Database size={size} weight="duotone" />;
    case "kanban":
      return <Kanban size={size} weight="duotone" />;
    case "git-merge":
      return <GitMerge size={size} weight="duotone" />;
    case "wrench":
      return <Wrench size={size} weight="duotone" />;
    case "figma":
      return <FigmaLogo size={size} weight="duotone" />;
    case "notion":
      return <Notion size={size} weight="duotone" />;
    case "sitemap":
      return <Sitemap size={size} weight="duotone" />;
    default:
      return null
  }
}