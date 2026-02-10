"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";

interface ScreenshotProps {
  srcLight: string;
  srcDark?: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function Screenshot({
  srcLight,
  srcDark,
  alt,
  width,
  height,
  className,
}: ScreenshotProps) {
  return (
    <>
      <Image
        src={srcLight}
        alt={alt}
        width={width}
        height={height}
        className={cn(srcDark ? "dark:hidden" : "", className)}
      />
      {srcDark && (
        <Image
          src={srcDark}
          alt={alt}
          width={width}
          height={height}
          className={cn("hidden dark:block", className)}
        />
      )}
    </>
  );
}
