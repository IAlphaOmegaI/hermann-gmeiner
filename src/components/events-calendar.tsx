"use client";
import {
  addDays,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { DAYS_OF_THE_WEEK } from "@/components/_utils";
import { cn } from "@/utils";
import Link from "next/link";
import { LinkIcon } from "@/icons";
import { useState } from "react";

export const EventsCalendar = () => {
  const events = [
    {
      title: "Event 1",
      date: new Date(),
    },
    {
      title: "Event 2",
      date: addDays(new Date(), -8),
    },
    {
      title: "Event 2",
      date: addDays(new Date(), -20),
    },
  ];
  const [selected, setSelected] = useState(new Date());
  const firstDayOfMonth = startOfMonth(selected);
  const lastDayOfMonth = endOfMonth(selected);

  const firstWeeksMondayOfMonth = startOfWeek(firstDayOfMonth);
  const lastWeeksSundayOfMonth = endOfWeek(lastDayOfMonth);

  const pageDays = eachDayOfInterval({
    start: firstWeeksMondayOfMonth,
    end: lastWeeksSundayOfMonth,
  });
  return (
    <section className={"size-full flex flex-col"}>
      <div className={"py-12 px-12 border-y border-border"}>
        <h3 className={"text-5xl text-foreground font-header font-semibold"}>
          Events Calendar
        </h3>
        <p>
          Shkolla 'Hermann Gmeiner' është shkollë profesionale për TIK
          (Teknologji Informacioni dhe Komunikimi) e themeluar ne 2014.
          <Link
            href={"/hermann-gmeiner"}
            className={"underline text-primary flex items-center gap-2"}
          >
            <span>Mëso më tepër</span>
            <LinkIcon className={"size-4"} />
          </Link>
        </p>
      </div>
      <section className={"size-full min-h-full flex flex-col px-12 py-12"}>
        <div
          className={"flex gap-[1.5px] h-16 border-y border-border bg-white"}
        >
          {DAYS_OF_THE_WEEK.map((day) => (
            <div
              key={day}
              className={
                "flex aspect-square w-[calc((100%/7)-1.3px)] bg-primary text-white items-center justify-center text-lg"
              }
            >
              {day.slice(0, 3)}
            </div>
          ))}
        </div>
        <div className={"flex flex-wrap grow bg-border gap-[1.5px]"}>
          {pageDays.map((pageDay) => {
            const targetEvents = events.filter((event) =>
              isSameDay(event.date, pageDay),
            );
            return (
              <button
                key={pageDay.toISOString()}
                type={"button"}
                className={cn(
                  "w-[calc((100%/7)-1.3px)] relative bg-background h-auto flex items-start justify-end p-4 tabular-nums font-mono transition-colors duration-300 hover:bg-foreground/10",
                )}
              >
                {format(pageDay, "dd")}
                {targetEvents?.map(({ title }) => (
                  <div
                    key={title}
                    className={
                      "absolute bottom-2 font-header inset-x-2 bg-primary text-sm text-left rounded text-white p-2"
                    }
                  >
                    {title}
                  </div>
                ))}
              </button>
            );
          })}
        </div>
      </section>
    </section>
  );
};
