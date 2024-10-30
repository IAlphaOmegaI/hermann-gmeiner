import Image from "next/image";
import { Link } from "next-view-transitions";
import type { Post } from "@/actions/types/post";
import type { PropsWithClassName } from "@/types/domain/props-with-class-name";
import { cn } from "@/utils";

export const BlogCard = ({
  className,
  title,
  thumbnail,
  summary,
  id,
}: PropsWithClassName<Post>) => {
  return (
    <Link
      className={cn("mb-4 flex flex-col space-y-1 w-1/5", className)}
      href={`/blog/${id}`}
    >
      <div className="title flex w-full flex-col">
        {thumbnail && (
          <div
            className={
              "relative w-full aspect-video overflow-hidden rounded-lg"
            }
          >
            <Image
              src={thumbnail}
              alt={summary}
              fill
              className={"object-cover"}
            />
          </div>
        )}
        <p className="font-medium text-2xl tracking-tight">{title}</p>
        {/*<p className="h-6 text-muted-foreground text-xs">*/}
        {/*{formatDate(metadatapublishedAt)}*/}
        {/*</p>*/}
        <p className="h-6 text-muted-foreground text-xs">{summary}</p>
      </div>
    </Link>
  );
};
