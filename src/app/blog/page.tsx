import "./view-transitions.css";
import { getAllPosts } from "@/actions/blog";
import { BlurFade } from "@/components/animations/blur-fade";

import { BlogCard } from "@/components/blog-card";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default () => {
  const posts = getAllPosts();
  return (
    <section className={"flex flex-col gap-4 p-20"}>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="mb-8 font-medium text-2xl tracking-tighter">Blog</h1>
      </BlurFade>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <BlogCard {...post} />
          </BlurFade>
        ))}
    </section>
  );
};
