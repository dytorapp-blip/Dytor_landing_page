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
    img: ({ className, src, alt, ...props }: React.ComponentProps<"img">) => {
      if (src && typeof src === "object") {
        return (
          <Image
            src={src as React.ComponentProps<typeof Image>["src"]}
            alt={alt ?? ""}
            className={cn("rounded-lg border", className)}
            {...props}
          />
        );
      }

      return (
        <img
          className={cn("rounded-lg border", className)}
          src={src}
          alt={alt}
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
