import type { DynamicRouteProps } from "@/types/navigation";
import { unstable_expireTag as expireTag } from "next/cache";;

export const POST = async (req: Request, { params }: DynamicRouteProps) => {
  const { id } = await params;
  expireTag(`posts-${id}`);
  return new Response("ok", { status: 200 });
};
