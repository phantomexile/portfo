"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { fetchSimpleIcons, SimpleIcon } from "react-icon-cloud";

// Tools configuration with Simple Icons slugs
const toolsConfig = [
    { name: "Figma", slug: "figma" },
    { name: "Notion", slug: "notion" },
    { name: "Supabase", slug: "supabase" },
    { name: "PostgreSQL", slug: "postgresql" },
    { name: "MySQL", slug: "mysql" },
    { name: "Git", slug: "git" },
    { name: "HTML", slug: "html5" },
    { name: "Vercel", slug: "vercel" },
    { name: "Python", slug: "python" },
    { name: "R", slug: "r" },
    { name: "Github", slug: "github" },
];

interface ToolIconProps {
    name: string;
    icon?: SimpleIcon;
    theme: string;
}

const ToolIcon = ({ name, icon, theme }: ToolIconProps) => {
    const iconColor = theme === "dark" ? "#ffffff" : (icon?.hex ? `#${icon.hex}` : "#333333");

    return (
        <div className="flex flex-col items-center justify-center gap-3 mx-8 transition-transform hover:scale-110 duration-300">
            <div
                className={cn(
                    "w-16 h-16 flex items-center justify-center rounded-xl",
                    "bg-gradient-to-br from-white/10 to-white/5",
                    "dark:from-white/10 dark:to-white/5",
                    "shadow-lg hover:shadow-xl transition-shadow duration-300"
                )}
            >
                {name === "Java" ? (
                    <svg viewBox="0 0 24 24" className="w-10 h-10" fill={iconColor}>
                        <path d="M17.3 11.8c-.3-.3-.7-.4-1.1-.4h-.1c.4-.6.6-1.2.6-1.9 0-1-.4-2-1.1-2.7-.7-.7-1.7-1.1-2.7-1.1h-3.7c-1 0-2 .4-2.7 1.1-.7.7-1.1 1.7-1.1 2.7 0 .7.2 1.3.6 1.9h-.1c-.4 0-.8.1-1.1.4-.3.3-.4.7-.4 1.1v1.8c0 .4.1.8.4 1.1.3.3.7.4 1.1.4h.1c-.4.6-.6 1.2-.6 1.9 0 1 .4 2 1.1 2.7.7.7 1.7 1.1 2.7 1.1h3.7c1 0 2-.4 2.7-1.1.7-.7 1.1-1.7 1.1-2.7 0-.7-.2-1.3-.6-1.9h.1c.4 0 .8-.1 1.1-.4.3-.3.4-.7.4-1.1v-1.8c0-.4-.1-.8-.4-1.1zm-8.8-4.1c.4-.4 1-.7 1.6-.7h3.7c.6 0 1.2.2 1.6.7.4.4.7 1 .7 1.6 0 .6-.2 1.2-.7 1.6-.4.4-1 .7-1.6.7h-3.7c-.6 0-1.2-.2-1.6-.7-.4-.4-.7-1-.7-1.6 0-.6.2-1.2.7-1.6zm7.2 10.6c-.4.4-1 .7-1.6.7h-3.7c-.6 0-1.2-.2-1.6-.7-.4-.4-.7-1-.7-1.6 0-.6.2-1.2.7-1.6.4-.4 1-.7 1.6-.7h3.7c.6 0 1.2.2 1.6.7.4.4.7 1 .7 1.6 0 .6-.2 1.2-.7 1.6z" />
                    </svg>
                ) : icon ? (
                    <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10"
                        fill={iconColor}
                    >
                        <title>{name}</title>
                        <path d={icon.path} />
                    </svg>
                ) : (
                    <span className="text-2xl font-bold text-primary">{name.charAt(0)}</span>
                )}
            </div>
            <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                {name}
            </span>
        </div>
    );
};

export function ToolsMarquee() {
    const [icons, setIcons] = useState<{ [key: string]: SimpleIcon }>({});
    const { theme } = useTheme();

    useEffect(() => {
        const slugs = toolsConfig.map((tool) => tool.slug);
        fetchSimpleIcons({ slugs }).then((data) => {
            setIcons(data.simpleIcons);
        });
    }, []);

    return (
        <div className="w-full py-12">
            <h2 className="text-center text-3xl font-semibold tracking-tight md:text-5xl opacity-80 mb-10">
                My Tools
            </h2>
            <div className="relative w-full overflow-hidden">

                <Marquee
                    pauseOnHover
                    className="[--duration:30s]"
                >
                    {toolsConfig.map((tool) => (
                        <ToolIcon
                            key={tool.slug}
                            name={tool.name}
                            icon={icons[tool.slug]}
                            theme={theme || "dark"}
                        />
                    ))}
                </Marquee>
            </div>
        </div>
    );
}
