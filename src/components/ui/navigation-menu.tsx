import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import * as React from "react";

import { ChevronDownIcon } from "@/icons";
import { cn } from "@/utils";
import type { ComponentProps } from "react";

export type NavigationMenuProps = ComponentProps<
  typeof NavigationMenuPrimitive.Root
>;

export const NavigationMenu = ({
  className,
  children,
  ...props
}: NavigationMenuProps) => (
  <NavigationMenuPrimitive.Root
    className={cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className,
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
);

export type NavigationMenuListProps = ComponentProps<
  typeof NavigationMenuPrimitive.List
>;

export const NavigationMenuList = ({
  className,
  ...props
}: NavigationMenuListProps) => (
  <NavigationMenuPrimitive.List
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className,
    )}
    {...props}
  />
);

export const NavigationMenuItem = NavigationMenuPrimitive.Item;

export const navigationMenuTriggerVariants = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded px-4 py-2 font-medium text-sm transition-colors hover:bg-accent hover:text-foreground-muted focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
);

export type NavigationMenuTriggerProps = ComponentProps<
  typeof NavigationMenuPrimitive.Trigger
>;

export const NavigationMenuTrigger = ({
  className,
  children,
  ...props
}: NavigationMenuTriggerProps) => (
  <NavigationMenuPrimitive.Trigger
    className={cn(navigationMenuTriggerVariants(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDownIcon
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
);

export type NavigationMenuContentProps = ComponentProps<
  typeof NavigationMenuPrimitive.Content
>;

export const NavigationMenuContent = ({
  className,
  ...props
}: NavigationMenuContentProps) => (
  <NavigationMenuPrimitive.Content
    className={cn(
      "data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out md:absolute md:w-auto ",
      className,
    )}
    {...props}
  />
);

const NavigationMenuLink = NavigationMenuPrimitive.Link;

export type NavigationMenuViewportProps = ComponentProps<
  typeof NavigationMenuPrimitive.Viewport
>;

export const NavigationMenuViewport = ({
  className,
  ...props
}: NavigationMenuViewportProps) => (
  <div className={cn("absolute top-full left-0 flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-top-center overflow-hidden rounded-md border border-border bg-background text-foreground-rich shadow data-[state=closed]:animate-out data-[state=open]:animate-in md:w-[var(--radix-navigation-menu-viewport-width)]",
        className,
      )}
      {...props}
    />
  </div>
);

export type NavigationMenuIndicatorProps = ComponentProps<
  typeof NavigationMenuPrimitive.Indicator
>;

export const NavigationMenuIndicator = ({
  className,
  ...props
}: NavigationMenuIndicatorProps) => (
  <NavigationMenuPrimitive.Indicator
    className={cn(
      "data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=hidden]:animate-out data-[state=visible]:animate-in",
      className,
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
);
