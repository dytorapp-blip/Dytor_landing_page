import { AboutSection } from "@/components/blocks/about-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About DYTOR — The Future of Show Control',
  description: 'Learn about DYTOR\'s mission to revolutionize stage timing and show control with cutting-edge technology and professional-grade precision.',
  openGraph: {
    title: 'About DYTOR — The Future of Show Control',
    description: 'Learn about DYTOR\'s mission to revolutionize stage timing and show control with cutting-edge technology and professional-grade precision.',
    images: ['/assets/Dytor_logo_name.png']
  }
};

export default function AboutPage() {
  return <AboutSection />;
}
