import { docs, meta } from "@/.source";
import { loader } from "fumadocs-core/source";
import { resolveFiles } from "fumadocs-mdx";

import { formatDate } from "@/lib/utils";
import Glow from "@/components/ui/glow";

const source = loader({
  baseUrl: "/changelog",
  source: { files: resolveFiles({ docs, meta }) },
});

interface ChangelogData {
  title: string;
  date: string;
  version?: string;
  tags?: string[];
  body: React.ComponentType;
}

type ChangelogPage = ReturnType<typeof source.getPages>[number];

export default function ChangelogPage() {
  const sortedChangelogs = source.getPages().slice().sort((a, b) => {
    const dateA = new Date((a.data as ChangelogData).date).getTime();
    const dateB = new Date((b.data as ChangelogData).date).getTime();
    return dateB - dateA;
  }) as ChangelogPage[];

  return (
    <main className="changelog-page min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 pt-10 pb-20">
        <Glow
          variant="top"
          className="pointer-events-none opacity-50 scale-75"
        />
        <div className="relative">
          {sortedChangelogs.map((changelog) => {
            const data = changelog.data as ChangelogData;
            const MDX = data.body;
            const date = new Date(data.date);
            const formattedDate = formatDate(date);

            return (
              <article key={changelog.url} className="relative">
                <div className="flex flex-col md:flex-row gap-y-6">
                  <div className="md:w-48 flex-shrink-0">
                    <div className="md:sticky md:top-8 pb-10">
                      <time className="text-sm font-medium text-muted-foreground block mb-3">
                        {formattedDate}
                      </time>
                      {data.version && (
                        <div className="changelog-border inline-flex relative z-10 items-center justify-center w-10 h-10 text-foreground border-[0.7px] rounded-lg text-sm font-bold">
                          {data.version}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex-1 md:pl-8 relative pb-10">
                    <div className="hidden md:block absolute top-2 left-0 w-px h-full bg-border/20">
                      <div className="hidden md:block absolute -translate-x-1/2 size-3 bg-primary rounded-full z-10" />
                    </div>

                    <div className="space-y-6">
                      <div className="relative z-10 flex flex-col gap-2">
                        <h2 className="text-2xl font-semibold tracking-tight text-balance">
                          {data.title}
                        </h2>

                        {data.tags && data.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {data.tags.map((tag) => (
                              <span
                                key={tag}
                                className="changelog-border h-6 w-fit px-2 text-xs font-medium bg-muted text-muted-foreground rounded-full border-[0.7px] flex items-center justify-center"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="prose max-w-none prose-headings:scroll-mt-8 prose-headings:font-semibold prose-a:no-underline prose-headings:tracking-tight prose-headings:text-balance prose-p:tracking-tight prose-p:text-balance dark:prose-invert">
                        <MDX />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
