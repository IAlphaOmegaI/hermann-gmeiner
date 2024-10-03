import Image from "next/image";
import { Link } from "next-view-transitions";
import { formatDate } from "@/utils";
import type { BlogPost } from "@/actions/blog";

export const BlogCard = ({ slug, content, metadata }: BlogPost) => {
  return (
    <Link className="mb-4 flex flex-col space-y-1 w-1/5" href={`/blog/${slug}`}>
      <div className="title flex w-full flex-col">
        {metadata.image && (
          <div
            className={
              "relative w-full aspect-video overflow-hidden rounded-lg"
            }
          >
            <Image
              src={metadata.image}
              alt={metadata.summary}
              fill
              className={"object-cover"}
            />
          </div>
        )}
        <p className="font-medium text-2xl tracking-tight">{metadata.title}</p>
        <p className="h-6 text-muted-foreground text-xs">
          {formatDate(metadata.publishedAt)}
        </p>
        <p className="h-6 text-muted-foreground text-xs">{metadata.summary}</p>
      </div>
    </Link>
  );
};
