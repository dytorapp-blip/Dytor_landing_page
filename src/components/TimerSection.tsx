import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function TimerSection() {
  return (
    <div className="col-span-1 md:col-span-2 flex flex-col space-y-6">
      {/* Timer Display Card */}
      <Card className="bg-[#222531] rounded-lg p-4 border-none">
        <CardHeader className="flex items-center justify-center pb-2">
          <CardTitle className="text-base font-medium">Timer</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <div className="text-6xl font-bold text-[#FFD700] font-mono">00:00</div>
        </CardContent>
      </Card>

      {/* Timer Controls Card */}
      <Card className="bg-[#222531] rounded-lg p-4 border-none">
        <CardContent className="flex flex-col space-y-4">
          <div className="flex justify-around">
            <Button variant="ghost" className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 mr-2"
              >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.78 1.35a2 2 0 0 0 .73 2.73l.15.08a2 2 0 0 1 1 1.73v.44a2 2 0 0 1-1 1.73l-.15.08a2 2 0 0 0-.73 2.73l.78 1.35a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 1-1.73v.18a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.78-1.35a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.73v-.44a2 2 0 0 1 1-1.73l.15-.08a2 2 0 0 0 .73-2.73l-.78-1.35a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              Settings
            </Button>
            <Button variant="ghost" className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 mr-2"
              >
                <path d="M8 7V3m8 4V3m-9 8h10m-10 4h10M3 9h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2z" />
              </svg>
              Records
            </Button>
            <Button variant="ghost" className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 mr-2"
              >
                <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                <path d="M16 21V7" />
                <path d="M8 21V7" />
                <path d="M12 21V7" />
                <path d="M2 12h20" />
              </svg>
              Remote
            </Button>
            <Button variant="ghost" className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 mr-2"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              FTB
            </Button>
          </div>

          <Input placeholder="Event Title" className="bg-[#1A1C28] border-none text-white" />

          <div className="grid grid-cols-3 gap-4">
            <Input placeholder="Hour" className="bg-[#1A1C28] border-none text-white" />
            <Input placeholder="Minute" className="bg-[#1A1C28] border-none text-white" />
            <Input placeholder="Second" className="bg-[#1A1C28] border-none text-white" />
          </div>

          <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 mr-2"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            Start Timer
          </Button>

          <div className="grid grid-cols-3 gap-4">
            <Button variant="outline" className="bg-[#1A1C28] border-gray-700 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 mr-2"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              Add Time
            </Button>
            <Button variant="outline" className="bg-[#1A1C28] border-gray-700 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 mr-2"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Real Time
            </Button>
            <Button variant="outline" className="bg-[#1A1C28] border-gray-700 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 mr-2"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
              Schedule
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}