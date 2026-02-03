
export type ChangelogItemType = {
    date: string
    content: Array<{
        title: string
        description: string
    }>
}

export const changelogList: Array<ChangelogItemType> = [
    {
        date: '2024-01-01',
        content: [
            {
                title: 'Project Initialized',
                description: 'The project was initialized with the core features.'
            }
        ]
    }
]

export const changelogHeadLine = 'Changelog'
export const changelogIntro = 'Track my journey and updates.'
