
export type SkillItemType = {
    name: string
    icon: string
    items: Array<{
        name: string
        icon: string
    }>
}

export const skillsRaw: Array<SkillItemType> = [
    {
        name: 'Skills',
        icon: 'briefcase',
        items: [
            { name: 'Business Analysis', icon: 'chart-line' },
            { name: 'Documentation', icon: 'file-text' },
            { name: 'Data and Analytics', icon: 'database' },
            { name: 'Project Management', icon: 'kanban' },
            { name: 'System Integration', icon: 'git-merge' }
        ]
    },
    {
        name: 'Tools',
        icon: 'wrench',
        items: [
            { name: 'Figma', icon: 'figma' },
            { name: 'Notion', icon: 'notion' },
            { name: 'Lucidchart', icon: 'sitemap' }
        ]
    }
]
