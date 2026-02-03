
export type FriendItemType = {
    name: string
    description: string
    link: { href: string, label: string }
    logo?: string
}

export const friends: Array<FriendItemType> = []

export const friendsHeadLine = 'Friends'
export const friendsIntro = 'Meet my friends and collaborators.'
