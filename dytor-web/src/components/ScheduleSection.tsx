import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

export function ScheduleSection() {
  return (
    <Card className="col-span-1 bg-[#222531] rounded-lg p-4 border-none">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold text-white">Schedule</CardTitle>
        <div className="flex items-center space-x-2">
          <Switch id="count-up" />
          <label htmlFor="count-up" className="text-sm text-white">Count-up</label>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center h-48">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-gray-500 mb-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="text-gray-400 text-center">
          No scheduled events
          <br />
          Use "Add to Schedule" to create events
        </p>
      </CardContent>
    </Card>
  );
}