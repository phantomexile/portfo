'use client'

import { githubUsername } from '@/config/infoConfig'

export default function GitHubSnake() {
  return (
    <div className="w-full overflow-hidden">
      <div className='dark:hidden'>
        <img
          src={`https://raw.githubusercontent.com/${githubUsername}/${githubUsername}/output/github-contribution-grid-snake.svg`}
          alt="github-contribution"
          className="w-full" />
      </div>
      <div className='hidden dark:block'>
        <img
          src={`https://raw.githubusercontent.com/${githubUsername}/${githubUsername}/output/github-contribution-grid-snake-dark.svg`}
          alt="github-contribution"
          className="w-full" />
      </div>
    </div>
  )
}