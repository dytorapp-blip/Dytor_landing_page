import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    img: ({ className, src, alt, width, height, ...props }: React.ComponentProps<"img">) => {
      const safeAlt = alt ?? "";

      if (
        src &&
        typeof src === "object" &&
        "src" in src &&
        typeof (src as { src?: string }).src === "string"
      ) {
        const staticSrc = src as React.ComponentProps<typeof Image>["src"];
        const staticWidth =
          typeof (src as { width?: number }).width === "number"
            ? (src as { width?: number }).width
            : undefined;
        const staticHeight =
          typeof (src as { height?: number }).height === "number"
            ? (src as { height?: number }).height
            : undefined;

        return (
          <Image
            src={staticSrc}
            alt={safeAlt}
            className={cn("rounded-lg border", className)}
            width={staticWidth}
            height={staticHeight}
          />
        );
      }

      const numericWidth = typeof width === "string" ? Number(width) : width;
      const numericHeight = typeof height === "string" ? Number(height) : height;
      const safeWidth = Number.isFinite(numericWidth as number)
        ? (numericWidth as number)
        : undefined;
      const safeHeight = Number.isFinite(numericHeight as number)
        ? (numericHeight as number)
        : undefined;

      if (typeof src === "string" && (safeWidth || safeHeight)) {
        return (
          <Image
            src={src}
            alt={safeAlt}
            className={cn("rounded-lg border", className)}
            width={safeWidth}
            height={safeHeight}
          />
        );
      }

      return (
        <img
          className={cn("rounded-lg border", className)}
          src={typeof src === "string" ? src : undefined}
          alt={safeAlt}
          {...props}
        />
      );
    },
    Video: ({ className, ...props }: React.ComponentProps<"video">) => (
      <video
        className={cn("rounded-lg border", className)}
        controls
        loop
        {...props}
      />
    ),
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
    ...components,
  };
}

export const useMDXComponents = getMDXComponents;
