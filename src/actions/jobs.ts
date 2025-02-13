"use server";
import {getPocketBase} from "@/actions/pocketbase";

export const getPaginatedJobOffers = async () => {
    const pb = await getPocketBase();

}