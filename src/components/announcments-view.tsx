import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeftIcon, ChevronRightIcon, LinkIcon } from "@/icons";

import Link from "next/link";
import type { Post } from "@/actions/types/post";
import type { PropsWithClassName } from "@/types/components";
import { cn } from "@/utils";
import { getPaginatedPosts } from "@/actions/posts";
import { getResourceUrl } from "@/lib/get-resource-url";
import { format } from "date-fns";

export const AnnouncementsView = async () => {
  const posts = await getPaginatedPosts({ page: 1, pageSize: 9 });
  return (
    <Carousel className={"flex flex-col size-full"}>
      <section
        className={
          "w h-full flex flex-col divide-y-[1.5px] divide-border border-b-[1.5px] border-border"
        }
      >
        <div className={"p-12"}>
          <div className={"h-full flex flex-col gap-4"}>
            <h1
              className={
                "text-3xl flex items-center md:text-5xl text-foreground font-header font-semibold flex items-center gap-2"
              }
            >
              Të fundit
              <div className={"flex gap-2 ml-auto w-fit"}>
                <CarouselPrevious
                  size={"icon"}
                  color={"primary"}
                  className={"rounded-full size-8 static translate-y-0"}
                  variant={"soft"}
                >
                  <ChevronLeftIcon className={"size-5"} />
                </CarouselPrevious>
                <CarouselNext
                  size={"icon"}
                  color={"primary"}
                  className={"rounded-full size-8 static translate-y-0"}
                  variant={"soft"}
                >
                  <ChevronRightIcon className={"size-5"} />
                </CarouselNext>
              </div>
            </h1>
            <p className={"text-sm md:text-base"}>
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
        <CarouselContent className={"size-full grow *:ml-0 *:pr-0"}>
          {Array.from({ length: 1 }).map((_, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>s
            <CarouselItem key={i} className={"size-full pl-0"}>
              <AnnouncementSection
                posts={posts.items.slice(i * 3, (i + 1) * 3)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </section>
    </Carousel>
  );
};

type AnnouncementSectionProps = {
  posts: Post[];
};
const AnnouncementSection = ({ posts }: AnnouncementSectionProps) => {
  return (
    <section
      className={
        "grid grid-cols-3 grid-rows-2 size-full divide-x-[1.5px] divide-y-[1.5px] divide-border py-[1.5px] md:px-8  grow"
      }
    >
      <AnnouncementCard {...posts[0]} className={"col-span-full row-span-full md:col-span-2 md:row-span-2 !border-b-0"} />
      <AnnouncementCard
        {...posts[1]}
        className={"col-span-1 row-span-1 !border-t-0 !border-r-0"}
        showSummary={false}
      />
      <AnnouncementCard {...posts[2]} className={"col-span-1 row-span-1"} showSummary={false}/>
    </section>
  );
};

const AnnouncementCard = ({
  thumbnail,
  title,
  className,
  id,
  collectionId,
  summary,
  created,
  tags,
                            showSummary = true
}: PropsWithClassName<Post> & {showSummary?: boolean}) => {
  return (
    <Link
      href={`blog/${id}`}
      className={cn("flex flex-col gap-4 h-full p-4", className)}
    >
      <div className={cn("flex flex-col gap-4 h-full p-4", className)}>
        <div className={"relative w-full grow"}>
          <img
            src={getResourceUrl(thumbnail, id, collectionId)}
            alt={title}
            className={
              "object-contain object-cover rounded-xl absolute size-full inset-0 "
            }
          />
        </div>
        <div className={"h-fit"}>
          <p className="font-medium text-2xl tracking-tight line-clamp-1">
            {title}
          </p>
          <p className="h-6 text-muted-foreground text-xs pl-0.5 ">
            {format(new Date(created), "dd MMM yyyy")}
          </p>
          {showSummary && <p className="h-6 text-muted-foreground text-xs line-clamp-3">{summary}</p>}
        </div>
      </div>
    </Link>
  );
};
