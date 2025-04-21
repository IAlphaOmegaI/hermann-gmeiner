import { LayoutProps } from "@/types/navigation";

export default ({ children }: LayoutProps) => {
  return <main className="py-24 max-w-7xl mx-auto size-full">{children}</main>;
};
