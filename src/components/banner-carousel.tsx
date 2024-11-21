"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
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
      plugins={[
        Autoplay({
          delay: 3000,
          playOnInit: true,
          stopOnMouseEnter: false,
          stopOnFocusIn: false,
          stopOnInteraction: true,
          stopOnLastSnap: false,
        }),
      ]}
    >
      <CarouselContent className={"relative *:ml-0"}>
        {resources.map(({ id, collectionId, resource, type }) => (
          <CarouselItem className={"size-full p-0"} key={id}>
            {type === "image" ? (
              <Image
                src={getResourceUrl(resource, id, collectionId)}
                alt={"gradient"}
                className={"size-full"}
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
