"use client";
import React, { useState } from "react";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar";

const navItems = [
  { name: "Use Cases", link: "/use-cases" },
  { name: "Changelog", link: "/changelog" },
  { name: "Contact", link: "/contact" },
];

export default function HeaderResizable() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar>
      <NavBody>
        <div className="flex items-center">
          <NavbarLogo />
        </div>

        <NavItems
          items={navItems}
          onItemClick={() => setIsOpen(false)}
          className="lg:gap-1"
        />

        <div className="hidden items-center gap-4 lg:flex">
          <SignedOut>
            <SignInButton>
              <button className="text-foreground/80 hover:text-foreground">
                Sign in
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton userProfileMode="navigation" userProfileUrl="/user-profile" />
          </SignedIn>
          <NavbarButton href="/download" variant="gradient">
            Download
          </NavbarButton>
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
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex flex-col items-center gap-2 pt-4">
            <SignedOut>
              <SignInButton>
                <button className="text-neutral-600 dark:text-neutral-300">
                  Sign in
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton
                userProfileMode="navigation"
                userProfileUrl="/user-profile"
              />
            </SignedIn>
          </div>
          <div className="w-full pt-4">
            <div className="flex w-full justify-center">
              <NavbarButton href="/download" variant="gradient">
                Download
              </NavbarButton>
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
