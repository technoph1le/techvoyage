import React from "react";
import {
  Code,
  Info,
  BookOpen,
  Palette,
  Cloud,
  Keyboard,
  Globe,
  Cpu,
  Folder,
  Layers,
} from "lucide-react";

export const folderIcons: Record<string, React.ReactNode> = {
  code: React.createElement(Code, { size: 50 }),
  info: React.createElement(Info, { size: 50 }),
  book: React.createElement(BookOpen, { size: 50 }),
  design: React.createElement(Palette, { size: 50 }),
  cloud: React.createElement(Cloud, { size: 50 }),
  keyboard: React.createElement(Keyboard, { size: 50 }),
  globe: React.createElement(Globe, { size: 50 }),
  cpu: React.createElement(Cpu, { size: 50 }),
  folder: React.createElement(Folder, { size: 50 }),
  layers: React.createElement(Layers, { size: 50 }),
};
