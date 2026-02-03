"use client"

import Link from 'next/link'
import { email, socialLinks } from '@/config/infoConfig'
import { CustomIcon } from '@/components/shared/CustomIcon'


export default function SocialLinks() {
  return (
    <div>
      <div className="mt-6 flex flex-row flex-wrap justify-center md:justify-start items-center gap-1">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.ariaLabel ?? `Follow on ${link.name}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
          >
            <CustomIcon name={link.icon} />
            <span className="sr-only">{link.name}</span>
          </Link>
        ))}
        <Link
          href={`mailto:${email}`}
          aria-label="Email"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
        >
          <CustomIcon name="email" />
        </Link>
      </div>
    </div>


  )
}

