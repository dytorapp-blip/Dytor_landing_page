"use client";
import React, { useState } from "react";

import CountdownModalTrigger from "@/components/ui/countdown-modal-trigger";
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
        <div className="flex items-center">
          <NavbarLogo />
        </div>

        <NavItems items={navItems} onItemClick={() => setIsOpen(false)} />

        <div className="hidden items-center gap-4 lg:flex">
          <a href="/signin" className="text-foreground/80 hover:text-foreground">
            {/* Sign In */}
          </a>
          <CountdownModalTrigger releaseDate="2025-11-25T12:00:00">
            <NavbarButton variant="gradient" aria-label="Download the application">
              Download
            </NavbarButton>
          </CountdownModalTrigger>
        </div>
      </NavBody>

      {/* Mobile */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <div className="flex items-center gap-3">
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
              <CountdownModalTrigger releaseDate="2025-11-25T12:00:00">
                <NavbarButton variant="gradient" aria-label="Download the application">
                  Download
                </NavbarButton>
              </CountdownModalTrigger>
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
