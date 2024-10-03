import { type BlogPost, getAllPosts } from "@/actions/blog";
import { cn, formatDate } from "@/utils";
import type { PropsWithClassName } from "@/types/domain/props-with-class-name";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon, LinkIcon } from "@/icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const AnnouncementsView = async () => {
  const posts = getAllPosts({
    itemsPerPage: 9,
    page: 1,
  });
  return (
    <Carousel className={"flex flex-col size-full"}>
      <section
        className={
          "w h-full flex flex-col divide-y-[1.5px] divide-border border-b-[1.5px] border-border"
        }
      >
        <div className={"p-12"}>
          <div>
            <h1
              className={
                "text-5xl text-foreground font-header font-semibold flex items-center gap-2"
              }
            >
              Të fundit
              <div className={"flex gap-2 ml-auto w-fit"}>
                <CarouselPrevious
                  size={"icon"}
                  color={"primary"}
                  className={"rounded-full size-8 static"}
                  variant={"soft"}
                >
                  <ChevronLeftIcon className={"size-5"} />
                </CarouselPrevious>
                <CarouselNext
                  size={"icon"}
                  color={"primary"}
                  className={"rounded-full size-8 static"}
                  variant={"soft"}
                >
                  <ChevronRightIcon className={"size-5"} />
                </CarouselNext>
              </div>
            </h1>
            <p>
              Shkolla 'Hermann Gmeiner' është shkollë profesionale për TIK
              (Teknologji Informacioni dhe Komunikimi) e themeluar ne 2014.
              <Link
                href={"/hermann-gmeiner"}
                className={"underline text-primary flex items-center gap-2"}
              >
                <span>Mëso më tepër</span>
                <LinkIcon className={"size-4"} />
              </Link>
            </p>
          </div>
        </div>
        <CarouselContent className={"size-full grow"}>
          {Array.from({ length: 2 }).map((_, i) => (
            <CarouselItem key={i} className={"size-full"}>
              <AnnouncementSection posts={posts.slice(i * 3, (i + 1) * 3)} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </section>
    </Carousel>
  );
};

type AnnouncementSectionProps = {
  posts: BlogPost[];
};
const AnnouncementSection = ({ posts }: AnnouncementSectionProps) => {
  return (
    <section
      className={
        "grid grid-cols-3 grid-rows-2 size-full divide-x-[1.5px] divide-y-[1.5px] divide-border py-[1.5px] px-8  grow"
      }
    >
      <AnnouncementCard {...posts[0]} className={"col-span-2 row-span-2"} />
      <AnnouncementCard
        {...posts[1]}
        className={"col-span-1 row-span-1 !border-t-0"}
      />
      <AnnouncementCard {...posts[2]} className={"col-span-1 row-span-1"} />
    </section>
  );
};

const AnnouncementCard = ({
  metadata,
  className,
}: PropsWithClassName<BlogPost>) => {
  return (
    <div className={cn("flex flex-col gap-4 h-full p-4", className)}>
      <div className={"relative w-full grow"}>
        <img
          src={metadata.image}
          alt={metadata.title}
          className={
            "object-contain object-cover rounded-xl absolute size-full inset-0"
          }
        />
      </div>
      <div className={"h-20"}>
        <p className="font-medium text-2xl tracking-tight line-clamp-1">{metadata.title}</p>
        <p className="h-6 text-muted-foreground text-xs">
          {formatDate(metadata.publishedAt)}
        </p>
        <p className="h-6 text-muted-foreground text-xs">{metadata.summary}</p>
      </div>
    </div>
  );
};
