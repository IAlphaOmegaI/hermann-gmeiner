import type { Icon } from "@/types";
import type { OneRequiredOf } from "@/types/utilities/one-required-of";

export type Route = {
  label: string;
  Icon: Icon;
  description?: string;
} & OneRequiredOf<{
  path: string;
  subRoutes: Route[];
}>;
