import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";

const lastUpdated = "November 26, 2025";
const contactEmail = "dytor.app@gmail.com";

const sections = [
  {
    title: "Acceptance of Terms",
    body: [
      "These Terms of Service govern your use of the Dytor website, desktop application, and related services.",
      "By accessing or using Dytor, you agree to be bound by these terms. If you do not agree, you may not use the service.",
    ],
  },
  {
    title: "Accounts",
    body: [
      "When you create or use an account with Dytor, you must provide accurate, current, and complete information.",
      "You are responsible for safeguarding your credentials and for activity that occurs under your account. Notify us promptly if you suspect unauthorized access or misuse.",
    ],
    bullets: [
      "Do not impersonate another person or entity.",
      "Do not use a name that infringes another party's rights.",
      "Do not use offensive, vulgar, or unlawful account identifiers.",
    ],
  },
  {
    title: "Acceptable Use",
    bullets: [
      "Use Dytor only in compliance with applicable law.",
      "Do not attempt to interfere with, disrupt, or reverse engineer the service except where permitted by law.",
      "Do not misuse the service to harm other users, compromise systems, or transmit unlawful content.",
      "Do not bypass authentication, access controls, or service limits.",
    ],
  },
  {
    title: "Third-Party Services",
    body: [
      "Dytor may integrate with or link to third-party services such as identity providers, hosting platforms, analytics tools, or external websites.",
      "We do not control those third-party services and are not responsible for their content, policies, or availability.",
    ],
  },
  {
    title: "Termination",
    body: [
      "We may suspend or terminate access to the service at any time if you breach these terms or if continued access creates legal, security, or operational risk.",
      "Upon termination, your right to use Dytor ends immediately. You may stop using the service at any time.",
    ],
  },
  {
    title: "Disclaimers",
    body: [
      "Dytor is provided on an as available and as is basis. We work to keep the service reliable, but we do not guarantee uninterrupted availability, error-free operation, or fitness for a particular production workflow.",
    ],
  },
  {
    title: "Governing Law",
    body: [
      "These terms are governed by the laws of the United States, without regard to conflict of law principles.",
      "If any provision is found invalid or unenforceable, the remainder of the terms will continue in effect.",
    ],
  },
  {
    title: "Changes to These Terms",
    body: [
      "We may revise these terms from time to time. If a change is material, we will make reasonable efforts to provide notice before it takes effect. Continued use of Dytor after changes become effective means you accept the revised terms.",
    ],
  },
  {
    title: "Contact Us",
    body: [
      "Questions about these Terms of Service can be sent to dytor.app@gmail.com.",
    ],
  },
] as const;

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review the terms that govern access to and use of the Dytor website, app, and related services.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms of Service"
      title="Rules for using Dytor"
      summary="These terms cover account use, acceptable behavior, third-party dependencies, service termination, and the legal framework that applies when you use Dytor."
      lastUpdated={lastUpdated}
      contactEmail={contactEmail}
      sections={sections}
    />
  );
}
