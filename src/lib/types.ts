// import type { SerializeResult } from "next-mdx-remote-client/serialize";

export type ContentType = {
  title: string;
  slug: string;
  order: number;
  mdxSource: string;
};

export type GroupedContentType = {
  folder: string;
  title: string;
  icon: string;
  order: number;
  contents: ContentType[];
};

export type FolderMetaType = {
  title: string;
  icon: string;
  order: number;
};
