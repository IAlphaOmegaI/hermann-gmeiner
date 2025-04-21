import {getAllPosts} from "@/actions/posts";
import Link from "next/link";

export default async () => {
    const posts = await getAllPosts();
    return <main className={"pt-24"}>{posts.map((post) => <Link href={`/blog/${post.id}`} key={post.id}>{post.title}</Link>)}</main>
}