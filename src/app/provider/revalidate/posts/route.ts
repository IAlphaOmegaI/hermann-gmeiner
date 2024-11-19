import { revalidateTag } from "next/cache";

export const POST = (req: Request) => {
  revalidateTag("posts");
};
