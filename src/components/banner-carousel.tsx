"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import type { Resource } from "@/actions/types/resource";
import { getResourceUrl } from "@/lib/get-resource-url";

export type BannerCarouselProps = {
  resources: Resource[];
};
export const BannerCarousel = ({ resources }: BannerCarouselProps) => {
  return (
    <Carousel
      className="rounded-3xl size-full"
      plugins={[
        Autoplay({
          delay: 10000,
          playOnInit: true,
          stopOnMouseEnter: false,
          stopOnFocusIn: false,
          stopOnInteraction: true,
          stopOnLastSnap: false,
        }),
      ]}
    >
      <CarouselNext
        className={
          "absolute top-1/2 -translate-y-1/2 -right-4 z-10 bg-background"
        }
      />
      <CarouselPrevious
        className={
          "absolute top-1/2 -translate-y-1/2 -left-4 z-10 bg-background"
        }
      />
      <CarouselContent
        className={"relative *:ml-0 rounded-3xl overflow-hidden size-full"}
      >
        {resources.map(({ id, collectionId, resource, type }) => (
          <CarouselItem className={"size-full p-0"} key={id}>
            {type === "image" ? (
              <Image
                src={getResourceUrl(resource, id, collectionId)}
                alt={"gradient"}
                className={"h-full w-full object-cover"}
                width={1920}
                height={1080}
              />
            ) : (
              <video
                src={getResourceUrl(resource, id, collectionId)}
                autoPlay
                loop
                muted
                playsInline
                className={"size-full"}
              />
            )}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
