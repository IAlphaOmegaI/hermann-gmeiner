import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";

export type UpcomingEventProps = {
  events: UpcomingEvent[];
};
export type UpcomingEvent = {
  title: string;
  description: string;
  date: string;
  themes: string[];
};
export const UpcomingEvents = ({ events }: UpcomingEventProps) => {
  return (
    <div className={"p-4 divide-y divide-border max-w-7xl mx-auto"}>
      {events.map(({ date, description, title, themes }) => (
        <div key={title} className={"flex gap-2 items-center py-2"}>
          <div className={"flex flex-col items-center border-r border-border pr-4 pb-2"}>
            <span className={"text-center text-5xl md:text-9xl font-header font-semibold tabular-nums w-20 md:w-36"}>{format(date, "dd")}</span>
            <span className={"font-header tabular-nums md:text-base text-xs"}>{format(date, "MMM, yyyy")}</span>
          </div>
          <div className={"grow pl-2"}>
            <h3 className={"font-header md:text-2xl font-semibold"}>{title}</h3>
            <div
              className={
                "text-foreground-dimmed flex flex-row items-center gap-2"
              }
            >
              <span className={"text-xs base:text-base"}>Posted on {format(new Date(date), "dd MMM yyyy")}</span>
              <div className={"h-4 w-px bg-border text-xs base:text-base"} />
              <div>
                {themes.map((theme) => (
                  <Badge key={theme} variant={"soft"} className={"text-xs px-1.5 py-0.5 md:px-2.5 base:text-base"}>
                    {theme}
                  </Badge>
                ))}
              </div>
            </div>
            <p className={"text-xs base:text-base"}>{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
