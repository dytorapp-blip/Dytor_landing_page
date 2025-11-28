"use client";
import React, { useState } from "react";

import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavBody,
  NavItems,
} from "@/components/ui/resizable-navbar";

const navItems = [
  { name: "Use Cases", link: "/use-cases", "aria-label": "View our use cases" },
  { name: "Contact", link: "/contact", "aria-label": "Contact us" },
];

export default function HeaderResizable() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar>
      <NavBody>
          <div className="flex items-center gap-2">
          <NavbarLogo />
          <div className="ml-4 hidden lg:block">
            {/* Optional extras like date, buttons, or status can go here */}
          </div>
        </div>

        <NavItems items={navItems} onItemClick={() => setIsOpen(false)} />

        <div className="hidden items-center gap-4 lg:flex">
          <a href="https://dytor.app/login?redirectTo=dytor://auth" className="text-foreground/80 hover:text-foreground">
            Sign In
          </a>
<NavbarButton variant="gradient" href="/download" aria-label="Download the application">
    Download
</NavbarButton>
        </div>
      </NavBody>

      {/* Mobile */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <div className="flex items-center gap-3">
            {/* Mobile-only extras */}
            <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </div>
        </MobileNavHeader>

        <MobileNavMenu isOpen={isOpen}>
          <div className="flex flex-col space-y-2 items-center">
            {navItems.map((item, idx) => (
              <a
                key={`link-${idx}`}
                href={item.link}
                className="px-4 py-2 text-neutral-600 dark:text-neutral-300"
                onClick={() => setIsOpen(false)}
                aria-label={item['aria-label']}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="w-full pt-4">
            <div className="flex w-full justify-center">
                <NavbarButton variant="gradient" href="/download" aria-label="Download the application">
                    Download
                </NavbarButton>
            </div>          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
