import { ExternalLinkIcon } from "lucide-react";

import Link from "next/link";

import { GITHUB_REPO_URL } from "@/lib/constants";

import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="py-4 border-b">
      <div
        className="wrapper flex gap-4 items-center justify-between"
        data-wsize="lg"
      >
        <Link href="/" className="font-bold text-2xl">
          Complete Intro to IT
        </Link>
        <Button asChild>
          <Link href={GITHUB_REPO_URL} target="_blank">
            View on GitHub
            <ExternalLinkIcon />
          </Link>
        </Button>
      </div>
    </header>
  );
}
