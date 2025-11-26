import Image from 'next/image';

export default function FeaturesPage() {
  return (
    <div>
      <h1 className="text-3xl text-center md:text-4xl lg:text-5xl font-bold text-white">
        Features
      </h1>
      {/* Dual Timer System Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image - Left Side */}
            <div className="flex items-center justify-center lg:justify-start">
              <Image
                src="/assets/control.png"
                alt="Dytor Pro Dual Timer System Interface - Professional Stage Timer Controls"
                width={1900}
                height={1700}
                priority
              />
            </div>

            {/* Copy - Right Side */}
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Dual Timer System
              </h2>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                Countdown and count-up timers with real-time display, pause/resume functionality, and customizable alerts when time expires.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-200">Real-time precision timing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-200">Pause and resume functionality</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-200">Customizable alerts and notifications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Scheduling Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Copy - Left Side */}
            <div className="space-y-6 text-center lg:text-left lg:order-1 order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Event Scheduling
              </h2>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                Drag-and-drop event queue with auto-fill controls, visual schedule management, and seamless event progression.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-200">Drag-and-drop event management</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-200">Auto-fill controls and presets</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-200">Visual schedule progression</span>
                </div>
              </div>
            </div>

            {/* Image - Right Side */}
            <div className="flex items-center justify-center lg:justify-end order-1 lg:order-2">
              <Image
                src="/assets/Event-Scheduling.png"
                alt="Dytor Pro Event Scheduling Interface - Professional Event Management Dashboard"
                width={900}
                height={700}
                className="w-full h-auto max-w-lg "
                priority
              />
            </div>
          </div>

          <div className="text-center mt-16 mb-10">
            <p className="text-xl text-gray-200 max-w-2xl mx-auto font-medium">
              Tailored permissions and interfaces for every team member
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Admin - Full Control */}
            <div className="bg-background/50 backdrop-blur-lg border border-white/10 p-8 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Admin - Full Control</h3>
              <p className="text-gray-400 mb-4">Complete timer and schedule management, message controls, display settings, and user permission management.</p>
              <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-4"></div>
              <p className="text-sm text-cyan-400">Complete access</p>
            </div>

            {/* Queue Manager */}
            <div className="bg-background/50 backdrop-blur-lg border border-white/10 p-8 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/10">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Queue Manager - Event Flow Control</h3>
              <p className="text-gray-400 mb-4">Timer control, schedule management, preset messaging, and event flow coordination capabilities.</p>
              <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent my-4"></div>
              <p className="text-sm text-purple-400">Event coordination</p>
            </div>

            {/* Speaker */}
            <div className="bg-background/50 backdrop-blur-lg border border-white/10 p-8 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Speaker - Personal Access</h3>
              <p className="text-gray-400 mb-4">Personal timer control, message reception, schedule viewing, and session management for presenters.</p>
              <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-4"></div>
              <p className="text-sm text-cyan-400">Personal control</p>
            </div>

            {/* Viewer */}
            <div className="bg-background/50 backdrop-blur-lg border border-white/10 p-8 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/10">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Viewer - Display Only</h3>
              <p className="text-gray-400 mb-4">View-only access to timers and messages, perfect for audience displays and monitoring screens.</p>
              <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent my-4"></div>
              <p className="text-sm text-purple-400">Display only</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}