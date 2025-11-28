import "@/app/globals.css";

import type { Metadata } from "next";

import { PHProvider } from "@/app/providers";
import { ThemeProvider } from "@/components/contexts/theme-provider";
import Footer from "@/components/sections/footer/default";
import NavbarDemo from "@/components/sections/navbar/default";
import { LayoutLines } from "@/components/ui/layout-lines";
import { inter } from "@/lib/fonts";
import { Toaster } from "react-hot-toast";

import { siteConfig } from "../config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "stagetimer.io",
    "Timer",
    "Stage Timer",
    "Event app",
    "Media app",
    "Dytor",
    "Dytor Timer",
  ],
  authors: [
    {

      name: "Nnadi Joshua",
      url: "https://github.com/Nnadijoshuac",
    },
    {
      name: "Godspower Ojini",
      url: "https://github.com/Gpcode233",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,

  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,

    creator: "@NnadiJoshuac",
  },
  icons: {
    icon: "/Dytor_icon_dark_mode.png",
    apple: "/Dytor_icon_dark_mode.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ colorScheme: "dark" }} className="dark">
      <PHProvider>
        <body className={`${inter.className} bg-background antialiased`}>
          <ThemeProvider>
            <Toaster />
            <LayoutLines />
            <NavbarDemo />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </PHProvider>
    </html>
  );
}
