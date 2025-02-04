"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import type { PropsWithClassName } from "@/types/components";
import { cn } from "@/utils";
import Autoplay from "embla-carousel-autoplay";

const PARTNERS = [
  "one.png",
  "holberton.png",
  "balfin.svg",
  "aadf.svg",
  "easy-pay.svg",
  "upt.png",
  "polis.png",
];

export const PartnerCarousel = ({ className }: PropsWithClassName) => {
  return (
    <section className={cn("w-full flex flex-col gap-4 px-12 py-6", className)}>
      <h3 className={"text-3xl md:text-5xl font-header text-foreground font-semibold"}>
        Our Esteemed Partners
      </h3>
      <div className={"flex items-center gap-4 w-full md:flex-row flex-col"}>
        <div className={"w-full md:w-1/5"}>
          <p className="text-sm text-gray-600">
            Where curiosity meets excellence, and every student's potential is
            nurtured to bloom. Where curiosity meets excellence, and every
          </p>
        </div>
        <Carousel
          className={"h-24 grow"}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {PARTNERS.map((partner) => (
              <CarouselItem
                key={partner}
                className={"md:basis-1/3 basis-1/2 lg:basis-1/5 relative h-24 px-6"}
              >
                <div className={"size-full relative"}>
                  <Image
                    src={`/images/partners/${partner}`}
                    alt={partner}
                    className="size-full object-contain object-center"
                    fill
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
