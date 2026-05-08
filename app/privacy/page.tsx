import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";

const lastUpdated = "November 26, 2025";
const contactEmail = "dytor.app@gmail.com";

const sections = [
  {
    title: "Overview",
    body: [
      "This Privacy Policy explains how Dytor collects, uses, and discloses information when you use the website, desktop app, and related services.",
      "By using Dytor, you agree to the collection and use of information described here. If you do not agree, you should stop using the service.",
    ],
  },
  {
    title: "Information We Collect",
    body: [
      "We may collect personal information you provide directly, including your email address, name, and account details when you sign in or contact us.",
      "We also collect usage and device information automatically, which can include IP address, browser type, operating system, page activity, session timing, and diagnostic data.",
    ],
    bullets: [
      "Account data such as email address, first name, and last name.",
      "Usage data such as page visits, timestamps, browser version, and device identifiers.",
      "Technical and diagnostic information sent by your browser or device while using the service.",
    ],
  },
  {
    title: "How We Use Information",
    bullets: [
      "To provide, operate, and maintain the service.",
      "To authenticate users and manage accounts.",
      "To respond to support requests and product inquiries.",
      "To analyze usage trends and improve product performance, reliability, and security.",
      "To send important service communications, including updates and security notices.",
      "To support lawful business operations such as audits, compliance, or corporate transactions.",
    ],
  },
  {
    title: "When We Share Information",
    body: [
      "We may share information with vendors and service providers that help us run the service, and with affiliates or business partners when needed to deliver product functionality.",
      "We may also disclose information if required by law, to protect users or the company, or as part of a merger, acquisition, financing, or asset sale.",
    ],
    bullets: [
      "With service providers that host, monitor, or support the product.",
      "With affiliates or partners operating under equivalent privacy obligations.",
      "With authorities or legal counterparties when disclosure is legally required or necessary to prevent abuse or harm.",
    ],
  },
  {
    title: "Retention and Security",
    body: [
      "We retain personal data only as long as necessary for the purposes described in this policy, including legal, operational, and security obligations.",
      "We use commercially reasonable measures to protect personal data, but no internet transmission or storage system can be guaranteed to be fully secure.",
    ],
  },
  {
    title: "International Transfers",
    body: [
      "Your information may be processed in jurisdictions outside your state or country. By using Dytor and submitting information, you consent to those transfers, subject to reasonable safeguards.",
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      "Dytor is not directed to children under 13, and we do not knowingly collect personal data from children under 13. If we learn that such data has been collected without required consent, we will remove it.",
    ],
  },
  {
    title: "External Services",
    body: [
      "Dytor may link to third-party sites and services. We do not control those external services and are not responsible for their privacy practices. You should review their policies directly.",
    ],
  },
  {
    title: "Policy Changes",
    body: [
      "We may update this Privacy Policy from time to time. Material changes will be reflected on this page and may also be communicated through the service or by email when appropriate.",
    ],
  },
  {
    title: "Contact Us",
    body: [
      "If you have questions about this Privacy Policy or your information, contact us at dytor.app@gmail.com.",
    ],
  },
] as const;

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read how Dytor collects, uses, stores, and protects personal information across the website and app.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="Privacy that fits a production tool"
      summary="Dytor uses account and diagnostic data to operate sign-in, sync devices, improve reliability, and support the product. This page summarizes what we collect, why we use it, and how to reach us about it."
      lastUpdated={lastUpdated}
      contactEmail={contactEmail}
      sections={sections}
    />
  );
}
