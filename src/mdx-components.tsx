import type { MDXComponents } from "mdx/types";
import Info from "@/components/mdx/info";

export const mdxComponents: MDXComponents = {
  Info,
};

export function useMDXComponents(): MDXComponents {
  return mdxComponents;
}
