"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string;
  onCountdownEnd: () => void;
}

const Countdown: React.FC<CountdownProps> = ({
  targetDate,
  onCountdownEnd,
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        onCountdownEnd();
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate, onCountdownEnd]);

  return (
    <div className="flex items-center justify-center space-x-4">
      <div className="text-center">
        <div className="text-4xl font-bold">{timeLeft.days}</div>
        <div className="text-sm text-muted-foreground">Days</div>
      </div>
      <div className="text-4xl font-bold">:</div>
      <div className="text-center">
        <div className="text-4xl font-bold">{timeLeft.hours}</div>
        <div className="text-sm text-muted-foreground">Hours</div>
      </div>
      <div className="text-4xl font-bold">:</div>
      <div className="text-center">
        <div className="text-4xl font-bold">{timeLeft.minutes}</div>
        <div className="text-sm text-muted-foreground">Minutes</div>
      </div>
      <div className="text-4xl font-bold">:</div>
      <div className="text-center">
        <div className="text-4xl font-bold">{timeLeft.seconds}</div>
        <div className="text-sm text-muted-foreground">Seconds</div>
      </div>
    </div>
  );
};

export default Countdown;
