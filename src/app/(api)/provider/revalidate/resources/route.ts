import { unstable_expireTag as expireTag } from "next/cache";;

export const POST = (req: Request) => {
  expireTag("posts");
  return new Response("ok", { status: 200 });
};
