import Glow from "@/components/ui/glow";
import { Button } from "@/components/ui/button";
import {
  IconBrandApple,
  IconBrandWindows,
  IconBrandLinux,
  IconArrowUpRight,
} from "@tabler/icons-react";

const downloads = [
  {
    name: "macOS",
    description: "Apple silicon and Intel builds for macOS 12+.",
    href: "#",
    icon: IconBrandApple,
    badge: "Universal",
  },
  {
    name: "Windows",
    description: "Windows 10/11 installer with auto-updates.",
    href: "#",
    icon: IconBrandWindows,
    badge: "x64",
  },
  {
    name: "Linux",
    description: "AppImage and .deb packages for modern distros.",
    href: "#",
    icon: IconBrandLinux,
    badge: "AppImage",
  },
];

export default function DownloadPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <div className="relative overflow-hidden px-6 pb-16 pt-24 sm:pt-28">
        <Glow variant="top" className="pointer-events-none opacity-70" />

        <div className="relative mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-foreground">
              Download DYTOR
            </p>
            <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
              Choose your platform
            </h1>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Sign in once, then grab the installer that matches your production
              stack.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {downloads.map((item) => (
              <div
                key={item.name}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card/70 p-6 shadow-lg backdrop-blur"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand-foreground">
                      <item.icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                      <p className="text-xs text-muted-foreground">
                        {item.badge}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  {item.description}
                </p>
                <div className="mt-6">
                  <Button asChild variant="glow" className="w-full">
                    <a href={item.href}>
                      Download {item.name}
                      <IconArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center text-xs text-muted-foreground">
            Need a different build? Contact us and we will get you a custom
            package.
          </div>
        </div>
      </div>
    </main>
  );
}
