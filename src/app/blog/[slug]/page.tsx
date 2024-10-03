import "../view-transitions.css";
import { getAllPosts, getPost } from "@/actions/blog";
import { CustomMDX } from "@/components/mdx";
import type { DynamicRouteProps } from "@/types";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map(({ slug }) => ({
        slug,
    }));
}

export async function generateMetadata({
                                           params,
                                       }: DynamicRouteProps<"slug">): Promise<Metadata | undefined> {
    const post = getPost(params.slug);

    const {
        title,
        publishedAt: publishedTime,
        summary: description,
        image,
    } = post.metadata;
    const openGraphImageURL = image
        ? `https://www.hermanngminer.edu.al${image}`
        : `https://www.hermanngminer.edu.al/og?title=${title}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "article",
            publishedTime,
            url: `https://www.hermanngminer.edu.al/blog/${post.slug}`,
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

export default async ({ params }: DynamicRouteProps<"slug">) => {
    const post = getPost(params.slug);
    if (!post) notFound();

    return (
        <section className={"pt-20"}>
            <Script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    headline: post.metadata.title,
                    datePublished: post.metadata.publishedAt,
                    dateModified: post.metadata.publishedAt,
                    description: post.metadata.summary,
                    image: post.metadata.image
                        ? `https://www.hermanngminer.edu.al${post.metadata.image}`
                        : `https://www.hermanngminer.edu.al/og?title=${post.metadata.title}`,
                    url: `https://www.hermanngminer.edu.al/blog/${post.slug}`,
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
