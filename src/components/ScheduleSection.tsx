import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

export function ScheduleSection() {
  return (
    <Card className="col-span-1 bg-[#222531] rounded-lg p-4 border-none">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-base font-medium flex items-center">
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
        </CardTitle>
        <div className="flex items-center space-x-2">
          <Switch id="count-up" />
          <label htmlFor="count-up" className="text-sm text-gray-400">Count-up</label>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center h-full pt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="h-12 w-12 text-gray-500 mb-2"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        <p className="text-gray-400 text-sm mb-1">No scheduled events</p>
        <p className="text-gray-500 text-xs">Use &quot;Add to Schedule&quot; to create events</p>
      </CardContent>
    </Card>
  );
}