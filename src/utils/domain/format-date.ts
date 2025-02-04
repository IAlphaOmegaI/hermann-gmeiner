import {
  eachDayOfInterval,
  format,
  isSameDay,
  startOfToday,
  startOfYesterday,
  subDays,
} from "date-fns";


export const formatDate = (date: Date | string) => {
  const today = startOfToday();
  const yesterday = startOfYesterday();
  const oneWeekAgo = subDays(today, 7);
  const defaultFormat = format(date, "dd, MMMM yyyy");

  if (isSameDay(date, today)) return `${defaultFormat} - Today`;
  if (isSameDay(date, yesterday)) return `${defaultFormat} - Yesterday`;

  const weekDaysInterval = eachDayOfInterval({
    start: oneWeekAgo,
    end: date,
  });

  for (const day of weekDaysInterval) {
    if (isSameDay(day, date))
      return `${defaultFormat} - ${day.toLocaleDateString("en-US", {
        weekday: "long",
      })}`;
  }

  return format(date, "dd, MMMM yyyy");
};
