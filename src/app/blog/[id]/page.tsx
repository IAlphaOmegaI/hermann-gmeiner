import "../view-transitions.css";
import {CustomMDX} from "@/components/mdx";
import type {DynamicRouteProps} from "@/types/navigation";
import type {Metadata} from "next";
import {notFound} from "next/navigation";
import Script from "next/script";
import {getAllPosts, getPostById} from "@/actions/cache";

export const generateStaticParams = async () => {
  const posts = await getAllPosts();
  return posts.map(({ id }) => ({
    id,
  }));
};

export async function generateMetadata({
  params,
}: DynamicRouteProps<"id">): Promise<Metadata | undefined> {
  const { id } = await params;
  const post = await getPostById(id);
  console.log(post);

  const {
    title,
    created: publishedTime,
    summary: description,
    thumbnail,
  } = post;
  const openGraphImageURL = thumbnail
    ? `https://www.hermanngminer.edu.al${thumbnail}`
    : `https://www.hermanngminer.edu.al/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://www.hermanngminer.edu.al/blog/${post.id}`,
      images: [
        {
          url: openGraphImageURL,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [openGraphImageURL],
    },
  };
}

export default async ({ params }: DynamicRouteProps) => {
  const { id } = await params;
  const post = await getPostById(id);
  if (!post) notFound();

  return (
    <section className={"pt-20"}>
      <Script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          datePublished: post.created,
          dateModified: post.updated,
          description: post.summary,
          image: post.thumbnail
            ? `https://www.hermanngminer.edu.al${post.thumbnail}`
            : `https://www.hermanngminer.edu.al/og?title=${post.title}`,
          url: `https://www.hermanngminer.edu.al/blog/${post.id}`,
          author: {
            "@type": "Person",
            name: "Hermann Gmeiner",
          },
        })}
      </Script>
      <article className="prose dark:prose-invert mt-8 mx-auto">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
};
