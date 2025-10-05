import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ContentType, FolderMetaType, GroupedContentType } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content");

export async function getAllContents(): Promise<GroupedContentType[]> {
  const folders = fs.readdirSync(CONTENT_DIR);

  const groupedContents: GroupedContentType[] = await Promise.all(
    folders.map(async (folder) => {
      const folderDir = path.join(CONTENT_DIR, folder);
      const metaPath = path.join(folderDir, "_meta.json");

      let folderTitle = folder;
      let folderIcon = "BookOpen";
      let folderOrder = 0;

      if (fs.existsSync(metaPath)) {
        const meta: FolderMetaType = JSON.parse(
          fs.readFileSync(metaPath, "utf-8")
        );
        folderTitle = meta.title || folderTitle;
        folderIcon = meta.icon || folderIcon;
        folderOrder = meta.order || folderOrder;
      }

      const files = fs.readdirSync(folderDir);

      const contents: ContentType[] = await Promise.all(
        files
          .filter((file) => file.endsWith(".mdx"))
          .map(async (file) => {
            const fullPath = path.join(folderDir, file);
            const rawContent = fs.readFileSync(fullPath, "utf-8");
            const { data, content } = matter(rawContent);

            return {
              title: data.title || file.replace(".mdx", ""),
              slug: `${folder}/${file.replace(".mdx", "")}`,
              order: data.order || 0,
              mdxSource: content,
            };
          })
      );

      // sort files by their order
      contents.sort((a, b) => a.order - b.order);

      return {
        folder,
        title: folderTitle,
        contents,
        icon: folderIcon,
        order: folderOrder,
      };
    })
  );

  // sort folders by their order
  return groupedContents.sort((a, b) => a.order - b.order);
}

export async function getContentBySlug(
  slug: string
): Promise<ContentType | null> {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent);

  return {
    title: data.title || slug,
    slug,
    order: data.order || 0,
    mdxSource: content,
  };
}
