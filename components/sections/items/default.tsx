import {
  BarChart3Icon,
  CalendarCheckIcon,
  Gamepad2Icon,
  MegaphoneIcon,
  MonitorDotIcon,
  ShieldCheckIcon,
  TimerIcon,
} from "lucide-react";
import { ReactNode } from "react";

import { Item, ItemDescription,ItemIcon, ItemTitle } from "../../ui/item";
import { Section } from "../../ui/section";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  className?: string;
}

export default function Items({
  title = "Powerful Features for Professional Events",
  items = [
    {
      title: "Dual Timer System",
      description: "Countdown and count-up timers with real-time display, pause/resume functionality, and customizable alerts when time expires.",
      icon: <TimerIcon className="size-5 stroke-1" />,
    },
    {
      title: "Event Scheduling",
      description: "Drag-and-drop event queue with auto-fill controls, visual schedule management, and seamless event progression.",
      icon: <CalendarCheckIcon className="size-5 stroke-1" />,
    },
    {
      title: "Message Broadcasting",
      description: "Send custom messages to all displays with preset options, flash effects, and real-time visibility control.",
      icon: <MegaphoneIcon className="size-5 stroke-1" />,
    },
    {
      title: "Remote Control",
      description: "Multi-device access with role-based permissions, WebSocket synchronization, and real-time connection monitoring.",
      icon: <Gamepad2Icon className="size-5 stroke-1" />,
    },
    {
      title: "Multi-Display Support",
      description: "Primary control interface with secondary display support, customizable backgrounds, and responsive design.",
      icon: <MonitorDotIcon className="size-5 stroke-1" />,
    },
    {
      title: "Analytics & Recording",
      description: "Automatic session tracking, detailed event logs, lag monitoring, and PDF export capabilities for performance analysis.",
      icon: <BarChart3Icon className="size-5 stroke-1" />,
    },
    {
      title: "Role-Based Access Control",
      description: "Tailored permissions and interfaces for every team member.",
      icon: <ShieldCheckIcon className="size-5 stroke-1" />,
    },
  ],
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {items.map((item, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{item.icon}</ItemIcon>
                  {item.title}
                </ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
