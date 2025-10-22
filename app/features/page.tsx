import { FeaturesPage } from "@/components/blocks/features-page";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features - Dytor Pro Stage Timer Software | Professional Event Management Tools',
  description: 'Discover powerful Dytor Pro features: real-time timer sync, role-based access, multi-device support, event scheduling, message broadcasting, and professional display customization.',
  keywords: [
    'stage timer features',
    'event management features',
    'show control software features',
    'production timer capabilities',
    'stage manager software features',
    'event timer functionality',
    'conference management tools',
    'live event software features',
    'professional timer features',
    'stage control capabilities'
  ],
  openGraph: {
    title: 'Features - Dytor Pro Stage Timer Software',
    description: 'Discover powerful Dytor Pro features: real-time timer sync, role-based access, multi-device support, and professional display customization.',
    images: ['/assets/Dytor_logo_name.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Features - Dytor Pro Stage Timer Software',
    description: 'Discover powerful Dytor Pro features: real-time timer sync, role-based access, multi-device support.',
    images: ['/assets/Dytor_logo_name.png'],
  },
  alternates: {
    canonical: 'https://dytor.app/features',
  },
};

export default function Features() {
  return <FeaturesPage />;
}
