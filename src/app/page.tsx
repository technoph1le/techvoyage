import Link from "next/link";

import Hero from "@/components/layouts/hero";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

import { getAllContents } from "@/lib/content";
import { folderIcons } from "@/lib/icons";

export default async function Home() {
  const grouped = await getAllContents();

  return (
    <>
      <Hero />

      <section>
        <div className="wrapper py-8 space-y-4" data-wsize="xs">
          <h2 className="text-2xl font-bold">Table of Contents</h2>
          {grouped.map((section) => {
            const iconName = section.icon.toLowerCase() || "folder";
            const icon = folderIcons[iconName];

            return (
              <Card
                className="grid gap-4 items-center md:grid-cols-[auto_1fr] py-0 overflow-hidden hover:border-accent"
                key={section.folder}
              >
                <div className="px-8 bg-accent h-full grid place-content-center text-neutral-100">
                  {icon}
                </div>
                <CardContent className="space-y-4 py-6 px-4">
                  <CardTitle className="text-xl flex items-center gap-2">
                    {section.title}
                  </CardTitle>
                  <ol className="list-decimal list-inside pl-4 space-y-2">
                    {section.contents.map((content) => (
                      <li key={content.slug}>
                        <Link
                          href={`/content/${content.slug}`}
                          className="text-accent"
                        >
                          {content.title}
                        </Link>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
}
