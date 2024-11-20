import Image from "next/image";
import {BannerAnimation} from "@/components/banner-animation";
import {PartnerCarousel} from "@/components/partner-carousel";
import {StatisticsStrip} from "@/components/statistics-strip";
import {AnnouncementsView} from "@/components/announcments-view";
import {type UpcomingEvent, UpcomingEvents,} from "@/components/upcoming-events";
import {getPaginatedResources} from "@/actions/resources";
import {SplineScene} from "@/components/spline-scene";
import {BannerCarousel} from "@/components/banner-carousel";

export default async () => {
  const resources = await getPaginatedResources();
  return (
    <section
      className={"scrollbar size-full overflow-y-auto overflow-x-hidden"}
    >
      <section className={"relative size-full"}>
        <Image
          src={"/images/background.jpg"}
          alt={"gradient"}
          fill
          className={"opacity-50"}
        />
        <div
          className={"absolute inset-0 "}
          style={{
            background: `
              radial-gradient(circle at bottom center, rgba(191, 219, 254, 0.8) 0%, rgba(244, 114, 182, 0.2) 70%, transparent 100%),
              repeating-linear-gradient(transparent, transparent 39px, rgba(0,0,0,0.2) 39px, rgba(0,0,0,0.2) 41px, transparent 41px),
              repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(0,0,0,0.2) 39px, rgba(0,0,0,0.2) 41px, transparent 41px)
            `,
            maskImage:
              "radial-gradient(circle at bottom center, black 0%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(circle at bottom center, black 0%, transparent 70%)",
          }}
        />
        <div
          className={
            "bg-gradient-to-b from-transparent to-white h-1/3 w-full absolute bottom-0 inset-x-0"
          }
        />

        <BannerAnimation
          titleComponent={
            <div className={"flex flex-col items-center"}>
              <h2 className="text-lg font-semibold text-primary">
                Shkolla profesionale me drejtim software:
              </h2>
              <h1 className="text-8xl -mt-2 font-semibold text-foreground font-header">
                Hermann Gmeiner
              </h1>
              <p className="text-sm text-gray-600">
                Where curiosity meets excellence, and every student's potential
                is nurtured to bloom. Where curiosity meets excellence, and
                every student's potential is nurtured to bloom. Where curiosity
                meets excellence, and every student's potential is nurtured to
                bloom. Where curiosity meets excellence, and every student's
                potential is nurtured to bloom.
              </p>
            </div>
          }
        >
          <BannerCarousel resources={resources.items} />
        </BannerAnimation>
      </section>
      <section
        className={
          "mt-96 py-[1.5px] bg-border flex flex-wrap gap-[1.5px] *:bg-background"
        }
      >
        <PartnerCarousel />
        <StatisticsStrip />
      </section>
      <AnnouncementsView />
      <section className={"relative size-full mt-24"}>
        <Image
          src={"/images/background.jpg"}
          alt={"gradient"}
          className={"size-full rotate-180 opacity-90"}
          width={1920}
          height={1080}
        />
        <div
          className={"absolute inset-0"}
          style={{
            background: `
              radial-gradient(circle at bottom center, rgba(191, 219, 254, 0.8) 0%, rgba(244, 114, 182, 0.2) 70%, transparent 100%),
              repeating-linear-gradient(transparent, transparent 39px, rgba(0,0,0,0.2) 39px, rgba(0,0,0,0.2) 41px, transparent 41px),
              repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(0,0,0,0.2) 39px, rgba(0,0,0,0.2) 41px, transparent 41px)
            `,
            maskImage:
              "radial-gradient(circle at bottom center, black 0%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(circle at bottom center, black 0%, transparent 70%)",
          }}
        />
        <SplineScene
          scene={"https://prod.spline.design/QlrATUcJYh6nKxUv/scene.splinecode"}
          fallback={"/images/globe.png"}
        />
        <div className={"absolute z-50 inset-x-0 bottom-16 px-24"}>
          <h4 className={"text-lg text-white text-shadow shadow-white/40 "}>
            Where curiosity meets excellence, and every student's potential is
          </h4>
          <h1
            className={
              "-ml-2.5 font-medium text-white text-shadow shadow-white/40 text-8xl font-header"
            }
          >
            Shkolla 'Hermann Gmeiner'
          </h1>
        </div>

        <div
          className={
            "bg-gradient-to-t  from-transparent to-white h-1/3 w-full absolute top-0 inset-x-0"
          }
        />
      </section>
      {/*<EventsCalendar />*/}
      <UpcomingEvents events={UPCOMING_EVENTS} />
    </section>
  );
};

const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    title: "Shkolla 'Hermann Gmeiner' e përfundimit",
    description:
      "Shkolla 'Hermann Gmeiner' është shkollë profesionale për TIK (Teknologji Informacioni dhe Komunikimi) e themeluar ne 2014. Programet e shkollës TIK “HERMANN GMEINER”, bazohen tek modeli dhe profili i shkollës austriake, në përgatitjen e programuesve në informatikë.",
    date: "2024-09-21T07:50:39.389Z",
    themes: ["Shkolla"],
  },
  {
    title: "Partneritetet tona me Industrinë",
    description:
      "Shkolla 'Hermann Gmeiner' është shkollë profesionale për TIK (Teknologji Informacioni dhe Komunikimi) e themeluar ne 2014. Programet e shkollës TIK “HERMANN GMEINER”, bazohen tek modeli dhe profili i shkollës austriake, në përgatitjen e programuesve në informatikë.",
    date: "2024-09-17T07:50:39.389Z",
    themes: ["Shkolla"],
  },
];
