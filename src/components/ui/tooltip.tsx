"use client";

import { cn } from "@/utils";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import type { ComponentProps } from "react";

export type TooltipProviderProps = ComponentProps<
  typeof TooltipPrimitive.TooltipProvider
>;

export const TooltipProvider = TooltipPrimitive.Provider;

export type TooltipProps = ComponentProps<typeof TooltipPrimitive.Root>;

export const Tooltip = TooltipPrimitive.Root;

export type TooltipTriggerProps = ComponentProps<
  typeof TooltipPrimitive.TooltipTrigger
>;

export const TooltipTrigger = TooltipPrimitive.Trigger;

export type TooltipContentProps = ComponentProps<
  typeof TooltipPrimitive.TooltipContent
>;

export const TooltipContent = ({
  className,
  sideOffset = 4,
  ...props
}: TooltipContentProps) => (
  <TooltipPrimitive.Content
    sideOffset={sideOffset}
    className={cn(
      "fade-in-0 zoom-in-95 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 !backdrop-blur-lg z-50 animate-in overflow-hidden rounded bg-accent/80 px-3 py-1.5 text-foreground-dimmed text-sm shadow-md data-[state=closed]:animate-out",
      className,
    )}
    {...props}
  />
);
