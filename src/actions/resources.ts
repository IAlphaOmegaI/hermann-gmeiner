"use server";
import type {Resource} from "./types/resource";
import {unstable_cacheTag as setCacheTag} from "next/cache";
import {getPocketBase} from "./pocketbase";

export const getPaginatedResources = async () => {
  "use cache";
  setCacheTag("resources");

  const pb = await getPocketBase();

  return await pb
    .collection("landing_page_resources")
    .getList<Resource>(1, 10, {
      sort: "created",
      order: "desc",
    });
};

export const getMainAsset = async () => {
  "use cache";
  setCacheTag("resources");

  const pb = await getPocketBase();

  return await pb
    .collection("landing_page_resources")
    .getFirstListItem<Resource>('type="3d"');
};
