import React from 'react'

export const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 {...props} className={(props.className ?? '') + ' text-3xl md:text-5xl font-bold mt-8 mb-4'} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 {...props} className={(props.className ?? '') + ' text-2xl md:text-3xl font-bold mt-8 mb-3'} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p {...props} className={(props.className ?? '') + ' leading-7 text-muted-foreground my-4'} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul {...props} className={(props.className ?? '') + ' list-disc pl-6 my-4'} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code {...props} className={(props.className ?? '') + ' rounded bg-muted px-1.5 py-0.5'} />
  ),
}


