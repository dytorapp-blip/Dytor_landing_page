"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import Countdown from "@/components/ui/countdown";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface CountdownModalTriggerProps {
  releaseDate: string;
  children: React.ReactNode;
}

const CountdownModalTrigger: React.FC<CountdownModalTriggerProps> = ({
  releaseDate,
  children,
}) => {
  const [isCountdownFinished, setIsCountdownFinished] = useState(false);

  const handleCountdownEnd = () => {
    setIsCountdownFinished(true);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Coming Soon!</DialogTitle>
          <DialogDescription>
            We are working hard to bring you this file. The download will be
            available on {new Date(releaseDate).toLocaleString()}.
          </DialogDescription>
        </DialogHeader>
        <div className="py-8">
          {isCountdownFinished ? (
            <div className="flex flex-col items-center justify-center space-y-4">
              <h3 className="text-2xl font-bold">The wait is over!</h3>
              <Button>Download Now</Button>
            </div>
          ) : (
            <Countdown
              targetDate={releaseDate}
              onCountdownEnd={handleCountdownEnd}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CountdownModalTrigger;
