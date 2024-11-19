import type { ComponentType } from "react";
import type { Props } from "@/types/components";
import dynamic from "next/dynamic";

export const disableSSR = <P extends Props>(Component: ComponentType<P>) =>
  dynamic(() => Promise.resolve(Component), { ssr: false });
