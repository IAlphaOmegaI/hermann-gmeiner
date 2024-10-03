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
    <div className={"p-4 divide-y divide-border"}>
      {events.map(({ date, description, title, themes }) => (
        <div key={title} className={"flex gap-2 items-center"}>
          <div className={"flex flex-col items-center border-r border-border pr-4 pb-2"}>
            <span className={"text-center text-9xl font-header font-semibold tabular-nums w-36"}>{format(date, "dd")}</span>
            <span className={"font-header tabular-nums"}>{format(date, "MMM, yyyy")}</span>
          </div>
          <div className={"grow pl-2"}>
            <h3 className={"font-header text-2xl font-semibold"}>{title}</h3>
            <div
              className={
                "text-foreground-dimmed flex flex-row items-center gap-2"
              }
            >
              <span>Posted on {format(new Date(date), "dd MMM yyyy")}</span>
              <div className={"h-4 w-px bg-border"} />
              <div>
                {themes.map((theme) => (
                  <Badge key={theme} variant={"soft"}>
                    {theme}
                  </Badge>
                ))}
              </div>
            </div>
            <p>{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
