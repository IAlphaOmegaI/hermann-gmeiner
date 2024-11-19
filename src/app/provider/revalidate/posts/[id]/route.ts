import type { DynamicRouteProps } from "@/types/navigation";
import { revalidateTag } from "next/cache";

export const POST = async (
  req: Request,
  { params }: DynamicRouteProps<"id">,
) => {
  const { id } = await params;
  revalidateTag(`posts-${id}`);
};
