import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Hero() {
  return (
    <section className="bg-neutral-800 text-neutral-200">
      <div className="wrapper py-12 grid items-center md:grid-cols-[4fr_2fr] gap-8">
        <div className="space-y-8">
          <h1 className="text-6xl font-bold text-accent">
            Complete Intro to IT
          </h1>
          <p className="text-lg">
            This course goes over everything you need to know about IT.
          </p>
          <div className="flex gap-4 items-center">
            <Avatar className="size-12">
              <AvatarImage src="https://github.com/technoph1le.png" />
              <AvatarFallback>TE</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-bold">Technophile</p>
              <p>Mentor @ Hancom</p>
            </div>
          </div>
        </div>
        <div className="w-[300px]">
          <AspectRatio ratio={1 / 1} className="rounded-lg">
            <Image
              src="/hero.png"
              alt="Photo by Drew Beamer"
              fill
              className="h-full w-full rounded-lg object-cover"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}
