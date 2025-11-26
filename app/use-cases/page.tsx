import { IconCircleDashedCheck } from '@tabler/icons-react';
import Image from "next/image";
import { FC } from "react";


interface UseCase {
  title: string;
  description: string;
  features: string[];
  image: string;
  demoUrl: string;
}

const useCases: UseCase[] = [
  {
    title: "Conference & Events",
    description:
      "Transform your conferences with precise timing control. DYTOR's role-based dashboards let speakers focus on content while stage managers orchestrate seamless transitions. Real-time messaging keeps everyone synchronized, and schedule automation ensures your event runs like clockwork.",
    features: [
      "Speaker countdown timers with visual cues",
      "Stage manager remote control dashboard",
      "Live messaging system for announcements",
      "Automated schedule progression",
      "Multi-screen display synchronization",
    ],
    image: "/assets/conference.png",
    demoUrl: "",
  },
  {
    title: "Theater Productions",
    description:
      "Elevate theatrical performances with millisecond-accurate timing. DYTOR's neural networks maintain perfect sync across lighting, sound, and stage cues. Directors get real-time control while actors receive subtle countdown notifications, creating flawless productions every night.",
    features: [
      "Cue-based timing with visual countdowns",
      "Director's remote control interface",
      "Actor notification system",
      "Lighting and sound synchronization",
      "Performance recording and analysis",
    ],
    image: "/assets/theatre.png",
    demoUrl: "",
  },
  {
    title: "Broadcast & Live TV",
    description:
      "Master live television with broadcast-grade timing precision. DYTOR's holographic displays provide crystal-clear countdowns visible from any angle. Producers maintain complete control while talent receives discrete timing cues, ensuring seamless live broadcasts.",
    features: [
      "Broadcast-quality countdown displays",
      "Producer control dashboard",
      "Talent cue notification system",
      "Commercial break automation",
      "Live broadcast synchronization",
    ],
    image: "/assets/Event-Scheduling.png",
    demoUrl: "",
  },
  {
    title: "Podcast & Streaming",
    description:
      "Perfect your podcast and streaming content with professional timing tools. DYTOR's telepathic messaging system keeps hosts and guests perfectly synchronized. Segment timing, ad break management, and live audience interaction create engaging content every time.",
    features: [
      "Host and guest timing coordination",
      "Segment duration tracking",
      "Ad break management",
      "Live audience interaction tools",
      "Content recording and editing sync",
    ],
    image: "/assets/control.png",
    demoUrl: "",
  },
  {
    title: "Educational Presentations",
    description:
      "Enhance educational experiences with intelligent timing systems. DYTOR adapts to different learning styles with customizable countdown displays. Teachers maintain control while students receive appropriate timing cues, creating focused and engaging learning environments.",
    features: [
      "Adaptive timing for different subjects",
      "Teacher control interface",
      "Student-friendly countdown displays",
      "Break and transition management",
      "Learning analytics and insights",
    ],
    image: "/assets/Event-Scheduling.png",
    demoUrl: "",
  },
  {
    title: "Corporate Training",
    description:
      "Streamline corporate training sessions with enterprise-grade timing control. DYTOR's dimensional sync ensures all participants stay aligned across multiple locations. Trainers can focus on content delivery while the system manages timing, breaks, and participant engagement.",
    features: [
      "Multi-location synchronization",
      "Trainer dashboard with participant view",
      "Break and activity timing",
      "Participant engagement tracking",
      "Training session analytics",
    ],
    image: "/assets/control.png",
    demoUrl: "",
  },
];

const UseCasesPage = () => {
  return (
    <div className="bg-background text-foreground relative w-full overflow-hidden">
      <div
        className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: `radial-gradient(circle at center, #0a57e6ff, transparent 70%)`,
        }}
      />
      <div
        className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full opacity-10 blur-[100px]"
        style={{
          background: `radial-gradient(circle at center, #0a57e6ff, transparent 70%)`,
        }}
      />
      <header className="py-12 md:py-20 text-center">
        <div className="container max-w-container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Use Cases
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Discover how DYTOR transforms timing control across industries. From
            conferences to theater, broadcasting to education — see how
            professionals achieve perfect synchronization.
          </p>
        </div>
      </header>

      <main>
        {useCases.map((useCase, index) => (
          <UseCaseSection
            key={useCase.title}
            useCase={useCase}
            reverse={index % 2 !== 0}
            showGlow={index === 3}
          />
        ))}
      </main>
    </div>
  );
};

const UseCaseSection: FC<{
  useCase: UseCase;
  reverse?: boolean;
  showGlow?: boolean;
}> = ({ useCase, reverse, showGlow }) => {
  const ImageComponent = () => (
    <div className="mt-8 md:mt-0">
      <Image
        src={useCase.image}
        alt={`${useCase.title} use case`}
        width={600}
        height={400}
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  );

  const TextComponent = () => (
    <div>
      <h2 className="text-3xl font-bold tracking-tight text-primary">
        {useCase.title}
      </h2>
      <p className="mt-4 text-lg text-muted-foreground">
        {useCase.description}
      </p>
      <ul className="mt-6 space-y-4">
        {useCase.features.map((feature) => (
          <li key={feature} className="flex items-start">
            <IconCircleDashedCheck stroke={1.25} />
            <span className="ml-3">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="py-12 md:py-20 mb-12 relative">
      {showGlow && (
        <div
          className="absolute top-1/2 right-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full opacity-20 blur-[120px]"
          style={{
            background: `radial-gradient(circle at center, #0a57e6ff, transparent 70%)`,
          }}
        />
      )}
      <div className="container max-w-container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Mobile layout: Image first */}
        <div className="md:hidden">
          <ImageComponent />
          <div className="mt-8">
            <TextComponent />
          </div>
        </div>
        {/* Desktop layout: Alternating */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-12 items-center w-full col-span-2">
          {reverse ? (
            <>
              <ImageComponent />
              <TextComponent />
            </>
          ) : (
            <>
              <TextComponent />
              <ImageComponent />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default UseCasesPage;
