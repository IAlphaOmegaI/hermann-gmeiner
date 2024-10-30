import "./view-transitions.css";
import { BlurFade } from "@/components/animations/blur-fade";

import { BlogCard } from "@/components/blog-card";
import { getPaginatedPosts } from "@/actions/cache";
import { getResourceUrl } from "@/lib/get-resource-url";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async () => {
  const posts = await getPaginatedPosts();
  return (
    <section className={"flex flex-col gap-4 p-20"}>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="mb-8 font-medium text-2xl tracking-tighter">Blog</h1>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <section className={"flex flex-wrap gap-4 size-full"}>
          {posts.items
            .sort((a, b) => {
              if (new Date(a.created) > new Date(b.created)) {
                return -1;
              }
              return 1;
            })
            .map(({ thumbnail, ...post }) => (
              <BlogCard
                key={post.id}
                className={"w-1/4"}
                {...post}
                thumbnail={getResourceUrl(
                  thumbnail,
                  post.id,
                  post.collectionId,
                )}
              />
            ))}
        </section>
      </BlurFade>
    </section>
  );
};
