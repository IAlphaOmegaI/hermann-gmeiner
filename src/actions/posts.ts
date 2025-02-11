import type {Pager} from "@/actions/types/utilities/pager";
import type {Post} from "@/actions/types/post";
import {unstable_cacheTag as setCacheTag} from "next/cache";
import {getPocketBase} from "./pocketbase";

export const getPaginatedPosts = async (
  { page, pageSize }: Pager = { page: 1, pageSize: 10 },
) => {
  "use cache";
  setCacheTag("posts");

  const pb = getPocketBase();

  return await pb.collection("posts").getList<Post>(page, pageSize, {
    sort: "created",
    order: "desc",
  });
};

export const getAllPosts = async () => {
  "use cache";
  setCacheTag("posts");

  const pb = getPocketBase();

  return await pb.collection("posts").getFullList<Post>();
};

export const getPostById = async (id: string) => {
  "use cache";
  setCacheTag(`posts-${id}`);

  const pb = getPocketBase();

  return pb.collection("posts").getOne<Post>(id);
};
