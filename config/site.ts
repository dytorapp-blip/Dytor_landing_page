export const siteConfig = {
  name: "DYTOR",
  url: "https://dytor.app",
  getStartedUrl: "https://dytor.app/download",
  ogImage: "/Dytor_icon_dark_mode.png",
  description:
    "DYTOR's Landing page built with React, Shadcn/ui and Tailwind for media teams across the world.",
  links: {
    x: "https://x.com/dytorapp",
    email: "mailto:dytor.app@gmail.com",
  },
  pricing: {
    pro: "https://dytor.app/download",
    team: "https://dytor.app/download",
  },
  stats: {
    figma: 6124,
    github: 1553,
    cli: 13228,
    total: "20.9k+",
    updated: "28 Oct 2025",
    sections: 72,
    illustrations: 23,
    animations: 15,
    appTemplates: 2,
    websiteTemplates: 5,
  },
};

export type SiteConfig = typeof siteConfig;
