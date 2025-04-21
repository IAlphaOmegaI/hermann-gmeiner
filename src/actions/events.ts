"use server";

import {unstable_cacheTag as setCacheTag} from "next/cache";
import {getPocketBase} from "@/actions/pocketbase";

export type UpcomingEvent = {
    title: string;
    description: string;
    date: string;
    tags: string[];
};


export const getAllEvents = async () => {
    "use cache";
    setCacheTag("events");

    const pb = await getPocketBase();

    return await pb.collection("events").getFullList<UpcomingEvent>();
};
