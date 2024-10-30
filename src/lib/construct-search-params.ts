import type { SearchParams } from "@/types/navigation";

export const constructSearchParams = <T extends string>(
  searchParams: SearchParams<T>,
): Record<Exclude<T, "page" | "pageSize">, string> => {
  return Object.fromEntries(
    Object.entries(searchParams)
      .map(([key, value]) => {
        if (key === "page") return null;
        if (key === "pageSize") return null;
        return [key, value];
      })
      .filter(Boolean) as [T, string][],
  ) as Record<T, string>;
};
