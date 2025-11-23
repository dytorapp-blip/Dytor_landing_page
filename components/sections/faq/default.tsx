import Link from "next/link";
import { Plus } from "lucide-react";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Section } from "../../ui/section";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
  value?: string;
}

interface FAQProps {
  title?: string;
  items?: FAQItemProps[] | false;
  className?: string;
}

export default function FAQ({
  title = "Frequently Asked Questions",
  items = [
    {
      question: "Can DYTOR handle my specific industry needs?",
      answer: "DYTOR is built for any environment where timing matters. Conference organizers use it for multi-track events, theater directors rely on it for cue precision, broadcast producers trust it for live TV, educators leverage it for structured presentations, and corporate trainers coordinate multi-location sessions. If you need multiple people synchronized around timing, DYTOR fits your workflow.",
    },
    {
      question: "Can DYTOR handle multiple events or sessions in one day?",
      answer: "Absolutely. The schedule queue lets you line up unlimited events with drag-and-drop ease. Auto-fill controls speed up setup, and the system tracks planned versus actual timing for every session. Whether you're running a single-day conference or a week-long production, DYTOR scales to your calendar.",
    },
    {
      question: "How do remote team members connect during an event?",
      answer: "Team members scan a time-limited QR code to join with their assigned role—admin, queue manager, speaker, or viewer. Each role sees only what they need: speakers get their countdown, queue managers control the flow, and admins have full access. No passwords to remember, no complicated logins.",
    },
    {
      question: "How does DYTOR help with post-event analysis?",
      answer: "DYTOR automatically records every session with detailed logs showing planned versus actual timing, message history, and connection activity. Export comprehensive reports as PDFs to review what worked, identify bottlenecks, and improve future events. The analytics give you concrete data for debriefs and planning meetings.",
    },
    {
      question: "Can I customize what appears on stage displays?",
      answer: "Yes. Choose solid colors, upload images, or use video backgrounds with adjustable opacity. Timer size, event titles, and message overlays are all customizable. Set up different looks for different events, or keep a consistent brand throughout your production.",
    },
    {
      question: "Does DYTOR work with existing AV equipment?",
      answer: "DYTOR runs in any modern browser, so it displays on any screen—projectors, confidence monitors, LED walls, or tablets. No special hardware required. Simply open the display URL on your target screen and DYTOR handles the rest.",
    },
  ],
  className,
}: FAQProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <Accordion
            type="single"
            collapsible
            className="flex w-full max-w-[800px] flex-col gap-4"
          >
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={item.value || `item-${index + 1}`}
                className="bg-gradient-to-b from-white/5 to-white/0 rounded-xl border-t border-white/10 px-6"
              >
                <AccordionTrigger chevron={false} className="hover:no-underline group">
                  <span className="text-left font-medium">{item.question}</span>
                  <div className="bg-white/5 flex size-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200 group-data-[state=open]:rotate-45">
                    <Plus className="size-4" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </Section>
  );
}
