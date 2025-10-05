import { Suspense } from "react";

import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote-client/rsc";

import { mdxComponents } from "@/mdx-components";
import { getAllContents, getContentBySlug } from "@/lib/content";

type Props = {
  params: { slug: string[] };
};

export async function generateStaticParams() {
  const grouped = await getAllContents();
  const allContents = grouped.flatMap((group) => group.contents);

  return allContents.map((content) => ({
    slug: content.slug.split("/"), // turn "folder/file" into ["folder", "file"]
  }));
}

export default async function ContentPage({ params }: Props) {
  const { slug } = await params;

  const content = await getContentBySlug(slug.join("/"));
  if (!content) return notFound();

  return (
    <section className="py-8">
      <div className="wrapper mx-auto space-y-8" data-wsize="sm">
        <div className="px-12 py-10 border bg-neutral-200/10 shadow-sm rounded-lg">
          <article className="prose max-w-none">
            <h1>{content.title}</h1>
            <Suspense fallback={<p>Loading...</p>}>
              <MDXRemote
                source={content.mdxSource}
                components={mdxComponents}
              />
            </Suspense>
          </article>
        </div>
      </div>
    </section>
  );
}
