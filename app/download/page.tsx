import Glow from "@/components/ui/glow";
import { Button } from "@/components/ui/button";
import { IconArrowUpRight } from "@tabler/icons-react";

const downloads = [
  {
    name: "macOS",
    description: "Apple silicon and Intel builds for macOS 12+.",
    href: "#",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 640"
        className="h-6 w-6"
      >
        <path
          fill="#5eb6ff"
          d="M447.1 332.7C446.9 296 463.5 268.3 497.1 247.9C478.3 221 449.9 206.2 412.4 203.3C376.9 200.5 338.1 224 323.9 224C308.9 224 274.5 204.3 247.5 204.3C191.7 205.2 132.4 248.8 132.4 337.5C132.4 363.7 137.2 390.8 146.8 418.7C159.6 455.4 205.8 545.4 254 543.9C279.2 543.3 297 526 329.8 526C361.6 526 378.1 543.9 406.2 543.9C454.8 543.2 496.6 461.4 508.8 424.6C443.6 393.9 447.1 334.6 447.1 332.7zM390.5 168.5C417.8 136.1 415.3 106.6 414.5 96C390.4 97.4 362.5 112.4 346.6 130.9C329.1 150.7 318.8 175.2 321 202.8C347.1 204.8 370.9 191.4 390.5 168.5z"
        />
      </svg>
    ),
    badge: "Universal",
  },
  {
    name: "Windows",
    description: "Windows 10/11 installer with auto-updates.",
    href: "#",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 640"
        className="h-6 w-6"
      >
        <path
          fill="#5eb6ff"
          d="M96 157.7L279.6 132.4L279.6 309.8L96 309.8L96 157.7zM96 482.3L279.6 507.6L279.6 332.4L96 332.4L96 482.3zM299.8 510.3L544 544L544 332.4L299.8 332.4L299.8 510.3zM299.8 129.7L299.8 309.8L544 309.8L544 96L299.8 129.7z"
        />
      </svg>
    ),
    badge: "x64",
  },
  {
    name: "Linux",
    description: "AppImage and .deb packages for modern distros.",
    href: "#",
   badge: "AppImage",
 },
];

export default function DownloadPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <div className="relative overflow-hidden px-6 pb-16 pt-12 sm:pt-16">
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
                className="group relative min-h-[260px] overflow-hidden rounded-2xl border border-border/40 bg-card/70 p-6 shadow-lg backdrop-blur"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand-foreground">
                      {item.icon}
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
