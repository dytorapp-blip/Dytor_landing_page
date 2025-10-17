
import { ModeToggle } from "@/components/theme-toggle";
import { ScheduleSection } from "@/components/ScheduleSection";
import { TimerSection } from "@/components/TimerSection";
import { MessageControlSection } from "@/components/MessageControlSection";

export default function DashboardPage() {
  return (
    <div className="font-sans min-h-screen bg-[#1A1C28] text-white p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <div className="text-2xl font-bold">DYTOR</div>
        <ModeToggle />
      </header>

      {/* Main Content Grid */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Schedule Section */}
        <ScheduleSection />

        {/* Timer Section */}
        <TimerSection />

        {/* Message Control Section */}
        <MessageControlSection />
      </main>
    </div>
  );
}
