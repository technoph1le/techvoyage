// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Learn IT",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Start here",
          items: [
            { slug: "start-here/welcome" },
            { slug: "start-here/about-me" },
            { slug: "start-here/roadmap" },
          ],
        },
        {
          label: "Computer Basics",
          items: [
            { slug: "computer-basics/cpu" },
            { slug: "computer-basics/gpu" },
            { slug: "computer-basics/ram" },
            { slug: "computer-basics/storage" },
            { slug: "computer-basics/motherboard" },
            { slug: "computer-basics/how-computers-work" },
            { slug: "computer-basics/laptop-vs-pc" },
          ],
        },
        {
          label: "Operating Systems",
          items: [
            { slug: "operating-systems/overview" },
            {
              slug: "operating-systems/windows-macos-linux",
            },
            { slug: "operating-systems/file-system" },
            {
              slug: "operating-systems/software-management",
            },
          ],
        },
        {
          label: "Keyboard & Shortcuts",
          items: [
            { slug: "keyboard-and-shortcuts/key-types" },
            { slug: "keyboard-and-shortcuts/shortcuts" },
            { slug: "keyboard-and-shortcuts/fast-typing" },
            {
              slug: "keyboard-and-shortcuts/productivity-tips",
            },
          ],
        },
        {
          label: "Internet & Networking",
          items: [
            {
              slug: "internet-and-networking/how-internet-works",
            },
            { slug: "internet-and-networking/ip-and-dns" },
            { slug: "internet-and-networking/web-layers" },
            { slug: "internet-and-networking/browsers" },
            {
              slug: "internet-and-networking/smart-searching",
            },
            {
              slug: "internet-and-networking/safety-and-security",
            },
          ],
        },
        {
          label: "Files & Organization",
          items: [
            {
              slug: "files-and-organization/folder-structure",
            },
            {
              slug: "files-and-organization/file-extensions",
            },
            { slug: "files-and-organization/naming-rules" },
            {
              slug: "files-and-organization/cloud-storage",
            },
          ],
        },
        {
          label: "Online Services",
          items: [
            { slug: "online-services/account-setup" },
            { slug: "online-services/github-basics" },
            { slug: "online-services/online-payments" },
            { slug: "online-services/data-security" },
          ],
        },
        {
          label: "Canva",
          items: [
            { slug: "canva/getting-started" },
            { slug: "canva/interface" },
            { slug: "canva/presentations" },
            { slug: "canva/social-posts" },
            { slug: "canva/resumes" },
            { slug: "canva/cards" },
            { slug: "canva/design-tips" },
            { slug: "canva/final-challenge" },
          ],
        },
        {
          label: "Figma",
          items: [
            { slug: "figma/basics" },
            { slug: "figma/frames-and-layouts" },
            { slug: "figma/components" },
            { slug: "figma/wireframes" },
            { slug: "figma/prototypes" },
            { slug: "figma/collaboration" },
            { slug: "figma/final-challenge" },
          ],
        },
        {
          label: "Collaboration Tools",
          items: [
            {
              slug: "collaboration-tools/google-workspace",
            },
            { slug: "collaboration-tools/google-docs" },
            { slug: "collaboration-tools/google-sheets" },
            { slug: "collaboration-tools/google-slides" },
            { slug: "collaboration-tools/google-forms" },
            { slug: "collaboration-tools/notion" },
            { slug: "collaboration-tools/zoom-and-teams" },
          ],
        },
        {
          label: "Programming",
          items: [
            { slug: "programming/what-is-programming" },
            { slug: "programming/algorithms" },
            { slug: "programming/intro-to-scratch" },
          ],
        },
        {
          label: "Web Basics",
          items: [
            { slug: "web-basics/how-web-works" },
            { slug: "web-basics/html" },
            { slug: "web-basics/css" },
            { slug: "web-basics/javascript" },
          ],
        },
        {
          label: "Projects & Next Steps",
          items: [
            { slug: "projects-next-steps/final-project" },
            { slug: "projects-next-steps/github-setup" },
            { slug: "projects-next-steps/hosting" },
            { slug: "projects-next-steps/next-steps" },
          ],
        },
        // {
        //   label: "Reference",
        //   autogenerate: { directory: "reference" },
        // },
      ],
    }),
  ],
});
