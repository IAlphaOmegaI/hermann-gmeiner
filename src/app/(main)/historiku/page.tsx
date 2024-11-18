import {CustomMDX} from "@/components/mdx";
import type {Metadata} from "next";
import {notFound} from "next/navigation";
import Script from "next/script";
import {getPostById} from "@/actions/cache";

export async function generateMetadata(): Promise<Metadata | undefined> {
  const post = await getPostById("3thilomyccwai0p");

  const { title, created, summary: description, thumbnail } = post;
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
      publishedTime: created,
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

export default async () => {
  const post = await getPostById("3thilomyccwai0p");
  if (!post) notFound();

  return (
    <section className={"pt-20"}>
      <Script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          datePublished: post.created,
          dateModified: post.created,
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
