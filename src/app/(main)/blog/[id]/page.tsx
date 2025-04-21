import type { DynamicRouteProps } from "@/types/navigation";
import { getAllPosts, getPostById } from "@/actions/posts";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { connection } from "next/server";

export const generateStaticParams = async () => {
  const blogs = await getAllPosts();
  return blogs.map((blog) => ({
    id: blog.id,
  }));
};
export const dynamicParams = true;

export default async ({ params }: DynamicRouteProps) => {
  const { id } = await params;
  const post = await getPostById(id);
  return (
    <main className={"flex flex-col gap-2"}>
      <div className={" gap-2 flex flex-col"}>
        <h1 className={"text-3xl md:text-5xl font-header font-semibold"}>
          {post.title}
        </h1>
        <span className={"text-xs base:text-base"}>
          Posted on {format(new Date(post.created), "dd MMM yyyy")}
        </span>
        <div
          className={"text-foreground-dimmed flex flex-row items-center gap-2"}
        >
          {post.tags.map((tag) => (
            <Badge
              key={tag}
              variant={"soft"}
              className={"text-xs px-1.5 py-0.5 md:px-2.5 base:text-base"}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      {/*biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>*/}
      <section
        className={"relative prose lg:prose-xl dark:prose-invert"}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </main>
  );
};
