import type { DynamicRouteProps } from "@/types/navigation";
import { expireTag } from "next/cache";

export const POST = async (
  req: Request,
  { params }: DynamicRouteProps,
) => {
  const { id } = await params;
  expireTag(`posts-${id}`);
};
