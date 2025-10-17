import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export function MessageControlSection() {
  return (
    <Card className="col-span-1 bg-[#222531] rounded-lg p-4 border-none">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold text-white">Message Control</CardTitle>
        <div className="text-sm text-gray-400">0/500</div>
        <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">OFFLINE</span>
      </CardHeader>
      <CardContent className="flex flex-col">
        <label htmlFor="message" className="text-sm font-medium text-white mb-2">Message</label>
        <Textarea id="message" placeholder="Type your message here..." className="mb-4 bg-[#33374B] border-none text-white h-32" />
        <div className="flex items-center space-x-2 mb-4">
          <Checkbox id="show-message" />
          <label htmlFor="show-message" className="text-sm text-white">Show Message</label>
        </div>
        <div className="flex space-x-2">
          <Button className="bg-[#FFD700] text-black"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>Flash</Button>
          <Button variant="outline" className="bg-[#33374B] text-white border-none"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>Clear</Button>
        </div>
      </CardContent>
    </Card>
  );
}