"use server";
import PocketBase from "pocketbase";
import type { Resource } from "@/actions/types/resource";
import type { Pager } from "@/actions/types/pager";
import type { Post } from "@/actions/types/post";

const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);

export const getPaginatedResources = async () => {
  return await pb
    .collection("landing_page_resources")
    .getList<Resource>(1, 10, {
      sort: "created",
      order: "desc",
    });
};

export const getPaginatedPosts = async (
  { page, pageSize }: Pager = { page: 1, pageSize: 10 },
) => {
  return await pb.collection("posts").getList<Post>(page, pageSize, {
    sort: "created",
    order: "desc",
      requestKey: null,
  });
};

export const getAllPosts = async () => {
  return await pb.collection("posts").getFullList<Post>();
};

export const getPostById = async (id: string) => {
  return pb.collection("posts").getOne<Post>(id, { requestKey: null });
};
