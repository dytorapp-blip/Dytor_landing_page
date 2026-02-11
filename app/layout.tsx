import "./globals.css";

import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

import { ThemeProvider } from "@/components/contexts/theme-provider";
import { inter } from "@/lib/fonts";
import NavbarDemo from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import { LayoutLines } from "@/components/ui/layout-lines";

import { siteConfig } from "../config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.getStartedUrl),
  description: siteConfig.description,
  keywords: [
    "Stage Synchronization",
    "Timer",
    "Timing Control",
    "Stagetimer",
    "DYTOR",
    "Media Production Tools",
    "Broadcast Synchronization",
  ],
  authors: [
    {
      name: "Joshua Nnadi & Godspower Ojini",
      url: "https://godspowerojini.vercel.app",
    },
  ],
  creator: "Joshua Nnadi & Godspower Ojini",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.getStartedUrl,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@Godspowerojini",
  },
  icons: {
    icon: "/Dytor_icon.ico",
    apple: "/Dytor_icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "var(--brand)",
          colorText: "var(--foreground)",
          colorBackground: "var(--background)",
          colorInputBackground: "var(--background)",
          colorInputText: "var(--foreground)",
          colorNeutral: "var(--muted-foreground)",
          fontFamily: "var(--font-inter)",
          borderRadius: "var(--radius)",
        },
        elements: {
          card: "bg-card text-card-foreground border border-border shadow-xl",
          headerTitle: "text-foreground",
          headerSubtitle: "text-muted-foreground",
          socialButtonsBlockButton:
            "border border-border bg-transparent hover:bg-accent text-foreground",
          formButtonPrimary:
            "bg-brand text-brand-foreground hover:brightness-110",
          formFieldInput:
            "bg-background text-foreground border border-border focus:ring-2 focus:ring-ring",
          footerActionLink: "text-brand-foreground hover:text-brand",
          userButtonPopoverCard:
            "bg-card text-card-foreground border border-border shadow-xl",
          userButtonPopoverActionButton:
            "hover:bg-accent text-foreground",
        },
      }}
    >
      <html lang="en" style={{ colorScheme: "dark" }} className="dark">
        <body className={`${inter.className} bg-background antialiased`}>
          <ThemeProvider>
            <LayoutLines className="z-30" />
            <NavbarDemo />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
