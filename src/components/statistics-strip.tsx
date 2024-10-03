"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  Label,
  Pie,
  PieChart,
} from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";

const students = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const studentsChartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

const schools = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
];
const schoolsChartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export const StatisticsStrip = () => {
  const totalVisitors = schools.reduce((acc, curr) => acc + curr.visitors, 0);
  return (
    <section
      className={
        "flex divide-accent !bg-border *:bg-background gap-[1.5px] w-full"
      }
    >
      <div className={"flex gap-4 flex-col py-6 px-12"}>
        <div className={"w-full"}>
          <h3
            className={
              "text-5xl font-header text-foreground font-semibold mb-6"
            }
          >
            Statistics
          </h3>
          <p className={"text-sm text-gray-600"}>
            Where curiosity meets excellence, and every student's potential is
            nurtured to bloom. Where curiosity meets excellence, and every Where
            curiosity meets excellence, and every student's potential is
            nurtured to bloom. Where curiosity meets excellence, and every
          </p>
        </div>
        <ChartContainer config={studentsChartConfig} className={"h-[200px] min-h-[200px] w-full"}>
          <BarChart accessibilityLayer data={students} height={250} width={600}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </div>
      <div className={"flex gap-4 py-6 px-12"}>
        <div className={"w-full"}>
          <h3
            className={
              "text-5xl font-header text-foreground font-semibold mb-6"
            }
          >
            Statistics
          </h3>
          <p className={"text-sm text-gray-600"}>
            Where curiosity meets excellence, and every student's potential is
            nurtured to bloom. Where curiosity meets excellence, and every Where
            curiosity meets excellence, and every student's potential is
            nurtured to bloom. Where curiosity meets excellence, and every
            Where curiosity meets excellence, and every student's potential is
            nurtured to bloom. Where curiosity meets excellence, and every Where
            curiosity meets excellence, and every student's potential is
            nurtured to bloom. Where curiosity meets excellence, and every

          </p>
        </div>
        <ChartContainer
          config={schoolsChartConfig}
          className="mx-auto aspect-square w-full"

        >
          <PieChart height={400} width={400}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={schools}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={90}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </div>
    </section>
  );
};
