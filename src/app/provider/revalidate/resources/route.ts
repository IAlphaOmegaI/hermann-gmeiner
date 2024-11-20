import { expireTag } from "next/cache";

export const POST = (req: Request) => {
  expireTag("posts");
};
