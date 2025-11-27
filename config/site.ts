import { type } from "os";

export const siteConfig = {
  name: "DYTOR",
  url: "https://dytor.app",



  description:
    "Timing Control for Every Stage, From conferences to theaters, broadcast studios to classrooms.",
  links: {
    x: "https://x.com/dytorapp",
    email: "mailto:dytor.app@gmail.com",
  },
  pricing: {
    pro: "https://launchui.lemonsqueezy.com/buy/b4798c68-c858-4c34-860b-069b5a0d6c4e",
    team: "https://launchui.lemonsqueezy.com/buy/130d8cfe-e123-464b-9f67-c74c5fedfb45",
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
