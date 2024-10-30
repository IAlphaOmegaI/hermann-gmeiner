import type { SearchParams } from "@/types/navigation";
import {parseSearchParams} from "@/utils";

export const constructPager = <T extends string = "">(
  searchParams: SearchParams<"page" | "pageSize" | T>,
) => {
  const page = Number(parseSearchParams(searchParams?.page, "single", "1"));
  const pageSize = Number(parseSearchParams(searchParams?.pageSize, "single", "20"));
  return {
    page,
    pageSize,
  };
};
