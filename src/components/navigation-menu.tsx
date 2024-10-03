import { ModeToggle } from "@/components/mode-toggle";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenu as NavigationMenuPrimitive,
  NavigationMenuTrigger,
  navigationMenuTriggerVariants,
} from "@/components/ui/navigation-menu";
import { HomeIcon } from "@/icons";
import type { Route } from "@/types";
import type { PropsWithClassName } from "@/types/domain/props-with-class-name";
import { cn } from "@/utils";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import type { ElementRef, LegacyRef, PropsWithChildren } from "react";

const ROUTES: Route[] = [
  {
    label: "Rreth Shkolles",
    Icon: HomeIcon,
    description: "Home",
    subRoutes: [
      {
        path: "/historiku",
        label: "Historiku",
        Icon: HomeIcon,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        path: "/drejtoria",
        label: "Drejtoria",
        Icon: HomeIcon,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        path: "/administrata",
        label: "Administrata",
        Icon: HomeIcon,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        path: "/njesia-zhvillimore",
        label: "Njesia Zhvillimore",
        Icon: HomeIcon,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        path: "/kurrikula",
        label: "Kurrikula",
        Icon: HomeIcon,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
  },
  {
    path: "/projektet",
    label: "Projektet",
    Icon: HomeIcon,
  },
  {
    path: "/qeveria-studentore",
    label: "Qeveria Studentore",
    Icon: HomeIcon,
  },
  {
    label: "Bizneset",
    Icon: HomeIcon,
    subRoutes: [
      {
        path: "/bizneset/intershipet",
        label: "Intershipet",
        Icon: HomeIcon,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
  },
  {
    path: "/vende-vakante",
    label: "Vende Vakante",
    Icon: HomeIcon,
  },
  {
    path: "/njoftime",
    label: "Njoftime",
    Icon: HomeIcon,
    subRoutes: [
      {
        path: "/njoftime/lajme",
        label: "Lajme",
        Icon: HomeIcon,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
  },
];

export const NavigationMenu = () => {
  return (
    <div
      className={
        "absolute inset-x-0 top-0 mt-8 flex w-full items-center justify-center gap-4 z-[100]"
      }
    >
      <NavigationMenuPrimitive className={"rounded-full bg-accent px-2 py-1"}>
        <NavigationMenuList>
          {ROUTES.map(({ label, subRoutes, path, Icon }) => (
            <NavigationMenuItem key={label}>
              {path ? (
                <Link href={path} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerVariants()}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {label}
                  </NavigationMenuLink>
                </Link>
              ) : (
                <NavigationMenuTrigger>
                  <Icon className="mr-2 h-4 w-4" />
                  {label}
                </NavigationMenuTrigger>
              )}
              {subRoutes && (
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {subRoutes.map((item) => (
                      <ListItem key={item.label} {...item}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenuPrimitive>
      <ModeToggle />
    </div>
  );
};

export type ListItemProps = PropsWithChildren<
  PropsWithClassName<Route> & {
    ref?: LegacyRef<ElementRef<typeof Link>>;
  }
>;
const ListItem = ({
  className,
  children,
  Icon,
  label,
  ref,
  path = "/",
}: ListItemProps) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={path}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-foreground-rich focus:bg-accent focus:text-accent-foreground",
            className,
          )}
        >
          <div className={"flex flex-col"}>
            <div className="mb-1 flex w-full items-center gap-2 font-medium leading-none">
              <Icon className={"size-4"} />
              {label}
            </div>
            <p className="line-clamp-2 text-muted-foreground text-xs leading-snug">
              {children}
            </p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
