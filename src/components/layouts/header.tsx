import Link from "next/link";
import { Button } from "../ui/button";
import { ExternalLinkIcon } from "lucide-react";

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
          <Link href="https://github.com" target="_blank">
            View on GitHub
            <ExternalLinkIcon />
          </Link>
        </Button>
      </div>
    </header>
  );
}
