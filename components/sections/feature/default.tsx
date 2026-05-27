import Image from "next/image";

export default function FeaturesPage() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto w-full max-w-7xl">
        <h1 className="mb-10 text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          Features
        </h1>

        <div className="bg-background/40 overflow-hidden rounded-lg border border-white/10">
          <div className="grid grid-cols-1 items-center gap-10 p-6 md:p-10 lg:grid-cols-2 lg:p-12">
            <div className="flex items-center justify-center">
              <Image
                src="/assets/control.png"
                alt="Dytor Pro Dual Timer System Interface - Professional Stage Timer Controls"
                width={1900}
                height={1700}
                className="h-auto w-full max-w-2xl"
                priority
              />
            </div>

            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                Dual Timer System
              </h2>
              <p className="text-lg leading-relaxed text-gray-200 md:text-xl">
                Countdown and count-up timers with real-time display,
                pause/resume functionality, and customizable alerts when time
                expires.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                  <span className="text-gray-200">
                    Real-time precision timing
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                  <span className="text-gray-200">
                    Pause and resume functionality
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                  <span className="text-gray-200">
                    Customizable alerts and notifications
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-white/10" />

          <div className="grid grid-cols-1 items-center gap-10 p-6 md:p-10 lg:grid-cols-2 lg:p-12">
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                Event Scheduling
              </h2>
              <p className="text-lg leading-relaxed text-gray-200 md:text-xl">
                Drag-and-drop event queue with auto-fill controls, visual
                schedule management, and seamless event progression.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                  <span className="text-gray-200">
                    Drag-and-drop event management
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                  <span className="text-gray-200">
                    Auto-fill controls and presets
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                  <span className="text-gray-200">
                    Visual schedule progression
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Image
                src="/assets/Event-Scheduling.png"
                alt="Dytor Pro Event Scheduling Interface - Professional Event Management Dashboard"
                width={900}
                height={700}
                className="h-auto w-full max-w-lg"
                priority
              />
            </div>
          </div>

          <div className="h-px bg-white/10" />

          <div className="p-6 md:p-10 lg:p-12">
            <div className="mb-10 text-center">
              <p className="mx-auto max-w-2xl text-xl font-medium text-gray-200">
                Tailored permissions and interfaces for every team member
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
              {/* Admin - Full Control */}
              <div className="bg-background/50 h-full rounded-lg border border-white/10 p-8 transition-colors duration-300 hover:border-cyan-400">
                <div className="bg-background/50 mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 text-cyan-400">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">
                  Admin - Full Control
                </h3>
                <p className="mb-5 text-gray-400">
                  Complete timer and schedule management, message controls,
                  display settings, and user permission management.
                </p>
                <div className="my-4 h-px bg-white/10"></div>
                <p className="text-sm font-medium text-cyan-400">
                  Complete access
                </p>
              </div>

              {/* Queue Manager */}
              <div className="bg-background/50 h-full rounded-lg border border-white/10 p-8 transition-colors duration-300 hover:border-cyan-400">
                <div className="bg-background/50 mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 text-cyan-400">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">
                  Queue Manager - Event Flow Control
                </h3>
                <p className="mb-5 text-gray-400">
                  Timer control, schedule management, preset messaging, and
                  event flow coordination capabilities.
                </p>
                <div className="my-4 h-px bg-white/10"></div>
                <p className="text-sm font-medium text-cyan-400">
                  Event coordination
                </p>
              </div>

              {/* Speaker */}
              <div className="bg-background/50 h-full rounded-lg border border-white/10 p-8 transition-colors duration-300 hover:border-cyan-400">
                <div className="bg-background/50 mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 text-cyan-400">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">
                  Speaker - Personal Access
                </h3>
                <p className="mb-5 text-gray-400">
                  Personal timer control, message reception, schedule viewing,
                  and session management for presenters.
                </p>
                <div className="my-4 h-px bg-white/10"></div>
                <p className="text-sm font-medium text-cyan-400">
                  Personal control
                </p>
              </div>

              {/* Viewer */}
              <div className="bg-background/50 h-full rounded-lg border border-white/10 p-8 transition-colors duration-300 hover:border-cyan-400">
                <div className="bg-background/50 mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 text-cyan-400">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">
                  Viewer - Display Only
                </h3>
                <p className="mb-5 text-gray-400">
                  View-only access to timers and messages, perfect for audience
                  displays and monitoring screens.
                </p>
                <div className="my-4 h-px bg-white/10"></div>
                <p className="text-sm font-medium text-cyan-400">
                  Display only
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
