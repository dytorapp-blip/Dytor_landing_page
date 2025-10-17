import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export function MessageControlSection() {
  return (
    <Card className="col-span-1 bg-[#222531] rounded-lg p-4 border-none">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-base font-medium flex items-center">
          Message Control <span className="ml-2 text-gray-500 text-sm">0/500</span>
        </CardTitle>
        <span className="text-red-500 text-xs font-bold">• OFFLINE</span>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
          <Input
            id="message"
            placeholder="Type your message here..."
            className="mt-1 bg-[#1A1C28] border-none text-white h-24 resize-none"
            asChild
          />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="show-message" />
          <label htmlFor="show-message" className="text-sm text-gray-400">Show Message</label>
        </div>
        <div className="flex justify-between space-x-4">
          <Button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white">
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
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            Flash
          </Button>
          <Button variant="outline" className="flex-1 bg-[#1A1C28] border-gray-700 text-gray-400">
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
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
            Clear
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}